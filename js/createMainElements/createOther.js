import {createTh, createTd} from "./createProfiles.js";

// 資格一覧を作る
const createQualifications = (qualifications) => {
    // 資格データがなかった場合何もしない
    if(qualifications === void 0) {
        console.log("このユーザーはqualificationsListDataに情報を追加していません。");
        return;
    }
    const dispName = "資格";
    const section = document.createElement("section");
    const header = document.createElement("h1");
    header.className = "uk-heading-divider uk-h4";
    header.innerText = dispName;
    section.appendChild(header);
    const table = document.createElement("table");
    table.className = "uk-table uk-table-divider";
    qualifications.forEach(ele => {
        const tr = document.createElement("tr");
        const th = createTh(ele.getDate);
        th.className = "uk-text-middle";
        const td = createTd(ele.title);
        td.className = "uk-text-middle";
        tr.appendChild(th);
        tr.appendChild(td);
        table.appendChild(tr);
    });
    section.appendChild(table);
    return section
}

// 学歴一覧を作る
const createStudyHistory = (studyHistory) => {
    // 学歴データがなかった場合何もしない
    if(studyHistory === void 0) {
        console.log("このユーザーはstudyHistoryListDataに情報を追加していません。");
        return;
    }
    const dispName = "学歴";
    const key = "school";
    return createHistorySections(studyHistory, dispName, key);
}

// 職歴一覧を作る
const createWorksHistory = (worksHistory) => {
    // 職歴データがなかった場合何もしない
    if(worksHistory === void 0) {
        console.log("このユーザーはworksHistoryListDataに情報を追加していません。");
        return;
    }
    const dispName = "職歴";
    const key = "workPlace";
    return createHistorySections(worksHistory, dispName, key);
}

// 学歴、職歴一覧を作る
// ネストが深めだから長い
const createHistorySections = (history, dispName, key) => {
    const section = document.createElement("section");
    const header = document.createElement("h1");
    header.className = "uk-heading-divider uk-h4";
    header.innerText = dispName;
    section.appendChild(header);
    const table = document.createElement("table");
    table.className = "uk-table uk-table-divider";
    history.forEach(ele => {
        const tr_start = document.createElement("tr");
        const th_start = createTh(ele.startDate);
        th_start.className = "uk-text-middle";
        const td = createTd(ele[key]);
        td.className = "uk-text-middle";
        td.rowSpan = 2;
        tr_start.appendChild(th_start);
        tr_start.appendChild(td);
        table.appendChild(tr_start);
        const tr_end = document.createElement("tr");
        const th_end = createTh(ele.endDate);
        th_end.className = "uk-text-middle";
        tr_end.appendChild(th_end);
        table.appendChild(tr_end);
    });
    section.appendChild(table);
    return section;
}

// mainエリアのOther一覧を生成する
const createOther = (qualifications, studyHistory, worksHistory, otherElement) => {

    const qualificationsElement = createQualifications(qualifications);
    otherElement.appendChild(qualificationsElement);
    const studyHistoryElement = createStudyHistory(studyHistory);
    otherElement.appendChild(studyHistoryElement);
    const worksHistoryElement = createWorksHistory(worksHistory);
    otherElement.appendChild(worksHistoryElement);
    
}

export {createOther};