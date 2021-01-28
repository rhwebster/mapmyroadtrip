import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import SignUpForm from '../auth/SignUpForm'


function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button id="signUpButton" onClick={() => {
                setShowModal(true)
                }}>SignUp
              </button>
              {showModal && (
                <Modal onClose={() => setShowModal(false)} name="signUp">
                    <SignUpForm />
                </Modal>
            )}
     </>
    );
}

export default SignUpFormModal;
