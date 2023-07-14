import { useState } from 'react'

function ScoreCount() {
	const [score, setScore] = useState(0)
	function plusScore() {
		setScore((n) => n + 1)
	}
	function reset() {
		setScore((n) => (n = 0))
	}
	return (
		<>
			<div>
				<p>Player1: {score}</p>
				<button onClick={plusScore}>+1</button>
			</div>
			<button onClick={reset}>Reset</button>
		</>
	)
}

export default ScoreCount
