import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./component/Project.tsx";
import Contact from "./component/Contact.tsx";
import AboutMe from "./component/About.tsx";
import { Provider } from "react-redux";
import store from "./component/redux/store.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/project",
    element: <Project></Project>,
  },
  {
    path: "/about",
    element: <AboutMe></AboutMe>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
