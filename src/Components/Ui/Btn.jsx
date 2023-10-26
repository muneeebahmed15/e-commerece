import React from 'react'

const Btn = ({title}) => {
  return (
    <>
     <button
              className="rounded-md bg-[#FCC30E] px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-[#e4b726]"
              href="/"
            >
              {title}
            </button>
    </>
  )
}

export default Btn