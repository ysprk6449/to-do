import "./styles.css";

const onclickadd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createincompletelist(inputtext);
};

//未完了リストに追加する関数
const createincompletelist = (text) => {
  //div制作
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ制作
  const li = document.createElement("li");
  li.innerText = text;

  //button完了タグ制作
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    //押された完了ボタンの親タグdivを未完了リストを削除
    deletefromincompletelist(completebutton.parentNode);

    //完了リストに追加する要素
    const addtarget = completebutton.parentNode;

    //TODOテキスト内容を取得
    const text = addtarget.firstElementChild.innerText;

    //div以下を初期化
    addtarget.textContent = null;

    //liタグを制作
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ作成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //押された戻すボタンの親タグdvを完了リストから削除
      const deletetarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deletetarget);

      //テキスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createincompletelist(text);
    });

    //divタグの子要素に各要素に設定
    addtarget.appendChild(li);
    addtarget.appendChild(backbutton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addtarget);
  });

  //button削除タグ制作
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    //押された削除ボタンの親タグdivを未完了リストを削除
    deletefromincompletelist(deletebutton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定要素を削除
const deletefromincompletelist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickadd());
