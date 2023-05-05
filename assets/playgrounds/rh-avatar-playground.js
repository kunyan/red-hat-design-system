export const configure = project => project.config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<script type=\"module\" src=\"rh-avatar.js\"></script>\n\n  <section>\n    <h2>Default</h2>\n    <rh-avatar name=\"Omar Khayyam\" subtitle=\"Mathematician, Astronomer\"></rh-avatar>\n  </section>\n\n  <section>\n    <h2>Position Below</h2>\n    <rh-avatar name=\"Ada Lovelace\" subtitle=\"Computer Programmer\" layout=\"block\"></rh-avatar>\n  </section>\n\n  <section>\n    <h2>With link</h2>\n    <rh-avatar>George Boole\n      <span slot=\"subtitle\">Professor of Mathematics, </span>\n      <a slot=\"subtitle\" href=\"https://www.wikiwand.com/en/Queen's_College,_Cork\">Queen's College, Cork</a>\n    </rh-avatar>\n  </section>\n\n\n  <section>\n    <h2>Long Subtitle</h2>\n    <rh-avatar src=\"schoenfinkel.jpg\">Moses Schoenfinkle\n      <span slot=\"subtitle\">\n        Inventor of Combinatorics,\n        often uncreditted for inventing the process of \"currying\" functions,\n        however, \"schoenfinkling\" doesn't exactly roll off the tongue, so we'll\n        let it slide\n      </span>\n    </rh-avatar>\n  </section>\n\n\n  <section>\n    <h2>Squares pattern</h2>\n    <rh-avatar name=\"Alonzo Church\" subtitle=\"Inventor of the Lambda Calculus\" pattern=\"squares\"></rh-avatar>\n  </section>\n\n  <section>\n    <h2>Triangles pattern</h2>\n    <rh-avatar name=\"Alan Turing\" subtitle=\"Cryptographer\" pattern=\"triangles\"></rh-avatar>\n  </section>\n\n  <section>\n    <h2>Plain</h2>\n    <rh-avatar name=\"John von Neumann\" subtitle=\"Mathematician\" plain=\"\"></rh-avatar>\n    <rh-avatar name=\"Grace Hopper\" subtitle=\"Rear Admiral\" src=\"hopper.jpg\" plain=\"\"></rh-avatar>\n    <rh-avatar name=\"Haskell Curry\" subtitle=\"Computer Scientist\" pattern=\"squares\" plain=\"\"></rh-avatar>\n    <rh-avatar name=\"Edsger Dijkstra\" subtitle=\"Computer Scientist\" pattern=\"triangles\" plain=\"\"></rh-avatar>\n  </section>\n",
      "label": "Avatar"
    },
    "demo/demo.css": {
      "content": "section {\n  display: flex;\n  flex-flow: row wrap;\n  gap: var(--rh-space-lg, 16px);\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n\nh2 {\n  width: 100%;\n}\n\nrh-context-provider {\n  display: flex;\n  flex-flow: row wrap;\n  gap: var(--rh-space-lg, 16px);\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n  min-height: 100vh;\n}\n\nform {\n  width: 100%;\n}\n\nrh-context-provider section {\n  padding: 0;\n  position: relative;\n  width: max-content;\n  max-width: 364px;\n}\n",
      "hidden": true
    },
    "demo/rh-avatar.js": {
      "content": "import '@rhds/elements/rh-avatar/rh-avatar.js';\n\nconst root = document.querySelector('[data-demo=\"rh-avatar\"]')?.shadowRoot ?? document;\n\nroot.querySelector('rh-avatar');\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"../rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<script type=\"module\" src=\"rh-avatar.js\"></script>\n<script type=\"module\" src=\"color-context.js\"></script>\n\n<rh-context-provider id=\"context-provider\">\n  <form>\n    <h2>Color Context</h2>\n    <label for=\"context-range\">Color Palette</label>\n    <input id=\"context-range\" type=\"range\" list=\"palettes\" max=\"5\" name=\"range\" value=\"1\">\n    <datalist id=\"palettes\">\n      <option value=\"0\" label=\"darkest\"></option>\n      <option value=\"1\" label=\"darker\"></option>\n      <option value=\"2\" label=\"dark\"></option>\n      <option value=\"3\" label=\"light\"></option>\n      <option value=\"4\" label=\"lighter\"></option>\n      <option value=\"5\" label=\"lightest\"></option>\n    </datalist>\n  </form>\n\n  <section>\n    <h2>Default</h2>\n    <rh-avatar name=\"Omar Khayyam\" subtitle=\"Mathematician, Astronomer\"></rh-avatar>\n  </section>\n\n  <section>\n    <h2>Position Below</h2>\n    <rh-avatar name=\"Ada Lovelace\" subtitle=\"Computer Programmer\" layout=\"block\"></rh-avatar>\n  </section>\n\n  <section>\n    <h2>With link</h2>\n    <rh-avatar>George Boole\n      <span slot=\"subtitle\">Professor of Mathematics, </span>\n      <a slot=\"subtitle\" href=\"https://www.wikiwand.com/en/Queen's_College,_Cork\">Queen's College, Cork</a>\n    </rh-avatar>\n  </section>\n\n\n  <section>\n    <h2>Long Subtitle</h2>\n    <rh-avatar src=\"schoenfinkel.jpg\">Moses Schoenfinkle\n      <span slot=\"subtitle\">\n        Inventor of Combinatorics,\n        often uncreditted for inventing the process of \"currying\" functions,\n        however, \"schoenfinkling\" doesn't exactly roll off the tongue, so we'll\n        let it slide\n      </span>\n    </rh-avatar>\n  </section>\n\n\n  <section>\n    <h2>Squares pattern</h2>\n    <rh-avatar name=\"Alonzo Church\" subtitle=\"Inventor of the Lambda Calculus\" pattern=\"squares\"></rh-avatar>\n  </section>\n\n  <section>\n    <h2>Triangles pattern</h2>\n    <rh-avatar name=\"Alan Turing\" subtitle=\"Cryptographer\" pattern=\"triangles\"></rh-avatar>\n  </section>\n\n  <section>\n    <h2>Plain</h2>\n    <rh-avatar name=\"John von Neumann\" subtitle=\"Mathematician\" plain=\"\"></rh-avatar>\n    <rh-avatar name=\"Grace Hopper\" subtitle=\"Rear Admiral\" src=\"hopper.jpg\" plain=\"\"></rh-avatar>\n    <rh-avatar name=\"Haskell Curry\" subtitle=\"Computer Scientist\" pattern=\"squares\" plain=\"\"></rh-avatar>\n    <rh-avatar name=\"Edsger Dijkstra\" subtitle=\"Computer Scientist\" pattern=\"triangles\" plain=\"\"></rh-avatar>\n  </section>\n</rh-context-provider>\n",
      "label": "Color Context"
    },
    "demo/color-context/demo.css": {
      "content": "section {\n  display: flex;\n  flex-flow: row wrap;\n  gap: var(--rh-space-lg, 16px);\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n\nh2 {\n  width: 100%;\n}\n\nrh-context-provider {\n  display: flex;\n  flex-flow: row wrap;\n  gap: var(--rh-space-lg, 16px);\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n  min-height: 100vh;\n}\n\nform {\n  width: 100%;\n}\n\nrh-context-provider section {\n  padding: 0;\n  position: relative;\n  width: max-content;\n  max-width: 364px;\n}\n",
      "hidden": true
    },
    "demo/color-context/rh-avatar.js": {
      "content": "import '@rhds/elements/rh-avatar/rh-avatar.js';\n\nconst root = document.querySelector('[data-demo=\"rh-avatar\"]')?.shadowRoot ?? document;\n\nroot.querySelector('rh-avatar');\n",
      "hidden": true
    },
    "demo/color-context/color-context.js": {
      "content": "import '@rhds/elements/rh-context-provider/rh-context-provider.js';\n\nconst form = document.querySelector('form');\nconst provider = document.getElementById('context-provider');\n\nconst palettes = ['darkest', 'darker', 'dark', 'light', 'lighter', 'lightest'];\n\nform.addEventListener('input', sync);\n\nfunction sync() {\n  provider.setAttribute('color-palette', palettes[form.range.value]);\n}\n\nsync();\n",
      "hidden": true
    }
  }
};