import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center mt-60">
      <form >
        <input
          className="mr-5 p-2 border-2 rounded"
          type="text"
          placeholder="Enter your Name"
        />

        <input
          className="mr-5 p-2 border-2 rounded"
          type="text"
          placeholder="Enter your Description"
        />

        <input
          className="mr-5 p-2 border-2 rounded"
          type="text"
          placeholder="Enter your ImageURL"
        />
        <button className="p-2 px-3 bg-black text-white rounded text-lg">
          Submit
        </button>
      </form>

      <div></div>
    </div>
  );
};

export default App;
