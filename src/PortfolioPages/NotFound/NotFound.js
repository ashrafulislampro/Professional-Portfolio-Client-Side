import React from 'react';
import Modal from 'react-modal';

const customStyles ={
          content:{
                    top: '40%',
                    left: '50%',
                    fontSize: '1.2rem',
                    boxShadow: '3px 3px 3px lightgrey, -3px -3px 3px lightgrey',
                    right: 'auto',
                    bottom : 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
          }
};
Modal.setAppElement();
const NotFound = () => {
          let subtitle;
          const [modalIsOpen, setIsOpen] = React.useState(true);

          const openModal=()=>{
                    setIsOpen(true);
          }
          const afterOpenModal = ()=>{
                    subtitle.style.color = 'green';
          }
          
          return (
                    <div onClick={openModal}>
                        
                        <Modal
                              isOpen={modalIsOpen}
                              onAfterOpen={afterOpenModal}
                              style={customStyles}
                        >
                              <h1 ref={(_subtitle)=> (subtitle = _subtitle)}>Sorry Page Not Found <br />404 Error!!!</h1>
                        </Modal>
                    </div>
          );
};

export default NotFound;