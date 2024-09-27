import React, { useState } from 'react';
import Add from '../Components/Add';
import View from '../Components/View'; // Changed the second import from Add to View
import Category from '../Components/Category'; // Changed the third import from Add to Category
import { Link } from 'react-router-dom';

function Home() {
  const[uploadVideoResponse,setUploadVideoResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState({})

  

  return (
    <>
      {/* Container for adding videos and link to Watch History */}
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse} />
        </div>

        {/* Corrected inline style syntax */}
        <Link 
          to={'/watch-history'} 
          style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '30px' }}
        >
          Watch-History <i className="fa-solid fa-arrow-right-to-bracket fa-beat-fade"></i>
        </Link>
      </div>

      {/* Section for all videos and categories */}
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h1>All Videos</h1>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} />
        </div>

        <div className="all-videos col-lg-3">
          <Category dropVideoresponse={dropVideoResponse} />
        </div>
      </div>
    </>
  );
}

export default Home;

