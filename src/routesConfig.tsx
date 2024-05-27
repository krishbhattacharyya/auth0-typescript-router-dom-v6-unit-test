import PrivateRoute from "./components/PrivateRoute";
import HomePage, { homeLoader } from "./pages/home/home-page";
import DashboardPage from "./pages/dashboard/dashboard-page";
import NotFoundPage from "./pages/not-found/not-found-page";
import ErrorBoundary from './components/ErrorBoundary'
const routeConfig = [
    {
      path: "/",
      element: <HomePage />,
      loader: homeLoader,
      errorElement: <ErrorBoundary />
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashboardPage /></PrivateRoute>,
      errorElement: <ErrorBoundary />
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
]
export default routeConfig;