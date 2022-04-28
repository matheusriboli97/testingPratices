import {useState} from 'react'
import './App.css';

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [color, setColor] = useState('MediumVioletRed');
  const [lastColor, setLastColor] = useState('MediumVioletRed');
  const handleColorChange = () => {
    color === 'MediumVioletRed' ? setColor('MidnightBlue') : setColor('MediumVioletRed');
  };
  const handleCheckboxClick = (e) => {
    if(e.target.checked) {
      setLastColor(color);
      setColor('gray');
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setColor(lastColor);
    }
  };
  return (
    <div className='App'>
      <button disabled={isDisabled} style={{backgroundColor: color}} onClick={() => handleColorChange()}>Change color</button>
      <input id='disable-button-checkbox' type='checkbox' onChange={(e) => handleCheckboxClick(e)} />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
