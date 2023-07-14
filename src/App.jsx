import ScoreCount from './ScoreCount'
import './App.css'

function App() {
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				<img
					src='https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3784&q=80'
					alt='Shoes'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>Multi Player Game Score Keeper</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className='card-actions justify-center'>
					<ScoreCount />
				</div>
			</div>
		</div>
	)
}

export default App
