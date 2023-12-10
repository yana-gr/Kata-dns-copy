import React from 'react';
import classes from './search-city.module.scss';

const SearchCity: React.FC = () => {
  return (
    <>
      <div className={classes.header}></div>
      <div className={classes.container}>
        <div className={classes.search_city}>
          <span className={classes.search_city__title}>Ваш город:</span>
          <button type='button' className={classes.search_city__button}>
            <img
              src='https://img.icons8.com/fluency-systems-regular/20/737373/marker--v1.png'
              alt='city'
              className={classes.search_city__icon}
            />
            Санкт-Петербург
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchCity;
