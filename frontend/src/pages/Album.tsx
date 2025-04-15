import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import albumsData from '../data/albums.json';
import Player from '../components/Player';
import styles from './Album.module.css';

const Album: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const album = albumsData.find((a) => a.id === id);

  const [currentSong, setCurrentSong] = useState(album?.songs[0]);

  if (!album) {
    return <div className={styles.album}>Álbum no encontrado</div>;
  }

  return (
    <div className={styles.album}>
      <img src={album.cover} alt={album.title} className={styles.cover} />
      <h2>{album.title}</h2>
      <ul className={styles.songList}>
        {album.songs.map((song) => (
          <li
            key={song.id}
            className={styles.songItem}
            onClick={() => setCurrentSong(song)}
            style={{
              backgroundColor: song.id === currentSong?.id ? '#1B263B' : '',
              cursor: 'pointer',
            }}
          >
            <span>{song.title}</span>
            <span>{song.duration}</span>
          </li>
        ))}
      </ul>
      {currentSong && (
        <Player songTitle={currentSong.title} albumTitle={album.title} />
      )}
    </div>
  );
};

export default Album;

