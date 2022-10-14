document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\">\n<link rel=\"stylesheet\" href=\"../rh-pagination-lightdom.css\">\n<script type=\"module\" src=\"rh-pagination.js\"></script>\n\n<header><h2 slot=\"header\">Valid HTML</h2></header>\n\n<section>\n  <p>Paginators with 5 or fewer pages should not overflow, meaning all links should be visible.\n     Once a paginator has more than 5 pages, then it must overflow, meaning some links will be hidden.\n     Paginators with 9 or more pages will overflow on boths ends.</p>\n\n  <dl>\n    <dt>With 5 or fewer pages</dt>\n    <dd>No overflow</dd>\n    <dt>With more than 5 but fewer than 9 pages</dt>\n    <dd>Overflow on one side</dd>\n    <dt>With more than 9 pages, active page is less than 6</dt>\n    <dd>Overflow end</dd>\n    <dt>With more than 9 pages, active page is greater than 6</dt>\n    <dd>Overflow both</dd>\n    <dt>With more than 9 pages, active page is greater than 5 less than the total (e.g. 16/20)</dt>\n    <dd>Overflow start</dd>\n  </dl>\n\n  <pfe-button id=\"add\"><button>Add Page</button></pfe-button>\n  <pfe-button id=\"remove\" danger=\"\"><button>Remove Page</button></pfe-button>\n</section>\n\n<rh-pagination>\n  <ol>\n    <li><a href=\"#\">1</a></li>\n    <li><a href=\"#2\">2</a></li>\n    <li><a href=\"#3\">3</a></li>\n    <li><a href=\"#4\">4</a></li>\n    <li><a href=\"#5\">5</a></li>\n  </ol>\n</rh-pagination>\n",
      "label": "Pagination"
    },
    "demo/rh-pagination.js": {
      "content": "import '@rhds/elements/rh-pagination/rh-pagination.js';\n// TODO: rh-button\nimport '@patternfly/pfe-button';\n\nconst $ = s => document.querySelector(s);\nconst $$ = s => document.querySelectorAll(s);\n\nfor (const element of $$('rh-pagination')) {\n  element.addEventListener('click', event => {\n    const link = event.composedPath().find(x => x instanceof HTMLAnchorElement);\n    if (link) {\n      event.preventDefault();\n      history.pushState(null, link.innerText, link.href);\n      element.requestUpdate();\n    }\n  });\n}\n\n$('#add')?.addEventListener('click', function() {\n  const link = document.createElement('a');\n  const item = document.createElement('li');\n  item.append(link);\n  const i = $$('rh-pagination li').length + 1;\n  link.href = `#${i}`;\n  link.textContent = i;\n  $('rh-pagination ol').append(item);\n  $('rh-pagination').requestUpdate();\n});\n\n$('#remove')?.addEventListener('click', function() {\n  $('rh-pagination li:last-child')?.remove?.();\n});\n",
      "hidden": true
    },
    "demo/demo.css": {
      "content": "[data-demo] {\n  display: contents;\n}\n\nmain {\n  gap: var(--rh-space-2xl, 32px);\n}\n\nrh-pagination {\n  justify-self: center;\n}\n",
      "hidden": true
    },
    "rh-pagination-lightdom.css": {
      "content": "rh-pagination {\n  --_link-size: 50px;\n  --_border-color: #b8bbbe;\n  --_border-width: 0;\n  --_border-radius: 0;\n  --_border-accent-width: 0;\n}\n\nrh-pagination > ol {\n  list-style-type: none;\n  display: contents;\n}\n\nrh-pagination li {\n  display: contents;\n}\n\nrh-pagination li > a {\n  text-decoration: none;\n  color: var(--rh-color-text-primary-on-light, #151515);\n  font-weight: var(--rh-font-weight-body-text-medium, 500);\n  outline: none;\n  width: var(--_link-size);\n  height: var(--_link-size);\n  display: grid;\n  place-content: center;\n  background: var(--rh-color-surface-light, #f0f0f0);\n  box-sizing: border-box;\n}\n\nrh-pagination li a[aria-current=\"page\"] {\n  background: var(--rh-color-surface-lightest, #ffffff);\n  position: relative;\n\n  --_border-color: #b8bbbe;\n  --_border-width: 1px;\n  --_border-accent-color: var(--rh-color-interactive-blue, #0066cc);\n}\n\nrh-pagination li a {\n  border-radius: var(--_border-radius, 0);\n}\n\nrh-pagination li a:after {\n  display: var(--_border-display, none);\n  content: \"\";\n  position: absolute;\n  width: var(--_link-size);\n  height: var(--_link-size);\n  border-width: var(--_border-width);\n  border-style: solid;\n  border-color: var(--_border-color);\n  border-radius: var(--_border-radius);\n  border-block-start-color: var(--_border-accent-color, var(--_border-color));\n  border-block-start-width: var(--_border-accent-width);\n}\n\nrh-pagination li a:is(:focus, :focus-within, :focus-visible, :hover, [aria-current=\"page\"]) {\n  --_border-display: block;\n}\n\nrh-pagination li a:is(:focus, :focus-within, :focus-visible) {\n  --_border-radius: var(--rh-border-radius-default, 3px);\n  --_border-width: 2px;\n  --_border-color: var(--rh-pagination-accent-color, var(--rh-color-interactive-blue, #0066cc));\n  --_border-accent-width: 2px;\n}\n\nrh-pagination li a[aria-current=\"page\"]:is(:focus, :focus-within, :focus-visible) {\n  --_border-width: 2px;\n  --_border-color: var(--rh-color-interactive-blue, #0066cc);\n  --_border-accent-width: 3px;\n}\n\nrh-pagination li a:hover {\n  --_border-accent-color: var(--rh-color-black-600, #6a6e73);\n}\n\nrh-pagination li a:is([aria-current=\"page\"], :hover) {\n  --_border-accent-width: 3px;\n}\n\nrh-pagination li a[aria-current=\"page\"]:is(:focus, :focus-within, :focus-visible):after {\n  border-start-start-radius: 0;\n  border-start-end-radius: 0;\n}\n\nrh-pagination[overflow=\"start\"] li:nth-last-child(n+6):not(:first-child),\nrh-pagination[overflow=\"end\"] li:nth-child(n+6):not(:last-child),\nrh-pagination[overflow=\"both\"] li:nth-last-child(n+6):not(:first-child),\nrh-pagination[overflow=\"both\"] li:nth-child(n+6):not(:last-child) {\n  display: none;\n}\n\nrh-pagination[overflow=\"both\"] li:is(\n[data-page=\"current\"],\n[data-page=\"previous\"],\n[data-page=\"next\"]\n) {\n  display: contents !important;\n}\n\nrh-pagination:is([overflow=\"end\"], [overflow=\"both\"]) li:last-child,\nrh-pagination:is([overflow=\"start\"], [overflow=\"both\"]) li:first-child {\n  display: grid;\n  grid-template-columns: var(--_link-size) var(--_link-size);\n  gap: 4px;\n}\n\nrh-pagination:is([overflow=\"end\"], [overflow=\"both\"]) li:last-child:before,\nrh-pagination:is([overflow=\"start\"], [overflow=\"both\"]) li:first-child:after {\n  content: \"…\";\n  width: var(--_link-size);\n  height: var(--_link-size);\n  padding-inline-end: 4px;\n  display: flex;\n  align-items: center;\n  font-size: var(--rh-font-size-body-text-lg, 1.125rem);\n  color: var(--rh-color-black-500, #8a8d90);\n  justify-content: center;\n  background: white;\n  align-self: start;\n}\n",
      "hidden": true
    },
    "demo/many-pages/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<link rel=\"stylesheet\" href=\"../demo.css\">\n<link rel=\"stylesheet\" href=\"../../rh-pagination-lightdom.css\">\n<script type=\"module\" src=\"../rh-pagination.js\"></script>\n\n<header><h2 slot=\"header\">Many Pages</h2></header>\n\n<p>Paginators with many pages must overflow.</p>\n\n<rh-pagination id=\"many-pages\">\n  <ol>\n    <li><a href=\"#\">1</a></li>\n    <li><a href=\"#2\">2</a></li>\n    <li><a href=\"#3\">3</a></li>\n    <li><a href=\"#4\">4</a></li>\n    <li><a href=\"#5\">5</a></li>\n    <li><a href=\"#6\">6</a></li>\n    <li><a href=\"#7\">7</a></li>\n    <li><a href=\"#8\">8</a></li>\n    <li><a href=\"#9\">9</a></li>\n    <li><a href=\"#10\">10</a></li>\n    <li><a href=\"#11\">11</a></li>\n    <li><a href=\"#12\">12</a></li>\n    <li><a href=\"#13\">13</a></li>\n    <li><a href=\"#14\">14</a></li>\n    <li><a href=\"#15\">15</a></li>\n    <li><a href=\"#16\">16</a></li>\n    <li><a href=\"#17\">17</a></li>\n    <li><a href=\"#18\">18</a></li>\n    <li><a href=\"#19\">19</a></li>\n    <li><a href=\"#20\">20</a></li>\n  </ol>\n</rh-pagination>\n",
      "label": "Many Pages"
    },
    "demo.css": {
      "content": "[data-demo] {\n  display: contents;\n}\n\nmain {\n  gap: var(--rh-space-2xl, 32px);\n}\n\nrh-pagination {\n  justify-self: center;\n}\n",
      "hidden": true
    },
    "../rh-pagination-lightdom.css": {
      "content": "rh-pagination {\n  --_link-size: 50px;\n  --_border-color: #b8bbbe;\n  --_border-width: 0;\n  --_border-radius: 0;\n  --_border-accent-width: 0;\n}\n\nrh-pagination > ol {\n  list-style-type: none;\n  display: contents;\n}\n\nrh-pagination li {\n  display: contents;\n}\n\nrh-pagination li > a {\n  text-decoration: none;\n  color: var(--rh-color-text-primary-on-light, #151515);\n  font-weight: var(--rh-font-weight-body-text-medium, 500);\n  outline: none;\n  width: var(--_link-size);\n  height: var(--_link-size);\n  display: grid;\n  place-content: center;\n  background: var(--rh-color-surface-light, #f0f0f0);\n  box-sizing: border-box;\n}\n\nrh-pagination li a[aria-current=\"page\"] {\n  background: var(--rh-color-surface-lightest, #ffffff);\n  position: relative;\n\n  --_border-color: #b8bbbe;\n  --_border-width: 1px;\n  --_border-accent-color: var(--rh-color-interactive-blue, #0066cc);\n}\n\nrh-pagination li a {\n  border-radius: var(--_border-radius, 0);\n}\n\nrh-pagination li a:after {\n  display: var(--_border-display, none);\n  content: \"\";\n  position: absolute;\n  width: var(--_link-size);\n  height: var(--_link-size);\n  border-width: var(--_border-width);\n  border-style: solid;\n  border-color: var(--_border-color);\n  border-radius: var(--_border-radius);\n  border-block-start-color: var(--_border-accent-color, var(--_border-color));\n  border-block-start-width: var(--_border-accent-width);\n}\n\nrh-pagination li a:is(:focus, :focus-within, :focus-visible, :hover, [aria-current=\"page\"]) {\n  --_border-display: block;\n}\n\nrh-pagination li a:is(:focus, :focus-within, :focus-visible) {\n  --_border-radius: var(--rh-border-radius-default, 3px);\n  --_border-width: 2px;\n  --_border-color: var(--rh-pagination-accent-color, var(--rh-color-interactive-blue, #0066cc));\n  --_border-accent-width: 2px;\n}\n\nrh-pagination li a[aria-current=\"page\"]:is(:focus, :focus-within, :focus-visible) {\n  --_border-width: 2px;\n  --_border-color: var(--rh-color-interactive-blue, #0066cc);\n  --_border-accent-width: 3px;\n}\n\nrh-pagination li a:hover {\n  --_border-accent-color: var(--rh-color-black-600, #6a6e73);\n}\n\nrh-pagination li a:is([aria-current=\"page\"], :hover) {\n  --_border-accent-width: 3px;\n}\n\nrh-pagination li a[aria-current=\"page\"]:is(:focus, :focus-within, :focus-visible):after {\n  border-start-start-radius: 0;\n  border-start-end-radius: 0;\n}\n\nrh-pagination[overflow=\"start\"] li:nth-last-child(n+6):not(:first-child),\nrh-pagination[overflow=\"end\"] li:nth-child(n+6):not(:last-child),\nrh-pagination[overflow=\"both\"] li:nth-last-child(n+6):not(:first-child),\nrh-pagination[overflow=\"both\"] li:nth-child(n+6):not(:last-child) {\n  display: none;\n}\n\nrh-pagination[overflow=\"both\"] li:is(\n[data-page=\"current\"],\n[data-page=\"previous\"],\n[data-page=\"next\"]\n) {\n  display: contents !important;\n}\n\nrh-pagination:is([overflow=\"end\"], [overflow=\"both\"]) li:last-child,\nrh-pagination:is([overflow=\"start\"], [overflow=\"both\"]) li:first-child {\n  display: grid;\n  grid-template-columns: var(--_link-size) var(--_link-size);\n  gap: 4px;\n}\n\nrh-pagination:is([overflow=\"end\"], [overflow=\"both\"]) li:last-child:before,\nrh-pagination:is([overflow=\"start\"], [overflow=\"both\"]) li:first-child:after {\n  content: \"…\";\n  width: var(--_link-size);\n  height: var(--_link-size);\n  padding-inline-end: 4px;\n  display: flex;\n  align-items: center;\n  font-size: var(--rh-font-size-body-text-lg, 1.125rem);\n  color: var(--rh-color-black-500, #8a8d90);\n  justify-content: center;\n  background: white;\n  align-self: start;\n}\n",
      "hidden": true
    }
  }
};