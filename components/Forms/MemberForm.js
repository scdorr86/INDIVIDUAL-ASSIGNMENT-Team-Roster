import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createMember, updateMember } from '../../api/memberData';
import SubmitModal from '../Modal';

const initialState = {
  image: '',
  name: '',
  role: '',
  teamName: '',
};

function MemberForm({ obj, show, setShow }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  const closeModal = () => {
    router.push('/team');
    setShow(false);
  };

  const config = {
    show,
    setShow,
    closeHandler: closeModal,
    onHideHandler: '',
  };

  const openModal = () => {
    console.warn('test warn');
    setShow(true);
  };

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateMember(formInput).then(openModal());
    } else {
      const payload = { ...formInput, uid: user.uid };
      createMember(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateMember(patchPayload).then(() => {
          setShow(true);
        });
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Member</h2>

        {/* Image */}
        <FloatingLabel controlId="floatingInput2" label="Member Image" className="mb-3" style={{ color: 'red' }}>
          <Form.Control
            type="url"
            placeholder="Enter an image url"
            name="image"
            value={formInput.image}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* Member Name  */}
        <FloatingLabel controlId="floatingInput1" label="Member Name" className="mb-3" style={{ color: 'red' }}>
          <Form.Control
            type="text"
            placeholder="Enter Member Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* Role  */}
        <FloatingLabel controlId="floatingInput3" label="Member Role" className="mb-3" style={{ color: 'red' }}>
          <Form.Control
            type="text"
            placeholder="Enter Member Role"
            name="role"
            value={formInput.role}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* Team Name */}
        <FloatingLabel controlId="floatingInput3" label="Team Name" className="mb-3" style={{ color: 'red' }}>
          <Form.Control
            type="text"
            placeholder="Enter Team Name"
            name="teamName"
            value={formInput.teamName}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* SUBMIT BUTTON  */}
        <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Member</Button>
      </Form>
      <SubmitModal config={config} />
    </>
  );
}

MemberForm.propTypes = {
  obj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    teamName: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

MemberForm.defaultProps = {
  obj: initialState,
  show: false,
  setShow: () => {},
};

export default MemberForm;
