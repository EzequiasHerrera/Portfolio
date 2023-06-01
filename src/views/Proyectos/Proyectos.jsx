import styles from "./proyectos.module.scss";

const Proyectos = () => {

  const projectList = [
    {
      id: 1,
      title: "Pagina de Electricidad",
      img: "pag1",
      text: "Esta pagina es genial y está hecha en ReactJS"
    },
    {
      id: 2,
      title: "Pagina de Hamburguesas",
      img: "pag2",
      text: "Esta pagina es genial y está hecha en ReactJS"
    },
    {
      id: 3,
      title: "Pagina de Electricidad",
      img: "pag1",
      text: "Esta pagina es genial y está hecha en ReactJS"
    }
  ]

  return (
    <>
      <div className={styles.container}>
        {projectList.map((project) => (
          <div key={project.id} className={styles.projectContainer} style={project.id % 2 != 0 ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }}>

            <div className={styles.titleImg}>
              <p>{`#${project.id} ${project.title}`}</p>

              <div className={styles.screen}>
                <div className={styles.brillo}></div>
              </div>

            </div>

            <div className={styles.textCard}>
              <img className={styles.pin} src="../img/pin_rojo.png" alt="pin_rojo" />
              <p>{`${project.text}`}</p>
            </div>

          </div>
        ))}
      </div>
    </>
  );


}
export default Proyectos;