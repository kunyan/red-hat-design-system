var _RhSecondaryNav_instances, _RhSecondaryNav_logger, _RhSecondaryNav_logoCopy, _RhSecondaryNav_dir, _RhSecondaryNav_getOpenDropdowns, _RhSecondaryNav_getDropdownIndex, _RhSecondaryNav_dropdownByIndex, _RhSecondaryNav_expand, _RhSecondaryNav_allDropdowns, _RhSecondaryNav_closeDropdown, _RhSecondaryNav_openDropdown, _RhSecondaryNav_updateAccessibility, _RhSecondaryNav_toggleMobileMenu, _RhSecondaryNav_setNavOrder;
var RhSecondaryNav_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { bound, observed } from '@patternfly/pfe-core/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import '../rh-context-provider/rh-context-provider.js';
import './rh-secondary-nav-menu-section.js';
import { SecondaryNavOverlayChangeEvent } from './rh-secondary-nav-overlay.js';
import { RhSecondaryNavDropdown, SecondaryNavDropdownExpandEvent } from './rh-secondary-nav-dropdown.js';
import { DirController } from '../../lib/DirController.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { colorContextProvider } from '../../lib/context/color/provider.js';
import { css } from "lit";
const styles = css `:host{--_chevron-size:calc(var(--rh-font-size-body-text-md, 1rem) * 0.35);--_chevron-thickness:calc(var(--rh-font-size-body-text-md, 1rem) * 0.125);--_chevron-up:45deg;--_chevron-down:-135deg;--_chevron-correction-x:calc(-1 * var(--rh-font-size-body-text-md, 1rem) / 16);--_chevron-correction-y:calc(-1 * var(--rh-font-size-body-text-md, 1rem) / 16);--_chevron-color:var(--rh-color-text-primary-on-light, #151515);--_chevron-transform-collapsed:rotate(var(--_chevron-up)) translate(var(--_chevron-correction-x), var(--_chevron-correction-x));--_chevron-transform-expanded:rotate(var(--_chevron-down)) translate(var(--_chevron-correction-y), var(--_chevron-correction-y));--_button-font-color:var(--rh-color-text-primary-on-light, #151515);--_nav-max-height:var(--_max-height, max-content);--_nav-min-height:var(--_min-height, 74px);z-index:var(--rh-secondary-nav-z-index,102)}:host([color-palette=dark]){--_button-font-color:var(--rh-color-text-primary-on-dark, #ffffff);--_chevron-color:var(--rh-color-text-primary-on-dark, #ffffff)}nav{position:absolute;height:100%;width:100%;min-height:var(--_min-height);z-index:var(--rh-secondary-nav-z-index,102)}:host([color-palette=dark]) nav.compact{border-block-end:1px solid var(--rh-color-border-subtle-on-dark,#6a6e73)}nav.rtl{--_chevron-transform-collapsed:rotate(calc(-1 * var(--_chevron-up))) translate(calc(1 * var(--_chevron-correction-y)), var(--_chevron-correction-y));--_chevron-transform-expanded:rotate(calc(-1 * var(--_chevron-down))) translate(calc(1 * var(--_chevron-correction-x)), var(--_chevron-correction-x))}#container{display:grid;position:relative;z-index:var(--rh-secondary-nav-z-index,102);background-color:var(--rh-color-surface-light,#f0f0f0);gap:0 var(--rh-space-lg,16px);grid-template-rows:minmax(var(--_nav-min-height),var(--_nav-max-height)) max-content max-content;grid-template-columns:1fr max-content;grid-template-areas:"logo menu" "nav nav" "cta cta";height:fit-content;min-height:var(--_min-height);max-height:100vh;overflow-y:auto}#cta{grid-area:cta}#container.expanded{--_chevron-color:var(--rh-color-text-primary-on-light, #151515)}:host([color-palette=dark]) #container{background-color:var(--rh-color-surface-dark,#3c3f42)}#container.expanded ::slotted([slot=cta]),#container.expanded ::slotted([slot=nav]){display:flex!important}#container.expanded ::slotted([slot=nav]){list-style:none;flex-direction:column;padding:2rem 1rem 0;padding:var(--rh-space-2xl,32px) var(--rh-space-lg,16px) 0 var(--rh-space-lg,16px);margin:0!important}nav.compact #container.expanded ::slotted([slot=nav]){background-color:var(--rh-color-surface-lightest,#fff)}#container.expanded ::slotted([slot=cta]){padding:2rem 1rem}nav.compact #container.expanded #cta{background-color:var(--rh-color-surface-lightest,#fff)}button{grid-area:menu;border:none;display:flex;height:100%;align-items:center;font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-size:var(--rh-font-size-body-text-md, 1rem);padding:var(--rh-space-lg,16px);border-block-start:var(--rh-border-width-lg,3px) solid transparent;margin-inline-end:var(--rh-space-lg,16px);color:var(--_button-font-color);background-color:var(--rh-color-surface-light,#f0f0f0);gap:var(--rh-space-md,8px)}button:hover{border-block-start-color:var(--rh-color-text-brand-on-light,#ee0000)}button:after{box-sizing:content-box!important;content:"";display:block;width:var(--_chevron-size);height:var(--_chevron-size);border-inline-end:var(--_chevron-thickness) solid var(--_chevron-color);border-block-end:var(--_chevron-thickness) solid var(--_chevron-color);transform:var(--_chevron-transform-collapsed)}button[aria-expanded=true]:after{transform:var(--_chevron-transform-expanded)}button:focus{border-block-start-color:var(--rh-color-text-brand-on-light,#ee0000)}:host([color-palette=dark]) button{background-color:var(--rh-color-surface-dark,#3c3f42)}:host([color-palette=dark]) button[aria-expanded=true],button:active,button[aria-expanded=true]{color:var(--rh-color-text-primary-on-light,#151515);background-color:var(--rh-color-surface-lightest,#fff);border-block-start-color:var(--rh-color-text-brand-on-light,#ee0000);border-block-end:none}rh-context-provider{display:flex;height:100%;align-items:center}:host([color-palette=dark]) button:active{color:var(--rh-color-text-primary-on-dark,#fff)}:host([color-palette=dark]) button[aria-expanded=true]:active{color:var(--rh-color-text-primary-on-light,#151515)}@media screen and (min-width:768px){button{margin-inline-end:var(--rh-space-2xl,32px)}#container.expanded ::slotted([slot=nav]){padding:var(--rh-space-2xl,32px) var(--rh-space-2xl,32px) 0!important}#container.expanded ::slotted([slot=cta]){padding:var(--rh-space-2xl,32px)!important}}@media screen and (min-width:992px){nav{position:relative}#container{grid-template-areas:"logo nav cta";grid-template-rows:auto;grid-template-columns:max-content 1fr max-content;height:100%;max-height:initial;overflow-y:initial}#container.expanded ::slotted([slot=nav]){max-height:calc(100vh - var(--_nav-min-height))}button{display:none}}`;
/**
 * Red Hat Secondary Nav
 *
 * @summary A non primary navigation bar.
 *
 * @slot logo           - Logo added to the main nav bar, expects a `<a> | <a><svg/></a> | <a><img/></a>`
 * @slot nav            - Navigation list added to the main nav bar, expects a `<ul>`
 * @slot cta            - Nav bar level CTA, expects a `<rh-cta>
 * @slot mobile-menu    - Text label for the mobile menu button, for l10n. Defaults to "Menu"
 *
 * @csspart nav         - container, <nav> element
 * @csspart container   - container, <div> element
 * @csspart cta         - container, <div> element
 *
 * @fires { SecondaryNavOverlayChangeEvent } overlay-change - Fires when an dropdown is opened or closed in desktop view or when
 *                                        the mobile menu button is toggled in mobile view.
 */
let RhSecondaryNav = RhSecondaryNav_1 = class RhSecondaryNav extends LitElement {
    constructor() {
        super(...arguments);
        _RhSecondaryNav_instances.add(this);
        _RhSecondaryNav_logger.set(this, new Logger(this));
        _RhSecondaryNav_logoCopy.set(this, null);
        /** Is the element in an RTL context? */
        _RhSecondaryNav_dir.set(this, new DirController(this));
        /**
         * `_compact` property is true when viewport `(min-width: ${tabletLandscapeBreakpoint})`.
         * Property is observed for changes, and its value is updated using matchMediaController
         * when viewport changes at breakpoint or first load of the component.
         */
        this._compact = false;
        /**
         * ScreenSizeController effects callback to set _compact
         */
        this.screenSize = new ScreenSizeController(this, 'tabletLandscape', {
            onChange: matches => {
                this._compact = !matches;
            }
        });
        /**
         * `_mobileMenuExpanded` property is toggled when the mobile menu button is clicked,
         * a focusout event occurs, or on an overlay click event.  It also switches state
         * when the viewport changes breakpoints depending on if a dropdown is open or not.
         */
        this._mobileMenuExpanded = false;
        /**
         * Define custom attribute 'main' and watch for DOM changes of the attribute
         */
        this.mainNav = false;
        this.colorPalette = 'lighter';
        /**
         * If the host color-palette="lighter", the cta color context should be on="light"
         * by default.  However when the host color-palette="dark", the cta context should be
         * on="dark" when in desktop mode, but on="light" when in mobile compact mode because the cta shifts
         * to a white background in the mobile compact nav. This state property is set on firstUpdated()
         * and __compactChanged() and is used on a wrapping `<rh-context-provider>` around the cta allowing
         * it to dynamically change with viewport changes.
         */
        this._ctaColorPalette = this.colorPalette;
    }
    /**
     * Checks if passed in element is a RhSecondaryNavDropdown
     * @param element:
     * @returns {boolean}
     */
    static isDropdown(element) {
        return element instanceof RhSecondaryNavDropdown;
    }
    async connectedCallback() {
        super.connectedCallback();
        this.addEventListener('expand-request', this._dropdownChangeHandler);
        this.addEventListener('overlay-change', this._toggleNavOverlay);
        this.addEventListener('focusout', this._focusOutHandler);
        this.addEventListener('keydown', this._keyboardControls);
        __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_updateAccessibility).call(this);
    }
    firstUpdated() {
        // after update the overlay should be available to attach an event listener to
        this._overlay.addEventListener('click', this._overlayClickHandler);
        // if compact menu set cta color to lightest otherwise match navbar
        if (this._compact) {
            this._ctaColorPalette = 'lightest';
        }
        else {
            this._ctaColorPalette = this.colorPalette;
        }
    }
    render() {
        const navClasses = { compact: this._compact, rtl: __classPrivateFieldGet(this, _RhSecondaryNav_dir, "f").dir === 'rtl' };
        const containerClasses = { 'expanded': this._mobileMenuExpanded };
        return html `
      <nav part="nav" class="${classMap(navClasses)}" aria-label="${__classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_setNavOrder).call(this)}">
        ${__classPrivateFieldGet(this, _RhSecondaryNav_logoCopy, "f")}
        <div id="container" part="container" class="${classMap(containerClasses)}">
          <slot name="logo" id="logo"></slot>
          <button aria-controls="container" aria-expanded="${this._mobileMenuExpanded}" @click="${__classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_toggleMobileMenu)}"><slot name="mobile-menu">Menu</slot></button>
          <slot name="nav"></slot>
          <div id="cta" part="cta">
            <rh-context-provider color-palette="${this._ctaColorPalette}">
              <slot name="cta"><slot>
            </rh-context-provider>
          </div>
        </div>
      </nav>
      <rh-secondary-nav-overlay></rh-secondary-nav-overlay>
    `;
    }
    /**
     * Public API, opens a specific dropdown based on index.
     * Closes all open dropdowns before opening specified.
     * Toggles overlay to open
     * @param index
     * @returns {void}
     */
    open(index) {
        if (index == null) {
            return;
        }
        const dropdown = __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_dropdownByIndex).call(this, index);
        if (dropdown && RhSecondaryNav_1.isDropdown(dropdown)) {
            this.close();
            __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_expand).call(this, index);
            dropdown?.querySelector('a')?.focus();
            this._overlay.open = true;
        }
    }
    /**
     * Public API, closes all open dropdowns
     * @returns {void}
     */
    close() {
        const dropdowns = __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_allDropdowns).call(this);
        dropdowns.forEach(dropdown => __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_closeDropdown).call(this, dropdown));
    }
    /**
     * When dropdown event is triggered gets dropdown index that triggered
     * event then closes all dropdowns.
     * If the event is to open a dropdown, run #expand(index)
     * If isMobile is set dispatch an SecondaryNavOverlayChangeEvent event
     * to open the overlay
     * @param event - {SecondaryNavDropdownExpandEvent}
     * @return {void}
     */
    _dropdownChangeHandler(event) {
        if (event instanceof SecondaryNavDropdownExpandEvent) {
            const index = __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_getDropdownIndex).call(this, event.target);
            if (index === null || index === undefined) {
                return;
            }
            this.close();
            if (event.expanded) {
                __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_expand).call(this, index);
            }
            if (!this._nav?.classList.contains('compact')) {
                this.dispatchEvent(new SecondaryNavOverlayChangeEvent(event.expanded, event.toggle));
            }
        }
    }
    /**
     * Handles when focus changes outside of the navigation
     * If _compact is set, close the mobileMenu
     * Closes all dropdowns and toggles overlay to closed
     * @param event {FocusEvent}
     */
    _focusOutHandler(event) {
        const target = event.relatedTarget;
        if (target?.closest('rh-secondary-nav') === this || target === null) {
            // if the focus is still inside the rh-secondary-nav exit
            return;
        }
        else {
            if (this._compact) {
                this._mobileMenuExpanded = false;
            }
            this.close();
            this._overlay.open = false;
        }
    }
    /**
     * Handles when the overlay receives a click event
     * Closes all dropdowns and toggles overlay to closed
     * If _compact then closes mobile menu to closed
     * @param event {PointerEvent}
     */
    _overlayClickHandler() {
        this.close();
        this._overlay.open = false;
        if (this._compact) {
            this._mobileMenuExpanded = false;
        }
    }
    /**
     * When _compact value is changed
     * Get all open navMenus
     * If _compact is true, open mobile menu
     * If _compact is false, close mobile menu and close overlay
     * @param oldVal {boolean | undefined}
     * @param newVal {boolean | undefined}
     * @returns {void}
     */
    __compactChanged(oldVal, newVal) {
        if (newVal === undefined || newVal === oldVal) {
            return;
        }
        const dropdownsOpen = __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_getOpenDropdowns).call(this).length;
        if (newVal === true) {
            // Switching to Mobile
            if (dropdownsOpen > 0) {
                this._mobileMenuExpanded = true;
            }
            // CTA will be on lightest background in dropdown
            this._ctaColorPalette = 'lightest';
        }
        else {
            this._mobileMenuExpanded = false;
            // Switching to Desktop
            if (dropdownsOpen === 0) {
                if (this._overlay) {
                    this._overlay.open = false;
                }
            }
            // Match nav bar color scheme
            this._ctaColorPalette = this.colorPalette;
        }
    }
    /**
     * Closes dropdown menu on keydown, then places
     * focus on last button clicked
     * @param event {KeyboardEvent}
     */
    _keyboardControls(event) {
        switch (event.key) {
            case 'Escape':
                if (this._compact) {
                    this._mobileMenuExpanded = false;
                    this._mobileMenuButton?.focus();
                }
                else {
                    const open = __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_getOpenDropdowns).call(this);
                    open[0].querySelector('a')?.focus();
                }
                this.close();
                this._overlay.open = false;
                break;
            default:
                break;
        }
    }
    /**
     * Toggles the overlay triggered by eventListener
     * @param event {SecondaryNavOverlayChangeEvent}
     */
    _toggleNavOverlay(event) {
        if (event instanceof SecondaryNavOverlayChangeEvent) {
            if (this.contains(event.toggle)) {
                this._overlay.open = event.open;
            }
        }
    }
};
_RhSecondaryNav_logger = new WeakMap(), _RhSecondaryNav_logoCopy = new WeakMap(), _RhSecondaryNav_dir = new WeakMap(), _RhSecondaryNav_instances = new WeakSet(), _RhSecondaryNav_getOpenDropdowns = function _RhSecondaryNav_getOpenDropdowns() {
    const dropdowns = __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_allDropdowns).call(this);
    const openDropdowns = [];
    dropdowns.forEach(dropdown => {
        if (dropdown.expanded) {
            openDropdowns.push(dropdown);
        }
    });
    return openDropdowns;
}, _RhSecondaryNav_getDropdownIndex = function _RhSecondaryNav_getDropdownIndex(element) {
    if (!RhSecondaryNav_1.isDropdown(element)) {
        __classPrivateFieldGet(this, _RhSecondaryNav_logger, "f").warn('The getDropdownIndex method expects to receive a dropdown element.');
        return;
    }
    const dropdowns = __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_allDropdowns).call(this);
    const index = dropdowns.findIndex(dropdown => dropdown.id === element.id);
    return index;
}, _RhSecondaryNav_dropdownByIndex = function _RhSecondaryNav_dropdownByIndex(index) {
    const dropdowns = __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_allDropdowns).call(this);
    if (dropdowns[index] === undefined) {
        __classPrivateFieldGet(this, _RhSecondaryNav_logger, "f").error('This dropdown index does not exist.');
        return;
    }
    return dropdowns[index];
}, _RhSecondaryNav_expand = function _RhSecondaryNav_expand(index) {
    if (index == null) {
        return;
    }
    const dropdown = __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_dropdownByIndex).call(this, index);
    if (dropdown && RhSecondaryNav_1.isDropdown(dropdown)) {
        __classPrivateFieldGet(this, _RhSecondaryNav_instances, "m", _RhSecondaryNav_openDropdown).call(this, dropdown);
    }
}, _RhSecondaryNav_allDropdowns = function _RhSecondaryNav_allDropdowns() {
    return Array.from(this.querySelectorAll('rh-secondary-nav-dropdown')).filter(RhSecondaryNav_1.isDropdown);
}, _RhSecondaryNav_closeDropdown = function _RhSecondaryNav_closeDropdown(dropdown) {
    if (dropdown.expanded === false) {
        return;
    }
    dropdown.expanded = false;
}, _RhSecondaryNav_openDropdown = function _RhSecondaryNav_openDropdown(dropdown) {
    if (dropdown.expanded === true) {
        return;
    }
    dropdown.expanded = true;
}, _RhSecondaryNav_updateAccessibility = function _RhSecondaryNav_updateAccessibility() {
    // remove role="navigation" from host on upgrade
    this.removeAttribute('role');
    // remove aria-labelledby from slotted `<ul>` on upgrade
    const nav = this.querySelector(':is([slot="nav"]):is(ul)');
    nav?.removeAttribute('aria-labelledby');
}, _RhSecondaryNav_toggleMobileMenu = function _RhSecondaryNav_toggleMobileMenu() {
    if (this._mobileMenuExpanded) {
        this._mobileMenuExpanded = false;
    }
    else {
        this._mobileMenuExpanded = true;
    }
    this.dispatchEvent(new SecondaryNavOverlayChangeEvent(this._mobileMenuExpanded, this));
}, _RhSecondaryNav_setNavOrder = function _RhSecondaryNav_setNavOrder() {
    return this.mainNav ? 'main' : 'secondary';
};
RhSecondaryNav.version = '{{version}}';
RhSecondaryNav.styles = [styles];
__decorate([
    query('rh-secondary-nav-overlay')
], RhSecondaryNav.prototype, "_overlay", void 0);
__decorate([
    query('#container')
], RhSecondaryNav.prototype, "_container", void 0);
__decorate([
    query('nav')
], RhSecondaryNav.prototype, "_nav", void 0);
__decorate([
    query('button')
], RhSecondaryNav.prototype, "_mobileMenuButton", void 0);
__decorate([
    observed,
    state()
], RhSecondaryNav.prototype, "_compact", void 0);
__decorate([
    state()
], RhSecondaryNav.prototype, "_mobileMenuExpanded", void 0);
__decorate([
    property({ reflect: true, attribute: 'main', type: Boolean })
], RhSecondaryNav.prototype, "mainNav", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhSecondaryNav.prototype, "colorPalette", void 0);
__decorate([
    state()
], RhSecondaryNav.prototype, "_ctaColorPalette", void 0);
__decorate([
    bound
], RhSecondaryNav.prototype, "_dropdownChangeHandler", null);
__decorate([
    bound
], RhSecondaryNav.prototype, "_focusOutHandler", null);
__decorate([
    bound
], RhSecondaryNav.prototype, "_overlayClickHandler", null);
__decorate([
    bound
], RhSecondaryNav.prototype, "_keyboardControls", null);
__decorate([
    bound
], RhSecondaryNav.prototype, "_toggleNavOverlay", null);
RhSecondaryNav = RhSecondaryNav_1 = __decorate([
    customElement('rh-secondary-nav')
], RhSecondaryNav);
export { RhSecondaryNav };
//# sourceMappingURL=rh-secondary-nav.js.map