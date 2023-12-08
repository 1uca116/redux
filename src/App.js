import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers)

    const addCash =(cash)=> {
        dispatch({type: 'ADD_CASH', payload: cash})
    }
    const getCash =(cash)=> {
        dispatch({type: 'GET_CASH', payload: cash})

    }

    const addCustomer =(name)=> {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }
    const deleteCustomer =(customer)=> {
        dispatch(removeCustomerAction(customer.id))

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
            <hr/>
            <button onClick={()=> addCustomer(prompt())}
                    style={{padding: '10px', background:'red', color: 'white'}}>
                Add customer
            </button>
            <button onClick={()=> dispatch(fetchCustomers())}
                    style={{padding: '10px', background:'blue', color: 'white'}}>
                Get clients from DB
            </button>
        </div>

        {customers.length !== 0 ?
            <div>
                {customers.map(x=>
                    <div style={{background: 'red', padding: '15px'}} onClick={()=> deleteCustomer(x)}>{x.name}</div>
                )}
            </div>
            :
            <div>No customers....</div>
        }
    </div>
  );
}

export default App;
