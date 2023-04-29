import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getSingleMember } from '../../../api/memberData';
import MemberForm from '../../../components/Forms/MemberForm';

export default function EditMember({ show, setShow }) {
  const [editMember, setEditMember] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setEditMember);
  }, [firebaseKey]);

  return (<MemberForm obj={editMember} show={show} setShow={setShow} />);
}

EditMember.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

EditMember.defaultProps = {
  show: false,
  setShow: () => {},
};
