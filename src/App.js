import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraps, setParagraps] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let numberOfLorensIpsums = e.target.amount.value;
    if (numberOfLorensIpsums <= 0) {
      numberOfLorensIpsums = 1;
    } else if (numberOfLorensIpsums >= data.length - 1) {
      numberOfLorensIpsums = data.length;
    }
    setText([...data.slice(0, numberOfLorensIpsums)]);
  };
  let lorenIpsumsToPrint = text.map((lorenIpsum) => <p>{lorenIpsum}</p>);
  return (
    <section className="section-center">
      <h3> tired od Boring Loren Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraps</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={paragraps}
          onChange={(e) => {
            setParagraps(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Create
        </button>
      </form>
      {lorenIpsumsToPrint}
    </section>
  );
}

export default App;
