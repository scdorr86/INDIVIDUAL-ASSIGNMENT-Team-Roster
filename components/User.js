import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function User() {
  const { user } = useAuth();
  console.warn('this is', user);
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Img variant="top" src={user.photoURL} style={{ height: '400px' }} />
          <Card.Title style={{ color: 'red' }}>{user.displayName}</Card.Title>
          <Card.Title style={{ color: 'red' }}>{user.name}</Card.Title>
          <Card.Subtitle style={{ color: 'red' }}>{user.email}</Card.Subtitle>
          <Card.Text style={{ color: 'red' }}>{user.metadata.lastSignInTime}</Card.Text>
        </Card.Body>
      </Card>

      <Button align-items="end" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </>
  );
}
