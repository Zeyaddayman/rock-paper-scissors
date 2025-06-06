import type { Dispatch } from "react";
import { GAME_CHOICES, type ICHOICE } from "../constants";

interface IProps {
    setUserPick: Dispatch<React.SetStateAction<ICHOICE | undefined>>;
}

const Pick = ({ setUserPick }: IProps) => {
    return (
        <section className="flex justify-center">
            <div className="relative">
                <img
                    src="/images/bg-triangle.svg"
                    alt="triangle"
                />

                {GAME_CHOICES.map((choice) => (
                    <div
                        key={choice.name}
                        className={`${choice.styles} p-7 absolute bg-white rounded-full border-20 cursor-pointer`}
                        onClick={() => setUserPick(choice)}
                    >
                        <img
                            src={choice.imageUrl}
                            alt={choice.name}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Pick