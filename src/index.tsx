import ReactDOM from 'react-dom/client';
import "./input.css"
import App from './App';
import { Provider } from 'react-redux';
import {
  BrowserRouter
} from "react-router-dom";
import {setupStore} from './store/slices'


const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
