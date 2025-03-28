import React, { useState } from 'react';
import pic1 from '../assets/image/pic1.jpg';
import pic2 from '../assets/image/pic2.jpg';
import pic3 from '../assets/image/pic3.jpg';
import pic4 from '../assets/image/pic4.jpg';
import pic5 from '../assets/image/pic5.jpg';
import pic6 from '../assets/image/pic6.jpg';
import pic7 from '../assets/image/pic7.jpg';
import pic8 from '../assets/image/pic8.jpg';
import pic9 from '../assets/image/pic9.jpg';
import pic10 from '../assets/image/pic10.jpg';
import pic11 from '../assets/image/pic11.jpg';
import pic12 from '../assets/image/pic12.jpg';
import pic13 from '../assets/image/pic13.jpg';
import '../assets/stylepic.css';

const WeddingPhotoGallery = () => {
  const photos = [
    { src: pic1, alt: 'Wedding Photo 1', caption: 'The happy couple' },
    { src: pic2, alt: 'Wedding Photo 2', caption: 'The wedding ceremony' },
    { src: pic3, alt: 'Wedding Photo 3', caption: 'First dance' },
    { src: pic4, alt: 'Wedding Photo 4', caption: 'Cake cutting' },
    { src: pic5, alt: 'Wedding Photo 5', caption: 'Bridal party' },
    { src: pic6, alt: 'Wedding Photo 6', caption: 'Groom and groomsmen' },
    { src: pic7, alt: 'Wedding Photo 7', caption: 'Bride and bridesmaids' },
    { src: pic8, alt: 'Wedding Photo 8', caption: 'Family photo' },
    { src: pic9, alt: 'Wedding Photo 9', caption: 'Reception details' },
    { src: pic10, alt: 'Wedding Photo 10', caption: 'Close up of rings' },
    { src: pic11, alt: 'Wedding Photo 11', caption: 'Throwing the bouquet' },
    { src: pic12, alt: 'Wedding Photo 12', caption: 'Dancing at night' },
    { src: pic13, alt: 'Wedding Photo 13', caption: 'The getaway' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="wedding-photo-gallery">
      <div className="gallery-container">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item" onClick={() => handleImageClick(photo.src)}>
            <img src={photo.src} alt={photo.alt} className="gallery-image" />
            {photo.caption && (
              <div className="photo-overlay">
                <p className="photo-caption">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Full Size" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingPhotoGallery;