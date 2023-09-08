import Image from 'next/image';
import styles from './HeaderWithBubbles.module.css';
import EllipsesLeft from '../../public/assets/EllipsesLeft.svg';
import EllipsesRight from '../../public/assets/EllipsesRight.svg';
const HeaderWithBubbles = ({ header }: { header: string }) => {
  return (
    <div className={styles['header2-container']}>
      <div className={styles['ellipses-left']}>
        <Image src={EllipsesLeft} alt="EllipsesLeft" />
      </div>
      <div className={styles['ellipses-right']}>
        <Image src={EllipsesRight} alt="EllipsesRight" />
      </div>
      <h2 className={styles.header2}>{header}</h2>
    </div>
  );
};

export default HeaderWithBubbles;
