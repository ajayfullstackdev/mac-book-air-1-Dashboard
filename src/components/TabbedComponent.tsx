import { useState } from "react";
import { Tab } from "@headlessui/react";
import AppoitmentComponent from "./AppoitmentComponent";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [appoitments] = useState({
    "Upcoming Appointments": [
      {
        id: 1,
        time: {
          date: "26 Nov '19",
          startTime: "09.00",
          endTime: "10.00",
        },
        treatment: "Open Access",
        dentist: "Drg. Adam H.",
        Nurse: "Jessicamilla",
      },
      {
        id: 2,
        time: {
          date: "12 Nov '19",
          startTime: "09.00",
          endTime: "10.00",
        },
        treatment: "Root Canal",
        dentist: "Drg. Adam H.",
        Nurse: "Jessicamilla",
      },
    ],
    "Past Appoitments": [
      {
        id: 1,
        time: {
          date: "02 Dec '19",
          startTime: "02.00",
          endTime: "05.00",
        },
        treatment: "Open Access",
        dentist: "Drg. Adam H.",
        Nurse: "Jessicamilla",
      },
    ],
    "Medical Records": [
      {
        id: 1,
        time: {
          date: "29 Nov '19",
          startTime: "09.00",
          endTime: "10.00",
        },
        treatment: "Open Access",
        dentist: "Drg. Adam H.",
        Nurse: "Jessicamilla",
      },
      {
        id: 2,
        time: {
          date: "11 Nov '19",
          startTime: "09.00",
          endTime: "10.00",
        },
        treatment: "Root Canal",
        dentist: "Drg. Adam H.",
        Nurse: "Jessicamilla",
      },
    ],
  });

  return (
    <div className="w-full  px-2 py-16 ">
      <Tab.Group>
        <Tab.List className="flex max-w-2xl space-x-1 rounded-xl bg-[#F8F8F8] p-2 w-full ">
          {Object.keys(appoitments).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-fit px-8 rounded-lg py-2.5 text-xs md:text-sm font-medium leading-5 text-blue-700 ",
                  selected
                    ? "bg-white"
                    : "text-black hover:bg-gray-500 hover:text-white "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2  flex flex-col">
          {Object.values(appoitments).map((appoitments, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-[#F8F8F8] py-3",
              )}
            >
              <div className="flex flex-row justify-between  border-b border-gray-400 w-full p-5 mb-5">
                <p>{appoitments[0].treatment}</p>
                <button className="bg-white px-5 py-2 rounded-md text-sm text-zinc-700    ">Show Previous Treatments</button>
              </div>
              <div className="flex flex-col w-full space-y-3 px-5">
                {appoitments.map((appoitment) => (
                  <AppoitmentComponent
                    time={appoitment.time}
                    dentist={appoitment.dentist}
                    nurse={appoitment.Nurse}
                    treatment={appoitment.treatment}
                  />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
