import React from "react";
import { Button, Checkbox, Form, Input, Card } from "antd";
import wallpaper3 from "../images/wallpaper3.svg";

const Background = () => {
  return (
    <div className={"container"}>
      <div className={"background_container"}>
        <h1 className={"background_heading"}>
          Automate employment verification of your former and current employees.
        </h1>
        <div className={"background_image_container"}>
          <div className={"background_image_container1"}>
            <img className={wallpaper3} src={wallpaper3} alt="" />
          </div>
        </div>
      </div>
      <div className="loginContainer" >
        <p style={{fontWeight: 'bolder'}}>
          We are just one click away.
          <button className={"loginButton"}>Contact us</button>
        </p>
      </div>
    </div>
  );
};

export default Background;
