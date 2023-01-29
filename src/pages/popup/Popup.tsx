import { useState } from 'react'
import reactLogo from '@assets/react-logo.svg'

import getPdfText from "@pages/content/index"
function Popup() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex-col justify-between">
      <div className="">
        <h1 className="text-3xl font-bold">
          Hello world!!
        </h1>

        <div className="card">
          <button onClick={() => getPdfText(window.location.href)}>
            Summarize PDF
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
