import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import routes from "../routes/routes";
const WelcomePage = () => {
  const navigate = useNavigate();

  const goToCreateAvatar = () => {
    navigate(routes.avatarCreation);
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={goToCreateAvatar}>
        Go to create Avatar
      </Button>
    </div>
  );
};

export default WelcomePage;
