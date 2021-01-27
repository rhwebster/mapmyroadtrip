import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm';
import './LoginFormModal.css'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button id="login" onClick={() => {
          setShowModal(true)
          }}>Log In</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} name="login">
            <LoginForm />
          </Modal>
        )}
      </>
    );
  }

  export default LoginFormModal;
