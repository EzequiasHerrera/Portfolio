import styles from "./proyectosAnimacion.module.scss";
import 'animate.css';

const ProyectosAnimacion = () => {

  const projectList = [
    {
      id: 1,
      title: "Videoclip Animado para cantante Iari",
      img: "animaciones1_2.png",
      link: "https://www.youtube.com/watch?v=Mau7EeWXE4I&ab_channel=iara",
      text: "Desarrollo de animación con diseño de personajes, storyboard, utilizando Animate CC y Sony Vegas"
    },
    {
      id: 2,
      title: "Animacion para cantante Kaffu",
      img: "animaciones2.png",
      link: "https://www.youtube.com/watch?v=kWjpSUw1q34&ab_channel=Kaffuhlbs",
      text: "El cliente me presentó su material a de animación con diseño de personaje, storyboard, utilizando Animate CC y Sony Vegas"
    },
    {
      id: 3,
      title: "Diseño de Emotes para Streamer SantuLP",
      img: "emotes.jpg",
      link: "https://www.twitch.tv/santulp",
      text: "El cliente requería de emotes personalizados y animados para su stream junto con emblemas de suscripción para los que apoyan el canal economicamente."
    },
    {
      id: 4,
      title: "Animación para videoclip musical",
      img: "animaciones3.png",
      link: "https://www.youtube.com/watch?v=NDEnAzy4G_A&ab_channel=EZEQU%C3%8DAS",
      text: "Desarrollamos una animación para el single DIRÉ utilizando Animate CC y Photoshop, diseñando de cero tanto los escenarios, como los personajes."
    }
  ]

  return (
    <>
      <div className={`${styles.container} animate__animated animate__fadeInUpBig`}>
        {projectList.map((project) => (
          <div key={project.id} className={styles.projectContainer} style={project.id % 2 != 0 ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' }}>

            <div className={styles.titleImg}>
              <p>{`#${project.id} ${project.title}`}</p>

              <a href={`${project.link}`} target="_blank" className={styles.screen} style={{ backgroundImage: `url(../img/${project.img})` }}>
                <div className={styles.brillo}></div>
              </a>

            </div>

            <div className={styles.textCard}>
              <img className={styles.pin} src="Portfolio/img/pin_rojo.png" alt="pin_rojo" />
              <p>{`${project.text}`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );


}
export default ProyectosAnimacion;