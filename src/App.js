import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Register from './components/Register/Register';
import AuthProvider from './Contex/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
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
                <Route path='/doctors'>
                  <Doctors></Doctors>
                </Route>
                <PrivateRoute path='/services'>
                  <Services></Services>
                </PrivateRoute>
                <PrivateRoute path='/contact'>
                  <Contact></Contact>
                </PrivateRoute>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                 <Route path='/register'>
                  <Register></Register>
                </Route>
                <Route path='/servicedetails/:serviceKey'>
                  <ServiceDetails></ServiceDetails>
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
