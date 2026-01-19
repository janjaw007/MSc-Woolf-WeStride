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

  return (
    <div className="bg-[url('/images/list_bg.jpg')] min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
