import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import FoodPurchased from "../pages/FoodPurchased";
import MyFood from "../pages/MyFood";
import AddFood from "../pages/AddFood";
import MyOrders from "../pages/MyOrders";
import SingleFoodPage from "../pages/SingleFoodPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Update from "../pages/Update";
import FoodDetails from "../pages/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'all-foods',
        element: <AllFoods></AllFoods>
      },
      {
        path: 'gallery',
        element: <Gallery></Gallery>
      },
      {
        path: 'food-purchased/:id',
        element: (
          <PrivateRoute>
            <FoodPurchased></FoodPurchased>
          </PrivateRoute>
        ),
      },
      {
        path: 'single-food-page',
        element: <SingleFoodPage></SingleFoodPage>
      },
      {
        path: 'my-food',
        element: (
          <PrivateRoute>
            <MyFood></MyFood>
          </PrivateRoute>
        )
      },
      {
        path: 'add-food',
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        )
      },
      {
        path: '/my-orders',
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        )
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        )
      },
      {
        path: '/food/:id',
        element: (
          
            <FoodDetails></FoodDetails>
          
        )
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }

    ]
  },
]);

export default router;