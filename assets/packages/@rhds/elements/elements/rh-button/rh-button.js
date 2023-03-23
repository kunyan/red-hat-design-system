var _RhButton_instances, _RhButton_variant_get;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { BaseButton } from '@patternfly/elements/pf-button/BaseButton.js';
import { css } from "lit";
const styles = css `.light{--_primary-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-background-color:var(--rh-color-interactive-blue-darker, #0066cc);--_primary-border-color:transparent;--_primary-border-width:var(--rh-border-width-sm, 1px);--_primary-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-active-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_primary-active-border-width:var(--rh-border-width-sm, 1px);--_primary-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-focus-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_primary-focus-border-width:var(--rh-border-width-md, 2px);--_primary-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-hover-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_primary-hover-border-width:var(--rh-border-width-sm, 1px);--_danger-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-background-color:var(--rh-color-red-600, #be0000);--_danger-border-color:transparent;--_danger-border-width:var(--rh-border-width-sm, 1px);--_danger-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-active-background-color:#a30000;--_danger-active-border-color:transparent;--_danger-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-focus-background-color:#a30000;--_danger-focus-border-color:transparent;--_danger-focus-border-width:var(--rh-border-width-md, 2px);--_danger-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-hover-background-color:#a30000;--_danger-hover-border-color:transparent;--_secondary-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-danger-color:var(--rh-color-red-600, #be0000);--_secondary-background-color:transparent;--_secondary-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-border-width:var(--rh-border-width-sm, 1px);--_secondary-active-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-active-background-color:transparent;--_secondary-active-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-active-border-width:var(--rh-border-width-md, 2px);--_secondary-focus-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-focus-background-color:transparent;--_secondary-focus-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-focus-border-width:var(--rh-border-width-md, 2px);--_secondary-hover-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-hover-background-color:transparent;--_secondary-hover-border-color:var(--rh-color-interactive-blue-darker, #0066cc);--_secondary-hover-border-width:var(--rh-border-width-md, 2px);--_tertiary-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-background-color:transparent;--_tertiary-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-border-width:var(--rh-border-width-sm, 1px);--_tertiary-active-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-active-background-color:transparent;--_tertiary-active-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-active-border-width:var(--rh-border-width-md, 2px);--_tertiary-focus-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-focus-background-color:transparent;--_tertiary-focus-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-focus-border-width:var(--rh-border-width-md, 2px);--_tertiary-hover-color:var(--rh-color-text-primary-on-light, #151515);--_tertiary-hover-background-color:transparent;--_tertiary-hover-border-color:var(--rh-color-border-strong-on-light, #151515);--_tertiary-hover-border-width:var(--rh-border-width-md, 2px);--_link-color:var(--rh-color-interactive-blue-darker, #0066cc);--_link-background-color:transparent;--_link-active-color:var(--rh-color-blue-600, #002952);--_link-active-background-color:transparent;--_link-focus-color:var(--rh-color-blue-600, #002952);--_link-focus-background-color:transparent;--_link-focus-outline-color:var(--rh-color-interactive-blue-darker, #0066cc);--_link-hover-color:var(--rh-color-blue-600, #002952);--_link-hover-background-color:transparent;--_close-color:var(--rh-color-text-secondary-on-light, #6a6e73);--_close-background-color:transparent;--_close-active-color:var(--rh-color-black-900, #151515);--_close-active-background-color:transparent;--_close-focus-color:var(--rh-color-black-900, #151515);--_close-focus-background-color:transparent;--_close-focus-outline-color:var(--rh-color-interactive-blue-darker, #0066cc);--_close-hover-color:var(--rh-color-black-900, #151515);--_close-hover-background-color:transparent;--_b9:var(--rh-color-black-900-rgb, 21 21 21);--_play-color:var(--rh-color-icon-secondary-on-dark, #ffffff);--_play-background-color:rgb(var(--_b9) / var(--rh-opacity-50, 50%));--_play-active-background-color:rgb(var(--_b9) / var(--rh-opacity-80, 80%));--_play-focus-background-color:rgb(var(--_b9) / var(--rh-opacity-80, 80%));--_play-focus-outline-color:var(--rh-color-interactive-blue-darker, #0066cc);--_play-hover-background-color:rgb(var(--_b9) / var(--rh-opacity-80, 80%))}.dark{--_focus-outline-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_primary-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-background-color:var(--rh-color-interactive-blue-darker, #0066cc);--_primary-border-color:transparent;--_primary-border-width:var(--rh-border-width-sm, 1px);--_primary-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-active-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_primary-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-focus-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_primary-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_primary-hover-background-color:var(--rh-color-interactive-blue-darkest, #004080);--_danger-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-background-color:#fe5142;--_danger-border-color:transparent;--_danger-border-width:var(--rh-border-width-sm, 1px);--_danger-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-active-background-color:#ff7468;--_danger-active-border-color:transparent;--_danger-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-focus-background-color:#ff7468;--_danger-focus-border-color:transparent;--_danger-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_danger-hover-background-color:#ff7468;--_danger-hover-border-color:transparent;--_secondary-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-danger-color:var(--rh-color-red-200, #fab6b6);--_secondary-background-color:transparent;--_secondary-border-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-border-width:var(--rh-border-width-sm, 1px);--_secondary-active-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-active-background-color:transparent;--_secondary-active-border-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-active-border-width:var(--rh-border-width-md, 2px);--_secondary-focus-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-focus-background-color:transparent;--_secondary-focus-border-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-focus-border-width:var(--rh-border-width-md, 2px);--_secondary-hover-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-hover-background-color:transparent;--_secondary-hover-border-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_secondary-hover-border-width:var(--rh-border-width-md, 2px);--_tertiary-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-background-color:transparent;--_tertiary-border-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-border-width:var(--rh-border-width-sm, 1px);--_tertiary-active-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-active-background-color:transparent;--_tertiary-active-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--_tertiary-active-border-width:var(--rh-border-width-md, 2px);--_tertiary-focus-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-focus-background-color:transparent;--_tertiary-focus-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--_tertiary-focus-border-width:var(--rh-border-width-md, 2px);--_tertiary-hover-color:var(--rh-color-text-primary-on-dark, #ffffff);--_tertiary-hover-background-color:transparent;--_tertiary-hover-border-color:var(--rh-color-border-strong-on-dark, #ffffff);--_tertiary-hover-border-width:var(--rh-border-width-md, 2px);--_link-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_link-background-color:transparent;--_link-active-color:var(--rh-color-interactive-blue-lightest, #bee1f4);--_link-active-background-color:transparent;--_link-focus-color:var(--rh-color-interactive-blue-lightest, #bee1f4);--_link-focus-background-color:transparent;--_link-focus-outline-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_link-hover-color:var(--rh-color-interactive-blue-lightest, #bee1f4);--_link-hover-background-color:transparent;--_close-color:var(--rh-color-text-secondary-on-dark, #d2d2d2);--_close-background-color:transparent;--_close-focus-background-color:transparent;--_close-focus-outline-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_w:var(--rh-color-white-rgb, 255 255 255);--_play-color:var(--rh-color-icon-secondary-on-light, #151515);--_play-background-color:rgb(var(--_w) / var(--rh-opacity-50, 50%));--_play-active-background-color:rgb(var(--_w) / var(--rh-opacity-80, 80%));--_play-focus-background-color:rgb(var(--_w) / var(--rh-opacity-80, 80%));--_play-focus-outline-color:var(--rh-color-interactive-blue-lighter, #73bcf7);--_play-hover-background-color:rgb(var(--_w) / var(--rh-opacity-80, 80%))}#rhds-container,:host{display:contents}:host([hidden]){display:none!important}[hidden]{display:none!important}rh-icon{color:currentcolor}button{cursor:pointer;position:relative;color:var(--_color);background-color:var(--_background-color);font-family:inherit;font-size:var(--rh-font-size-body-text-md, 1rem);font-weight:var(--rh-font-weight-body-text-regular,400);line-height:var(--rh-line-height-body-text, 1.5);padding-block:var(--rh-space-sm,6px);padding-inline:var(--rh-space-lg,16px);border-width:0;border-style:solid;border-radius:var(--rh-border-radius-default,3px);outline-offset:var(--rh-length-4xs,1px);--_color:var(--_default-color, var(--_primary-color));--_background-color:var(--_default-background-color, var(--_primary-background-color));--_border-color:var(--_default-border-color, var(--_primary-border-color));--_border-width:var(--_default-border-width, var(--_primary-border-width))}button:after{position:absolute;inset:0;content:"";border-style:solid;border-color:var(--_border-color);border-width:var(--_border-width);border-radius:var(--rh-border-radius-default,3px)}[part=icon]{display:none;pointer-events:none}.hasIcon{position:relative;display:flex;align-items:center}button:active{--_color:var(--_active-color, var(--_primary-active-color));--_background-color:var(--_active-background-color, var(--_primary-active-background-color));--_border-width:var(var(--_active-border-width), var(--_primary-active-border-width))}button:focus{--_color:var(--_focus-color, var(--_primary-focus-color));--_background-color:var(--_focus-background-color, var(--_primary-focus-background-color));--_border-width:var(--_focus-border-width, var(--_primary-focus-border-width))}button:focus:after{border-width:var(--_border-width,var(--rh-border-width-md,2px))}button:active,button:focus{outline:var(--rh-border-width-md,2px) solid var(--_focus-outline-color,var(--rh-color-interactive-blue-darker,#0066cc))}button:hover{--_color:var(--_hover-color, var(--_primary-hover-color));--_background-color:var(--_hover-background-color, var(--_primary-hover-background-color));--_border-width:var(--_hover-border-width, var(--_primary-hover-border-width))}:host([danger]) button{--_default-color:var(--_danger-color);--_default-background-color:var(--_danger-background-color);--_default-border-color:var(--_danger-border-color);--_active-color:var(--_danger-active-color);--_active-background-color:var(--_danger-active-background-color);--_active-border-color:var(--_danger-active-border-color);--_focus-color:var(--_danger-focus-color);--_focus-background-color:var(--_danger-focus-background-color);--_focus-border-color:var(--_danger-focus-border-color);--_hover-color:var(--_danger-hover-color);--_hover-background-color:var(--_danger-hover-background-color);--_hover-border-color:var(--_danger-hover-border-color)}:host([variant=secondary i]) button{--_default-color:var(--_secondary-color);--_default-background-color:var(--_secondary-background-color);--_default-border-color:var(--_secondary-border-color);--_default-border-width:var(--_secondary-border-width);--_active-color:var(--_secondary-active-color);--_active-background-color:var(--_secondary-active-background-color);--_active-border-color:var(--_secondary-active-border-color);--_active-border-width:var(--_secondary-active-border-width);--_focus-color:var(--_secondary-focus-color);--_focus-background-color:var(--_secondary-focus-background-color);--_focus-border-color:var(--_secondary-focus-border-color);--_hover-color:var(--_secondary-hover-color);--_hover-background-color:var(--_secondary-hover-background-color);--_hover-border-color:var(--_secondary-hover-border-color);--_hover-border-width:var(--_secondary-hover-border-width)}:host([variant=tertiary i]) button{--_default-color:var(--_tertiary-color);--_default-background-color:var(--_tertiary-background-color);--_default-border-color:var(--_tertiary-border-color);--_active-color:var(--_tertiary-active-color);--_active-background-color:var(--_tertiary-active-background-color);--_active-border-color:var(--_tertiary-active-border-color);--_active-border-width:var(--_tertiary-active-border-width);--_focus-color:var(--_tertiary-focus-color);--_focus-background-color:var(--_tertiary-focus-background-color);--_focus-border-color:var(--_tertiary-focus-border-color);--_hover-color:var(--_tertiary-hover-color);--_hover-background-color:var(--_tertiary-hover-background-color);--_hover-border-color:var(--_tertiary-hover-border-color);--_hover-border-width:var(--_tertiary-hover-border-width)}:host([variant=link i]) button{display:inline;--_default-color:var(--_link-color);--_default-background-color:var(--_link-background-color);--_default-border-color:transparent;--_active-color:var(--_link-active-color);--_active-background-color:var(--_link-active-background-color);--_active-border-color:transparent;--_focus-color:var(--_link-focus-color);--_focus-background-color:var(--_link-focus-background-color);--_focus-border-color:transparent;--_focus-outline-color:var(--_link-focus-outline-color);--_hover-color:var(--_link-hover-color);--_hover-background-color:var(--_link-hover-background-color);--_hover-border-color:transparent}:host([variant=close i]) button{--_default-color:var(--_close-color);--_default-background-color:var(--_close-background-color);--_active-color:var(--_close-active-color);--_active-background-color:var(--_close-active-background-color);--_active-border-color:transparent;--_focus-color:var(--_close-focus-color);--_focus-background-color:var(--_close-focus-background-color);--_focus-border-color:transparent;--_focus-outline-color:var(--_close-focus-outline-color);--_hover-color:var(--_close-hover-color);--_hover-background-color:transparent;--_hover-border-color:transparent;width:var(--rh-length-lg,16px);aspect-ratio:1}:host([variant=play i]) button{border-radius:100%;width:var(--rh-length-4xl,64px);--_default-color:var(--_play-color);--_default-background-color:var(--_play-background-color);--_default-background-opacity:var(--_play-background-opacity);--_active-color:var(--_play-color);--_active-background-color:var(--_play-active-background-color);--_active-background-opacity:var(--_play-active-background-opacity);--_focus-color:var(--_play-color);--_focus-background-color:var(--_play-focus-background-color);--_focus-background-opacity:var(--_play-focus-background-opacity);--_focus-outline-color:var(--_play-focus-outline-color);--_hover-color:var(--_play-color);--_hover-background-color:var(--_play-hover-background-color);--_hover-background-opacity:var(--_play-hover-background-opacity);--_icon-size:var(--rh-size-icon-04, 40px)}:host(:is([variant=play i],[variant=close i])) button{aspect-ratio:1;display:inline-flex;align-items:center;justify-content:center;padding:0}:host(:is([variant=play i],[variant=close i])) [part=icon]{display:inline-block;width:var(--_icon-size,var(--rh-size-icon-01,16px));height:var(--_icon-size,var(--rh-size-icon-01,16px))}:host(:is([variant=play i],[variant=close i])) svg{fill:currentcolor;stroke:currentcolor}:host(:is([variant=play i],[variant=close i])) #text{display:inline;position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}:host(:disabled) button,:host(:disabled[danger]) button,:host(:disabled[variant=link]) button,button[disabled]{pointer-events:none;cursor:default;--_color:var(--rh-color-text-secondary-on-light, #6a6e73);--_background-color:var(--rh-color-black-300, #d2d2d2)}:host(:disabled) button:after{--_border-color:transparent}:host([variant=secondary i][danger]) button{--_default-color:var(--_secondary-danger-color);--_default-background-color:transparent;--_default-border-color:var(--_danger-background-color);--_active-color:var(--_danger-background-color);--_active-background-color:transparent;--_active-border-color:var(--_danger-active-border-color);--_focus-color:var(--_secondary-danger-color);--_focus-background-color:transparent;--_focus-border-color:var(--_danger-focus-border-color);--_hover-color:var(--_danger-background-color);--_hover-background-color:transparent;--_hover-border-color:var(--_danger-hover-border-color)}`;
let RhButton = class RhButton extends BaseButton {
    constructor() {
        super(...arguments);
        _RhButton_instances.add(this);
        /**
         * Changes the style of the button.
         * - Primary: Used for the most important call to action on a page. Try to
         *   limit primary buttons to one per page.
         * - Secondary: Use secondary buttons for general actions on a page, that
         *   don’t require as much emphasis as primary button actions. For example,
         *   you can use secondary buttons where there are multiple actions, like in
         *   toolbars or data lists.
         * - Tertiary: Tertiary buttons are flexible and can be used as needed.
         */
        this.variant = 'primary';
        this.danger = false;
    }
    willUpdate() {
        switch (__classPrivateFieldGet(this, _RhButton_instances, "a", _RhButton_variant_get)) {
            case 'close':
            case 'play':
                this.icon = __classPrivateFieldGet(this, _RhButton_instances, "a", _RhButton_variant_get);
                break;
        }
    }
    render() {
        const { on = 'light' } = this;
        return html `<div id="rhds-container" class="${classMap({ [on]: true })}">${super.render()}</div>`;
    }
    renderDefaultIcon() {
        switch (__classPrivateFieldGet(this, _RhButton_instances, "a", _RhButton_variant_get)) {
            // TODO: revisit when rh-icon is ready
            // return html`<rh-icon icon=${this.variant}></rh-icon>`;
            case 'close':
                return html `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M12.54 11.46 8.92 7.83l3.45-3.46a.63.63 0 0 0 0-.88.61.61 0 0 0-.88 0L8 6.94 4.54 3.46a.61.61 0 0 0-.88 0 .63.63 0 0 0 0 .88l3.49 3.49-3.66 3.66a.61.61 0 0 0 0 .88.63.63 0 0 0 .88 0L8 8.71l3.63 3.63a.63.63 0 0 0 .88 0 .61.61 0 0 0 .03-.88Z"/>
          </svg>
        `;
            case 'play':
                return html `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="m12.3 7.5-9-5c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v10c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l9-5c.2-.1.3-.3.3-.5s-.1-.4-.3-.5z"/>
          </svg>
        `;
            default:
                return '';
        }
    }
};
_RhButton_instances = new WeakSet(), _RhButton_variant_get = function _RhButton_variant_get() { return this.variant?.toLowerCase(); };
RhButton.styles = [styles];
__decorate([
    property({ reflect: true })
], RhButton.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhButton.prototype, "danger", void 0);
__decorate([
    colorContextConsumer()
], RhButton.prototype, "on", void 0);
RhButton = __decorate([
    customElement('rh-button')
], RhButton);
export { RhButton };
//# sourceMappingURL=rh-button.js.map