import {css} from 'lit';
export const styles = css`:host {
  --_chevron-size: 0.35em;
  --_chevron-thickness: 0.125em;
  --_chevron-up-angle: 45deg;
  --_chevron-down-angle: -135deg;
  --_chevron-color:  var(--rh-color-text-primary-on-light, #151515);
  --_chevron-transform-collapsed: rotate(var(--_chevron-up-angle)) translate(calc(-1 * var(--_chevron-size)), var(--_chevron-thickness));
  --_chevron-transform-expanded: rotate(var(--_chevron-down-angle)) translate(var(--_chevron-thickness), calc(var(--_chevron-inverse, -1) * var(--_chevron-size)));
  --_button-font-color:  var(--rh-color-text-primary-on-light, #151515);
  --_nav-height: 4.625em;

  z-index: var(--rh-secondary-nav-z-index, 102);
}

:host([color-palette="darker"]) {
  --_button-font-color:  var(--rh-color-text-primary-on-dark, #FFFFFF);
  --_chevron-color:  var(--rh-color-text-primary-on-dark, #FFFFFF);
}

nav {
  position: relative;
  height: 100%;
  z-index: var(--rh-secondary-nav-z-index, 102);
}

nav.rtl {
  --_chevron-up-angle: -45deg;
  --_chevron-down-angle: 135deg;
  --_chevron-transform-collapsed: rotate(var(--_chevron-up-angle)) translate(var(--_chevron-thickness), calc(-1 * var(--_chevron-thickness)));
  --_chevron-transform-expanded: rotate(var(--_chevron-down-angle)) translate(var(--_chevron-thickness), calc(-1 * var(--_chevron-thickness)));
}

#container {
  display: grid;
  position: relative;
  grid-template-areas: 'logo menu' 'nav nav' 'cta cta';
  grid-template-columns: 1fr max-content;
  grid-template-rows: var(--_nav-height) max-content max-content;
  column-gap: 1em;
  row-gap: 0;
  height: fit-content;
  z-index: var(--rh-secondary-nav-z-index, 102);
  background-color: var(--rh-color-surface-light, #F0F0F0);
}

#container.expanded {
  --_chevron-color:  var(--rh-color-text-primary-on-light, #151515);
}

:host([color-palette="darker"]) #container {
  background-color: var(--rh-color-surface-dark, #3C3F42);
}

#container.expanded ::slotted([slot="nav"]),
#container.expanded ::slotted([slot="cta"]) {
  display: flex !important;
}

#container.expanded ::slotted([slot="nav"]) {
  list-style: none;
  flex-direction: column;
  padding: 2em 1em 0 1em;
  margin: 0 !important;
  max-height: calc(100vh - var(--_nav-height));
  overflow-y: auto;
}

nav.compact #container.expanded ::slotted([slot="nav"]) {
  background-color: var(--rh-color-surface-lightest, #FFFFFF);
}

#container.expanded ::slotted([slot="cta"]) {
  padding: 2em 1em 2em;
}

nav.compact #container.expanded #cta {
  background-color: var(--rh-color-surface-lightest, #FFFFFF);
}

button {
  grid-area: menu;
  border: none;
  display: flex;
  height: 100%;
  align-items: center;
  font-family: 'Red Hat Display', Arial, sans-serif;
  font-size: 1em;
  padding: 1em;
  border-block-start: 0.25em solid transparent;
  margin-inline-end: 1em;
  color: var(--_button-font-color);
  background-color: var(--rh-color-surface-light, #F0F0F0);
}

button:hover {
  border-block-start-color: var(--rh-color-text-brand-on-light, #ee0000);
}

button::after {
  box-sizing: content-box !important;
  content: "";
  display: block;
  margin-inline-start: 1em;
  width: var(--_chevron-size);
  height: var(--_chevron-size);
  border-inline-end: var(--_chevron-thickness) solid var(--_chevron-color);
  border-block-end: var(--_chevron-thickness) solid var(--_chevron-color);
  transform: var(--_chevron-transform-collapsed);
}

button[aria-expanded="true"]::after {
  transform: var(--_chevron-transform-expanded);
}

button:focus {
  border-block-start-color: var(--rh-color-text-brand-on-light, #ee0000);
}

:host([color-palette="dark"]) button {
  background-color: var(--rh-color-surface-dark, #3C3F42);
}

button:active,
button[aria-expanded="true"],
:host([color-palette="darker"]) button[aria-expanded="true"]  {
  color: var(--rh-color-text-primary-on-light, #151515);
  background-color: var(--rh-color-surface-lightest, #FFFFFF);
  border-block-start-color: var(--rh-color-text-brand-on-light, #ee0000);
  border-block-end: none;
}

:host([color-palette="darker"]) button:active {
  color: var(--rh-color-text-primary-on-dark, #FFFFFF);  
}

:host([color-palette="darker"]) button[aria-expanded="true"]:active {
  color: var(--rh-color-text-primary-on-light, #151515);
}

#cta {
  grid-area: cta;
}

@media screen and (min-width:768px) {
  button {
    margin-inline-end: 2em;
  }

  #container.expanded ::slotted([slot="nav"]) {
    padding: 2em 2em 0 2em !important;
  }

  #container.expanded ::slotted([slot="cta"]) {
    padding: 2em !important;
  }
}

@media screen and (min-width: 992px) {
  #container {
    grid-template-areas: 'logo nav cta';
    grid-template-columns: max-content 1fr max-content;
  }

  button {
    display: none;
  }
}
`;
export default styles;
