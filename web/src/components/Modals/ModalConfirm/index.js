import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineSave } from 'react-icons/md';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function CreateModalConfirm(props) {
  const { modal, toggle, data } = props;
  return (
    <Modal isOpen={modal} toggle={toggle} backdrop="static">
      <ModalHeader>CONFIRM</ModalHeader>
      <ModalBody>
        <div className="msg">{data && data.body}</div>
      </ModalBody>
      <ModalFooter>
        <Button type="button" color="secondary" title="Cancel" onClick={toggle}>
          Cancel
        </Button>
        <Button
          type="button"
          color="primary"
          onClick={() => {
            data.fn(data.params);
          }}
          title="Confirm"
        >
          <MdOutlineSave /> Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
}

CreateModalConfirm.propTypes = {
  modal: PropTypes.bool,
  toggle: PropTypes.func,
  data: PropTypes.object,
};
