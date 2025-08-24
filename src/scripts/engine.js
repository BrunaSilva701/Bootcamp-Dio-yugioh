const state ={ //objeto de objetos
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById ("score_points")
    },
    cardSprites:{
        avatar: documente.getElementById ("card_image"),
        name: documente.getElementById ("card-name"),
        type: documente.getElementById ("card_type"),
    },
    fieldCards:{
        player: documente.getElementById ("player-field-card"),
        computer: documente.getElementById ("computer-field-card"),
    },
    actions:{
        button:document.getElementById("next-duel"),
    },
};

const playerSides = {
    player1: "player-field-card",
    computer: "computer-field-card",
}
const pathImages = ".src/assets/icons";

const cardData =[ //O pedra, papel ou tesoura
    {
    id: 0,
    name: "Blue Eyes White Dragon",
    type: "Paper",
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    LoseOf:[2],
    },

    {
    id: 1,
    name: "Dark Magician",
    type: "Rock",
    img: `${pathImages}magician.png`,
    WinOf: [2],
    LoseOf:[0],
    },

    {
    id: 2,
    name: "Exodian",
    type: "Scissors",
    img: `${pathImages}exodia.png`,
    WinOf: [0],
    LoseOf:[1],
    }
]

async function drawCards(cardNumbers, fieldSide){
    for(let i = 0; i < cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await creatCardImage(randomIdcard, fieldSide);

        documente.getElementById(fieldSide).appendChild(cardImage)
    }
}

function init(){
    drawCards(5, "playerSides.player1"); //quantas cartas vai sacar
    drawCards(5, "playerSides.computer");
}

init();