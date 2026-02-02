import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import BasketPage from "./pages/basket";
import MainLayout from "./layouts/main-layout";
import TestPage from "./pages/test";
import PerformancePage from "./pages/performance";
import UserContext from "./context/user-context";
import { useState } from "react";
import UsersPage from "./pages/users";

const App = () => {
  const [user, setUser] = useState({
    name: "John",
    age: 20,
  });
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route element={<HomePage />} index />
            <Route element={<BasketPage />} path="basket" />
            <Route element={<TestPage />} path="test" />
            <Route element={<PerformancePage />} path="perf" />
            <Route element={<UsersPage />} path="users" />
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
