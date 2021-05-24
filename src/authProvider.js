const authProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    if (username === "admin@admin.com" && password === "admin") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }
    // accept all username/password combinations
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username") === "admin@admin.com" &&
      localStorage.getItem("password") === "admin"
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
