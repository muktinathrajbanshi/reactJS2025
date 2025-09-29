import { useBioContext } from ".";
import "./contextapi.css";

export const Home = () => {

    const {myName, myAge} = useBioContext();

    return (
        <section>
        <h1>Hello Context API. My name is {myName}. I am {myAge} years old.</h1>
        </section>
    ); 
};

