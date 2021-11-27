import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
// import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import DeliveryInfo from './components/DeliveryInfo/DeliveryInfo';
import Food from './components/Food/Food';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import OrderCart from './components/OrderCart/OrderCart';
import DeliveryInfo from './components/Shipping/DeliveryInfo';
import Order from './components/Order/Order';
import ManageOrder from './components/ManageOrder/ManageOrder';
// import ManageOrder from './components/Product/ManageOrder/ManageOrder';


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
          <Route path="/food">
            <Food></Food>
          </Route>
          <Route path="/ordercart">
            <OrderCart></OrderCart>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/deliveryinfo">
          <DeliveryInfo></DeliveryInfo>
          </PrivateRoute>
          <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/manageorder">
              <ManageOrder></ManageOrder>
          </PrivateRoute>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/order/:serviceId">
            <Order></Order>
          </Route>
          <Route path="/manageorder">
            <ManageOrder></ManageOrder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
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
