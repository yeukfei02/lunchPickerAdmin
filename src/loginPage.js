import { Login, LoginForm } from "react-admin";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  main: { background: "#fde8a0" },
  button: { background: "red" },
  //   avatar: {
  //     background: "url(//cdn.example.com/background.jpg)",
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "contain",
  //     height: 80,
  //   },
  //   icon: { display: "none" },
};

const CustomLoginForm = withStyles(styles)(LoginForm);

const CustomLoginPage = (props) => (
  <Login loginForm={<CustomLoginForm />} {...props} />
);

export default withStyles(styles)(CustomLoginPage);
