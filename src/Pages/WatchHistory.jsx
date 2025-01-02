import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteHistoryAPI, getHistoryAPI } from "../../service/allAPI";
import './watchhistory.css'

function WatchHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const result = await getHistoryAPI();
    console.log(result);
    if (result.status === 200) {
      setHistory(result.data);
    } else {
      console.log("API failed");
      console.log(result.message);
    }
  };

  const removeHistory = async (id) => {
    await deleteHistoryAPI(id);
    getHistory(); // to get the remaining history
  };

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center flex-wrap">
        <h2 className="text-center mb-3">Watch History</h2>
        <Link
          style={{
            textDecoration: "none",
            color: "blueviolet",
            fontSize: "20px",
          }}
          to={"/home"}
        >
          Back To Home <i className="fa-solid fa-arrows-rotate"></i>
        </Link>
      </div>
      <div className="container shadow mb-5 p-3" style={{ overflowX: "auto" }}>
        <table className="table table-striped table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>TimeStamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history?.length > 0 ? (
              history.map((video, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{video.caption}</td>
                  <td>
                    <a href={video.link} target="_blank" rel="noopener noreferrer">
                      {video.link}
                    </a>
                  </td>
                  <td>{video.timeStamp}</td>
                  <td>
                    <button
                      onClick={() => removeHistory(video?.id)}
                      className="btn"
                    >
                      <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-danger">
                  Nothing to Display
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchHistory;
