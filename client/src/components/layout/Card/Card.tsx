import styles from "./Card.module.css";

export function Card(props: { title?: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className={styles.card}>
      {(props.title || props.right) && (
        <div className={styles.header}>
          <div className={styles.title}>{props.title}</div>
          <div>{props.right}</div>
        </div>
      )}
      <div>{props.children}</div>
    </section>
  );
}
