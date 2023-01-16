import {css} from 'lit';
export const styles = css`:host {
  --_padding-block-start: var(--rh-space-lg, 16px);
  --_padding-inline-end: var(--rh-space-xl, 24px);
  --_padding-block-end: var(--rh-space-lg, 16px);
  --_padding-inline-start: var(--rh-space-xl, 24px);
  --_text-color: var(--rh-color-text-primary-on-light, #151515);
  --_active-text-color: var(--rh-color-text-primary-on-light, #151515);
  --_background-color: #ffffff;
  --_active-background-color: var(--_rhds-background-color, #f0f0f0);
  --_font-size: var(--rh-font-size-body-text-md, 1rem);
  --_after-background-color: transparent;
  --_expanded-background-color: var(--rh-color-text-brand-on-light, #ee0000);
}

#heading {
  color: var(--rh-color-text-primary-on-light, #151515);
  background-color: var(--_rhds-background-color, var(--rh-color-surface-lightest, #ffffff));
  font-weight: var(--rh-font-weight-heading-medium, 500);
}

.dark {
  --_text-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --_background-color: var(--rh-color-surface-darkest, #151515);
  --_active-background-color: var(--rh-color-surface-darkest, #151515);
  --_active-text-color: var(--rh-color-text-primary-on-dark, #ffffff);
  --_expanded-background-color: var(--rh-color-brand-red-on-dark, #ff3333);
  --_border-inline-end-color: var(--rh-color-black-600, #6a6e73);
}

:host([large]) {
  --_font-size: var(--rh-font-size-body-text-lg, 1.125rem);
  --_padding-block-start: var(--rh-space-lg, 16px);
  --_padding-inline-end: var(--rh-space-xl, 24px);
  --_padding-block-end: var(--rh-space-lg, 16px);
  --_padding-inline-start: var(--rh-space-xl, 24px);
}

:host([expanded]) {
  border-inline-end: 2px solid var(--_border-inline-end-color, #d2d2d2);
}

:host(.animating) #button,
:host([expanded]) #button {
  border-inline-end-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
  border-inline-start-color: var(--rh-color-border-subtle-on-light, #d2d2d2);
}

#button,
#button:before,
#button:after {
  background-color: var(--_background-color, transparent);
}

#icon {
  width: 16px;
  height: 16px;
  will-change: rotate;
  transition: rotate 0.2s ease-in 0s;
}

#button {
  padding:
    var(--_padding-block-start)
    var(--_padding-inline-end)
    var(--_padding-block-end)
    var(--_padding-inline-start);
  font-family: var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Overpass, Helvetica, Arial, sans-serif);
  font-size: var(--_font-size, var(--rh-font-size-body-text-md, 1rem));
  font-weight: var(--rh-font-weight-heading-medium, 500);
  color: var(--_text-color);
}

#button #icon {
  fill: var(--_text-color);
}

#button[aria-expanded="true"] {
  --_after-background-color: var(--_expanded-background-color);
}

#button:after {
  inset-block-start: -1px;
  width: var(--rh-border-width-lg, 3px);
  background-color: var(--_after-background-color);
}

span {
  max-width: calc(100% - var(--rh-space-xl, 24px));
  overflow: auto;
  text-overflow: unset;
  white-space: normal;
  text-align: start;
}

#button[aria-expanded="true"] #icon {
  rotate: -180deg;
}

#button:hover,
#button:active,
#button:focus {
  background-color: var(--_active-background-color);
}

#button:hover span,
#button:focus span,
#button:active span {
  color: var(--_active-text-color);
}

#button:focus span,
#button:active span {
  font-weight: var(--rh-font-weight-heading-bold, 700);
}
`;
export default styles;
