import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      {/* inputの値を取り出したいので、入力したvalueをStateとして定義した */}
      <button onClick={onClick}>追加</button>
    </div>
  );
};
