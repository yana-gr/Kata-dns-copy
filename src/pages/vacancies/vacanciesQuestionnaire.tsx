import { Link } from 'react-router-dom';
import styles from './vacanciesQuestionnaire.module.css';

const VacanciesQuestionnaire = () => {

  return(
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <h5 className={styles.title}>Мы будем рады с вами сотрудничать</h5>
        <p className={styles.text}>Расскажите нам о себе, возможно, вы именно тот, кто нам нужен!</p>
      </div>
      <Link className={styles.link} to='vacancy-form'>Заполнить анкету</Link>
    </div>
    );
}

export default VacanciesQuestionnaire;