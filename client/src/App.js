import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetAwards from "./components/getAward/Get"; // Import the updated Get component
import Add from "./components/addAward/Add"; // Import the Add component
import Edit from "./components/updateAward/Edit"; // Optional: Ensure the Edit component exists

function App() {
  // Define routes
  const route = createBrowserRouter([
    {
      path: "/", // Default route to display awards
      element: <GetAwards />,
    },
    {
      path: "/add", // Route for adding a new award
      element: <Add />,
    },
    {
      path: "/edit/:id", // Route for editing an award
      element: <Edit />, // Ensure the Edit component is implemented
    }
    
  ]);

  return (
    <div>
      {/* Provide the router to the application */}
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
