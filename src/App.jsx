// コンポーネントの拡張子にはjsxを付ける
import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  // 入力した値のState,変数名はtodoText,それを更新するためのsetTodoText
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 上記の配列から指定のindexの箇所のものを削除してあげる
    newTodos.splice(index, 1);
    // newTodosに対してspliceを使う
    // 一つ目の引数に何番目の要素か、二つ目にいくつ削除するか指定できる
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // 上記の配列から指定のindexの箇所のものを削除してあげる
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

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
          {incompleteTodos.map((todo, index) => {
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
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
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
