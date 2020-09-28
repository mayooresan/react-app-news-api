import React from "react";

const NewsItem = ({ name, description, url, imageUrl }) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={imageUrl} alt={name} className="img-thumbnail" />
      </div>
      <div className="col-md-8">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          <a href={url}>Read more...</a>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
