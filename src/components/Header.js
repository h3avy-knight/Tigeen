import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const Header = () => {
  const data = [
    {
      id: 1,
      button: "TAB ONE",
      component: <Tab1 />,
    },
    {
      id: 2,
      button: "TAB TWO",
      component: <Tab2 />,
    },
    {
      id: 3,
      button: "TAB THREE",
      component: <Tab3 />,
    },
  ];

  const [tabs] = useState(data);
  const [value, setValue] = useState(0);

  const { component } = tabs[value];

  return (
    <div className="header">
      <ul>
        {tabs.map((tab, i) => (
          <li
            //  className={`${i === value && "border-bottom"}`}
            key={tab.id}
          >
            <button
              className={`${i === value && "border-bottom"}`}
              onClick={() => setValue(i)}
            >
              {tab.button}
            </button>
          </li>
        ))}
      </ul>
      <div>{component}</div>
    </div>
  );
};

export default Header;
