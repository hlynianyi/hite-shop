import { Provider } from 'react-redux';
import store from './slices/index';
import App from "./components/App"

const init = async () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

export default init;