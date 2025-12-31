
import { Link } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";

export default function Welcome() {
  return (
    <MobileWrapper>
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <Link to="/register">
        <button className="primary">Create Account</button>
      </Link>

      <Link to="/login">
        <button className="secondary">Already Registered? Login</button>
      </Link>
    </MobileWrapper>
  );
}
