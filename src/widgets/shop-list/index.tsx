import React, { useEffect } from 'react';
import Shop from '../../entities/shop';
import classes from './shop-list.module.scss';
import { ShopType } from 'shared/types';
import Spinner from 'shared/spinner';
import { shopFilterType } from 'shared/types';
import { useAppSelector, useAppDispatch } from 'shared/store/hooks';
import { setFilteredShops } from 'shared/store/shopSlice';

const filterShops = (filterState: shopFilterType, shops: Array<ShopType>) => {
  if (!filterState.opened) {
    return shops.filter((shop) => {
      if (filterState.shops === shop.shop || filterState.posts === !shop.shop) return true;
    });
  } else {
    return shops.filter((shop) => {
      if (filterState.opened === shop.inOpen && (filterState.shops === shop.shop || filterState.posts === !shop.shop))
        return true;
    });
  }
};

const ShopList: React.FC = () => {
  const filterState = useAppSelector((state) => state.shopFilter);

  const searchedShops = useAppSelector((state) => state.shopsReducer.searchedShops);
  const isLoading = useAppSelector((state) => state.shopsReducer.isLoading);
  const isError = useAppSelector((state) => state.shopsReducer.isError);

  const dispatch = useAppDispatch();

  const filteredShops = filterShops(filterState, searchedShops ? searchedShops : []);

  useEffect(() => {
    dispatch(setFilteredShops({ filteredShops }));
  }, [filteredShops]);

  const shopsDNS = filteredShops.filter((shop) => shop.shop == true);
  const postsDNS = filteredShops.filter((shop) => shop.shop == false);

  return (
    <>
      {isLoading && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
      {isError && <h1>Error. Try again later</h1>}
      {filteredShops.length > 0 && (
        <div className={classes.container}>
          {shopsDNS.length > 0 && (
            <>
              <h2 className={classes.shop_list__title}>DNS</h2>
              {shopsDNS.map((shop: ShopType) => (
                <Shop key={shop.id} shop={shop} />
              ))}
            </>
          )}
          {postsDNS.length > 0 && (
            <>
              <h2 className={classes.shop_list__title_posts}>Пункты выдачи</h2>
              {postsDNS.map((shop: ShopType) => (
                <Shop key={shop.id} shop={shop} />
              ))}
            </>
          )}
        </div>
      )}
      {filteredShops.length <= 0 && !isLoading && (
        <div className={classes.container_not_found}>
          <div className={classes.image_not_found}></div>
          <span className={classes.text_not_found}>Странно, но ничего нет</span>
          <span className={classes.try_not_found}>Попробуйте изменить критерии поиска</span>
        </div>
      )}
    </>
  );
};

export default ShopList;
