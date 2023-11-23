import Main from "pages/main";
import {
  createBrowserRouter,
} from "react-router-dom";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "career",
    children: [
      {
        index: true,
        element: <h2>215125</h2>
      },
    ]
  },


]);