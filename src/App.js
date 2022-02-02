import './style/index.css';
import Rectangle from "./components/Rectangle";
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
        <Rectangle/>
        <Rectangle/>
        <Rectangle/>

        <Block data={{backColor:"Magenta", borderColor:"Navy"}}/>
        <Block data={{backColor:"Lime", borderColor:"Red"}}/>
        <Block data={{backColor:"Yellow", borderColor:"Orange"}}/>

        <Block data={{backColor:"Red", borderColor:"Blue"}}/>
        <Block data={{backColor:"Blue", borderColor:"Green"}}/>
        <Block data={{backColor:"Green", borderColor:"Red"}}/>
    </div>
  );
}

export default App;
