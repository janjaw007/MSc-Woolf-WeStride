import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "@/pages/home/HomePage";
import DetailPage from "@/pages/detail/DetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: HomePage,
    },
    {
      path: "/detail",
      Component: DetailPage,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
