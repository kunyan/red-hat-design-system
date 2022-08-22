import {css} from 'lit';
export const styles = css`:host {
  display: inline-flex;
  position: relative;
  z-index: 0;
  align-items: center;
  max-width: max-content;
  background-color: var(--rh-cta-background-color);
  border-radius: var(--rh-border-radius-default, 0.1875rem);
  border: var(--rh-border-width-md, 0.125rem) solid var(--rh-cta-border-color, transparent);
  cursor: pointer;
  --rh-context-background-color: var(--rh-cta-background-color) !important;
}

::slotted(*) {
  white-space: normal;
  display: inline;
  padding: 0.6rem, 0 !important;
  color: inherit !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  text-decoration: inherit !important;
}

::slotted(button),
::slotted(input) {
  background-color: transparent;
  border: medium none;
  margin: 0px;
  padding: 0px;
  text-align: left;
}

#container {
  display: block;
  white-space: nowrap;
  min-width: 100%;
  color: var(--rh-cta-color);
  font-family: var(--rh-font-family-heading, "RedHatDisplay", "Overpass", Helvetica, Arial, sans-serif);
  font-size: var(--rh-font-size-text-xl, 1.125rem);
  font-weight: var(--rh-font-weight-bold, 600);
  line-height: var(--rh-line-height-lg, 1.5);
  text-decoration: var(--rh-cta-text-decoration);
  --_arrow-size: 13px;
}

/** Inner border */
#container::after {
  content: '';
  display: block;
  height: calc(100% - 4px);
  width: calc(100% - 4px);

  box-sizing: border-box;
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: -1;

  border: var(--rh-border-width-md, 0.125rem) solid var(--rh-cta-inner-border-color);
  border-radius: 2px;
  outline: none;
}

/* Default CTA arrow wrap fix for Firefox */
@media all and (min-moz-device-pixel-ratio:0) {
  :host(:not([variant])) #container {
    max-width: calc(100% - 1ch - var(--_arrow-size));
  }
}

/** Default variant arrow icon */
svg {
  display: inline;
  fill: currentColor;
  width: var(--_arrow-size);
  height: var(--_arrow-size);
  margin-bottom: -1px;
  padding-inline: 3px;
  translate: 0 0;
  transition: translate var(--_trans);
  --_trans:
    var(--rh-animation-speed, 0.3s)
    var(--rh-animation-timing, cubic-bezier(0.465, 0.183, 0.153, 0.946));
}

#container.rtl svg {
  rotate: 180deg;
}

/*****************************************************************************
 * FOCUS STATE                                                               *
 *****************************************************************************/

:host(:is(:focus, :focus-within)),
:host(:is(:focus, :focus-within)) ::slotted(*),
::slotted(:focus) {
  outline: none !important;
}

:host(:is(:focus, :focus-within)) {
  border-color: var(--rh-cta-focus-border-color);
  --rh-cta-inner-border-color: var(--rh-cta-focus-inner-border-color);
  --rh-cta-background-color: var(--rh-cta-focus-background-color) !important;
}

:host(:is(:focus, :focus-within)) #container {
  --rh-cta-color: var(--rh-cta-focus-color);
  --rh-cta-text-decoration: var(--rh-cta-focus-text-decoration);
  background-color: var(--rh-cta-focus-container-background-color, var(--rh-cta-focus-background-color));
}

/*****************************************************************************
 * HOVER STATE                                                               *
 *****************************************************************************/

:host(:hover) {
  background-color: var(--rh-cta-hover-background-color);
  border-color: var(--rh-cta-hover-border-color);
  --rh-cta-inner-border-color: var(--rh-cta-hover-inner-border-color);
}

:host(:hover) #container {
  color: var(--rh-cta-hover-color);
  --rh-cta-text-decoration: var(--rh-cta-hover-text-decoration);
}

:host(:hover) svg {
  translate: 3px 0;
}

:host(:hover) #container.rtl svg {
  translate: -3px 0;
}

/*****************************************************************************
 * ACTIVE STATE                                                              *
 *****************************************************************************/

:host(:active) {
  background-color: var(--rh-cta-active-background-color);
  --rh-cta-inner-border-color: var(--rh-cta-active-inner-border-color) !important;
}

:host(:active) #container {
  --rh-cta-background-color: var(--rh-cta-active-container-background-color, var(--rh-cta-active-background-color));
}

/*****************************************************************************
 * VARIANTS                                                                  *
 *****************************************************************************/

:host([variant]) #container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  background-color: transparent;
}

:host([variant\$=ary]) ::slotted(*) {
  font-size: var(--rh-cta-font-size-priority, var(--rh-font-size-text-lg, 1rem));
  text-align: center;
}

:host([variant]) ::slotted(*) {
  padding: var(--rh-space-md, 1rem) calc(var(--rh-space-md, 1rem) * 2) !important;
}

:host([variant]) svg {
  display: none;
}

/*****************************************************************************
 * DEFAULT
 *****************************************************************************/

:host(:not([variant])) {
  --rh-cta-background-color: transparent;
  --rh-cta-border-color: transparent;
  --rh-cta-color: var(--rh-color-interactive-blue, #0066cc);
  --rh-cta-hover-background-color: transparent;
  --rh-cta-hover-border-color: transparent;
  --rh-cta-hover-inner-border-color: transparent;
  --rh-cta-hover-color: var(--rh-context-color-link-hover, #004080);
  --rh-cta-hover-text-decoration: none;
  --rh-cta-focus-background-color: transparent;
  --rh-cta-focus-container-background-color: #0066cc1a; /* --rh-color-border-interactive-on-light with 10% opacity */
  --rh-cta-focus-border-color: transparent;
  --rh-cta-focus-color: var(--rh-context-light-color-focus, #0066cc);
  --rh-cta-focus-inner-border-color: transparent;
  --rh-cta-focus-text-decoration: none;
  --rh-cta-active-container-background-color: #0066cc1a; /* --rh-color-border-interactive-on-light with 10% opacity */
  --rh-cta-active-inner-border-color: transparent;
  --rh-cta-active-text-decoration: none;
}

:host(:not([variant])[on=dark]) {
  --rh-cta-color: var(--rh-color-interactive-blue-lighter, #73BCF7);
  --rh-cta-hover-color: var(--rh-color-interactive-blue-lightest, #bee1f4);
  --rh-cta-focus-container-background-color: #73BCF740; /* --rh-color-interactive-blue-lighter with 25% opacity */
  --rh-cta-focus-border-color: transparent;
  --rh-cta-focus-color: var(--rh-color-interactive-blue-lighter, #73BCF7);
  --rh-cta-focus-inner-border-color: transparent;
  --rh-cta-focus-text-decoration: none;
  --rh-cta-active-container-background-color: #73BCF740; /* --rh-color-interactive-blue-lighter with 25% opacity */
  --rh-cta-active-text-decoration: none;
}

/*****************************************************************************
 * PRIMARY
 *****************************************************************************/

:host([variant=primary]) {
  --rh-cta-background-color: var(--rh-color-brand-red-on-light, #ee0000);
  --rh-cta-border-color: var(--rh-color-brand-red-on-light, #ee0000);
  --rh-cta-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --rh-cta-hover-background-color: var(--rh-color-brand-red-dark, #be0000);
  --rh-cta-hover-border-color: var(--rh-color-brand-red-dark, #be0000);
  --rh-cta-hover-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --rh-cta-focus-background-color: var(--rh-color-brand-red-on-light, #ee0000);
  --rh-cta-focus-border-color: var(--rh-color-brand-red-on-light, #ee0000);
  --rh-cta-focus-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --rh-cta-focus-inner-border-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --rh-cta-active-background-color: var(--rh-color-brand-red-dark, #be0000);
  --rh-cta-active-inner-border-color: var(--rh-color-text-primary-on-dark, #ffffff);
}

/*****************************************************************************
 * SECONDARY
 *****************************************************************************/

:host([variant=secondary]) {
  --rh-cta-background-color: transparent;
  --rh-cta-border-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-color: var(--rh-color-text-primary-on-light, #151515);
  --rh-cta-hover-background-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-hover-border-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-hover-color: var(--rh-color-primary-on-dark, #ffffff);
  --rh-cta-focus-background-color: var(--rh-color-surface-light, #f0f0f0);
  --rh-cta-focus-border-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-focus-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-focus-inner-border-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-active-color: var(--rh-color-surface-lightest, #ffffff);
  --rh-cta-active-background-color: var(--rh-color-surface-darkest, #151515);
  --rh-cta-active-inner-border-color: var(--rh-color-surface-light, #f0f0f0);
}

:host([variant=secondary][on=dark]) {
  --rh-cta-border-color: var(--rh-color-border-strong-on-dark, #FFFFFF);
  --rh-cta-color: var(--rh-color-text-primary-on-dark, #FFFFFF);
  --rh-cta-hover-background-color: var(--rh-color-surface-lightest, #ffffff);
  --rh-cta-hover-border-color: var(--rh-color-surface-lightest, #ffffff);
  --rh-cta-hover-color: var(--rh-color-text-primary-on-light, #151515);
  --rh-cta-focus-background-color: var(--rh-color-surface-dark, #3c3f42);
  --rh-cta-focus-border-color: var(--rh-color-border-strong-on-dark, #FFFFFF);
  --rh-cta-focus-inner-border-color: var(--rh-color-border-strong-on-dark, #FFFFFF);
  --rh-cta-focus-color: var(--rh-color-text-primary-on-dark, #FFFFFF);
  --rh-cta-active-color: var(--rh-color-text-primary-on-light, #151515);
  --rh-cta-active-background-color: var(--rh-color-surface-lightest, #FFFFFF);
  --rh-cta-active-inner-border-color: var(--rh-color-border-strong-on-light, #151515);
}

/*****************************************************************************
 * BRICK
 *****************************************************************************/

:host([variant=brick]) #container {
  font-weight: var(--rh-font-weight-body-text-regular, 400);
}

:host([variant=brick]) {
  --rh-cta-background-color: transparent;
  --rh-cta-border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  --rh-cta-color: var(--rh-color-interactive-blue-darker, #06c);
  --rh-cta-hover-background-color: var(--rh-color-surface-lighter, #f5f5f5);
  --rh-cta-hover-border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  --rh-cta-hover-color: var(--rh-color-interactive-blue-darkest, #004080);
  --rh-cta-hover-text-decoration: underline;
  --rh-cta-focus-color: var(--rh-color-interactive-blue-darker, #06c);
  --rh-cta-focus-border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  --rh-cta-focus-inner-border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  --rh-cta-focus-text-decoration: none;
  --rh-cta-active-background-color: var(--rh-color-surface-lighter, #f5f5f5);
  --rh-cta-active-inner-border-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  --rh-cta-active-text-decoration: underline;
}

:host([variant=brick][on=dark]) {
  --rh-cta-border-color: var(--rh-color-border-subtle-on-dark, #6a6e73);
  --rh-cta-color: var(--rh-color-interactive-blue-lighter, #73bcf7);
  --rh-cta-hover-background-color: var(--rh-color-surface-darker, #212427);
  --rh-cta-hover-border-color: var(--rh-color-border-subtle-on-dark, #6a6e73);
  --rh-cta-hover-color: var(--rh-color-interactive-blue-lightest, #bee1f4);
  --rh-cta-hover-text-decoration: underline;
  --rh-cta-focus-color: var(--rh-color-interactive-blue-lighter, #73bcf7);
  --rh-cta-focus-border-color: var(--rh-color-border-subtle-on-dark, #6a6e73);
  --rh-cta-focus-inner-border-color: var(--rh-color-border-subtle-on-dark, #6a6e73);
  --rh-cta-focus-text-decoration: none;
  --rh-cta-active-background-color: var(--rh-color-surface-darker, #212427);
  --rh-cta-active-inner-border-color: var(--rh-color-border-subtle-on-dark, #6a6e73);
  --rh-cta-active-text-decoration: underline;
}

/* chrome <= 103 */
@supports not (translate: 0 0) {
  svg {
    transform: translate(0, 0);
    transition: transform var(--_trans);
  }
  #container.rtl svg {
    transform: translate(0, 0) rotate(180deg);
  }
  :host(:hover) svg { transform: translate(3px, 0); }
  :host(:hover) #container.rtl svg { transform: translate(-3px, 0) rotate(180deg); }
}

`;
export default styles;
