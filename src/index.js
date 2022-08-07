import React from "react";
// reactというライブラリからReactをimportする。お作法として記入
// JSXを使用するだけの場合Reactのimportは必須ではなくなりました
import ReactDOM from "react-dom";
// htmlにコンポーネントを反映させる

import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOMというライブラリの中身のrenderという関数を使用する
// ここではAppというコンポーネントをレンダリングしている
// 二つ目の引数にどこに反映していくのかを記入
