import React from 'react';
import { FaBrain, FaAdjust } from 'react-icons/fa';

function ToggleButtonGroup({ isActive, onChange, icon }) {
  return (
    <label style={toggleSwitchLabel}>
      {icon}
      <input
        type="checkbox"
        checked={isActive}
        onChange={onChange}
        style={{ display: 'none' }}
      />
      <div style={{ ...toggleSwitch, ...(isActive ? activeStyle : inactiveStyle) }}>
        <div style={switchThumb} />
      </div>
    </label>
  );
}

// Styles
const toggleSwitchLabel = {
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
};

const toggleSwitch = {
  width: '40px',
  height: '30px',
  borderRadius: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 5px',
  transition: 'background-color 0.4s ease',
  position: 'relative',
};

const switchThumb = {
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  backgroundColor: 'white',
  position: 'absolute',
  transition: 'transform 0.4s ease',
};

const activeStyle = {
  backgroundColor: 'cyan',
  color: 'white',
  justifyContent: 'flex-end',
};

const inactiveStyle = {
  backgroundColor: '#ccc',
  color: '#555',
  justifyContent: 'flex-start',
};

export default ToggleButtonGroup;
