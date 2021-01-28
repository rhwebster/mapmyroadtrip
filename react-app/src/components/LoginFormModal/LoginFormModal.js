import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm';
import { Link } from '../NavBar';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Link id="login" onClick={() => {
          setShowModal(true)
          }}>Log In
        </Link>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} name="login">
            <LoginForm />
          </Modal>
        )}
      </>
    );
  }

  export default LoginFormModal;
