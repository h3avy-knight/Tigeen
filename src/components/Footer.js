import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
import { MdAlarm, MdMovie } from "react-icons/md";

const Footer = () => {
  const data = [
    {
      id: 1,
      icon: <IoMailSharp color="white" size={25} />,
      title: "MAILS",
    },
    {
      id: 2,
      icon: <MdAlarm color="white" size={25} />,
      title: "ALARMS",
    },
    {
      id: 1,
      icon: <MdMovie color="white" size={25} />,
      title: "MOVIES",
    },
  ];

  const [tabs] = useState(data);
  const [value, setValue] = useState(0);

  return (
    <div className="footer">
      <div className="footer-content">
        <AiOutlineMenu color="white" size={25} />
        <ul>
          {tabs.map((tab, i) => (
            <li className={`${i === value && "border-top"}`} key={tab.id}>
              {tab.icon}
              <h1 onClick={() => setValue(i)}>
                {tab.button}
                {tab.title}
              </h1>
            </li>
          ))}
        </ul>
        <AiOutlineMenu color="white" size={25} />
      </div>
    </div>
  );
};

export default Footer;
