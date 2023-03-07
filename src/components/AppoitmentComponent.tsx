import React from "react";
import { appoitment } from "../utils/types";
import { RxFileText } from "react-icons/rx";

function AppoitmentComponent({ time, treatment, dentist, nurse }: appoitment) {
  return (
    <div className="flex space-y-3 flex-col md:flex-row w-full bg-white p-5 rounded-lg flex-wrap ">
      <div className="flex w-80 md:w-[30%] border-r  border-gray-400 flex-col ">
        <p className="text-3xl font-semibold">{time.date}</p>
        <p className="text-xs text-gray-500">
          {time.startTime} - {time.endTime}
        </p>
      </div>
      <div className="flex md:pl-[5%] w-80 md:w-[30%] border-r  border-gray-400 flex-col ">
        <p className="text-xs text-gray-500">Treatment</p>
        <p className="text-lg">{treatment}</p>
      </div>
      <div className="flex md:pl-[5%] w-80 md:w-[17%] md:border-0 border-r  border-gray-400  flex-col ">
        <p className="text-xs text-gray-500">Dentist</p>
        <p className="">{dentist}</p>
      </div>
      <div className="flex  md:pl-[5%] w-80 md:w-[17%] md:border-0 border-r border-gray-400 flex-col ">
        <p className="text-xs text-gray-500">Nurse</p>
        <p className="">{nurse}</p>
      </div>
      <button className="flex flex-row space-x-1 items-center">
        <RxFileText className="text-xl text-blue-600" />
        <span className="text-xs text-blue-600">Note</span>
      </button>
    </div>
  );
}

export default AppoitmentComponent;
