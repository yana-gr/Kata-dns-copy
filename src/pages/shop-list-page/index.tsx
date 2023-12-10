import React, { useState } from 'react';
import classes from './shop-list-page.module.scss';
import SearchCity from 'features/search-city';
import FilterShops from 'features/filter-shops';
import ShopList from 'widgets/shop-list';
import Map from 'shared/map';
import { useAppSelector } from 'shared/store/hooks';

const ShopListPage: React.FC = () => {
  const focusShop = useAppSelector((state) => state.shopsReducer.focusShop);

  const [activeTab, setActiveTab] = useState('shops');

  const handleTabs = (activeTab: string) => {
    setActiveTab(activeTab);
  };

  return (
    <>
      <div className={classes.header}></div>
      <div className={classes.container}>
        <SearchCity />
        <h1 className={classes.shop_list_page__title}>Магазины в г. Санкт-Петербург</h1>
        <div className={classes.shop_list_page__container}>
          <div className={classes.shop_list_page__filters}>
            <FilterShops onChangeTabs={handleTabs} />
          </div>

          <div className={classes.shop_list_page__main}>
            <div
              className={`${
                activeTab === 'map' ? classes.shop_list_page__main__list_hidden : classes.shop_list_page__main__list
              }`}
            >
              <ShopList />
            </div>
            <div
              className={`${
                activeTab === 'shops' ? classes.shop_list_page__main__map_hidden : classes.shop_list_page__main__map
              }`}
            >
              <Map shop={focusShop} />
            </div>
            <div className={classes.shop_list_page__main__list_large}>
              <ShopList />
            </div>
            <div className={classes.shop_list_page__main__map_large}>
              <Map shop={focusShop} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopListPage;
