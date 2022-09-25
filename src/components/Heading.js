import React from 'react'

function Heading({ title, stitle = title }) {



    return (
        <>
            <h1 className='hidden mt-20 text-4xl text-center font-semibold text-gray-700 sm:block'>{title}</h1>
            <h1 className='mt-20 text-3xl text-center font-semibold text-gray-700 sm:hidden'>{stitle}</h1>
            <p className='mx-auto mt-2 border-b-2 border-collapse border-primary w-10'></p>
        </>
    )
}

export default Heading