import styles from './Navbar.module.css'
import Logo from '../../public/assets/logo.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <Image style={{ height: '100%' }} src={Logo} alt="Logo" />
      </div>
    </nav>
  )
}

export default Navbar
