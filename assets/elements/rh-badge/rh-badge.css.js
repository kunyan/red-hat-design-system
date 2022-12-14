import {css} from 'lit';
export const styles = css`:host {
  --_color: var(--rh-context-light-color-text, #151515);
  --_background-color: var(--rh-color-black-200, #f0f0f0);

  background-color: var(--_background-color);
  border-radius: var(--rh-border-radius-pill, 64px);
  color: var(--_color);
  display: inline-block;
  font-size: var(--rh-font-size-body-text-xs, 0.75rem);
  font-weight: 700;
  line-height: var(--rh-line-height-body-text, 1.5);
  min-width: var(--rh-length-2xl, 32px);
  padding-left: var(--rh-space-md, 8px);
  padding-right: var(--rh-space-md, 8px);
}

:host([state="info"]) {
  --_color: var(--rh-context-dark-color-text, #ffffff);
  --_background-color: var(--rh-color-blue-400, #0066cc);
}

:host([state="success"]) {
  --_color: var(--rh-context-dark-color-text, #ffffff);
  --_background-color: var(--rh-color-green-500, #3e8635);
}

:host([state="moderate"]) {
  --_color: var(--rh-color-black-900, #151515);
  --_background-color: var(--rh-color-gold-400, #f0ab00);
}

:host([state="important"]) {
  --_color: var(--rh-context-dark-color-text, #ffffff);
  --_background-color: var(--rh-color-red-600, #be0000);
}

:host([state="critical"]) {
  --_color: var(--rh-context-dark-color-text, #ffffff);
  --_background-color: var(--rh-color-red-700, #8f0000);
}
`;
export default styles;
