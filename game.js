"use strict";
const gameGrid = document.querySelector(".gameGrid");
const rollDicePlayer1 = document.querySelector("#rollDicePlayer1");
const rollDicePlayer2 = document.querySelector("#rollDicePlayer2");
const buyProperty1 = document.querySelector("#buyProperty1");
const buyProperty2 = document.querySelector("#buyProperty2");
let monopolyBoard = [
    { id: 0, name: "GO", type: "special", description: "Collect $200 when you pass." },
    { id: 1, name: "Mediterranean Avenue", type: "property", color: "brown", price: 60, rent: [2, 10, 30, 90, 160, 250], houseCost: 50, hotelCost: 50 },
    { id: 2, name: "Community Chest", type: "special", description: "Draw a Community Chest card." },
    { id: 3, name: "Baltic Avenue", type: "property", color: "brown", price: 60, rent: [4, 20, 60, 180, 320, 450], houseCost: 50, hotelCost: 50 },
    { id: 4, name: "Income Tax", type: "tax", amount: 200 },
    { id: 5, name: "Reading Railroad", type: "railroad", price: 200, rent: [25, 50, 100, 200] },
    { id: 6, name: "Oriental Avenue", type: "property", color: "light blue", price: 100, rent: [6, 30, 90, 270, 400, 550], houseCost: 50, hotelCost: 50 },
    { id: 7, name: "Chance", type: "special", description: "Draw a Chance card." },
    { id: 8, name: "Vermont Avenue", type: "property", color: "light blue", price: 100, rent: [6, 30, 90, 270, 400, 550], houseCost: 50, hotelCost: 50 },
    { id: 9, name: "Connecticut Avenue", type: "property", color: "light blue", price: 120, rent: [8, 40, 100, 300, 450, 600], houseCost: 50, hotelCost: 50 },
    { id: 10, name: "Jail", type: "special", description: "Just visiting or in jail." },
    { id: 11, name: "St. Charles Place", type: "property", color: "pink", price: 140, rent: [10, 50, 150, 450, 625, 750], houseCost: 100, hotelCost: 100 },
    { id: 12, name: "Electric Company", type: "utility", price: 150, rentMultiplier: [4, 10] },
    { id: 13, name: "States Avenue", type: "property", color: "pink", price: 140, rent: [10, 50, 150, 450, 625, 750], houseCost: 100, hotelCost: 100 },
    { id: 14, name: "Virginia Avenue", type: "property", color: "pink", price: 160, rent: [12, 60, 180, 500, 700, 900], houseCost: 100, hotelCost: 100 },
    { id: 15, name: "St. James Place", type: "property", color: "orange", price: 180, rent: [14, 70, 200, 550, 750, 950], houseCost: 100, hotelCost: 100 },
    { id: 16, name: "Tennessee Avenue", type: "property", color: "orange", price: 180, rent: [14, 70, 200, 550, 750, 950], houseCost: 100, hotelCost: 100 },
    { id: 17, name: "New York Avenue", type: "property", color: "orange", price: 200, rent: [16, 80, 220, 600, 800, 1000], houseCost: 100, hotelCost: 100 },
    { id: 18, name: "Free Parking", type: "special", description: "No action." },
    { id: 19, name: "Kentucky Avenue", type: "property", color: "red", price: 220, rent: [18, 90, 250, 700, 875, 1050], houseCost: 150, hotelCost: 150 },
    { id: 20, name: "Indiana Avenue", type: "property", color: "red", price: 220, rent: [18, 90, 250, 700, 875, 1050], houseCost: 150, hotelCost: 150 },
    { id: 21, name: "Illinois Avenue", type: "property", color: "red", price: 240, rent: [20, 100, 300, 750, 925, 1100], houseCost: 150, hotelCost: 150 },
    { id: 22, name: "B&O Railroad", type: "railroad", price: 200, rent: [25, 50, 100, 200] },
    { id: 23, name: "Atlantic Avenue", type: "property", color: "yellow", price: 260, rent: [22, 110, 330, 800, 975, 1150], houseCost: 150, hotelCost: 150 },
    { id: 24, name: "Ventnor Avenue", type: "property", color: "yellow", price: 260, rent: [22, 110, 330, 800, 975, 1150], houseCost: 150, hotelCost: 150 },
    { id: 25, name: "Water Works", type: "utility", price: 150, rentMultiplier: [4, 10] },
    { id: 26, name: "Marvin Gardens", type: "property", color: "yellow", price: 280, rent: [24, 120, 360, 850, 1025, 1200], houseCost: 150, hotelCost: 150 },
    { id: 27, name: "Pacific Avenue", type: "property", color: "green", price: 300, rent: [26, 130, 390, 900, 1100, 1275], houseCost: 200, hotelCost: 200 },
    { id: 28, name: "Go to Jail", type: "special", description: "Move directly to Jail. Do not pass GO, do not collect $200." },
    { id: 29, name: "North Carolina Avenue", type: "property", color: "green", price: 300, rent: [26, 130, 390, 900, 1100, 1275], houseCost: 200, hotelCost: 200 },
    { id: 30, name: "Pennsylvania Avenue", type: "property", color: "green", price: 320, rent: [28, 150, 450, 1000, 1200, 1400], houseCost: 200, hotelCost: 200 },
    { id: 31, name: "Short Line", type: "railroad", price: 200, rent: [25, 50, 100, 200] },
    { id: 32, name: "Park Place", type: "property", color: "dark blue", price: 350, rent: [35, 175, 500, 1100, 1300, 1500], houseCost: 200, hotelCost: 200 },
    { id: 33, name: "Luxury Tax", type: "tax", amount: 100 },
    { id: 34, name: "Boardwalk", type: "property", color: "dark blue", price: 400, rent: [50, 200, 600, 1400, 1700, 2000], houseCost: 200, hotelCost: 200 },
    { id: 35, name: "Chance", type: "special", description: "Draw a Chance card." }
];
let playerPos = [0, 0];
let currentPlayerTurn = 0;
let playerBalances = [1500, 1500];
let playerProperties = [[], []];
const arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    35, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11,
    34, -1, -1, -1, -1, -1, -1, -1, -1, -1, 12,
    33, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13,
    32, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14,
    31, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15,
    30, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16,
    29, -1, -1, -1, -1, -1, -1, -1, -1, -1, 17,
    28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18
];
function updateBoard() {
    gameGrid.innerHTML = "";
    arr.map(item => {
        const property = monopolyBoard.find(p => p.id === item);
        const colorClass = (property === null || property === void 0 ? void 0 : property.color) ? property.color.replace(/\s+/g, "-").toLowerCase() : '';
        const chanceImage = (property === null || property === void 0 ? void 0 : property.type) === "special" && (property === null || property === void 0 ? void 0 : property.name) === "Chance"
            ? '<img src="https://i.pinimg.com/originals/77/8d/b2/778db27d1a38f11413a0146fec674702.gif" alt="" class="chanceImg"/>'
            : '';
        const luxuryTax = (property === null || property === void 0 ? void 0 : property.type) === "tax" && (property === null || property === void 0 ? void 0 : property.name) === "Luxury Tax"
            ? '<img src="https://monopolyleeds.com/wp-content/uploads/2024/04/Ring.png" alt="" class="luxuryTax"/>'
            : '';
        const waterWorks = (property === null || property === void 0 ? void 0 : property.name) === "Water Works"
            ? '<img src="https://clipart-library.com/img1/994821.gif" alt="Water Works" class="waterWorks"/>'
            : '';
        const railroadImage = (property === null || property === void 0 ? void 0 : property.type) === "railroad" &&
            ((property === null || property === void 0 ? void 0 : property.name) === "B&O Railroad" || (property === null || property === void 0 ? void 0 : property.name) === "Short Line" || (property === null || property === void 0 ? void 0 : property.name) === "Reading Railroad")
            ? '<img src="https://png.pngtree.com/png-clipart/20230415/original/pngtree-train-cartoon-green-retro-pattern-png-image_9057444.png" alt="" class="train"/>'
            : '';
        const goImage = (property === null || property === void 0 ? void 0 : property.name) === "GO"
            ? '<img src="https://images.seeklogo.com/logo-png/55/2/red-arrow-logo-png_seeklogo-555095.png?v=638685210770000000" alt="" class="goImg"/>'
            : '';
        const freeParking = (property === null || property === void 0 ? void 0 : property.name) === "Free Parking"
            ? '<img src="https://i0.wp.com/boardgamemanufacturing.com/wp-content/uploads/2019/04/free-parking1.png?fit=216%2C216&ssl=1" alt="" class="parking"/>'
            : '';
        const jail = (property === null || property === void 0 ? void 0 : property.name) === "Jail"
            ? '<img src="https://www.prosportstickers.com/wp-content/uploads/nc/v/monopoly_game_rich_uncle_4__67622.png" alt="" class="jail"/>'
            : '';
        const goJail = (property === null || property === void 0 ? void 0 : property.name) === "Go to Jail"
            ? '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpQV7oWi2q1DAhnK6LL11XDBllLjfAFUUUA&s" alt="" class="goJail"/>'
            : '';
        const incomeTax = (property === null || property === void 0 ? void 0 : property.type) === "tax" && (property === null || property === void 0 ? void 0 : property.name) === "Income Tax"
            ? '<img src="https://png.pngtree.com/png-vector/20240614/ourmid/pngtree-cash-overflow-piles-of-coins-and-full-money-bags-png-image_12716247.png" alt="" class="incomeTax"/>'
            : '';
        const chest = (property === null || property === void 0 ? void 0 : property.type) === "special" && (property === null || property === void 0 ? void 0 : property.name) === "Community Chest"
            ? '<img src="https://i.pinimg.com/originals/aa/98/84/aa98846a483c4de09ea31b9c1e3fd8a1.gif" alt="" class="chest"/>'
            : '';
        gameGrid.innerHTML += `
            <div class="${item !== -1 ? 'border' : ''}">
                ${item === playerPos[0] ? '<div class="player1"><img class="player1Icon" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png" alt=""></div>' : ''}
                ${item === playerPos[1] ? '<div class="player2"><img class="player2Icon" src="https://listium-res.cloudinary.com/image/upload/w_800,h_800,c_limit,q_auto,f_auto/fymj6o4kcm2gvf2rh78o.png" alt=""></div>' : ''}
                ${property ? `
                    <div class="property-info">
                        <div class="property-color ${colorClass}"></div>
                        <div class="property-name">${property.name}</div>
                        ${property.price !== undefined ? `<div class="property-price">$${property.price}</div>` : ''}
                        ${property.type === 'tax' ? `<div class="property-price">$${property.amount}</div>` : ''}
              
                        ${chanceImage} 
                        ${luxuryTax}
                        ${waterWorks}
                         ${railroadImage}
                         ${goImage}
                          ${freeParking}
                           ${jail}
                           ${goJail}
                           ${incomeTax}
                           ${chest}
                    </div>
                ` : ''}
            </div>
        `;
    });
}
updateBoard();
function updateMoneyDisplay() {
    const moneyPlayer1 = document.getElementById('moneyPlayer1');
    if (moneyPlayer1) {
        moneyPlayer1.textContent = `Money: $${playerBalances[0]}`;
    }
    const moneyPlayer2 = document.getElementById('moneyPlayer2');
    if (moneyPlayer2) {
        moneyPlayer2.textContent = `Money: $${playerBalances[1]}`;
    }
}
function calculateRent(property, playerIndex) {
    if (property.owner === undefined || property.owner === playerIndex) {
        return 0;
    }
    let rent = 0;
    if (property.houseCost && property.hotelCost) {
        const houses = property.rent ? property.rent.length : 0;
        rent = property.rent[houses] || property.rent[0];
    }
    else {
        rent = property.rent ? property.rent[0] : 0;
    }
    return rent;
}
function updateInfobox(message) {
    const infobox = document.querySelector('.infobox');
    const logMessage = document.createElement('p');
    logMessage.textContent = message; // Set the log message text
    infobox.appendChild(logMessage); // Append the new log to the infobox
    infobox.scrollTop = infobox.scrollHeight; // Auto-scroll to the bottom
}
function collectMoney(playerIndex) {
    playerBalances[playerIndex] += 200;
    updateInfobox(`Player ${playerIndex + 1} collected $200.`);
}
function buyProperty(playerIndex) {
    const currentPosition = playerPos[playerIndex];
    const property = monopolyBoard[currentPosition];
    if (!property || (property.type !== "property" && property.type !== "railroad" && property.type !== "utility")) {
        updateInfobox("Can't buy this property!");
        return;
    }
    if (property.owner !== undefined) {
        updateInfobox("This property is already owned!");
        return;
    }
    if (playerBalances[playerIndex] < property.price) {
        updateInfobox("You don't have enough money to buy this property!");
        return;
    }
    playerBalances[playerIndex] -= property.price;
    property.owner = playerIndex;
    playerProperties[playerIndex].push(currentPosition);
    updatePlayerCards();
    updateMoneyDisplay();
    updateBoard();
}
function updatePlayerCards() {
    const propertyPlayer1 = document.getElementById('propertyPlayer1');
    const propertyPlayer2 = document.getElementById('propertyPlayer2');
    propertyPlayer1.textContent = `Property: ${playerProperties[0]
        .map(id => monopolyBoard[id].name)
        .join(", ") || "None"}`;
    propertyPlayer2.textContent = `Property: ${playerProperties[1]
        .map(id => monopolyBoard[id].name)
        .join(", ") || "None"}`;
}
buyProperty1.onclick = () => {
    if (currentPlayerTurn !== 0) {
        alert("It's not your turn!");
        return;
    }
    buyProperty(0);
};
buyProperty2.onclick = () => {
    if (currentPlayerTurn !== 1) {
        alert("It's not your turn!");
        return;
    }
    buyProperty(1);
};
updatePlayerCards();
rollDicePlayer1.onclick = () => {
    if (currentPlayerTurn !== 0) {
        alert("Player 2's turn");
        return;
    }
    const res = Math.ceil(Math.random() * 6);
    playerPos[0] += res;
    updateInfobox(`Player 1 rolled ${res}`);
    if (playerPos[0] > 35) {
        playerPos[0] -= 36;
        collectMoney(0);
    }
    const currentProperty = monopolyBoard[playerPos[0]];
    if (currentProperty.type === "tax" && currentProperty.amount) {
        if (playerBalances[0] < currentProperty.amount) {
            return;
        }
        else {
            playerBalances[0] -= currentProperty.amount;
            updateInfobox(`Player 1 landed on a tax space and must pay $${currentProperty.amount}.`);
        }
    }
    const rent = calculateRent(currentProperty, 0);
    if (rent > 0) {
        if (playerBalances[0] >= rent) {
            playerBalances[0] -= rent;
            playerBalances[currentProperty.owner] += rent;
            updateInfobox(`Player 1 landed on ${currentProperty.name} and paid rent of $${rent}.`);
        }
    }
    updateBoard();
    updateMoneyDisplay();
    currentPlayerTurn = 1;
};
rollDicePlayer2.onclick = () => {
    if (currentPlayerTurn !== 1) {
        updateInfobox("Player 1's turn");
        return;
    }
    const res = Math.ceil(Math.random() * 6);
    playerPos[1] += res;
    updateInfobox(`Player 2 rolled ${res}`);
    if (playerPos[1] > 35) {
        playerPos[1] -= 36;
        collectMoney(1);
    }
    const currentProperty = monopolyBoard[playerPos[1]];
    if (currentProperty.type === "tax" && currentProperty.amount) {
        if (playerBalances[1] < currentProperty.amount) {
            return;
        }
        else {
            playerBalances[1] -= currentProperty.amount;
            updateInfobox(`Player 2 landed on a tax space and must pay $${currentProperty.amount}.`);
        }
    }
    const rent = calculateRent(currentProperty, 1);
    if (rent > 0) {
        if (playerBalances[1] >= rent) {
            playerBalances[1] -= rent;
            playerBalances[currentProperty.owner] += rent;
            updateInfobox(`Player 2 landed on ${currentProperty.name} and paid rent of $${rent}.`);
        }
        else {
            updateInfobox(`Player 2 can't afford the tax of $${currentProperty.amount}`);
        }
    }
    updateBoard();
    updateMoneyDisplay();
    currentPlayerTurn = 0;
};
updateBoard();
updateMoneyDisplay();
