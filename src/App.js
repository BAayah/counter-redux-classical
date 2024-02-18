import { Provider } from 'react-redux';
import './App.css';
import  Counter  from './components/Counter';
import { createStore } from 'redux';
import { counterReducer } from './store/reducers';

 const store = createStore(counterReducer)

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
