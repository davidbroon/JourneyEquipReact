import './HeroBlock.Style.css';
import { accent3, accent2 } from '../../../style/colorConstants';
import { StyledButton } from '../../Button/Button';

const HeroBlock = () => {
	return (
		<div className='heroImage'>
			<div className='heroContainer'>
				<div className='heroTextContainer'>
					<p className='heroTitleText'>
						Equipping Leaders for
						<span style={{ color: accent2 }}> revival</span>
					</p>
				</div>

				<div className='heroButtonAndLine'>
					<StyledButton>Chat With The Team</StyledButton>

					<div className='heroLine' style={{ background: accent3 }} />
					<StyledButton className='heroButtons'>Apply</StyledButton>
				</div>
			</div>
		</div>
	);
};
export default HeroBlock;
