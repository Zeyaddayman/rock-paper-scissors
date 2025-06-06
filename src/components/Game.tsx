import { useEffect, useState, type Dispatch } from "react";
import { GAME_CHOICES, WIN_CONDITIONS, type ICHOICE } from "../constants";
import PickedChoice from "./PickedChoice";

interface IProps {
    userPick: ICHOICE;
    setUserPick: Dispatch<React.SetStateAction<ICHOICE | undefined>>;
    setScore: Dispatch<React.SetStateAction<number>>
}

const Game = ({ userPick, setUserPick, setScore }: IProps) => {

    const [botPick, setBotPick] = useState<ICHOICE | undefined>(undefined)
    const [gameStatus, setGameStatus] = useState<string | undefined>()

    useEffect(() => {

        const randomNum = Math.floor(Math.random() * GAME_CHOICES.length);
        const randomPick = GAME_CHOICES[randomNum];

        setTimeout(() => {
            setBotPick(randomPick)
        }, 2000);

    }, [])

    useEffect(() => {
        if (botPick) {

            let currentScore: number = 0
            let gameStatusText: string = "draw"

            if (WIN_CONDITIONS[userPick.name] === botPick.name) {
                currentScore = 1
                gameStatusText = "win"

            } else if (WIN_CONDITIONS[botPick.name] === userPick.name) {
                currentScore = -1
                gameStatusText = "lose"
            }

            setTimeout(() => {
                setScore((prev) => prev + currentScore)
                setGameStatus(gameStatusText)
            }, 2000);

        }
    }, [botPick, setScore, userPick.name])

    const restartGame = () => {
        setUserPick(undefined)
    }

    return (
        <section>
            <div className="flex flex-wrap gap-5 lg:gap-15 justify-center items-center">

                <PickedChoice
                    title="you picked"
                    pick={userPick}
                />

                {gameStatus && (
                    // result
                    <div className="flex gap-5 flex-col items-center justify-center order-last lg:order-none w-screen lg:w-auto">
                        <h2 className="text-3xl font-bold">{gameStatus}</h2>
                        <button onClick={restartGame} className="px-8 py-4 rounded w-fit bg-white font-semibold cursor-pointer text-score-text hover:text-rock transition">play again</button>
                    </div>
                )}

                
                {botPick ? (
                    <PickedChoice
                        title="the house picked"
                        pick={botPick}
                    />
                ): (
                    // placeholder
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-10">the house picked</h3>
                        <div className="rounded-full bg-dark w-[120px] lg:w-[244px] h-[120px] lg:h-[244px]"></div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Game