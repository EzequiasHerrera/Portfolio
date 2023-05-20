import { useEffect, useRef, useState } from "react";
import styles from "./secciones.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

const Secciones = () => {

  const [rotations, setRotations] = useState(0);
  const container3D = useRef(null);

  useEffect(() => {
    container3D.current.style.transform = `rotateY(${rotations * 90}deg)`;
  }, [rotations]);

  const next = () => {
    setRotations(rotations + 1);
  };

  const previous = () => {
    setRotations(rotations - 1);
  };

  return (
    <div className={styles.navegador}>
      <div className={styles.container} ref={container3D}>
        <div className={styles.front}><Link to={"/home"}>INICIO</Link></div>
        <div className={styles.back}><Link to={"/proyectos"}>PROYECTOS</Link></div>
        <div className={styles.left}><Link to={"/acerca-de-mi"}>ACERCA DE MÍ</Link></div>
        <div className={styles.right}><Link to={"/contacto"}>CONTACTO</Link></div>
      </div>
      <button className={`${styles.arrowLeft} arrow`} onClick={next}><SlArrowLeft /></button>
      <button className={`${styles.arrowRight} arrow`} onClick={previous}><SlArrowRight /></button>
    </div>
  );
};

export default Secciones;
