import React from "react";
// reactというライブラリからReactをimportする。お作法として記入
// JSXを使用するだけの場合Reactのimportは必須ではなくなりました
import ReactDOM from "react-dom";

import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
