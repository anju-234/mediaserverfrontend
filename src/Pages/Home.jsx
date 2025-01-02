import React, { useState } from 'react';
import Add from '../Components/Add';
import View from '../Components/View'; 
import Category from '../Components/Category'; 
import { Link } from 'react-router-dom';

function Home() {
  const [uploadVideoResponse, setUploadVideoResponse] = useState({});
  const [dropVideoResponse, setDropVideoResponse] = useState({});

  return (
    <>
      {/* Container for adding videos and link to Watch History */}
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          {/* Add Videos Section */}
          <div className="col-md-6 d-flex justify-content-center mb-3 mb-md-0">
            <Add setUploadVideoResponse={setUploadVideoResponse} />
          </div>

          {/* Link to Watch History */}
          <div className="col-md-6 d-flex justify-content-center">
            <Link 
              to={'/watch-history'} 
              className="text-decoration-none text-primary fw-bold d-flex align-items-center"
              style={{ fontSize: '1.5rem' }}
            >
              Watch History 
              <i className="fa-solid fa-arrow-right-to-bracket fa-beat-fade ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Section for all videos and categories */}
      <div className="container-fluid mt-5 mb-5">
        <div className="row">
          {/* All Videos Section */}
          <div className="col-12 col-lg-9 mb-4 mb-lg-0">
            <h1 className="text-center text-lg-start">All Videos</h1>
            <View 
              uploadVideoResponse={uploadVideoResponse} 
              setDropVideoResponse={setDropVideoResponse} 
            />
          </div>

          {/* Categories Section */}
          <div className="col-12 col-lg-3">
            <h1 className="text-center text-lg-start">Categories</h1>
            <Category dropVideoResponse={dropVideoResponse} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
