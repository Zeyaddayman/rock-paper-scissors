export interface ICHOICE {
    name: "paper" | "rock" | "scissors"
    imageUrl: string;
    styles: string;
    borderColor: string;
}

export const GAME_CHOICES: ICHOICE[] = [
    {
        name: "paper",
        imageUrl: "/images/icon-paper.svg",
        styles: "top-0 left-0 -translate-x-1/6 -translate-y-1/6 border-paper",
        borderColor: "paper"
    },
    {
        name: "rock",
        imageUrl: "/images/icon-rock.svg",
        styles: "bottom-0 left-1/2 -translate-x-1/2 border-rock",
        borderColor: "rock"
    },
    {
        name: "scissors",
        imageUrl: "/images/icon-scissors.svg",
        styles: "top-0 right-0 translate-x-1/6 -translate-y-1/6 border-scissors",
        borderColor: "scissors"
    }
]

export const WIN_CONDITIONS: Record<ICHOICE["name"], ICHOICE["name"]> = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}