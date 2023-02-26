import React, { useState, useEffect } from 'react';

function ScrollMessage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showMessage && <p>Hiciste scroll</p>}
    </div>
  );
}

export default ScrollMessage;
