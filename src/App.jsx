import MainLayout from "./layouts/MainLayout";
import Home from "./modules/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "./modules/Jobs";
import Types from "./modules/Types";
import Detail from "./modules/Detail";
import SignUp from "./modules/Auth/pages/SignUp";
import SignIn from "./modules/Auth/pages/SignIn";
import UserProvider from "./context/UserContext";
import Profile from "./modules/Profile";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="jobs" element={<Jobs />} /> */}
            <Route path="jobs/:title" element={<Jobs />} />
            <Route path="types/:jobtype/:id" element={<Types />} />
            <Route path="job/:jobId" element={<Detail />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* TRANG ĐĂNG KÝ */}
          <Route path="/sign-up" element={<SignUp />} />
          {/* TRANG ĐĂNG NHẬP */}
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
