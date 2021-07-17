import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import { FormikForm } from "./Components/FormikForm";
import MyFormik from "./Components/MyFormik";

function App() {
  return (
    <div className="App">
      <Main />
      {/* <FormikForm /> */}
      <MyFormik />
    </div>
  );
}

export default App;
