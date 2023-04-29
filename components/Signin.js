import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';
import SubmitModal from './Modal';

function Signin({ show, setShow }) {
  const config = {
    show,
    setShow,
    closeHandler: 'string',
    image: '',
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
      <SubmitModal config={config} />
    </div>
  );
}

Signin.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

Signin.defaultProps = {
  show: false,
  setShow: () => {},
};

export default Signin;
