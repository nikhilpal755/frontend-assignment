import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SuccessComponent() {
  const [countDown, setCountDown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (countDown > 0)
      setInterval(() => {
        setCountDown(countDown - 1);
      }, 1000);
    else navigate('/exit');
  }, [countDown,navigate]);

  return (
    <div>
      <p> Thank you. In {countDown} seconds, bot will exit</p>
    </div>
  );
}

export default SuccessComponent;