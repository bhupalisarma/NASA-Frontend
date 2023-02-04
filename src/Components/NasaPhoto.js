import React, { useEffect, useState } from "react";
import { parsePath } from "react-router-dom";



export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=Mc5pPqnjhk88JlUcvYswQubphubVlOZHkhCCbaa1`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div>
      <img src={photoData.url} alt={photoData.title} />
      <div>
        <h1>{photoData.title}</h1>
        <h4>{photoData.date}</h4>
        <p>{photoData.explanation}</p>
      </div>
    </div>
  );
}
