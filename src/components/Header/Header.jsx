import { HeaderStyle } from './Header-Style';
import logo from '../../assets/images/whiteLogoJE.png';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
	return (
		<HeaderStyle className='navbar sticky-top flex-md-nowrap p-0'>
			<div className='container'>
				<ul>
					<li>
						<NavLink to='/'>About Us</NavLink>
					</li>
				</ul>
				<Link to='/'>
					<img src={logo} alt='Journey Equip' />
				</Link>
				<ul>
					<li>
						<NavLink to='/'>Course</NavLink>
					</li>
				</ul>
			</div>
		</HeaderStyle>
	);
};

export default Header;
