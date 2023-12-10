import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div>
      <h1>DNS Shops</h1>
      <Link to='career'>fdsf</Link>
      <br />
      <Link to='shop-list'>Страница списка магазинов</Link>
    </div>
  );
};

export default Main;
