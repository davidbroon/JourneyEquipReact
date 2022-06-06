import CoreValueDisplay from '../../homeComps/coreValues/CoreValues';
import HeroBlock from '../../homeComps/heroBlock/HeroBlock';
import WhoAreWe from '../../homeComps/textSections/whoAreWe/whoAreWe';
import journeyCV from '../../../dummyData/journeyCoreValues.json';
import LeadersBlock from '../../homeComps/textSections/leaders/LeadersBlock';
import WaitListForm from '../../homeComps/waitListForm/WaitForm';
import WhatToExpect from '../../homeComps/WhatToExpect/WhatToExpect';
import CourseOutline from '../../homeComps/courseOutline/CourseOutline';
import './home.style.css';

const Home = () => {
	const cvMap = () => {
		return journeyCV.map(
			({ id, valueTitle, valueContent, valueNumber }, index) => (
				<div key={index}>
					{CoreValueDisplay(valueTitle, valueContent, valueNumber, id)}
				</div>
			),
		);
	};

	return (
		<div>
			<HeroBlock />
			<WhoAreWe />
			{WaitListForm('buttonLineTop')}
			{cvMap()}
			<LeadersBlock />
			<WhatToExpect />
			<CourseOutline />
			{WaitListForm('buttonLineTopLarge')}
		</div>
	);
};
export default Home;
