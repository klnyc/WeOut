import { CircleBar } from "../components/CircleBar";

export const Home = ({ user }) => {
  return (
    <div className="home--page">
      <CircleBar user={user} />
    </div>
  );
};
