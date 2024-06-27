export const validateSignIn = (email, pwd) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const ispwdValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(pwd);
  if (!isEmailValid) return "Email is not valid";
  if (!ispwdValid) return "Password is not valid";

  return null;
};
