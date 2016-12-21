import * as cards from './cards';

export default function createDeck() {
	const deck = [];

	// fill
	for (const [type, count] of cards.counts) {
		const arr = new Array(count);

		for (let i = 0; i < count; i++)
			arr[i] = { type };

		deck.push(...arr);
	}

	// shuffle
	for (let i = deck.length; i; i--) {
		const j = Math.floor(Math.random() * i);

		[deck[i - 1], deck[j]] = [deck[j], deck[i - 1]];
	}

	return deck;
}
