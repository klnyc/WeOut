import { Navigation } from "../components/Navigation";

export const Home = ({ user }) => {
  return (
    <div className="home--page">
      <Navigation user={user} />
    </div>
  );
};
