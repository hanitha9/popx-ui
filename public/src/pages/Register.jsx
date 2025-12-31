
import MobileWrapper from "../components/MobileWrapper";

export default function Register() {
  return (
    <MobileWrapper>
      <h2>Create your PopX account</h2>

      <label>Full Name*</label>
      <input />

      <label>Phone number*</label>
      <input />

      <label>Email address*</label>
      <input />

      <label>Password*</label>
      <input type="password" />

      <label>Company name</label>
      <input />

      <p>Are you an Agency?*</p>
      <div>
        <input type="radio" checked /> Yes
        <input type="radio" /> No
      </div>

      <button className="primary">Create Account</button>
    </MobileWrapper>
  );
}
