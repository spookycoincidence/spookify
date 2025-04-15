import { Link } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  cover: string;
}

function AlbumCard({ id, title, cover }: Props) {
  return (
    <Link to={`/album/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        marginBottom: '1rem',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        backgroundColor: '#1B263B',
        color: 'white'
      }}>
        <img src={cover} alt={title} style={{ width: '100%' }} />
        <div style={{ padding: '0.75rem' }}>
          <h2 style={{ fontSize: '1.2rem', margin: 0 }}>{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default AlbumCard;
