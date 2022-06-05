import './whatToExpect.style.css';

const WhatToExpect = () => {
	return (
		<div className='wteContainer'>
			<h1 className='wteHeader'>What to Expect?</h1>
			<div className='wteContentOne'>
				{/* flex justify spread even, row*/}
				<div className='wteContentOneContainers'>
					<p className='wteContentOneTitle'>Grow in Faith</p>
					<p className='wteContentOneTitle'>Worship in Freedom</p>
					<p className='wteContentOneTitle'>Grow in Identity</p>
				</div>
				{/*  //flex column */}
				<div className='wteContentOneContainers'>
					<div className='wteContentOneLine'></div>
					<div className='wteContentOneLine'></div>
					<div className='wteContentOneLine'></div>
				</div>
				<div className='wteContentOneContainers'>
					<p className='wteContentOneContent'>
						Get both hands-on training and academic, Biblical understanding of
						the kingdom of God in a “teach and do” culture. Learn to walk in the
						power of God
					</p>
					<p className='wteContentOneContent'>
						Learn to walk and wait in the presence of the Lord;
					</p>
					<p className='wteContentOneContent'>
						Live a life of supernatural forgiveness, acceptance & surrender.
					</p>
				</div>
			</div>
			<p className='wteContentTwo'>
				Grow in your identity, develop your noble character, and become who God
				made you to be. Leave your time at BSSM healthy, whole, healed, free,
				and empowered in your calling.
			</p>
		</div>
	);
};

export default WhatToExpect;
