import { useState } from "react"

const ImageCard = ({ image }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <div className="relative group">
      <a
        href={image.largeImageURL}
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-75"
      >
        <img
          src={imageLoaded ? image.webformatURL : image.previewURL}
          loading="lazy"
          alt="img"
          className="object-cover w-full bg-white h-80"
          onLoad={handleImageLoad}
        />
      </a>
      <div className="absolute z-10 flex gap-2 transition-opacity duration-300 opacity-0 bottom-3 left-4 group-hover:opacity-100">
        <span>
          <img
            className="object-cover rounded-full w-9"
            src={image.userImageURL}
            alt="avatar"
          />
        </span>
        <span className="text-xl font-bold text-white">{image.user}</span>
      </div>
    </div>
  )
}

export default ImageCard
