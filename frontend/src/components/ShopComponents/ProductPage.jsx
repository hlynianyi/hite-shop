import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BestProducts from "../MainPageComponents/BestProducts";
import { ReactComponent as ProductLine } from "../../assets/productLine.svg";
import { toast } from "react-toastify";
import { selectors } from "../../slices/productsSlice";
import { actions as cartActions } from "../../slices/cartSlice";

const Loading = () => <div className="loading-animation"></div>;

const ProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) =>
  selectors.selectById(state, productId)
  );
  
  if (!product) return <Loading />

  const addToCart = () => {
    toast.success('Product in the cart.');
    dispatch(cartActions.addToCart(product));
  };

  return (
    <div>
      <div className="productpage-container">
        <div className="image">
          <img
            className="w-full h-full object-contain"
            src={product.image}
            alt={product.title}
          />
          <div className="absolute top-0 right-0 py-1 px-2 rounded-full bg-producttitle text-white text-lg font-opensans">
            Rating: {product.rating.rate}
          </div>
        </div>
        <div className="product-details">
          <h2 className="product-title font-poiret text-producttitle">
            {product.title}
          </h2>
          <p className="product-price font-poiret text-productprice">
            $ {product.price}
          </p>
          <p className="product-sold text-productprice">
            Sold: {product.rating.count} pcs.
          </p>
          <p className="product-description text-productprice">
            {product.description}
          </p>
          <div className="pt-6 pr-6 flex flex-row justify-between items-center">
            <button
              onClick={addToCart}
              className=" button rounded font-opensans text-white bg-customblue hover:bg-producttitle h-10 py-1 px-10 leading-11"
            >
              <p className="text-2xl font-opensans">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
      <ProductLine className="w-full" />
      <BestProducts />
    </div>
  );
};

export default ProductPage;
