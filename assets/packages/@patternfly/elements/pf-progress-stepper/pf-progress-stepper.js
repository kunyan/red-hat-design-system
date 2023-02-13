var _PfProgressStepper_instances, _PfProgressStepper_internals, _PfProgressStepper_mo, _PfProgressStepper_onMutation;
var PfProgressStepper_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { observed } from '@patternfly/pfe-core/decorators/observed.js';
import { css } from "lit";
const style = css `[hidden]{display:none!important}:host{--pf-c-progress-stepper--m-vertical--GridAutoFlow:row;--pf-c-progress-stepper--m-vertical--GridTemplateColumns:auto 1fr;--pf-c-progress-stepper--m-vertical__step-connector--before--Top:0;--pf-c-progress-stepper--m-vertical__step-connector--before--Left:calc(var(--pf-c-progress-stepper__step-icon--Width) / 2);--pf-c-progress-stepper--m-vertical__step-connector--before--Width:auto;--pf-c-progress-stepper--m-vertical__step-connector--before--Height:100%;--pf-c-progress-stepper--m-vertical__step-connector--before--BorderRightWidth:var(--pf-global--BorderWidth--md, 2px);--pf-c-progress-stepper--m-vertical__step-connector--before--BorderRightColor:var(--pf-global--BorderColor--100, #d2d2d2);--pf-c-progress-stepper--m-vertical__step-connector--before--BorderBottomWidth:0;--pf-c-progress-stepper--m-vertical__step-connector--before--BorderBottomColor:transparent;--pf-c-progress-stepper--m-vertical__step-connector--before--Transform:translateX(-50%);--pf-c-progress-stepper--m-vertical__step-main--MarginTop:var(--pf-global--spacer--xs, 0.25rem);--pf-c-progress-stepper--m-vertical__step-main--MarginRight:0;--pf-c-progress-stepper--m-vertical__step-main--MarginBottom:var(--pf-global--spacer--xl, 2rem);--pf-c-progress-stepper--m-vertical__step-main--MarginLeft:var(--pf-global--spacer--xs, 0.25rem);--pf-c-progress-stepper--m-vertical--m-compact--GridTemplateColumns:1fr;--pf-c-progress-stepper--m-vertical--m-compact__step-connector--PaddingBottom:var(--pf-global--spacer--xs, 0.25rem);--pf-c-progress-stepper--m-vertical--m-compact__step-connector--GridRow:auto;--pf-c-progress-stepper--m-vertical--m-compact__step-main--MarginRight:0;--pf-c-progress-stepper--m-vertical--m-center__step-main--MarginRight:0;--pf-c-progress-stepper--m-vertical--m-center__step-main--MarginLeft:0;--pf-c-progress-stepper--m-horizontal--GridAutoFlow:column;--pf-c-progress-stepper--m-horizontal--GridTemplateColumns:initial;--pf-c-progress-stepper--m-horizontal__step-connector--before--Top:calc(var(--pf-c-progress-stepper__step-icon--Height) / 2);--pf-c-progress-stepper--m-horizontal__step-connector--before--Left:0;--pf-c-progress-stepper--m-horizontal__step-connector--before--Width:100%;--pf-c-progress-stepper--m-horizontal__step-connector--before--Height:auto;--pf-c-progress-stepper--m-horizontal__step-connector--before--BorderRightWidth:0;--pf-c-progress-stepper--m-horizontal__step-connector--before--BorderRightColor:unset;--pf-c-progress-stepper--m-horizontal__step-connector--before--BorderBottomWidth:var(--pf-global--BorderWidth--md, 2px);--pf-c-progress-stepper--m-horizontal__step-connector--before--BorderBottomColor:var(--pf-global--BorderColor--100, #d2d2d2);--pf-c-progress-stepper--m-horizontal__step-connector--before--Transform:translateY(-50%);--pf-c-progress-stepper--m-horizontal__step-main--MarginTop:var(--pf-global--spacer--xs, 0.25rem);--pf-c-progress-stepper--m-horizontal__step-main--MarginRight:var(--pf-global--spacer--xs, 0.25rem);--pf-c-progress-stepper--m-horizontal__step-main--MarginBottom:0;--pf-c-progress-stepper--m-horizontal__step-main--MarginLeft:0;--pf-c-progress-stepper--m-horizontal--m-compact--GridTemplateColumns:repeat(auto-fill, 1.75rem);--pf-c-progress-stepper--m-horizontal--m-compact__step-connector--PaddingBottom:0;--pf-c-progress-stepper--m-horizontal--m-compact__step-connector--GridRow:2;--pf-c-progress-stepper--m-compact--GridAutoFlow:row;--pf-c-progress-stepper--m-compact__step-main--MarginTop:0;--pf-c-progress-stepper--m-compact__step-main--MarginBottom:var(--pf-global--spacer--xs, 0.25rem);--pf-c-progress-stepper--m-compact__step-connector--MinWidth:1.75rem;--pf-c-progress-stepper--m-compact__step-icon--Width:1.125rem;--pf-c-progress-stepper--m-compact__step-icon--FontSize:var(--pf-global--icon--FontSize--sm, 0.625rem);--pf-c-progress-stepper--m-compact__step-title--FontSize:var(--pf-global--FontSize--sm, 0.875rem);--pf-c-progress-stepper--m-compact__step-title--FontWeight:var(--pf-global--FontWeight--normal, 400);--pf-c-progress-stepper--m-compact__pficon--MarginTop:2px;--pf-c-progress-stepper--m-compact__fa-exclamation-triangle--MarginTop:-3px;--pf-c-progress-stepper--m-center__step-connector--before--Left:50%;--pf-c-progress-stepper--m-center--GridTemplateColumns:1fr;--pf-c-progress-stepper--m-center__step-connector--JustifyContent:center;--pf-c-progress-stepper--m-center__step-main--MarginRight:var(--pf-global--spacer--xs, 0.25rem);--pf-c-progress-stepper--m-center__step-main--MarginLeft:var(--pf-global--spacer--xs, 0.25rem);--pf-c-progress-stepper--m-center__step-main--TextAlign:center;--pf-c-progress-stepper--m-center__step-description--MarginRight:0;--pf-c-progress-stepper--m-center__step-description--MarginLeft:0;--pf-c-progress-stepper--GridTemplateRows:auto 1fr;--pf-c-progress-stepper__step-connector--JustifyContent:start;--pf-c-progress-stepper__step-icon--ZIndex:var(--pf-global--ZIndex--xs, 100);--pf-c-progress-stepper__step-icon--Width:1.75rem;--pf-c-progress-stepper__step-icon--Height:var(--pf-c-progress-stepper__step-icon--Width);--pf-c-progress-stepper__step-icon--FontSize:var(--pf-global--FontSize--md, 1rem);--pf-c-progress-stepper__step-icon--Color:var(--pf-global--Color--100, #151515);--pf-c-progress-stepper__step-icon--BackgroundColor:var(--pf-global--BackgroundColor--light-200, #fafafa);--pf-c-progress-stepper__step-icon--BorderWidth:var(--pf-global--BorderWidth--md, 2px);--pf-c-progress-stepper__step-icon--BorderColor:var(--pf-global--BorderColor--100, #d2d2d2);--pf-c-progress-stepper__pficon--MarginTop:3px;--pf-c-progress-stepper__fa-exclamation-triangle--MarginTop:-5px;--pf-c-progress-stepper__step-title--Color:var(--pf-global--Color--100, #151515);--pf-c-progress-stepper__step-title--TextAlign:left;--pf-c-progress-stepper__step-title--FontSize:var(--pf-global--FontSize--md, 1rem);--pf-c-progress-stepper__step-title--FontWeight:var(--pf-global--FontWeight--normal, 400);--pf-c-progress-stepper__step--m-current__step-title--FontWeight:var(--pf-global--FontWeight--bold, 700);--pf-c-progress-stepper__step--m-current__step-title--Color:var(--pf-global--Color--100, #151515);--pf-c-progress-stepper__step--m-pending__step-title--Color:var(--pf-global--Color--200, #6a6e73);--pf-c-progress-stepper__step--m-danger__step-title--Color:var(--pf-global--danger-color--100, #c9190b);--pf-c-progress-stepper__step-title--m-help-text--TextDecorationColor:var(--pf-global--BorderColor--200, #8a8d90);--pf-c-progress-stepper__step-title--m-help-text--TextDecorationThickness:var(--pf-global--BorderWidth--sm, 1px);--pf-c-progress-stepper__step-title--m-help-text--TextUnderlineOffset:0.25rem;--pf-c-progress-stepper__step-title--m-help-text--hover--TextDecorationColor:var(--pf-global--Color--100, #151515);--pf-c-progress-stepper__step-title--m-help-text--focus--TextDecorationColor:var(--pf-global--Color--100, #151515);--pf-c-progress-stepper__step-title--m-help-text--hover--Color:var(--pf-global--Color--100, #151515);--pf-c-progress-stepper__step-title--m-help-text--focus--Color:var(--pf-global--Color--100, #151515);--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--hover--Color:var(--pf-global--danger-color--200, #a30000);--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--focus--Color:var(--pf-global--danger-color--200, #a30000);--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--TextDecorationColor:var(--pf-global--danger-color--100, #c9190b);--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--hover--TextDecorationColor:var(--pf-global--danger-color--200, #a30000);--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--focus--TextDecoerationColor:var(--pf-global--danger-color--200, #a30000);--pf-c-progress-stepper__step-description--MarginTop:var(--pf-global--spacer--xs, 0.25rem);--pf-c-progress-stepper__step-description--FontSize:var(--pf-global--FontSize--sm, 0.875rem);--pf-c-progress-stepper__step-description--Color:var(--pf-global--Color--200, #6a6e73);--pf-c-progress-stepper__step-description--TextAlign:left;--pf-c-progress-stepper--GridAutoFlow:var(--pf-c-progress-stepper--m-vertical--GridAutoFlow);--pf-c-progress-stepper--GridTemplateColumns:var(--pf-c-progress-stepper--m-vertical--GridTemplateColumns);--pf-c-progress-stepper__step-connector--before--Top:var(--pf-c-progress-stepper--m-vertical__step-connector--before--Top);--pf-c-progress-stepper__step-connector--before--Left:var(--pf-c-progress-stepper--m-vertical__step-connector--before--Left);--pf-c-progress-stepper__step-connector--before--Width:var(--pf-c-progress-stepper--m-vertical__step-connector--before--Width);--pf-c-progress-stepper__step-connector--before--Height:var(--pf-c-progress-stepper--m-vertical__step-connector--before--Height);--pf-c-progress-stepper__step-connector--before--BorderRightWidth:var(--pf-c-progress-stepper--m-vertical__step-connector--before--BorderRightWidth);--pf-c-progress-stepper__step-connector--before--BorderRightColor:var(--pf-c-progress-stepper--m-vertical__step-connector--before--BorderRightColor);--pf-c-progress-stepper__step-connector--before--BorderBottomWidth:var(--pf-c-progress-stepper--m-vertical__step-connector--before--BorderBottomWidth);--pf-c-progress-stepper__step-connector--before--BorderBottomColor:var(--pf-c-progress-stepper--m-vertical__step-connector--before--BorderBottomColor);--pf-c-progress-stepper__step-connector--before--Transform:var(--pf-c-progress-stepper--m-vertical__step-connector--before--Transform);--pf-c-progress-stepper__step-main--MarginTop:var(--pf-c-progress-stepper--m-vertical__step-main--MarginTop);--pf-c-progress-stepper__step-main--MarginRight:var(--pf-c-progress-stepper--m-vertical__step-main--MarginRight);--pf-c-progress-stepper__step-main--MarginBottom:var(--pf-c-progress-stepper--m-vertical__step-main--MarginBottom);--pf-c-progress-stepper__step-main--MarginLeft:var(--pf-c-progress-stepper--m-vertical__step-main--MarginLeft);--pf-c-progress-stepper--m-compact--GridTemplateColumns:var(--pf-c-progress-stepper--m-vertical--m-compact--GridTemplateColumns);--pf-c-progress-stepper--m-compact__step-connector--GridRow:var(--pf-c-progress-stepper--m-vertical--m-compact__step-connector--GridRow);--pf-c-progress-stepper--m-compact__step-connector--PaddingBottom:var(--pf-c-progress-stepper--m-vertical--m-compact__step-connector--PaddingBottom);--pf-c-progress-stepper--m-center__step-connector--before--Content:none;--pf-c-progress-stepper--m-center__step-main--before--Content:'';--pf-c-progress-stepper__step-connector--before--Content:'';--pf-c-progress-stepper__step-main--before--Content:none;position:relative;display:grid;grid-auto-flow:var(--pf-c-progress-stepper--GridAutoFlow);grid-template-columns:var(--pf-c-progress-stepper--GridTemplateColumns);grid-template-rows:var(--pf-c-progress-stepper--GridTemplateRows);grid-auto-columns:1fr}@media (min-width:768px){:host{--pf-c-progress-stepper--GridAutoFlow:var(--pf-c-progress-stepper--m-horizontal--GridAutoFlow, column);--pf-c-progress-stepper--GridTemplateColumns:var(--pf-c-progress-stepper--m-horizontal--GridTemplateColumns, initial);--pf-c-progress-stepper__step-connector--before--Top:var(--pf-c-progress-stepper--m-horizontal__step-connector--before--Top);--pf-c-progress-stepper__step-connector--before--Left:var(--pf-c-progress-stepper--m-horizontal__step-connector--before--Left);--pf-c-progress-stepper__step-connector--before--Width:var(--pf-c-progress-stepper--m-horizontal__step-connector--before--Width);--pf-c-progress-stepper__step-connector--before--Height:var(--pf-c-progress-stepper--m-horizontal__step-connector--before--Height);--pf-c-progress-stepper__step-connector--before--BorderRightWidth:var(--pf-c-progress-stepper--m-horizontal__step-connector--before--BorderRightWidth);--pf-c-progress-stepper__step-connector--before--BorderRightColor:var(--pf-c-progress-stepper--m-horizontal__step-connector--before--BorderRightColor);--pf-c-progress-stepper__step-connector--before--BorderBottomWidth:var(--pf-c-progress-stepper--m-horizontal__step-connector--before--BorderBottomWidth);--pf-c-progress-stepper__step-connector--before--BorderBottomColor:var(--pf-c-progress-stepper--m-horizontal__step-connector--before--BorderBottomColor);--pf-c-progress-stepper__step-connector--before--Transform:var(--pf-c-progress-stepper--m-horizontal__step-connector--before--Transform);--pf-c-progress-stepper__step-main--MarginTop:var(--pf-c-progress-stepper--m-horizontal__step-main--MarginTop);--pf-c-progress-stepper__step-main--MarginRight:var(--pf-c-progress-stepper--m-horizontal__step-main--MarginRight);--pf-c-progress-stepper__step-main--MarginBottom:var(--pf-c-progress-stepper--m-horizontal__step-main--MarginBottom);--pf-c-progress-stepper__step-main--MarginLeft:var(--pf-c-progress-stepper--m-horizontal__step-main--MarginLeft);--pf-c-progress-stepper--m-compact--GridTemplateColumns:var(--pf-c-progress-stepper--m-horizontal--m-compact--GridTemplateColumns);--pf-c-progress-stepper--m-compact__step-connector--GridRow:var(--pf-c-progress-stepper--m-horizontal--m-compact__step-connector--GridRow);--pf-c-progress-stepper--m-compact__step-connector--PaddingBottom:var(--pf-c-progress-stepper--m-horizontal--m-compact__step-connector--PaddingBottom);--pf-c-progress-stepper__step-connector--before--Content:var(--pf-c-progress-stepper--m-center__step-connector--before--Content);--pf-c-progress-stepper__step-main--before--Content:var(--pf-c-progress-stepper--m-center__step-main--before--Content);--pf-c-progress-stepper--m-center__step-connector--before--Content:'';--pf-c-progress-stepper--m-center__step-main--before--Content:none}}:host([center]){--pf-c-progress-stepper__step-connector--JustifyContent:var(--pf-c-progress-stepper--m-center__step-connector--JustifyContent);--pf-c-progress-stepper__step-main--MarginRight:var(--pf-c-progress-stepper--m-center__step-main--MarginRight);--pf-c-progress-stepper__step-main--MarginLeft:var(--pf-c-progress-stepper--m-center__step-main--MarginLeft);--pf-c-progress-stepper--step-main--TextAlign:var(--pf-c-progress-stepper--m-center__step-main--TextAlign, auto);--pf-c-progress-stepper__step-title--TextAlign:var(--pf-c-progress-stepper--m-center__step-title--TextAlign, auto);--pf-c-progress-stepper__step-description--MarginRight:var(--pf-c-progress-stepper--m-center__step-description--MarginRight);--pf-c-progress-stepper__step-description--MarginLeft:var(--pf-c-progress-stepper--m-center__step-description--MarginLeft);--pf-c-progress-stepper__step-description--TextAlign:var(--pf-c-progress-stepper--m-center__step-description--TextAlign, auto);--pf-c-progress-stepper--m-vertical__step-main--MarginRight:var(--pf-c-progress-stepper--m-vertical--m-center__step-main--MarginRight);--pf-c-progress-stepper--m-vertical__step-main--MarginLeft:var(--pf-c-progress-stepper--m-vertical--m-center__step-main--MarginLeft);--pf-c-progress-stepper__step-connector--before--Content:var(--pf-c-progress-stepper--m-center__step-connector--before--Content);--pf-c-progress-stepper__step-main--before--Content:var(--pf-c-progress-stepper--m-center__step-main--before--Content);--pf-c-progress-stepper__step-connector--before--Left:var(--pf-c-progress-stepper--m-center__step-connector--before--Left);grid-template-columns:var(--pf-c-progress-stepper--m-center--GridTemplateColumns)}:host([center]:not([compact])){--pf-c-progress-stepper__step-main--before--Content:var(--pf-c-progress-stepper--m-center__step-main--before--Content);--pf-c-progress-stepper__step-connector--before--Content:var(--pf-c-progress-stepper--m-center__step-connector--before--Content)}:host([vertical]) ::slotted(pf-progress-step){flex-direction:row;align-items:flex-start}:host([vertical]){--pf-c-progress-stepper--GridAutoFlow:var(--pf-c-progress-stepper--m-vertical--GridAutoFlow);--pf-c-progress-stepper--GridTemplateColumns:var(--pf-c-progress-stepper--m-vertical--GridTemplateColumns);--pf-c-progress-stepper__step-connector--before--Top:var(--pf-c-progress-stepper--m-vertical__step-connector--before--Top);--pf-c-progress-stepper__step-connector--before--Left:var(--pf-c-progress-stepper--m-vertical__step-connector--before--Left);--pf-c-progress-stepper__step-connector--before--Width:var(--pf-c-progress-stepper--m-vertical__step-connector--before--Width);--pf-c-progress-stepper__step-connector--before--Height:var(--pf-c-progress-stepper--m-vertical__step-connector--before--Height);--pf-c-progress-stepper__step-connector--before--BorderRightWidth:var(--pf-c-progress-stepper--m-vertical__step-connector--before--BorderRightWidth);--pf-c-progress-stepper__step-connector--before--BorderRightColor:var(--pf-c-progress-stepper--m-vertical__step-connector--before--BorderRightColor);--pf-c-progress-stepper__step-connector--before--BorderBottomWidth:var(--pf-c-progress-stepper--m-vertical__step-connector--before--BorderBottomWidth);--pf-c-progress-stepper__step-connector--before--BorderBottomColor:var(--pf-c-progress-stepper--m-vertical__step-connector--before--BorderBottomColor);--pf-c-progress-stepper__step-connector--before--Transform:var(--pf-c-progress-stepper--m-vertical__step-connector--before--Transform);--pf-c-progress-stepper__step-main--MarginTop:var(--pf-c-progress-stepper--m-vertical__step-main--MarginTop);--pf-c-progress-stepper__step-main--MarginRight:var(--pf-c-progress-stepper--m-vertical__step-main--MarginRight);--pf-c-progress-stepper__step-main--MarginBottom:var(--pf-c-progress-stepper--m-vertical__step-main--MarginBottom);--pf-c-progress-stepper__step-main--MarginLeft:var(--pf-c-progress-stepper--m-vertical__step-main--MarginLeft);--pf-c-progress-stepper--m-compact--GridTemplateColumns:var(--pf-c-progress-stepper--m-vertical--m-compact--GridTemplateColumns);--pf-c-progress-stepper--m-compact__step-connector--GridRow:var(--pf-c-progress-stepper--m-vertical--m-compact__step-connector--GridRow);--pf-c-progress-stepper--m-compact__step-connector--PaddingBottom:var(--pf-c-progress-stepper--m-vertical--m-compact__step-connector--PaddingBottom);--pf-c-progress-stepper__step-connector--before--Content:'';--pf-c-progress-stepper__step-main--before--Content:none;--pf-c-progress-stepper--m-center__step-connector--before--Content:none;--pf-c-progress-stepper--m-center__step-main--before--Content:'';--pf-c-progress-stepper__step-main--Position:relative}:host([vertical][center]){--pf-c-progress-stepper__step-connector--before--Left:var(--pf-c-progress-stepper--m-center__step-connector--before--Left)}:host([compact]){--pf-c-progress-stepper__step-main--MarginTop:var(--pf-c-progress-stepper--m-compact__step-main--MarginTop);--pf-c-progress-stepper__step-main--MarginBottom:var(--pf-c-progress-stepper--m-compact__step-main--MarginBottom);--pf-c-progress-stepper__step-icon--Width:var(--pf-c-progress-stepper--m-compact__step-icon--Width);--pf-c-progress-stepper__step-icon--FontSize:var(--pf-c-progress-stepper--m-compact__step-icon--FontSize);--pf-c-progress-stepper__step-title--FontSize:var(--pf-c-progress-stepper--m-compact__step-title--FontSize);--pf-c-progress-stepper__step--m-current__step-title--FontWeight:var(--pf-c-progress-stepper--m-compact__step-title--FontWeight);--pf-c-progress-stepper__pficon--MarginTop:var(--pf-c-progress-stepper--m-compact__pficon--MarginTop);--pf-c-progress-stepper__fa-exclamation-triangle--MarginTop:var(--pf-c-progress-stepper--m-compact__fa-exclamation-triangle--MarginTop);--pf-c-progress-stepper--m-vertical__step-main--MarginLeft:var(--pf-c-progress-stepper--m-vertical--m-compact__step-main--MarginLeft);--pf-c-progress-stepper--m-vertical__step-main--MarginRight:var(--pf-c-progress-stepper--m-vertical--m-compact__step-main--MarginRight);display:inline-grid;grid-template-columns:var(--pf-c-progress-stepper--m-compact--GridTemplateColumns);grid-auto-flow:var(--pf-c-progress-stepper--m-compact--GridAutoFlow)}`;
import { PfProgressStep } from './pf-progress-step.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * A **progress stepper** displays a timeline of tasks in a workflow and tracks the user's current progress through this workflow.
 */
let PfProgressStepper = PfProgressStepper_1 = class PfProgressStepper extends LitElement {
    get value() {
        const { childTagName } = this.constructor;
        const steps = this.querySelectorAll(childTagName);
        const current = this.querySelector(`${childTagName}[current]`);
        const n = Array.from(steps).indexOf(current) + 1;
        return (n / steps.length) * 100;
    }
    constructor() {
        super();
        _PfProgressStepper_instances.add(this);
        /** Whether to use the vertical layout */
        this.vertical = false;
        /** Whether to use the center alignment */
        this.center = false;
        /** Whether to use the compact layout */
        this.compact = false;
        _PfProgressStepper_internals.set(this, new InternalsController(this, {
            role: 'progressbar',
            ariaValueNow: this.value.toString(),
        }));
        _PfProgressStepper_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _PfProgressStepper_instances, "m", _PfProgressStepper_onMutation).call(this)));
        __classPrivateFieldGet(this, _PfProgressStepper_mo, "f").observe(this, { childList: true });
    }
    render() {
        return html `
      <slot role="listbox"></slot>
    `;
    }
};
_PfProgressStepper_internals = new WeakMap(), _PfProgressStepper_mo = new WeakMap(), _PfProgressStepper_instances = new WeakSet(), _PfProgressStepper_onMutation = function _PfProgressStepper_onMutation() {
    __classPrivateFieldGet(this, _PfProgressStepper_internals, "f").ariaValueNow = this.value.toString();
};
PfProgressStepper.childTagName = 'pf-progress-step';
PfProgressStepper.styles = [style];
PfProgressStepper.formAssociated = true;
__decorate([
    property({ type: Boolean, reflect: true })
], PfProgressStepper.prototype, "vertical", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfProgressStepper.prototype, "center", void 0);
__decorate([
    observed(function () {
        const { childTagName } = this.constructor;
        this.querySelectorAll(childTagName).forEach(step => step.requestUpdate());
    }),
    property({ type: Boolean, reflect: true })
], PfProgressStepper.prototype, "compact", void 0);
PfProgressStepper = PfProgressStepper_1 = __decorate([
    customElement('pf-progress-stepper')
], PfProgressStepper);
export { PfProgressStepper };
//# sourceMappingURL=pf-progress-stepper.js.map