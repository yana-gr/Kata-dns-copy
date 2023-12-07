import { useNavigate } from 'react-router-dom';
import styles from './gobackbutton.module.css';
const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

return(
  <button className={styles.button} onClick={goBack}>
    <img className={styles.img} src='/src/shared/imgVacansies/arrowleft.png' alt='' /> Назад
  </button>
);
}

export { GoBackButton };