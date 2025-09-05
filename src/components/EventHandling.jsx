import "./EV.css"; 

export const EventHandling = () => {

    // function handleButtonClick() {
    //     alert("Hey I am onClick Event");
    // }

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey I am onClick Event");
    };

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, welcome`);
        
    }

    return (
        <>
            {/* //? Function Components with Named Functions  */}
            <button onClick={handleButtonClick}>click me</button>
            <br />
            <button onClick={(event) => handleButtonClick(event)}>click me 2</button>
            <br />
            {/* //? Inline Event Handlers  */}
            <button onClick={(event) => console.log(event)}>Inline Function</button>
            <br />
            {/* //? Function Components with Inline Arrow Functions  */}
            <button onClick={() => alert("Hey I am inline event function")}>Inline Arr fun</button>
            <br />
            {/* //? Passing Arguments to Event Handlers  */}
            {/* <button onClick={handleWelcomeUser("muktinath")}>click me</button> */}
            <button onClick={() => handleWelcomeUser("muktinath")}>click me</button>
            <button onClick={() => handleWelcomeUser("Milan")}>click me</button>
        </>
    );
};