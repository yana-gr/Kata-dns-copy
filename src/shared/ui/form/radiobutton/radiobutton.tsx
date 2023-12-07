import styles from './radiobutton.module.css';
const RadioButton = ({ name, title, onChange, value }: {name: string, title: string, onChange: (value: string) => void, value: string}) => {
  return (
    <label className={styles.label}>
      <input type='radio' className={styles.input} name={name} onChange={() => onChange(name)} checked={value === name} />
      {title}
      <span className={styles.span}></span>
    </label>
  );
};

export { RadioButton };
