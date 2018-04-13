import React from 'react';
import logo from './logo.svg'
import {connect} from 'react-redux'
import {Submit} from './actions'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isfetch:false,
      iserror:false,
    }
  }
  componentWillReceiveProps(nextProps){
    const {error,auth,message} = nextProps.user
    if(error){
      this.setState({iserror:true})
      this.setState({isfetch:false})
    }else if(auth){
      alert('Success')
      this.setState({isfetch:false})
    }

  }
  
  HandleChange(event) {
    
    const {name, value} = event.target
    this.setState({[name]: value}, () => {
     this.setState({iserror:false})
    })
  };
  HandleSubmit(event){
    this.setState({isfetch:true});
    this.props.Submit(this.state)
}
  render() {
    console.log(this.props)
    // start your code here
    const {isfetch} = this.state
    return (
      <div className="form-control">
        <div className="form-cover">
         
            <img className={isfetch?"logo-spin":""} src={logo} alt="reactlogo"/>
            <div className="form-input">
              <label htmlFor="email">E-mail Address</label>
              <input type="text" name="email" onChange={this.HandleChange.bind(this)}/>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" onChange={this.HandleChange.bind(this)}/>
            </div>
          <label htmlFor="" className="error">{this.state.iserror?"E-mail or password is correct":""}</label>
            <div className="button-form">
              <button  className="button-sky" onClick={this.HandleSubmit.bind(this)}>SIGN IN</button>
            </div>
            <div className="register-form">
              <a className="tagA" href="">Forgot Password?</a>
              <a className="tagA" href="">Create a new account</a>
            </div>
        </div>
      </div>

    
    )
  }
}

function mapStateToProps({user}) {
  return {
    user
  }
}
export default connect(mapStateToProps,{Submit})(App);
