"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Dashboard = () => {
  console.log(process.env.API_URL);("Configte env ayarıyla,client tarafında da erilebiliyor API_URL");
  const router = useRouter();
  const logOut = () => {
    Cookies.remove("accessToken");
    router.push("/");
  };

  return (
    <div>
      <Link href="/">
        <nav>
          <h1>Home</h1>
        </nav>
      </Link>
      <div className="dashboard">
        <h1>You Are Logged In!</h1>
        <button
          type="submit"
          onClick={() => logOut()}
          style={{ backgroundColor: "#D93025", marginTop: "400px" }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
