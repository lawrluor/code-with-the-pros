
import styles from './TopNav.module.css';

const TopNav = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.left}>
        {/* <a href="/">Home</a> */}
      </div>

      <div className={styles.right}>
        {/* <a href="/">Login</a> */}
      </div>
    </nav>
  )
};

export default TopNav;
