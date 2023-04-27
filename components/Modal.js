import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

export default function SubmitModal({
  show, setShow, closeHandler, onHideHandler,
}) {
  console.warn(setShow);
  return (
    <>
      <Modal show={show} onHide={onHideHandler} animation>
        <Modal.Header closeButton>
          <Modal.Title>SUCCESS!</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>You&apos;ve successfully added a team member!</p></Modal.Body>
        <Image src="https://www.reactiongifs.us/wp-content/uploads/2018/01/tenor-1.gif" alt="nothing" />
        <Modal.Footer>
          <Button variant="secondary" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

SubmitModal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.bool,
  closeHandler: PropTypes.string,
  onHideHandler: PropTypes.string,
};

SubmitModal.defaultProps = {
  show: false,
  setShow: false,
  closeHandler: '',
  onHideHandler: '',
};
