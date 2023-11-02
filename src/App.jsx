import MainLayout from "./layouts/MainLayout";
import Home from "./modules/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "./modules/Jobs";
import Types from "./modules/Types";
import Detail from "./modules/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:title" element={<Jobs />} />
          <Route path="types/:jobtype/:id" element={<Types />} />
          <Route path="job/:jobId" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
