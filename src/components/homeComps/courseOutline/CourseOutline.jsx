import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import courseOutlineData from '../../../dummyData/courseOutline.json';
import './courseOutline.style.css';

const CourseOutline = () => {
	const [selectedIndex, setSelectedIndex] = useState(1);
	const [courseDescription, setCourseDescription] = useState('');

	const handleListItemClick = (event, index, data) => {
		setSelectedIndex(index);
		setCourseDescription(data);
	};

	const courseMap = () => {
		return courseOutlineData.map(
			({ id, courseTitle, courseDescription }, index) => (
				<ListItemButton
					className='coListItemButton'
					key={index}
					selected={selectedIndex === index}
					onClick={(event) =>
						handleListItemClick(event, index, courseDescription)
					}
				>
					<p className='coListItem'>{courseTitle}</p>
				</ListItemButton>
			),
		);
	};

	return (
		<>
			<h1 className='coTitle'>What You Will Learn</h1>

			<Box className='coContainer'>
				<List className='coList' component='nav'>
					{courseMap()}
				</List>
				<div className='coLine'></div>
				<div className='coDescription'>{courseDescription}</div>
			</Box>
		</>
	);
};
export default CourseOutline;
