import React, { useState } from 'react'

export const BasketScoring = () => {
    const [textScore, setTextScore] = useState(0)
    return (
        <div className='flex justify-center'>
            <div className='p-8'>
                <h1 className='font-bold text-center'>Score</h1>
                <h2 className='text-center text-3xl'>{textScore}</h2>
                <div className="container-btn mt-5">
                    <button className='bg-slate-700 px-6 py-3 m-1 text-white' onClick={() => setTextScore(textScore + 1)}>1</button>
                    <button className='bg-slate-700 px-6 py-3 m-1 text-white' onClick={() => setTextScore(textScore + 2)}>2</button>
                    <button className='bg-slate-700 px-6 py-3 m-1 text-white' onClick={() => setTextScore(textScore + 3)}>3</button>
                </div>
            </div>
        </div>
    )
}
