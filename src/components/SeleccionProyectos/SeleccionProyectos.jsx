import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./seleccionproyectos.module.scss";

const SeleccionProyectos = () => {
  const [ovalPosition, setOvalPosition] = useState("left");
  const secAnim = useRef(null);
  const secProg = useRef(null);

  const handleOptionClick = (option) => {
    if (option === "ANIMATION") {
      setOvalPosition("left");
      secAnim.current.classList.toggle(styles.active);
      secProg.current.classList.remove(styles.active);
    } else if (option === "PROGRAMATION") {
      setOvalPosition("right");
      secProg.current.classList.toggle(styles.active);
      secAnim.current.classList.remove(styles.active);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.barraBlanca}>
        <div className={`${styles.ovalo} ${ovalPosition === "left" ? styles.izquierda : styles.derecha}`} />
        <div className={styles.opciones}>
          <Link to="/Portfolio/proyectos/animacion" ref={secAnim} className={styles.active} onClick={() => handleOptionClick("ANIMATION")}>
            ANIMATION
          </Link>
          <Link to="/Portfolio/proyectos/programacion" ref={secProg} onClick={() => handleOptionClick("PROGRAMATION")}>
            PROGRAMATION
          </Link>
        </div>
      </div >
    </div >
  );
};

export default SeleccionProyectos;
