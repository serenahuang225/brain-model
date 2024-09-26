import React from 'react'

function Menu({setView, view}) {
  return (
    <div style={menuStyles}>
      <label htmlFor="viewSelector" style={{ color: 'white', fontSize: '18px', marginRight: '10px' }}>Select View:</label>
      <select
        id="viewSelector"
        style={{ padding: '10px', fontSize: '16px' }}
        value={view}
        onChange={(e) => setView(e.target.value)}
      >
        <option value="Default">Full Brain</option>
        <option value="Default">Cerebrum Parts</option>
        <option value="Brain Slice">Brain Slice</option>
      </select>
    </div>
  )
}

export default Menu

const menuStyles = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  zIndex: 10,  // Ensure it stays on top of the canvas
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '10px',
  borderRadius: '8px',
};