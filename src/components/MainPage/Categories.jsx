import React from "react"

const Categories = () => {
  const data = [
    {
      // cateImg: "./images/category/ ",
      cateName: "Flowering plant",
    },
    {
      // cateImg: "./images/category/cat2.png",
      cateName: " Gift plant",
    },
    {
      // cateImg: "./images/category/cat3.png",
      cateName: "Air Purifier plants",
    },
    {
      // cateImg: "./images/category/cat4.png",
      cateName: " Aquatic plant",
    },
    {
      // cateImg: "./images/category/cat5.png",
      cateName: "Fragrant plant",
    },
    {
      // cateImg: "./images/category/cat6.png",
      cateName: " Bamboo plant",
    },
    {
      // cateImg: "./images/category/cat7.png",
      cateName: " Bonsai plant",
    },
    {
      // cateImg: "./images/category/cat8.png",
      cateName: " Winter flower plant",
    },
    {
      // cateImg: "./images/category/cat9.png",
      cateName: " Diabetes plant",
    },
    {
      // cateImg: "./images/category/cat10.png",
      cateName: " Fruit plant",
    },
    {
      // cateImg: "./images/category/cat11.png",
      cateName: " Cactus plant",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
