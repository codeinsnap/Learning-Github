import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Redux/counterSlice'

function App() {

  return (
    <div style={{ padding: '10px' }}>
      Hello
    </div>
  );
}

export default App;