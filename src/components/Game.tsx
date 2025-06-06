import type { Dispatch } from "react";
import type { ICHOICE } from "../constants";

interface IProps {
    userPick: ICHOICE | undefined;
    setUserPick: Dispatch<React.SetStateAction<ICHOICE | undefined>>;
    setScore: Dispatch<React.SetStateAction<number>>
}

const Game = ({ userPick, setUserPick, setScore }: IProps) => {

    return (
        <section>Game</section>
    )
}

export default Game