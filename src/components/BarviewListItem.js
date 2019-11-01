import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const venues = [
  "https://images.unsplash.com/photo-1508695666381-69deeaa78ccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1564504906009-c5148f067695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1543521727-8dacad8ba78a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
  "https://images.unsplash.com/photo-1563292111-3a9aae753ff0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
];

// axios for bar images

export default function BarviewListItem() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (index === 3) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <Gallery
      style={{
        background: "black",
        height: "100vh",
        width: "100vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {venues.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}
