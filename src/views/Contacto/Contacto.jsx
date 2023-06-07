import styles from "./contacto.module.scss";

const Contacto = () => {

  const cards = [
    {
      id: 1,
      background: "img/fondo.png",
      icono: "icono_hoja.png",
      imagen: "personaje3D.png",
      texto: "DESCARGA MI CURRICULUM",
      iconoAbajo: "",
      link: "public/CV/CV-Ezequias_Herrera.pdf"
    },
    {
      id: 2,
      background: "img/fondo2.png",
      icono: "image.png",
      imagen: "imgportada.jpg",
      texto: "",
      iconoAbajo: "icono_linkedin.png",
      link: "https://www.linkedin.com/in/ezequiasherrera"
    },
    {
      id: 3,
      background: "img/fondos1.png",
      icono: "icono_gmail.png",
      imagen: "PersonajeCV.jpg",
      texto: "CONTACTAME CON UN MAIL",
      iconoAbajo: "",
      link: ""
    },
  ]

  const generarCards = cards.map((card) => {
    const condition = (card.texto != "") ? true : false;
    return (
      <a href={card.link} target="_blank" className={styles.card} key={card.id} style={{ backgroundImage: `url(${card.background})` }} download={card.id === 1 ? "" : null}>
        <div className={styles.cardIcon}><img src={`img/${card.icono}`} alt="" /></div>
        <div className={styles.cardImg} style={{ backgroundImage: `url(img/${card.imagen})` }}></div>
        {condition ?
          <p className={styles.cardText}>{card.texto}</p>
          : <img className={styles.cardBottom} src={`img/${card.iconoAbajo}`} alt="" />}
      </a>
    );
  });

  return (
    <div className={styles.cardContainer}>{generarCards}</div>
  )
}
export default Contacto