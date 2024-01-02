import { useState } from "react"
import { FaCamera } from "react-icons/fa"
import { FaImage } from "react-icons/fa"
import { FaPaintBrush } from "react-icons/fa"
import { FaPenNib } from "react-icons/fa"

const TypesOfImage = ({ typeText }) => {
  const [currentType, setCurrentType] = useState("all")

  const handleClick = (e) => {
    setCurrentType(e.currentTarget.getAttribute("data-value"))

    typeText(e.target.getAttribute("data-value"))
  }

  return (
    <div className="container w-1/2 mx-auto flex flex-col sm:flex-row justify-around my-14">
      <button
        onClick={handleClick}
        data-value="all"
        className={`whitespace-nowrap flex gap-1 items-center justify-center text-slate-800 px-3 py-2 rounded-3xl hover:bg-slate-100 ${
          currentType === "all" && "bg-slate-100"
        }`}
      >
        <span>
          <FaImage className={`${currentType === "all" && "text-green-500"}`} />
        </span>
        All Images
      </button>
      <button
        onClick={handleClick}
        data-value="photo"
        className={`flex gap-1 items-center justify-center text-slate-800 px-3 py-2 rounded-3xl hover:bg-slate-100 ${
          currentType === "photo" && "bg-slate-100"
        }`}
      >
        <span>
          <FaCamera
            className={`${currentType === "photo" && "text-green-500"}`}
          />
        </span>
        Photos
      </button>
      <button
        onClick={handleClick}
        data-value="illustration"
        className={`flex gap-1 items-center justify-center text-slate-800 px-3 py-2 rounded-3xl hover:bg-slate-100 ${
          currentType === "illustration" && "bg-slate-100"
        }`}
      >
        <span>
          <FaPaintBrush
            className={`${currentType === "illustration" && "text-green-500"}`}
          />
        </span>
        Illustrations
      </button>

      <button
        onClick={handleClick}
        data-value="vector"
        className={`flex gap-1 items-center justify-center text-slate-800 px-3 py-2 rounded-3xl hover:bg-slate-100 ${
          currentType === "vector" && "bg-slate-100"
        }`}
      >
        <span>
          <FaPenNib
            className={`${currentType === "vector" && "text-green-500"}`}
          />
        </span>
        Vectors
      </button>
    </div>
  )
}

export default TypesOfImage
