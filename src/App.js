import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./Pages/Create";
import Update from "./Pages/Update";
import Userlist from "./Pages/Userlist";
import Data from "./Pages/Data";

function App() {
  return (
    <div>
      <Data/>
      <Routes>
        <Route path="/" Component={Userlist}></Route>
        <Route path="/create" Component={Create}></Route>
        <Route path="/edit/:id" Component={Update}></Route>
      </Routes>
    </div>
  );
}

export default App;
