import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useRoute } from "./lib/router";

export default function App() {
  const route = useRoute();
  if (route === "/login") return <Login />;
  if (route === "/cadastro") return <Register />;
  return <Home />;
}
