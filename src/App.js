import './App.css';
import { drumPads } from './arrayOfObjects';
import {useEffect, useState} from 'react'

function App() {
  const [activeKey, setActiveKey]= useState('')
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase())
    })
  },[])
  function playSound(selector){
    const audio = document.getElementById(selector)
    audio.play()
    setActiveKey(selector)
  }
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div className='drum-pads'>
          {
            drumPads.map((e) => <div
              key={e.src}
              onClick={() => {
                playSound(e.text)
              }}
              className='drum-pad'
              id={e.src}
              >
              {e.text}
              <audio
                className="clip"
                id={e.text}
                src={e.src}
              ></audio>
            </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
