import { css } from 'lit';

export default css`
:host {
  --BackgroundColor: #F2F9F9;
  --BorderWidth: 3px;
  --BorderColor: #009596;
  --BorderStyle: solid;
  --Padding: 16px;
  --Gap: 4px;
  --Header--MarginBottom: var(--pfe-alert--Gap, 4px);
  --headerActions--MarginRight: 4px;
  --title--Color: #003737;
  --title--FontSize: 14px;
  --title--FontWeight: 500;
  --icon--Color: #009596;
  --icon--Width: var(--pfe-alert__icon--Size, 24px);
  --icon--Height: var(--pfe-alert__icon--Size, 24px);
  --description--FontSize: 14px;
  --close-button--Color: #6A6E73 ;
  --close-button--BackgroundColor : transparent;
  --close-button--Border :none ;
  --close-button--Height : var(--pfe-alert__close-button--Size, 24px);
  --close-button--Width : var(--pfe-alert__close-button--Size, 24px);
  --close-button--hover--Color : #151515;
  --action-group--MarginTop : var(--pfe-alert--Padding, 16px);
  --action-group--Gap : 24px;
  --action-group-item--MarginRight : var(--pfe-alert__action-group--Gap, 24px);
  --action-group-item--Padding : 0;
  --action-group-item--border : none;
  --action-group-item--BackgroundColor : transparent;
  --action-group-item--Color : #0066CC;
  --action-group-item--FontSize : 14px;
  --action-group-item--hover--Color : #004080;
  --action-group-item--hover--TextDecoration : underline;
  display: block;
}

:host([hidden]) {
  display: none;
}

:host([state="info"]) {
  --BorderColor: #2B9AF3 !important;
  --icon--Color: #2B9AF3 !important;
  --title--Color: #002952 !important;
  --BackgroundColor: #E7F1FA !important;
}

:host([state="success"]) {
  --BorderColor: #3E8635;
  --icon--Color: #3E8635;
  --title--Color: #1E4F18;
  --BackgroundColor: #F3FAF2;
}

:host([state="warning"]) {
  --BorderColor: #F0AB00;
  --icon--Color: #F0AB00;
  --title--Color: #795600;
  --BackgroundColor: #FDF7E7;
}

:host([state="danger"]) {
  --BorderColor: #C9190B;
  --icon--Color: #C9190B;
  --title--Color: #7D1007;
  --BackgroundColor: #FAEAE8;
}

.pfe-alert__container {
  border-width: var(--BorderWidth);
  border-color: var(--BorderColor);
  border-style: var(--BorderStyle);
  background-color: var(--BackgroundColor);
  padding: var(--Padding);
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: var(--Gap);
}

.pfe-alert__left-column {
  display: inline-block;
  vertical-align: top;
}

.pfe-alert__middle-column {
  display: inline-block;
  vertical-align: top;
}

.pfe-alert__header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: var(--Header--MarginBottom);
}

.pfe-alert__header-actions {
  margin-right: var(--headerActions--MarginRight);
}

.pfe-alert__title {
  font-size: var(--title--FontSize);
  color: var(--title--Color);
  font-weight: var(--title--FontWeight);
  flex: 1 1 auto;
}

.pfe-alert__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--icon--Width);
  height: var(--icon--Height);
  color: var(--icon--Color);
}

.pfe-alert__close-button {
  color: var(--close-button--Color);
  background-color: var(--close-button--BackgroundColor);
  border: var(--close-button--Border);
  width: var(--close-button--Width);
  height: var(--close-button--Height);
  cursor: pointer;
}

.pfe-alert__close-button:hover {
  color: var(---close-button--hover--Color);
}

.pfe-alert__close-button:hover {
  color: var(--close-button--hover--Color);
}

.pfe-alert__description {
  font-size: var(--description--FontSize);
}
.pfe-alert__action-group {
  margin-top: var(--action-group--MarginTop);
}

.pfe-alert__action-group-item,
#action-group::slotted(.pfe-alert__action-group-item) {
  margin-right: var(--action-group-item--MarginRight);
  padding: var(--action-group-item--Padding);
  border: var(--action-group-item--border);
  background-color: var(--action-group-item--BackgroundColor);
  color: var(--action-group-item--Color);
  font-size: var(--action-group-item--FontSize);
}

.pfe-alert__action-group-item:hover,
#action-group::slotted(.pfe-alert__action-group-item:hover) {
  text-decoration: var(--action-group-item--hover--TextDecoration);
  color: var(--action-group-item--hover--Color);
}
button.pfe-alert__action-group-item,
#action-group::slotted(.pfe-alert__action-group-item) {
  margin-right: var(--action-group-item--MarginRight) !important;
}

:host(:not([variant])) .pfe-alert__container {
  border-left: none;
  border-bottom: none;
  border-right: none;
}`