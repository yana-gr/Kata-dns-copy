import { useState, useEffect } from 'react';
import classes from './filter-shops.module.scss';
import { useAppSelector, useAppDispatch } from '../../shared/store/hooks';
import { changeFilterState } from '../../shared/store/filterShopSlice';
import { setSearchedShops, deleteFocusShop } from '../../shared/store/shopSlice';
import { useGetShopsFromSearchQuery } from '../../shared/services/shoplist.service';

const checkBox = [
  {
    name: 'Открыт сейчас',
    id: 'opened',
  },
  {
    name: 'Рядом',
    id: 'near',
  },
  {
    name: 'Магазины',
    id: 'shops',
  },
  {
    name: 'Пункты выдачи',
    id: 'posts',
  },
];

interface onChangeTabsType {
  (tab: string): void;
}

function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function FilterShops(props: { onChangeTabs: onChangeTabsType }) {
  const [inputLength, setInputLength] = useState(1);
  const [placeholderSmall, setplaceholderSmall] = useState('');

  const showPlaceholder = () => {
    setInputLength(36);
    setplaceholderSmall('Название магазина, адрес или метро');
  };

  const filterShops = useAppSelector((state) => state.shopFilter);
  const dispatch = useAppDispatch();

  const changeCheckbox = (value: boolean, type: string) => {
    if (value === true && type === 'near') {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(`Your location is: ${position.coords.latitude}, ${position.coords.longitude}`);
        });
      }
    }
    if (value === false && type === 'shops' && filterShops.posts === false) {
      dispatch(changeFilterState({ value: true, type: 'shops' }));
      dispatch(deleteFocusShop());
    } else {
      dispatch(changeFilterState({ value, type }));
      dispatch(deleteFocusShop());
    }
  };

  const [activeButton, setActiveButton] = useState('shops');

  const handleShopsTab = () => {
    props.onChangeTabs('shops');
    setActiveButton('shops');
  };

  const handleMapTab = () => {
    props.onChangeTabs('map');
    setActiveButton('map');
  };

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data, isError, isLoading } = useGetShopsFromSearchQuery(debouncedSearchTerm);

  useEffect(() => {
    dispatch(setSearchedShops({ data, isError, isLoading }));
    dispatch(deleteFocusShop());
  }, [data]);

  return (
    <div className={classes.container}>
      <div className={classes.mobile_tabs}>
        <ul>
          <li
            className={`${classes.mobile_tabs__item} ${activeButton === 'map' ? classes.active : ''}`}
            onClick={handleMapTab}
          >
            Карта
          </li>
          <li
            className={`${classes.mobile_tabs__item} ${activeButton === 'shops' ? classes.active : ''}`}
            onClick={handleShopsTab}
          >
            Список
          </li>
        </ul>
      </div>
      <div className={classes.filter}>
        <input
          className={classes.filter__input_large}
          type='text'
          id='filter'
          placeholder='Название магазина, адрес или метро'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          className={classes.filter__input_small}
          type='text'
          id='filter'
          onFocus={showPlaceholder}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholderSmall}
          size={inputLength}
        />
        {checkBox.map((filter) => (
          <div key={filter.id} className={classes.filter__item}>
            <input
              className={classes.filter__checkbox}
              type='checkbox'
              id={`${filter.id}`}
              checked={filterShops[filter.id as keyof typeof filterShops]}
              onChange={() => changeCheckbox(!filterShops[filter.id as keyof typeof filterShops], filter.id)}
            />
            <label className={classes.filter__label} htmlFor={`${filter.id}`}>
              {filter.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterShops;
