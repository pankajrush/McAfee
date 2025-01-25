import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import A1 from "./components/A1";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<A1 />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
