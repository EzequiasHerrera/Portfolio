import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./secciones.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

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
        <Link to="/" className={styles.front}>INICIO</Link>
        <Link to="/proyectos" className={styles.back}>PROYECTOS</Link>
        <Link to="/acerca-de-mi" className={styles.left}>ACERCA DE MÍ</Link>
        <Link to="/contacto" className={styles.right}>CONTACTO</Link>
      </div>
      <button className={`${styles.arrowLeft} arrow`} onClick={next}><SlArrowLeft /></button>
      <button className={`${styles.arrowRight} arrow`} onClick={previous}><SlArrowRight /></button>
    </div>
  );
};

export default Secciones;
