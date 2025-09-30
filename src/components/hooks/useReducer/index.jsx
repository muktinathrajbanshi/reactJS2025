import { useReducer } from "react";
import "./index.css";


export const ReducerComp = () => {

    const reducer = (state, action) => {

    };

    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);

        console.log(useReducer);
        

    return (
        <>
            <div className="container">
                <h1>{count}</h1>
                <button>Increment</button>
                <button>Decrement</button>
            </div>
        </>
    )
};