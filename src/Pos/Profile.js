import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfilePic from '../assets/pp.png';

function Profile(props) {
  return (
    <Card style={{ marginTop: 20 }}>
      <Card.Img variant="top" style={{ margin: '0 auto', width: 75, marginTop: 10 }} src={ProfilePic} />
      <Card.Body>
        <Card.Title align="center">Rhesa Havilah</Card.Title>
        <Card.Text align="center">Cashier</Card.Text>
        <div align="center">
          <Button variant="info">Open Profile</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Profile;
