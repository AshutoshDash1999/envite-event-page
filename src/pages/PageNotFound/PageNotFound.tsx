import React from 'react'
import PageNotFoundImg from "../../assets/page-not-found.png"

function PageNotFound() {
  return (
    <div className='bg-[#F6F2FF] h-screen flex flex-col items-center justify-center p-8'>
      <div>
        <img className='h-32 md:h-64 drop-shadow-xl object-cover' src={PageNotFoundImg} alt="PageNotFoundImg" />
      </div>
      <div>
      <h1 className="text-center text-2xl md:text-4xl font-bold	text-[#240D57] mt-8">
          Dear <span className="text-center text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
          Explorer
        </span>, feels like you are lost!
        </h1>
      </div>
    </div>
  )
}

export default PageNotFound