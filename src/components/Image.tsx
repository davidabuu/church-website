import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageDisplay: React.FC = () => {
  const [imageList, setImageList] = useState<number[]>([]);

  useEffect(() => {
    // Fetch images from the API
    axios.get<number[]>(`${process.env.BASE_URL}images/Gett`)
      .then(response => {
        setImageList(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      <h2>Images</h2>
      <div>
        {imageList.map(imageId => (
          <img key={imageId} src={`YOUR_API_ENDPOINT/api/images/${imageId}`} alt={`Image ${imageId}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
