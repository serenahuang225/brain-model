import React, { useState } from 'react';
import './BrainMenu.css';  // Assuming you will add some custom styles

const allBrainParts = [
  { name: 'Cerebrum', color: '#E7B4C9', description: 'The largest brain part, responsible for conscious thought, sensory processing, and feeling. Divided into 2 hemispheres.' },
  { name: 'Frontal Lobe', color: '#7B00E7', description: 'The executive control center. Involved in reasoning, making plans & judgements, muscle movements, and speaking. The prefrontal cortex, motor cortex, and Broca\'s area are located here.' },
  { name: 'Parietal Lobe', color: '#39D3E7', description: 'Processes sensory information like touch, temperature, and pain. This is where the somatosensory cortex is.' },
  { name: 'Occipital Lobe', color: '#BC070B', description: 'Visual processing center of the brain.' },
  { name: 'Temporal Lobe', color: '#26E700', description: 'Important for processing auditory information, as it is where the auditory cortex is. Wernicke\'s area is here also.' },
  { name: 'Sensory Cortex', color: '#B181E7', description: 'Processes sensory information from senses' },
  { name: 'Motor Cortex', color: '#E7BC5B', description: 'Controls voluntary movement' },
  { name: "Broca's Area", color: '#B0FFB1', description: 'Key for speech production and language formation. Located in the left frontal lobe.' },
  { name: 'Wernicke\'s Area', color: '#7E0006', description: 'Important for understanding and comprehending language. Located in the left temporal lobe.' },
  { name: 'Corpus Callosum', color: '#124E0C', description: 'Connects the left and right hemispheres, through a wide band of axon fibers.' },
  { name: 'Amygdala', color: '#614A27', description: 'Linked with emotions, especially fear and aggression.' },
  { name: 'Thalamus', color: '#E7A111', description: 'Relays sensory (all senses except for olfactory) and motor signals to the cerebral cortex.' },
  { name: 'Cerebellum', color: '#76287A', description: 'Latin for little-🧠, coordinates movement and balance and helps with learning motor skills.' },
  { name: 'Pons', color: '#121277', description: 'Helps coordinate movement and sleep.' },
  { name: 'Hypothalamus', color: '#3471E7', description: 'Regulates autonomic functions like hunger, thirst, and body temperature. Part of the brain\'s reward center.' },
  { name: 'Hippocampus', color: '#9C989A', description: 'Essential for memory formation and spatial navigation.' },
  { name: 'Medulla', color: '#CF5EA2', description: 'Controls involuntary functions like heart rate and breathing.' },
  { name: 'Pituitary Gland', color: '#E7E000', description: 'The master endocrine gland that regulates hormones in the body.' },
];

const BrainMenu = ({toggle, show }) => {
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const toggleDescription = (index, part) => {
    setVisibleDescriptions((prev) => ({
      ...prev, [index]: !prev[index]
    }));
  };

  return (
    <>
    {
      show ? <div className="brain-menu">
        <button onClick={toggle} className='exit-button'>
          <div style={{color: 'white', fontSize: 'xx-large'}}>x</div>
        </button>
        <h2>Brain Parts</h2>
        <ul>
          {allBrainParts.map((part, index) => (
            <li key={index}>
              <div className="brain-part-header">
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                  <div style={{height: '20px', width: '20px', borderRadius: '10px', backgroundColor: part.color}} />
                  <span>{part.name}</span>
                </div>
                <button onClick={() => toggleDescription(index, part)}>
                  {visibleDescriptions[index] ? 'Hide' : 'Show More'}
                </button>
              </div>
              {visibleDescriptions[index] && (
                <div className="brain-description" style={{borderLeft: '3px solid '+part.color}}>
                  {part.description}
                </div>
              )}
            </li>
          ))}
        </ul>
        <p className='footer'>Code on <span><a target="_blank" rel="noopener noreferrer" href='https://github.com/serenahuang225/brain-model'>Github</a></span></p>
      </div> :
      <div className='brain-menu-small'>
        <button onClick={toggle} className='exit-button'>
          <div style={{color: 'white', fontSize: 'xx-large'}}>🗺️</div>
        </button>
      </div>
    }
    </>
  );
};

export default BrainMenu;
