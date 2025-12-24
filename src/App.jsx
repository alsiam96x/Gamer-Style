import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Rootlayout from "./C-Files/Rootlayout";

// Lazy load the pages
const Index = lazy(() => import("./P-Files/Index.jsx"));
const FFBIOS = lazy(() => import("./P-Files/FFBIOS.jsx"));
const FFNAMES = lazy(() => import("./P-Files/FFNAMES.jsx"))
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Rootlayout />}>
        <Route 
          path="/" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Index />
            </Suspense>
          } 
        />
        <Route 
          path="/ffbios" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FFBIOS />
            </Suspense>
          } 
        />
        <Route
          path="/ffnames"
          element={
            <Suspense fallback={<div>Loading...</div>} >
              <FFNAMES/>
            </Suspense>
          }
        />
      </Route>
    )
  );

  return <div className=" container mx-auto "><RouterProvider router={router} /></div>;
}

export default App;
