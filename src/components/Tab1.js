import React, { useState } from "react";
import Checkbox from "react-custom-checkbox";
import { AiFillPlayCircle, AiOutlineCheck } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Switch from "react-switch";
import { addColor } from "../features/addData/appSlice";
import { MdEdit } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

const Tab1 = () => {
  const [checked, setChecked] = useState(false);
  const [presentColor, setPresentColor] = useState();
  const dispatch = useDispatch();
  dispatch({ type: addColor });
  console.log(presentColor);
  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);
  const [center, setCenter] = useState(false);
  const [disable, setDisable] = useState(false);

  return (
    <div className="tab-1">
      <div className="content">
        <div
          className="tab-1_icons"
          style={{
            width: "100%",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "30px 20px",
            borderBottom: "1px solid #dfd9d9",
          }}
        >
          <MdEdit size={50} style={{ margin: "0 10px" }} />
          <div
            style={{ width: "100%", backgroundColor: "#dfd9d9", height: "1px" }}
          ></div>
          <IoSettingsSharp size={50} style={{ margin: "0 10px" }} />
          <div
            style={{ width: "100%", backgroundColor: "#dfd9d9", height: "1px" }}
          ></div>
          <AiFillPlayCircle size={50} style={{ margin: "0 10px" }} />
        </div>
        <div className="tab1_form">
          <div className="tab1_column-1" style={{ padding: "8px 30px" }}>
            <p>I want a Company Logo</p>
            <div className="logo-adjust">
              <div>
                <Checkbox
                  icon={<AiOutlineCheck color="#174A41" size={14} />}
                  name="my-input"
                  checked={left}
                  borderColor="#808080"
                  style={{ cursor: "pointer" }}
                  labelStyle={{ marginLeft: 5, userSelect: "none" }}
                  borderRadius={10}
                  label="Left"
                />
              </div>
              <div>
                <Checkbox
                  icon={<AiOutlineCheck color="#174A41" size={14} />}
                  name="my-input"
                  checked={right}
                  borderColor="#808080"
                  style={{ cursor: "pointer" }}
                  labelStyle={{ marginLeft: 5, userSelect: "none" }}
                  borderRadius={10}
                  label="Right"
                />
              </div>
              <div>
                <Checkbox
                  icon={<AiOutlineCheck color="#174A41" size={14} />}
                  name="my-input"
                  checked={center}
                  borderColor="#808080"
                  style={{ cursor: "pointer" }}
                  labelStyle={{ marginLeft: 5, userSelect: "none" }}
                  borderRadius={10}
                  label="Center"
                />
              </div>
              <div>
                <Checkbox
                  icon={<AiOutlineCheck color="#174A41" size={14} />}
                  name="my-input"
                  checked={disable}
                  borderColor="#808080"
                  style={{ cursor: "pointer" }}
                  labelStyle={{ marginLeft: 5, userSelect: "none" }}
                  borderRadius={10}
                  label="Disable"
                />
              </div>
            </div>
          </div>
          <div className="tab1_column-2">
            <p>Present Color</p>
            <div className="color-adjust">
              <label className="radio">
                <input
                  type="radio"
                  value="Blue (#1976d2)"
                  name="color"
                  onChange={(e) => setPresentColor(e.target.value)}
                />
                <span className="margin-left">Blue (#1976d2)</span>
              </label>
              <label className="radio-2">
                <input
                  type="radio"
                  value="Red (#ff0000)"
                  name="color"
                  onChange={(e) => setPresentColor(e.target.value)}
                />
                <span className="margin-left">Red (#ff0000)</span>
              </label>
            </div>
          </div>
          <div className="switch-container">
            <div className="switch-content_containt">
              <Switch
                onChange={() => handleChange()}
                checked={checked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
              />
              <p>I want a Header</p>
            </div>
            <div className="switch-content_containt">
              <Switch
                onChange={() => handleChange()}
                checked={checked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
              />
              <p>I want a Footer</p>
            </div>
            <div className="switch-content_containt">
              <Switch
                onChange={() => handleChange()}
                checked={checked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
              />
              <p>I want a Drawer Overlay mode (requires Header or Footer)</p>
            </div>
            <div className="switch-content_containt">
              <Switch
                onChange={() => handleChange()}
                checked={checked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
              />
              <p>I want a left-side Drawer</p>
            </div>
            <div className="switch-content_containt">
              <Switch
                onChange={() => handleChange()}
                checked={checked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
              />
              <p>I want a right-side Drawer</p>
            </div>
            <div className="switch-content_containt">
              <Switch
                onChange={() => handleChange()}
                checked={checked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
              />
              <p>I want navigation tabs (requires Header)</p>
            </div>
            <div className="switch-content_containt">
              <Switch
                onChange={() => handleChange()}
                checked={checked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
              />
              <p>I want Bottom Menu (requires Footer)</p>
            </div>
            <hr />
            <button button>CONTINUE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
