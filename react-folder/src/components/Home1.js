import { useState } from "react";

const Home = () => {
  let [name, setName] = useState("Jesthony");
  let [age, setAge] = useState(34);

  function logName() {
    console.log(name);
  }

  function greetings(greet) {
    console.log(greet);
  }

  function changeName() {
    setName("New Name");
  }

  function addAge() {
    setAge(age + 1);
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h3>Homepage</h3>
          <p>
            {name} is {age} yrs old
          </p>
          <button className="btn btn-info m-1" onClick={changeName}>
            Change Name
          </button>

          <button className="btn btn-success m-1" onClick={addAge}>
            Add Age
          </button>

          <button className="btn btn-primary m-1" onClick={logName}>
            Console Name
          </button>

          <button
            className="btn btn-danger"
            onClick={() => {
              greetings("hello");
            }}
          >
            Console Greet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;