const React = require('react');
const ReactRouter = require('react-router');

let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let hashHistory = ReactRouter.hashHistory;
const Main = require('../components/Main');
const Home = require('../components/Home');
const PrompContainer = require('../containers/PrompContainer');

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='playerOne' header='Player One' component={PrompContainer} />
      <Route path='playerTwo/:playerOne'  header='Player Two' component={PrompContainer} />
    </Route>
  </Router>
)

module.exports = routes
