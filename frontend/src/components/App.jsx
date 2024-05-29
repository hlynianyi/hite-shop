import React, { useEffect } from "react";
import Router from "./Router";
import { useDispatch } from "react-redux";
import axios from "axios";
import routes from "../routes";
import { actions as productsActions } from "../slices/productsSlice";
import { actions as categoriesActions } from "../slices/categoriesSlice";
import { AuthProvider } from "../context";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitData = async () => {
      try {
        const productResponse = await axios.get(routes.getProducts());
        const categoriesResponse = await axios.get(routes.getAllCategories());
        const categories = Object.fromEntries(
          categoriesResponse.data.map((category, index) => [
            index,
            {
              id: index,
              name: category,
            },
          ])
        );

        dispatch(categoriesActions.addCategories(categories));
        dispatch(productsActions.addProducts(productResponse.data));
      } catch (error) {
        throw new Error("Fetching data Error:", error);
      }
    };
    fetchInitData();
  }, [dispatch]);

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
