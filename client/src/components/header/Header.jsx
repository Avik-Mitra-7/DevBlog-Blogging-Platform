import { AppBar, Toolbar, styled, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// Glassmorphism effect: Frosted glass look
const Component = styled(AppBar)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  color: black;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
`;

const Container = styled(Toolbar)`
  justify-content: center;
  gap: 20px;

  & > a {
    padding: 10px 15px;
    color: #444;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    position: relative;
    transition: color 0.3s ease;

    /* Topper Move: Animated Underline Effect */
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 5px;
      left: 15px;
      background-color: #2874f0;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #2874f0;
    }

    &:hover::after {
      width: calc(100% - 30px);
    }
  }
`;

const LogoutButton = styled(Button)`
  margin-left: 20px;
  background: #ff4d4d;
  color: #fff;
  text-transform: none;
  font-weight: 600;
  border-radius: 8px;
  padding: 5px 20px;
  transition: all 0.3s ease;

  &:hover {
    background: #e60000;
    box-shadow: 0 4px 12px rgba(255, 77, 77, 0.3);
    transform: scale(1.05);
  }
`;

const Header = () => {
  const navigate = useNavigate();

  // Ensuring logout clears storage for real security
  const logout = () => {
    sessionStorage.clear();
    navigate("/account");
  };

  return (
    <Component position="fixed">
      <Container>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>

        {/* Replacing the simple link with a stylish Button */}
        <LogoutButton onClick={logout} variant="contained">
          Logout
        </LogoutButton>
      </Container>
    </Component>
  );
};

export default Header;
