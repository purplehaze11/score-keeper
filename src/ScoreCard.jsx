import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const generateArr = (num) => Array(num).fill(0);

function ScoreCard({ numPlayers = 2, target = 3 }) {
	const [card, setCard] = useState(generateArr(numPlayers));

	const increment = (index) => {
		setCard((oldCard) => {
			return [...oldCard].map((i, ind) => {
				if (index === ind && i !== target) {
					return i + 1;
				} else {
					return i;
				}
			});
		});
	};

	const reset = () => {
		setCard((prevCard) => {
			return [...prevCard].map((i) => {
				return (i = 0);
			});
		});
	};

	const isTarget = (n) => n === target;

	const cardUnit = card.map((unit, id, arr) => (
		<li key={uuidv4()}>
			<p id={id}>
				Player{id + 1}: {unit}
			</p>
			{/* <button onClick={() => increment(id)}>+1</button> */}
			{arr.some(isTarget) ? (
				<button disabled>+1</button>
			) : (
				<button onClick={() => increment(id)}>+1</button>
			)}
		</li>
	));
	return (
		<>
			<ul>{cardUnit}</ul>
			<button onClick={reset}>Reset</button>
		</>
	);
}

export default ScoreCard;
