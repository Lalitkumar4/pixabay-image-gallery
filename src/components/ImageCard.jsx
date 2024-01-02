const ImageCard = ({ image }) => {
  return (
    <div className="relative group">
      <a
        href={image.largeImageURL}
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-75"
      >
        <img
          src={image.webformatURL}
          alt="img"
          className="w-full h-80 object-cover bg-white"
        />
      </a>
      <div className="flex gap-2 absolute bottom-3 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>
          <img
            className="w-9 rounded-full object-cover"
            src={image.userImageURL}
            alt="avatar"
          />
        </span>
        <span className="font-bold text-white text-xl">{image.user}</span>
      </div>
    </div>
  )
}

export default ImageCard
