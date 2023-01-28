import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/Authprovider";
import toast from "react-hot-toast";
import { GoMarkGithub } from "react-icons/go";
import { ImGoogle3 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import RegisterAnimation from "../../registration.json";
import { Button } from "flowbite-react";

const Register = () => {
  /*
    |-------------------------------------------------------------------------
    | name, imgURL , email, password and confirm password validation start
    | ------------------------------------------------------------------------
    */

  const [userInfo, setUserInfo] = useState({
    name: "",
    imgUrl: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    nameError: "",
    imgUrlError: "",
    emailError: "",
    passwordError: "",
    passwordMatchError: "",
    generalError: "",
  });

  /*
    |------------------------
    | User name Error handler
    | -----------------------
    */

  const nameHandler = (e) => {
    const name = e.target.value;

    if (name === "") {
      setError({ ...error, nameError: "Name must not be empty " });
      setUserInfo({ ...userInfo, name: "" });
    } else if (name.length < 4) {
      setError({
        ...error,
        nameError: "Please enter your name at lest 4 character  ",
      });
      setUserInfo({ ...userInfo, name: "" });
    } else {
      setError({ ...error, nameError: "" });
      setUserInfo({ ...userInfo, name: name });
    }
  };

  /*
    |-----------------------
    | Imge url error handler 
    | ----------------------
    */

  const imgUrlHandler = (e) => {
    const imgUrl = e.target.value;
    if (imgUrl === "") {
      setError({ ...error, imgUrlError: "Please provide a image link " });
      setUserInfo({ ...userInfo, imgUrl: "" });
    } else {
      setError({ ...error, imgUrlError: "" });
      setUserInfo({ ...userInfo, imgUrl: imgUrl });
    }
  };

  /*
    |-----------------------
    | Email error handler 
    | ----------------------
    */

  const emailHandler = (e) => {
    const email = e.target.value;
    const regx =
      /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;

    if (email === "") {
      setError({ ...error, emailError: "Email must not be empty" });
      setUserInfo({ ...userInfo, email: "" });
    } else if (!email.match(regx)) {
      setError({ ...error, emailError: "Please provide a valid email " });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setError({ ...error, emailError: "" });
      setUserInfo({ ...userInfo, email: email });
    }
  };

  /*
    |-----------------------
    | Password error hanlder
    | ----------------------
    */

  const passwordHandler = (e) => {
    const password = e.target.value;
    const capitalLetterError = /(?=.*[A-Z])/.test(password);
    const specialCharacterError =
      /(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_])/.test(password);

    if (password === "") {
      setError({ ...error, passwordError: "Password must not be empty " });
      setUserInfo({ ...userInfo, password: "" });
    } else if (password.length < 6) {
      setError({
        ...error,
        passwordError: "Password at lest 6 characters length ",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!capitalLetterError) {
      setError({
        ...error,
        passwordError: "Password at lest one capital letter ",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!specialCharacterError) {
      setError({
        ...error,
        passwordError: "Password at lest one special character ",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError({ ...error, passwordError: "" });
      setUserInfo({ ...userInfo, password: password });
    }
  };

  /*
    |--------------------------------
    | Confirm Password error hanlder
    | -------------------------------
    */

  const confirmPasswordHandler = (e) => {
    const passord = userInfo.password;
    const confirmPassword = e.target.value;

    if (confirmPassword === "") {
      setError({
        ...error,
        passwordMatchError: "Confirm password must not be empty ",
      });
    } else if (!(passord === confirmPassword)) {
      setError({ ...error, passwordMatchError: "Password does not match" });
      // setUserInfo({...userInfo,password:""})
    } else {
      setError({ ...error, passwordMatchError: "" });
      setUserInfo({ ...userInfo, password: passord });
    }
  };

  /*
    |-------------------------------------------------------------------------
    | name, imgURL , email, password and confirm password validation End
    | ------------------------------------------------------------------------
    */

  // Auth data receive from AuthContext api [ Authprovide.js file ]
  const {
    registerWithGoogle,
    updateUserProfileNameAndImgUrl,
    registerWithGithub,
    registerWithEmailAndPassword,
  } = useContext(AuthContext); // context api

  const navigate = useNavigate();

  // 1. google provider login

  const googleLoginHandler = () => {
    registerWithGoogle()
      .then((result) => {
        toast.success("User Register Success ");
        navigate("/");
      })
      .catch((error) => {
        setError({ ...error, generalError: error.message });
      });

    //loginWithGoogle = singInWithPopUp ( which is firebase method)
    // loginWithGoogle return promise
  };

  // 2. gihub register user create

  const githubHandler = () => {
    registerWithGithub()
      .then((result) => {
        toast.success("User Register Success ");
        navigate("/");
      })
      .catch((error) => {
        setError({ ...error, generalError: error.message });
      });

    // registerWithGithub = singInWithPopUp ( which is firebase method)
    // registerWithGithub return promise
  };

  // 3. register/signup user with email and password
  const submitHandler = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((result) => {
        updateUserProfileNameAndImgUrl(userInfo.name, userInfo.imgUrl)
          .then(() => {
            toast.success("User Register Successfully ");
            navigate("/");
            console.log(result.user);
          })
          .catch((error) => {
            setError({ ...error, generalError: error.message });
          });
      })
      .catch((error) => {
        setError({ ...error, generalError: error.message });
      });
  };

  // Registration Animation (lottie animation)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: RegisterAnimation,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice"
    // }
  };

  return (
    <div className="pb-14 bg-white ">
      <div className="flex justify-center px-10 md:px-0">
        <div className="w-full md:w-6/12 mt-14">
          <div className="card-body md:w-[500px] bg-[#5352ed] rounded-md  md:ml-48 shadow-lg">
            {/* login form start */}

            <form onSubmit={submitHandler}>
              <div className="form-control">
                {/* <label className="label">
                           <span className="label-text text-white">Name</span>
                       </label> */}
                <input
                  type="text"
                  onChange={nameHandler}
                  name="name"
                  placeholder="Full name"
                  className="input input-bordered  mb-2   text-gray-800 bg-slate-50 "
                  required
                />
                {error.nameError && (
                  <label className="label">
                    <p className="label-text-alt link text-white link-hover">
                      {error.nameError}
                    </p>
                  </label>
                )}
              </div>

              <div className="form-control">
                {/* <label className="label">
                           <span className="label-text text-white">Image Url</span>
                       </label> */}
                <input
                  type="text"
                  onChange={imgUrlHandler}
                  name="imgUrl"
                  placeholder="Image url"
                  className="input input-bordered mb-2   text-gray-800 bg-slate-50 "
                  required
                />

                {error.imgUrlError && (
                  <label className="label">
                    <p className="label-text-alt link text-white link-hover">
                      {error.imgUrlError}
                    </p>
                  </label>
                )}
              </div>

              <div className="form-control">
                {/* <label className="label">
                           <span className="label-text text-white">Email</span>
                       </label> */}
                <input
                  onChange={emailHandler}
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered mb-2  text-gray-800 bg-slate-50 "
                  required
                />
                {error.emailError && (
                  <label className="label">
                    <p className="label-text-alt link text-white link-hover">
                      {error.emailError}
                    </p>
                  </label>
                )}
              </div>

              <div className="form-control">
                {/* <label className="label">
                           <span className="label-text text-white">Password</span>
                       </label> */}

                <input
                  type="password"
                  onChange={passwordHandler}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered mb-2 text-gray-800 bg-slate-50 "
                  required
                />

                {error.passwordError && (
                  <label className="label">
                    <p className="label-text-alt link text-white link-hover">
                      {error.passwordError}
                    </p>
                  </label>
                )}
              </div>

              <div className="form-control">
                {/* <label className="label">
                           <span className="label-text text-white">Confirm Password</span>
                       </label> */}
                <input
                  type="password"
                  onChange={confirmPasswordHandler}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  className="input input-bordered mb-2 text-gray-800 bg-slate-50 "
                  required
                />

                {error.passwordMatchError && (
                  <label className="label">
                    <p className="label-text-alt link text-white link-hover">
                      {error.passwordMatchError}
                    </p>
                  </label>
                )}

                {error.generalError && (
                  <label className="label">
                    <p className="label-text-alt link text-white font-bold link-hover">
                      {error.generalError}
                    </p>
                  </label>
                )}

                <label className="label">
                  <span>
                    <small className="text-white">
                      Already have an account ?{" "}
                      <Link to={"/login"} className="text-white">
                        Login
                      </Link>
                    </small>
                  </span>
                </label>
              </div>

              <div className="form-control mt-3 mb-2">
                <button className="btn  btn-warning font-bold">Sign UP</button>
              </div>
            </form>

            {/* login form end */}

            {/* Google and Github login start */}

            <div className="flex gap-2">
              <div className="w-1/2">
                <Button
                  onClick={googleLoginHandler}
                  className="w-full"
                  gradientDuoTone="purpleToPink"
                >
                  <span className=" text-white font-bold">SignUp With</span>{" "}
                  <ImGoogle3 className="text-white text-2xl ml-2" />
                </Button>
              </div>
              <div className="w-1/2">
                <Button
                  onClick={githubHandler}
                  className="w-full"
                  gradientDuoTone="pinkToOrange"
                >
                  <span className=" text-white font-bold">SignUp With</span>{" "}
                  <GoMarkGithub className="text-white text-2xl ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden  md:w-2/5 md:flex md:justify-start md:items-center">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default Register;
