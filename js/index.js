import {DetailedProfile} from "./profile/detailedProfile.js";
import userList from "../data/userListData.js";

import {createLikes} from "./createMainElements/createLikes.js";
import {createProfiles} from "./createMainElements/createProfiles.js";
import {createContents} from "./createMainElements/createContents.js";
import {createOther} from "./createMainElements/createOther.js";

// 自分のやつ
const KANATA = {
    "name": "OzakiKanata",
    "password": "Ozaki1234"
}
// チェック用のやつ
const checkUser = {
    "name": "1234desu",
    "password": "1234password"
};

function inquiry(user) {
    const res = userList.find(target => target.username === user.name);
    if( res === void 0) {
        return "登録されていないユーザー名です。";
    }
    if( res.password !== user.password ) {
        return "パスワードが一致しません。"
    }
    return new DetailedProfile(res.id);
}

const myProfile = inquiry(KANATA);
console.log(myProfile);
createProfiles(myProfile, document.getElementById("Profile"));
createLikes(myProfile.likes, document.getElementById("Likes"));
createContents(myProfile.contents, document.getElementById("Contents"));
createOther(myProfile.qualifications, myProfile.studyHistory, myProfile.workHistory, document.getElementById("Other"));