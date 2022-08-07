import React from "react";

export const IncompleteTodos = (props) => {
  // 上の行でpropsを受け取って下の行で中身を取り出す
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          // incompleteTodosというStateを持っている
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
              {/* indexをonClickDeleteに渡している */}
              {/* 関数に引数渡していきたい時はアロー関数を使っているのは新しい関数を生成しているイメージ */}
            </div>
          );
        })}
        {/* reactで状態が変化するモノはstateで定義する */}
      </ul>
    </div>
  );
};
