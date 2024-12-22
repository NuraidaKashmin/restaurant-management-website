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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route not found</h2>,
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
            element:<Gallery></Gallery>
        },
        {
            path: 'food-purchased',
            element: <FoodPurchased></FoodPurchased>
        },
        {
          path: 'my-food',
          element: <MyFood></MyFood>
        },
        {
          path: 'add-food',
          element: <AddFood></AddFood>
        },
        {
          path: 'my-orders',
          element:<MyOrders></MyOrders>
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