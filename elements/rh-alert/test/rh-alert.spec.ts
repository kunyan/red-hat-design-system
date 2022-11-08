import { expect, html, oneEvent, fixture } from '@open-wc/testing';
import { RhAlert } from '../rh-alert.js';


const defaultTemplate = html`
  <rh-alert state="default">
   <h3 slot="header">Default</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est
      egestas, a sollicitudin mauris tincidunt.</p>
    <button slot="actions" data-action="dismiss">Dismiss</button>
    <button slot="actions" data-action="confirm">Confirm</button>
  </rh-alert>
`;

const dismissibleTemplate = html`
  <rh-alert dismissible>
    <h3 slot="header">Default dismissible</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est
      egestas, a sollicitudin mauris tincidunt.</p>
    <button slot="actions" data-action="dismiss">Dismiss</button>
    <button slot="actions" data-action="confirm">Confirm</button>
  </rh-alert>
`;


describe('<rh-alert>', function() {
  let element: RhAlert;
  let dismissibleElement: RhAlert;

  beforeEach(async function() {
    element = await fixture<RhAlert>(defaultTemplate);
    dismissibleElement = await fixture<RhAlert>(dismissibleTemplate);
  });

  it('should upgrade', async function() {
    const klass = customElements.get('rh-alert');
    expect(element)
      .to.be.an.instanceOf(klass)
      .and
      .to.be.an.instanceOf(RhAlert);
  });

  describe('dismissible <rh-alert>', async () => {
    let elementCloseButton: HTMLButtonElement | undefined | null;

    beforeEach(async function() {
      elementCloseButton = dismissibleElement.shadowRoot?.querySelector('#close-button');
    });

    it('should only show the close button if the dismissible attribute is present', () => {
      expect(element.shadowRoot?.querySelector('#close-button')).to.be.null;
      expect(elementCloseButton).not.to.be.undefined;
    });

    it('should send a close event on dismissible close button click', async () => {
      elementCloseButton = dismissibleElement.shadowRoot?.querySelector('#close-button');

      setTimeout(function() {
        elementCloseButton?.click();
      });
      await oneEvent(dismissibleElement, 'close');
      dismissibleElement.requestUpdate();

      await dismissibleElement.updateComplete;
      expect(dismissibleElement.isConnected).to.be.false;
    });

    it('should be able to prevent default on the close event', async () => {
      elementCloseButton = dismissibleElement.shadowRoot?.querySelector('#close-button');

      dismissibleElement?.addEventListener('close', event => {
        event.preventDefault();
      });
      setTimeout(function() {
        elementCloseButton?.click();
      });
      await oneEvent(dismissibleElement, 'close');
      dismissibleElement.requestUpdate();

      await dismissibleElement.updateComplete;
      expect(dismissibleElement.isConnected).to.be.true;
    });
  });
});
