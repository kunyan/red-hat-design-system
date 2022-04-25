
/* eslint-disable no-console */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';

import styles from './rh-tooltip.css';

import './lib/rh-popper/rh-popper.ts';


/**
 * Tooltips are used.
 *
 * @summary Organizes content in a contained view on the same page
 *
 */

@customElement('rh-tooltip') @pfelement()
export class RhTooltip extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  @property({ type: String, reflect: true }) position: 'top'|'bottom'|'left'|'right' = 'top';

  render() {
    return html`
      <rh-popper position="${this.position}">
        <div slot="popper-invoker">
          <slot name="icon"></slot>
        </div>
        <div slot="popper-content">
          <slot name="content"></slot>
        </div>
      </rh-popper>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tooltip': RhTooltip;
  }
}
