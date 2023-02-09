document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\">\n<script type=\"module\" src=\"rh-context-provider.js\"></script>\n\n<rh-context-provider color-palette=\"lightest\">\n  <h2>Lightest</h2>\n  <p>Here are some components that should be aware of their context:</p>\n\n  <rh-cta>Hello World</rh-cta>\n  <rh-spinner size=\"sm\"></rh-spinner>\n  <rh-blockquote align=\"center\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n  <rh-stat>\n    <svg slot=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\">\n      <path d=\"M17.37 8v10a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm7 0v7a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm-14 0v12a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0ZM31 17.89a.63.63 0 0 0-.63.62v11.87H5.62v-2.93a.63.63 0 0 0-1.25 0V31a.63.63 0 0 0 .63.62h26a.62.62 0 0 0 .62-.62V18.51a.62.62 0 0 0-.62-.62Z\" />\n      <path d=\"M5 21a.63.63 0 0 0 .62-.63V5.62h24.75V9a.63.63 0 0 0 1.25 0V5a.62.62 0 0 0-.62-.62H5a.63.63 0 0 0-.63.62v15.36A.63.63 0 0 0 5 21Zm27.35-9.24a.62.62 0 0 0-.87.17C28.73 16 21.5 22.93 4 23.27a.63.63 0 0 0 0 1.25c18.07-.34 25.64-7.61 28.52-11.9a.62.62 0 0 0-.17-.86Z\" />\n    </svg>\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</rh-context-provider>\n\n<rh-context-provider color-palette=\"lighter\">\n  <h2>Lighter</h2>\n  <p>Here are some components that should be aware of their context:</p>\n\n  <rh-cta>Hello World</rh-cta>\n  <rh-spinner size=\"sm\"></rh-spinner>\n  <rh-blockquote align=\"center\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n  <rh-stat>\n    <svg slot=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\">\n      <path d=\"M17.37 8v10a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm7 0v7a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm-14 0v12a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0ZM31 17.89a.63.63 0 0 0-.63.62v11.87H5.62v-2.93a.63.63 0 0 0-1.25 0V31a.63.63 0 0 0 .63.62h26a.62.62 0 0 0 .62-.62V18.51a.62.62 0 0 0-.62-.62Z\" />\n      <path d=\"M5 21a.63.63 0 0 0 .62-.63V5.62h24.75V9a.63.63 0 0 0 1.25 0V5a.62.62 0 0 0-.62-.62H5a.63.63 0 0 0-.63.62v15.36A.63.63 0 0 0 5 21Zm27.35-9.24a.62.62 0 0 0-.87.17C28.73 16 21.5 22.93 4 23.27a.63.63 0 0 0 0 1.25c18.07-.34 25.64-7.61 28.52-11.9a.62.62 0 0 0-.17-.86Z\" />\n    </svg>\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</rh-context-provider>\n\n<rh-context-provider color-palette=\"light\">\n  <h2>Light</h2>\n  <p>Here are some components that should be aware of their context:</p>\n\n  <rh-cta>Hello World</rh-cta>\n  <rh-spinner size=\"sm\"></rh-spinner>\n  <rh-blockquote align=\"center\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n  <rh-stat>\n    <svg slot=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\">\n      <path d=\"M17.37 8v10a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm7 0v7a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm-14 0v12a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0ZM31 17.89a.63.63 0 0 0-.63.62v11.87H5.62v-2.93a.63.63 0 0 0-1.25 0V31a.63.63 0 0 0 .63.62h26a.62.62 0 0 0 .62-.62V18.51a.62.62 0 0 0-.62-.62Z\" />\n      <path d=\"M5 21a.63.63 0 0 0 .62-.63V5.62h24.75V9a.63.63 0 0 0 1.25 0V5a.62.62 0 0 0-.62-.62H5a.63.63 0 0 0-.63.62v15.36A.63.63 0 0 0 5 21Zm27.35-9.24a.62.62 0 0 0-.87.17C28.73 16 21.5 22.93 4 23.27a.63.63 0 0 0 0 1.25c18.07-.34 25.64-7.61 28.52-11.9a.62.62 0 0 0-.17-.86Z\" />\n    </svg>\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</rh-context-provider>\n\n<rh-context-provider color-palette=\"dark\">\n  <h2>Dark</h2>\n  <p>Here are some components that should be aware of their context:</p>\n\n  <rh-cta>Hello World</rh-cta>\n  <rh-spinner size=\"sm\"></rh-spinner>\n  <rh-blockquote align=\"center\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n  <rh-stat>\n    <svg slot=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\">\n      <path d=\"M17.37 8v10a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm7 0v7a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm-14 0v12a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0ZM31 17.89a.63.63 0 0 0-.63.62v11.87H5.62v-2.93a.63.63 0 0 0-1.25 0V31a.63.63 0 0 0 .63.62h26a.62.62 0 0 0 .62-.62V18.51a.62.62 0 0 0-.62-.62Z\" />\n      <path d=\"M5 21a.63.63 0 0 0 .62-.63V5.62h24.75V9a.63.63 0 0 0 1.25 0V5a.62.62 0 0 0-.62-.62H5a.63.63 0 0 0-.63.62v15.36A.63.63 0 0 0 5 21Zm27.35-9.24a.62.62 0 0 0-.87.17C28.73 16 21.5 22.93 4 23.27a.63.63 0 0 0 0 1.25c18.07-.34 25.64-7.61 28.52-11.9a.62.62 0 0 0-.17-.86Z\" />\n    </svg>\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</rh-context-provider>\n\n<rh-context-provider color-palette=\"darker\">\n  <h2>Darker</h2>\n  <p>Here are some components that should be aware of their context:</p>\n\n  <rh-cta>Hello World</rh-cta>\n  <rh-spinner size=\"sm\"></rh-spinner>\n  <rh-blockquote align=\"center\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n  <rh-stat>\n    <svg slot=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\">\n      <path d=\"M17.37 8v10a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm7 0v7a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm-14 0v12a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0ZM31 17.89a.63.63 0 0 0-.63.62v11.87H5.62v-2.93a.63.63 0 0 0-1.25 0V31a.63.63 0 0 0 .63.62h26a.62.62 0 0 0 .62-.62V18.51a.62.62 0 0 0-.62-.62Z\" />\n      <path d=\"M5 21a.63.63 0 0 0 .62-.63V5.62h24.75V9a.63.63 0 0 0 1.25 0V5a.62.62 0 0 0-.62-.62H5a.63.63 0 0 0-.63.62v15.36A.63.63 0 0 0 5 21Zm27.35-9.24a.62.62 0 0 0-.87.17C28.73 16 21.5 22.93 4 23.27a.63.63 0 0 0 0 1.25c18.07-.34 25.64-7.61 28.52-11.9a.62.62 0 0 0-.17-.86Z\" />\n    </svg>\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</rh-context-provider>\n\n<rh-context-provider color-palette=\"darkest\">\n  <h2>Darkest</h2>\n  <p>Here are some components that should be aware of their context:</p>\n\n  <rh-cta>Hello World</rh-cta>\n  <rh-spinner size=\"sm\"></rh-spinner>\n  <rh-blockquote align=\"center\">\n    <p>In open source, we feel strongly that to really do something well, you have to get a lot of people involved.</p>\n    <span slot=\"author\">Linus Torvalds</span>\n    <span slot=\"title\">Software Engineer</span>\n  </rh-blockquote>\n  <rh-stat>\n    <svg slot=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\">\n      <path d=\"M17.37 8v10a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm7 0v7a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0Zm-14 0v12a.63.63 0 0 0 1.25 0V8a.63.63 0 0 0-1.25 0ZM31 17.89a.63.63 0 0 0-.63.62v11.87H5.62v-2.93a.63.63 0 0 0-1.25 0V31a.63.63 0 0 0 .63.62h26a.62.62 0 0 0 .62-.62V18.51a.62.62 0 0 0-.62-.62Z\" />\n      <path d=\"M5 21a.63.63 0 0 0 .62-.63V5.62h24.75V9a.63.63 0 0 0 1.25 0V5a.62.62 0 0 0-.62-.62H5a.63.63 0 0 0-.63.62v15.36A.63.63 0 0 0 5 21Zm27.35-9.24a.62.62 0 0 0-.87.17C28.73 16 21.5 22.93 4 23.27a.63.63 0 0 0 0 1.25c18.07-.34 25.64-7.61 28.52-11.9a.62.62 0 0 0-.17-.86Z\" />\n    </svg>\n    <span slot=\"statistic\">Statistic Placeholder</span>\n    <span>Description Placeholder</span>\n  </rh-stat>\n</rh-context-provider>\n\n",
      "label": "Context Provider"
    },
    "demo/rh-context-provider.js": {
      "content": "import '@rhds/elements/rh-context-provider/rh-context-provider.js';\nimport '@rhds/elements/rh-blockquote/rh-blockquote.js';\nimport '@rhds/elements/rh-cta/rh-cta.js';\nimport '@rhds/elements/rh-spinner/rh-spinner.js';\nimport '@rhds/elements/rh-stat/rh-stat.js';\n\n",
      "hidden": true
    },
    "demo/demo.css": {
      "content": "rh-context-provider {\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n",
      "hidden": true
    },
    "demo/nested-contexts/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<script type=\"module\" src=\"../nested-contexts.js\"></script>\n<link rel=\"stylesheet\" href=\"../demo.css\">\n\n<h3>Nested Contexts</h3>\n\n<p>When GP is initialized to <code>darkest</code>,\n  and P is initialized to <code>lightest</code>,\n  C should be on <code>light</code>.</p>\n<p>THEN, setting GP to <code>darker</code>,\n  C should <em>still</em> be on <code>light</code>.</p>\n\n<rh-context-provider id=\"gp\" color-palette=\"darkest\">\n  <p>Grandparent</p>\n  <test-context-consumer></test-context-consumer>\n  <rh-context-provider id=\"p\" color-palette=\"lightest\">\n    <p>Parent</p>\n    <test-context-consumer id=\"c\"></test-context-consumer>\n  </rh-context-provider>\n</rh-context-provider>\n\n<form id=\"nestedForm\">\n  <label>Grandparent <select onchange=\"gp.colorPalette=this.value||undefined\">\n    <option value=\"\">none</option>\n    <option>lightest</option>\n    <option>lighter</option>\n    <option>light</option>\n    <option>dark</option>\n    <option>darker</option>\n    <option selected>darkest</option>\n  </select></label>\n\n  <br>\n\n  <label>Parent <select onchange=\"p.colorPalette=this.value||undefined\">\n    <option value=\"\">none</option>\n    <option selected>lightest</option>\n    <option>lighter</option>\n    <option>light</option>\n    <option>dark</option>\n    <option>darker</option>\n    <option>darkest</option>\n  </select></label>\n</form>\n",
      "label": "Nested Contexts"
    },
    "demo/nested-contexts.js": {
      "content": "import '@rhds/elements/rh-context-provider/rh-context-provider.js';\n\nimport { ColorContextConsumer } from '../../../lib/context/consumer.js';\n\nimport { LitElement, html } from 'lit';\n\ncustomElements.define('test-context-consumer', class ContextConsumer extends LitElement {\n  consumer = new ColorContextConsumer(this);\n\n  on = this.consumer.value;\n\n  render() {\n    return html`\n      <div>\n        <p>Child on: ${this.on}</p>\n      </div>\n    `;\n  }\n\n  willUpdate() {\n    this.on = this.consumer.value;\n  }\n});\n\ndocument.getElementById('nestedForm').reset();\n",
      "hidden": true
    },
    "demo.css": {
      "content": "rh-context-provider {\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n}\n",
      "hidden": true
    }
  }
};