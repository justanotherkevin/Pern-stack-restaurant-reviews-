import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

function ModalBasic({ modalTrigerTxt, modalTrigerBtnColor, header, body }) {
  const [open, setOpen] = React.useState(false);
  const state = {
    modalTrigerTxt: modalTrigerTxt ? modalTrigerTxt : 'Modal',
    modalTrigerBtnColor: modalTrigerBtnColor ? modalTrigerBtnColor : '',
    header: header ? header : 'Modal Header',
    body: body ? body : 'Modal Body',
  };
  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={
        <Button color={state.modalTrigerBtnColor}>
          {state.modalTrigerTxt}
        </Button>
      }
    >
      <Header icon>
        <Icon name='archive' />
        {state.header}
      </Header>
      <Modal.Content>
        <p>{state.body}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalBasic;
