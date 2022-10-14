import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

// import { BaseCard } from '@patternfly/pfe-card/BaseCard.js';

import styles from './rh-card.css';

/**
 * Card
 * @slot - Place element content here
 */
@customElement('rh-card')
export class RhCard extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-card': RhCard;
}
}
