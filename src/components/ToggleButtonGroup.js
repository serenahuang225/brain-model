import React from 'react';
import './Toggle.css'

function ToggleButtonGroup({ isActive, onChange, icon }) {
  return (
    <div className='toggle-container'>
      {icon}
      <label className="switch">
        <input className="cb" type="checkbox" checked={isActive} onChange={onChange} />
        <span className="toggle">
          <span className="left">off</span>
          <span className="right">on</span>
        </span>
      </label>
    </div>
  );
}

export default ToggleButtonGroup;
