import { Outlet } from "react-router-dom";
import { Row, Col } from "antd";
import MenuBar from "./MenuBar";

const Root = () => {
  return (
    <>
      <Row>
        <Col span={6}>
          <MenuBar />
        </Col>
        <Col span={14}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Root;
