import { Fragment } from 'react';
import { HeaderStyle } from './Header-Style';
import logo from '../../assets/images/whiteLogoJE.png';
import { NavLink, Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';

const Header = () => {
	const [right, setRight] = useState(false);

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<LinkScroll
							to='aboutUsSection'
							activeClass='active'
							spy={true}
							smooth={true}
						>
							About Us
						</LinkScroll>
					</ListItemButton>
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<LinkScroll
							to='courseOutlineSection'
							activeClass='active'
							spy={true}
							smooth={true}
						>
							Course
						</LinkScroll>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setRight(true);
	};
	if (window.matchMedia('(min-width:600px)').matches) {
		return (
			<HeaderStyle className='navbar sticky-top flex-md-nowrap p-0'>
				<div className='container'>
					<ul>
						<li>
							<LinkScroll
								to='aboutUsSection'
								activeClass='active'
								spy={true}
								smooth={true}
							>
								About Us
							</LinkScroll>
						</li>
					</ul>
					<Link to='/'>
						<img src={logo} alt='Journey Equip' />
					</Link>
					<ul>
						<li>
							<LinkScroll
								to='courseOutlineSection'
								activeClass='active'
								spy={true}
								smooth={true}
							>
								Course
							</LinkScroll>
						</li>
					</ul>
				</div>
			</HeaderStyle>
		);
	} else {
		return (
			<div>
				<>
					<button onClick={toggleDrawer(right, true)}>drawer</button>
					<Drawer
						anchor={right}
						open={right}
						onClose={toggleDrawer(right, false)}
					>
						{list(right)}
					</Drawer>
				</>
			</div>
		);
	}
};

export default Header;
