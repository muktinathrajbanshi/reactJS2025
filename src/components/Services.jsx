import { useContext } from "react";
import { BioContext } from "./hooks/ContextAPI";

export const Services = () => {

    const {myName, myAge} = useContext(BioContext);

    return (
        <section>
            <h1>
            Hello Context API (Services). My name is {myName}. I am {myAge} years old.
            </h1>
        </section>
    );
};

