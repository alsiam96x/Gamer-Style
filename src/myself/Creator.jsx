import React from 'react'

const Creator = () => {
  return (
 <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3 ">

           <a href="https://www.youtube.com/@opsiamvai-2.0">   <h1 className='text-lg sm:text-xl rowdies-regular'><span className="text-red-700">#</span><span className='text-black'>OPSIAM.VAI࿐</span></h1></a>

      <h2 className="rowdies-regular text-lg sm:text-xl flex items-center text-center sm:text-left">
        FF UID :
        <span
          className="ml-2 text-blue-400 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() =>
            navigator.clipboard.writeText("2834031346").then(() => {
              alert("UID Copied!");
            })
          }
        >
          2834031346
        </span>
      </h2>
    </div>
  )
}

export default Creator
