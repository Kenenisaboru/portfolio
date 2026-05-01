import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = ({ visible, onClick }) => {
  if (!visible) return null;

  return (
    <button className="scroll-to-top" onClick={onClick}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;

