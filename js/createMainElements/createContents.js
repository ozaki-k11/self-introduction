
// コンテンツカードのヘッダー部分を作る
const createHeader = (title, theme) => {
    const div = document.createElement("div");
    div.className = "uk-card-header";
    const header = document.createElement("h1");
    header.innerText = title;
    const p = document.createElement("p");
    p.innerText = `課題:  ${theme}`;
    div.appendChild(header);
    div.appendChild(p);
    return div;
}
// コンテンツカードのボディ部分を作る
const createBody = (text) => {
    const div = document.createElement("div");
    div.className = "uk-card-body";
    const p = document.createElement("p");
    p.innerText = text;
    div.appendChild(p);
    return div;
}
// コンテンツカードのフッター部分を作る
const createFooter = (use) => {
    const div = document.createElement("div");
    div.className = "uk-card-footer";
    const ul = document.createElement("ul");
    ul.className = "uk-list uk-flex uk-flex-left uk-flex-wrap";
    use.forEach(ele => {
        const li = document.createElement("li");
        li.innerText = ele;
        li.className ="uk-margin-remove-vertical uk-margin-right";
        ul.appendChild(li);
    });
    div.appendChild(ul);
    return div;    
}

// YouTubeのurlがあったらリンクを生成する
const createYouTubeLink = (youtube, element) => {
    if(youtube === void 0) {
        return;
    }
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.href = youtube;
    a.target = "_brank";
    a.rel = "noopener noreferrer";
    a.innerText = "YouTube→";
    p.appendChild(a);
    element.appendChild(p);
}
// YouTube以外のurlがあったらリンクを生成する
const createLink = (url, element) => {
    if(url === void 0) {
        return;
    }
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.href = url;
    a.target = "_brank";
    a.rel = "noopener noreferrer";
    a.innerText = "見る→";
    p.appendChild(a);
    element.appendChild(p);
}

// mainエリアのコンテンツ一覧を生成する
const createContents = (contents, contentsElement) => {
    // コンテンツデータがなかった場合何もしない
    if(contents === void 0) {
        console.log("このユーザーはcontentsListDataに情報を追加していません。");
        return;
    }
    const ul = document.createElement("ul");
    ul.className = "uk-list uk-flex uk-flex-column";
    Object.values(contents).forEach(ele => {
        const li = document.createElement("li");
        li.className = "uk-card uk-card-default uk-margin-medium";
        const header = createHeader(ele.title, ele.theme);
        const body = createBody(ele.description);
        createYouTubeLink(ele.youtube, body);
        createLink(ele.url, body);
        const footer = createFooter(ele.use);
        li.appendChild(header);
        li.appendChild(body);
        li.appendChild(footer);
        ul.appendChild(li);
    });
    contentsElement.appendChild(ul);
}

export {createContents};