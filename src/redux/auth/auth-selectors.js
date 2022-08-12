const getIsAuthenticated = state => state.auth.isAuthenticated;
const getIsRegistered = state => state.auth.isRegistered;
const getUsername = state => state.auth.user.fullName;
const getUserId = state => state.auth.user.id;
const getUserEmail = state => state.auth.user.email;

export {
  getUsername,
  getIsAuthenticated,
  getUserId,
  getUserEmail,
  getIsRegistered,
};
