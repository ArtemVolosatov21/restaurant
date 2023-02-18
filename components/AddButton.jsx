import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Добавить новую пиццу
    </div>
  );
};

export default AddButton;
