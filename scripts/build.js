#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { build as esBuild } from 'esbuild';
import { litCssPlugin } from 'esbuild-plugin-lit-css';
import { singleFileBuild } from '@patternfly/pfe-tools/esbuild.js';
// BUG: https://github.com/asyncLiz/minify-html-literals/issues/37
// import { minifyHTMLLiteralsPlugin } from 'esbuild-plugin-minify-html-literals';

const external = [
  '@*',
  'prism*',
  'lit*',
  'tslib',
];

/** unary rtl function composition */
const compose1 = (...fns) => fns.reduce((f, g) => x => f(g(x)));
const toExportStatements = (acc = '', x) => `${acc}\nexport * from '${x}';`;
const stripExtension = x => x.replace(/\.\w+$/, '');
const eqeqeq = (x, y) => x === y;
const rel = x => new URL(x, import.meta.url);

export async function build(options) {
  const elements = await readdir(rel('../elements'));

  const conventionalEntryPoints = elements.map(x => `../elements/${x}/${x}.js`);

  const unconventionalEntrypoints = JSON.parse(await readFile(rel('./extra-entrypoints.json', 'utf8')));

  const cssEntryPoints = (await Promise.all(elements
    .flatMap(x => readdir(rel(`../elements/${x}`))
      .then(ys => ys.filter(z => z.endsWith('.css')))
      .then(ys => ys.map(z => fileURLToPath(rel(`../elements/${x}/${z}`))))
    ))).flat();

  const entryPoints = [...conventionalEntryPoints, ...unconventionalEntrypoints, ...cssEntryPoints]
    .map(compose1(fileURLToPath, rel))
    .sort();

  const additionalPackages = options?.additionalPackages ?? [];
  const componentsEntryPointContents =
    `${entryPoints.reduce(toExportStatements, '')}
${additionalPackages.reduce(toExportStatements, '')}`;

  const litCssOptions = {
    include: /elements\/rh-(.*)\/(.*)\.css$/,
    uglify: true,
  };

  await singleFileBuild({
    componentsEntryPointContents,
    outfile: options?.outfile ?? 'rhds.min.js',
    litCssOptions,
    allowOverwrite: true,
    external: options?.external ?? external,
    minify: false,
  });

  await esBuild({
    entryPoints,
    outdir: 'elements',
    outbase: 'elements',
    entryNames: '[dir]/[name]',
    allowOverwrite: true,
    // bundle: true,
    // external,
    format: 'esm',
    sourcemap: 'linked',
    minify: false,
    legalComments: 'linked',
    loader: {
      '.css': 'js',
    },
    plugins: [
      // BUG: https://github.com/asyncLiz/minify-html-literals/issues/37
      // minifyHTMLLiteralsPlugin(),
      litCssPlugin(litCssOptions),
    ],
  });
}

/** Was the module was run directly? */
const INVOKED_VIA_CLI = [process.argv[1], fileURLToPath(import.meta.url)]
  .map(stripExtension) // fun with functional programming
  .reduce(eqeqeq);

if (INVOKED_VIA_CLI) {
  await build();
}
