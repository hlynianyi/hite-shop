import { Provider } from "react-redux";
import store from "./slices/index";
import App from "./components/App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const init = async () => {
  return (
    <Provider store={store}>
      <App />
      <ToastContainer position="bottom-center" />
    </Provider>
  );
};

export default init;
