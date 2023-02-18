import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>МЫ ЛУЧШИЙ ОНЛАЙН МАГАЗИН В ГОРОДЕ</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>НАЙТИ НАШИ РЕСТОРАНЫ</h1>
          <p className={styles.text}>
            пр. Ленина, 46.
            <br /> Барнаул, 656038
            <br /> (012) 345-6789
          </p>
          <p className={styles.text}>
            пр. Ленина, 46.
            <br /> Барнаул, 656038
            <br /> (012) 345-6789
          </p>
          <p className={styles.text}>
            пр. Ленина, 46.
            <br /> Барнаул, 656038
            <br /> (012) 345-6789
          </p>
          <p className={styles.text}>
            пр. Ленина, 46.
            <br /> Барнаул, 656038
            <br /> (012) 345-6789
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>РАБОЧЕЕ ВРЕМЯ</h1>
          <p className={styles.text}>
            ПОНЕДЕЛЬНИК - ПЯТНИЦА
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            СУББОТА - ВОСКРЕСЕНЬЕ
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
