import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MenuButtons from '../asideMenuButtons/menuButtons';
import { GoBackButton } from '../../shared/ui/form/buttons/gobackbutton';
import styles from './vacansiesPage.module.css';
import { useGetVacansiesQuery } from 'shared/api/vacansiesSlice';

interface Vacancy {
  id: string | number;
  name: string;
  city: string;
  salaryMin: string;
  salaryMax: string;
  requirements: string[];
  responsibilities: string[];
  weOffer: string[];
  contacts: {email: string, phone: string}
}

const VacanciesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: vacansies = [], isLoading, } = useGetVacansiesQuery({
    id: id
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  const vacancy: Vacancy = vacansies.find((el: Vacancy) => el.id === Number(id));

  return(
    <div className={styles.wrapper} key={vacancy?.id}>
      <MenuButtons />
      <div className={styles.main}>
        <div className={styles.margin}><GoBackButton /></div>
        <h3 className={styles.maintitle}>{vacancy?.name}</h3>
        <div className={styles.about}>
          <p>Город: {vacancy?.city}</p>
          <p className={styles.text} >Зарплата: <div className={styles.bold}> {vacancy?.salaryMin}-{vacancy?.salaryMax}</div></p>
        </div>
        <ul className={styles.list}>
          <h3>Требования</h3>
          {vacancy?.requirements.map((item, index) => (
            <li className={styles.item} key={index}>{item}</li>
      ))}
        </ul>
        <ul className={styles.list}>
          <h3>Обязанности</h3>
          {vacancy?.responsibilities.map((item, index) => (
            <li className={styles.item} key={index}>{item}</li>
      ))}
        </ul>
        <ul className={styles.list}>
          <h3>Мы предлагаем</h3>
          {vacancy?.weOffer.map((item, index) => (
            <li className={styles.item} key={index}>{item}</li>
      ))}
        </ul>
        <h3 className={styles.title}>Контакты</h3>
        <div className={styles.contack}>Email: <p className={styles.name}>{vacancy?.contacts.email}</p>  Phone:<p className={styles.name}>{vacancy?.contacts.phone}</p></div>
        <Link className={styles.button} to='/career/vacancy-form'>Откликнуться</Link>
      </div>
    </div>
  );
};

export { VacanciesPage };
