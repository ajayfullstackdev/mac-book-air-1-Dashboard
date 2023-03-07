import React from "react";
import { profile } from "../utils/types";
import { RxFileText} from 'react-icons/rx';

function ProfileView({ image, name, email, past, upcoming, files }: profile) {
  return (
    <div className="flex flex-col w-full md:w-[25%] space-y-10 px-7 pt-7  items-center ">
      <div className="flex flex-col space-y-2 w-fit items-center">
        <img
          className="w-[92px] h-[92px] flex rounded-full object-cover"
          alt={name}
          src={image}
        />
        <h6 className="text-2xl font-bold">{name}</h6>
        <p className="text-gray-500 text-xs">{email}</p>
        <div className="flex flex-row w-full ">
          <div className="flex justify-center items-center w-3/6 border-r  border-gray-400 flex-col ">
            <p className="text-lg">{past}</p>
            <p className="text-xs text-gray-500">Past</p>
          </div>
          <div className="flex justify-center items-center w-3/6  flex-col ">
            <p className="text-lg">
              {upcoming.toString().length < 2 && "0"}
              {upcoming}
            </p>
            <p className="text-xs text-gray-500">Upcoming</p>
          </div>
        </div>
      </div>
      <button className="p-2 text-lg font-semibold w-full border-[1.5px] rounded-md border-gray-300">
        Send Message
      </button>
      <div className="flex flex-col w-full space-y-10">
        <h5 className="text-xl ">Files / Documents</h5>
        <div className="flex flex-col w-full space-y-3">
          {files.map((file) => (
            <div className="flex flex-row p-3 space-x-4 bg-[#F9F9F9] ">
              <RxFileText className="text-2xl" />
              <span>{file}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
