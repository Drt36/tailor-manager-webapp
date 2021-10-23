import './App.css';
import LoginPage from './pages/LoginPage';
import {Route,Switch} from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard';
import UserDashBoard from './pages/UserDashBoard';
import Footer from './components/Footer';
import User from './components/User';
function App() {
  return (
    <Switch>
    <Route exact path='/' component={LoginPage}></Route>
    <Route exact path='/admin/dashboard/:email' render={(props) => <AdminDashboard{...props}/>}></Route>
    <Route exact path='/admin/users' component={User}></Route>
    <Route exact path='/user/dashboard/:email' render={(props) => <UserDashBoard{...props}/>}></Route>
    <Route exact path='/privacy' component={Footer}></Route>

    {/* <Route exact path='/movies/:genre' render={(props) => <GenreList{...props}/>}></Route>
    <Route exact path='/watchlist/all' component={WatchList}></Route>
    <Route exact path='/privacy' component={PrivacyAndTerms}></Route>
  <Route exact path='/terms' component={PrivacyAndTerms}></Route> */}
  </Switch>
  );
}

export default App;
