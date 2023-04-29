import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

export default function SubmitModal({ config }) {
  console.warn(config.show);
  return (
    <>
      <Modal show={config.show} onHide={config.onHideHandler} animation>
        <Modal.Header closeButton>
          <Modal.Title>SUCCESS!</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>You&apos;ve successfully added a team member!</p></Modal.Body>
        <Image src="https://www.reactiongifs.us/wp-content/uploads/2018/01/tenor-1.gif" alt="nothing" />
        <Modal.Footer>
          <Button variant="secondary" onClick={config.closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

SubmitModal.propTypes = {
  config: PropTypes.shape({
    show: PropTypes.bool,
    setShow: PropTypes.func,
    closeHandler: PropTypes.func,
    onHideHandler: PropTypes.func,
  }),
};

SubmitModal.defaultProps = {
  config: PropTypes.shape({
    show: false,
    setShow: () => {},
    closeHandler: null,
    onHideHandler: null,
  }),
};
