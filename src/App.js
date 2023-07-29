import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./Pages/Create";
import Update from "./Pages/Update";
import Userlist from "./Pages/Userlist";
import Data from "./Pages/Data";
import Authorlist from "./AuthorPages/Authorlist";
import Createauthor from "./AuthorPages/Createauthor";
import Updateauthor from "./AuthorPages/Updateauthor";
import Dashboard from "./Dashboard";
import Dataauthor from "./AuthorPages/Dataauthor";

function App() {
  return (
    <div>
      <Data />
      <Dataauthor />
      <Routes>
        <Route path="/" Component={Dashboard}></Route>
        <Route path="/books" Component={Userlist}></Route>
        <Route path="/create" Component={Create}></Route>
        <Route path="/edit/:id" Component={Update}></Route>
        <Route path="/authors" Component={Authorlist}></Route>
        <Route path="/createauthor" Component={Createauthor}></Route>
        <Route path="/editauthor/:id" Component={Updateauthor}></Route>
      </Routes>
    </div>
  );
}

export default App;
