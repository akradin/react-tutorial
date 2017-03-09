const React = require('react');
const Prompt = require('../components/Prompt');

let PrompContainer = React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      username: '',
    }
  },

  handleUpdateUser: function(e){
    this.setState({
      username: e.target.value
    })
  },

  handleSubmitUser: function(e){
    e.preventDefault();
    let username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne){
      // go to battle
      this.context.route.push({
        pathname: '/battle',
        query:{
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
    }

  },
  render: function(){
    return(
      <Prompt
      onSubmitUser={this.handleSubmitUser}
      onUpdateUser={this.handleUpdateUser}
      header={this.props.route.header}
      username={this.state.username}/>
    )
  }

});

module.exports = PrompContainer;
