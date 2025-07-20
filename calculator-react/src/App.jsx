import React, { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')

  const handleClick = (value) => {
    setInput ((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try{
      setInput (eval(input).toString())
    } catch (error) {
      setInput("Error")
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className='calculator-body'>
          <div className='display'>
            <input type="text"  value={input}/>
          </div>

          <div>
            <input type="button" value="AC" onClick={handleClear}/>
            <input type="button" value="DE" onClick={handleDelete} disabled={input === ''}/>
            <input type="button" value="." onClick={() => handleClick('.')}/>
            <input type="button" value="/" onClick={() => handleClick('/')}/>
          </div>

          <div>
            <input type="button" value="7" onClick={() => handleClick('7')}/>
            <input type="button" value="8" onClick={() => handleClick('8')}/>
            <input type="button" value="9" onClick={() => handleClick('9')}/>
            <input type="button" value="*" onClick={() => handleClick('*')}/>
          </div>

          <div>
            <input type="button" value="4" onClick={() => handleClick('4')}/>
            <input type="button" value="5" onClick={() => handleClick('5')}/>
            <input type="button" value="6" onClick={() => handleClick('6')}/>
            <input type="button" value="+" onClick={() => handleClick('+')}/>
          </div>

          <div>
            <input type="button" value="1" onClick={() => handleClick('1')}/>
            <input type="button" value="2" onClick={() => handleClick('2')}/>
            <input type="button" value="3" onClick={() => handleClick('3')}/>
            <input type="button" value="-" onClick={() => handleClick('-')}/>
          </div>

          <div>
            <input type="button" value="0" onClick={() => handleClick('0')}/>
            <input type="button" value="00" onClick={() => handleClick('00')}/>
            <input type="button" value="=" className='equal' onClick={handleEqual}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
