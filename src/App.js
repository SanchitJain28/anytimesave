import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import { LoginData } from './Contexts/LoginData';
import { NotesData } from './Contexts/NotesData';
import SaveData from './Components/SaveData';
import AddaNote from './Components/AddaNote';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PopupAlert from './Components/PopupAlert';
import Navbar from './Components/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <>
       <LoginPage/>
       </>
      ),
    },
    {
      path: "/addanote",
      element:<>
      <Navbar/>
      <AddaNote/>
      <PopupAlert/>
      </>,
    },
  ]);
  return (
    
    <>  

      <LoginData>
    <NotesData>
    <RouterProvider router={router} />
    </NotesData>
    </LoginData>


    </>
  );
}

export default App;
