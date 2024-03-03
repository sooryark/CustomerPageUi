import DashboardIcon from "../assets/Icons/DashboardIcon";
import ProfileIcon from "../assets/Icons/ProfileIcon";
import icon from "../assets/Icons/Icon.png";

const Navbar = () => {
  return (
    <div className="flex text-white justify-around gap-2 items-center h-[70px]">
      <div>
        <p className="font-bold flex gap-1 items-center">
          <img
            src={icon}
            alt="icon"
            width="30"
            height="30"
            className="bg-white rounded-full"
          />
          TrendSetters
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <p className="flex gap-1 items-center">
          <DashboardIcon />
          Dashboard
        </p>
        <p className="flex gap-1 items-center">
          <ProfileIcon />
          Profile
        </p>
        <button className="bg-[#387ADF] py-2 px-4 rounded-full">Upgrade</button>
      </div>
    </div>
  );
};

export default Navbar;
