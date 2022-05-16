import React from "react";

const Login = () => {
  return (
    
      <div class="h-screen flex bg-accent justify-center items-center">
        
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" class="input input-bordered" />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
            <div class="divider">OR</div>
            <button class="btn btn-outline btn-primary">Continue with google</button>
            
          </div>
        </div>
      </div>
   
  );
};

export default Login;
