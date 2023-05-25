import React from 'react';
import jewerly from '../../assets/je.png';
import electronics from '../../assets/el-pic.jpg';
import clothes from '../../assets/clothes.png';
import { useDispatch } from 'react-redux';
import { actions } from '../../slices/categoriesSlice';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    dispatch(actions.setSelectedCategory(category));
    navigate('/shop');
  };

  return(
    <div className="flex w-full">
      <div className='flex w-1/2'>
        <button 
          onClick={() => handleCategoryClick('Clothes')}
          className="relative w-full h-[860px] bg-no-repeat bg-cover bg-center"
          style={{backgroundImage: `url(${clothes})`}}
        >
          <span className='absolute top-6 right-6 text-4xl font-poiret'>
            Clothes
          </span>
        </button>
      </div>
      <div className="flex flex-col w-1/2 h-full">
        <button 
          onClick={() => handleCategoryClick('Jewerly')}
          className="relative w-full h-[430px] bg-no-repeat bg-cover bg-center"
          style={{backgroundImage: `url(${jewerly})`}}
        >
          <span className='absolute top-6 left-6 text-4xl font-poiret'>
            Jewerly
          </span>
        </button>
        <button 
          onClick={() => handleCategoryClick('Electronics')}
          className="relative w-full h-[430px] bg-no-repeat bg-cover bg-center"
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