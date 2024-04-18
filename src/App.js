import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Body from "./component/Body/Body";
import Contact from "./component/Contact/Contact";
import MovieDetail from "./component/MovieDetail/MovieDetail";
const App = () => {
  return (
    <div className="App   w-full h-full xl:h-screen">
      <Navbar />
      {/* <Body /> */}
      <Outlet />
    </div>
  );
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movies/:movieId",
        element: <MovieDetail />,
      },
    ],
  },
]);

export default App;
