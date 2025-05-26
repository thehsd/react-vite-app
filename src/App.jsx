import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import BasketPage from "./pages/basket";
import MainLayout from "./layouts/main-layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<BasketPage />} path="basket" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
