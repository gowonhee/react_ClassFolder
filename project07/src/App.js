import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { counterActions } from './redux/reducer/countSlice';

function App() {

  // store에 있는 state에 변경요청을 할 때 : useDispatch()
  const dispatch = useDispatch()

  // store에 등록된 state 확인, 접근 할 때 : useSelector()

  // Ole Redux에서 useSelector 사용법
  // const num = useSelector(state => state.num)

  // toolkit
  // useSelector(state => state.리듀서이름.속성이름)
  // 리듀서 이름 : store 에 속성 값
  const num = useSelector(state => state.count.num)

  const handleIncrement = ()=>{
    // toolkit
    dispatch(counterActions.increment(1))

    // Old Redux
    // dispatch 안에 보내줄 인자 {type, payload}
    // payload -> 선택사항
    // dispatch({type : "increment"})
  }

  const handleDecrement = ()=>{
    // dispatch({type : "decrement"})
    dispatch(counterActions.decrement(1))
  }

  const incrementAmount = ()=>{
    // dispatch({type : "incrementAmount", payload : 5})
    dispatch(counterActions.incrementAmount(5))
  }

  const decrementAmount = ()=>{
    // dispatch({type : "decrementAmount", payload : 5})
    dispatch(counterActions.decrementAmount(5))
  }

  return (
    <div className="App">
        <h1>{num}</h1>
        <button onClick={handleIncrement}>1씩 증가</button>
        <button onClick={handleDecrement}>1씩 감소</button>
        <button onClick={incrementAmount}>5씩 증가</button>
        <button onClick={decrementAmount}>5씩 감소</button>
    </div>
  );
}

export default App;
