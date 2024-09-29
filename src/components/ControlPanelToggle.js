import React from 'react';
import ToggleButtonGroup from './ToggleButtonGroup';
import { FaBrain, FaPalette } from 'react-icons/fa';

function ControlPanelToggle({ view, setView, colorMode, setColorMode }) {
  return (
    <div style={controlPanelStyles}>
      <div style={toggleContainerStyles}>
        <ToggleButtonGroup
          isActive={view === 'full'}
          onChange={() => setView(view === 'full' ? 'slice' : 'full')}
          icon={<FaBrain size={30} color='white' />}
        />
      </div>

      <div style={toggleContainerStyles}>
        <ToggleButtonGroup
          isActive={colorMode === 'color'}
          onChange={() => setColorMode(colorMode === 'color' ? 'noColor' : 'color')}
          icon={<FaPalette size={30} color='white' />}
        />
      </div>
    </div>
  );
}

// Styles
const controlPanelStyles = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  zIndex: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.25)',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const toggleContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
};

export default ControlPanelToggle;
