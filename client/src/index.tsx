import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import allReducers from "./utils/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux"; 
import { composeWithDevTools } from "redux-devtools-extension";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const store = createStore(allReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
