import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';

import {createStore, Provider} from './slomux'
import {reducer, defaultState} from './slomux/reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer, defaultState);


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
