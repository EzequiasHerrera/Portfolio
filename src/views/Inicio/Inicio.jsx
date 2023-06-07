import styles from "./inicio.module.scss";

const Inicio = () => {
  return (
    <>
      <div className={styles.flex}>
        <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f1e6-1f1f7.png" alt="argentine_flag" />
      </div>
      <div className={styles.container}>Hola y bienvenido a mi pagina Portfolio personal. Mi nombre es Ezequías Herrera y soy Desarrollador Front-End. Te invito a que veas mis proyectos!</div>
    </>
  )
}
export default Inicio