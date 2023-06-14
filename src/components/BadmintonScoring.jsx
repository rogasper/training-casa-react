import React, { useState } from 'react'

export const BadmintonScoring = () => {
    const [team2, setTeam2] = useState(0)
    const [team1, setTeam1] = useState(0)
    return (
        <div className='p-6 ml-8'>
            <h1>
                Score
            </h1>
            <div className="container" style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div className="leftside">
                    <h2>Team 1</h2>
                    <h3>{team1}</h3>
                    <button className='bg-slate-700 px-6 py-3 m-1 text-white' onClick={() => setTeam1(team1 + 1)}>Tambah Poin Team 1</button>
                </div>
                <div className="rightside">
                    <h2>Team 1</h2>
                    <h3>{team2}</h3>
                    <button className='bg-slate-700 px-6 py-3 m-1 text-white' onClick={() => setTeam2(team2 + 1)}>Tambah Poin Team 2</button>
                </div>
            </div>
        </div>
    )
}
