import { useState } from 'react';
import Tooltip from 'shared/tooltip';
import { ShopType } from 'shared/types';
import { useAppDispatch } from 'shared/store/hooks';
import { setFocusShop } from 'shared/store/shopSlice';

import classes from './shop.module.scss';

type ShopProps = {
  shop: ShopType;
};

export default function Shop({ shop }: ShopProps) {
  const dispatch = useAppDispatch();

  const setShop = () => {
    dispatch(setFocusShop(shop));
  };

  const [isHoovered, setIsHoovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHoovered(true);
  };

  const handleMouseLeave = () => {
    setIsHoovered(false);
  };

  return (
    <div key={shop.id} className={classes.shop_list__shop} onClick={setShop}>
      <div className={classes.shop_list__shop__name_container}>
        <span className={classes.shop_list__shop__name}>{shop.name}</span>
        <button
          type='button'
          className={classes.shop_list__shop__info}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Tooltip isHovered={isHoovered} content={shop.description} />
          {/* <img src='/shared/assets/img/info_shop.svg' alt='info' /> */}
        </button>
      </div>
      <div>
        <span className={classes.shop_list__shop__icon}></span>
        <span className={classes.shop_list__shop__metro}>Станция метро</span>
      </div>
      <span className={classes.shop_list__shop__adress}>{shop.streetAddress}</span>
      <span className={classes.shop_list__shop__time}>
        Ежедневно с 10:00 до 22:00
        {shop.inOpen ? ' (открыто)' : ' (закрыто)'}
      </span>
    </div>
  );
}
