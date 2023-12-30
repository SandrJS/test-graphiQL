import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>
        <h3 className={styles.footer__left_heading}>Author</h3>
        <a
          href="https://github.com/sardn"
          className={styles.footer__authors_link}
          target="_blank"
          rel="noopener noreferrer"
        >            Alexander Abyzov
        </a>
      </div>
      <div className={styles.footer__middle}>
        <span>2023</span>
      </div>
      <div className={styles.footer__right}>
        <a
          href="https://rs.school/react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/rs_school_js.svg"
            alt="Course Logo"
            width={120}
            height={40}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

