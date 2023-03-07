import React from "react";
import { BsPlus } from "react-icons/bs";
import { navComponent } from "../utils/types";
import { BiUser } from "react-icons/bi";
import { AiOutlineFolderOpen, AiOutlinePlus } from "react-icons/ai";
import { GrDocumentUpload, GrDocumentText } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
function NavigationBar() {
  const navigationComponents: navComponent[] = [
    {
      title: "new",
      icon: <AiOutlinePlus className="text-[30px]" />,
    },
    {
      title: "patient",
      icon: <BiUser className="text-[30px]" />,
    },
    {
      title: "folder",
      icon: <AiOutlineFolderOpen className="text-[30px]" />,
    },
    {
      title: "upload",
      icon: <GrDocumentUpload className="text-[30px]" />,
    },
    {
      title: "report",
      icon: <GrDocumentText className="text-[30px]" />,
    },
    {
      title: "setting",
      icon: <IoSettingsOutline className="text-[30px]" />,
    },
    {
      title: "logout",
      icon: <FiLogOut className="text-[30px]" />,
    },
  ];
  return (
    <div className="hidden md:flex flex-col min-h-screen w-20  items-center justify-between border-r border-gray-300 pb-5">
      <div className="flex justify-center items-center w-full h-[71px] bg-[#29B712] ">
        <svg
          width="46"
          height="26"
          viewBox="0 0 46 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.8059 0.669393C28.2973 0.800945 28.6474 1.23597 28.6717 1.74526L29.6023 21.2041L32.0658 19.9776C32.514 19.7545 33.0541 19.8422 33.4092 20.1957L35.8642 22.6401L39.1796 20.9895C39.5071 20.8265 39.8917 20.8265 40.2192 20.9895L43.7644 22.7545L48.8761 21.5178C48.5891 20.9382 49.4542 21.23 48.8761 21.5178C49.1632 22.0973 49.4542 21.23 48.8761 21.5178L44.2842 25.112C43.9567 25.275 43.5721 25.275 43.2446 25.112L39.6994 23.347L36.1542 25.112C35.706 25.3351 35.1659 25.2474 34.8108 24.8939L32.3559 22.4495L29.0404 24.1001C28.6871 24.276 28.269 24.2613 27.9288 24.0611C27.5886 23.8608 27.3722 23.5019 27.3533 23.1069L26.5124 5.52518L21.3746 13.5641C21.1568 13.9049 20.7789 14.1089 20.3752 14.1035C19.9715 14.0982 19.5991 13.8843 19.3903 13.5378L14.9455 6.16171L12.3985 22.2228C12.3402 22.591 12.1105 22.9093 11.78 23.0802C11.4495 23.2511 11.0576 23.2541 10.7245 23.0882L5.37659 20.4258L0.353655 23.9898C-0.104305 24.4458 0.252608 23.8764 0.252608 23.8764C-0.0958691 23.5307 -0.104305 24.4458 0.353655 23.9898L4.32327 18.1719C4.67831 17.8184 5.21845 17.7307 5.66663 17.9539L10.3398 20.2804L13.1389 2.62929C13.2159 2.14347 13.5875 1.75763 14.0691 1.66333C14.5506 1.56903 15.0397 1.78635 15.2934 2.2074L20.4198 10.7146L26.5203 1.16928C26.7947 0.73997 27.3145 0.537842 27.8059 0.669393Z"
            fill="white"
          />
        </svg>
      </div>
      {navigationComponents.map((item, index) => (
        <div className="flex flex-col space-y-2 items-center cursor-pointer  ">
          {item.icon}
          <h5 className="font-light text-gray-500 ">{item.title}</h5>
        </div>
      ))}
    </div>
  );
}

export default NavigationBar;
