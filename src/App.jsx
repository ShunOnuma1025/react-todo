// コンポーネントの拡張子にはjsxを付ける
import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  // 入力した値のState,変数名はtodoText,それを更新するためのsetTodoText
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // eventの引数を受け取ることができる。event.target.valueに実際の値が入ってくる
  // それをsetTodoTextでtodoTextのStateに反映させている

  const onClickAdd = () => {
    if (todoText === "") return;
    // todoTextが空の場合は追加処理が行われないようにする
    const newTodos = [...incompleteTodos, todoText];
    // incompleteTodosの後ろにinputに入力された値が
    // 設定され、新しい配列を生成している
    setIncompleteTodos(newTodos);
    // IncompleteTodosを更新する関数にnewTodosを設定してあげる
    setTodoText("");
    // 追加ボタン押した後のテキストボックスを空にする
  };
  // ここで入力した内容が未完了のtodoの配列にセットしてあげればいい

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        {/* inputの値を取り出したいので、入力したvalueをStateとして定義した */}
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
          {/* reactで状態が変化するモノはstateで定義する */}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
  // JSX記法は1つのタグで囲わないといけない
};

// export default App;
// 他のファイルでも使うよーというのを明示する
