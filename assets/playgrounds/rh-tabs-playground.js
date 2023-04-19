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
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<script type=\"module\" src=\"rh-tabs.js\"></script>\n\n<form>\n  <fieldset>\n    <legend>Theme</legend>\n    <label><input type=\"radio\" name=\"theme\" value=\"default\" checked> Default</label>\n    <label><input type=\"radio\" name=\"theme\" value=\"base\"> Base</label>\n  </fieldset>\n\n  <fieldset>\n    <legend>Box Variant</legend>\n    <label><input type=\"radio\" name=\"variant\" value=\"default\" checked> Default</label>\n    <label><input type=\"radio\" name=\"variant\" value=\"box\"> Box</label>\n  </fieldset>\n</form>\n\n<section>\n  <h2>Default</h2>\n  <rh-tabs>\n    <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n    <rh-tab-panel>Users</rh-tab-panel>\n    <rh-tab slot=\"tab\">Containers</rh-tab>\n    <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n    <rh-tab slot=\"tab\">Database</rh-tab>\n    <rh-tab-panel>Database</rh-tab-panel>\n    <rh-tab slot=\"tab\">Servers</rh-tab>\n    <rh-tab-panel>Servers</rh-tab-panel>\n    <rh-tab slot=\"tab\">Cloud</rh-tab>\n    <rh-tab-panel>Cloud</rh-tab-panel>\n  </rh-tabs>\n\n  <h2>Centered</h2>\n  <rh-tabs centered=\"\">\n    <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n    <rh-tab-panel>Users</rh-tab-panel>\n    <rh-tab slot=\"tab\">Containers</rh-tab>\n    <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n    <rh-tab slot=\"tab\">Database</rh-tab>\n    <rh-tab-panel>Database</rh-tab-panel>\n    <rh-tab slot=\"tab\">Servers</rh-tab>\n    <rh-tab-panel>Servers</rh-tab-panel>\n    <rh-tab slot=\"tab\">Cloud</rh-tab>\n    <rh-tab-panel>Cloud</rh-tab-panel>\n  </rh-tabs>\n\n  <h2>Vertical</h2>\n  <rh-tabs vertical=\"\">\n    <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n    <rh-tab-panel>Users</rh-tab-panel>\n    <rh-tab slot=\"tab\">Containers</rh-tab>\n    <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n    <rh-tab slot=\"tab\">Database</rh-tab>\n    <rh-tab-panel>Database</rh-tab-panel>\n    <rh-tab slot=\"tab\">Servers</rh-tab>\n    <rh-tab-panel>Servers</rh-tab-panel>\n    <rh-tab slot=\"tab\">Cloud</rh-tab>\n    <rh-tab-panel>Cloud</rh-tab-panel>\n  </rh-tabs>\n</section>\n\n<section>\n  <h2>Box Inset</h2>\n  <rh-tabs box=\"inset\" id=\"inset\">\n    <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n    <rh-tab-panel>Users</rh-tab-panel>\n    <rh-tab slot=\"tab\">Containers</rh-tab>\n    <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n    <rh-tab slot=\"tab\">Database</rh-tab>\n    <rh-tab-panel>Database</rh-tab-panel>\n    <rh-tab slot=\"tab\">Servers</rh-tab>\n    <rh-tab-panel>Servers</rh-tab-panel>\n    <rh-tab slot=\"tab\">Cloud</rh-tab>\n    <rh-tab-panel>Cloud</rh-tab-panel>\n  </rh-tabs>\n</section>\n\n<section>\n  <h2>Icons and text</h2>\n  <rh-tabs>\n    <rh-tab slot=\"tab\"> Users          <pf-icon slot=\"icon\" icon=\"users\" set=\"fas\" size=\"sm\"></pf-icon></rh-tab>\n    <rh-tab-panel>Users</rh-tab-panel>\n    <rh-tab slot=\"tab\"> Containers     <pf-icon slot=\"icon\" icon=\"box-open\" set=\"fas\" size=\"sm\"></pf-icon></rh-tab>\n    <rh-tab-panel>Containers</rh-tab-panel>\n    <rh-tab slot=\"tab\"> Database       <pf-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pf-icon></rh-tab>\n    <rh-tab-panel>Database</rh-tab-panel>\n    <rh-tab slot=\"tab\"> Server         <pf-icon slot=\"icon\" icon=\"server\" set=\"fas\" size=\"sm\"></pf-icon></rh-tab>\n    <rh-tab-panel>Server</rh-tab-panel>\n    <rh-tab slot=\"tab\"> System         <pf-icon slot=\"icon\" icon=\"laptop\" set=\"fas\" size=\"sm\"></pf-icon></rh-tab>\n    <rh-tab-panel>System</rh-tab-panel>\n  </rh-tabs>\n</section>\n\n<section>\n  <rh-tabs vertical=\"\">\n    <rh-tab slot=\"tab\"> Users          <pf-icon slot=\"icon\" icon=\"users\" set=\"fas\" size=\"sm\"></pf-icon></rh-tab>\n    <rh-tab-panel>Users</rh-tab-panel>\n    <rh-tab slot=\"tab\"> Containers     <pf-icon slot=\"icon\" icon=\"box-open\" set=\"fas\" size=\"sm\"></pf-icon></rh-tab>\n    <rh-tab-panel>Containers</rh-tab-panel>\n    <rh-tab slot=\"tab\"> Database       <pf-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pf-icon></rh-tab>\n    <rh-tab-panel>Database</rh-tab-panel>\n    <rh-tab slot=\"tab\"> Server         <pf-icon slot=\"icon\" icon=\"server\" set=\"fas\" size=\"sm\"></pf-icon></rh-tab>\n    <rh-tab-panel>Server</rh-tab-panel>\n    <rh-tab slot=\"tab\"> System         <pf-icon slot=\"icon\" icon=\"laptop\" set=\"fas\" size=\"sm\"></pf-icon></rh-tab>\n    <rh-tab-panel>System</rh-tab-panel>\n  </rh-tabs>\n</section>\n",
      "label": "Tabs"
    },
    "demo/demo.css": {
      "content": "body {\n  color: var(--rh-color-text-primary-on-light, #151515);\n  background-color: var(--rh-color-surface-lightest, #ffffff);\n}\n\nbody.dark {\n  color: var(--rh-color-text-primary-on-dark, #ffffff);\n  background-color: var(--rh-color-surface-darkest, #151515);\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\nsection {\n  padding: 16px;\n}\n\n[data-demo] {\n  display: contents;\n}\n\nlabel {\n  display: block;\n}\n\nform h2 {\n  width: 100%;\n}\n\nform output {\n  text-transform: capitalize;\n}\n\ndatalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  writing-mode: vertical-lr;\n}\n\ndatalist,\ninput {\n  width: 200px;\n}\n\noption {\n  padding: 0;\n}\n\na {\n  color: var(--rh-color-interactive-blue-darker, #0066cc);\n}\n\na:hover {\n  color: var(--rh-color-interactive-blue-darkest, #004080);\n}\n\na:visited {\n  color: var(--rh-color-interactive-purple-darker, #6753ac);\n}\n\n.dark a {\n  color: var(--rh-color-interactive-blue-lighter, #73bcf7);\n}\n\n.dark a:hover {\n  color: var(--rh-color-interactive-blue-lightest, #bee1f4);\n}\n\n.dark a:visited {\n  color: var(--rh-color-interactive-purple-lighter, #a18fff);\n}\n\n",
      "hidden": true
    },
    "demo/rh-tabs.js": {
      "content": "import '@rhds/elements/rh-tabs/rh-tabs.js';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\n\nimport '@patternfly/elements/pf-icon/pf-icon.js';\n\nconst tabs = document.querySelectorAll('rh-tabs');\nconst inset = document.querySelector('#inset');\n\nfunction variantToggle() {\n  tabs.forEach(t => {\n    if (t === inset) {\n      return;\n    }\n    t.toggleAttribute('box');\n  });\n}\n\n\nfunction themeToggle(event) {\n  tabs.forEach(t => {\n    if (event.target.value === 'base') {\n      t.setAttribute('theme', event.target.value);\n    } else {\n      t.removeAttribute('theme');\n    }\n  });\n}\n\nfunction insetToggle(event) {\n  inset.inset = event.target.value;\n}\n\nfor (const input of document.querySelectorAll('input[name=\"variant\"]')) {\n  input.addEventListener('change', variantToggle);\n}\n\nfor (const input of document.querySelectorAll('input[name=\"theme\"]')) {\n  input.addEventListener('change', themeToggle);\n}\n\nfor (const input of document.querySelectorAll('input[name=\"inset\"]')) {\n  input.addEventListener('change', insetToggle);\n}\n",
      "hidden": true
    },
    "demo/color-context/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"../rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<script type=\"module\" src=\"rh-tabs.js\"></script>\n<script type=\"module\" src=\"color-context.js\"></script>\n\n<rh-context-provider id=\"context-provider\" color-palette=\"darkest\">\n  <form>\n    <h2>Color Context</h2>\n    <label for=\"context-range\">Color Palette</label>\n    <input id=\"context-range\" type=\"range\" list=\"palettes\" max=\"5\" name=\"range\" value=\"1\">\n    <datalist id=\"palettes\">\n      <option value=\"0\" label=\"darkest\"></option>\n      <option value=\"1\" label=\"darker\"></option>\n      <option value=\"2\" label=\"dark\"></option>\n      <option value=\"3\" label=\"light\"></option>\n      <option value=\"4\" label=\"lighter\"></option>\n      <option value=\"5\" label=\"lightest\"></option>\n    </datalist>\n  </form>\n\n  <section>\n    <rh-tabs>\n      <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n      <rh-tab-panel>Users</rh-tab-panel>\n      <rh-tab slot=\"tab\">Containers</rh-tab>\n      <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n      <rh-tab slot=\"tab\">Database</rh-tab>\n      <rh-tab-panel>Database</rh-tab-panel>\n      <rh-tab slot=\"tab\">Servers</rh-tab>\n      <rh-tab-panel>Servers</rh-tab-panel>\n      <rh-tab slot=\"tab\">Cloud</rh-tab>\n      <rh-tab-panel>Cloud</rh-tab-panel>\n    </rh-tabs>\n\n    <rh-tabs box=\"\">\n      <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n      <rh-tab-panel>Users</rh-tab-panel>\n      <rh-tab slot=\"tab\">Containers</rh-tab>\n      <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n      <rh-tab slot=\"tab\">Database</rh-tab>\n      <rh-tab-panel>Database</rh-tab-panel>\n      <rh-tab slot=\"tab\">Servers</rh-tab>\n      <rh-tab-panel>Servers</rh-tab-panel>\n      <rh-tab slot=\"tab\">Cloud</rh-tab>\n      <rh-tab-panel>Cloud</rh-tab-panel>\n    </rh-tabs>\n\n    <rh-tabs centered=\"\">\n      <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n      <rh-tab-panel>Users</rh-tab-panel>\n      <rh-tab slot=\"tab\">Containers</rh-tab>\n      <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n      <rh-tab slot=\"tab\">Database</rh-tab>\n      <rh-tab-panel>Database</rh-tab-panel>\n      <rh-tab slot=\"tab\">Servers</rh-tab>\n      <rh-tab-panel>Servers</rh-tab-panel>\n      <rh-tab slot=\"tab\">Cloud</rh-tab>\n      <rh-tab-panel>Cloud</rh-tab-panel>\n    </rh-tabs>\n\n    <rh-tabs box=\"\" centered=\"\">\n      <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n      <rh-tab-panel>Users</rh-tab-panel>\n      <rh-tab slot=\"tab\">Containers</rh-tab>\n      <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n      <rh-tab slot=\"tab\">Database</rh-tab>\n      <rh-tab-panel>Database</rh-tab-panel>\n      <rh-tab slot=\"tab\">Servers</rh-tab>\n      <rh-tab-panel>Servers</rh-tab-panel>\n      <rh-tab slot=\"tab\">Cloud</rh-tab>\n      <rh-tab-panel>Cloud</rh-tab-panel>\n    </rh-tabs>\n\n    <rh-tabs box=\"inset\">\n      <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n      <rh-tab-panel>Users</rh-tab-panel>\n      <rh-tab slot=\"tab\">Containers</rh-tab>\n      <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n      <rh-tab slot=\"tab\">Database</rh-tab>\n      <rh-tab-panel>Database</rh-tab-panel>\n      <rh-tab slot=\"tab\">Servers</rh-tab>\n      <rh-tab-panel>Servers</rh-tab-panel>\n      <rh-tab slot=\"tab\">Cloud</rh-tab>\n      <rh-tab-panel>Cloud</rh-tab-panel>\n    </rh-tabs>\n\n    <rh-tabs vertical=\"\" box=\"\">\n      <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n      <rh-tab-panel>Users</rh-tab-panel>\n      <rh-tab slot=\"tab\">Containers</rh-tab>\n      <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n      <rh-tab slot=\"tab\">Database</rh-tab>\n      <rh-tab-panel>Database</rh-tab-panel>\n      <rh-tab slot=\"tab\">Servers</rh-tab>\n      <rh-tab-panel>Servers</rh-tab-panel>\n      <rh-tab slot=\"tab\">Cloud</rh-tab>\n      <rh-tab-panel>Cloud</rh-tab-panel>\n    </rh-tabs>\n\n    <rh-tabs vertical=\"\">\n      <rh-tab id=\"users\" slot=\"tab\">Users</rh-tab>\n      <rh-tab-panel>Users</rh-tab-panel>\n      <rh-tab slot=\"tab\">Containers</rh-tab>\n      <rh-tab-panel>Containers <a href=\"#\">Focusable element</a></rh-tab-panel>\n      <rh-tab slot=\"tab\">Database</rh-tab>\n      <rh-tab-panel>Database</rh-tab-panel>\n      <rh-tab slot=\"tab\">Servers</rh-tab>\n      <rh-tab-panel>Servers</rh-tab-panel>\n      <rh-tab slot=\"tab\">Cloud</rh-tab>\n      <rh-tab-panel>Cloud</rh-tab-panel>\n    </rh-tabs>\n\n    <rh-tabs centered=\"\" box=\"\">\n      <rh-tab slot=\"tab\"> Users          <pfe-icon slot=\"icon\" icon=\"users\" set=\"fas\" size=\"sm\"></pfe-icon></rh-tab>\n      <rh-tab-panel>Users</rh-tab-panel>\n      <rh-tab slot=\"tab\"> Containers     <pfe-icon slot=\"icon\" icon=\"box-open\" set=\"fas\" size=\"sm\"></pfe-icon></rh-tab>\n      <rh-tab-panel>Containers</rh-tab-panel>\n      <rh-tab slot=\"tab\"> Database       <pfe-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pfe-icon></rh-tab>\n      <rh-tab-panel>Database</rh-tab-panel>\n      <rh-tab slot=\"tab\"> Server         <pfe-icon slot=\"icon\" icon=\"server\" set=\"fas\" size=\"sm\"></pfe-icon></rh-tab>\n      <rh-tab-panel>Server</rh-tab-panel>\n      <rh-tab slot=\"tab\"> System         <pfe-icon slot=\"icon\" icon=\"laptop\" set=\"fas\" size=\"sm\"></pfe-icon></rh-tab>\n      <rh-tab-panel>System</rh-tab-panel>\n    </rh-tabs>\n\n    <rh-tabs vertical=\"\">\n      <rh-tab slot=\"tab\"> Users          <pfe-icon slot=\"icon\" icon=\"users\" set=\"fas\" size=\"sm\"></pfe-icon></rh-tab>\n      <rh-tab-panel>Users</rh-tab-panel>\n      <rh-tab slot=\"tab\"> Containers     <pfe-icon slot=\"icon\" icon=\"box-open\" set=\"fas\" size=\"sm\"></pfe-icon></rh-tab>\n      <rh-tab-panel>Containers</rh-tab-panel>\n      <rh-tab slot=\"tab\"> Database       <pfe-icon slot=\"icon\" icon=\"database\" set=\"fas\" size=\"sm\"></pfe-icon></rh-tab>\n      <rh-tab-panel>Database</rh-tab-panel>\n      <rh-tab slot=\"tab\"> Server         <pfe-icon slot=\"icon\" icon=\"server\" set=\"fas\" size=\"sm\"></pfe-icon></rh-tab>\n      <rh-tab-panel>Server</rh-tab-panel>\n      <rh-tab slot=\"tab\"> System         <pfe-icon slot=\"icon\" icon=\"laptop\" set=\"fas\" size=\"sm\"></pfe-icon></rh-tab>\n      <rh-tab-panel>System</rh-tab-panel>\n    </rh-tabs>\n\n  </section>\n</rh-context-provider>\n\n\n",
      "label": "Color Context"
    },
    "demo/color-context/demo.css": {
      "content": "body {\n  color: var(--rh-color-text-primary-on-light, #151515);\n  background-color: var(--rh-color-surface-lightest, #ffffff);\n}\n\nbody.dark {\n  color: var(--rh-color-text-primary-on-dark, #ffffff);\n  background-color: var(--rh-color-surface-darkest, #151515);\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\nsection {\n  padding: 16px;\n}\n\n[data-demo] {\n  display: contents;\n}\n\nlabel {\n  display: block;\n}\n\nform h2 {\n  width: 100%;\n}\n\nform output {\n  text-transform: capitalize;\n}\n\ndatalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  writing-mode: vertical-lr;\n}\n\ndatalist,\ninput {\n  width: 200px;\n}\n\noption {\n  padding: 0;\n}\n\na {\n  color: var(--rh-color-interactive-blue-darker, #0066cc);\n}\n\na:hover {\n  color: var(--rh-color-interactive-blue-darkest, #004080);\n}\n\na:visited {\n  color: var(--rh-color-interactive-purple-darker, #6753ac);\n}\n\n.dark a {\n  color: var(--rh-color-interactive-blue-lighter, #73bcf7);\n}\n\n.dark a:hover {\n  color: var(--rh-color-interactive-blue-lightest, #bee1f4);\n}\n\n.dark a:visited {\n  color: var(--rh-color-interactive-purple-lighter, #a18fff);\n}\n\n",
      "hidden": true
    },
    "demo/color-context/rh-tabs.js": {
      "content": "import '@rhds/elements/rh-tabs/rh-tabs.js';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\n\nimport '@patternfly/elements/pf-icon/pf-icon.js';\n\nconst tabs = document.querySelectorAll('rh-tabs');\nconst inset = document.querySelector('#inset');\n\nfunction variantToggle() {\n  tabs.forEach(t => {\n    if (t === inset) {\n      return;\n    }\n    t.toggleAttribute('box');\n  });\n}\n\n\nfunction themeToggle(event) {\n  tabs.forEach(t => {\n    if (event.target.value === 'base') {\n      t.setAttribute('theme', event.target.value);\n    } else {\n      t.removeAttribute('theme');\n    }\n  });\n}\n\nfunction insetToggle(event) {\n  inset.inset = event.target.value;\n}\n\nfor (const input of document.querySelectorAll('input[name=\"variant\"]')) {\n  input.addEventListener('change', variantToggle);\n}\n\nfor (const input of document.querySelectorAll('input[name=\"theme\"]')) {\n  input.addEventListener('change', themeToggle);\n}\n\nfor (const input of document.querySelectorAll('input[name=\"inset\"]')) {\n  input.addEventListener('change', insetToggle);\n}\n",
      "hidden": true
    },
    "demo/color-context/color-context.js": {
      "content": "const form = document.querySelector('form');\nconst provider = document.getElementById('context-provider');\n\nconst palettes = ['darkest', 'darker', 'dark', 'light', 'lighter', 'lightest'];\n\nform.addEventListener('input', sync);\n\nfunction sync() {\n  provider.setAttribute('color-palette', palettes[form.range.value]);\n}\n\nsync();\n",
      "hidden": true
    },
    "demo/right-to-left/index.html": {
      "contentType": "text/html",
      "selected": false,
      "content": "<link rel=\"stylesheet\" href=\"demo.css\"><head><link href=\"../rhds-demo-base.css\" rel=\"stylesheet\"></head></link>\n<script type=\"module\" src=\"rh-tabs.js\"></script>\n\n<section dir=\"rtl\" lang=\"he\" id=\"rtl\">\n  <p>מאת <a href=\"https://www.gnu.org/philosophy/shouldbefree.he.html\">\"מדוע על תוכנה להיות חופשית\" </a>- המוסד לתוכנה חופשית</p>\n  <rh-tabs>\n    <rh-tab slot=\"tab\">הקדמה</rh-tab>\n    <rh-tab-panel>\n      <p>קיום מוצר ה”תוכנה“ מעלה את השאלה על דרך קבלת ההחלטות בקשר אליה. לדוגמא, נניח כי אדם מסוים, בעל עותק של תוכנה, פוגש אדם אחר המעונין בעותק שלה. האם הם יכולים להעתיק את התוכנה? מי צריך להחליט על כך? האם האנשים המעורבים, או שמא ישות נוספת, ”הבעלים“ של המוצר?</p>\n      <p>מפתחי תוכנה בדרך כלל מתייחסים לשאלות אלו בהנחה שהקריטריון לתשובה הוא מיקסום רווחים למפתח. הכוח הפוליטי של עולם העסקים הוביל את השלטון לאמץ הן את הקריטריון והן את התשובה שהוצעה : למוצר תוכנה יש בעלים, שהם בד\"כ חברה המזוהה עם פיתוח המוצר. </p>\n      <p>במאמר זה ננסה לבחון את אותה שאלה, אבל עם קריטריון שונה: השגשוג והחופש של הציבור. </p>\n      <p>התשובה אינה יכולה להתבסס על החקיקה הנוכחית – החוק צריך לעקוב אחרי האתיקה ולא להפך, ובכלל, החקיקה הנוכחית אינה פותרת את השאלה, למרות שהיא מציעה מספר פתרונות אפשריים. הדרך היחידה לשפוט בנושא היא לגלות מי נפגע ומי מרוויח בהכרה בבעלות על תוכנה, למה, ובאיזו מידה. במילים אחרות, עלינו לבצע אנליזת מחיר/תועלת בשם החברה כישות אחת, תוך שאנו לוקחים בחשבון את החופש האישי ובנוסף את היצור של מוצרים ברי קיימא. </p>\n      <p>במאמר זה יתוארו האפקטים של ”בעלות“, ונראה כי התוצאה היא מזיקה בעליל. המסקנה המתבקשת היא כי למתכנתים יש את החובה לעודד אחרים לחלוק, להפיץ מחדש, ללמוד ולשפר תוכנה שהם כותבים, או במילים אחרות, לכתוב תוכנה חופשית. </p>\n    </rh-tab-panel>\n\n    <rh-tab slot=\"tab\">כיצד בעלי קניין מצדיקים את כוחם</rh-tab>\n    <rh-tab-panel>\n      <p>אלו הנהנים מהמערכת הנוכחית, בה תוכנות הנן רכוש, מציעים שני נימוקים לתמיכה\n      בדרישתם לבעלות על תוכנה: הנימוק הרגשי והנימוק הכלכלי.</p>\n      <p>הנימוק הרגשי פשוט: ”השקעתי מאמצים, זמן ונשמה במוצר, המוצר בא <em>ממני</em>,\n      הוא <em>שלי</em>!“</p>\n      <p>נימוק זה אינה דורש מאמץ רב להפרכתו. תחושת ה-”קשר הרגשי“ אינה בלתי-נמנעת אלא\n      כזו שמתכנתים יכולים לטפח כאשר זה מתאים להם. ניקח לדוגמא, כיצד תחושת הקשר\n      נעלמת במסתוריות במקרה הנפוץ בו מתכנתים מוכנים, בד\"כ, להעביר את כל זכויותיהם\n      לתאגיד גדול תמורת שכר. בניגוד לכך, שיקלו את גישתם של האמנים והאומנים הגדולים\n      של ימי הביניים, שאפילו לא חתמו על עבודותיהם. להם, שם האמן לא היה חשוב. מה\n      שכן היה חשוב היה הצורך שהעבודה תשרת והעובדה שהיא נעשתה. גישה זה שלטה מאות\n      שנים.</p>\n      <p>הנימוק הכלכלי מתואר כך : ”אני רוצה להתעשר (או, בתיאור הפופולרי אך לא מדויק,\n      להתקיים), אם לא אוכל על ידי פיתוח תוכנה, אז לא אפתח תוכנה. כל האחרים הם\n      כמוני, ולכן אף אחד לא יתכנת. ואז מה תעשו?“ – איום זה בד\"כ מוסווה כעצה\n      ידידותית.</p>\n      <p>בהמשך נראה מדוע איום זה הנו איום סרק. אבל תחילה נפנה לטפל בהנחה סמויה שניתן\n      לגלות ביתר קלות בניסוח אחר של הטיעון הנ\"ל.</p>\n      <p>ניסוח זה מתחיל בהשוואת התועלת הציבורית של תוכנה קניינית לעומת אי קיום תוכנה,\n      ומסיים במסקנה כי פיתוח תוכנה קניינית הנו, למרות הכל, משתלם, ויש\n      לעודדו. הטעות פה הנה ההשוואה של שתי תוצאות בלבד, תוכנה קניינית\n      ואי-תוכנה. וההנחה שאין אפשרויות נוספות.</p>\n      <p>בהינתן מערכת של זכויות יוצרים, פיתוח תוכנה בד\"כ מקושר עם קיום בעלים השולט על\n      השימוש בתוכנה. כל עוד קישור זה קיים, אנו לרוב עומדים בפני הבחירה בין תוכנה\n      קניינית וכלום. בכל אופן, הקישור הזה אינו טבעי או בלתי-נמנע, הוא תוצאה של\n      מדיניות משפטית/חברתית שעליה אנו מערערים: ההחלטה על קנייניות. הגדרת הברירה\n      כבחירה בין תוכנה קניינית לאי קיום תוכנה ממש דורש מאיתנו לשאול</p>\n    </rh-tab-panel>\n\n    <rh-tab slot=\"tab\">הטיעון נגד קנייניות</rh-tab>\n    <rh-tab-panel>\n      <p>השאלה שעל הפרק – ”האם פיתוח תוכנה צריך להיות קשור לקיום בעלות והגבלת שימוש?“</p>\n      <p>על מנת לפסוק בסוגיה זו, אנו צריכים למדוד את ההשפעה של כל אחת מהפעילויות על\n      החברה באופן בלתי תלוי. ההשפעה של פיתוח תוכנה (ללא קשר לשיטות ההפצה שלה)\n      וההשפעה של הגבלת השימוש (בהנחה שהתוכנה פותחה). אם אחת מהפעילויות הללו הנה\n      חיובית והשניה הרסנית, מוטב לנו לבטל את הקישור בינן ולבצע רק את החיובית.</p>\n      <p>או במילים אחרות – אם הגבלת הפצה של תוכנה פוגע בחברה, אזי מתכנת מוסרי ימנע\n      מאפשרות זו.</p>\n      <p>למדידת התוצאה של הגבלת ההפצה, אנו צריכים להשוות את הערך לחברה של תוכנה קניינית (מוגבלת הפצה) והערך של אותה תוכנה, הזמינה לכולם – כלומר השוואה של\n      שני עולמות שונים.</p>\n      <p>השוואה זו מטפלת גם בנימוק הנגדי הפשוט שעולה מפעם לפעם - ”התועלת לשכן שלו נתת\n      עותק תוכנה מבטלת את התועלת לבעלי התוכנה“ – נימוק זה מניח שהנזק והתועלת שווים\n      בערכם. בהשוואה שנבצע נשווה גם את הערכים, ונראה כי התועלת גדולה לעין שיעור\n      מהנזק.</p>\n      <p>להבהרת הטיעון, בואו ננסה להפעיל אותו על נושא אחר – בניית כבישים.</p>\n      <p>ניתן לממן את בניית כל הכבישים על ידי אגרת-מעבר. מימון כזה ידרוש הקמת נקודות\n      גבייה בכל צומת רחובות. מערכת כזו תהווה תמריץ גדול לשיפור הדרכים ותגרום לכל\n      משתמש בדרך לשלם על השימוש בה, אולם, נקודת גבייה היא מכשול מלאכותי המפריע\n      לזרימת התנועה. מלאכותי מכיוון שאינו תוצאה של דרך פעולתן של מכוניות או\n      כבישים.</p>\n      <p>בהשוואת דרכים חופשיות לכבישי אגרה אנו מוצאים (בהנחה כי כל שאר הפרמטרים זהים)\n      כי כבישים רגילים זולים יותר לבנייה ולתחזוקה, בטוחים יותר ויותר יעילים\n      בשימוש. <a href=\"#f2\">(2)</a> במדינה ענייה, אגרות מעבר מונעות את השימוש\n      בכבישים מאזרחים רבים. יוצא מזה כי כבישים נטולי אגרה (חופשיים) מציעים יותר\n      תועלת לחברה בעלות קטנה יותר והם מועדפים על ידי החברה. לכן, על החברה לבחור\n      לממן סלילת כבישים בדרכים אחרות, ולא על ידי נקודות גביית אגרה. השימוש בכביש,\n      אחרי בנייתו, צריך להיות חופשי.</p>\n      <p>כאשר הסניגורים של כבישי האגרה טוענים כי הם רק דרך לגיוס כספים, הם מסתירים את\n      העובדה שיש חלופות. נקודות גביית אגרה אכן מגייסות כספים, אבל הן גם מורידות את\n      רמת הכביש. כבישי האגרה אינם טובים כמו כבישים חופשיים.</p>\n      <p>כמובן, בניית כביש חופשי עולה כסף, שעל הציבור לשלם. אולם, אין משמעות הדבר\n      מעבר לשיטת כבישי האגרה. אנו, הנדרשים לשלם בכל מקרה, נקבל תמורה טובה יותר\n      לכספנו בבניית כבישים חופשיים.</p>\n      <p>איננו טוענים כי דרך אגרה גרועה מאי קיום דרך, למרות שטענה זו תתקיים אם האגרה\n      תהיה גבוהה במידה כזאת שלא נוכל להשתמש בדרך (זו אינה מדיניות הגיונית לבעלי\n      הכביש). אולם, כל עוד כבישי אגרה גורמים לבזבוז ואי נוחות, עדיף לגייס את הכסף\n      בדרכים פחות פוגעניות.</p>\n      <p>ניתן להפעיל אותם טיעונים לגבי פיתוח תוכנה, נראה כי קיום ”נקודות גבייה“\n      לתוכנה שימושית עולה רבות לחברה – גורם לתוכנה להיות יקרה יותר לפיתוח, יקרה\n      יותר להפצה ופחות מספקת ויעילה לשימוש. מזה יוצא כי יש לעודד פיתוח תוכנה\n      בדרכים אחרות, ויתוארו גישות אחדות לעידוד ומימון (בהיקף הנדרש באמת) של פיתוח\n      תוכנה.</p>\n    </rh-tab-panel>\n  </rh-tabs>\n</section>\n",
      "label": "Right To Left"
    },
    "demo/right-to-left/demo.css": {
      "content": "body {\n  color: var(--rh-color-text-primary-on-light, #151515);\n  background-color: var(--rh-color-surface-lightest, #ffffff);\n}\n\nbody.dark {\n  color: var(--rh-color-text-primary-on-dark, #ffffff);\n  background-color: var(--rh-color-surface-darkest, #151515);\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\nsection {\n  padding: 16px;\n}\n\n[data-demo] {\n  display: contents;\n}\n\nlabel {\n  display: block;\n}\n\nform h2 {\n  width: 100%;\n}\n\nform output {\n  text-transform: capitalize;\n}\n\ndatalist {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  writing-mode: vertical-lr;\n}\n\ndatalist,\ninput {\n  width: 200px;\n}\n\noption {\n  padding: 0;\n}\n\na {\n  color: var(--rh-color-interactive-blue-darker, #0066cc);\n}\n\na:hover {\n  color: var(--rh-color-interactive-blue-darkest, #004080);\n}\n\na:visited {\n  color: var(--rh-color-interactive-purple-darker, #6753ac);\n}\n\n.dark a {\n  color: var(--rh-color-interactive-blue-lighter, #73bcf7);\n}\n\n.dark a:hover {\n  color: var(--rh-color-interactive-blue-lightest, #bee1f4);\n}\n\n.dark a:visited {\n  color: var(--rh-color-interactive-purple-lighter, #a18fff);\n}\n\n",
      "hidden": true
    },
    "demo/right-to-left/rh-tabs.js": {
      "content": "import '@rhds/elements/rh-tabs/rh-tabs.js';\nimport '@rhds/elements/rh-context-provider/rh-context-provider.js';\n\nimport '@patternfly/elements/pf-icon/pf-icon.js';\n\nconst tabs = document.querySelectorAll('rh-tabs');\nconst inset = document.querySelector('#inset');\n\nfunction variantToggle() {\n  tabs.forEach(t => {\n    if (t === inset) {\n      return;\n    }\n    t.toggleAttribute('box');\n  });\n}\n\n\nfunction themeToggle(event) {\n  tabs.forEach(t => {\n    if (event.target.value === 'base') {\n      t.setAttribute('theme', event.target.value);\n    } else {\n      t.removeAttribute('theme');\n    }\n  });\n}\n\nfunction insetToggle(event) {\n  inset.inset = event.target.value;\n}\n\nfor (const input of document.querySelectorAll('input[name=\"variant\"]')) {\n  input.addEventListener('change', variantToggle);\n}\n\nfor (const input of document.querySelectorAll('input[name=\"theme\"]')) {\n  input.addEventListener('change', themeToggle);\n}\n\nfor (const input of document.querySelectorAll('input[name=\"inset\"]')) {\n  input.addEventListener('change', insetToggle);\n}\n",
      "hidden": true
    }
  }
};