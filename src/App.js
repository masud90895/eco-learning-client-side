import {  RouterProvider } from "react-router-dom";
import "./App.css";

import { router } from "./Routes/Routes";

function App() {
  

  return (
    <div className="App font-serif">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
