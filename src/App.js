import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Redux/counterSlice'

function App() {

  console.log('sample', 1 + 1)

  return (
    <div style={{ padding: '10px' }}>
      Hello
      <div>
        Answer{1 + 1}
      </div>
    </div>
  );
}

export default App;