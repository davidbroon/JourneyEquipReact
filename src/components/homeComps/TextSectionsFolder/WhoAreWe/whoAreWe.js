import { useState, useEffect, useRef } from 'react';
import './whoAreWe.style.css';
// import logo from '../../../../assets/svg/top.svg';

const WhoAreWe = () => {
	const [bgColor, setBgColor] = useState(false);
	const navRef = useRef();
	navRef.current = bgColor;
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 600;
			if (navRef.current !== show) {
				setBgColor(show);
			}
		};
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className='whoAreWeContainer'>
				<div className='whoAreWeLine' />
				<p
					className='whoAreWeParagraph'
					id='aboutUsSection'
					style={{
						backgroundColor: `${bgColor ? '#E5E5E4' : 'white'}`,
						transition: '1s ease',
					}}
				>
					Journey Equip is a new ministry school run by Journey Community Church
					located in Antrim, Northern Ireland.
					<br />
					<br />
					Our goal is to equip, train and empower leaders to bring revival to
					Ireland, Europe and The Nations.
				</p>
			</div>
		</>
	);
};

export default WhoAreWe;

// const [navBackground, setNavBackground] = useState(false)
//   const navRef = useRef()
//   navRef.current = navBackground
//   useEffect(() => {
//     const handleScroll = () => {
//       const show = window.scrollY > 670
//       if (navRef.current !== show) {
//         setNavBackground(show)
//       }
//     }
//     document.addEventListener('scroll', handleScroll)
//     return () => {
//       document.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

// //then
// <Navbar
//     backgroundColor={navBackground ? 'white' : 'transparent'}
//     style={{ transition: '1s ease' }}
//   />
