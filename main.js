//キャラデータ

let CharaData = [
    { id: "0", name: "自分", username: "機能説明", color: "#808080", scenario: { 0: "スタマイに登場するチャットアプリ『LIME』風webアプリです", 1: "【ルーム選択】\n左の▶ボタンを押すと表示されるリストからチャットルームを選択できます", 2: "【メッセージ送信・編集・削除】\nフォーム横のボタンでメッセージの送信者を選択できます\n送信済のメッセージをクリックすると編集できます。\nメッセージが空の状態でOKボタンを押すと、メッセージの削除ができます", 3: "【時刻・日付変更】\n表示部分をクリックすると編集できます。空の状態でOKボタンを押すとデフォルトに戻ります", 4: "【通話画面・ロック画面】\n右上のアイコンからそれぞれ画面が開きます。\nロック画面では対象ルームの未読メッセージのみ表示されます", 5: "画面をリロードすると全ルームの会話がリセットされます" } },
    { id: "1", name: "青山樹", username: "青山樹", cate: "マトリ", icon: "img/icon/lime_icons_aoyama_01.png", color: "#2390FF", scenario: { 0: "青山樹です。登録よろしくお願いします。" } },
    { id: "2", name: "由井孝太郎", username: "Kotaro.Y", cate: "マトリ", icon: "img/icon/lime_icons_yui_01.png", color: "#FFAEC0", scenario: { 0: "いつでも連絡してくれ", 1: "キミからの頼みとあらばどこへでも駆けつけよう" } },
    { id: "3", name: "関大輔", username: "関", cate: "マトリ", icon: "img/icon/lime_icons_seki_01.png", color: "#F95240", scenario: { 0: "これで送れているか？" } },
    { id: "4", name: "夏目春", username: "hal", cate: "マトリ", icon: "img/icon/lime_icons_natsume_01.png", color: "#59D9A5", scenario: { 0: "あ" } },
    { id: "5", name: "今大路峻", username: "shun", cate: "マトリ", icon: "img/icon/lime_icons_imaoji_01.png", color: "#F9CD00", scenario: { 0: "今大路です。これからよろしくお願いします" } },
    { id: "6", name: "渡部悟", username: "ワタベ", cate: "マトリ", icon: "img/icon/lime_icons_watabe_01.png", color: "#9173E7", scenario: { 0: "登録したよ、これから好きな時に連絡してね" } },
    { id: "7", name: "朝霧司", username: "朝霧 司", cate: "警視庁", icon: "img/icon/lime_icons_asagiri_01.png", color: "#FF864A", scenario: { 0: "朝霧司です", 1: "登録しましたので、早めに返事がほしい時はこちらにお願いします" } },
    { id: "8", name: "菅野夏樹", username: "夏樹", cate: "警視庁", icon: "img/icon/lime_icons_sugano_01.png", color: "#98DF00", scenario: { 0: "送れてる？" } },
    { id: "9", name: "荒木田蒼生", username: "荒木田", cate: "警視庁", icon: "img/icon/lime_icons_arakida_01.png", color: "#8FDAC6", scenario: { 0: "登録した。" } },
    { id: "10", name: "服部耀", username: "服部", cate: "警視庁", icon: "img/icon/lime_icons_hattori_01.png", color: "#D43767", scenario: { 0: "夏樹から資料受け取った？" } },
    { id: "11", name: "桧山貴臣", username: "桧山", cate: "Revel", icon: "img/icon/lime_icons_hiyama_01.png", color: "#E3CC96", scenario: { 0: "先ほどは手間をかけたな。", 1: "急ぎの要件があれば、今後はこちらに連絡してくれ。" } },
    { id: "12", name: "大谷羽鳥", username: "hatori", cate: "Revel", icon: "img/icon/lime_icons_otani_01.png", color: "#F76796", scenario: { 0: "LIME教えてくれてありがとう。", 1: "気軽に連絡してね。" } },
    { id: "13", name: "神楽亜貴", username: "Aki Kagura", cate: "Revel", icon: "img/icon/lime_icons_kagura_01.png", color: "#76b6ed", scenario: { 0: "登録したから。", 1: "金曜仕事終わったらアトリエ集合ね。", 2: "分かった？", 3: "ねえ、" } },
    { id: "14", name: "槙慶太", username: "槙慶太", cate: "Revel", icon: "img/icon/lime_icons_maki_01.png", color: "#5bcd38", scenario: { 0: "登録した、よろしく。" } },
    { id: "15", name: "都築誠", username: "都築", cate: "都築兄弟", icon: "img/icon/lime_icons_makoto_01.png", color: "#4c835b", scenario: { 0: "先日は、取材の申し込みに応じてもらい助かった。", 1: "改めて礼を言う" } },
    { id: "16", name: "都築京介", username: "きょーすけ", cate: "都築兄弟", icon: "img/icon/lime_icons_kyosuke_01.png", color: "#b9b3f4", scenario: { 0: "登録したよ、よろしく！" } },
    { id: "17", name: "新堂清志", username: "新堂", cate: "九条家", icon: "img/icon/lime_icons_shindo_01.png", color: "#a481c8", scenario: { 0: "新堂だ" } },
    { id: "18", name: "山崎カナメ", username: "kaname", cate: "九条家", icon: "img/icon/lime_icons_kaname_01.png", color: "#addbe3", scenario: { 0: "連絡先、もらってから時間経っちゃってごめん。" } },
    { id: "19", name: "桐嶋宏弥", username: "キリシマ", cate: "九条家", icon: "img/icon/lime_icons_kirishima_01.png", color: "#ffa126", scenario: { 0: "とどいてるか？" } },
    { id: "20", name: "九条壮馬", username: "九条", cate: "九条家", icon: "img/icon/lime_icons_kujo_01.png", color: "#d22d38", scenario: { 0: "無事に登録できているだろうか。" } },
    { id: "21", name: "宮瀬豪", username: "宮瀬", cate: "九条家", icon: "img/icon/lime_icons_miyase_01.png", color: "#f8a9f2", scenario: { 0: "夜ご飯お願いします。", 1: "あれ", 2: "よろしくと打つつもりが『よ』で勝手に変換が……" } },
    { id: "22", name: "可愛ひかる", username: "かわいひかる", cate: "瀬尾研究室", icon: "img/icon/lime_icons_kawai_01.png", color: "#ff9ab5", scenario: { 0: "玲さん、ひかるんだよ～", 1: "早速登録させてね♪" } },
    { id: "23", name: "宝生潔", username: "宝生潔", cate: "瀬尾研究室", icon: "img/icon/lime_icons_isagi_01.png", color: "#aeb227", scenario: { 0: "突然連絡してしまってすみません", 1: "淑央大学2年の宝生潔です" } },
    { id: "24", name: "日向志音", username: "しー", cate: "瀬尾研究室", icon: "img/icon/lime_icons_hinata_01.png", color: "#36dbf3", scenario: { 0: "さっき貰ったお菓子、おいしかった", 1: "ありがとう" } },
    { id: "25", name: "早乙女郁人", username: "早乙女郁人【淑央大】", cate: "瀬尾研究室", icon: "img/icon/lime_icons_saotome_01.png", color: "#3553af", scenario: { 0: "これが俺のアカウントだ、\nきちんと登録しとけ", 1: "おい", 2: "おい、見てないのか。" } },
    { id: "26", name: "瀬尾鳴海", username: "NARUMI SEO", cate: "瀬尾研究室", icon: "img/icon/lime_icons_seo_01.png", color: "#218379", scenario: { 0: "これで登録できているかな？" } }
];

let GroupData = CharaData.reduce((group, key) => {
    (group[key.cate] = group[key.cate] || []).push(key);
    return group;
}, {});

//キャラデータからメニューとチャットタブを生成
CurrentRoomID = 0;
DefaultRoomID = 0;
let ChatArea = document.getElementsByClassName('chat-area');
let Chara = document.getElementsByClassName('chara');
let Menu = document.getElementById('js-menu');
let MenuBtn = document.getElementById('js-menuBtn');
let CharaList = document.getElementById('js-chara-list');
let GroupList = document.getElementById('js-group-list');
let MenuList = document.querySelectorAll('.menu-list');
let MenuListItem = document.getElementsByClassName('menu-list-item');
let ChatWrapper = document.getElementById('chat-wrapper');

RoomLength = CharaData.length + Object.keys(GroupData).length - 1;

AddList = (i) => {

    const MenuListItem = document.createElement('li');
    MenuListItem.className = 'menu-list-item';
    MenuListItem.id = 'id' + i;
    MenuListItem.dataset.roomid = i;
    const MenuListItemIcon = document.createElement('div');
    MenuListItemIcon.className = 'menu-list-item-icon';

    const RoomName = document.createElement('div');
    const RoomNameText = document.createElement('span');
    RoomName.appendChild(RoomNameText);
    MenuListItem.appendChild(MenuListItemIcon);
    MenuListItem.appendChild(RoomName);
    if (i < CharaData.length) {
        MenuListItemIcon.style.backgroundColor = CharaData[i].color;
        MenuListItemIcon.style.backgroundImage = "url(" + CharaData[i].icon + ")";
        RoomNameText.textContent = CharaData[i].username;
        CharaList.appendChild(MenuListItem);
    } else if (i >= CharaData.length && i < RoomLength) {
        RoomNameText.textContent = Object.keys(GroupData)[i - CharaData.length + 1];
        MenuListItemIcon.style.backgroundImage = "url(img/icon/icon_group_" + RoomNameText.textContent + ".png)";
        GroupList.appendChild(MenuListItem);
    } else if (i >= RoomLength) {
        RoomNameText.textContent = "";
        GroupList.appendChild(MenuListItem);
    }

    RoomName.className = 'menu-list-item-name';

    //chat欄
    const Chat = document.createElement('div');
    Chat.className = 'chat-area menu-close';
    Chat.id = "chat" + i;
    Chat.dataset.chatid = i;
    ChatWrapper.appendChild(Chat);
    //選択ルーム取得
    MenuListItem.addEventListener('click', (e) => {
        CurrentRoomID = MenuListItem.dataset.roomid;
        SelectRoom(CurrentRoomID);
    })
    //初回メッセージ
    if (i < CharaData.length) {
        MenuListItem.addEventListener('click', (e) => {
            clearInterval(IntervalID);
            DefaultMessage(CurrentRoomID);

        });
    }
}

for (i = 0; i < RoomLength; i++) {
    AddList(i);
}

AddGroup = () => {
    const AddGroupBtn = document.createElement('li');
    AddGroupBtn.className = 'add-group-btn';
    const AddGroupBtnIcon = document.createElement('div');
    AddGroupBtnIcon.className = 'add-group-btn-icon';
    const AddGroupBtnIconI = document.createElement('i');
    AddGroupBtnIconI.className = "fa-solid fa-plus";

    const RoomName = document.createElement('div');
    RoomName.className = 'add-group-btn-name';
    const RoomNameText = document.createElement('span');
    RoomNameText.textContent = "作成";
    RoomName.appendChild(RoomNameText);
    AddGroupBtnIcon.appendChild(AddGroupBtnIconI);
    AddGroupBtn.appendChild(AddGroupBtnIcon);
    AddGroupBtn.appendChild(RoomName);

    GroupList.prepend(AddGroupBtn);


    GroupSelectPop = document.getElementById("js-group-modal");
    GroupSelectList = document.getElementsByClassName("add-group")[0];
    AddGroupForm = document.getElementsByClassName("add-group-form")[0];

    for (i = 1; i < CharaData.length; i++) {
        const selectLabel = document.createElement('label');
        const AddGroupList = document.createElement('li');
        AddGroupList.className = "add-group-list";
        const AddGroupListIcon = document.createElement('div');
        AddGroupListIcon.className = "add-group-list-icon";
        const AddGroupListName = document.createElement('div');
        AddGroupListName.className = "add-group-list-name";
        const AddGroupListNameText = document.createElement('span');
        AddGroupListNameText.textContent = CharaData[i].username;
        AddGroupListIcon.style.backgroundColor = CharaData[i].color;
        AddGroupListIcon.style.backgroundImage = "url(" + CharaData[i].icon + ")";
        const selectInput = document.createElement('input');
        selectInput.type = "checkbox";
        selectInput.name = "selectlist";
        selectInput.value = i;

        AddGroupListName.appendChild(AddGroupListNameText);
        AddGroupList.appendChild(selectInput);
        AddGroupList.appendChild(AddGroupListIcon);
        AddGroupList.appendChild(AddGroupListName);

        selectLabel.appendChild(AddGroupList);
        GroupSelectList.appendChild(selectLabel);
    }


    AddGroupBtn.addEventListener('click', (e) => {
        e.preventDefault(); GroupSelectPop.classList.toggle('modal-open');
    });

    GroupSelectPop.addEventListener('click', (e) => {
        if (!e.target.closest('#js-group-form')) {
            e.preventDefault(); GroupSelectPop.classList.toggle('modal-open');
            document.getElementById("js-group-form").reset();
        }
    });



    AddGroupSetForm = document.querySelector('.add-group-form button')
    AddGroupSetForm.addEventListener('click', (e) => {
        e.preventDefault();
        checkboxes = document.querySelectorAll('input[name=selectlist]:checked');
        groupname = String(document.querySelector("input[name='group-name']").value);
        if (checkboxes.length == 0 || groupname == "") {
            alert("グループ名が入力されていない、もしくはキャラが選択されていません")
            return;
        } else if (GroupData[groupname] != null) {
            alert("同名のグループが既にあります")
            return;
        } else {
            let array = [];
            for (i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i]) {
                    id = checkboxes[i].value;
                    array.push(CharaData[id]);
                }
            }
            GroupData[groupname] = array;
            AddList(RoomLength);
            ChatArea[RoomLength].classList.toggle('menu-open');
            ChatArea[RoomLength].classList.toggle('menu-close');
            document.querySelectorAll('.menu-list-item-name span')[RoomLength].textContent = groupname;
            GroupSelectPop.classList.toggle('modal-open');
            CurrentRoomID = RoomLength;
            RoomLength = CharaData.length + Object.keys(GroupData).length - 1;
            SelectRoom(CurrentRoomID);
            isSenderSelf = true;
            click = -1;
            SelectSender(CurrentRoomID, click, isSenderSelf);
            NameScrollAnimation();
            document.getElementById("js-group-form").reset();
        }
    });
}

let MenuSelectBtn = document.getElementById('js-menu-select');
isGroupTab = false;

MenuSelectBtn.addEventListener('click', (e) => {
    if (e.target.textContent == "個人") {
        isGroupTab = false;
    } else if (e.target.textContent == "グループ") {
        isGroupTab = true;
    }
    TabBtn(isGroupTab);

});

//メニュータブ選択
TabBtn = () => {
    if (!isGroupTab) {
        document.getElementsByClassName('menu-select-btn')[0].classList.add('menu-select-active');
        document.getElementsByClassName('menu-select-btn')[1].classList.remove('menu-select-active');
        document.getElementById('js-chara-list').classList.add('menu-list-active');
        document.getElementById('js-group-list').classList.remove('menu-list-active');
    } else if (isGroupTab) {
        document.getElementsByClassName('menu-select-btn')[1].classList.add('menu-select-active');
        document.getElementsByClassName('menu-select-btn')[0].classList.remove('menu-select-active');
        document.getElementById('js-chara-list').classList.remove('menu-list-active');
        document.getElementById('js-group-list').classList.add('menu-list-active');
    }
    NameScrollAnimation();
}

//キャラクターに応じて表示を変更
SelectRoom = (id) => {
    ChatArea[id].classList.add('chat-active');
    MenuListItem[id].classList.add('menu-list-item-active');
    document.querySelector('#js-room-name span').textContent = document.getElementsByClassName('menu-list-item-name')[id].firstChild.textContent;

    for (i = 0; i < RoomLength; i++) {
        if (i != id && ChatArea[i].classList.contains('chat-active')) {
            ChatArea[i].classList.remove('chat-active');
        }
        if (i != id && MenuListItem[i].classList.contains('menu-list-item-active')) {
            MenuListItem[i].classList.remove('menu-list-item-active');
        }
    }
    if (id >= CharaData.length) {
        TelOpenBtn.style.display = "none";
        isGroup = true;
        CurrentGroupName = document.querySelector('[data-roomid="' + id + '"] span').textContent;

    } else {
        TelOpenBtn.style.display = "flex";
        isGroup = false;
    }

    isSenderSelf = true;
    click = -1;
    SelectSender(id, click, isSenderSelf);
}

DefaultMessage = (roomid) => {
    scenarioLength = Object.values(CharaData[roomid].scenario).length;
    IntervalCount = 0;
    IntervalID = 0;
    if (ChatArea[roomid].children.length >= scenarioLength) {
        return;
    }

    if (ChatArea[roomid].children.length > 0) {
        if (document.querySelectorAll('#chat' + [roomid] + ' .message span').length == 0) {
            IntervalCount = ChatArea[roomid].children.length;
            // messageAnime(CharaData[roomid].scenario[IntervalCount], "left", roomid, roomid);
        } else {
            IntervalCount = ChatArea[roomid].children.length - 1;
        }
    }

    if (document.querySelectorAll('#chat' + [roomid] + ' .message span').length == 0) {
        messageAnime(CharaData[roomid].scenario[IntervalCount], "left", roomid, roomid);
    }

    IntervalID = setInterval(function () {
        IntervalCount++;
        if (IntervalCount >= scenarioLength) {
            clearInterval(IntervalID);
            return;
        }
        if (roomid != CurrentRoomID) {
            clearInterval(IntervalID);
            return;
        }
        messageAnime(CharaData[roomid].scenario[IntervalCount], "left", roomid, roomid);

    }, 1500);

}

NameScrollAnimation = () => {
    for (i = 0; i < document.getElementsByClassName('namescrollstyle').length; i++) {
        document.getElementsByClassName('namescrollstyle')[i].remove();
    }
    for (i = 0; i < MenuListItem.length; i++) {

        list = document.getElementsByClassName('menu-list-item-name')[i];
        listS = list.firstChild;
        if (list.clientWidth < listS.scrollWidth) {
            scrollLength = -(listS.scrollWidth - list.clientWidth) + "px";

            css = document.createElement('style');
            css.media = 'screen';
            css.type = 'text/css';
            css.className = 'namescrollstyle';
            speed = (listS.scrollWidth - list.clientWidth) * 0.3;
            sleepTime = Math.floor((30 / speed));
            namescroll = '@keyframes namescroll' + i + '{' + [
                ' 0% { left: 0;} ',
                sleepTime + ' % { left: 0;}',
                (100 - sleepTime) + '% { left: ' + scrollLength + ';}',
                ' 100% { left: ' + scrollLength + ';} '
            ].join('') + '}';
            rules = document.createTextNode([namescroll].join('\n'));
            css.appendChild(rules);
            document.getElementsByTagName('head')[0].appendChild(css);
            listS.style.animationName = "namescroll" + i;

            document.querySelector("#id" + i + " span").style.setProperty('animation', "namescroll" + i + ' ' + speed + 's linear 0s infinite normal none running');
        } else {
            document.querySelector("#id" + i + " span").style.setProperty('animation', 'none');
        }
    }


}

//テキストエリア自動伸縮
const TextBody = document.querySelector('#js-text');
lineHeight = (TextBody.currentStyle || document.defaultView.getComputedStyle(TextBody, '')).lineHeight;
lineHeight = parseInt(lineHeight);
const defaultHeight = (TextBody.currentStyle || document.defaultView.getComputedStyle(TextBody, '')).height;
widthCountMax = 0;
TextBody.addEventListener('input', () => {
    length = TextBody.value.length;
    row = Math.floor(TextBody.scrollHeight / lineHeight);
    widthCount = Math.floor(length / row);
    if (widthCount >= widthCountMax) { widthCountMax = widthCount; }
    if (TextBody.scrollHeight >= lineHeight * 2) {
        TextBody.style.height = 'auto';
        TextBody.style.height = TextBody.scrollHeight + 'px';
        if (length <= widthCountMax) {
            TextBody.style.height = defaultHeight;
        }
    }
});

//メッセージを作成
AddMessage = (text, position, roomid, senderid) => {

    if (!text.match(/\S/g) || text.textContent == '') {
        text.textContent = '';
        TextBody.style.height = defaultHeight;
        return;
    }
    text = text.replace(/^<div><br><\/div><div>/i, "\n");
    text = text.replace(/<div><br><\/div>/ig, "\n");
    text = text.replace(/<div.*?>/ig, "\n");
    text = text.replace(/<br>/ig, "\n");
    text = text.replace(/<.+?>/ig, '');

    let fragment = document.createDocumentFragment();

    Message = document.createElement('div');
    Message.className = 'message message-' + position;
    Message.textContent = text;
    Message.dataset.senderid = senderid;

    if (position == 'left') {
        MessageBox = document.createElement('div');
        MessageBox.className = 'messageBox-left';
        SenderIcon = document.createElement('div');
        SenderIcon.className = 'message-icon';
        MessageSender = document.createElement('div');
        MessageSender.className = 'message-sender';
        MessageBoxInner = document.createElement('div');

        SenderIcon.style.backgroundColor = CharaData[senderid].color;
        SenderIcon.style.backgroundImage = "url(" + CharaData[senderid].icon + ")";
        MessageSender.textContent = CharaData[senderid].username;
        MessageSender.style.color = CharaData[senderid].color;

        MessageBox.appendChild(SenderIcon);
        MessageBoxInner.appendChild(MessageSender);
        MessageBoxInner.appendChild(Message);
        MessageBox.appendChild(MessageBoxInner);
        fragment.append(MessageBox);
    } else if (position == 'right') {
        fragment.append(Message);
    }

    ChatArea[roomid].appendChild(fragment);
    TextBody.value = null;
    TextBody.style.height = defaultHeight;
    ChatArea[roomid].scrollTop = ChatArea[roomid].scrollHeight;

    Message.addEventListener('click', (e) => {
        let old_text = e.target.textContent;
        old_text = old_text.replace(/\n/g, '\\n');
        let new_text = window.prompt('メッセージ編集', old_text);
        if (new_text == null) {
            return;
        } else if (new_text == "") {
            if (window.confirm('削除しますか？')) {

                if (e.target.className == 'message message-right') {
                    e.target.remove();
                    return;
                } else if (e.target.className == 'message message-left') {
                    parent = e.target.closest('.messageBox-left');
                    parent.remove();
                    return;
                }
            }
        } else if (new_text.length) {
            new_text = new_text.replace(/\\n/g, "\n");
            e.target.textContent = new_text;
            return;
        }
    });


};

//メッセージアニメーション
messageAnime = (text, position, roomid, senderid) => {

    document.getElementById('js-form-submit').disabled = true;

    if (!text.match(/\S/g) || text.textContent == '') {
        document.getElementById('js-form-submit').disabled = false;
        return;
    }
    AddMessage("・・・", position, roomid, senderid);
    l = document.querySelectorAll('#chat' + [roomid] + ' .message').length;
    animetext = document.querySelectorAll('#chat' + [roomid] + ' .message')[l - 1];


    let html = '';
    strs = animetext.textContent.split('');

    for (i = 0; i < strs.length; i++) {
        html += '<span class="is-show">' + strs[i] + '</span>';
        animetext.innerHTML = html;
        document.querySelectorAll('#chat' + [roomid] + ' .message')[l - 1].children[i].style.setProperty('animation-delay', i * 0.1 + 's');
    }

    document.querySelectorAll('#chat' + [roomid] + ' .message')[l - 1].children[strs.length - 1].addEventListener('animationend', () => {
        if (position == 'right') { document.querySelectorAll('#chat' + [roomid] + ' .message span')[0].closest('.message-right').remove() }
        if (position == 'left') { document.querySelectorAll('#chat' + [roomid] + ' .message span')[0].closest('.messageBox-left').remove(); }
        AddMessage(text, position, roomid, senderid);
    });
    document.getElementById('js-form-submit').disabled = false;
}

//メッセージ送信者を選択(左右)

formSender = document.querySelector('.form-sender');
isSenderSelf = true;
let click = -1;
let CurrentSenderID = -1;
defaultcolor = formSender.style.background;
SelectSender = (roomid, count, flag) => {
    if (count == -1) {
        formSender.style.background = defaultcolor;
        CurrentSenderID = -1;
    } else
        if (count > -1) {
            if (isGroup) {
                CurrentGroupName = document.querySelector('[data-roomid="' + roomid + '"] span').textContent;
                formSender.style.background = GroupData[CurrentGroupName][count].color;
                CurrentSenderID = GroupData[CurrentGroupName][count].id;
            } else {
                formSender.style.background = CharaData[roomid].color;
                CurrentSenderID = CharaData[roomid].id;
            }
        }
    flag ? formSender.textContent = "自分" : formSender.textContent = "相手";
}
formSender.addEventListener('click', (e) => {
    click++;
    if (isGroup) {
        CurrentGroupName = document.querySelector('[data-roomid="' + CurrentRoomID + '"] span').textContent;
        if (click > GroupData[CurrentGroupName].length - 1) {
            click = -1;
            isSenderSelf = true;
        } else if (click >= 0) {
            isSenderSelf = false;
        }
    } else if (!isGroup) {
        if (click == 0) {
            isSenderSelf = false;
        } else if (click > 0) {
            click = -1;
            isSenderSelf = true;
        }
    }
    SelectSender(CurrentRoomID, click, isSenderSelf);
});

//メッセージ送信
Send = (e) => {
    e.preventDefault();
    let messageText = TextBody.value;
    isSenderSelf ? messagePosition = 'right' : messagePosition = 'left';
    messageAnime(messageText, messagePosition, CurrentRoomID, CurrentSenderID);
}
let Form = document.getElementById('js-form');
document.send.addEventListener('submit', (e) => {
    Send(e);
});

//キーボード操作
TextBody.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
        if (e.keyCode == 13) {
            Send(e);
        }
    }
})


//メニュー開閉
MenuToggle = () => {
    MenuBtnIcon = document.querySelector('#js-menuBtn i');
    MenuBtn.addEventListener('click', function () {
        MenuBtn.classList.toggle('menu-open');
        MenuBtn.classList.toggle('menu-close');
        Menu.classList.toggle('menu-open');
        Menu.classList.toggle('menu-close');
        Form.classList.toggle('menu-open');
        Form.classList.toggle('menu-close');

        MenuBtnIcon.classList.toggle('fa-caret-right');
        MenuBtnIcon.classList.toggle('fa-caret-left');
        for (i = 0; i < document.getElementsByClassName('chat-area').length; i++) {
            ChatArea[i].classList.toggle('menu-open');
            ChatArea[i].classList.toggle('menu-close');
        }
        if (CurrentRoomID < CharaData.length) {
            isGroupTab = false;
        } else {
            isGroupTab = true;
        }
        TabBtn();
        document.getElementById("js-chara-list").scrollTop = document.getElementById("id" + CurrentRoomID).scrollHeight * CurrentRoomID;
    });
}
//通話画面
TelOpenBtn = document.getElementById('js-tel-openBtn');
TelCloseBtn = document.getElementById('js-tel-closeBtn');
TelModal = document.getElementById('js-telephone');
TelephoneToggle = () => {
    TelOpenBtn.addEventListener('click', function () {
        document.getElementsByClassName('tel-icon')[0].style.backgroundImage = "url(" + CharaData[CurrentRoomID].icon + ")";
        document.getElementsByClassName('tel-icon')[0].style.backgroundColor = CharaData[CurrentRoomID].color;
        document.getElementsByClassName('tel-name')[0].textContent = CharaData[CurrentRoomID].username;
        TelModal.classList.add('modal-open');
    });
    TelCloseBtn.addEventListener('click', function () {
        TelModal.classList.remove('modal-open');
    });
}

//ロック画面
LockBtn = document.getElementById('js-lockBtn');
LockScreenModal = document.getElementById('js-lockscreen');
LockScreenToggole = () => {
    LockBtn.addEventListener('click', function () {
        LockScreenModal.classList.add('modal-open');
        LoskScreenMessageList();
    });
    LockScreenModal.addEventListener('click', (e) => {
        if (e.target.className == 'lock-clockDay' || e.target.className == 'lock-clockTime') {
            return;
        } else {
            LockScreenModal.classList.remove('modal-open');
        }
    });
}

LoskScreenMessageList = () => {
    CurrentRoomMessage = document.querySelectorAll('.chat-active .message');
    CurrentRoomMessageLength = document.querySelectorAll('.chat-active .message').length

    if (document.getElementsByClassName("lock-noticeList").length > 0) {
        document.getElementsByClassName("lock-noticeList")[0].remove();
    }

    NoticeList = document.createElement('div');
    NoticeList.className = "lock-noticeList"

    for (i = CurrentRoomMessageLength - 1; i >= 0; i--) {
        if (CurrentRoomMessage[i].classList.contains('message-right')) {
            return
        }
        id = CurrentRoomMessage[i].dataset.senderid;

        NoticeBox = document.createElement('div');
        NoticeBox.className = "lock-noticeBox"
        NoticeBoxApp = document.createElement('div');
        NoticeBoxApp.className = "lock-noticeBox-app";
        NoticeBoxAppIcon = document.createElement('i');
        NoticeBoxAppIcon.className = "fa-solid fa-comment";
        NoticeBoxAppName = document.createElement('span');
        NoticeBoxAppName.textContent = "LIME";
        NoticeBoxMessageBox = document.createElement('div');
        NoticeBoxMessageBox.className = "lock-noticeBox-messageBox";
        NoticeBoxMessageBoxIcon = document.createElement('div');
        NoticeBoxMessageBoxIcon.className = "lock-messageBox-icon";
        NoticeBoxMessageBoxIcon.style.backgroundImage = "url(" + CharaData[id].icon + ")";
        NoticeBoxMessageBoxIcon.style.backgroundColor = CharaData[id].color;
        NoticeBoxMessageBoxMessage = document.createElement('div');
        NoticeBoxMessageBoxMessage.className = "lock-messageBox-message";
        NoticeBoxMessageBoxName = document.createElement('div');
        NoticeBoxMessageBoxName.className = "lock-messageBox-name";
        NoticeBoxMessageBoxName.textContent = CharaData[id].username;
        NoticeBoxMessageBoxText = document.createElement('div');
        NoticeBoxMessageBoxText.className = "lock-messageBox-text";
        NoticeBoxMessageBoxTextSpan = document.createElement('span');
        NoticeBoxMessageBoxTextSpan.textContent = CurrentRoomMessage[i].textContent;

        NoticeBoxMessageBoxText.appendChild(NoticeBoxMessageBoxTextSpan);
        NoticeBoxMessageBoxMessage.appendChild(NoticeBoxMessageBoxName);
        NoticeBoxMessageBoxMessage.appendChild(NoticeBoxMessageBoxText);
        NoticeBoxMessageBox.appendChild(NoticeBoxMessageBoxIcon);
        NoticeBoxMessageBox.appendChild(NoticeBoxMessageBoxMessage);
        NoticeBoxApp.appendChild(NoticeBoxAppIcon);
        NoticeBoxApp.appendChild(NoticeBoxAppName);

        NoticeBox.appendChild(NoticeBoxApp);
        NoticeBox.appendChild(NoticeBoxMessageBox);

        NoticeList.appendChild(NoticeBox);

        LockScreenModal.appendChild(NoticeList);

        if (NoticeBoxMessageBoxTextSpan.clientWidth > NoticeBoxMessageBoxMessage.clientWidth) {

            fontSize = (NoticeBoxMessageBoxTextSpan.currentStyle || document.defaultView.getComputedStyle(NoticeBoxMessageBoxTextSpan, '')).fontSize;
            fontSize = parseInt(fontSize);
            lastTextNum = Math.floor(NoticeBoxMessageBoxMessage.clientWidth / fontSize) - 1;
            newText = CurrentRoomMessage[i].textContent.substring(0, lastTextNum) + "…";
            NoticeBoxMessageBoxTextSpan.textContent = newText;
        }

    }
}
//Time
let Time = document.getElementById('js-time');
let timer = null;
let timeTimer = null;

let Clock = document.getElementById('js-clock');
let Day = document.getElementById('js-day');

let CurrentTime;
let CurrentDay;

const GetTime = () => {
    const now = new Date();
    let hours = now.getHours().toString();
    if (hours.length == 1) hours = '0' + hours;
    let minutes = now.getMinutes().toString();
    if (minutes.length == 1) minutes = '0' + minutes;
    let month = now.getMonth();
    let monthStr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = now.getDate();
    if (day.length == 1) day = '0' + day;
    let dayOfWeek = now.getDay();
    let dayOfWeekStr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    CurrentTime = String(hours) + ':' + String(minutes);
    Day.textContent = String(dayOfWeekStr[dayOfWeek]) + ' ' + day + ' ' + String(monthStr[month]);
    Day.textContent.replace(/\s|&nbsp;/g, '')
    timeTimer = setTimeout(GetTime, (60 - now.getSeconds()) * 1000);
    Time.textContent = CurrentTime;
    Clock.textContent = CurrentTime;
};

Time.addEventListener('click', (e) => {
    ResetTime(e);
})
Clock.addEventListener('click', (e) => {
    ResetTime(e);
})

ResetTime = (e) => {
    let old_text = e.target.textContent;
    let new_text = window.prompt('時刻編集', old_text);
    if (new_text == null) {
        Time.textContent = old_text;
        Clock.textContent = old_text;
        return;
    } else if (new_text == "") {
        if (window.confirm('現在時刻に変更しますか？')) {
            GetTime();
        }
        return;
    } else if (new_text.length) {
        clearTimeout(timeTimer);
        Time.textContent = new_text;
        Clock.textContent = new_text;
        return;
    }
}

Day.addEventListener('click', (e) => {
    let old_text = e.target.textContent;
    let new_text = window.prompt('日付編集', old_text);
    if (new_text == null) {
        e.target.textContent = old_text;
        return;
    } else if (new_text == "") {
        if (window.confirm('現在の日付に変更しますか？')) {
            GetTime();
        }
        return;
    } else if (new_text.length) {
        clearTimeout(timeTimer);
        e.target.textContent = new_text;
        return;
    }
})

//battery
let Battery = document.getElementById('js-battery');
Battery.addEventListener('click', (e) => {
    let old_text = document.querySelector('#js-battery span').textContent;
    let new_text = window.prompt('バッテリーレベル編集', old_text);
    if (new_text == null) {
        return;
    } else if (new_text == "") {
        return;
    } else if (new_text.length) {
        document.querySelector('#js-battery i').remove()
        document.querySelector('#js-battery span').textContent = new_text;

        level = new_text.replace('%', '');
        let BatteryIcon = document.createElement('i');
        if (75 < level) {
            BatteryIcon.className = 'fa-solid fa-battery-full fa-lg';
        } else if (50 < level && level <= 75) {
            BatteryIcon.className = 'fa-solid fa-battery-three-quarters fa-lg';
        } else if (25 < level && level <= 50) {
            BatteryIcon.className = 'fa-solid fa-battery-half fa-lg';
        } else if (10 < level && level <= 25) {
            BatteryIcon.className = 'fa-solid fa-battery-quarter fa-lg';
        } else if (0 < level && level <= 10) {
            BatteryIcon.className = 'fa-solid fa-battery-empty fa-lg';
        }
        Battery.appendChild(BatteryIcon);
        return;
    }
})


window.onresize = function () {
    NameScrollAnimation();
    LoskScreenMessageList();
}




//実行
GetTime();
AddGroup();
MenuToggle();
TelephoneToggle();
LockScreenToggole();
SelectRoom(DefaultRoomID);
DefaultMessage(DefaultRoomID);