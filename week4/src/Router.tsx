import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import My from "./pages/My";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/my" element={<My />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
