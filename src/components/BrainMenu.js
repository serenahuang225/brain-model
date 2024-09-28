import React, { useState } from 'react';
import './BrainMenu.css';  // Assuming you will add some custom styles

const brainParts = [
  { name: 'Frontal Lobe', color: '#7B00E7', description: 'The frontal lobe is involved in reasoning, motor control, emotion, and language.' },
  { name: 'Parietal Lobe', color: '#39D3E7', description: 'The parietal lobe processes sensory information like touch, temperature, and pain.' },
  { name: 'Occipital Lobe', color: '#BC070B', description: 'The occipital lobe is the visual processing center of the brain.' },
  { name: 'Temporal Lobe', color: '#26E700', description: 'The temporal lobe is important for processing auditory information and memory.' },
  { name: 'Somatosensory Cortex', color: '#3471E7', description: '' },
  { name: 'Motor Cortex', color: '#CF5EA2', description: '' },
  { name: "Broca's Area", color: '#E7A111', description: 'Key for speech production and language formation. Located in the left frontal lobe.' },
  { name: 'Wernicke\'s Area', color: '#DBE700', description: 'Important for language comprehension and understanding. Located in the left temporal lobe.' },
  { name: 'Cerebrum', color: '#E7B4C9', description: 'The largest brain part, responsible for thought and sensory processing.' },
  { name: 'Corpus Callosum', color: '#26E700', description: 'Connects the left and right hemispheres, facilitating communication.' },
  { name: 'Amygdala', color: '#7B00E7', description: 'Processes emotions, especially fear and aggression.' },
  { name: 'Thalamus', color: '#E7A111', description: 'Relays sensory and motor signals to the cerebral cortex.' },
  { name: 'Cerebellum', color: '#76287A', description: 'Coordinates movement, balance, and fine motor skills.' },
  { name: 'Pons', color: '#BC070B', description: 'Regulates breathing and sleep.' },
  { name: 'Hypothalamus', color: '#3471E7', description: 'Regulates autonomic functions like hunger, thirst, and temperature.' },
  { name: 'Hippocampus', color: '#39D3E7', description: 'Essential for memory formation and spatial navigation.' },
  { name: 'Medulla', color: '#CF5EA2', description: 'Controls involuntary functions like heart rate and breathing.' },
  { name: 'Pituitary Gland', color: '#DBE700', description: 'The "master gland" that regulates hormones in the body.' },
];

const BrainMenu = () => {
  // State to track which description is visible
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  // Toggle the description visibility
  const toggleDescription = (index) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index]  // Toggle the current visibility state
    }));
  };

  return (
    <div className="brain-menu">
      <h2>Brain Parts</h2>
      <ul>
        {brainParts.map((part, index) => (
          <li key={index}>
            <div className="brain-part-header">
              <div style={{height: '20px', width: '20px', borderRadius: '10px', backgroundColor: part.color}} />
              <span>{part.name}</span>
              <button onClick={() => toggleDescription(index)}>
                {visibleDescriptions[index] ? 'Hide' : 'Show More'}
              </button>
            </div>
            {visibleDescriptions[index] && (
              <div className="brain-description">
                {part.description}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrainMenu;
