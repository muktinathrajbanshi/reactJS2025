import { useBioContext } from ".";

export const Home = () => {

    const {myName, myAge} = useBioContext();

    return (
        <h1>Hello Context API. My name is {myName}. I am {myAge} years old.</h1>
    ); 
};

