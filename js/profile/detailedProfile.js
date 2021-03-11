import SimpleProfile from "./simpleProfile.js";
import likesDataList from "../../data/likesData.js";
import contentsDataList from "../../data/contentsData.js";
import qualificationsDataList from "../../data/qualificationsData.js";
import studyHistoryDataList from "../../data/studyHistoryData.js";
import worksHistoryDataList from "../../data/worksHistoryData.js";

// 登録されている情報を全部持ってきてプロフィールクラスを作る
class DetailedProfile extends SimpleProfile {
    #likes;
    #contents;
    #qualifications;
    #studyHistory;
    #worksHistory;
    constructor(id) {
        super(id);
        this.#likes = likesDataList[id];
        this.#contents = contentsDataList[id];
        this.#qualifications = qualificationsDataList[id];
        this.#studyHistory = studyHistoryDataList[id];
        this.#worksHistory = worksHistoryDataList[id];
    }
    get likes() {
        return this.#likes;
    }
    get contents() {
        return this.#contents;
    }
    get qualifications() {
        return this.#qualifications;
    }
    get studyHistory() {
        return this.#studyHistory;
    }
    get workHistory() {
        return this.#worksHistory;
    }
}

export {DetailedProfile};