import React from "react";
import { Alert, Button } from "antd";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Alert
        message="Page not found"
        description="The url you want to visit does not exist"
        type="error"
        showIcon
      />
      <Link to="/">
        <Button type="dashed">Back to home</Button>
      </Link>
    </>
  );
};

export default Error;
