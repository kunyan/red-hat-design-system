document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/rhds-demo-base.css": {
      "contentType": "text/css",
      "content": "html,\nbody {\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--rh-font-family-body-text, RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n  line-height: var(--rh-line-height-body-text, 1.5);\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: var(--rh-font-weight-heading-medium, 500);\n  font-family: var(--rh-font-family-heading, RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Overpass, Helvetica, Arial, sans-serif, \"Overpass\", Overpass, Helvetica, Arial, sans-serif);\n}\n",
      "hidden": true
    },
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<script type=\"module\" src=\"rh-stat.js\"></script>\n\n<section>\n  <h2>Bare Bones</h2>\n  <rh-stat>\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</section>\n\n<section>\n  <h2>Large</h2>\n  <rh-stat size=\"large\">\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</section>\n\n<section>\n  <h2>Icon Attribute</h2>\n  <rh-stat icon=\"code\" icon-set=\"fas\">\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</section>\n\n<section>\n  <h2>Icon Slot</h2>\n  <rh-stat>\n    <pf-icon icon=\"code\" set=\"fas\" slot=\"icon\"></pf-icon>\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</section>\n\n<section>\n  <h2>SVG in Icon Slot</h2>\n  <rh-stat>\n    <svg slot=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\">\n      <path d=\"M17.37 8v10a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm7 0v7a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm-14 0v12a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0ZM31 17.89a.63.63 0 0 0-.63.62v11.87H5.62v-2.93a.63.63 0 0 0-1.25 0V31a.63.63 0 0 0 .63.62h26a.62.62 0 0 0 .62-.62V18.51a.62.62 0 0 0-.62-.62Z\" />\n      <path d=\"M5 21a.63.63 0 0 0 .62-.63V5.62h24.75V9a.63.63 0 0 0 1.25 0V5a.62.62 0 0 0-.62-.62H5a.63.63 0 0 0-.63.62v15.36A.63.63 0 0 0 5 21Zm27.35-9.24a.62.62 0 0 0-.87.17C28.73 16 21.5 22.93 4 23.27a.63.63 0 0 0 0 1.25c18.07-.34 25.64-7.61 28.52-11.9a.62.62 0 0 0-.17-.86Z\" />\n    </svg>\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</section>\n\n<section>\n  <h2>Overwrite Slots</h2>\n  <rh-stat top=\"statistic\">\n    <pf-icon slot=\"icon\" icon=\"code\" set=\"fas\"></pf-icon>\n    <span slot=\"title\">Overwrite Title</span>\n    <p>Stat body that includes two lines and a footnote.</p>\n    <span slot=\"statistic\">Overwrite Statistic</span>\n  </rh-stat>\n</section>\n\n<rh-context-provider color-palette=\"darkest\">\n  <h2>Dark Theme</h2>\n\n  <section>\n    <h3>Bare Bones</h3>\n    <rh-stat>\n      <span slot=\"statistic\">Statistic Placeholder</span>\n      <span>Description Placeholder</span>\n    </rh-stat>\n  </section>\n\n  <section>\n    <h3>Large</h3>\n\n    <rh-stat size=\"large\">\n      <span slot=\"statistic\">Statistic Placeholder</span>\n      <span>Description Placeholder</span>\n    </rh-stat>\n  </section>\n\n  <section>\n    <h3>Icon Attribute</h3>\n    <rh-stat icon=\"code\" icon-set=\"fas\">\n      <span slot=\"statistic\">Statistic Placeholder</span>\n      <span>Description Placeholder</span>\n    </rh-stat>\n  </section>\n\n  <section>\n    <h3>Icon Slot</h3>\n    <rh-stat>\n      <pf-icon icon=\"code\" set=\"fas\" slot=\"icon\"></pf-icon>\n      <span slot=\"statistic\">Statistic Placeholder</span>\n      <span>Description Placeholder</span>\n    </rh-stat>\n  </section>\n\n  <section>\n    <h3>Overwrite Slots</h3>\n\n    <rh-stat top=\"statistic\">\n      <pf-icon slot=\"icon\" icon=\"code\" set=\"fas\"></pf-icon>\n      <span slot=\"title\">Overwrite Title</span>\n      <p>Stat body that includes two lines and a footnote.</p>\n      <span slot=\"statistic\">Overwrite Statistic</span>\n    </rh-stat>\n  </section>\n\n  <section>\n    <h3>SVG in Icon Slot</h3>\n\n    <rh-stat>\n      <svg slot=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\">\n        <path d=\"M17.37 8v10a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm7 0v7a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm-14 0v12a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0ZM31 17.89a.63.63 0 0 0-.63.62v11.87H5.62v-2.93a.63.63 0 0 0-1.25 0V31a.63.63 0 0 0 .63.62h26a.62.62 0 0 0 .62-.62V18.51a.62.62 0 0 0-.62-.62Z\" />\n        <path d=\"M5 21a.63.63 0 0 0 .62-.63V5.62h24.75V9a.63.63 0 0 0 1.25 0V5a.62.62 0 0 0-.62-.62H5a.63.63 0 0 0-.63.62v15.36A.63.63 0 0 0 5 21Zm27.35-9.24a.62.62 0 0 0-.87.17C28.73 16 21.5 22.93 4 23.27a.63.63 0 0 0 0 1.25c18.07-.34 25.64-7.61 28.52-11.9a.62.62 0 0 0-.17-.86Z\" />\n      </svg>\n      <span slot=\"statistic\">Statistic Placeholder</span>\n      <span>Description Placeholder</span>\n    </rh-stat>\n  </section>\n</rh-context-provider>\n",
      "label": "Statistic"
    },
    "demo/demo.css": {
      "content": "section,\nrh-context-provider {\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n",
      "hidden": true
    },
    "demo/rh-stat.js": {
      "content": "import '@patternfly/elements/pf-icon/pf-icon.js';\nimport '@rhds/elements/rh-stat/rh-stat.js';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\n",
      "hidden": true
    }
  }
};