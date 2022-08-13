// コンポーネントの拡張子にはjsxを付ける
import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import { NextPage } from "./components/NextPage";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {/* props名は自分で決めていい */}
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個まで</p>
      )}
      {/* lengthは配列の要素数を返す関数 */}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />

      <BrowserRouter>
        <Link to="/nextpage">ページ遷移</Link>
        <Routes>
          <Route path="/nextpage" element={<NextPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  // JSX記法は1つのタグで囲わないといけない
};

// export default App;
// 他のファイルでも使うよーというのを明示する
