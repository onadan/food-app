import appstore from "../assets/icons/appstore.svg";
import playstore from "../assets/icons/playstore.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import youtube from "../assets/icons/youtube.svg";

const Footer = () => {
  const date = 2022;

  return (
    <div className="bg-[#0B0D17]">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-around gap-20 pt-10">
          <div className="flex flex-col gap-4">
            <header className="font-medium text-lg">Company</header>
            <ul className="font-thin text-sm">
              <li>About Us</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <header className="font-medium text-lg">Support</header>
            <ul className="font-thin text-sm">
              <li>Help Center</li>
              <li>Safety Center</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <header className="font-medium text-lg">Legal</header>
            <ul className="font-thin text-sm">
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Dispute resolution</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <header className="font-medium text-lg">Install App</header>
            <img src={playstore} alt="play-store-button" className="max-w-[170px] h-auto"/>
            <img src={appstore} alt="app-store-button" className="max-w-[170px] h-auto"/>
          </div>
        </div>

        <hr className="my-10 mb-5"/>
        <div className="pb-4 flex flex-col gap-4 items-center sm:flex-row sm:justify-between">
          <div> &copy; {date} Everybite. All rights reserved. </div>
          <div className="flex gap-2">
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;