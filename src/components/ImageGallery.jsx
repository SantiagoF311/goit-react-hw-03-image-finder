import { ImageGalleryItem } from "./ImageGalleryItem";
import { ImageGalleryStyled } from "./styledComponents/ImageGallery";


export const ImageGallery = ({ images, onItemClick }) => {
  if (images.length === 0) {
    return 
  }

  return (
    <ImageGalleryStyled className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onItemClick={onItemClick}
        />
      ))}
    </ImageGalleryStyled>
  );
};