import { useState } from 'react';

// ComponentA.jsx
const ComponentA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <ModalA isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

//--
//src / hooks / useToggle.js;
export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(isOpen => !isOpen);

  return { isOpen, open, close, toggle };
};

// ComponentA.jsx
import { useToggle } from 'path/to/hooks/useToggle.js';

const ComponentA = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>Open modal</button>
      <ModalA isOpen={isOpen} onClose={close} />
    </>
  );
};
