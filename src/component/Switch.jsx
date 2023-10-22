import React, { useState } from 'react';
import '../css/ToggleSwitch.css';

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;