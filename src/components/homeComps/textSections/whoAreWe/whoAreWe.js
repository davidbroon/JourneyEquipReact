import './whoAreWe.style.css';
// import logo from '../../../../assets/svg/top.svg';

const WhoAreWe = () => {
	return (
		<>
			<div className='whoAreWeLineContainer'>
				{/* <svg
					viewBox='0 0 660 515'
					fill='none'
					preserveAspectRatio='xMidYMax meet'
				>
					<path
						d='M4.00018 1C3.82258 159.264 135.861 201.31 202 199C202 199 640 199 622 199C604 199 654 199 654 231C654 263 654 435 654 435C654 435 664 467 622 467C580 467 28.0002 467 28.0002 467C28.0002 467 4.00018 467 4.00018 515'
						stroke='#F4A306'
						stroke-width='8'
					/>
				</svg> */}
			</div>

			<p className='whoAreWeParagraph' id='aboutUsSection'>
				Journey Equip is a new ministry school run by Journey Community Church
				located in Antrim, Northern Ireland.
				<br />
				<br />
				Our goal is to equip, train and empower leaders to bring revival to
				Ireland, Europe and The Nations.
			</p>
		</>
	);
};

export default WhoAreWe;
