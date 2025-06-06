const Header = ({ score }: { score: number }) => {
    return (
        <header className="border-4 border-header-outline rounded w-11/12 lg:w-3/5 flex justify-between items-center mt-10 mb-30 mx-auto px-4 lg:px-8 py-5">
            <img
                src="/images/logo.svg"
                alt="rock-paper-scissors logo"
            />
            <div className="flex flex-col gap-1 bg-white w-25 h-25 rounded justify-center items-center">
                <p className="font-bold text-score-text text-xl">score</p>
                <span className="font-bold text-dark text-3xl">{score}</span>
            </div>
        </header>
    )
}

export default Header