import createDeck from './create-deck';

export default class Game {
	drawPile = [];
	discardPile = [];
	burnedCard = null;

	resetCards() {
		this.drawPile = createDeck();
		this.discardPile = [];
		this.burnedCard = this.drawPile.pop();
	}
}
