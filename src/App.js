import './App.css';
import LoginPage from './pages/LoginPage';
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Switch>
    <Route exact path='/' component={LoginPage}></Route>
    {/* <Route exact path='/movies/:genre' render={(props) => <GenreList{...props}/>}></Route>
    <Route exact path='/moviedetail/:movieId' render={(props) => <MovieDetail{...props}/>}></Route>
    <Route exact path='/watchlist/all' component={WatchList}></Route>
    <Route exact path='/privacy' component={PrivacyAndTerms}></Route>
  <Route exact path='/terms' component={PrivacyAndTerms}></Route> */}
  </Switch>
  );
}

export default App;
