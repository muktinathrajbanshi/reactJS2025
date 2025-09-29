
import { useBioContext } from "./hooks/ContextAPI";

export const Services = () => {

    const {myName, myAge} = useBioContext();

    return (
        <section>
            <h1>
            Hello Context API (Services). My name is {myName}. I am {myAge} years old.
            </h1>
        </section>
    );
};

