import { Input } from 'shared/ui/form/input/Input';
import { GoBackButton } from '../../shared/ui/form/buttons/gobackbutton';
import styles from './vacanciesform.module.css';
import MenuButtons from './menuButtons';
import Select from 'react-select';
import { useGetVacansiesQuery } from 'shared/api/vacansiesSlice';
import { createStyles } from '@mui/material';
import { schemaVacancies } from '../../shared/yup/yup';
import { SubmitHandler, useForm, Controller, IOption } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RadioButton } from 'shared/ui/form/radiobutton/radiobutton';
import { CheckboxButton } from 'shared/ui/form/checkbox/checkbox';

type OptionType = {
  value: string;
  label: string;
};

interface Vacancy {
  city?: string;
  name?: string;
}
interface Form {
  name?: string;
  secondName?: string;
  phone?: string;
  email?: string;
  born?: string;
  birthday?: string;
  
}

const getValue = (value: string | undefined, options: OptionType[]) => {
  value ? options.find((option) => option.value === value) : ''
}

const VacanciesForm = () => {
  const { data: vacansies = [] } = useGetVacansiesQuery({});

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaVacancies),
  });

  const selectStyles = createStyles({
    control: (base: React.CSSProperties, state: { isFocused: boolean }) => ({
      ...base,
      height: '64px',
      borderRadius: '8px',
      boxShadow: state.isFocused ? 'none' : 'none',
      cursor: 'pointer',
    }),
    option: (base: React.CSSProperties, state: { isSelected: boolean; isFocused: boolean }) => ({
      ...base,
      backgroundColor: state.isSelected ? '#FC8507' : state.isFocused ? '#FFF7DA' : 'white',
      color: state.isSelected ? 'white' : '#333',
    }),
  });

  const optionsEducation: OptionType[] = [
    { value: 'Высшее', label: 'Высшее' },
    { value: 'Незаконченное высшее', label: 'Незаконченное высшее' },
    { value: 'Средне-специальное', label: 'Средне-специальное' },
    { value: 'Среднее', label: 'Среднее' },
  ];

  const optionsCites: OptionType[] = vacansies.map((item: Vacancy) => ({
    value: item.city || '',
    label: item.city || '',
  }));

  const optionsVacancies: OptionType[] = vacansies.map((item: Vacancy) => ({
    value: item.name || '',
    label: item.name || '',
  }));
  
  const submitFormVacancies: SubmitHandler<Form> = async (data) => {
    console.log(data, 5);
  }

  return (
    <div className={styles.wrapper}>
      <MenuButtons />
      <div className={styles.main}>
        <GoBackButton />
        <p className={styles.text}>
          В ваших интересах заполнить все поля достоверной информацией.
          Предоставленная вами информация не будет передана третьим лицам или использоваться для рассылки рекламы.
        </p>
        <form onSubmit={handleSubmit(submitFormVacancies)}>
          <h3 className={styles.title}>Основная информация</h3>
          <Input type={'text'} names={'name'} placeholder={'Имя'} register={register} />
          {errors.name && <p>{errors.name.message}</p>}
          <Input type={'text'} names={'secondName'} placeholder={'Фамилия'} register={register} />
          <Input type={'phone'} names={'phone'} placeholder={'Телефон'} register={register} />
          <Input type={'email'} names={'email'} placeholder={'Электронная почта'} register={register} />
          <Input type={'date'} names={'birthday'} placeholder={'Дата рождения'} register={register} />
          <Controller
            control={control}
            name='cites'
            render= { ({ field: { value, onChange }, fieldState: { error } }) => (
              <div>
                <Select
                  className={styles.select}
                  options={optionsCites}
                  styles={selectStyles}
                  value={getValue(value, optionsCites)}
                  onChange={ (newValue) => onChange((newValue as IOption).value)}
                  />
                {error && <div>{error.message}</div>}
              </div>
         )}
          />
          <Input type={'text'} names={'born'} placeholder={'Гражданство'} register={register} />
          <div className={styles.radiobuttons}>
            
            <Controller
              control={control}
              name='pol'
              render={({ field: { onChange, value } }) => (
                <RadioButton
                title={'Мужчина'}
                name={'man'}
                onChange={onChange}
                value={value}
                />
            )}
          />
           
            <Controller
              control={control}
              name='pol'
              render={({ field: { onChange, value } }) => (
                <RadioButton
                title={'Женщина'}
                name={'woman'}
                onChange={onChange}
                value={value}
                />
            )}
          />
             
          </div>
          <h3 className={styles.title}>Желаемая работа</h3>
          <Controller
            control={control}
            name='vacancies'
            render= { ({ field: { value, onChange }, fieldState: { error } }) => (
              <div>
                <Select
                  className={styles.select}
                  options={optionsVacancies}
                  styles={selectStyles}
                  value={getValue(value, optionsVacancies)}
                  onChange={ (newValue) => onChange((newValue as IOption).value)}
                  />
                {error && <div>{error.message}</div>}
              </div>
         )}
         />
          <div className={styles.radiobuttons}>
            
             <Controller
              control={control}
              name='work'
              render={({ field: { onChange, value } }) => (
                <RadioButton
                title={'Нет опыта'}
                name={'nowork'}
                onChange={onChange}
                value={value}
                />
            )}
          />
            
            <Controller
              control={control}
              name='work'
              render={({ field: { onChange, value } }) => (
                <RadioButton
                title={'Есть Опыт'}
                name={'havework'}
                onChange={onChange}
                value={value}
                />
            )}
          />
              
          </div>
          <h3 className={styles.title}>Образование</h3>
          <Controller
            control={control}
            name='education'
            render= { ({ field: { value, onChange }, fieldState: { error } }) => (
              <div>
                <Select
                  className={styles.select}
                  options={optionsEducation}
                  styles={selectStyles}
                  value={getValue(value, optionsEducation)}
                  onChange={ (newValue) => onChange((newValue as IOption).value)}
                  />
                {error && <div>{error.message}</div>}
              </div>
         )}
         />
          <h3 className={styles.title}>Дополнительная информация</h3>
          <Controller
        control={control}
        name='passport'
        defaultValue={false}
        render={({ field: { onChange, value } }) => (
          <CheckboxButton
            title={'Паспорт РФ'}
            name={'passport'}
            onChange={onChange}
            value={value}
          />
        )}
      />

<Controller
            control={control}
            name='militaryID'
            defaultValue={false}
            render={({ field: { onChange } }) => (
              <CheckboxButton
              title={'Военный билет'}
              name={'militaryID'}
              onChage={onChange}
              />
        )}
      />

<Controller
            control={control}
            name='deferredEnlistmentCertificate'
            defaultValue={false}
            render={({ field: { onChange } }) => (
              <CheckboxButton
              title={'Приписное св-во с отсрочкой'}
              name={'deferredEnlistmentCertificate'}
              onChage={onChange}
              />
        )}
      />
          <p className={styles.file}>
            Кроме заполнения резюме на нашем сайте вы можете загрузить свое резюме в форматах: doc, docx, txt, pdf.
            Объем файла не более 20 Мб.
          </p>
          <input type='submit' className={styles.submit} />
        </form>
        <div className={styles.information}>
          Нажимая на кнопку «Отправить», я даю согласие и разрешение ООО «ДНС Ритейл» обрабатывать мои персональные
          данные (согласно ФЗ от 27.07.2006 №152-ФЗ «О персональных данных»); Перечень действий с персональными
          данными, на совершение которых дается согласие, общее описание используемых оператором способов обработки
          персональных данных: Обработка вышеуказанных персональных данных будет осуществляться путем смешанной
          (автоматизированной, не автоматизированной) обработки персональных данных.
        </div>
      </div>
    </div>
  );
};

export { VacanciesForm };
