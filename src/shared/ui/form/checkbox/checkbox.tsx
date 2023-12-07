import styles from './checkbox.module.css';
const CheckboxButton = ({ name, title, onChange }: { name: string; title: string; onChange: (value: boolean) => void;}) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} type='checkbox' name={name} onChange={(e) => onChange(e.target.checked)} />
      <span className={styles.span}></span>
      {title}
    </label>
  );
};

export { CheckboxButton };
