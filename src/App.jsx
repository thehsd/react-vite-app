import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import ProfilePage from "./pages/profile";
import SingleProductPage from "./pages/products/singleProductPage";
import ProfileOrdersPage from "./pages/profile/profileOrdersPage";
import ProfileAddressPage from "./pages/profile/profileAddressPage";
import ProfileInfo from "./pages/profile/profileInfo";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />}>
          <Route path=":id" element={<SingleProductPage />} />
        </Route>

        <Route path="profile" element={<ProfilePage />}>
          <Route index element={<ProfileInfo />} />
          <Route path="orders" element={<ProfileOrdersPage />} />
          <Route path="addresses" element={<ProfileAddressPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
