import styles from './selectSearch.module.css';
import React from 'react';
import Select from 'react-select';
import { useGetVacansiesQuery } from 'shared/api/vacansiesSlice';

export type ValueType<OptionType> = OptionType | null | undefined;

type OptionType = {
  value: string;
  label: string;
}
interface Vacancy {
  id: number;
  name: string;
  city: string;
}

interface PropsSearch {
  onCitySelect: (selectedCity: string) => void;
}

const SelectSearch: React.FC<PropsSearch> = ({ onCitySelect }) => {

  const { data: vacansies = [] } = useGetVacansiesQuery({
    onCitySelect
  });

  const options: OptionType[] = vacansies.map((item: Vacancy) => ({
    value: item.city,
    label: item.city,
  }));

  const handleSelectCity = (selectedOption: ValueType<OptionType>) => {
    onCitySelect(selectedOption ? selectedOption.value : '');
  };
  
  return (
    <div className={styles.wrapper}>
      <div>
        Вакансии по городу:
      </div>
      <Select
        className={styles.select}
        options={options}
        onChange={handleSelectCity}
        isSearchable={true}
        placeholder='Поиск по городу...'
        components={{
    DropdownIndicator: () => null,
    IndicatorSeparator: () => null,
  }}
        styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: 'none',
      boxShadow: state.isFocused ? 'none' : 'none',
      color: '#0d61af',
      cursor: 'pointer',
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      cursor: 'pointer',
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: '#0d61af',
    }),
  }}
/>
    </div>
  );
}

export default SelectSearch;
