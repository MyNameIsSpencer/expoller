import React, { Component } from 'react';
import '../../css/landingcentre.scss';

class LandingCentre extends Component {
  render() {
    return (

      <section className="landing-centre">
        <h1>ExPoller</h1>
        <p>Sign in with email and password</p>
        <form role="form">
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

{/*  VVVVVVV  check box for remember me*/}
        {/* <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button> */}
        </form>
        <hr/>
        <br/>

        <h3 className="or-text">OR</h3>


        <button className="btn btn-default">Sign Up</button>
    </section>





    )
  }

}

export default LandingCentre;





      //
      //   <a class="btn btn-default login-btn" href="#loginform">Login</a>
      //   <section id="loginform" class="outer-wrapper">
      //
      //     <div class="inner-wrapper">
      //   <div class="container">
      //     <div class="row">
      //       <div class="col-sm-4 col-sm-offset-4">
      //         <h2 class="text-center">Sign In</h2>
      //         <form role="form">
      //         <div class="form-group">
      //           <label for="exampleInputEmail1">Email address</label>
      //           <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
      //         </div>
      //         <div class="form-group">
      //           <label for="exampleInputPassword1">Password</label>
      //           <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      //         </div>
      //
      //         <div class="checkbox">
      //           <label>
      //             <input type="checkbox" /> Remember me
      //           </label>
      //         </div>
      //         <button type="submit" class="btn btn-default">Submit</button>
      //       </form>
      //           </div>
      //         </div>
      //       </div>
      //       </div>
      //
      // </section>
