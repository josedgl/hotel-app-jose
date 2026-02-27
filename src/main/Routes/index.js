import { Suspense, lazy } from 'react';
import { useRoutes, Navigate } from "react-router-dom";
import SuspenseLoader from '../Components/SuspenseLoader';
import BaseLayout from '../Layouts/BaseLayout'
import SidebarLayout from '../Layouts/SidebarLayout'
import Authenticated from '../Components/Authenticated';
import HomeViewPage from '../../features/Home/presenter/pages/HomeView';
import LogoutPage from '../../features/Authentication/presenter/pages/Logout';

const Loader = (Component) => (props) => (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
);
// Auth
const LoginPage = Loader(lazy(() => import('../../features/Authentication/presenter/pages/Login')));
const OutSessionPage = Loader(lazy(() => import('../../features/Authentication/presenter/pages/OutSession')));
const HotelsViewPage = Loader(lazy(() => import('../../features/Hotels/presenter/pages/HotelsView')));
const RoomsViewPage = Loader(lazy(() => import('../../features/Rooms/presenter/pages/RoomsView')));
const BookingViewPage = Loader(lazy(() => import('../../features/Booking/presenter/pages/BookingsView')));

export default function Router() {
  
  const routes = [
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />
        },
        {
          path: "*",
          element: <Navigate to="/" />
        },
        {
          path: "outsession",
          element: <OutSessionPage/>
        },
        {
          path: "logout",
          element: <LogoutPage/>
        }
      ]
    },
    {
      path: "home",
      element: (
        <Authenticated>
          <SidebarLayout/>
        </Authenticated>
      ),
      children: [
        {
          path: "",
          element: <HomeViewPage/>
        },
      ]
    },
    {
      path: "admin",
      element: (
        <Authenticated>
          <SidebarLayout/>
        </Authenticated>
      ),
      children: [
        {
          path: "hotel/list",
          element: <HotelsViewPage/>
        },
        {
          path: "room/list",
          element: <RoomsViewPage/>
        },
        {
          path: "booking/list",
          element: <BookingViewPage/>
        },
      ]
    },
  ]
  
  return useRoutes(routes);
  
  }
  