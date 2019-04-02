import React from "react";

const ImageList = props => {
  console.log(props.images);
  const images = props.images.map(image => {
    return (
      <div key={image.id}>
        <img src={image.urls.regular} alt="Search_Image" />
      </div>
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
