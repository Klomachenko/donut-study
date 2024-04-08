import React, { useState, useEffect } from 'react';
import DefaultButton from '../components/atom/DefaultButton';
import ItemList from '../components/organism/ItemList';
import styles from '../css/ShopPage.module.css';

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const itemData = async () => {
      try {
        const response = await fetch('/api/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('상품을 받아오지 못했습니다');
      }
    };

    itemData();
  }, []);

  const handleOnSale = () => {
    const onSaleProducts = products.filter(
      (product) => product.isSale === 'true'
    );
    setProducts(onSaleProducts);
  };

  const handlePrice = () => {
    const priceLowHigh = [...products].sort(
      (a, b) => parseInt(a.price) - parseInt(b.price)
    );
    setProducts(priceLowHigh);
  };

  const handleAllItem = async () => {
    try {
      const response = await fetch('/api/products.json');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('상품을 받아오지 못했습니다');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonBox}>
        <DefaultButton buttonText='All' onClick={() => handleAllItem()} />
        <DefaultButton buttonText='on Sale' onClick={() => handleOnSale()} />
        <DefaultButton
          buttonText='price low-high'
          onClick={() => handlePrice()}
        />
      </div>
      <div className={styles.itemBox}>
        <ItemList products={products} />
      </div>
    </div>
  );
}

export default ShopPage;
