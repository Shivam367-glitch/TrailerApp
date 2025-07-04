import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Login from "./components/Login"; 
import PeopleSearch from "./components/PeopleSearch"; 
import PasswordReset from "./components/PasswordReset"; 
import MovieDetail from "./components/MovieDetail"; 
import PeopleDetail from "./components/PeopleDetail";
import LogOut from "./components/LogOut";
import Body from "./components/Body";  
import Browser from "./components/Browser"; 
 import CategoryMovie from "./components/CategoryMovie";
import DiscoverPage from "./components/DiscoverPage";
import Profile from "./components/Profile";
import GptSearch from "./components/GptSearch";
import ProtectedRoute from "./components/ProtectedRoute";

 
function App() {

  const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/password-reset",
        element: <PasswordReset />,
      },
      {
        element: <ProtectedRoute />, 
        children: [
          {
            path: "/browser",
            element: <Browser />,
          },
          {
            path: "/discover/:endpoint",
            element: <DiscoverPage />,
          },
          {
            path: "/movie/:movieId",
            element: <MovieDetail />,
          },
          {
            path: "/logout",
            element: <LogOut />,
          },
          {
            path: "/people",
            element: <PeopleSearch />,
          },
          {
            path: "/people/:peopleId",
            element: <PeopleDetail />,
          },
          {
            path: "/movies/:type",
            element: <CategoryMovie />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/ai-recommendation",
            element: <GptSearch />,
          },
        ],
      },
    ],
  },
]);
  
  return (
    <> 
    <RouterProvider router={appRoute} />
    </>
  )
}

export default App
