import type { ICHOICE } from "../constants";

interface IProps {
    title: string;
    pick: ICHOICE;
}

const PickedChoice = ({ pick, title }: IProps) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl lg:text-2xl font-semibold mb-10">{title}</h3>
            <div
                className="bg-white rounded-full p-5 lg:p-13 border-15 lg:border-30"
                style={{
                    borderColor: `var(--${pick.borderColor})`
                }}
            >
                <img
                    src={pick.imageUrl}
                    alt={pick.name}
                    className="w-13 h-13 lg:w-20 lg:h-20"
                />
            </div>
        </div>
    )
}

export default PickedChoice