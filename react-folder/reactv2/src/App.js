import Home from "./components/Home";
import Animals from "./components/Animals";
import Counter from "./components/Counter";
import Doctors from "./components/Doctors";


function App() {
  return (
    // <div className="App">
    //     <Home name="Michael" greet="Hello" icon="🙋‍♂️" />
    //     <Home name="Jhoii" greet="Hello" icon="🙋‍♂️" />
    //     <Home name="Eco" greet="Hello" icon="🙋‍♂️" />
    //     <Home name="Rogel" greet="Hello" icon="🙋‍♂️" />
    //     <Home name="Roger" greet="Hello" icon="🙋‍♂️" />
    // </div>

    <div className="App">
      <Doctors />
    </div>
  );
}

export default App;
