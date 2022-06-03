import CoreValueDisplay from '../../homeComps/coreValues/CoreValues';
import HeroBlock from '../../homeComps/heroBlock/HeroBlock';
import WhoAreWe from '../../homeComps/textSections/whoAreWe/whoAreWe';
import journeyCV from '../../../dummyData/journeyCoreValues.json';
import LeadersBlock from '../../homeComps/textSections/leaders/LeadersBlock';
import WaitListForm from '../../homeComps/waitListForm/WaitForm';
import WhatToExpect from '../../homeComps/WhatToExpect/WhatToExpect';
import CourseOutline from '../../homeComps/courseOutline/CourseOutline';

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
			<WaitListForm />
			{cvMap()}
			<LeadersBlock />
			<WaitListForm />
			<WhatToExpect />
			<CourseOutline />
		</div>
	);
};
export default Home;
