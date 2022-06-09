import React from 'react';

import '../App.scss';

import pageImage from '../pageImage.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Home() {

  return (
    <React.Fragment>
      <Container className='grid'>
        <Row>
          <Col sm={4}>
            <h1>Qual Pokémon
              <br />
              você
              <strong> escolheria?</strong>
            </h1>
            <p>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
            <style type='text/css'>
              {`
                .btn-flat {
                  background-color: #48D0B0;
                  color: white;
                  border-radius: 10px;
                }
                .btn-xx1 {
                  padding: 1rem 1.5rem;
                  font-size: 1.4rem;
                  font-weight: 600;
                }
              `}
            </style>
            <Link to="/statuspage">
              <Button variant='flat' size="xx1">Veja os pokémons</Button>{' '}
            </Link>

          </Col>
          <Col sm={8}><img
            src={pageImage}
            alt="Pikachu with pokeballs"
          />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
