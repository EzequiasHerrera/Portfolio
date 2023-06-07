import styles from "./contacto.module.scss";

const Contacto = () => {

  const cards = [
    {
      id: 1,
      background: "Portfolio/img/fondo.png",
      icono: "icono_hoja.png",
      imagen: "personaje3D.png",
      texto: "DESCARGA MI CURRICULUM",
      iconoAbajo: ""
    },
    {
      id: 2,
      background: "Portfolio/img/fondo2.png",
      icono: "image.png",
      imagen: "imgportada.jpg",
      texto: "",
      iconoAbajo: "icono_linkedin.png"
    },
    {
      id: 3,
      background: "Portfolio/img/fondos1.png",
      icono: "icono_gmail.png",
      imagen: "PersonajeCV.jpg",
      texto: "CONTACTAME CON UN MAIL",
      iconoAbajo: ""
    },
  ]

  const generarCards = cards.map((card) => {
    const condition = (card.texto != "") ? true : false;
    console.log(condition);

    return (
      <div className={styles.card} key={card.id} style={{ backgroundImage: `url(${card.background})` }} >
        <div className={styles.cardIcon}><img src={`Portfolio/img/${card.icono}`} alt="" /></div>
        <div className={styles.cardImg} style={{ backgroundImage: `url(Portfolio/img/${card.imagen})` }}></div>
        {condition ?
          <p className={styles.cardText}>{card.texto}</p>
          : <img className={styles.cardBottom} src={`Portfolio/img/${card.iconoAbajo}`} alt="" />}
      </div>
    );
  });


  return (
    <div className={styles.cardContainer}>{generarCards}</div>
  )
}
export default Contacto