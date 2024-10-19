import { useEffect, useRef } from 'react';
import './Roadmap.css'

const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "2024 Q1",
      subtitle: "Project approval and Technology Selection",
      description: "Determine the core gameplay and innovation points of the game, select TON as the underlying public chain platform, and adopt Telegram mini program as the main distribution channel",
      colorClass: "q1"
    },
    {
      quarter: "2024 Q2",
      subtitle: "Demo development and private testing",
      description: "Completed game Demo development, realized basic gameplay, carried out internal testing, collected feedback, iteratively optimized and built game economic model and Token system.",
      colorClass: "q2"
    },
    {
      quarter: "2024 Q3",
      subtitle: "Public testing and ecological construction",
      description: "Complete security audit, open beta test of online games on the TON main network, attract early users to try out games, establish cooperation with wallets and exchanges in the TON ecosystem, and promote Token circulation.",
      colorClass: "q3"
    },
    {
        quarter: "2024 Q4",
        subtitle: "Official release and promotion",
        description: "Based on the feedback from the public test, complete the development of the official version of the game and carry out large-scale marketing promotion, attract more players to go online in the NFT market, open game asset trading, hold the first game carnival, and issue exclusive NFT rewards",
        colorClass: "q4"
    },
    {
      quarter: "2025 Q1-Q2",
      subtitle: "Ecological expansion",
      description: "Launch PVP gameplay, introduce competitive elements to open UGC creation platform, encourage players to create mods to establish linkage with more game platforms, and launch linkage gameplay and NFT",
      colorClass: "q5"
    },
    {
        quarter: "2025+",
        subtitle: "Future plan",
        description: "Create a traveling frog meta-universe, connect virtual and reality, explore more cutting-edge technology in the application of the game become the most influential blockchain game output technology framework in the TON ecosystem, enabling more game developers",
        colorClass: "q6"
    }
  ];

  return (
    <div className="roadmap-container">
      <img src="./images/roadmap.png" alt="roadmap-img" className='roadmap-img'/>
      
      {roadmapData.map((item, index) => (
        <div 
          key={index} 
          className="quarter-block"
          style={{ '--index': index }}
        >
          <div className="quarter-info">
            <div className={`quarter-label ${item.colorClass}`}>
              {item.quarter}
            </div>
            <div className={`quarter-subtitle ${item.colorClass}`}>
              {item.subtitle}
            </div>
          </div>
          <div className={`description-box ${item.colorClass}`}>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;