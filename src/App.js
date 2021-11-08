import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import AddNewShedule from './Components/AddNewShedule/AddNewShedule'
import Header from './Components/Shared/Header/Header'
import Footer from './Components/Shared/Footer/Footer'
import './App.css';
import AuthProvider from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Packages from './Components/Packages/Packages';
import LogIn from './Components/Login/Login';
import MyBooking from './Components/MyBooking/MyBooking';
import PrivateRoute from './Components/PrivetRoute/PrivetRoute';
import  NotFound from './Components/NotFound/NotFound';
import ManageAllBooking from './Components/ManageAllBooking/ManageAllBooking';
import UpdatePakage from './Components/UpdatePakage/UpdatePakage';




function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>

        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/packages'>
          <Packages></Packages>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/login'>
          <LogIn></LogIn>
        </Route>
        <PrivateRoute path='/mybooking'>
          <MyBooking></MyBooking>
        </PrivateRoute>
        <Route path='/addnewshedule'>
          <AddNewShedule></AddNewShedule>
        </Route>
        <Route path='/shedules/updatepackage/:id'>
          <UpdatePakage></UpdatePakage>
        </Route>
        <Route path='/manage'>
          <ManageAllBooking></ManageAllBooking>
        </Route>
        <Route path='about'>
          <About></About>
        </Route>
        <Route path='*'>
         <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;