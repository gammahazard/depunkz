import styles from '../styles/animations.module.scss';

const AnimationComponent = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 100 }).map((_, i) => (
        <div className={styles['circle-container']} key={i}>
          <div className={styles.circle}></div>
        </div>
      ))}
    </div>
  );
};

export default AnimationComponent;
