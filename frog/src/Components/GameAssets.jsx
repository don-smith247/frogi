import React, { useState } from 'react';
import { Clover, Gem, Cookie } from 'lucide-react';
import styles from './GameAssets.module.css';

const GameAssets = () => {
  const [activeAsset, setActiveAsset] = useState(0); 

  const assets = [
    {
      icon: Clover,
      name: 'Clover',
      description: 'Clover is a basic consumable asset in the game, used to purchase game items, participate in adventures, etc. Players can get Clover for free by logging in daily, completing quests, inviting friends, and more. Shamrocks can be freely given between players, but cannot be bought or sold.',
    },
    {
      icon: Gem,
      name: 'Gem',
      description: 'Diamonds are a paid currency in the game, which can be used to purchase rare props, speed up the adventure process, etc. Players can obtain diamonds by recharging, and the game will also give away diamonds in special holiday events. Diamonds cannot be traded and can only be consumed in one direction.',
    },
    {
      icon: Cookie,
      name: 'Cookie',
      description: 'FrogCoin is the governance token of the game and is issued based on the TON blockchain. Players can obtain FrogCoin rewards by participating in the game, such as daily tasks, adventure rewards, rankings, etc. FrogCoins can be freely traded on the chain and can also be used for purchases. Holders of the rare NFT asset Frog Coin in the game can participate in game governance, such as proposal voting, parameter adjustment, etc., to truly realize the decentralized autonomy of the game.',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Game Assets of Travel Frog</h2>
      <div className={styles.content}>
        <div className={styles.iconList}>
          {assets.map((asset, index) => (
            <button
              key={index}
              className={`${styles.iconButton} ${activeAsset === index ? styles.active : ''}`}
              onClick={() => setActiveAsset(index)}
            >
              <asset.icon className={styles.icon} />
            </button>
          ))}
        </div>
        <div className={styles.descriptionBox}>
          <p>{assets[activeAsset].description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameAssets;
