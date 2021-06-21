import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './app.js';

function Main() {
  return(
    <App/>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
