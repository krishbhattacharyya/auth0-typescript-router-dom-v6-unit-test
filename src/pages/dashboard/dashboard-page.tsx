import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../components/LogoutButton"

const DashboardPage = () => {
  const { user } = useAuth0();

  if (!user) {
    return <h1 className="content__title">
    Dashboard Page
  </h1>;
  }

  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Dashboard Page
      </h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            You can use the <strong>ID Token</strong> to get the profile
            information of an authenticated user.
          </span>
          <span>
            <strong>Only authenticated users can access this page.</strong>
          </span>
        </p>
        <div className="profile-grid">
          <div className="profile__header" data-testid="profile-section-heading">
            <img
              src={user.picture}
              alt="Profile"
              className="profile__avatar"
            />
            <div className="profile__headline">
              <h2 className="profile__title">{user.name}</h2>
              <span className="profile__description">{user.email}</span>
            </div>
          </div>
          <div className="profile__details">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;