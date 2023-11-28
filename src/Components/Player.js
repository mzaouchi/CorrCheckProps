import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
const Player=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.URL} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.team}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}

Player.defaultProps={
    el : {
        name : "Rahma",
        team : "SidiBouaid",
        nationality : "Tunisienne",
        jerseyNumber :  10,
        age : 20,
        URL : "https://gomycodelearndev.blob.core.windows.net/profiles/f07343f6-bcfe-4a1b-ba2e-9b7656c9c7a2-133407254738190086.jpg"
    }
}

Player.propTypes = {

    el: PropTypes.object
}
export default Player