import styles from './header.module.scss';
import '../../../node_modules/animate.css/animate.min.css'

const Header = () => {



  const paddingBottom = {
    paddingBottom: '30px'
  };

  return (
    <>
      <header className={styles.headerContainer} style={paddingBottom}>
        <div className={styles.headerFlex}>
          <div className={`${styles.titleName} animate__animated animate__fadeInLeft`}>
            <h1>FRONT-END DEVELOPER</h1>
            <div className={styles.linea}></div>
            <h2>Ezequías Herrera</h2>
            <p>ezequiasherrera99@gmail.com</p>
          </div>
          <div className={`${styles.cardImg} animate__animated animate__fadeInRight`}>
            <a href="https://www.linkedin.com/in/ezequiasherrera/" target="_blank">
              <div className={styles.front}></div>
              <div className={styles.back}></div>
            </a>
          </div>
        </div>
        <div className={styles.divisionBar}></div>
      </header>
    </>
  )
}

export default Header