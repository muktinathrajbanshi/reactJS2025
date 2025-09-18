// import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css";
// import { DerivedState } from "./components/DerivedState";
// import { DerivedState } from "./components/DericedState";
// import { LiftStateUp } from "./components/LiftStateUp";
// import { Counter } from "./components/hooks/useState";
import { ControlledForm } from "./components/hooks/useState/Controlled";
// import { UseStateChallenge } from "./components/hooks/useStateChallenge";
// import "./components/Netflix.module.css";
// import { ShortCircuitExample } from "./components/ShortCircuit";
// import { Todo } from "./projects/Todo/Todo";
// import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { State } from "./components/hooks/State";

const App = () => {
  return (
    <section className="container">
    {/* <h1 className="card-heading">List of Best Netflix Series</h1>
    <NetflixSeries />  */}
    {/* <EventHandling /> */}
    {/* <EventProps /> */}
    {/* <EventPropagation /> */}
    {/* <State /> */}
    {/* <Sibling /> */}
    {/* <DerivedState /> */}
    {/* <LiftStateUp /> */}
    {/* <ToggleSwitch /> */}
    {/* <Todo /> */}
    {/* <ShortCircuitExample /> */}
    {/* <Counter /> */}
    {/* <UseStateChallenge /> */}
    <ControlledForm />
    </section>
  ); 
};


export function Sibling() {
    console.log("Sibling Component rendered");
    return (
        
        <div className="main-div">
        <h2>Sibling Component</h2>
        </div>
    ); 
}

export default App;
