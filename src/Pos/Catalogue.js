import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Catalogue(props) {
  console.log('props', props);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  useEffect(() => {
    setLoading(true);
    fetch(props.type === 'food' ? 'https://jsonplaceholder.typicode.com/todos' : 'https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },
        (error) => {
          setLoading(false);
          setData([]);
          alert('Error');
        }
      );
  }, [props?.type]);

  return (
    <div>
      <p>{loading ? 'loading...' : 'Catalogue ' + props?.type + ' ' + data.length + ' items'} </p>
      <Container>
        <Row>
          {data.map((value, key) => {
            return (
              <Col xs={4}>
                {key + 1}. {value?.title}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Catalogue;
