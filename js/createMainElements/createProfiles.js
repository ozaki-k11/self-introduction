// th要素を作る
const createTh = (text) => {
    const th = document.createElement("th");
    th.innerText = text;
    return th;
}
// td要素を作る
const createTd = (text) => {
    const td = document.createElement("td");
    td.innerText = text;
    return td;
}
// th要素とth要素を渡してtr要素を作る
const createTr = (thText, tdText) => {
    const tr = document.createElement("tr");
    const th = createTh(thText);
    const td = createTd(tdText);
    tr.appendChild(th);
    tr.appendChild(td);
    return tr;
}

// 名前の行を作る
const createName = (name) => {
    const th = "名前";
    const td = `${name.last} ${name.first}`;
    const tr = createTr(th, td);
    return tr;
}
// 誕生日の行を作る
const createBirthday = (birthDay, age) => {
    const th = "誕生日";
    const td = `${birthDay.y}年${birthDay.m}月${birthDay.d}日 (満${age}歳)`;
    const tr = createTr(th, td);
    return tr;
}
// 住所の行を作る
const createAddress = (address) => {
    const th = "住所";
    const td = address;
    const tr = createTr(th, td);
    return tr;
}
// メールアドレスの行を作る
const createMailaddress = (mailaddress) => {
    const th = "メールアドレス";
    const td = mailaddress;
    const tr = createTr(th, td);
    return tr;
}

// mainエリアのプロフィール一覧を生成する
const createProfiles = (profile, profilesElement) => {

    const table = document.createElement("table");
    table.className = "uk-table uk-table-divider";
    const myProfile = {
        "name": createName(profile.name),
        "birthday": createBirthday(profile.birthday, profile.age),
        "address": createAddress(profile.address),
        "mailaddress": createMailaddress(profile.mailaddress)
    }

    Object.values(myProfile).forEach(element => {
        table.appendChild(element);
    });

    profilesElement.appendChild(table);
    
}

export {createProfiles, createTh, createTd, createTr};