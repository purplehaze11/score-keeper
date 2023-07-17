import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const generateArr = (num) => Array(num).fill(0);

function ScoreCard({ numPlayers = 2 }) {
	const [card, setCard] = useState(generateArr(numPlayers));
	const increment = (index) => {
		setCard((oldCard) => {
			return [...oldCard].map((i, ind) => {
				if (index === ind) {
					return i + 1;
				} else {
					return i;
				}
			});
		});
	};
	const cardUnit = card.map((unit, id) => (
		<li key={uuidv4()}>
			<p id={id}>
				Player{id + 1}: {unit}
			</p>
			<button onClick={() => increment(id)}>+1</button>
		</li>
	));
	return <ul>{cardUnit}</ul>;
}

export default ScoreCard;
