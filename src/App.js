import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/Store';
import Mydashboard from './redux/Mydashboard';

function App() {
  return (
    <Provider store={store} >

      <div className="App">
      <Mydashboard />
    </div>
      
    </Provider>
    
  );
}

export default App;
