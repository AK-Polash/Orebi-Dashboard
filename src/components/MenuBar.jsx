import React from "react";
import {
  ReconciliationOutlined,
  ApartmentOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  AccountBookOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Product", "sub1", <ReconciliationOutlined />, [
    getItem(
      "",
      "",
      null,
      [
        getItem("Add Product", "addProduct"),
        getItem("All Products", "2"),
        getItem("Edit Products", "3"),
      ],
      "group"
    ),
  ]),
  {
    type: "divider",
  },
  getItem("Category", "sub2", <ShopOutlined />, [
    getItem("Add Category", "5"),
    getItem("All Category", "6"),
    getItem("Edit Category", "7"),
  ]),
  {
    type: "divider",
  },
  getItem("Sub-Category", "sub4", <ApartmentOutlined />, [
    getItem("Add Sub-Category", "9"),
    getItem("All Sub-Category", "10"),
    getItem("Edit Sub-Category", "11"),
  ]),
  {
    type: "divider",
  },
  getItem("Discount", "sub5", <AccountBookOutlined />, [
    getItem("Add Add-Discount", "12"),
    getItem("All All-Discount", "13"),
    getItem("Edit Edit-Discount", "14"),
  ]),
  {
    type: "divider",
  },
  getItem("Users", "sub6", <UsergroupAddOutlined />, [
    getItem(
      "",
      "",
      null,
      [getItem("User List", "15"), getItem("Merchant List", "login")],
      "group"
    ),
  ]),
];

const MenuBar = () => {
  const navigate = useNavigate();
  const onClick = (e) => navigate(e.key);

  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["addProduct"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default MenuBar;
