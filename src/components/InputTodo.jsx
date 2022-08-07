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
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      {/* inputの値を取り出したいので、入力したvalueをStateとして定義した */}
      <button onClick={onClick}>追加</button>
    </div>
  );
};
