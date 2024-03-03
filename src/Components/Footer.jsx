import Discord from "../assets/Icons/Discord";
import Facebook from "../assets/Icons/Facebook";
import icon from "../assets/Icons/Icon.png";
import Instagram from "../assets/Icons/Instagram";
import LinkedIn from "../assets/Icons/LinkedIn";
import Telegram from "../assets/Icons/Telegram";
import Twitter from "../assets/Icons/Twitter";

const Footer = () => {
  return (
    <div className="flex justify-around gap-2 py-16">
      <div>
        <p className="font-bold text-xl flex gap-1 items-center">
          <img
            src={icon}
            alt="icon"
            width="30"
            height="30"
            className="bg-white rounded-full"
          />
          TrendSetters
        </p>
        <div className="mt-4">
          <p>Signup for our NewsLetter</p>
          <input
            type="text"
            placeholder="Enter your Email"
            className="rounded-full py-1 px-4 mt-2"
          />
        </div>
        <p className="mt-5">© Copyright - TrendSetters</p>
      </div>
      <div className="flex gap-10">
        <div>
          <p className="font-bold text-xl mb-1">Contacts</p>
          <p className="mb-1">Info@trendSetters.com</p>
          <p className="mb-1">10000 123 12345</p>
          <div className="flex gap-1">
            <Facebook />
            <Instagram />
            <Twitter />
            <Telegram />
            <LinkedIn />
            <Discord />
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mb-1">For Clients</p>
          <p className="mb-1">About Us</p>
          <p className="mb-1">Pricing</p>
          <p className="mb-1">FAQ</p>
        </div>
        <div>
          <p className="font-bold text-xl mb-1">Legal</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
