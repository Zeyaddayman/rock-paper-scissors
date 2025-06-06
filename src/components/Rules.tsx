import { useState } from "react"

const Rules = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
        <button onClick={() => setIsOpen(true)} className="px-6 py-2 fixed right-4 bottom-2 border-2 border-white rounded cursor-pointer z-10">Rules</button>

        {isOpen && (
            <div id="overlay" onClick={() => setIsOpen(false)} className="fixed w-screen h-screen left-0 top-0 bg-score-text opacity-10 z-20"></div>
        )}

        {isOpen && (
            <div className="fixed min-w-[280px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded z-30">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-bold text-2xl text-dark">rules</h2>
                    <span onClick={() => setIsOpen(false)} className="p-3 rounded hover:bg-gray-200 transition cursor-pointer">
                        <img
                            src="/images/icon-close.svg"
                            alt="close"
                        />
                    </span>
                </div>
                <img
                    src="/images/image-rules.svg"
                    alt="rules"
                />
            </div>
        )}
        </>
    )
}

export default Rules