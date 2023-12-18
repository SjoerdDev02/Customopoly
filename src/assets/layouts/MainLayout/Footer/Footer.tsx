import { NavLink, Link } from "react-router-dom";
import styles from './Footer.module.css';

const Footer = () => {
    const mailIcon = '/icons/footer/mail_icon.svg';
    const linkedInIcon = '/icons/footer/linkedin_icon.svg';
    const instagramIcon = '/icons/footer/instagram_icon.svg';
    const githubIcon = '/icons/footer/github_icon.svg';

  return (
    <footer className={styles.footer}>
        <div className={styles.divider}></div>
        <NavLink to='/'><h1>Customopoly</h1></NavLink>
        <div className={styles.socials}>
            <Link to='mailto:sjoerd.kessels2002@gmail.com'><img src={mailIcon} alt='Icon of email' /></Link>
            <Link to='https://www.linkedin.com/in/sjoerd-k-380a4928a/'><img src={linkedInIcon} alt='Logo of LinkedIn' /></Link>
            <Link to='https://www.instagram.com/sjoerd_02/'><img src={instagramIcon} alt='Logo of Instagram' /></Link>
            <Link to='https://github.com/SjoerdDev02/'><img src={githubIcon} alt='Logo of Github' /></Link>
        </div>
    </footer>
  );
}

export default Footer;