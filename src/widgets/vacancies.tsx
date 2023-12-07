import styles from './vacancies.module.css';
import MenuButtons from '../features/asideMenuButtons/menuButtons';
import VacanciesQuestionnaire from '../features/vacancies/vacanciesQuestionnaire';
import Searchvacansies from '../features/vacancies/searchvacansies';

const Vacancies = () => {
  return (
    <div className={styles.wrapper}>
      <MenuButtons />
      <div className={styles.main}>
        <h2 className={styles.title}>Сотрудники DNS профессионалы своего дела</h2>
        <div className={styles.img} />
        <ul className={styles.list}>
          <li className={styles.itemlist}><img className={styles.itemlist__img} src='/src/shared/imgVacansies/robot.svg' alt=''/>Одними из первых знакомятся с новинками</li>
          <li className={styles.itemlist}><img className={styles.itemlist__img} src='/src/shared/imgVacansies/stars.svg' alt='' />Постоянное обучение и развитие</li>
          <li className={styles.itemlist}><img className={styles.itemlist__img} src='/src/shared/imgVacansies/bulb.svg' alt='' />Огромное пространство возможностей</li>
          <li className={styles.itemlist}><img className={styles.itemlist__img} src='/src/shared/imgVacansies/chart-arrow-up.svg' alt='' />Быстрый и прозрачный карьерный рост</li>
        </ul>
        <Searchvacansies />
        <VacanciesQuestionnaire />
      </div>
    </div>
  );
}

export { Vacancies };
