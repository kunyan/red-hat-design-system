document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"./demo.css\">\n<script type=\"module\" src=\"./rh-tooltip.js\"></script>\n\n<rh-context-provider color-palette=\"lightest\">\n  <h2>Light Theme!</h2>\n\n  <p>\n    <rh-tooltip position=\"left\">\n      <pfe-button>Left Tooltip</pfe-button>\n      <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n    </rh-tooltip>\n  </p>\n\n  <p>\n    <rh-tooltip position=\"right\">\n      <pfe-button>Right Tooltip</pfe-button>\n      <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n    </rh-tooltip>\n  </p>\n\n  <p>\n    <rh-tooltip position=\"top\">\n      <pfe-button>Top Tooltip</pfe-button>\n      <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n    </rh-tooltip>\n  </p>\n\n  <p>\n    <rh-tooltip position=\"bottom\">\n      <pfe-button>Bottom Tooltip</pfe-button>\n      <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n    </rh-tooltip>\n  </p>\n</rh-context-provider>\n\n<rh-context-provider color-palette=\"darkest\">\n  <h2>Dark Theme!</h2>\n\n  <p>\n    <rh-tooltip position=\"left\">\n      <pfe-button>Left Tooltip</pfe-button>\n      <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n    </rh-tooltip>\n  </p>\n\n  <p>\n    <rh-tooltip position=\"right\">\n      <pfe-button>Right Tooltip</pfe-button>\n      <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n    </rh-tooltip>\n  </p>\n\n  <p>\n    <rh-tooltip position=\"top\">\n      <pfe-button>Top Tooltip</pfe-button>\n      <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n    </rh-tooltip>\n  </p>\n\n  <p>\n    <rh-tooltip position=\"bottom\">\n      <pfe-button>Bottom Tooltip</pfe-button>\n      <span slot=\"content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n        labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices.</span>\n    </rh-tooltip>\n  </p>\n</rh-context-provider>\n",
      "label": "Tooltip"
    },
    "demo/rh-tooltip.js": {
      "content": "import '@patternfly/pfe-button';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\nimport '@rhds/elements/rh-tooltip/rh-tooltip.js';\n",
      "hidden": true
    },
    "demo/demo.css": {
      "content": "rh-context-provider {\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n",
      "hidden": true
    }
  }
};