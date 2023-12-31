import { useRef } from "react";
import { v4 } from "uuid";
import { useState, useEffect } from "react";
export const EditInput = ({
  className,
  label,
  type = "text",
  multy = false,
  initText,
  editCallback = () => {},
  fieldName = "",
}) => {
  const [content, setContent] = useState("");
  const id = useRef(v4());
  const onChage = ({ target }) => {
    setContent(target.value);
  };
  const onEdit = (event) => {
    editCallback(fieldName, content);
  };
  useEffect(() => {
    setContent(initText);
  }, [initText]);
  return (
    <div className={className}>
      <label htmlFor={id.current}>{`${label}: `}</label>
      {!multy ? (
        <input type={type} value={content} id={id.current} onChange={onChage} />
      ) : (
        <textarea
          name=""
          value={content}
          type={type}
          id={id.current}
          cols="30"
          rows="10"
          onChange={onChage}
        ></textarea>
      )}
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};
