import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};
// このスタイルの書き方が正しいというわけではないが、こういう記述もある

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div disabled style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      {/* inputの値を取り出したいので、入力したvalueをStateとして定義した */}
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
