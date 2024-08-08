import { useState } from "react";
import { postRegister } from "../api/auth";

export default function RegisterPage() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ",",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      values.email === "" ||
      values.password === "" ||
      values.username === ""
    ) {
      setError("작성하지 않은 필드가 있습니다.");
      return;
    }

    try {
      const { data } = await postRegister({
        username: values.username,
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", data.user.token);
    } catch (error) {
      console.log(error);
      setError("회원가입에 실패하였습니다.");
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="/login">Have an account?</a>
            </p>

            <ul className="error-messages">
              <li>{error}</li>
            </ul>

            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
