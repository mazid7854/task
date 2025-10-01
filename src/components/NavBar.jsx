import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [healthStatus, setHealthStatus] = useState("");
  console.log(healthStatus);
  const baseUrl = process.env.backend_base_url;

  useEffect(() => {
    axios
      .get("http://192.168.1.136:8000/health")
      .then((res) => setHealthStatus(res.data.status));
  }, []);
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center m-auto">
      <h1>My Application</h1>
      <ul className="flex space-x-4">
        <li>
          <Link
            className={`animate-pulse ${
              healthStatus === "healthy" ? "text-green-500" : "text-red-500"
            } `}
          >
            health
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/collections">Collections</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
