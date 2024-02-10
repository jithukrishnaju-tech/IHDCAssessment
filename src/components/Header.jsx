import house from "../assets/house.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-slate-400 w-full h-12 flex items-center justify-around">
      <div className="w-6/12 flex justify-center items-center">
        <img src={house} className="w-28 auto "></img>
      </div>
      <div className=" w-7/12">
        <Link to="/">XYZ SYSTEMS LLP</Link>
      </div>
    </div>
  );
};

export default Header;
