import { useEffect, useState } from 'react'
import reactLogo from '@assets/react-logo.svg'

function Popup() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // use executeScript

    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
      const response = await chrome.tabs.sendMessage(tab.id as number, { message: "get_pdf" });
      console.log('response');
      console.log(response);
    })()



  }


  return (
    <div className="App flex-col justify-between">
      <div className="">
        <h1 className="text-3xl font-bold">
          Hello world!!
        </h1>

        <div className="card">
          <button onClick={handleClick}>
            Summarize
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Visit Development site <a target="_blank" href="http://localhost:3000">here</a>
        </p>
      </div>
      <p className="read-the-docs">
        powered by GPT3
      </p>
    </div>
  )
}

export default Popup
