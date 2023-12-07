import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './searchvacansies.module.css';
import SelectSearch from './selectSearch';
import { useGetVacanciesLikeQuery } from 'shared/api/vacansiesSlice';
import { useDebounce } from 'shared/customhooks/useDebounce';

interface Vacancy {
  id: number;
  name: string;
  city: string;
  salaryMin: number;
  salaryMax: number;
}

const SearchVacancies = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [vacanciesName, setVacanciesName] = useState<string>('');
  const debouncedSearchTerm = useDebounce(vacanciesName, 500);

  const { data: vacancies = [] } = useGetVacanciesLikeQuery({
    city: selectedCity,
    name: debouncedSearchTerm,
  });

  const elements = vacancies.map((item: Vacancy) => {
    const { id, name, city, salaryMin, salaryMax } = item;

    return (
      <li className={styles.item} key={id}>
        <Link className={styles.link} to={`/career/job/${id}`}>
          <div className={styles.text}>
            <div className={styles.name}>{name}</div>
            <div className={styles.city}>г. {city}</div>
          </div>
          <div className={styles.salary}>{salaryMin}-{salaryMax} ₽</div>
        </Link>
      </li>
    );
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVacanciesName(event.target.value);
  };

  return (
    <>
      <SelectSearch onCitySelect={setSelectedCity} />
      <div className={styles.wrapper}>
        <span className={styles.lupa}><img className={styles.img} src='/src/shared/imgVacansies/lupa.png' alt='' /></span>
        <input
          className={styles.input}
          type='text'
          value={vacanciesName}
          onChange={handleSearchChange}
          placeholder='Поиск по вакансиям'
        />
      </div>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default SearchVacancies;
