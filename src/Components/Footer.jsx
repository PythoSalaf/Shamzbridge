import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { id: 1, icon: <FaFacebookF /> },
    { id: 2, icon: <FaTwitter /> },
    { id: 3, icon: <FaLinkedin /> },
    { id: 4, icon: <FaWhatsapp /> },
    { id: 5, icon: <FaYoutube /> },
    { id: 6, icon: <FaInstagram /> },
  ];
  return (
    <div className="w-full bg-primary text-white py-4">
      <div className="layout flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="">
          <p className="">© ShamzBridge. All rights reserved</p>
          <p className="">
            Office address: 4th Floor, Labour House, Central Business District,
            Abuja
          </p>
        </div>
        <div className="w-full md:w-auto mb-6 md:mb-0 grid grid-cols-6 gap-5">
          {socialIcons.map((icon) => (
            <div
              className="bg-white rounded-full cursor-pointer size-7 md:size-10 text-primary flex items-center justify-center"
              key={icon.id}
            >
              {icon.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
