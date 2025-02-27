import styles from "./Cars.module.css";

const Cars = ({ name, color, km }) => {
  return (
    <div className={styles.card}>
      <hr />
      <h2 className={styles.title_car}>
        Nome do carro: <strong className={styles.name_car}>{name}</strong>
      </h2>
      <p>
        Cor do carro: <strong>{color}</strong>
      </p>
      <p>
        Kilometragem do carro: <strong>{km}</strong>
      </p>
      <hr />
    </div>
  );
};

export default Cars;
