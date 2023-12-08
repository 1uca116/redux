import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);

    const addCash =(cash)=> {
        dispatch({type: 'ADD_CASH', payload: cash})
    }
    const getCash =(cash)=> {
        dispatch({type: 'GET_CASH', payload: cash})

    }

  return (
    <div className="App" style={{display:'flex', flexDirection:'column', justifyContent: "center", alignItems: "center", height: '100vh'}}>
        <div style={{margin: 5, fontSize: '1.5rem' }}>Balance: {cash}</div>
        <div>
            <button onClick={()=> addCash(Number(prompt()))}
                    style={{padding: '10px', background:'red', color: 'white'}}>
                Add cash
            </button>
            <button onClick={()=> getCash(Number(prompt()))}
                style={{padding: '10px', background:'blue', color: 'white'}}>
                Get cash
            </button>
        </div>
    </div>
  );
}

export default App;
