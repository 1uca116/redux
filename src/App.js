import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {asyncDecrementCreator, asyncIncrementCreator} from "./store/countReducer";
import {fetchUsers} from "./store/userReducer";

function App() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.countReducer.count);
    const users = useSelector(state => state.userReducer.users)


  return (
    <div className="App" style={{display:'flex', flexDirection:'column', justifyContent: "center", alignItems: "center", height: '100vh'}}>
        <div style={{margin: 5, fontSize: '1.5rem' }}>Balance: {count}</div>
        <div>
            <button onClick={()=> dispatch(asyncIncrementCreator())}
                    style={{padding: '10px', background:'red', color: 'white'}}>
                Add ++
            </button>
            <button onClick={()=> dispatch(asyncDecrementCreator())}
                style={{padding: '10px', background:'blue', color: 'white'}}>
                Delete --
            </button>
            <hr/>
            <button onClick={()=> dispatch(fetchUsers())}
                    style={{padding: '10px', background:'red', color: 'white'}}>
                Get users
            </button>

        </div>


            <div>
                {users.map(x=>
                    <div style={{background: 'red', padding: '15px'}} key={x.id}>
                        {x.name}
                    </div>
                )}
            </div>

    </div>
  );
}

export default App;
