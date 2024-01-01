export const LoginAuthentication = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await fetch("https://booking-hotel-api.onrender.com/customer/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to checkLoggedIn");
      }

      const data = await response.json();
      return data.user;
    } catch (error) {
      throw new Error("Failed to checkLoggedIn");
    }
  } else {
    return null;
  }
};
