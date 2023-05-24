import ReactDOM from 'react-dom/client';
import './css/index.css';
import init from './init';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(await init());
