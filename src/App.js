import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/Store';
import Mydashboard from './redux/Mydashboard';
import MyApiData from './MyApiData';

function App() {
  return (
    <Provider store={store} >

      <div className="App">
      <Mydashboard />
      <MyApiData />
    </div>
      
    </Provider>
    
  );
}

export default App;
