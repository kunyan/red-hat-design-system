import '@patternfly/elements/pf-panel/pf-panel.js';
import '@patternfly/elements/pf-card/pf-card.js';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@rhds/elements/rh-context-provider/rh-context-provider.js';

const root = document.querySelector('[data-demo="rh-cta"]')?.shadowRoot ?? document;

root.querySelector('rh-cta');

/**
 * Polyfill declarative shadow dom.
 * @see https://web.dev/declarative-shadow-dom/
 */
(function attachShadowRoots(root) {
  root.querySelectorAll('template[shadowroot]').forEach(template => {
    const mode = template.getAttribute('shadowroot');
    const shadowRoot = template.parentNode.attachShadow({ mode });
    shadowRoot.appendChild(template.content);
    template.remove();
    attachShadowRoots(shadowRoot);
  });
})(document);
