import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" p-5 gap-2">
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          className="rounded-2xl p-5"
          type="text"
          placeholder="enter your name"
        />
        <button className="bg-black p-5 text-white rounded-2xl">Submit</button>
      </form>

      <div className="bg-slate-500 p-5 text-2xl"></div>
    </div>
  );
};

export default App;
