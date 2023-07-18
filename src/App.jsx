import ScoreCard from './ScoreCard';
import './App.css';

function App() {
	return (
		<div className='card min-w-md max-w-lg bg-base-200 shadow-xl m-auto'>
			<figure>
				<img
					className='h-64 w-fit'
					src='https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3784&q=80'
					alt='Tennis Table'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>Multiplayer Game Score Keeper</h2>
				<ScoreCard
					numPlayers={4}
					target={10}
				/>
			</div>
		</div>
	);
}

export default App;
