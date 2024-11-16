import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToCreateAvatar = () => {
    navigate("/avatar-creation");
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
