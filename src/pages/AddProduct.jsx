import React, { useState } from "react";
import { Input, Select, Tag } from "antd";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const options = [
  {
    value: "gold",
  },
  {
    value: "lime",
  },
  {
    value: "green",
  },
  {
    value: "cyan",
  },
];

const stores = [
  {
    value: "store one",
  },
  {
    value: "store two",
  },
  {
    value: "store theree",
  },
  {
    value: "store four",
  },
];

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};

const EditorConvertToHTML = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div>
      <Input placeholder="Product Name" />
      <br />
      <br />

      <h5 style={{ lineHeight: 0 }}>Product Description</h5>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />

      {/* <br />
      <br />
      <h5 style={{ lineHeight: 0 }}>Product Variant</h5>
      <Select
        mode="multiple"
        tagRender={tagRender}
        defaultValue={["gold", "cyan"]}
        style={{
          width: "100%",
        }}
        options={options}
      /> */}

      <br />
      <br />
      <h5 style={{ lineHeight: 0 }}>Store</h5>
      <Select
        mode="single"
        defaultValue={["select store"]}
        style={{
          width: "100%",
        }}
        options={stores}
      />
    </div>
  );
};

export default EditorConvertToHTML;
