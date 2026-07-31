import styles from './BackgroundShapes.module.css';

export default function BackgroundShapes() {
  return (
    <div className={styles.backgroundContainer}>
      <div className={`${styles.shape} ${styles.shape1}`}></div>
      <div className={`${styles.shape} ${styles.shape2}`}></div>
      <div className={`${styles.shape} ${styles.shape3}`}></div>
      <div className={`${styles.shape} ${styles.shape4}`}></div>

      {/* Overlaydede pour donner de lafrefre texture (optionnel, effet noise) */}
      <div className={styles.noiseOverlay}></div>
    </div>
  );
}