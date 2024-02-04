import React, { useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  travelApiStarted,
  travelDataSuccess,
  travelDataFailure,
  travelRequest,
} from "../redux/actions/travelActions";
import "../App.css";
import store from "../redux/store";
// import Card from "./Card";
const TravelApp = () => {
  const { loading, data, error } = useSelector((state) => state);
  //   console.log(loading, data, error);

  const dispatch = useDispatch();

  // useEffect(()=>{
  //     dispatch(travelApiStarted());
  //     axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => dispatch(travelDataSuccess(response.data)))
  //     .catch(err => dispatch(travelDataFailure(err.message)))
  // },[])

  useEffect(() => {
    dispatch(travelRequest());
  }, [dispatch]);

  return (
    <div className="section2">
      <div className="searching">
        <h1>Social Media For Traveller</h1>
        <div className="searchinput">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input placeholder="search here..." />
        </div>
        <div>
          {loading && <p className="errr">Loading...</p>}
          {error && <p className="errr">Error: {error}</p>}
          {/* {data.length > 0 && (
                  <div className="card-container">
                    {data.map((post) => (
                      <Card key={post.id} post={post} />
                    ))}
                  </div>
                )} */}
        </div>
      </div>
    </div>
  );
};

export default TravelApp;
