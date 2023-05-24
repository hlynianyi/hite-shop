import React from 'react';
import jewerly from '../../assets/je.png';
import electronics from '../../assets/el-pic.jpg';
import clothes from '../../assets/clothes.png';


const Categories = () => {

  return(
    <div className="flex">
      <button 
        className="relative w-[960px] h-[860px] bg-no-repeat bg-cover bg-center"
        style={{backgroundImage: `url(${clothes})`}}
      >
        <span className='absolute top-6 right-6 text-4xl font-poiret'>
          Clothes
        </span>
      </button>
      <div className="flex flex-col w-1/2 h-full">
        <button 
          className="relative w-[960px] h-[430px] bg-no-repeat bg-cover bg-center"
          style={{backgroundImage: `url(${jewerly})`}}
        >
          <span className='absolute top-6 left-6 text-4xl font-poiret'>
            Jewerly
          </span>
        </button>
        <button 
          className="relative w-[960px] h-[430px] bg-no-repeat bg-cover bg-center"
          style={{backgroundImage: `url(${electronics})`}}
        >
          <span className='absolute top-6 left-6 text-4xl font-poiret'>
            Electronics
          </span>
        </button>
      </div>
    </div>
  )
}

export default Categories;