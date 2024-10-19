import { RiProjectorFill } from "react-icons/ri";
import { PiChartLineUpBold } from "react-icons/pi";
import { FaMicrophone, FaVideo } from "react-icons/fa";
import { FaPeopleGroup, FaHandshake } from "react-icons/fa6";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      icon: <RiProjectorFill className="size-[55%] md:size-[60%]" />,
      title: "Project Management",
      description: "Partner with us for seamless project execution.",
    },
    {
      id: 2,
      icon: <PiChartLineUpBold className="size-[55%] md:size-[60%]" />,
      title: "Capacity Building",
      description:
        "Nurture talent and skills with our capacity building services.",
    },
    {
      id: 3,
      icon: <FaPeopleGroup className="size-[55%] md:size-[60%]" />,
      title: "Consultancy Services",
      description: "Elevate your strategy with our consultancy services.",
    },
    {
      id: 4,
      icon: <FaMicrophone className="size-[55%] md:size-[60%]" />,
      title: "Event Host/Management",
      description: "Let us handle the details while you enjoy the moment.",
    },
    {
      id: 5,
      icon: <FaHandshake className="size-[55%] md:size-[60%]" />,
      title: "Community Development",
      description: "Championing development where it matters most.",
    },
    {
      id: 6,
      icon: <FaVideo className="size-[55%] md:size-[60%]" />,
      title: "Content Development",
      description:
        "Unleash your creativity and transform ideas into impactful stories.",
    },
  ];
  return (
    <div className="w-full">
      <div className="layout">
        <h2 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl text-primary my-4">
          Our Service
        </h2>
        <p className="text-center text-base md:text-lg lg:text-xl text-secondary">
          Explore our diverse offerings and experience unparalleled excellence
          from tailored <br /> solutions to personalized consultations.
        </p>
        <div className="mt-10 md:mt-16 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {serviceData.map((item) => (
            <div
              className="flex items-center flex-col w-[90%] md:w-full mx-auto bg-white py-5 rounded-xl shadow-md "
              key={item.id}
            >
              <div className="size-14  md:size-16 flex items-center justify-center rounded-full bg-primary text-white">
                {item.icon}
              </div>
              <h3 className="my-4 text-primary text-lg md:text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-secondary text-base px-2 md:text-lg text-center ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
