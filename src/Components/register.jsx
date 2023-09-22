import React from "react";
import { Button, Checkbox, Form, Input, Card } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import questionmark from "../images/questionmark.png";
import linkidln from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import google from "../images/google.png";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  const formItemLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
    },
  };

  return (
    <Card style={{ width: "100%" }}>
      <div style={{display: "flex", flexDirection: 'column', alignSelf: 'center'}} >
        
      <Form
        layout="vertical"
        size="middle"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onFinish={onFinish}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <ArrowLeftOutlined style={{ marginRight: "10px", cursor: 'pointer' }} />{" "}
          <p style={{ marginRight: "20px" }}>Back</p>
        </div>

        <h3 style={{ marginBottom: "10px" }}>Welcome To Lystproof!</h3>

        <Form.Item
          label="Organization Name:"
          name="organization"
          rules={[
            {
              required: false,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Name:"
          name="name"
          rules={[
            {
              required: false,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email:"
          name="email"
          rules={[
            {
              required: false,
             
            },
            {
              type: "email",
              message: 'Please enter a valid email address!',
            },
          ]}
        >
          <Input  />
        </Form.Item>

        
        <div style={{display: 'flex', alignItems: 'center'}} >
        <label style={{marginRight: '10px'}}>Password:</label>
        <img src={questionmark} alt="Question Mark" />
        </div>
        <Input.Password/>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            I accept to the <a style={{textDecoration: 'underline'}} >terms and conditions</a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ background: "#6F36BC" }}
          >
            Register Now <ArrowRightOutlined style={{ marginLeft: "5px" }} />
          </Button>
        </Form.Item>

        <div className="icons">
          <div style={{ marginBottom: "10px" }}>Sign up with</div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <img src={twitter} alt="Twitter" />
            <img src={linkidln} alt="Linkdln" />
            <img src={google} alt="Google" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontWeight: "bolder" }}>
            Already have and account? <a style={{textDecoration: 'underline'}}>Login</a>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ marginTop: "50px" }}>©2022, MindsBeam Technologies Inc</p>
        </div>
      </Form>
      </div>
    </Card>
  );
};

export default Register;
