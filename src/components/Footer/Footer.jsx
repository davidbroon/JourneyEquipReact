import './Footer.style.css';
import logo from '../../assets/logos/EquipLogo-02.svg';
const Footer = () => {
	return (
		<div className='footerContainer'>
			<img className='footerImage' src={logo} alt='Journey Equip' />
			<p className='footerCopyright'>Journey Equip 2022</p>
		</div>
	);
};
export default Footer;
