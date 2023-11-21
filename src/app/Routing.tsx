import App from "./index";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "myname",
    element: <h2>5</h2>,
  },
  {
    path: "about",
    element: <h2>all work</h2>,
  },
]);