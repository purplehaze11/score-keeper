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
			<div className='flex flex-col'>
				<p
					className='m-2'
					id={id}
				>
					Player{id + 1}: {unit}
				</p>
				{arr.some(isTarget) ? (
					<button
						className='btn btn-disabled'
						disabled
					>
						+1
					</button>
				) : (
					<button10
						className='btn btn-outline btn-primary'
						onClick={() => increment(id)}
					>
						+1
					</button10>
				)}
			</div>
		</li>
	));

	return (
		<>
			<div className='card h-10 w-auto bg-neutral text-neutral-content flex'>
				{card.map((unit, id) =>
					unit === target ? (
						<p className='text-green-400 py-2'>Player{id + 1} win!</p>
					) : null
				)}
			</div>

			<div>
				<ul className='flex flex-row flex-wrap justify-evenly'>{cardUnit}</ul>
			</div>
			<button
				className='btn btn-outline btn-error mt-4'
				onClick={reset}
			>
				Reset
			</button>
		</>
	);
}

export default ScoreCard;
