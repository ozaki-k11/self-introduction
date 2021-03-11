// ヘッダーを作成する
// likesDataのkey部分がヘッダータイトル
const createHeader = (key) => {
    const bar = document.createElement("h1");
    bar.innerText = key;
    bar.className = "uk-heading-divider uk-h4";
    return bar;
};
// 中身を作成する
const createLikesElement = (likesData) => {
    const list = document.createElement("ul");
    list.className = "uk-list uk-flex uk-flex-wrap uk-margin-left";
    Object.values(likesData).forEach(ele => {
        const bar = document.createElement("li");
        bar.innerText = ele;
        bar.className = "uk-margin-remove-vertical uk-margin-right"
        list.appendChild(bar);
    });
    return list;
};

// mainエリアのLikes一覧を生成する
const createLikes = (likesData, likesElement) => {
    // likesデータがなかった場合何もしない
    if(likesData === void 0) {
        console.log("このユーザーはlikesListDataに情報を追加していません。");
        return;
    }
    const ul = document.createElement("ul");
    ul.className = "uk-list";
    Object.getOwnPropertyNames(likesData).forEach(key => {
        const li = document.createElement("li");
        const section = document.createElement("section");
        const header = createHeader(key);
        const likes = createLikesElement(likesData[key]);
        section.appendChild(header);
        section.appendChild(likes);
        li.appendChild(section);
        ul.appendChild(li);
    });
    likesElement.appendChild(ul);
}

export {createLikes};