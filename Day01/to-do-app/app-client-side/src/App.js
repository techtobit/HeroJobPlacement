import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTask from './Components/Page/Home/App/AddTask';
import MyApp from './Components/Page/Home/App/MyApp';
import TasksList from './Components/Page/Home/App/TasksList';
import NavBars from './Components/Page/Others/NavBars/NavBars'
import Login from './Components/Auth/LogIn/Login'
import RequireAuth from './Components/Auth/RequreAuth/RequireAuth'
import Home from './Components/Page/Home/Home';
function App() {
  return (
    <div>
      <NavBars></NavBars>
      <Routes>
        <Route path='/' element={
          <Home></Home>}
        ></Route>
        <Route path='/app' element={
          <MyApp></MyApp>
        }>
          <Route index element={
            <AddTask></AddTask>}></Route>
          <Route path='app/list' element={<TasksList></TasksList>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
