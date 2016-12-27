import createDeck from './create-deck';

const minPlayers = 2;
const maxPlayers = 4;
const cardsToBurnNormal = 1;
const cardsToBurnExtra = 3;

export default class Game {
	drawDeck = [];
	playersHands = [];
	discardedCards = [];
	burnedCards = [];

	constructor(playerCount) {
		if (!Number.isInteger(playerCount))
			throw new Error('invalid parameter playerCount - not an integer');

		if (playerCount < minPlayers)
			throw new Error(`invalid parameter playerCount - minimum ${minPlayers} players`);

		if (playerCount > maxPlayers)
			throw new Error(`invalid parameter playerCount - maximum ${maxPlayers} players`);

		this.playersHands = new Array(playerCount);
		this.resetCards();
	}

	get playerCount() {
		return this.playersHands.length;
	}

	resetCards() {
		this.drawDeck = createDeck();
		this.discardedCards = [];
		this.burnedCards = [];

		for (let i = 0; i < this.playerCount; i++)
			this.playersHands[i] = [];

		let cardsToBurn = cardsToBurnNormal;

		if (this.playerCount === minPlayers)
			cardsToBurn += cardsToBurnExtra;

		for (let i = 0; i < cardsToBurn; i++)
			this.burnedCards.push(this.drawDeck.pop());

		for (let i = 0; i < this.playerCount; i++)
			this.playersHands[i] = [this.drawDeck.pop()];
	}
}
