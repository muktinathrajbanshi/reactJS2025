// import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css";
import { DerivedState } from "./components/DerivedState";
import "./components/Netflix.module.css";
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
    <DerivedState />
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
