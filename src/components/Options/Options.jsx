import styles from './Options.module.css';

export default function Options({
  totalFeedback,
  updateFeedback,
  resetFeedback,
}) {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={styles.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={styles.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button className={styles.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}