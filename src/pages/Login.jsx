
import MobileWrapper from "../components/MobileWrapper";

export default function Login() {
  return (
    <MobileWrapper>
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <label>Email Address</label>
      <input placeholder="Enter email address" />

      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <button className="primary disabled">Login</button>
    </MobileWrapper>
  );
}
