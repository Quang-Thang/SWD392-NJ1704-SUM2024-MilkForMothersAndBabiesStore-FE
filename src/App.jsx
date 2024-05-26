import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Homepage from "./pages/Homepage";
import Header from "./common/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
