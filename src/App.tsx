import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import './App.css';

import routeConfig from './routesConfig'

const router = createBrowserRouter(routeConfig);


function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
