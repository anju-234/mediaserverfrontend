import React from 'react';
import { Col, Row, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl = useNavigate();

  return (
    <>
      <Container fluid>
        {/* Header Section */}
        <Row className="mt-5 align-items-center justify-content-center text-center">
          <Col xs={12} lg={6}>
            <h1 style={{ fontSize: '40px' }}>
              Welcome to <span className="text-warning">Media-Player</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit earum perferendis deleniti incidunt qui totam quod nostrum quas, numquam itaque? Repudiandae fugiat pariatur itaque distinctio non esse nisi facilis similique!
            </p>
            <button
              className="btn btn-info mt-4"
              onClick={() => navigateByUrl('/home')}
            >
              Get Started
            </button>
          </Col>
          <Col xs={12} lg={6} className="text-center mt-4 mt-lg-0">
            <img
              className="img-fluid"
              width="350px"
              src="https://img.freepik.com/premium-vector/design-media-player-website-app_626351-103.jpg?w=2000"
              alt="Media Player"
            />
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="mt-5 text-center">
          <Col xs={12}>
            <h3>Features</h3>
          </Col>
        </Row>
        <Row className="mt-4 justify-content-center">
          {[
            {
              title: 'Managing Videos',
              text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
              img: 'https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif',
            },
            {
              title: 'Categorized Video',
              text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
              img: 'https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif',
            },
            {
              title: 'Watch History',
              text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
              img: 'https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif',
            },
          ].map((feature, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
              <Card style={{ width: '22rem' }} className="p-4 bg-info">
                <Card.Img
                  variant="top"
                  height="300px"
                  src={feature.img}
                />
                <Card.Body>
                  <Card.Title className="text-primary">{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Video and Description Section */}
        <Row className="container border rounded p-4 border-dark mb-5 mx-auto">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <h4 className="text-warning">Simple, Powerful & Fast</h4>
            <h6 className="mb-5 mt-3">
              <span className="text-warning fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipiscing elit. Assumenda voluptas dicta, repudiandae fugiat beatae eum doloribus natus.
            </h6>
            <h6 className="mb-5 mt-3">
              <span className="text-warning fw-bolder">Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h6>
            <h6 className="mb-5 mt-3">
              <span className="text-warning fw-bolder">Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h6>
          </Col>
          <Col xs={12} lg={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ccpVpcP8m44"
              title="Best of Sushin Shyam 2023 | Audio Jukebox | Hits of Sushin Shyam | OST"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Landingpage;
