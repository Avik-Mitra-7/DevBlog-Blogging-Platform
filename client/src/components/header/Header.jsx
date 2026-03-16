import { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  background: rgba(
    255,
    255,
    255,
    0.7
  ); /* Slightly more transparent for better glass effect */
  backdrop-filter: blur(15px); /* Increased blur for premium feel */
  -webkit-backdrop-filter: blur(15px);
  color: black;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const NavLinks = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;

  & > a {
    color: #444;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: #2874f0;
    }
  }
`;

const LogoutButton = styled(Button)`
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
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const logout = () => {
    sessionStorage.clear();
    navigate("/account");
  };

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <Component position="fixed">
      <Container>
        {/* Brand Name / Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            color: "#2874f0",
            cursor: "pointer",
            letterSpacing: "-0.5px",
          }}
          onClick={() => navigate("/")}
        >
          DevBlog
        </Typography>

        {isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LogoutButton
              onClick={logout}
              size="small"
              sx={{ padding: "2px 12px", fontSize: "12px" }}
            >
              Logout
            </LogoutButton>
            <IconButton onClick={() => setOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        ) : (
          /* Desktop Navigation */
          <NavLinks>
            {navItems.map((item) => (
              <Link key={item.label} to={item.path}>
                {item.label}
              </Link>
            ))}
            <LogoutButton onClick={logout} variant="contained">
              Logout
            </LogoutButton>
          </NavLinks>
        )}
      </Container>

      {/* Drawer with Glassmorphism */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            width: 250,
          },
        }}
      >
        <List sx={{ pt: 5 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              sx={{ textAlign: "center", py: 2 }}
            >
              <Typography
                sx={{ width: "100%", fontWeight: 600, color: "#444" }}
              >
                {item.label}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Component>
  );
};

export default Header;
