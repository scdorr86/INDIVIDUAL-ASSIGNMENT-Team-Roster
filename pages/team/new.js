import React from 'react';
import PropTypes from 'prop-types';
import MemberForm from '../../components/Forms/MemberForm';

export default function AddMember({ show, setShow }) {
  console.warn('warn warn', show, setShow);
  return (
    <>
      <h1>Add a Member</h1>
      <MemberForm show={show} setShow={setShow} />
    </>
  );
}
AddMember.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

AddMember.defaultProps = {
  show: false,
  setShow: () => {},
};
