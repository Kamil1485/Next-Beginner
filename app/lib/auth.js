export const isAuth = (cookies) => {
  console.log("AuthPage");
  console.log(cookies);
  console.log(cookies.has("accessToken"));
  if (cookies.has("accessToken")) {
    console.log("Giriş Başarılı");
    return true;
  }
  console.log("Hatalı veya Gecersiz Token");
  return false;
};
