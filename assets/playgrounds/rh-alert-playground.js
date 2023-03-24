document.currentScript.closest('playground-project').config = {
  "files": {
    "demo/index.html": {
      "contentType": "text/html",
      "selected": true,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\">\n<script type=\"module\" src=\"rh-alert.js\"></script>\n\n<rh-context-provider color-palette=\"lightest\">\n  <h2>Alert</h2>\n\n  <rh-alert state=\"default\">\n   <h3 slot=\"header\">Default</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"info\">\n    <h3 slot=\"header\">Info</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"success\">\n    <h3 slot=\"header\">Success</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"warning\">\n    <h3 slot=\"header\">Warning</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"danger\">\n    <h3 slot=\"header\">Danger</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n</rh-context-provider>\n\n<rh-context-provider color-palette=\"lightest\">\n  <h2>Inline Variant</h2>\n\n  <rh-alert variant=\"\">\n    <h3 slot=\"header\">Default</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"info\" variant=\"\">\n    <h3 slot=\"header\">Info</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"success\" variant=\"\">\n    <h3 slot=\"header\">Success</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"warning\" variant=\"\">\n    <h3 slot=\"header\">Warning</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"danger\" variant=\"\">\n    <h3 slot=\"header\">Danger</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n</rh-context-provider>\n\n<rh-context-provider color-palette=\"lightest\">\n  <h2 slot=\"header\">Toast</h2>\n  <rh-alert toast=\"\">\n    <h3 slot=\"header\">Default</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"info\" toast=\"\">\n    <h3 slot=\"header\">Info</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"success\" toast=\"\">\n    <h3 slot=\"header\">Success</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"warning\" toast=\"\">\n    <h3 slot=\"header\">Warning</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert state=\"danger\" toast=\"\">\n    <h3 slot=\"header\">Danger</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n</rh-context-provider>\n\n<rh-context-provider color-palette=\"lightest\">\n  <h2 slot=\"header\">Dismissable</h2>\n  <rh-alert dismissable=\"\">\n    <h3 slot=\"header\">Default dismissable</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert variant=\"\" dismissable=\"\">\n    <h3 slot=\"header\">Inline dismissable</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert toast=\"\" dismissable=\"\">\n    <h3 slot=\"header\">Toast dismissable</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n\n  <rh-alert dismissable=\"\" prevent-default=\"\">\n    <h3 slot=\"header\">Dismissiable With Prevent Default</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est\n      egestas, a sollicitudin mauris tincidunt.</p>\n    <button slot=\"actions\" data-action=\"dismiss\">Dismiss</button>\n    <button slot=\"actions\" data-action=\"confirm\">Confirm</button>\n  </rh-alert>\n</rh-context-provider>\n",
      "label": "Alert"
    },
    "demo/demo.css": {
      "content": "h2 {\n  grid-column: 1/-1;\n}\n\nrh-context-provider {\n  padding: var(--rh-space-xl, 24px) var(--rh-space-4xl, 64px);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, max(40vh, 40%)));\n  gap: var(--rh-space-lg, 16px);\n}\n",
      "hidden": true
    },
    "demo/rh-alert.js": {
      "content": "import '@rhds/elements/rh-context-provider/rh-context-provider.js';\nimport '@rhds/elements/rh-alert/rh-alert.js';\n\nconst dismissiableAlerts = document.querySelectorAll('rh-alert[dismissable]:not([prevent-default])');\nconst preventDefaultAlerts = document.querySelectorAll('rh-alert[prevent-default]');\n\ndismissiableAlerts.forEach(alert => {\n  // eslint-disable-next-line no-console\n  alert.addEventListener('close', () => console.log('close'));\n});\n\npreventDefaultAlerts.forEach(alert => {\n  alert.addEventListener('close', evt => {\n    evt.preventDefault();\n    // eslint-disable-next-line no-console\n    console.log('default prevented');\n  });\n});\n",
      "hidden": true
    }
  }
};