import React from "react"

const Catg = () => {
  const data = [
    {
      // cateImg: "./images/category/cat-1.png",
      cateName: " Flowering plant",
    },
    {
      // cateImg: "./images/category/cat-2.png",
      cateName: " Gift plant",
    },
    {
      // cateImg: "./images/category/cat-1.png",
      cateName: "Indoor plant",
    },
    {
      // cateImg: "./images/category/cat-2.png",
      cateName: "Outdoor plant",
    },
    {
      // cateImg: "./images/category/cat-1.png",
      cateName: "Foliage plant",
    },
    {
      // cateImg: "./images/category/cat-2.png",
      cateName: "Mansoon plant",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1> Shop by type </h1>
          {/* <h5>Shop by type </h5> */}
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Types</button>
        </div>
      </div>
    </>
  )
}

export default Catg
