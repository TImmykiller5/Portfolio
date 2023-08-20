import "./App.css";
import FirstPage from "./pages/firstPage/FirstPage";
import SecondPage from "./pages/secondPage/SecondPage";
import ThirdPage from "./pages/thirdPage/ThirdPage";
import FourthPage from "./pages/fourthPage/FourthPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <FirstPage />
          <SecondPage />
          <ThirdPage />
          <FourthPage />
        </div>
      ),
    },
  ]);
  return <div className="App bg-black text-cyan-100">
    <RouterProvider router={router}/>
  </div>;
}

export default App;
