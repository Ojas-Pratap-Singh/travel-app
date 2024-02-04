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

  //   if (loading) {
  //     return <p>Loading...</p>; // we can replace this with a loading spinner component
  //   }

  //   if (error) {
  //     return <p>Error: {error}</p>;
  //   }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(travelRequest());
  }, []);

  const sliceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + " ...";
    }
    return text;
  };

  return (
    <div className="card-container">
      {data.length > 0 &&
        data.map((post) => (
          <Link
            to={`/item/${post.id}`}
            key={post.id}
            className="card"
            onClick={scrollToTop}
          >
            <div className="image">
              <img src={`https://picsum.photos/200?random=${post.id}`} />
            </div>
            <div className="content">
              <div className="descrip">
                <div className="title">
                  {/* <h3>{post.title}</h3> */}
                  <h3>{sliceText(post.title, 30)}</h3>
                </div>
                <div className="des">
                  {/* <p>{post.body}</p> */}
                  <p className="slicebody">{sliceText(post.body, 120)}</p>
                  {post.body.length > 150 && (
                    <Link to={`/item/${post.id}`} className="read-more">
                      Read More
                    </Link>
                  )}
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
