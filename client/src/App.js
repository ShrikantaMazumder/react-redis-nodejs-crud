import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="container max-w-2xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/add" element={<AddTodo />}></Route>
          <Route path="/edit/:id" element={<EditTodo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
