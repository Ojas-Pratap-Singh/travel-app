import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
console.log(postDetails)

  return (
    <div className="detail-page">
      {/* Display post details */}
      {/* Replace the following with your actual data */}
      <h2>{postDetails.title}</h2>
      <p>{postDetails.body}</p>
      <p>User ID: {id}</p>
    </div>
  );
};

export default DetailPage;
