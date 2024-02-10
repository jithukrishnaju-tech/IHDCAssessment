import Header from "./components/Header";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="my-2">
      <Header />
      <Outlet />
    </div>
  );
};
export default App;
