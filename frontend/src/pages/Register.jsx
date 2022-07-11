import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
const Register = () => {
  const [formDta, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const { name, email, password, password_confirm } = formDta;
  const onChange = () => {};
  const onSubmit=()=>{
    
  }

  return <>
    <section className="heading">
      <h1>
        <FaUser />
        Register
        <p>Please create an account</p>
      </h1>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email adress"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password_confirm"
            name="password_confirm"
            value={password_confirm}
            placeholder="Confirm your password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Register</button>
        </div>
      </form>
    </section>
  </>
};

export default Register;
