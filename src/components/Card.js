import React, { useEffect } from "react";
import "../App.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import {
  travelApiStarted,
  travelDataSuccess,
  travelDataFailure,
  travelRequest,
} from "../redux/actions/travelActions";
import { Link } from "react-router-dom";

const Card = () => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("card", loading, data, error);

  useEffect(() => {
    dispatch(travelRequest());
  }, []);

  return (
    <div className="card-container">
      {data.length > 0 &&
        data.map((post) => (
           
          <Link to={`/item/${post.id}`} key={post.id} className="card">
            <div className="image">
                <img src={`https://picsum.photos/200?random=${post.id}`}/> 
            </div>
            <div className="content">
              <div className="descrip">
                <div className="title">
                    <h3>{post.title}</h3>
                </div>
                <div className="des">
                    <p>{post.body}</p>
                </div>
              </div>
              <div className="arrow">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Card;
