import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl = useNavigate();
  
  return (
    <>
      
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ fontSize: '40px' }}>
            Welcome to <span className='text-warning'>Media-Player</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit earum perferendis deleniti incidunt qui totam quod nostrum quas, numquam itaque? Repudiandae fugiat pariatur itaque distinctio non esse nisi facilis similique! Ducimus in commodi ab repudiandae mollitia, officia accusamus alias error hic neque similique facere quo ipsa? Esse, alias, reiciendis quae earum soluta illum odit rerum, nesciunt fuga iusto et aliquam!
            Quibusdam corrupti odit amet doloremque totam labore illum rerum alias fugiat sed nisi molestias, maxime perspiciatis dolorem perferendis? Eaque beatae tempora asperiores provident exercitationem cum placeat itaque non officiis maxime!
          </p>
          <button className='btn btn-info mt-4' onClick={() => navigateByUrl('/home')}>Get Started</button>
        </Col>
        <Col lg={5}>
          <img width='350px'  src="https://img.freepik.com/premium-vector/design-media-player-website-app_626351-103.jpg?w=2000" alt="Media Player" />
        </Col>
        <Col></Col>
      </Row>

      {/* Features section */}
      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>

        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
          {/* Card 1 */}
          <Card style={{ width: '22rem' }} className='p-4 bg-info'>
            <Card.Img
              variant="top"
              height="300px"
              width="300px"
              src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"
            />
            <Card.Body>
              <Card.Title className='text-primary'>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Card 2 */}
          <Card style={{ width: '22rem' }} className='p-4 bg-info'>
            <Card.Img
              variant="top"
              height="300px"
              width="300px"
              src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"
            />
            <Card.Body>
              <Card.Title className='text-primary'>Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Card 3 */}
          <Card style={{ width: '22rem' }} className='p-4 bg-info'>
            <Card.Img
              variant="top"
              height="300px"
              width="300px"
              src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"
            />
            <Card.Body>
              <Card.Title className='text-primary'>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Section with text and video */}
      <div className="container border rounded p-5 border-dark mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className='text-warning'>Simple, Powerful & Fast</h4>
          <h6 className='mb-5 mt-3'>
            <span className="text-warning fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipiscing elit. Assumenda voluptas dicta, repudiandae fugiat beatae eum doloribus natus, praesentium quos similique enim nostrum possimus. Nulla provident voluptatum tempore delectus suscipit? Neque?
          </h6>
          <h6 className='mb-5 mt-3'>
            <span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas dicta, repudiandae fugiat beatae eum doloribus natus, praesentium quos similique enim nostrum possimus. Nulla provident voluptatum tempore delectus suscipit? Neque?
          </h6>
          <h6 className='mb-5 mt-3'>
            <span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas dicta, repudiandae fugiat beatae eum doloribus natus, praesentium quos similique enim nostrum possimus. Nulla provident voluptatum tempore delectus suscipit? Neque?
          </h6>
        </div>

        <div className="video col-lg-5">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/ccpVpcP8m44"
            title="Best of Sushin Shyam 2023 | Audio Jukebox | Hits of Sushin Shyam | OST"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
     
 
  
    </>
  );
}

export default Landingpage;

