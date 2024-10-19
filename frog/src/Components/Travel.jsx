import React from 'react';
import { Clover, ShoppingCart, Package, MapPin, Leaf } from 'lucide-react'; 
import styles from './Travel.module.css';

const TravelToEarn = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Travel To Earn</h2>

      <div className={styles.section}>
        <Clover className={styles.icon} />
        <div className={styles.textContent}>
          <h3>Harvest Clovers</h3>
          <p>
            Gather clovers from the pond outside your door to collect resources
            for your frog's upcoming adventure.
          </p>
        </div>
      </div>

      
      <div className={styles.section}>
        <ShoppingCart className={styles.icon} />
        <div className={styles.textContent}>
          <h3>Visit the Shop</h3>
          <p>
            Head to the shop to purchase essential items like food, water, and
            props for your frog’s travel backpack.
          </p>
        </div>
      </div>

      
      <div className={styles.section}>
        <Leaf className={styles.icon} /> 
        <div className={styles.textContent}>
          <h3>Embark on an Adventure</h3>
          <p>
            Sit back and relax as your frog embarks on an exciting journey,
            eagerly awaiting the treasure it will bring back.
          </p>
        </div>
      </div>

      
      <div className={styles.section}>
        <Package className={styles.icon} />
        <div className={styles.textContent}>
          <h3>Unlock Treasure Chests</h3>
          <p>
            Unlock treasure chests to discover valuable rewards such as $FORG,
            rare items, and powerful equipment.
          </p>
        </div>
      </div>

      
      <div className={styles.section}>
        <MapPin className={styles.icon} /> 
        <div className={styles.textContent}>
          <h3>Trade on the Market</h3>
          <p>
            Trade your valuable rewards in the marketplace to turn a profit and
            acquire rare items for future adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelToEarn;
