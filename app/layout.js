import Navbar from "./navbar/page";
import Footer from "./footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <p style={{border:"2px solid red",height:"400px"}}>{children}</p>
      </body>
      <Footer />
    </html>
  );
}
