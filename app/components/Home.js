const React = require('react');
const transparentBg = require('../styles').transparentBg;
const ReactRouter = require('react-router');
let Link = ReactRouter.Link
// import { Link } from 'react-router';
let Home = React.createClass({
  render: function(){
    return(
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>GitHub Battle</h1>
        <p className="lead"> some motto</p>
        <Link to='/playerOne'>
          <button type="button" className="btn btn-lg btn-success">Get Started</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
