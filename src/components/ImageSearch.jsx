import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    searchText(text)
  }

  return (
    <div className="sticky top-0  overflow-hidden my-10 mx-auto z-50 bg-white h-20">
      <form
        onSubmit={onSubmit}
        id="form"
        className="flex top-4 items-center border-2 max-w-xs sm:max-w-xl lg:max-w-4xl xl:max-w-5xl border-slate-400 py-2 rounded-full px-4 bg-white mx-auto mt-4"
      >
        <button
          type="submit"
          className="text-lg text-slate-400 mx-3 focus:text-green-500"
        >
          <FaSearch />
        </button>

        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Search for images"
        />

        {text.length > 0 && (
          <button
            className="cursor-default"
            type="button"
            onClick={() => {
              document.getElementById("form").reset()
            }}
          >
            <FaTimes className="text-slate-700" />
          </button>
        )}
      </form>
    </div>
  )
}

export default ImageSearch
