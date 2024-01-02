import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ImageCard from "./components/ImageCard"
import ImageSearch from "./components/ImageSearch"
import TypesOfImage from "./components/TypesOfImage"
import Spinner from "./components/assets/spinner.gif"
import HeadingTagLine from "./components/HeadingTagLine"
import PageNotFound from "./components/PageNotFound"

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState("")
  const [imageType, setImageType] = useState("all")

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=${imageType}&pretty=true&per_page=80`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }, [term, imageType])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative mx-auto py-2" id="container">
              <HeadingTagLine />
              <ImageSearch searchText={(text) => setTerm(text)} />
              <TypesOfImage typeText={(type) => setImageType(type)} />

              {!isLoading && images.length === 0 && (
                <div className="text-center mx-auto">
                  <h1 className="text-4xl mt-32">{term}</h1>
                  <h2 className="text-2xl my-5 ">
                    Sorry, we couldn't find any images
                  </h2>
                </div>
              )}

              {isLoading ? (
                <img
                  src={Spinner}
                  className="w-24 text-center mt-40 mx-auto"
                  alt=""
                />
              ) : (
                <div className="mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                    {images.map((image) => (
                      <ImageCard key={image.id} image={image} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
