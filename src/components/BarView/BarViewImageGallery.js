import React, { useState, useEffect } from "react";

import { Gallery, GalleryImage } from "react-gesture-gallery";

let defaultImages = [
  "https://images.unsplash.com/photo-1508695666381-69deeaa78ccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1541500792866-07f25e0c8578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1552132870-b5d2f704e247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1563292111-3a9aae753ff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
];

// axios for bar images

export default function BarviewListItem(props) {
 
  let images = props.currentReviews.map(review => {
    return review.img;
  });
  if (images.length === 0) {
    images = defaultImages;
  }

  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 3) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 10000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <Gallery
      style={{
        background: "#040e0f",

        width: "100vw",
        position: "fixed",
        top: "40px"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage
          objectFit="contain"
          key={image}
          style={{ height: "300px" }}
          src={image}
        />
      ))}
    </Gallery>
  );
}
