
import { useBioContext } from ".";

export const About = () => {

    const {myName, myAge} = useBioContext();

    return (
        <section>
            <h1>Hello Context API (About). My name is {myName}. I am {myAge} years old.</h1>;
        </section>
    );
    
};

