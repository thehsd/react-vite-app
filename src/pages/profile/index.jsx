import { Link, Outlet } from "react-router";

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-6">
      <aside className="col-start-1 col-end-2 ">
        <ul className="flex flex-col gap-y-3">
          <li>
            <Link to="/profile/orders"> orders list page</Link>
          </li>
          <li>
            <Link to="/profile/addresses">addresses list page</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </aside>
      <main className="col-start-2 col-end-7">
        <Outlet />
      </main>
    </div>
  );
};

export default ProfilePage;
