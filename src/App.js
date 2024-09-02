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
  createHashRouter,
  Route,
  Link,
} from "react-router-dom";
import PopupAlert from './Components/PopupAlert';
import Navbar from './Components/Navbar';
import FetchNotes from './Components/FetchNotes';

function App() {

  const fucking=()=>{
    console.log("chup raand helloworld")
  }
  const router = createHashRouter([
    {
      path: "/",
      element: (
       <>
       <Navbar/>
       <LoginPage/>
       </>
      ),
    },
    {
      path: "/addanote",
      element:<>
      <div className="bg-zinc-950 text-white ">
      <Navbar/>
      <AddaNote/>
      <PopupAlert/>
      </div>
      </>,
    },{
      path:"/homepage",
      element:<>
      <div className="bg-zinc-950  text-white">
      <Navbar/>
          <FetchNotes/>
          <PopupAlert/>

      </div>

          </>
    }
  ]);
  return (
    
    <>  
<div className="App">
<LoginData>
    <NotesData>
    <RouterProvider router={router} />
    </NotesData>
    </LoginData>
</div>



    </>
  );
}

export default App;
