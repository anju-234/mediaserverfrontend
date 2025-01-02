import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { addHistoryAPI, deleteVideoAPI } from '../../service/allAPI';




function VideoCard({ video,setDeleteVideoResponse,insideCategory  }) {
  const [show, setShow] = useState(false);
  console.log("Video prop received:", video);

  // Function to close the modal
  const handleClose = () => setShow(false);

  // Function to show the modal and add video to history
  const handleShow = async () => {
    setShow(true); // Show the modal immediately

    const { caption, link } = video;//destructuring

    // Get the current timestamp
    let today = new Date();
    //console.log(today);
    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(today);

    // Create the video history object
    let videoHistory = { caption, link, timeStamp };
    try {
      // Add the video to history via API
      await addHistoryAPI(videoHistory);
      console.log('Video added to history:', videoHistory);
    } catch (error) {
      console.error('Error adding video to history:', error);
    }

    // await addHistoryAPI(videoHistory)
  };

  const removeVideo = async (id) => {
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("Drag Started...VideoId"+id);
    e.dataTransfer.setData("VideoId",id)
  }



  return (
    <>
      <div className="container d-flex">
        <Card style={{ width: '18rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
          {/* Clicking the image triggers the modal and API call */}
          <Card.Img
            variant="top"
            height="250px"
            src={video.url}
            onClick={handleShow}
            style={{ cursor: 'pointer' }} // Adds a pointer cursor to indicate clickability
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <h5>{video.caption}</h5>
              {insideCategory?null:<button onClick={() => removeVideo(video.id)} className="btn">
                <i className="fa-solid fa-trash text-danger"></i>
              </button>}
              {/* Trash icon for potential deletion (add delete functionality as needed) */}
              
            </Card.Title>
          </Card.Body>
        </Card>
      </div>

      {/* Modal to show the video */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={video.link}
             allowFullScreen
            title={video.caption} // Add title for better accessibility
          ></iframe>
         
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;

