import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Password from "./pages/Password";
import ToDoList from "./pages/ToDoList";
import LiveCase from "./pages/LiveCase";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/password" element={<Password />} />
          <Route path="/list" element={<ToDoList />} />
          <Route path="/case" element={<LiveCase />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
