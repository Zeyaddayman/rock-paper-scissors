import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Game from './components/Game'
import Pick from './components/Pick'
import Rules from './components/Rules'
import type { ICHOICE } from './constants'

function App() {

    const [userPick, setUserPick] = useState<ICHOICE | undefined>(undefined)
    const [score, setScore] = useState<number>(0)

    return (
        <main className='text-white uppercase'>
            <Header score={score} />
            <Rules />

            {!userPick && 
                <Pick
                    setUserPick={setUserPick}
                />
            }

            {userPick && 
                <Game
                    setScore={setScore}
                    userPick={userPick}
                    setUserPick={setUserPick}
                />
            }
        </main>
    )
}

export default App
