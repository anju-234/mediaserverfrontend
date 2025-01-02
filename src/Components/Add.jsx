import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { uploadVideoAPI } from "../../service/allAPI";

function Add({ setUploadVideoResponse }) {
  const [uploadVideo, setUploadVideo] = useState({
    id: "",
    caption: "",
    url: "",
    link: "",
  });
  // https://www.youtube.com/watch?v=sOnqjkJTMaA
  //https://www.youtube.com/embed/sOnqjkJTMaA
  //https://www.youtube.com/watch?v=HHTYK_Bm94c
  //https://www.youtube.com/embed/HHTYK_Bm94c

  const getYoutubeLink = (e) => {
    const { value } = e.target; //destructuring
    if (value.includes("v=")) {
      let vID = value.split("v=")[1].slice(0, 11);
      //console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({
        ...uploadVideo,
        link: `https://www.youtube.com/embed/${vID}`,
      });
    } else {
      setUploadVideo({ ...uploadVideo, link: "" });
    }
  };
  const handleAdd = async () => {
    const { id, caption, url, link } = uploadVideo; //destructuring
    if (!id || !caption || !url || !link) {
      alert("Please Fill missing fields");
    } else {
      //store video details to the json server
      const result = await uploadVideoAPI(uploadVideo);
    console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        //success
        handleClose(); //close the modal
        //alert
        alert("Uploaded successfully");
        //after getting response field should be empty
        setUploadVideo({
          id: "",
          caption: "",
          url: "",
          link: "",
        });
        setUploadVideoResponse(result.data);
      } else {
        console.log(result.message);
      }
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload Videos</h5>
        <Button className="ms-2" onClick={handleShow}>
          <i class="fa-solid fa-arrow-up-from-bracket fa-beat"></i>
        </Button>
      </div>
      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Id"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Video Id"
              onChange={(e) =>
                setUploadVideo({ ...uploadVideo, id: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTitle"
            label="Video Title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Video Title"
              onChange={(e) =>
                setUploadVideo({ ...uploadVideo, caption: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingImage"
            label="Image Url"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Image Url"
              onChange={(e) =>
                setUploadVideo({ ...uploadVideo, url: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingVideo" label="Video Url">
            <Form.Control
              type="text"
              placeholder="Video Url"
              onChange={getYoutubeLink}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
