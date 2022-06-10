import './BackGroundImage.style.css';

const FullWidthBackgroundImage = (image, id) => {
	return (
		<div className='fullWidthImageContainer'>
			<div className='fullWidthImageTopLine'></div>
			<div
				className='homeFullWidthImage'
				id={id}
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<div className='fullWidthImageBottomLine'></div>
		</div>
	);
};
export default FullWidthBackgroundImage;
