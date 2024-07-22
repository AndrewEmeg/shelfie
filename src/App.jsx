import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<SignUp />} />
        <Route path="/" element={<SignIn />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
