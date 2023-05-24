import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BestProducts from '../MainPageComponents/BestProducts';
import { ReactComponent as ProductLine } from '../../assets/productLine.svg';
import { selectors } from '../../slices/productsSlice';

const ProductPage = () => {
  const { productId } = useParams(); // Получите ID продукта из URL
  const product = useSelector((state) => selectors.selectById(state, productId));
  
  console.log('product :>> ', product);

  if (!product) {
    return <div className='flex justify-center font-poiret text-4xl text-productprice'>Loading...</div>;
  }

  return (
    <div className='flex flex-col'>
      <div className="pt-12 pb-10 px-90 flex flex-row justify-center bg-white">
        <div className='w-1/3 relative overflow-hidden max-h-[550px]'> 
          <img className='w-full h-full object-contain' src={product.image} alt={product.title} />
          <div className="absolute top-0 right-0 py-1 px-2 rounded-full bg-producttitle text-white text-lg font-opensans">
            Rating: {product.rating.rate}
          </div>
        </div>
        <div className='w-2/3 pl-20'>
          <h2 className="pb-4 font-poiret text-3xl text-producttitle">
            {product.title}
          </h2>
          <p className='pb-1 font-poiret text-2xl text-productprice'>
            $ {product.price}
          </p>
          <p className='pb-8 text-productprice text-2xs'>
            Sold: {product.rating.count } pcs.
          </p>
          <p className="w-[70%] pb-4 font-opensans text-xl text-productprice">
            {product.description}
          </p>
          <div className='pt-6 pr-6 flex flex-row justify-between items-center'>
            <button className=" button rounded font-opensans text-white bg-customblue h-10 py-1 px-10 leading-11" to={`/product/${product.id}`}>
              <p className='text-2xl font-opensans'>Add to cart</p>
            </button>
          </div>
          
        </div>
      </div>
      <ProductLine className='w-full' />
      <BestProducts />
    </div>
  );
};

export default ProductPage;