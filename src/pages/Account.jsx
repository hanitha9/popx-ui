
import MobileWrapper from "../components/MobileWrapper";

export default function Account() {
  return (
    <MobileWrapper>
      <h3>Account Settings</h3>

      <div className="profile">
        <img src="https://i.pravatar.cc/100" alt="profile" />
        <div>
          <strong>Marry Doe</strong>
          <p>Marry@gmail.com</p>
        </div>
      </div>

      <p className="bio">
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
    </MobileWrapper>
  );
}
