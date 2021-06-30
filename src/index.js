import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './app.js';
import ConfigurationsProvidor from './context/configurations.js';

function Main() {
  return(
    <ConfigurationsProvidor>
      <App/>
    </ConfigurationsProvidor>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
