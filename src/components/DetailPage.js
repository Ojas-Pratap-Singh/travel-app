import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

const DetailPage = () => {
  const { id } = useParams();

  // Fetch the specific item details based on the ID
  // You can use Redux, a separate API call, or any other method to fetch the data.

  // For simplicity, assuming your data is available in the Redux store
  // and you have a selector function to get the post details by ID.

  // const postDetails = useSelector((state) => getPostDetailsById(state, id));
  const postDetails = useSelector((state) =>
    state.data.find((post) => post.id === parseInt(id))
  );
  if (!postDetails) {
    // Handle the case when post details are not found
    return <div>Loading...</div>;
  }
  console.log(postDetails);

  return (
    <div className="detail-page">
      <h1>Post Number : {id} </h1>
      <div className="detailCard">
        <img src={`https://picsum.photos/200?random=${postDetails.id}`} />
        <div>
          <p className="about">
            {postDetails.body}
            {postDetails.body}
            {postDetails.body}
            {postDetails.body}
          </p>
        </div>
      </div>
      <h2>{postDetails.title}</h2>
      <h1>More Post</h1>
    </div>
  );
};

export default DetailPage;
