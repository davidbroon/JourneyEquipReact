import './HeroBlock.Style.css';
import { accent3, accent2 } from '../../../style/colorConstants';
import StyledButton from '../../button/Button';
import { Button } from '@mui/material';

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
					{/* <button className='styleButton'>Chat With the team</button> */}

					<div className='heroLine' style={{ background: accent3 }} />
					{/* <button className='styleButton'>Register Your Interest</button> */}
				</div>
			</div>
		</div>
	);
};
export default HeroBlock;
