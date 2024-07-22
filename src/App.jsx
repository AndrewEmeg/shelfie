import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/welcome";
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
