import { useEffect, useState } from 'react';
import AlbumCard from '../components/AlbumCard';

interface Album {
  id: string;
  title: string;
  cover: string;
}

function Home() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch('/assets/albums.json')
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <main>
      <h1>Spookify 💙</h1>
      <section>
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            id={album.id}
            title={album.title}
            cover={album.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
