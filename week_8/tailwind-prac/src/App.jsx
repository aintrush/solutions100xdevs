import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid grid-rows-3 grid-cols-3 gap-5 bg-orange-100'>
      <div class = 'row-span-1 bg-red-500 '>
        tis is first div
      </div>
      <div class = 'row-span-1 md:row-span-3 bg-yellow-500'>
        tis is second div
      </div>
      <div class = ' row-span-1 md:row-span-3 bg-blue-500'>
        tis is third div
      </div>
      <div class='row-span-1 md:row-span-3 bg-red-800 md:bg-black'>
        heheh hahah hahahfkj
      </div>
    </div>
      
    
      
    </>
  )
}

export default App
