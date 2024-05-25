import lightOn from './assets/41849-removebg-preview.png'
import lightOff from './assets/41774-removebg-preview.png'
import { useState } from 'react'


function App() {
  const [button, setButton] = useState(false)
  return (
    <>
      <div  className="h-screen w-screen flex flex-row items-center justify-evenly bg-black">
        <div>
        {
          button?<img className="w-100% transition-all" src={lightOn} alt="" />:<img style={{filter : "drop-shadow(0 0 100px orange)"}} className="w-100% transition-all" src={lightOff} alt="" />
        }
        </div>
        <div className='w-[400px] h-[400px] bg-slate-200 flex items-center rounded-md justify-center'>
            <div className="relative border-2 px-6 py-10 border-slate-300 bg-slate-100 flex items-center justify-center ">
              <div className=' w-[80px] z-10 h-[180px] p-3 border  bg-white shadow-2xl rounded-md'>
                <div onClick={()=>setButton(prev => !prev)} className={`${button?"":"rotate-180"} w-full h-full z-20 shadow-black-200 shadow-md`}>
                  
                </div>
                <div style={{transform:"translateX(-50%)"}} className="absolute top-2 right-[50%] left-[50%] bg-gray-500 border border-slate-900 p-[10px] rounded-full"></div>
                <div style={{transform:"translateX(-50%)"}}  className="absolute bottom-2 right-[50%] left-[50%] bg-gray-500 border border-slate-900 p-[10px] rounded-full"></div>
              </div>
            </div>
        </div>  
      </div>
    </>
  )
}

export default App
