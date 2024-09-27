import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getCategoryAPI, getVideoAPI, updateCategoryAPI } from '../../service/allAPI';
import VideoCard from './VideoCard';



function Category({ dropVideoResponse }) {

  const [categoryName, setCategoryName] = useState("")
  const [allCategories, setAllCategories] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideos: [] })
      //console.log(result)
      if (result.status >= 200 && result.status < 300) {
        handleClose()
        setCategoryName("")
        getCategories();
      }
      else {
        alert(result.message)
      }
    } else {
      alert("Please add a category name")
    }
  }

  const getCategories = async () => {
    const { data } = await getCategoryAPI()
    setAllCategories(data)
  }

  useEffect(() => {
    getCategories();
  }, [dropVideoResponse]);

  //console.log(allCategories)
  //delete categories
  const removeCategory = async (id) => {
    await deleteCategoryAPI(id)
    getCategories()
  }

  const dragOver = (e) => {
    console.log("videocard dragging over the category");
    e.preventDefault()
  }

  const videoDropped = async (e, categoryId) => {
    const VideoId = e.dataTransfer.getData("VideoId")
    console.log("video id:" + VideoId + "video dropped category id" + categoryId)
    const { data } = await getVideoAPI(VideoId)
    //console.log(data);
    const selectedCategory = allCategories.find(item => item.id === categoryId)
    selectedCategory.allVideos.push(data)
    //console.log(selectedCategory);
    await updateCategoryAPI(categoryId, selectedCategory)
    getCategories()
  }

  const videoDragStarted = (e, VideoId, categoryId) => {
    let datashare = { VideoId, categoryId }
    e.dataTransfer.setData("data", JSON.stringify(datashare))
  }

  return (

    <div>
      <div className='d-grid'>
        <button className='btn btn-info' onClick={handleShow}>Add Category</button>
      </div>

      {
        allCategories?.length > 0 ? allCategories.map(category => (

          <div className="mt-5 border rounded p-3 border-info " droppable="true" onDragOver={(e) => dragOver(e)} onDrop={e => videoDropped(e, category.id)}>
            <div className='d-flex justify-content-between align-items-center '>
              <h5 className='ms-3'>{category.categoryName}</h5>
              <button style={{ height: '53px' }} className='btn' onClick={() => removeCategory(category.id)}><i className="fa-solid fa-trash text-danger fs-6"></i></button>
            </div>
            <Row>
              {
                category?.allVideos?.length > 0 ? category?.allVideos.map(card => (
                  <Col sm={12} draggable onDragStart={e => videoDragStarted(e, card.id, category.id)}>
                    <VideoCard video={card} insideCategory={true} />
                  </Col>
                )) : null
              }
            </Row>
          </div>
        )) : <p className='fw-bolder text-danger'>Nothing to Display</p>
      }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingTitle" label="Category" className='mb-3'>
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </FloatingLabel>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handlleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

    </div>



  )
}

export default Category
