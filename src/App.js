import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import { Context } from "./Context/Context";
import Users from "./Component/Users/Users";
import CreateUser from "./Component/CreateUser/CreateUser";
import EditUser from "./Component/EditUser/EditUser";
import Profile from "./Component/Profile/Profile";
import EditProfile from "./Component/EditProfile/EditProfile";

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    let { data: users } = await axios.get(
      "https://611f26289771bf001785c71b.mockapi.io/users"
    );
    console.log(users);
  };
  useEffect(() => {
    console.log("Mounted");
    getUsers();
  }, []);
  return (
    <>
      <Context.Provider value={{ users, setUsers }}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Users />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="edituser/:id" element={<EditUser />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile/:id" element={<EditProfile />} />
            <Route path="/home">
              <Redirect to="/" />
            </Route>
          </Routes>
        </Router>
      </Context.Provider>
    </>
  );
}
export default App;
