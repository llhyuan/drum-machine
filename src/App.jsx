import Drumpad from './components/Drumpad.jsx';
import { buttons } from './assets/buttons.js';
import Screen from './components/Screen.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [activeKit, setActiveSet] = useState('heater');
  const [power, togglePower] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [keyPressed, setKeyPressed] = useState([null, null]);
  const [display, setDisplay] = useState('Drum Machine');
  let source;

  if (activeKit === 'heater') {
    source = buttons.heater;
  } else {
    source = buttons.piano;
  }

  useEffect(() => {
    function handleKeydown(e) {
      switch (e.key) {
        case 'q':
        case 'w':
        case 'e':
        case 'a':
        case 's':
        case 'd':
        case 'z':
        case 'x':
        case 'c':
          setKeyPressed([e.key.toUpperCase(), false]);
      }
    }
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <div className='flex justify-center items-center w-full min-h-[100vh] bg-[#E5E6E7] overflow-hidden'>
      <div
        id='drum-machine'
        className='w-[80%] min-w-[500px] drum-machine border-black border-solid border-[0.6rem] rounded-3xl shadow-clear translate-x-0 lg:max-w-[1170px] my-8'
      >
        <div className='banner-top flex flex-col relative h-24 overflow-hidden '>
          <div className='h-24 w-full bg-[#D4D5D9] relative top-[12px] rounded-tl-3xl '></div>
          <button
            className={
              'absolute top-[1.7rem] right-10 w-8 h-8 rounded-full ' +
              (power
                ? 'bg-green-500 shadow-powerOn'
                : 'bg-red-500 shadow-powerOff')
            }
            onClick={() => {
              togglePower(!power);
              setDisplay('Drum Machine');
              if (power) {
                setActiveSet('off');
              } else {
                setActiveSet('heater');
              }
            }}
          ></button>

          <div className='border-b-[0.4rem] border-solid border-black h-[1.1rem] w-full mt-auto bg-[#B9BBC1] z-10'></div>
        </div>
        <div className='text-[3.5rem] text-[#444444] md:flex lg:justify-around'>
          <div className='pad flex flex-wrap gap-6 w-[80%] mx-auto my-16 md:mx-4 md:w-full lg:max-w-[550px]'>
            {source.map((button) => {
              return (
                <Drumpad
                  key={button.label}
                  label={button.label}
                  name={button.name}
                  source={button.source}
                  power={power}
                  volume={volume}
                  keypressed={keyPressed}
                  setKeyPressed={setKeyPressed}
                  setDisplay={setDisplay}
                />
              );
            })}
          </div>
          <div className='control-panel md:mx-4 md:my-auto md:w-[90%] md:max-w-[410px]'>
            <Screen content={display} status={power} />
            <div className='w-[70%] mx-auto mt-12'>
              <input
                id='volume'
                name='volume'
                type='range'
                value={volume}
                min={0}
                max={1}
                step={0.1}
                onChange={(e) => {
                  setVolume(e.target.valueAsNumber);
                }}
              />
            </div>
            <div className='flex justify-between my-4'>
              <button
                className={
                  'text-[1.5rem] px-4 py-2 bg-[#BABABA] border-solid border-[0.25rem] border-[#444444] active:shadow-buttonPressed active:translate-y-[-1] mx-auto ' +
                  (activeKit === 'heater'
                    ? 'shadow-buttonPressed'
                    : 'shadow-button')
                }
                onClick={() => {
                  if (power) {
                    setActiveSet('heater');
                  }
                }}
              >
                Heater Kit{' '}
                <span
                  className={
                    'relative bottom-1 left-1 inline-block w-2 h-2 rounded-full ' +
                    (activeKit === 'heater'
                      ? 'bg-green-500 shadow-powerOn'
                      : 'bg-red-500 shadow-powerOff')
                  }
                ></span>
              </button>
              <button
                className={
                  'text-[1.5rem] px-4 py-2 bg-[#BABABA] border-solid border-[0.25rem] border-[#444444] active:shadow-buttonPressed active:translate-y-[-1] transition-all duration-100 ease-out mx-auto ' +
                  (activeKit === 'piano'
                    ? 'shadow-buttonPressed'
                    : 'shadow-button')
                }
                onClick={() => {
                  if (power) {
                    setActiveSet('piano');
                  }
                }}
              >
                Piano Kit{' '}
                <span
                  className={
                    'relative bottom-1 left-1 inline-block w-2 h-2 rounded-full ' +
                    (activeKit === 'piano'
                      ? 'bg-green-500 shadow-powerOn'
                      : 'bg-red-500 shadow-powerOff')
                  }
                ></span>
              </button>
            </div>
          </div>
        </div>
        <div className='banner-bottom flex flex-col h-12 overflow-hidden '>
          <div className='border-[0.3rem] border-solid border-black h-1 w-full mb-auto'></div>

          <div className='h-7 w-full bg-[#D4D5D9] relative rounded-b-2xl'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
