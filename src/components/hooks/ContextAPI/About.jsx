import { use } from "react";
import { BioContext} from ".";
import "./contextapi.css";

export const About = () => {

    // const {myName, myAge} = useBioContext();
    // const { myName, myAge } = useContext(BioContext);
    // const { myName, myAge } = use(BioContext);

    const newHook = true;
    let myName, myAge;
    if(newHook) {
        ({ myName, myAge } = use(BioContext));
    }


    return (
        <section>
            <h1>Hello Context API (About). My name is {myName}. I am {myAge} years old.</h1>;
        </section>
    );
    
};

