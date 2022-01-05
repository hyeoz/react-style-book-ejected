// import logo from "./logo.svg";
import "./App.css";
import CSSModule from "./CSSModule";
import SassComponent from "./SassComponent";
import StyledComponent from "./StyledComponents";

function App() {
  return (
    <div className="App">
      <h1>Chapter 9 Style Sheet</h1>
      <SassComponent />
      <hr />
      <CSSModule />
      <hr />
      <StyledComponent />
    </div>
  );
}

export default App;
