<template>
  <div class="main_header_wrapper">
    <div class="hs_navigation_header_wrapper">
      <div class="">
        <div class="row">
          <div class="col-lg-6 col-md-5 col-sm-5 col-xs-5">          
          </div>
          <div class="col-lg-6 col-md-7 col-sm-7 col-xs-7">
            <div class="hs_top_right_wrapper">
              <div class="hs_navi_searchbar_wrapper hidden-sm hidden-xs">
                <input type="text" placeholder="Search here">
                <button><i class="fa fa-search"></i></button>
              </div>
              <ul class="cart_login_wrapper">
               
                <li class="dropdown menu-button hs_top_user_profile">
                  <a href="#">
                    <img src="images/header/top_user.png" alt="user">
                    <span class="hidden-xs">Login / Register</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="signin_dropdown">
                      <a href="#" class="btn btn-primary"> <span>Login with Facebook</span> <i class="fa fa-facebook"></i> </a>
                      <a href="#" class="btn btn-primary google-plus"> Login  with Google <i class="fa fa-google-plus"></i> </a>
                      <h2>or</h2>
                      <div class="formsix-pos">
                        <div class="form-group i-email">
                          <input type="email" class="form-control" required="" id="emailTen" placeholder="Email Address *">
                        </div>
                      </div>
                      <div class="formsix-e">
                        <div class="form-group i-password">
                          <input type="password" class="form-control" required="" id="namTen-first" placeholder="Password *">
                        </div>
                      </div>
                      <div class="remember_box">
                        <label class="control control--checkbox">Remember me
                          <input type="checkbox">
                          <span class="control__indicator"></span>
                        </label>
                        <a href="#" class="forget_password">
                          Forgot Password
                        </a>
                      </div>
                      <div class="hs_effect_btn">
                        <ul>
                          <li data-animation="animated flipInX"><a href="#" class="hs_btn_hover">Login</a></li>
                        </ul>
                      </div>
                      <div class="sign_up_message">
                        <p>Don’t have an account ? <a href="#"> Sign up </a> </p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

