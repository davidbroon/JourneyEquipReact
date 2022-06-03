import CoreValueDisplay from '../../homeComps/CoreValues/CoreValues';
import HeroBlock from '../../homeComps/HeroBlock/HeroBlock';
import WhoAreWe from '../../homeComps/textSections/whoAreWe/whoAreWe';
import journeyCV from '../../../dummyData/journeyCoreValues.json';
import LeadersBlock from '../../homeComps/textSections/leaders/LeadersBlock';
import WaitListForm from '../../homeComps/waitListForm/WaitForm';

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
			{cvMap()}
			<WaitListForm />
			{/* <MailchimpFormContainer /> */}
			<LeadersBlock />
		</div>
	);
};
export default Home;
