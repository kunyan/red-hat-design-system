import {css} from 'lit';
export const styles = css`:host {
  display: block;
}

div {
    width: 100%;
    height: 100%;
    display: flex;
    --_accent-color: var(--rh-color-brand-red, #ee0000);
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
}

:host([on="dark"]) div {
    --_accent-color: #fff;
}

span, ::slotted(*) {
    display: block;
    text-align: center;
}

.hasIcon ::slotted([slot="icon"]),
.hasIcon pfe-icon[size="md"] {
    order: 1;
    display: block;
    color: black;
    margin-bottom: 16px;
}

:not(.hasIcon) #icon,
:not(.hasStatistic) #statistic,
:not(.hasTitle) #title,
:not(.hasCta) #cta {
  display: none;
}

pfe-icon[size="md"],
::slotted(pfe-icon[size="md"]) {
    --pfe-icon--size: var(--rh-font-size-heading-xl, 2.5rem);
    display: contents;
}

#title {
    order: 1;
    color: var(--_accent-color);
    font-size: var(--rh-font-size-body-text-xl, 1.25rem);
    font-family: var(--rh-font-family-heading, "RedHatDisplay", "Overpass", Helvetica, Arial, sans-serif);
    font-weight: var(--rh-font-weight-regular, 400);
    text-transform: uppercase;
}

#statistic {
    order: 2;
    color: var(--_accent-color);
    font-size: var(--rh-font-size-heading-lg, 2.25rem);
    font-weight: var(--rh-font-weight-regular, 300);
    font-family: var(--rh-font-family-heading, "RedHatDisplay", "Overpass", Helvetica, Arial, sans-serif);
}

#content {
    order: 3;
    font-size: var(--rh-font-size-body-text-lg, 1.125rem);
    font-family: var(--rh-font-family-text, "RedHatText", "Overpass", Helvetica, Arial, sans-serif);
    margin-top: var(--rh-space-sm, 0.5rem);
}


#cta {
    order: 4;
    font-size: var(--rh-font-size-body-text-lg, 1.125rem);
    font-family: var(--rh-font-family-heading, "RedHatDisplay", "Overpass", Helvetica, Arial, sans-serif);
    margin-top: var(--rh-space-lg, 1.5rem);
}

:host([size="large"]) #statistic {
    font-size: var(--rh-font-size-heading-2xl, 3rem);
}

.isMobile #content {
    font-size: var(--rh-font-size-body-text-lg, 1.125rem);
}

.isMobile #statistic {
    font-size: 32px;
}

:host([top="statistic"]) #statistic {
    order: 1;
}

:host([top="statistic"]) #title {
    order: 2;
}

`;
export default styles;
