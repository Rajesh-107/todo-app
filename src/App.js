import { Routes, Route } from "react-router-dom";
import './App.css';
import Calendar from "./Pages/Calendar";
import CompletedTask from "./Pages/CompletedTask";
import Footer from "./Pages/Footer";
import Navbar from './Pages/Navbar';
import Todo from "./Pages/Todo";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/todo" element={<Todo></Todo>}></Route>
        <Route path="/task" element={<CompletedTask></CompletedTask>}></Route>
        <Route path="/calendar" element={<Calendar></Calendar>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
