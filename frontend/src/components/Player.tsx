import React from 'react';
import styles from './Player.module.css';

interface PlayerProps {
  songTitle: string;
  albumTitle: string;
}

const Player: React.FC<PlayerProps> = ({ songTitle, albumTitle }) => {
  return (
    <div className={styles.player}>
      <div>
        <div className={styles.song}>{songTitle}</div>
        <div className={styles.album}>{albumTitle}</div>
      </div>
      <button className={styles.playButton}>▶</button>
    </div>
  );
};

export default Player;
