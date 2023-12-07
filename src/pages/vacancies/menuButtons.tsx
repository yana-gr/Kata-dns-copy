import { NavLink } from 'react-router-dom';
import styles from './menuButtons.module.css';

const MenuButtons = () => {

  return(
    <div className={styles.menuLinks}>
      <NavLink to='/about' className={({ isActive }) => (isActive ? styles.activelink : styles.link)}><img className={styles.linkImg} src='/src/shared/imgVacansies/info.svg' alt='' />О компании</NavLink>
      <NavLink to='/career' className={({ isActive }) => (isActive ? styles.activelink : styles.link)}><img className={styles.linkImg} src='/src/shared/imgVacansies/chart-growth-positive.svg' alt='' />Карьера</NavLink>
      <NavLink to='/about/partners' className={({ isActive }) => (isActive ? styles.activelink : styles.link)}><img className={styles.linkImg} src='/src/shared/imgVacansies/briefcase.svg'alt='' />Сотрудничество</NavLink>
      <div className={styles.wrapDivider}></div>
      <NavLink to='/' className={({ isActive }) => (isActive ? styles.activelink : styles.link)} >Обратная связь <img className={styles.linkImg} src='/src/shared/imgVacansies/arrow-up-right.svg' alt='' /></NavLink>
    </div>
  );
}

export default MenuButtons;