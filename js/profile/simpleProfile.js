import profileData from "../../data/profileData.js";

// プロフィールデータだけから簡易的なプロフィールを生成
class SimpleProfile {
    #name;
    #ruby;
    #birthday;
    #age;
    #address;
    #mailaddress;
    constructor(id) {
        const profile = profileData[id];
        this.#name = this.nameSplit(profile.name);
        this.#ruby = this.nameSplit(profile.ruby);
        this.#birthday = this.birthdaySplit(profile.birthday);
        this.#age = this.calcAge(this.#birthday);
        this.#address = profile.address;
        this.#mailaddress = profile.mailaddress;
    }
    // 漢字の配列を返す
    get name() {
        return this.#name;
    }
    // 漢字の苗字を返す
    get lastName() {
        return this.#name.last;
    }
    // 漢字の名前を返す
    get firstName() {
        return this.#name.first;
    }
    // ふりがなの配列を返す
    get ruby() {
        return this.#ruby;
    }
    // ひらがなの苗字を返す
    get lastRuby() {
        return this.#ruby.last;
    }
    // ひらがなの名前を返す
    get firstRuby() {
        return this.#ruby.first;
    }
    // 年齢を返す
    get age() {
        return this.#age;
    }
    // 誕生日を返す
    get birthday() {
        return this.#birthday;
    }
    // 住所を返す
    get address() {
        return this.#address;
    }
    // メールアドレスを返す
    get mailaddress() {
        return this.#mailaddress;
    }
    // 名前の配列を生成する
    nameSplit(ele) {
        const bar =  ele.split(" ");
        const foo = {
            "last": bar[0],
            "first": bar[1]
        }
        return foo;
    }
    // 誕生日の配列を作成する
    birthdaySplit(ele) {
        const bar = ele.split("-");
        const foo = {
            "y": bar[0]-0,
            "m": bar[1]-0,
            "d": bar[2]-0
        }
        return foo;
    }
    // 年齢を計算する
    calcAge(ele) {
        const date = new Date();
        const today = {
            "y": date.getFullYear(),
            "m": date.getMonth()+1,
            "d": date.getDate()
        }
        // 周年
        const anniversary = today.y - ele.y;
        // 誕生月がまだなら誕生日もまだなので周年-1
        if(today.m < ele.m) {
            return anniversary-1;
        }
        // 今月が誕生月で、かつ誕生日がまだなら周年-1
        if( (today.m === ele.m) && (today.d < ele.d) ) {
            return anniversary-1;
        }
        return anniversary;
    }
}

export default SimpleProfile;