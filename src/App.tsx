import { useAppDispatch } from './store/hooks';
import { sayHi } from './store/ListSlice';

function App() {
  const dispatch = useAppDispatch();
  dispatch(sayHi());

  return <div>Start</div>;
}

export default App;
