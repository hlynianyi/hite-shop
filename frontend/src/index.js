import ReactDOM from 'react-dom/client';
import init from './init';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(await init());
