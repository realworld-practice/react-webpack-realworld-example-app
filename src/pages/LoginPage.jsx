import { useState } from "react";
import { postLogin } from "../api/auth";

export default function LoginPage() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.email === "") {
      setError("이메일을 입력해주세요.");
      return;
    } else if (values.password === "") {
      setError("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const res = await postLogin({
        email: values.email,
        password: values.password,
      });
    } catch (error) {
      console.log(error);
      setError("존재하지 않는 아이디/비밀번호 입니다.");
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/register">Need an account?</a>
            </p>

            <ul className="error-messages">
              <li>{error}</li>
            </ul>

            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
