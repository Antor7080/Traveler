import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import AddDestination from './Pages/AddDestination/AddDestination';
import MyBooking from './Pages/MyBooking/MyBooking';
import AllBooking from './Pages/AllBooking/AllBooking';
import About from './Pages/AboutUs.js/About';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/addDestination">
              <AddDestination></AddDestination>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>

            </PrivateRoute>
            <PrivateRoute path="/myBooking">
              <MyBooking></MyBooking>

            </PrivateRoute>
            <PrivateRoute path="/allbooking">
              <AllBooking></AllBooking>

            </PrivateRoute>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
