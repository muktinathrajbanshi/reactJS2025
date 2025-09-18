import React from 'react';

export const ControlledForm = () => {

    //  const [name, setName] = useState("");

    // const handleChange = (event) => {
    //     setName(event.target.value);
    // };

    const handleSubmit = (event) => {
        // Handle form submission with the controlled state (name)
        event.preventDefault();
        
        const dataValue = document.querySelector("#inputName").value;
        console.log(dataValue);
        
    }

  return (
    <>
      <section className="container state-container">
        <h1>unControlled Component</h1>

        <form onSubmit={handleSubmit}>
            <label>
                name:
                <input 
                type="text"
                name="name"
                id="inputName" />
            </label>
            <br />
            <button type="submit" className="state-button">
                Submit
            </button>
        </form>
      </section>
    </>
  );
}
