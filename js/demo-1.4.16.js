!function(e) {
    function t(o) {
        if (n[o])
            return n[o].exports;
        var r = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "./",
    t(0)
}([function(e, t, n) {
    e.exports = n(1)
}
, function(e, t, n) {
    "use strict";
    n(2);
    var o = n(11)
      , r = n(240)
      , i = n(241);
    WebIM.Emoji = r,
    window.log = o.log,
    window.Demo = {
        groupType: "groupchat"
    },
    Demo.lan = i.Chinese,
    Demo.first = !0,
    Demo.api = o,
    Demo.chatRecord = {},
    Demo.localChatRecord = {},
    Demo.maxChatRecordCount = 2e4,
    Demo.roster = {},
    Demo.friends = [],
    Demo.strangers = {},
    Demo.blacklist = {},
    Demo.IMGTYPE = {
        gif: 1,
        bmp: 1,
        jpg: 1,
        png: 1
    },
    Demo.AUDIOTYPE = {
        mp3: 1,
        amr: 1,
        wmv: 1
    },
    Demo.chatingCate = "",
    Demo.selectedCate = "friends",
    Demo.chatState = {
        friends: {
            selected: "",
            scroll: 0,
            chatWindow: [],
            count: 0
        },
        groups: {
            selected: "",
            scroll: 0,
            chatWindow: [],
            count: 0
        },
        chatrooms: {
            selected: "",
            scroll: 0,
            chatWindow: [],
            count: 0
        },
        strangers: {
            selected: "",
            scroll: 0,
            chatWindow: [],
            count: 0
        },
        clear: function(e) {
            e ? (this[e].selected = "",
            this[e].scroll = 0,
            this[e].chatWindow = []) : (this.friends.selected = "",
            this.friends.scroll = 0,
            this.friends.chatWindow = [],
            this.groups.selected = "",
            this.groups.scroll = 0,
            this.groups.chatWindow = [],
            this.chatrooms.selected = "",
            this.chatrooms.scroll = 0,
            this.chatrooms.chatWindow = [],
            this.strangers.selected = "",
            this.strangers.scroll = 0,
            this.strangers.chatWindow = [])
        }
    },
    Demo.orgName = WebIM.config.appkey.split("#")[0],
    Demo.appName = WebIM.config.appkey.split("#")[1],
    Demo.conn = new WebIM.connection({
        isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
        https: "boolean" == typeof WebIM.config.https ? WebIM.config.https : "https:" === location.protocol,
        url: WebIM.config.xmppURL,
        heartBeatWait: WebIM.config.heartBeatWait,
        autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
        autoReconnectInterval: WebIM.config.autoReconnectInterval,
        apiUrl: WebIM.config.apiURL,
        isHttpDNS: WebIM.config.isHttpDNS,
        isWindowSDK: WebIM.config.isWindowSDK,
        isAutoLogin: !0,
        encrypt: WebIM.config.encrypt,
        delivery: WebIM.config.delivery,
        saveLocal: WebIM.config.saveLocal
    }),
    Demo.api.render(document.getElementById("demo"))
}
, function(e, t, n) {
    var o = n(3);
    "string" == typeof o && (o = [[e.id, o, ""]]);
    var r, i = {};
    i.transform = r;
    n(9)(o, i);
    o.locals && (e.exports = o.locals)
}
, function(e, t, n) {
    t = e.exports = n(4)(void 0),
    t.push([e.id, "article,body,div,em,h1,h2,h3,h4,h5,h6,html,i,li,ol,p,section,span,ul{font-family:Arial,Helvetica,sans-serif;margin:0;padding:0}body,html{width:100%;height:100%;font-size:13px;overflow-y:hidden;overflow-x:hidden;background-color:#fafafa;border:1px solid hsla(0,0%,98%,0);-webkit-font-smoothing:antialiased}button,input{outline:none}button:focus,input:focus{border:1px solid #4eb1f4;box-shadow:0 0 5px 0 rgba(25,161,219,.247059)}textarea{outline:none;resize:none}li,ol,ul{list-style:none}.pointer{cursor:pointer}.left{float:left}.right{float:right}.w100{width:100%;height:100%}.pad0{padding:0}.top50{margin-top:50px}.rel{position:relative}.dib{display:inline-block}object{z-index:3;position:absolute;left:340px;bottom:118px;width:84px}@font-face{font-family:webim;src:url(" + n(5) + ");src:url(" + n(6) + ') format("woff"),url(' + n(7) + ') format("truetype"),url(' + n(8) + '#iconfont) format("svg")}.font{width:40px;height:40px;font-family:webim!important;font-size:40px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.font.small{width:30px;height:30px;font-size:30px}.font.xsmaller{width:26px;height:26px;font-size:26px}.font.smaller{width:24px;height:24px;font-size:24px}.font.smallest{width:16px;height:16px;font-size:16px}.hide{display:none}.bg-color{color:#fff;border:1px solid #4eb1f4;-webkit-tap-highlight-color:transparent;background-color:#4eb1f4}.color,.hover-color:hover{color:#4eb1f4}.webim-logo{width:200px;margin:0 auto}.webim{position:absolute;right:0;left:0;margin:auto;top:10%;bottom:10%}.copyright{z-index:3;position:absolute;width:100%;bottom:10px;text-align:center;color:#ccc}.webim-rtc-video{z-index:3;cursor:pointer;position:fixed;margin:auto;right:0;left:0;top:0;bottom:0;overflow:hidden;border-radius:4px;background-color:#ccc}.webim-rtc-video video{position:absolute}.webim-rtc-video video.full{z-index:1;width:100%;height:100%;object-fit:contain}.webim-rtc-video video.corner{z-index:2;top:40px;left:auto;right:10px;bottom:auto;max-height:17%;max-width:17%;object-fit:contain}.webim-rtc-video span{margin:0 auto;left:0;right:0;top:6px;bottom:0;width:200px;height:80px;color:#fff}.webim-rtc-video i,.webim-rtc-video span{z-index:2;position:absolute;text-align:center}.webim-rtc-video i{background-color:hsla(0,0%,100%,.2);font-style:normal;border-radius:50%;color:rgba(0,0,0,.2);cursor:pointer}.webim-rtc-video i.close{color:#e90101}.webim-rtc-video i.accept,.webim-rtc-video i.toggle{color:#98e024}.webim-rtc-video i.mute{color:#eee}.webim-loading{position:fixed;z-index:3;background-color:#fafafa;width:100%;height:100%;top:0;left:0}.webim-loading img{position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;width:24px}.webim-button{font-size:16px;box-sizing:border-box;display:inline-block;margin:10px auto;width:300px;height:36px;cursor:pointer;border-radius:2px}.webim-button.error{background-color:#ff3a00;border:1px solid #ff3a00}.webim-button:hover{background-color:#1aa1e4}.webim-input{box-sizing:border-box;font-size:14px;padding:0 4px;display:inline-block;margin:10px auto 0;width:300px;height:36px;line-height:36px;cursor:pointer;border-radius:2px;border:1px solid #e5e5e5;-webkit-tap-highlight-color:transparent;background-color:#fff}.webim-checkbox{text-align:left;margin:10px 0 10px 5px;padding-left:50px;box-sizing:border-box}.webim-checkbox span{height:30px;line-height:30px}.webim-checkbox>i{position:relative;margin-right:6px;width:14px;height:14px;border-radius:2px;display:inline-block;vertical-align:middle;border:1px solid #ccc;cursor:pointer}.webim-checkbox>i:hover{background-color:#fff}.webim-checkbox>i:hover em{display:inline-block;color:#ccc}.webim-checkbox>i.checked{background-color:#afd7e8}.webim-checkbox>i.checked em{display:inline-block;color:#000}.webim-checkbox>i em{display:none;position:absolute;left:-6px;top:-10px;color:#000}.webim-leftbar{position:relative;width:50px;text-align:center;border-radius:2px 0 0 2px;border:1px solid #f2f2f2;background-color:#fcfdfb}.webim-contact-wrapper,.webim-leftbar{float:left;height:100%;-webkit-tap-highlight-color:transparent}.webim-contact-wrapper{width:250px;overflow-x:hidden;overflow-y:auto;border-right:1px solid #f2f2f2;background-color:#fff}.webim-contact-item{cursor:pointer;position:relative;width:100%;overflow:hidden;height:60px}.webim-contact-item .webim-avatar-icon{float:left;margin:10px}.webim-contact-item .webim-contact-info{position:relative}.webim-contact-item .webim-contact-handlers{text-align:right;position:absolute;right:2px;top:0}.webim-contact-item .webim-contact-handlers i{font-size:16px;line-height:36px}.webim-contact-item .webim-contact-username,.webim-contact-item>span{color:#1a1a1a;font-size:14px;margin:10px 0;display:inline-block;width:calc(100% - 70px);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.webim-contact-item>i{display:inline-block;right:2px;bottom:10px;top:auto}.webim-contact-item>em{display:block;height:20px;line-height:20px;width:calc(100% - 100px);position:absolute;margin:auto;left:30px;top:30px;right:10px;color:#999;font-style:normal;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.webim-contact-item>em img{width:20px;vertical-align:middle}.webim-contact-item.selected{background-color:#f3f6f6}.webim-profile-avatar{display:inline-block;margin:10px auto}.webim-avatar-icon{width:40px;height:40px;border-radius:50%;overflow:hidden;-webkit-filter:contrast(1.2);-webkit-tap-highlight-color:transparent}.webim-avatar-icon.small{width:30px;height:30px}.webim-leftbar-icon,.webim-operations-icon{position:relative;display:inline-block;cursor:pointer;margin-bottom:10px;color:#ccc}.webim-leftbar-icon .rotate,.webim-operations-icon .rotate{transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg)}.webim-leftbar-icon.selected,.webim-leftbar-icon:hover,.webim-operations-icon.selected,.webim-operations-icon:hover{color:#4eb1f4}.webim-operations-icon{color:#ccc;position:absolute;margin-bottom:0;bottom:10px;left:10px}.webim-operations-icon:hover{color:#4eb1f4}.webim-operations{z-index:1;position:absolute;text-align:left;left:40px;bottom:10px;width:160px;box-shadow:0 0 6px 0 rgba(0,0,0,.298039);background-color:#fff}.webim-operations i{margin:0 10px;color:#ccc}.webim-operations span{vertical-align:top;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.webim-operations li{height:30px;line-height:30px;cursor:pointer;overflow:hidden}.webim-operations li:hover{color:#4eb1f4;background-color:#f2f2f2}.webim-operations li:hover i{color:#4eb1f4}.webim-operations li:nth-child(2) i{display:inline-block;margin-top:-4px;vertical-align:top}.webim-operations li:last-child:hover,.webim-operations li:last-child:hover i{color:#e90101}.webim-msg-prompt{position:absolute;top:-4px;right:0;line-height:16px;font-style:normal;width:16px;height:16px;font-size:12px;text-align:center;color:#fff;border-radius:50%;border:2px solid #fcfdfb;-webkit-tap-highlight-color:transparent;background-color:#ff3a00}.webim-msg-icon-prompt{width:10px;height:10px;top:0;right:8px}.webim-blacklist-wrapper{position:relative;height:100%;width:100%;overflow-x:hidden;overflow-y:auto;-webkit-tap-highlight-color:transparent;background-color:#fff}.webim-blacklist-item{position:relative;cursor:pointer;display:block;width:100%;overflow:hidden;height:30px;font-size:20px;line-height:30px}.webim-blacklist-item i.font{line-height:30px;float:right;position:static}.webim-operation-icon{width:100px;float:right;margin-right:10px;text-align:right}* :focus{outline:0}.webim-notify{z-index:3;position:fixed;top:10px;word-wrap:break-word;padding:4px;width:50%;color:#fff;left:0;right:0;margin:0 auto;max-width:90%;min-height:30px;border-radius:2px;line-height:30px;text-align:center;box-shadow:0 2px 6px 0 rgba(0,0,0,.0980392);-webkit-tap-highlight-color:transparent;border:0 none #000}.webim-notify.success{background-color:#aeda3e}.webim-notify.error{background-color:#ff3a00}.webim-notify i{position:absolute;right:10px;top:9px}.webim-sign{overflow:hidden;width:400px;margin:40px auto;text-align:center;border-radius:2px;box-shadow:0 0 6px 0 rgba(0,0,0,.298039);border:0 none #000;-webkit-tap-highlight-color:transparent;background-color:#fff}.webim-sign h2{font-size:24px;color:#1a1a1a;width:100%;line-height:84px;height:64px}.webim-sign p{margin:0 auto 40px;width:300px;text-align:left}.webim-sign p i{font-style:normal;color:#4eb1f4;cursor:pointer}.webim-sign.webim-signup button{margin-top:30px}.webim-chat{position:relative;max-width:1024px;min-width:960px;max-height:600px;height:100%;margin:auto;box-shadow:0 0 6px 0 rgba(0,0,0,.298039);border:0 none #000;-webkit-tap-highlight-color:transparent;background-color:#fff;border-radius:2px;overflow:hidden}.webim-chatwindow{position:relative;float:left;height:100%;width:calc(100% - 303px)}.webim-chatwindow textarea{position:absolute;bottom:40px;right:0;box-sizing:border-box;height:80px;border:none;width:100%;padding:10px 15px}.webim-chatwindow .webim-group-memeber{position:absolute;left:0;right:0;top:40px;margin:auto;padding:10px 7px;border-radius:2px;width:200px;overflow:auto;box-shadow:0 0 6px 0 rgba(0,0,0,.298039);z-index:2;background:#fff;max-height:300px}.webim-chatwindow .webim-group-memeber li{height:30px;padding:0 4px;box-sizing:border-box;text-align:left}.webim-chatwindow .webim-group-memeber li>div{display:inline-block;margin-right:6px;width:20px;height:20px}.webim-chatwindow .webim-group-name{max-width:64px;overflow:hidden;text-overflow:ellipsis;display:inline-block}.webim-chatwindow-title{position:absolute;top:0;width:100%;height:40px;line-height:40px;text-align:center;font-size:14px}.webim-chatwindow-title i{color:#ccc;vertical-align:middle;cursor:pointer;margin-left:10px;padding-bottom:22px}.webim-chatwindow-title i.webim-up-icon{transform:rotate(180deg)}.webim-chatwindow-title i.webim-call-icon{position:absolute;left:0;top:0}.webim-chatwindow-title i.webim-accept-icon{position:absolute;left:40px;top:0}.webim-chatwindow-options{border-top:1px solid #f2f2f2;width:100%;z-index:1;position:absolute;bottom:120px;left:0;height:30px;line-height:30px}.webim-chatwindow-options>span{margin-left:6px;color:#ccc;cursor:pointer}.webim-chatwindow-options>span:hover{color:#4eb1f4}.webim-send-btn{position:absolute;bottom:0;right:10px;width:80px;height:24px;font-size:12px}.webim-chatwindow-msg{top:40px;overflow-x:hidden;overflow-y:auto;padding:20px 10px;width:100%}.webim-chatwindow-msg,.webim-send-wrapper>ul{z-index:1;position:absolute;bottom:150px;box-sizing:border-box}.webim-send-wrapper>ul{width:280px;height:194px;left:-140px;border-radius:2px;background:#fff;padding:4px;box-shadow:0 4px 12px 0 rgba(0,0,0,.298039)}.webim-send-wrapper>ul li{cursor:pointer;display:inline-block;margin:2px 3px 0}#test{position:fixed;bottom:0;left:0;z-index:2222}.webim-msg-container{overflow:hidden;margin:24px 0}.webim-msg-container>div{max-width:60%;overflow:hidden}.webim-msg-container .right>p{color:#999;letter-spacing:1px;margin-right:10px}.webim-msg-container .right .webim-msg-icon{color:#b4e4fc;right:-40px}.webim-msg-container .right .webim-msg-delivered{float:left;margin:6px 2px 0 0;background-color:#ccc}.webim-msg-container .right .webim-msg-value{float:right;margin:6px 10px 0 0;background-color:#b4e4fc}.webim-msg-container .right .webim-msg-error{float:right;margin:6px 10px 0 0}.webim-msg-container .right .webim-msg-header{text-align:right}.webim-msg-container .left>p{color:#999;letter-spacing:1px;margin-left:10px}.webim-msg-container .left .webim-msg-icon{color:#f1f2ec;left:-10px}.webim-msg-container .left .webim-msg-value{background-color:#f1f2ec;float:left;margin:6px 0 0 10px}.webim-msg-container .left .webim-msg-header{text-align:left}.webim-msg-icon{position:absolute;top:4px;font-size:10px}.webim-msg-value{position:relative;min-height:30px;max-width:calc(100% - 80px);border-radius:4px;padding:6px;box-sizing:border-box;min-width:60%}.webim-msg-value video{width:100%}.webim-msg-value.webim-img-msg-wrapper{padding:1px}.webim-msg-value>div,.webim-msg-value>pre{white-space:pre-wrap;word-break:break-all;color:#1a1a1a;font-size:14px;line-height:20px;margin:0}.webim-msg-value .emoji{width:32px;vertical-align:bottom}.webim-msg-value i{font-style:normal;margin-left:40px}.webim-msg-value a,.webim-msg-value i{display:block;font-size:12px;color:rgba(0,0,0,.25)}.webim-msg-value a{margin-left:30px;margin-top:-28px;text-decoration:none}.webim-msg-img{max-width:100%;vertical-align:middle;cursor:pointer;border-radius:4px}.webim-msg-header{line-height:30px;margin-bottom:4px;border-bottom:1px solid rgba(0,0,0,.15)}.webim-msg-header-icon{vertical-align:middle;display:inline-block;margin:-46px 4px 0 -4px;line-height:40px;color:#868683}.webim-msg-name{width:calc(100% - 80px);height:40px;text-overflow:ellipsis;white-space:nowrap}.webim-msg-fileSize,.webim-msg-name{display:inline-block;overflow:hidden}.webim-msg-fileSize{float:right;width:47px}.webim-img-expand{position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,.3);z-index:3}.webim-img-expand img{position:absolute;top:0;left:0;right:0;bottom:0;max-width:90%;max-height:90%;margin:auto}.webim-audio-slash{background-color:transparent;position:absolute;width:100%;height:100%;top:0;left:0;border-radius:4px}.slash{animation:slash 1s infinite;-moz-animation:slash 1s infinite;-webkit-animation:slash 1s infinite}@keyframes slash{0%{background-color:transparent}50%{background-color:rgba(0,0,0,.1)}to{background-color:transparent}}@-moz-keyframes slash{0%{background-color:transparent}50%{background-color:rgba(0,0,0,.1)}to{background-color:transparent}}@-webkit-keyframes slash{0%{background-color:transparent}50%{background-color:rgba(0,0,0,.1)}to{background-color:transparent}}.clearfix:after{content:" ";display:table;clear:both}.webim-dialog{z-index:3;position:absolute;width:400px;min-height:168px;top:20%;left:0;right:0;margin:auto;border-radius:2px;box-shadow:0 0 8px 0 rgba(0,0,0,.298039);background-color:#fff}.webim-dialog h3{line-height:40px;box-sizing:border-box;padding-left:10px;border-bottom:1px solid rgba(0,0,0,.1);font-weight:400}.webim-dialog .font{font-size:20px;position:absolute;right:6px;top:6px;width:20px;height:20px;color:rgba(0,0,0,.1);cursor:pointer}.webim-dialog>div{border-bottom:1px solid rgba(0,0,0,.1);padding:10px}.webim-dialog .webim-dialog-button{position:absolute;right:8px;bottom:2px;width:80px;height:26px}.webim-dialog .webim-dialog-button-search{bottom:2px;width:80px;height:30px;margin-left:70px}.webim-dialog .webim-dialog-button-left{position:absolute;right:100px;bottom:2px;width:80px;height:26px}.webim-dialog .webim-subscribe-button{width:60px;height:30px;margin-left:10px}.webim-dialog input{height:30px;width:220px}.webim-dialog input.checkbox{height:auto}.webim-dialog textarea{margin-top:20px;right:0;box-sizing:border-box;height:80px;border:1px solid rgba(0,0,0,.1);width:220px}.webim-dialog-body{min-height:100px;max-height:126px;overflow-y:scroll;overflow-x:hidden}.webim-dialog-body-detail{width:100%}.webim-dialog-body-detail span.title{font-size:14px;display:block;font-weight:700;margin-bottom:5px}.webim-dialog-body-detail span.content{font-size:12px;color:#6a737c}.webim-dialog .webim-dialog-footer{padding:10px;position:relative;min-height:20px;text-align:right}.webim-dialog .webim-dialog-footer .webim-button{position:static;margin-right:10px}.webim-dialog .webim-dialog-footer .webim-group-back{position:absolute;left:0;height:67px;width:50px;background-color:#f2f2f2;top:0;border-radius:0 2px 2px 0;text-align:center;cursor:pointer}.webim-dialog .webim-dialog-footer .webim-group-back span{line-height:67px;font-size:30px;font-weight:700;color:#868683}.webim-dialog-2{height:450px}.webim-friend-requests{height:auto}.webim-friend-requests span{width:60%;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.webim-friend-requests>div{overflow:auto;max-height:400px}.webim-body-loading{height:86px;width:400px;position:absolute;opacity:.5;z-index:999;margin-top:-10px;margin-left:-10px;padding-top:61px}.webim-body-loading img{margin:auto;display:block;width:30px;line-height:inherit}.webim-layer{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;background-color:rgba(0,0,0,.25)}.react-multi-select-box-container{position:relative;width:240px;display:inline-block;background-color:#fff;border-radius:4px;text-align:left;box-shadow:0 0 2px rgba(0,0,0,.3)}.react-multi-select-box{padding:10px 0;display:inline-block;cursor:pointer;border:none;width:100%;text-align:left;background-color:transparent}.react-multi-select-box:before{height:20px;top:-7px;border-bottom:4px solid #a7a8aa}.react-multi-select-box:after,.react-multi-select-box:before{content:" ";position:absolute;z-index:1;right:13px;border-left:3px solid transparent;border-right:3px solid transparent}.react-multi-select-box:after{top:20px;border-top:4px solid #a7a8aa}.react-multi-select-box-label{padding:0 40px 0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#333;line-height:16px}.react-multi-select-box-empty .react-multi-select-box-label{color:#c5c5c5}.react-multi-select-area{position:absolute;margin-top:4px;padding:0 10px;height:225px;min-width:260px;border-radius:4px;background-color:#fff;z-index:4;box-shadow:0 0 2px rgba(0,0,0,.3)}.react-multi-select-box-hidden,.react-multi-select-hide{display:none}.react-multi-select-panel{display:flex;height:185px}.react-multi-select-col{min-width:110px;overflow-y:auto}.react-multi-select-col .selected-option-row{padding:5px 0;cursor:pointer}.react-multi-select-sign{display:flex;flex-direction:column;justify-content:center;width:15px}.react-multi-select-sign i{width:6px;height:6px;border-top:2px solid #a9a9a9;border-right:2px solid #a9a9a9;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.react-multi-select-area-btn{padding:5px 0;height:40px;border-top:1px solid #eee;text-align:center}.react-multi-select-area-btn .eg-btn{padding:4px 20px;margin-right:10px}.react-multi-select-area-btn .eg-btn:last-child{margin-right:0}.classification{padding:5px 0;cursor:pointer}.react-multi-select-list-arrow{position:relative;display:inline-block;vertical-align:middle;width:8px;height:8px}.react-multi-select-list-arrow:before{content:" ";position:absolute;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:4px solid #87c2e5}.react-multi-select-list-arrow.expand:before{content:" ";position:absolute;border-left:3px solid transparent;border-right:3px solid transparent;border-top:4px solid #87c2e5}.react-multi-select-sub-options{padding-left:16px}.react-multi-select-list-option:last-child{padding-bottom:0}.react-multi-select-list-option .eg-input.checkbox .input-icon{margin-right:2px}.react-multi-select-list-option .eg-input.checkbox.active .input-icon{fill:#87c2e5}.react-multi-select-list-option .react-multi-select-box-option{position:relative;padding:5px 0 5px 20px;margin:0;cursor:pointer;display:block;text-decoration:none}.react-multi-select-list-option .react-multi-select-box-option:before{content:" ";position:absolute;text-align:center;line-height:1.1;left:2px;top:8px;height:12px;width:12px;margin-right:10px;border:1px solid #7b8e9b;background:#f9f9f9;vertical-align:middle}.react-multi-select-list-option .react-multi-select-box-option-selected:before{content:"\\2713";color:#87c2e5}.react-multiple-select-type-name{padding:5px 0 4px;border-bottom:1px solid #eee;color:#c5c5c5}.react-multi-select-btn{padding:4px 20px;border-radius:6px;background-color:#307fc8;display:inline-block;margin-right:10px;margin-bottom:0;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;outline:0;text-decoration:none;font-weight:400;font-size:14px;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;border-color:transparent}.react-multi-select-btn:last-child{margin-right:0}.react-multi-select-btn-white{background-color:#fff;color:#333;border-color:#d5d5d5}.webim-chatwindow .webim-operations-icon{top:5px;left:auto;right:10px;bottom:0}.webim-chatwindow .webim-operations{left:inherit;right:40px;top:10px;bottom:auto;z-index:2}.webim-friend-options span.radio_span{width:80px;display:inline-block}.webim-friend-options input.radio{height:10px;width:20px}.webim_isWindowSDK{top:0;bottom:0}.webim_isWindowSDK .webim-chat{max-width:100%;min-width:100%;max-height:100%;width:100%}.webim-friend-requests-windowSDK{width:500px}.webim-friend-requests-windowSDK span{width:100%}.webim-msg-value a.dir{margin-left:130px;margin-top:-20px}.webim-leftbar .username{width:100%;overflow:hidden}.webim-loading span{position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;width:200px;height:80px;text-align:center}span.red{color:#ff2a00}.webim-contact-loading{width:24px;margin:0 auto}.webim-contact-loading img{width:24px}', ""])
}
, function(e, t) {
    function n(e, t) {
        var n = e[1] || ""
          , r = e[3];
        if (!r)
            return n;
        if (t && "function" == typeof btoa) {
            var i = o(r)
              , a = r.sources.map(function(e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */"
            });
            return [n].concat(a).concat([i]).join("\n")
        }
        return [n].join("\n")
    }
    function o(e) {
        var t = btoa(unescape(encodeURIComponent(JSON.stringify(e))))
          , n = "sourceMappingURL=data:application/json;charset=utf-8;base64," + t;
        return "/*# " + n + " */"
    }
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var o = n(t, e);
                return t[2] ? "@media " + t[2] + "{" + o + "}" : o
            }).join("")
        }
        ,
        t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var o = {}, r = 0; r < this.length; r++) {
                var i = this[r][0];
                "number" == typeof i && (o[i] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var a = e[r];
                "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                t.push(a))
            }
        }
        ,
        t
    }
}
, function(e, t, n) {
    e.exports = n.p + "demo/stylesheet/src/font/iconfont.eot"
}
, function(e, t, n) {
    e.exports = n.p + "demo/stylesheet/src/font/iconfont.woff"
}
, function(e, t, n) {
    e.exports = n.p + "demo/stylesheet/src/font/iconfont.ttf"
}
, function(e, t, n) {
    e.exports = n.p + "demo/stylesheet/src/font/iconfont.svg"
}
, function(e, t, n) {
    function o(e, t) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n]
              , r = f[o.id];
            if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++)
                    r.parts[i](o.parts[i]);
                for (; i < o.parts.length; i++)
                    r.parts.push(u(o.parts[i], t))
            } else {
                for (var a = [], i = 0; i < o.parts.length; i++)
                    a.push(u(o.parts[i], t));
                f[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function r(e, t) {
        for (var n = [], o = {}, r = 0; r < e.length; r++) {
            var i = e[r]
              , a = t.base ? i[0] + t.base : i[0]
              , s = i[1]
              , l = i[2]
              , c = i[3]
              , u = {
                css: s,
                media: l,
                sourceMap: c
            };
            o[a] ? o[a].parts.push(u) : n.push(o[a] = {
                id: a,
                parts: [u]
            })
        }
        return n
    }
    function i(e, t) {
        var n = v(e.insertInto);
        if (!n)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = w[w.length - 1];
        if ("top" === e.insertAt)
            o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
            w.push(t);
        else {
            if ("bottom" !== e.insertAt)
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }
    function a(e) {
        if (null === e.parentNode)
            return !1;
        e.parentNode.removeChild(e);
        var t = w.indexOf(e);
        t >= 0 && w.splice(t, 1)
    }
    function s(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css",
        c(t, e.attrs),
        i(e, t),
        t
    }
    function l(e) {
        var t = document.createElement("link");
        return e.attrs.type = "text/css",
        e.attrs.rel = "stylesheet",
        c(t, e.attrs),
        i(e, t),
        t
    }
    function c(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n])
        })
    }
    function u(e, t) {
        var n, o, r, i;
        if (t.transform && e.css) {
            if (i = t.transform(e.css),
            !i)
                return function() {}
                ;
            e.css = i
        }
        if (t.singleton) {
            var c = y++;
            n = b || (b = s(t)),
            o = p.bind(null, n, c, !1),
            r = p.bind(null, n, c, !0)
        } else
            e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t),
            o = m.bind(null, n, t),
            r = function() {
                a(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = s(t),
            o = d.bind(null, n),
            r = function() {
                a(n)
            }
            );
        return o(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                    return;
                o(e = t)
            } else
                r()
        }
    }
    function p(e, t, n, o) {
        var r = n ? "" : o.css;
        if (e.styleSheet)
            e.styleSheet.cssText = E(t, r);
        else {
            var i = document.createTextNode(r)
              , a = e.childNodes;
            a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
    function d(e, t) {
        var n = t.css
          , o = t.media;
        if (o && e.setAttribute("media", o),
        e.styleSheet)
            e.styleSheet.cssText = n;
        else {
            for (; e.firstChild; )
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    function m(e, t, n) {
        var o = n.css
          , r = n.sourceMap
          , i = void 0 === t.convertToAbsoluteUrls && r;
        (t.convertToAbsoluteUrls || i) && (o = _(o)),
        r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var a = new Blob([o],{
            type: "text/css"
        })
          , s = e.href;
        e.href = URL.createObjectURL(a),
        s && URL.revokeObjectURL(s)
    }
    var f = {}
      , h = function(e) {
        var t;
        return function() {
            return "undefined" == typeof t && (t = e.apply(this, arguments)),
            t
        }
    }
      , g = h(function() {
        return window && document && document.all && !window.atob
    })
      , v = function(e) {
        var t = {};
        return function(n) {
            return "undefined" == typeof t[n] && (t[n] = e.call(this, n)),
            t[n]
        }
    }(function(e) {
        return document.querySelector(e)
    })
      , b = null
      , y = 0
      , w = []
      , _ = n(10);
    e.exports = function(e, t) {
        t = t || {},
        t.attrs = "object" == typeof t.attrs ? t.attrs : {},
        t.singleton || (t.singleton = g()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
        var n = r(e, t);
        return o(n, t),
        function(e) {
            for (var i = [], a = 0; a < n.length; a++) {
                var s = n[a]
                  , l = f[s.id];
                l.refs--,
                i.push(l)
            }
            if (e) {
                var c = r(e, t);
                o(c, t)
            }
            for (var a = 0; a < i.length; a++) {
                var l = i[a];
                if (0 === l.refs) {
                    for (var u = 0; u < l.parts.length; u++)
                        l.parts[u]();
                    delete f[l.id]
                }
            }
        }
    }
    ;
    var E = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n,
            e.filter(Boolean).join("\n")
        }
    }()
}
, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t)
            throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e)
            return e;
        var n = t.protocol + "//" + t.host
          , o = n + t.pathname.replace(/\/[^\/]*$/, "/")
          , r = e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var r = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))
                return e;
            var i;
            return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""),
            "url(" + JSON.stringify(i) + ")"
        });
        return r
    }
}
, function(e, t, n) {
    "use strict";
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , i = n(12)
      , a = n(164)
      , s = n(165)
      , l = n(198)
      , c = n(199)
      , u = n(200)
      , p = n(203)
      , d = n(204)
      , m = n(205)
      , f = n(167)
      , h = n(178)
      , g = (n(206),
    function() {
        function e() {
            return Demo.blacklist = g,
            g
        }
        function t(t) {
            return g[t] = h.find(Demo.friends, function(e) {
                return e.name == t
            }),
            e()
        }
        function n(t) {
            return g[t] = {
                type: "jid",
                order: y++,
                jid: t,
                name: t
            },
            e()
        }
        function o(t) {
            try {
                delete g[t]
            } catch (e) {}
            return e()
        }
        function r(t) {
            try {
                delete g[t]
            } catch (e) {
                console.log("blacklist remove error")
            }
            return e()
        }
        function i(t) {
            return g = t,
            e()
        }
        function a(t) {
            g = {};
            var n = t ? JSON.parse(t) : [];
            return h.each(n, function(e, t) {
                g[e.name] = {
                    type: "jid",
                    order: y++,
                    jid: e.name,
                    name: e.name
                }
            }),
            e()
        }
        function s(e) {
            e.success || w,
            e.success || w;
            Demo.conn.getBlacklist()
        }
        function l(e) {
            var t = e.success || w
              , n = e.success || w;
            WebIM.doQuery('{"type":"getBlacklist"}', function(e) {
                var n = Demo.api.blacklist.parse(e);
                Demo.api.updateRoster(),
                t(n)
            }, function(e, t) {
                Demo.api.NotifyError("getRoster:" + e),
                n()
            })
        }
        function c(e) {
            var t = e.success || w;
            e.success || w;
            e.success = function(e) {
                v = e.data,
                t(e.data)
            }
            ,
            Demo.conn.getGroupBlacklistNew(e)
        }
        function u(e) {
            var t = e.success || w;
            e.success || w;
            WebIM.doQuery('{"type":"groupSpecification","id":"' + e.roomId + '"}', function(e) {
                if (e) {
                    var n = JSON.parse(e) || {}
                      , o = {
                        owner: [{
                            jid: n.owner,
                            affiliation: "owner"
                        }],
                        members: n.members,
                        blacklist: n.bans
                    };
                    t(o.blacklist, o.members)
                }
            }, function(e, t) {
                Demo.api.NotifyError("queryRoomInfo:" + e)
            })
        }
        function p(e) {
            var t = e.success || w;
            e.success || w;
            e.success = function(e) {
                v = e,
                t(e)
            }
            ,
            Demo.conn.removeGroupMemberFromBlacklist(e)
        }
        function d(e) {
            var t = e.success || w
              , n = e.success || w
              , o = {
                type: "unblockGroupMembers",
                id: e.roomId,
                members: [e.to]
            };
            WebIM.doQuery(JSON.stringify(o), function() {
                t()
            }, function(e, t) {
                Demo.api.NotifyError("_removeGoupMemberWin:" + e),
                n()
            })
        }
        function m(e) {
            e.success || w,
            e.success || w;
            Demo.conn.addToGroupBlackList(e)
        }
        function f(e) {
            var t = e.success || w
              , n = e.success || w
              , o = {
                type: "blockGroupMembers",
                reason: "",
                id: e.roomId,
                members: [e.to]
            };
            WebIM.doQuery(JSON.stringify(o), t, function(e, t) {
                Demo.api.NotifyError("_addGroupMemberToBlacklistWin:" + e),
                n()
            })
        }
        var g = {}
          , v = {}
          , b = WebIM.config.isWindowSDK
          , y = 2
          , w = function() {};
        return {
            add: b ? n : t,
            parse: b ? a : i,
            remove: b ? r : o,
            getBlacklist: b ? l : s,
            getGroupBlacklist: b ? u : c,
            removeGroupMemberFromBlacklist: b ? d : p,
            addGroupMemberToBlacklist: b ? f : m,
            data: function() {
                return g
            }
        }
    }());
    e.exports = {
        log: function() {
            "object" === ("undefined" == typeof window ? "undefined" : r(window)) && "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
        },
        render: function(e, t) {
            this.node = e;
            var n = {};
            switch (t) {
            case "roster":
                n.rosterChange = !0;
                break;
            case "group":
                n.groupChange = !0;
                break;
            case "chatroom":
                n.chatroomChange = !0;
                break;
            case "stranger":
                n.strangerChange = !0;
                break;
            default:
                n = null
            }
            n ? a.render(i.createElement(s, o({
                config: WebIM.config,
                close: this.logout
            }, n)), this.node) : a.render(i.createElement(s, {
                config: WebIM.config,
                close: this.logout
            }), this.node)
        },
        logout: function(e) {
            WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"logout"}', function(e) {
                Demo.api.init()
            }, function(e, t) {
                Demo.api.NotifyError("logout:" + t)
            }) : (window.location.href = "#",
            Demo.conn.close("logout"),
            e == WebIM.statusCode.WEBIM_CONNCTION_CLIENT_LOGOUT && (Demo.conn.errorType = e));
        },
        init: function() {
            Demo.selected = null,
            Demo.call = null,
            Demo.roster = {},
            Demo.strangers = {},
            Demo.blacklist = {},
            Demo.selectedCate = "friends",
            Demo.chatState.clear(),
            Demo.currentChatroom && delete Demo.chatRecord[Demo.currentChatroom],
            a.unmountComponentAtNode(this.node),
            this.render(this.node)
        },
        addToChatRecord: function(e, t, n) {
            var o = e.data || e.msg || ""
              , r = this.getBrief(o, t)
              , i = e.id;
            this.sentByMe = e.from === Demo.user;
            var a = this.sentByMe || "chat" !== e.type ? e.to : e.from;
            Demo.chatRecord[a] && Demo.chatRecord[a].messages ? Demo.chatRecord[a].messages.length >= Demo.maxChatRecordCount && Demo.chatRecord[a].messages.shift() : (Demo.chatRecord[a] = {},
            Demo.chatRecord[a].messages = []),
            Demo.chatRecord[a].brief = r,
            Demo.chatRecord[a].briefType = t,
            Demo.chatRecord[a].messages[i] = {
                message: e,
                type: t,
                status: n
            },
            Demo.conn.addToLocal(e, t, n)
        },
        releaseChatRecord: function(e) {
            var e = e || Demo.selected;
            if (Demo.first) {
                for (var t in Demo.chatRecord)
                    if (e = t,
                    Demo.chatRecord[e] && Demo.chatRecord[e].messages) {
                        document.getElementById("wrapper" + e) && (document.getElementById("wrapper" + e).innerHTML = "");
                        for (var t in Demo.chatRecord[e].messages)
                            void 0 != Demo.chatRecord[e].messages[t] && (Demo.chatRecord[e].messages[t].read || Demo.api.appendMsg(Demo.chatRecord[e].messages[t].message, Demo.chatRecord[e].messages[t].type, Demo.chatRecord[e].messages[t].status, t))
                    }
            } else if (e && Demo.chatRecord[e] && Demo.chatRecord[e].messages) {
                document.getElementById("wrapper" + e) && (document.getElementById("wrapper" + e).innerHTML = "");
                for (var t in Demo.chatRecord[e].messages)
                    void 0 != Demo.chatRecord[e].messages[t] && (Demo.chatRecord[e].messages[t].read = !0,
                    Demo.api.sendRead(Demo.chatRecord[e].messages[t].message),
                    Demo.api.appendMsg(Demo.chatRecord[e].messages[t].message, Demo.chatRecord[e].messages[t].type, Demo.chatRecord[e].messages[t].status, t))
            }
        },
        sendRead: function(e) {
            if (WebIM.config.isWindowSDK,
            WebIM.config.read) {
                var t = Demo.conn.getUniqueId()
                  , n = e.id
                  , o = new WebIM.message("read",t);
                o.set({
                    id: n,
                    to: e.from
                }),
                Demo.conn.send(o.body)
            }
        },
        getBrief: function(e, t) {
            var n = "";
            switch (t) {
            case "txt":
                n = WebIM.utils.parseEmoji(this.encode(e).replace(/\n/gm, ""));
                break;
            case "emoji":
                for (var o = 0, r = e.length; o < r; o++)
                    n += "emoji" === e[o].type ? '<img src="' + WebIM.utils.parseEmoji(this.encode(e[o].data)) + '" />' : this.encode(e[o].data);
                break;
            case "img":
                n = "[" + Demo.lan.image + "]";
                break;
            case "aud":
                n = "[" + Demo.lan.audio + "]";
                break;
            case "cmd":
                n = "[" + Demo.lan.cmd + "]";
                break;
            case "file":
                n = "[" + Demo.lan.file + "]";
                break;
            case "loc":
                n = "[" + Demo.lan.location + "]";
                break;
            case "video":
                n = "[" + Demo.lan.video + "]"
            }
            return n
        },
        appendMsg: function(e, t, n, o) {
            if (e && "cmd" !== t) {
                e.from = e.from || Demo.user,
                e.type = e.type || "chat",
                this.sentByMe = e.from === Demo.user;
                var r = ""
                  , i = e.data || e.msg || ""
                  , a = this.sendByMe ? Demo.user : e.from
                  , s = this.sentByMe || "chat" !== e.type ? e.to : e.from
                  , f = document.getElementById("wrapper" + s)
                  , h = !document.getElementById(s) && !document.getElementById("wrapper" + s);
                if ("string" == typeof i && WebIM.config.isWindowSDK && (i = decodeURIComponent(i)),
                !this.sentByMe && "chat" === e.type && h)
                    Demo.strangers[s] = Demo.strangers[s] || [];
                else if (h)
                    return;
                if (h)
                    return Demo.strangers[s].push({
                        msg: e,
                        type: t
                    }),
                    void this.render(this.node, "stranger");
                if (r = this.getBrief(i, t),
                f)
                    switch (t) {
                    case "txt":
                        l({
                            wrapper: f,
                            name: a,
                            value: r,
                            error: e.error,
                            errorText: e.errorText,
                            id: e.id,
                            status: n,
                            nid: o
                        }, this.sentByMe);
                        break;
                    case "emoji":
                        l({
                            wrapper: f,
                            name: a,
                            value: r,
                            error: e.error,
                            errorText: e.errorText,
                            id: e.id,
                            status: n,
                            nid: o
                        }, this.sentByMe);
                        break;
                    case "img":
                        if (WebIM.config.isWindowSDK) {
                            var g = document.getElementById("file_" + e.id);
                            if (g) {
                                var v = "onUpdateFileUrl" + e.id;
                                return void (Demo.api[v] ? (Demo.api[v]({
                                    url: e.url
                                }),
                                Demo.api[v] = null) : console.log("listenerName not exists:" + e.id))
                            }
                            r = "[" + Demo.lan.image + "]",
                            c({
                                id: e.id,
                                wrapper: f,
                                name: a,
                                value: i || e.url,
                                error: e.error,
                                errorText: e.errorText,
                                status: n
                            }, this.sentByMe)
                        } else
                            c({
                                id: e.id,
                                wrapper: f,
                                name: a,
                                value: i || e.url,
                                error: e.error,
                                errorText: e.errorText,
                                status: n,
                                nid: o
                            }, this.sentByMe);
                        break;
                    case "aud":
                        if (WebIM.config.isWindowSDK) {
                            var g = document.getElementById("file_" + e.id);
                            if (g) {
                                var v = "onUpdateFileUrl" + e.id;
                                return void (Demo.api[v] ? (Demo.api[v]({
                                    url: e.url
                                }),
                                Demo.api[v] = null) : console.log("listenerName not exists:" + e.id))
                            }
                            r = "[" + Demo.lan.file + "]",
                            u({
                                id: e.id,
                                wrapper: f,
                                name: a,
                                value: i || e.url,
                                filename: e.filename,
                                error: e.error,
                                errorText: e.errorText
                            }, this.sentByMe)
                        } else
                            d({
                                wrapper: f,
                                name: a,
                                value: i || e.url,
                                length: e.length,
                                id: e.id,
                                error: e.error,
                                errorText: e.errorText
                            }, this.sentByMe);
                        break;
                    case "cmd":
                        break;
                    case "file":
                        if (WebIM.config.isWindowSDK) {
                            var g = document.getElementById("file_" + e.id);
                            if (g) {
                                var v = "onUpdateFileUrl" + e.id;
                                return void (Demo.api[v] ? (Demo.api[v]({
                                    url: e.url
                                }),
                                Demo.api[v] = null) : console.log("listenerName not exists:" + e.id))
                            }
                            r = "[" + Demo.lan.file + "]",
                            u({
                                id: e.id,
                                wrapper: f,
                                name: a,
                                value: i || e.url,
                                filename: e.filename,
                                error: e.error,
                                errorText: e.errorText
                            }, this.sentByMe)
                        } else {
                            var b = {
                                id: e.id,
                                wrapper: f,
                                name: a,
                                value: i || e.url,
                                filename: e.filename,
                                error: e.error,
                                errorText: e.errorText,
                                status: n,
                                nid: o
                            };
                            e.ext && (b.fileSize = e.ext.fileSize),
                            u(b, this.sentByMe)
                        }
                        break;
                    case "loc":
                        p({
                            wrapper: f,
                            name: a,
                            value: i || e.addr,
                            error: e.error,
                            errorText: e.errorText
                        }, this.sentByMe);
                        break;
                    case "video":
                        if (WebIM.config.isWindowSDK) {
                            var g = document.getElementById("file_" + e.id);
                            if (g) {
                                var v = "onUpdateFileUrl" + e.id;
                                return void (Demo.api[v] ? (Demo.api[v]({
                                    url: e.url
                                }),
                                Demo.api[v] = null) : console.log("listenerName not exists:" + e.id))
                            }
                            r = "[" + Demo.lan.file + "]",
                            u({
                                id: e.id,
                                wrapper: f,
                                name: a,
                                value: i || e.url,
                                filename: e.filename,
                                error: e.error,
                                errorText: e.errorText
                            }, this.sentByMe)
                        } else
                            m({
                                wrapper: f,
                                name: a,
                                value: i || e.url,
                                length: e.length,
                                id: e.id,
                                error: e.error,
                                errorText: e.errorText
                            }, this.sentByMe)
                    }
                if (this.appendBrief(s, r),
                "cmd" !== e.type && !Demo.first) {
                    var y = "";
                    switch (e.type) {
                    case "chat":
                        if (this.sentByMe)
                            return;
                        document.getElementById(e.from);
                        y = Demo.roster[e.from] ? "friends" : "strangers",
                        this.addCount(e.from, y);
                        break;
                    case "groupchat":
                        y = e.roomtype ? e.roomtype : "groups",
                        this.addCount(e.to, y)
                    }
                }
            }
        },
        appendBrief: function(e, t) {
            var n = document.getElementById(e);
            n && (n.querySelector("em").innerHTML = t)
        },
        addCount: function(e, t) {
            if (Demo.selectedCate !== t) {
                var n = document.getElementById(t).getElementsByTagName("i")[1];
                n.style.display = "block";
                var o = n.getAttribute("data-count") / 1;
                if (Demo.chatState[t].selected != e) {
                    o++;
                    var r = document.getElementById(e).getElementsByTagName("i")[0]
                      , i = r.getAttribute("data-count") / 1;
                    i++,
                    r.setAttribute("data-count", i),
                    Demo.chatRecord[e].count = i,
                    r.innerText = i > 999 ? "..." : i + "",
                    r.style.display = "block"
                }
                n.setAttribute("data-count", o),
                Demo.chatState[t].count = o
            } else {
                if (Demo.selected !== e) {
                    var n = document.getElementById(t).getElementsByTagName("i")[1];
                    n.style.display = "block";
                    var o = n.getAttribute("data-count") / 1;
                    o++,
                    n.setAttribute("data-count", o),
                    Demo.chatState[t].count = o
                }
                if (!this.sentByMe && e !== Demo.selected) {
                    var r = document.getElementById(e).getElementsByTagName("i")[0]
                      , i = r.getAttribute("data-count") / 1;
                    i++,
                    r.setAttribute("data-count", i),
                    Demo.chatRecord[e].count = i,
                    r.innerText = i > 999 ? "..." : i + "",
                    r.style.display = "block"
                }
            }
        },
        updateChatroom: function() {
            this.render(this.node, "chatroom")
        },
        updateRoster: function() {
            this.render(this.node, "roster")
        },
        updateGroup: function(e) {
            this.render(this.node, "group")
        },
        deleteFriend: function(e) {
            Demo.conn.removeRoster({
                to: e,
                success: function() {
                    Demo.conn.unsubscribed({
                        to: e
                    });
                    var t = document.getElementById(e);
                    t && t.parentNode.removeChild(t)
                },
                error: function() {}
            })
        },
        changeGroupSubjectCallBack: function(e, t) {
            var n = document.getElementById(e);
            n.querySelector("span").innerHTML = t
        },
        encode: function(e) {
            if (!e || 0 === e.length)
                return "";
            var t = "";
            return t = e.replace(/&amp;/g, "&"),
            t = t.replace(/<(?=[^o][^)])/g, "&lt;"),
            t = t.replace(/>/g, "&gt;"),
            t = t.replace(/\"/g, "&quot;"),
            t = t.replace(/\n/g, "<br>")
        },
        NotifyError: function(e) {
            f.error(e)
        },
        NotifySuccess: function(e) {
            f.success(e)
        },
        scrollIntoView: function(e) {
            setTimeout(function() {
                e.scrollIntoView(!0)
            }, 50)
        },
        listen: function(e) {
            for (var t in e)
                this[t] = e[t]
        },
        blacklist: g,
        pagesize: 20
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = n(13)
}
, function(e, t, n) {
    "use strict";
    var o = n(14)
      , r = n(154)
      , i = n(158)
      , a = n(49)
      , s = n(163)
      , l = {};
    a(l, i),
    a(l, {
        findDOMNode: s("findDOMNode", "ReactDOM", "react-dom", o, o.findDOMNode),
        render: s("render", "ReactDOM", "react-dom", o, o.render),
        unmountComponentAtNode: s("unmountComponentAtNode", "ReactDOM", "react-dom", o, o.unmountComponentAtNode),
        renderToString: s("renderToString", "ReactDOMServer", "react-dom/server", r, r.renderToString),
        renderToStaticMarkup: s("renderToStaticMarkup", "ReactDOMServer", "react-dom/server", r, r.renderToStaticMarkup)
    }),
    l.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o,
    l.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r,
    e.exports = l
}
, function(e, t, n) {
    "use strict";
    var o = n(15)
      , r = n(16)
      , i = n(81)
      , a = n(55)
      , s = n(38)
      , l = n(28)
      , c = n(60)
      , u = n(64)
      , p = n(152)
      , d = n(101)
      , m = n(153);
    n(35);
    i.inject();
    var f = l.measure("React", "render", s.render)
      , h = {
        findDOMNode: d,
        render: f,
        unmountComponentAtNode: s.unmountComponentAtNode,
        version: p,
        unstable_batchedUpdates: u.batchedUpdates,
        unstable_renderSubtreeIntoContainer: m
    };
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        CurrentOwner: o,
        InstanceHandles: a,
        Mount: s,
        Reconciler: c,
        TextComponent: r
    });
    e.exports = h
}
, function(e, t) {
    "use strict";
    var n = {
        current: null
    };
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    var o = n(17)
      , r = n(32)
      , i = n(36)
      , a = n(38)
      , s = n(49)
      , l = n(31)
      , c = n(30)
      , u = (n(80),
    function(e) {}
    );
    s(u.prototype, {
        construct: function(e) {
            this._currentElement = e,
            this._stringText = "" + e,
            this._rootNodeID = null,
            this._mountIndex = 0
        },
        mountComponent: function(e, t, n) {
            if (this._rootNodeID = e,
            t.useCreateElement) {
                var o = n[a.ownerDocumentContextKey]
                  , i = o.createElement("span");
                return r.setAttributeForID(i, e),
                a.getID(i),
                c(i, this._stringText),
                i
            }
            var s = l(this._stringText);
            return t.renderToStaticMarkup ? s : "<span " + r.createMarkupForID(e) + ">" + s + "</span>"
        },
        receiveComponent: function(e, t) {
            if (e !== this._currentElement) {
                this._currentElement = e;
                var n = "" + e;
                if (n !== this._stringText) {
                    this._stringText = n;
                    var r = a.getNode(this._rootNodeID);
                    o.updateTextContent(r, n)
                }
            }
        },
        unmountComponent: function() {
            i.unmountIDFromEnvironment(this._rootNodeID)
        }
    }),
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n) {
        var o = n >= e.childNodes.length ? null : e.childNodes.item(n);
        e.insertBefore(t, o)
    }
    var r = n(18)
      , i = n(26)
      , a = n(28)
      , s = n(29)
      , l = n(30)
      , c = n(23)
      , u = {
        dangerouslyReplaceNodeWithMarkup: r.dangerouslyReplaceNodeWithMarkup,
        updateTextContent: l,
        processUpdates: function(e, t) {
            for (var n, a = null, u = null, p = 0; p < e.length; p++)
                if (n = e[p],
                n.type === i.MOVE_EXISTING || n.type === i.REMOVE_NODE) {
                    var d = n.fromIndex
                      , m = n.parentNode.childNodes[d]
                      , f = n.parentID;
                    m ? void 0 : c(!1),
                    a = a || {},
                    a[f] = a[f] || [],
                    a[f][d] = m,
                    u = u || [],
                    u.push(m)
                }
            var h;
            if (h = t.length && "string" == typeof t[0] ? r.dangerouslyRenderMarkup(t) : t,
            u)
                for (var g = 0; g < u.length; g++)
                    u[g].parentNode.removeChild(u[g]);
            for (var v = 0; v < e.length; v++)
                switch (n = e[v],
                n.type) {
                case i.INSERT_MARKUP:
                    o(n.parentNode, h[n.markupIndex], n.toIndex);
                    break;
                case i.MOVE_EXISTING:
                    o(n.parentNode, a[n.parentID][n.fromIndex], n.toIndex);
                    break;
                case i.SET_MARKUP:
                    s(n.parentNode, n.content);
                    break;
                case i.TEXT_CONTENT:
                    l(n.parentNode, n.content);
                    break;
                case i.REMOVE_NODE:
                }
        }
    };
    a.measureMethods(u, "DOMChildrenOperations", {
        updateTextContent: "updateTextContent"
    }),
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e.substring(1, e.indexOf(" "))
    }
    var r = n(19)
      , i = n(20)
      , a = n(25)
      , s = n(24)
      , l = n(23)
      , c = /^(<[^ \/>]+)/
      , u = "data-danger-index"
      , p = {
        dangerouslyRenderMarkup: function(e) {
            r.canUseDOM ? void 0 : l(!1);
            for (var t, n = {}, p = 0; p < e.length; p++)
                e[p] ? void 0 : l(!1),
                t = o(e[p]),
                t = s(t) ? t : "*",
                n[t] = n[t] || [],
                n[t][p] = e[p];
            var d = []
              , m = 0;
            for (t in n)
                if (n.hasOwnProperty(t)) {
                    var f, h = n[t];
                    for (f in h)
                        if (h.hasOwnProperty(f)) {
                            var g = h[f];
                            h[f] = g.replace(c, "$1 " + u + '="' + f + '" ')
                        }
                    for (var v = i(h.join(""), a), b = 0; b < v.length; ++b) {
                        var y = v[b];
                        y.hasAttribute && y.hasAttribute(u) && (f = +y.getAttribute(u),
                        y.removeAttribute(u),
                        d.hasOwnProperty(f) ? l(!1) : void 0,
                        d[f] = y,
                        m += 1)
                    }
                }
            return m !== d.length ? l(!1) : void 0,
            d.length !== e.length ? l(!1) : void 0,
            d
        },
        dangerouslyReplaceNodeWithMarkup: function(e, t) {
            r.canUseDOM ? void 0 : l(!1),
            t ? void 0 : l(!1),
            "html" === e.tagName.toLowerCase() ? l(!1) : void 0;
            var n;
            n = "string" == typeof t ? i(t, a)[0] : t,
            e.parentNode.replaceChild(n, e)
        }
    };
    e.exports = p
}
, function(e, t) {
    "use strict";
    var n = !("undefined" == typeof window || !window.document || !window.document.createElement)
      , o = {
        canUseDOM: n,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: n && !!window.screen,
        isInWorker: !n
    };
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        var t = e.match(u);
        return t && t[1].toLowerCase()
    }
    function r(e, t) {
        var n = c;
        c ? void 0 : l(!1);
        var r = o(e)
          , i = r && s(r);
        if (i) {
            n.innerHTML = i[1] + e + i[2];
            for (var u = i[0]; u--; )
                n = n.lastChild
        } else
            n.innerHTML = e;
        var p = n.getElementsByTagName("script");
        p.length && (t ? void 0 : l(!1),
        a(p).forEach(t));
        for (var d = a(n.childNodes); n.lastChild; )
            n.removeChild(n.lastChild);
        return d
    }
    var i = n(19)
      , a = n(21)
      , s = n(24)
      , l = n(23)
      , c = i.canUseDOM ? document.createElement("div") : null
      , u = /^\s*<(\w+)/;
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "length"in e && !("setInterval"in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee"in e || "item"in e)
    }
    function r(e) {
        return o(e) ? Array.isArray(e) ? e.slice() : i(e) : [e]
    }
    var i = n(22);
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        var t = e.length;
        if (Array.isArray(e) || "object" != typeof e && "function" != typeof e ? r(!1) : void 0,
        "number" != typeof t ? r(!1) : void 0,
        0 === t || t - 1 in e ? void 0 : r(!1),
        e.hasOwnProperty)
            try {
                return Array.prototype.slice.call(e)
            } catch (e) {}
        for (var n = Array(t), o = 0; o < t; o++)
            n[o] = e[o];
        return n
    }
    var r = n(23);
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o, r, i, a, s) {
        if (!e) {
            var l;
            if (void 0 === t)
                l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, o, r, i, a, s]
                  , u = 0;
                l = new Error(t.replace(/%s/g, function() {
                    return c[u++]
                })),
                l.name = "Invariant Violation"
            }
            throw l.framesToPop = 1,
            l
        }
    }
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return a ? void 0 : i(!1),
        d.hasOwnProperty(e) || (e = "*"),
        s.hasOwnProperty(e) || ("*" === e ? a.innerHTML = "<link />" : a.innerHTML = "<" + e + "></" + e + ">",
        s[e] = !a.firstChild),
        s[e] ? d[e] : null
    }
    var r = n(19)
      , i = n(23)
      , a = r.canUseDOM ? document.createElement("div") : null
      , s = {}
      , l = [1, '<select multiple="true">', "</select>"]
      , c = [1, "<table>", "</table>"]
      , u = [3, "<table><tbody><tr>", "</tr></tbody></table>"]
      , p = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"]
      , d = {
        "*": [1, "?<div>", "</div>"],
        area: [1, "<map>", "</map>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        param: [1, "<object>", "</object>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        optgroup: l,
        option: l,
        caption: c,
        colgroup: c,
        tbody: c,
        tfoot: c,
        thead: c,
        td: u,
        th: u
    }
      , m = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    m.forEach(function(e) {
        d[e] = p,
        s[e] = !0
    }),
    e.exports = o
}
, function(e, t) {
    "use strict";
    function n(e) {
        return function() {
            return e
        }
    }
    function o() {}
    o.thatReturns = n,
    o.thatReturnsFalse = n(!1),
    o.thatReturnsTrue = n(!0),
    o.thatReturnsNull = n(null),
    o.thatReturnsThis = function() {
        return this
    }
    ,
    o.thatReturnsArgument = function(e) {
        return e
    }
    ,
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var o = n(27)
      , r = o({
        INSERT_MARKUP: null,
        MOVE_EXISTING: null,
        REMOVE_NODE: null,
        SET_MARKUP: null,
        TEXT_CONTENT: null
    });
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    var o = n(23)
      , r = function(e) {
        var t, n = {};
        e instanceof Object && !Array.isArray(e) ? void 0 : o(!1);
        for (t in e)
            e.hasOwnProperty(t) && (n[t] = t);
        return n
    };
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n) {
        return n
    }
    var r = {
        enableMeasure: !1,
        storedMeasure: o,
        measureMethods: function(e, t, n) {},
        measure: function(e, t, n) {
            return n
        },
        injection: {
            injectMeasure: function(e) {
                r.storedMeasure = e
            }
        }
    };
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    var o = n(19)
      , r = /^[ \r\n\t\f]/
      , i = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/
      , a = function(e, t) {
        e.innerHTML = t
    };
    if ("undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction && (a = function(e, t) {
        MSApp.execUnsafeLocalFunction(function() {
            e.innerHTML = t
        })
    }
    ),
    o.canUseDOM) {
        var s = document.createElement("div");
        s.innerHTML = " ",
        "" === s.innerHTML && (a = function(e, t) {
            if (e.parentNode && e.parentNode.replaceChild(e, e),
            r.test(t) || "<" === t[0] && i.test(t)) {
                e.innerHTML = String.fromCharCode(65279) + t;
                var n = e.firstChild;
                1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1)
            } else
                e.innerHTML = t
        }
        )
    }
    e.exports = a
}
, function(e, t, n) {
    "use strict";
    var o = n(19)
      , r = n(31)
      , i = n(29)
      , a = function(e, t) {
        e.textContent = t
    };
    o.canUseDOM && ("textContent"in document.documentElement || (a = function(e, t) {
        i(e, r(t))
    }
    )),
    e.exports = a
}
, function(e, t) {
    "use strict";
    function n(e) {
        return r[e]
    }
    function o(e) {
        return ("" + e).replace(i, n)
    }
    var r = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;"
    }
      , i = /[&><"']/g;
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return !!u.hasOwnProperty(e) || !c.hasOwnProperty(e) && (l.test(e) ? (u[e] = !0,
        !0) : (c[e] = !0,
        !1))
    }
    function r(e, t) {
        return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && t === !1
    }
    var i = n(33)
      , a = n(28)
      , s = n(34)
      , l = (n(35),
    /^[a-zA-Z_][\w\.\-]*$/)
      , c = {}
      , u = {}
      , p = {
        createMarkupForID: function(e) {
            return i.ID_ATTRIBUTE_NAME + "=" + s(e)
        },
        setAttributeForID: function(e, t) {
            e.setAttribute(i.ID_ATTRIBUTE_NAME, t)
        },
        createMarkupForProperty: function(e, t) {
            var n = i.properties.hasOwnProperty(e) ? i.properties[e] : null;
            if (n) {
                if (r(n, t))
                    return "";
                var o = n.attributeName;
                return n.hasBooleanValue || n.hasOverloadedBooleanValue && t === !0 ? o + '=""' : o + "=" + s(t)
            }
            return i.isCustomAttribute(e) ? null == t ? "" : e + "=" + s(t) : null
        },
        createMarkupForCustomAttribute: function(e, t) {
            return o(e) && null != t ? e + "=" + s(t) : ""
        },
        setValueForProperty: function(e, t, n) {
            var o = i.properties.hasOwnProperty(t) ? i.properties[t] : null;
            if (o) {
                var a = o.mutationMethod;
                if (a)
                    a(e, n);
                else if (r(o, n))
                    this.deleteValueForProperty(e, t);
                else if (o.mustUseAttribute) {
                    var s = o.attributeName
                      , l = o.attributeNamespace;
                    l ? e.setAttributeNS(l, s, "" + n) : o.hasBooleanValue || o.hasOverloadedBooleanValue && n === !0 ? e.setAttribute(s, "") : e.setAttribute(s, "" + n)
                } else {
                    var c = o.propertyName;
                    o.hasSideEffects && "" + e[c] == "" + n || (e[c] = n)
                }
            } else
                i.isCustomAttribute(t) && p.setValueForAttribute(e, t, n)
        },
        setValueForAttribute: function(e, t, n) {
            o(t) && (null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        },
        deleteValueForProperty: function(e, t) {
            var n = i.properties.hasOwnProperty(t) ? i.properties[t] : null;
            if (n) {
                var o = n.mutationMethod;
                if (o)
                    o(e, void 0);
                else if (n.mustUseAttribute)
                    e.removeAttribute(n.attributeName);
                else {
                    var r = n.propertyName
                      , a = i.getDefaultValueForProperty(e.nodeName, r);
                    n.hasSideEffects && "" + e[r] === a || (e[r] = a)
                }
            } else
                i.isCustomAttribute(t) && e.removeAttribute(t)
        }
    };
    a.measureMethods(p, "DOMPropertyOperations", {
        setValueForProperty: "setValueForProperty",
        setValueForAttribute: "setValueForAttribute",
        deleteValueForProperty: "deleteValueForProperty"
    }),
    e.exports = p
}
, function(e, t, n) {
    "use strict";
    function o(e, t) {
        return (e & t) === t
    }
    var r = n(23)
      , i = {
        MUST_USE_ATTRIBUTE: 1,
        MUST_USE_PROPERTY: 2,
        HAS_SIDE_EFFECTS: 4,
        HAS_BOOLEAN_VALUE: 8,
        HAS_NUMERIC_VALUE: 16,
        HAS_POSITIVE_NUMERIC_VALUE: 48,
        HAS_OVERLOADED_BOOLEAN_VALUE: 64,
        injectDOMPropertyConfig: function(e) {
            var t = i
              , n = e.Properties || {}
              , a = e.DOMAttributeNamespaces || {}
              , l = e.DOMAttributeNames || {}
              , c = e.DOMPropertyNames || {}
              , u = e.DOMMutationMethods || {};
            e.isCustomAttribute && s._isCustomAttributeFunctions.push(e.isCustomAttribute);
            for (var p in n) {
                s.properties.hasOwnProperty(p) ? r(!1) : void 0;
                var d = p.toLowerCase()
                  , m = n[p]
                  , f = {
                    attributeName: d,
                    attributeNamespace: null,
                    propertyName: p,
                    mutationMethod: null,
                    mustUseAttribute: o(m, t.MUST_USE_ATTRIBUTE),
                    mustUseProperty: o(m, t.MUST_USE_PROPERTY),
                    hasSideEffects: o(m, t.HAS_SIDE_EFFECTS),
                    hasBooleanValue: o(m, t.HAS_BOOLEAN_VALUE),
                    hasNumericValue: o(m, t.HAS_NUMERIC_VALUE),
                    hasPositiveNumericValue: o(m, t.HAS_POSITIVE_NUMERIC_VALUE),
                    hasOverloadedBooleanValue: o(m, t.HAS_OVERLOADED_BOOLEAN_VALUE)
                };
                if (f.mustUseAttribute && f.mustUseProperty ? r(!1) : void 0,
                !f.mustUseProperty && f.hasSideEffects ? r(!1) : void 0,
                f.hasBooleanValue + f.hasNumericValue + f.hasOverloadedBooleanValue <= 1 ? void 0 : r(!1),
                l.hasOwnProperty(p)) {
                    var h = l[p];
                    f.attributeName = h
                }
                a.hasOwnProperty(p) && (f.attributeNamespace = a[p]),
                c.hasOwnProperty(p) && (f.propertyName = c[p]),
                u.hasOwnProperty(p) && (f.mutationMethod = u[p]),
                s.properties[p] = f
            }
        }
    }
      , a = {}
      , s = {
        ID_ATTRIBUTE_NAME: "data-reactid",
        properties: {},
        getPossibleStandardName: null,
        _isCustomAttributeFunctions: [],
        isCustomAttribute: function(e) {
            for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
                var n = s._isCustomAttributeFunctions[t];
                if (n(e))
                    return !0
            }
            return !1
        },
        getDefaultValueForProperty: function(e, t) {
            var n, o = a[e];
            return o || (a[e] = o = {}),
            t in o || (n = document.createElement(e),
            o[t] = n[t]),
            o[t]
        },
        injection: i
    };
    e.exports = s
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return '"' + r(e) + '"'
    }
    var r = n(31);
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var o = n(25)
      , r = o;
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    var o = n(37)
      , r = n(38)
      , i = {
        processChildrenUpdates: o.dangerouslyProcessChildrenUpdates,
        replaceNodeWithMarkupByID: o.dangerouslyReplaceNodeWithMarkupByID,
        unmountIDFromEnvironment: function(e) {
            r.purgeID(e)
        }
    };
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    var o = n(17)
      , r = n(32)
      , i = n(38)
      , a = n(28)
      , s = n(23)
      , l = {
        dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
        style: "`style` must be set using `updateStylesByID()`."
    }
      , c = {
        updatePropertyByID: function(e, t, n) {
            var o = i.getNode(e);
            l.hasOwnProperty(t) ? s(!1) : void 0,
            null != n ? r.setValueForProperty(o, t, n) : r.deleteValueForProperty(o, t)
        },
        dangerouslyReplaceNodeWithMarkupByID: function(e, t) {
            var n = i.getNode(e);
            o.dangerouslyReplaceNodeWithMarkup(n, t)
        },
        dangerouslyProcessChildrenUpdates: function(e, t) {
            for (var n = 0; n < e.length; n++)
                e[n].parentNode = i.getNode(e[n].parentID);
            o.processUpdates(e, t)
        }
    };
    a.measureMethods(c, "ReactDOMIDOperations", {
        dangerouslyReplaceNodeWithMarkupByID: "dangerouslyReplaceNodeWithMarkupByID",
        dangerouslyProcessChildrenUpdates: "dangerouslyProcessChildrenUpdates"
    }),
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function o(e, t) {
        for (var n = Math.min(e.length, t.length), o = 0; o < n; o++)
            if (e.charAt(o) !== t.charAt(o))
                return o;
        return e.length === t.length ? -1 : n
    }
    function r(e) {
        return e ? e.nodeType === G ? e.documentElement : e.firstChild : null
    }
    function i(e) {
        var t = r(e);
        return t && Q.getID(t)
    }
    function a(e) {
        var t = s(e);
        if (t)
            if (F.hasOwnProperty(t)) {
                var n = F[t];
                n !== e && (p(n, t) ? B(!1) : void 0,
                F[t] = e)
            } else
                F[t] = e;
        return t
    }
    function s(e) {
        return e && e.getAttribute && e.getAttribute(U) || ""
    }
    function l(e, t) {
        var n = s(e);
        n !== t && delete F[n],
        e.setAttribute(U, t),
        F[t] = e
    }
    function c(e) {
        return F.hasOwnProperty(e) && p(F[e], e) || (F[e] = Q.findReactNodeByID(e)),
        F[e]
    }
    function u(e) {
        var t = N.get(e)._rootNodeID;
        return C.isNullComponentID(t) ? null : (F.hasOwnProperty(t) && p(F[t], t) || (F[t] = Q.findReactNodeByID(t)),
        F[t])
    }
    function p(e, t) {
        if (e) {
            s(e) !== t ? B(!1) : void 0;
            var n = Q.findReactContainerForID(t);
            if (n && A(n, e))
                return !0
        }
        return !1
    }
    function d(e) {
        delete F[e]
    }
    function m(e) {
        var t = F[e];
        return !(!t || !p(t, e)) && void (Y = t)
    }
    function f(e) {
        Y = null,
        x.traverseAncestors(e, m);
        var t = Y;
        return Y = null,
        t
    }
    function h(e, t, n, o, r, i) {
        E.useCreateElement && (i = O({}, i),
        n.nodeType === G ? i[V] = n : i[V] = n.ownerDocument);
        var a = M.mountComponent(e, t, o, i);
        e._renderedComponent._topLevelWrapper = e,
        Q._mountImageIntoNode(a, n, r, o)
    }
    function g(e, t, n, o, r) {
        var i = R.ReactReconcileTransaction.getPooled(o);
        i.perform(h, null, e, t, n, i, o, r),
        R.ReactReconcileTransaction.release(i)
    }
    function v(e, t) {
        for (M.unmountComponent(e),
        t.nodeType === G && (t = t.documentElement); t.lastChild; )
            t.removeChild(t.lastChild)
    }
    function b(e) {
        var t = i(e);
        return !!t && t !== x.getReactRootIDFromNodeID(t)
    }
    function y(e) {
        for (; e && e.parentNode !== e; e = e.parentNode)
            if (1 === e.nodeType) {
                var t = s(e);
                if (t) {
                    var n, o = x.getReactRootIDFromNodeID(t), r = e;
                    do
                        if (n = s(r),
                        r = r.parentNode,
                        null == r)
                            return null;
                    while (n !== o);if (r === K[o])
                        return e
                }
            }
        return null
    }
    var w = n(33)
      , _ = n(39)
      , E = (n(15),
    n(51))
      , D = n(52)
      , C = n(54)
      , x = n(55)
      , N = n(57)
      , I = n(58)
      , S = n(28)
      , M = n(60)
      , k = n(63)
      , R = n(64)
      , O = n(49)
      , T = n(68)
      , A = n(69)
      , P = n(72)
      , B = n(23)
      , W = n(29)
      , L = n(77)
      , U = (n(80),
    n(35),
    w.ID_ATTRIBUTE_NAME)
      , F = {}
      , j = 1
      , G = 9
      , H = 11
      , V = "__ReactMount_ownerDocument$" + Math.random().toString(36).slice(2)
      , z = {}
      , K = {}
      , q = []
      , Y = null
      , X = function() {};
    X.prototype.isReactComponent = {},
    X.prototype.render = function() {
        return this.props
    }
    ;
    var Q = {
        TopLevelWrapper: X,
        _instancesByReactRootID: z,
        scrollMonitor: function(e, t) {
            t()
        },
        _updateRootComponent: function(e, t, n, o) {
            return Q.scrollMonitor(n, function() {
                k.enqueueElementInternal(e, t),
                o && k.enqueueCallbackInternal(e, o)
            }),
            e
        },
        _registerComponent: function(e, t) {
            !t || t.nodeType !== j && t.nodeType !== G && t.nodeType !== H ? B(!1) : void 0,
            _.ensureScrollValueMonitoring();
            var n = Q.registerContainer(t);
            return z[n] = e,
            n
        },
        _renderNewRootComponent: function(e, t, n, o) {
            var r = P(e, null)
              , i = Q._registerComponent(r, t);
            return R.batchedUpdates(g, r, i, t, n, o),
            r
        },
        renderSubtreeIntoContainer: function(e, t, n, o) {
            return null == e || null == e._reactInternalInstance ? B(!1) : void 0,
            Q._renderSubtreeIntoContainer(e, t, n, o)
        },
        _renderSubtreeIntoContainer: function(e, t, n, o) {
            D.isValidElement(t) ? void 0 : B(!1);
            var a = new D(X,null,null,null,null,null,t)
              , l = z[i(n)];
            if (l) {
                var c = l._currentElement
                  , u = c.props;
                if (L(u, t)) {
                    var p = l._renderedComponent.getPublicInstance()
                      , d = o && function() {
                        o.call(p)
                    }
                    ;
                    return Q._updateRootComponent(l, a, n, d),
                    p
                }
                Q.unmountComponentAtNode(n)
            }
            var m = r(n)
              , f = m && !!s(m)
              , h = b(n)
              , g = f && !l && !h
              , v = Q._renderNewRootComponent(a, n, g, null != e ? e._reactInternalInstance._processChildContext(e._reactInternalInstance._context) : T)._renderedComponent.getPublicInstance();
            return o && o.call(v),
            v
        },
        render: function(e, t, n) {
            return Q._renderSubtreeIntoContainer(null, e, t, n)
        },
        registerContainer: function(e) {
            var t = i(e);
            return t && (t = x.getReactRootIDFromNodeID(t)),
            t || (t = x.createReactRootID()),
            K[t] = e,
            t
        },
        unmountComponentAtNode: function(e) {
            !e || e.nodeType !== j && e.nodeType !== G && e.nodeType !== H ? B(!1) : void 0;
            var t = i(e)
              , n = z[t];
            if (!n) {
                var o = (b(e),
                s(e));
                o && o === x.getReactRootIDFromNodeID(o);
                return !1
            }
            return R.batchedUpdates(v, n, e),
            delete z[t],
            delete K[t],
            !0
        },
        findReactContainerForID: function(e) {
            var t = x.getReactRootIDFromNodeID(e)
              , n = K[t];
            return n
        },
        findReactNodeByID: function(e) {
            var t = Q.findReactContainerForID(e);
            return Q.findComponentRoot(t, e)
        },
        getFirstReactDOM: function(e) {
            return y(e)
        },
        findComponentRoot: function(e, t) {
            var n = q
              , o = 0
              , r = f(t) || e;
            for (n[0] = r.firstChild,
            n.length = 1; o < n.length; ) {
                for (var i, a = n[o++]; a; ) {
                    var s = Q.getID(a);
                    s ? t === s ? i = a : x.isAncestorIDOf(s, t) && (n.length = o = 0,
                    n.push(a.firstChild)) : n.push(a.firstChild),
                    a = a.nextSibling
                }
                if (i)
                    return n.length = 0,
                    i
            }
            n.length = 0,
            B(!1)
        },
        _mountImageIntoNode: function(e, t, n, i) {
            if (!t || t.nodeType !== j && t.nodeType !== G && t.nodeType !== H ? B(!1) : void 0,
            n) {
                var a = r(t);
                if (I.canReuseMarkup(e, a))
                    return;
                var s = a.getAttribute(I.CHECKSUM_ATTR_NAME);
                a.removeAttribute(I.CHECKSUM_ATTR_NAME);
                var l = a.outerHTML;
                a.setAttribute(I.CHECKSUM_ATTR_NAME, s);
                var c = e
                  , u = o(c, l);
                " (client) " + c.substring(u - 20, u + 20) + "\n (server) " + l.substring(u - 20, u + 20);
                t.nodeType === G ? B(!1) : void 0
            }
            if (t.nodeType === G ? B(!1) : void 0,
            i.useCreateElement) {
                for (; t.lastChild; )
                    t.removeChild(t.lastChild);
                t.appendChild(e)
            } else
                W(t, e)
        },
        ownerDocumentContextKey: V,
        getReactRootID: i,
        getID: a,
        setID: l,
        getNode: c,
        getNodeFromInstance: u,
        isValid: p,
        purgeID: d
    };
    S.measureMethods(Q, "ReactMount", {
        _renderNewRootComponent: "_renderNewRootComponent",
        _mountImageIntoNode: "_mountImageIntoNode"
    }),
    e.exports = Q
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return Object.prototype.hasOwnProperty.call(e, g) || (e[g] = f++,
        d[e[g]] = {}),
        d[e[g]]
    }
    var r = n(40)
      , i = n(41)
      , a = n(42)
      , s = n(47)
      , l = n(28)
      , c = n(48)
      , u = n(49)
      , p = n(50)
      , d = {}
      , m = !1
      , f = 0
      , h = {
        topAbort: "abort",
        topBlur: "blur",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topChange: "change",
        topClick: "click",
        topCompositionEnd: "compositionend",
        topCompositionStart: "compositionstart",
        topCompositionUpdate: "compositionupdate",
        topContextMenu: "contextmenu",
        topCopy: "copy",
        topCut: "cut",
        topDoubleClick: "dblclick",
        topDrag: "drag",
        topDragEnd: "dragend",
        topDragEnter: "dragenter",
        topDragExit: "dragexit",
        topDragLeave: "dragleave",
        topDragOver: "dragover",
        topDragStart: "dragstart",
        topDrop: "drop",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topFocus: "focus",
        topInput: "input",
        topKeyDown: "keydown",
        topKeyPress: "keypress",
        topKeyUp: "keyup",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topMouseDown: "mousedown",
        topMouseMove: "mousemove",
        topMouseOut: "mouseout",
        topMouseOver: "mouseover",
        topMouseUp: "mouseup",
        topPaste: "paste",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topScroll: "scroll",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topSelectionChange: "selectionchange",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTextInput: "textInput",
        topTimeUpdate: "timeupdate",
        topTouchCancel: "touchcancel",
        topTouchEnd: "touchend",
        topTouchMove: "touchmove",
        topTouchStart: "touchstart",
        topVolumeChange: "volumechange",
        topWaiting: "waiting",
        topWheel: "wheel"
    }
      , g = "_reactListenersID" + String(Math.random()).slice(2)
      , v = u({}, s, {
        ReactEventListener: null,
        injection: {
            injectReactEventListener: function(e) {
                e.setHandleTopLevel(v.handleTopLevel),
                v.ReactEventListener = e
            }
        },
        setEnabled: function(e) {
            v.ReactEventListener && v.ReactEventListener.setEnabled(e)
        },
        isEnabled: function() {
            return !(!v.ReactEventListener || !v.ReactEventListener.isEnabled())
        },
        listenTo: function(e, t) {
            for (var n = t, i = o(n), s = a.registrationNameDependencies[e], l = r.topLevelTypes, c = 0; c < s.length; c++) {
                var u = s[c];
                i.hasOwnProperty(u) && i[u] || (u === l.topWheel ? p("wheel") ? v.ReactEventListener.trapBubbledEvent(l.topWheel, "wheel", n) : p("mousewheel") ? v.ReactEventListener.trapBubbledEvent(l.topWheel, "mousewheel", n) : v.ReactEventListener.trapBubbledEvent(l.topWheel, "DOMMouseScroll", n) : u === l.topScroll ? p("scroll", !0) ? v.ReactEventListener.trapCapturedEvent(l.topScroll, "scroll", n) : v.ReactEventListener.trapBubbledEvent(l.topScroll, "scroll", v.ReactEventListener.WINDOW_HANDLE) : u === l.topFocus || u === l.topBlur ? (p("focus", !0) ? (v.ReactEventListener.trapCapturedEvent(l.topFocus, "focus", n),
                v.ReactEventListener.trapCapturedEvent(l.topBlur, "blur", n)) : p("focusin") && (v.ReactEventListener.trapBubbledEvent(l.topFocus, "focusin", n),
                v.ReactEventListener.trapBubbledEvent(l.topBlur, "focusout", n)),
                i[l.topBlur] = !0,
                i[l.topFocus] = !0) : h.hasOwnProperty(u) && v.ReactEventListener.trapBubbledEvent(u, h[u], n),
                i[u] = !0)
            }
        },
        trapBubbledEvent: function(e, t, n) {
            return v.ReactEventListener.trapBubbledEvent(e, t, n)
        },
        trapCapturedEvent: function(e, t, n) {
            return v.ReactEventListener.trapCapturedEvent(e, t, n)
        },
        ensureScrollValueMonitoring: function() {
            if (!m) {
                var e = c.refreshScrollValues;
                v.ReactEventListener.monitorScrollValue(e),
                m = !0
            }
        },
        eventNameDispatchConfigs: i.eventNameDispatchConfigs,
        registrationNameModules: i.registrationNameModules,
        putListener: i.putListener,
        getListener: i.getListener,
        deleteListener: i.deleteListener,
        deleteAllListeners: i.deleteAllListeners
    });
    l.measureMethods(v, "ReactBrowserEventEmitter", {
        putListener: "putListener",
        deleteListener: "deleteListener"
    }),
    e.exports = v
}
, function(e, t, n) {
    "use strict";
    var o = n(27)
      , r = o({
        bubbled: null,
        captured: null
    })
      , i = o({
        topAbort: null,
        topBlur: null,
        topCanPlay: null,
        topCanPlayThrough: null,
        topChange: null,
        topClick: null,
        topCompositionEnd: null,
        topCompositionStart: null,
        topCompositionUpdate: null,
        topContextMenu: null,
        topCopy: null,
        topCut: null,
        topDoubleClick: null,
        topDrag: null,
        topDragEnd: null,
        topDragEnter: null,
        topDragExit: null,
        topDragLeave: null,
        topDragOver: null,
        topDragStart: null,
        topDrop: null,
        topDurationChange: null,
        topEmptied: null,
        topEncrypted: null,
        topEnded: null,
        topError: null,
        topFocus: null,
        topInput: null,
        topKeyDown: null,
        topKeyPress: null,
        topKeyUp: null,
        topLoad: null,
        topLoadedData: null,
        topLoadedMetadata: null,
        topLoadStart: null,
        topMouseDown: null,
        topMouseMove: null,
        topMouseOut: null,
        topMouseOver: null,
        topMouseUp: null,
        topPaste: null,
        topPause: null,
        topPlay: null,
        topPlaying: null,
        topProgress: null,
        topRateChange: null,
        topReset: null,
        topScroll: null,
        topSeeked: null,
        topSeeking: null,
        topSelectionChange: null,
        topStalled: null,
        topSubmit: null,
        topSuspend: null,
        topTextInput: null,
        topTimeUpdate: null,
        topTouchCancel: null,
        topTouchEnd: null,
        topTouchMove: null,
        topTouchStart: null,
        topVolumeChange: null,
        topWaiting: null,
        topWheel: null
    })
      , a = {
        topLevelTypes: i,
        PropagationPhases: r
    };
    e.exports = a
}
, function(e, t, n) {
    "use strict";
    var o = n(42)
      , r = n(43)
      , i = n(44)
      , a = n(45)
      , s = n(46)
      , l = n(23)
      , c = (n(35),
    {})
      , u = null
      , p = function(e, t) {
        e && (r.executeDispatchesInOrder(e, t),
        e.isPersistent() || e.constructor.release(e))
    }
      , d = function(e) {
        return p(e, !0)
    }
      , m = function(e) {
        return p(e, !1)
    }
      , f = null
      , h = {
        injection: {
            injectMount: r.injection.injectMount,
            injectInstanceHandle: function(e) {
                f = e
            },
            getInstanceHandle: function() {
                return f
            },
            injectEventPluginOrder: o.injectEventPluginOrder,
            injectEventPluginsByName: o.injectEventPluginsByName
        },
        eventNameDispatchConfigs: o.eventNameDispatchConfigs,
        registrationNameModules: o.registrationNameModules,
        putListener: function(e, t, n) {
            "function" != typeof n ? l(!1) : void 0;
            var r = c[t] || (c[t] = {});
            r[e] = n;
            var i = o.registrationNameModules[t];
            i && i.didPutListener && i.didPutListener(e, t, n)
        },
        getListener: function(e, t) {
            var n = c[t];
            return n && n[e]
        },
        deleteListener: function(e, t) {
            var n = o.registrationNameModules[t];
            n && n.willDeleteListener && n.willDeleteListener(e, t);
            var r = c[t];
            r && delete r[e]
        },
        deleteAllListeners: function(e) {
            for (var t in c)
                if (c[t][e]) {
                    var n = o.registrationNameModules[t];
                    n && n.willDeleteListener && n.willDeleteListener(e, t),
                    delete c[t][e]
                }
        },
        extractEvents: function(e, t, n, r, i) {
            for (var s, l = o.plugins, c = 0; c < l.length; c++) {
                var u = l[c];
                if (u) {
                    var p = u.extractEvents(e, t, n, r, i);
                    p && (s = a(s, p))
                }
            }
            return s
        },
        enqueueEvents: function(e) {
            e && (u = a(u, e))
        },
        processEventQueue: function(e) {
            var t = u;
            u = null,
            e ? s(t, d) : s(t, m),
            u ? l(!1) : void 0,
            i.rethrowCaughtError()
        },
        __purge: function() {
            c = {}
        },
        __getListenerBank: function() {
            return c
        }
    };
    e.exports = h
}
, function(e, t, n) {
    "use strict";
    function o() {
        if (s)
            for (var e in l) {
                var t = l[e]
                  , n = s.indexOf(e);
                if (n > -1 ? void 0 : a(!1),
                !c.plugins[n]) {
                    t.extractEvents ? void 0 : a(!1),
                    c.plugins[n] = t;
                    var o = t.eventTypes;
                    for (var i in o)
                        r(o[i], t, i) ? void 0 : a(!1)
                }
            }
    }
    function r(e, t, n) {
        c.eventNameDispatchConfigs.hasOwnProperty(n) ? a(!1) : void 0,
        c.eventNameDispatchConfigs[n] = e;
        var o = e.phasedRegistrationNames;
        if (o) {
            for (var r in o)
                if (o.hasOwnProperty(r)) {
                    var s = o[r];
                    i(s, t, n)
                }
            return !0
        }
        return !!e.registrationName && (i(e.registrationName, t, n),
        !0)
    }
    function i(e, t, n) {
        c.registrationNameModules[e] ? a(!1) : void 0,
        c.registrationNameModules[e] = t,
        c.registrationNameDependencies[e] = t.eventTypes[n].dependencies
    }
    var a = n(23)
      , s = null
      , l = {}
      , c = {
        plugins: [],
        eventNameDispatchConfigs: {},
        registrationNameModules: {},
        registrationNameDependencies: {},
        injectEventPluginOrder: function(e) {
            s ? a(!1) : void 0,
            s = Array.prototype.slice.call(e),
            o()
        },
        injectEventPluginsByName: function(e) {
            var t = !1;
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    l.hasOwnProperty(n) && l[n] === r || (l[n] ? a(!1) : void 0,
                    l[n] = r,
                    t = !0)
                }
            t && o()
        },
        getPluginModuleForEvent: function(e) {
            var t = e.dispatchConfig;
            if (t.registrationName)
                return c.registrationNameModules[t.registrationName] || null;
            for (var n in t.phasedRegistrationNames)
                if (t.phasedRegistrationNames.hasOwnProperty(n)) {
                    var o = c.registrationNameModules[t.phasedRegistrationNames[n]];
                    if (o)
                        return o
                }
            return null
        },
        _resetEventPlugins: function() {
            s = null;
            for (var e in l)
                l.hasOwnProperty(e) && delete l[e];
            c.plugins.length = 0;
            var t = c.eventNameDispatchConfigs;
            for (var n in t)
                t.hasOwnProperty(n) && delete t[n];
            var o = c.registrationNameModules;
            for (var r in o)
                o.hasOwnProperty(r) && delete o[r]
        }
    };
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e === g.topMouseUp || e === g.topTouchEnd || e === g.topTouchCancel
    }
    function r(e) {
        return e === g.topMouseMove || e === g.topTouchMove
    }
    function i(e) {
        return e === g.topMouseDown || e === g.topTouchStart
    }
    function a(e, t, n, o) {
        var r = e.type || "unknown-event";
        e.currentTarget = h.Mount.getNode(o),
        t ? m.invokeGuardedCallbackWithCatch(r, n, e, o) : m.invokeGuardedCallback(r, n, e, o),
        e.currentTarget = null
    }
    function s(e, t) {
        var n = e._dispatchListeners
          , o = e._dispatchIDs;
        if (Array.isArray(n))
            for (var r = 0; r < n.length && !e.isPropagationStopped(); r++)
                a(e, t, n[r], o[r]);
        else
            n && a(e, t, n, o);
        e._dispatchListeners = null,
        e._dispatchIDs = null
    }
    function l(e) {
        var t = e._dispatchListeners
          , n = e._dispatchIDs;
        if (Array.isArray(t)) {
            for (var o = 0; o < t.length && !e.isPropagationStopped(); o++)
                if (t[o](e, n[o]))
                    return n[o]
        } else if (t && t(e, n))
            return n;
        return null
    }
    function c(e) {
        var t = l(e);
        return e._dispatchIDs = null,
        e._dispatchListeners = null,
        t
    }
    function u(e) {
        var t = e._dispatchListeners
          , n = e._dispatchIDs;
        Array.isArray(t) ? f(!1) : void 0;
        var o = t ? t(e, n) : null;
        return e._dispatchListeners = null,
        e._dispatchIDs = null,
        o
    }
    function p(e) {
        return !!e._dispatchListeners
    }
    var d = n(40)
      , m = n(44)
      , f = n(23)
      , h = (n(35),
    {
        Mount: null,
        injectMount: function(e) {
            h.Mount = e
        }
    })
      , g = d.topLevelTypes
      , v = {
        isEndish: o,
        isMoveish: r,
        isStartish: i,
        executeDirectDispatch: u,
        executeDispatchesInOrder: s,
        executeDispatchesInOrderStopAtTrue: c,
        hasDispatches: p,
        getNode: function(e) {
            return h.Mount.getNode(e)
        },
        getID: function(e) {
            return h.Mount.getID(e)
        },
        injection: h
    };
    e.exports = v
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        try {
            return t(n, o)
        } catch (e) {
            return void (null === r && (r = e))
        }
    }
    var r = null
      , i = {
        invokeGuardedCallback: o,
        invokeGuardedCallbackWithCatch: o,
        rethrowCaughtError: function() {
            if (r) {
                var e = r;
                throw r = null,
                e
            }
        }
    };
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    function o(e, t) {
        if (null == t ? r(!1) : void 0,
        null == e)
            return t;
        var n = Array.isArray(e)
          , o = Array.isArray(t);
        return n && o ? (e.push.apply(e, t),
        e) : n ? (e.push(t),
        e) : o ? [e].concat(t) : [e, t]
    }
    var r = n(23);
    e.exports = o
}
, function(e, t) {
    "use strict";
    var n = function(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    };
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        r.enqueueEvents(e),
        r.processEventQueue(!1)
    }
    var r = n(41)
      , i = {
        handleTopLevel: function(e, t, n, i, a) {
            var s = r.extractEvents(e, t, n, i, a);
            o(s)
        }
    };
    e.exports = i
}
, function(e, t) {
    "use strict";
    var n = {
        currentScrollLeft: 0,
        currentScrollTop: 0,
        refreshScrollValues: function(e) {
            n.currentScrollLeft = e.x,
            n.currentScrollTop = e.y
        }
    };
    e.exports = n
}
, function(e, t) {
    "use strict";
    function n(e, t) {
        if (null == e)
            throw new TypeError("Object.assign target cannot be null or undefined");
        for (var n = Object(e), o = Object.prototype.hasOwnProperty, r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            if (null != i) {
                var a = Object(i);
                for (var s in a)
                    o.call(a, s) && (n[s] = a[s])
            }
        }
        return n
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    /**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
    function o(e, t) {
        if (!i.canUseDOM || t && !("addEventListener"in document))
            return !1;
        var n = "on" + e
          , o = n in document;
        if (!o) {
            var a = document.createElement("div");
            a.setAttribute(n, "return;"),
            o = "function" == typeof a[n]
        }
        return !o && r && "wheel" === e && (o = document.implementation.hasFeature("Events.wheel", "3.0")),
        o
    }
    var r, i = n(19);
    i.canUseDOM && (r = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0),
    e.exports = o
}
, function(e, t) {
    "use strict";
    var n = {
        useCreateElement: !1
    };
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    var o = n(15)
      , r = n(49)
      , i = (n(53),
    "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103)
      , a = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    }
      , s = function(e, t, n, o, r, a, s) {
        var l = {
            $$typeof: i,
            type: e,
            key: t,
            ref: n,
            props: s,
            _owner: a
        };
        return l
    };
    s.createElement = function(e, t, n) {
        var r, i = {}, l = null, c = null, u = null, p = null;
        if (null != t) {
            c = void 0 === t.ref ? null : t.ref,
            l = void 0 === t.key ? null : "" + t.key,
            u = void 0 === t.__self ? null : t.__self,
            p = void 0 === t.__source ? null : t.__source;
            for (r in t)
                t.hasOwnProperty(r) && !a.hasOwnProperty(r) && (i[r] = t[r])
        }
        var d = arguments.length - 2;
        if (1 === d)
            i.children = n;
        else if (d > 1) {
            for (var m = Array(d), f = 0; f < d; f++)
                m[f] = arguments[f + 2];
            i.children = m
        }
        if (e && e.defaultProps) {
            var h = e.defaultProps;
            for (r in h)
                "undefined" == typeof i[r] && (i[r] = h[r])
        }
        return s(e, l, c, u, p, o.current, i)
    }
    ,
    s.createFactory = function(e) {
        var t = s.createElement.bind(null, e);
        return t.type = e,
        t
    }
    ,
    s.cloneAndReplaceKey = function(e, t) {
        var n = s(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n
    }
    ,
    s.cloneAndReplaceProps = function(e, t) {
        var n = s(e.type, e.key, e.ref, e._self, e._source, e._owner, t);
        return n
    }
    ,
    s.cloneElement = function(e, t, n) {
        var i, l = r({}, e.props), c = e.key, u = e.ref, p = e._self, d = e._source, m = e._owner;
        if (null != t) {
            void 0 !== t.ref && (u = t.ref,
            m = o.current),
            void 0 !== t.key && (c = "" + t.key);
            for (i in t)
                t.hasOwnProperty(i) && !a.hasOwnProperty(i) && (l[i] = t[i])
        }
        var f = arguments.length - 2;
        if (1 === f)
            l.children = n;
        else if (f > 1) {
            for (var h = Array(f), g = 0; g < f; g++)
                h[g] = arguments[g + 2];
            l.children = h
        }
        return s(e.type, c, u, p, d, m, l)
    }
    ,
    s.isValidElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === i
    }
    ,
    e.exports = s
}
, function(e, t, n) {
    "use strict";
    var o = !1;
    e.exports = o
}
, function(e, t) {
    "use strict";
    function n(e) {
        return !!i[e]
    }
    function o(e) {
        i[e] = !0
    }
    function r(e) {
        delete i[e]
    }
    var i = {}
      , a = {
        isNullComponentID: n,
        registerNullComponentID: o,
        deregisterNullComponentID: r
    };
    e.exports = a
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return m + e.toString(36)
    }
    function r(e, t) {
        return e.charAt(t) === m || t === e.length
    }
    function i(e) {
        return "" === e || e.charAt(0) === m && e.charAt(e.length - 1) !== m
    }
    function a(e, t) {
        return 0 === t.indexOf(e) && r(t, e.length)
    }
    function s(e) {
        return e ? e.substr(0, e.lastIndexOf(m)) : ""
    }
    function l(e, t) {
        if (i(e) && i(t) ? void 0 : d(!1),
        a(e, t) ? void 0 : d(!1),
        e === t)
            return e;
        var n, o = e.length + f;
        for (n = o; n < t.length && !r(t, n); n++)
            ;
        return t.substr(0, n)
    }
    function c(e, t) {
        var n = Math.min(e.length, t.length);
        if (0 === n)
            return "";
        for (var o = 0, a = 0; a <= n; a++)
            if (r(e, a) && r(t, a))
                o = a;
            else if (e.charAt(a) !== t.charAt(a))
                break;
        var s = e.substr(0, o);
        return i(s) ? void 0 : d(!1),
        s
    }
    function u(e, t, n, o, r, i) {
        e = e || "",
        t = t || "",
        e === t ? d(!1) : void 0;
        var c = a(t, e);
        c || a(e, t) ? void 0 : d(!1);
        for (var u = 0, p = c ? s : l, m = e; ; m = p(m, t)) {
            var f;
            if (r && m === e || i && m === t || (f = n(m, c, o)),
            f === !1 || m === t)
                break;
            u++ < h ? void 0 : d(!1)
        }
    }
    var p = n(56)
      , d = n(23)
      , m = "."
      , f = m.length
      , h = 1e4
      , g = {
        createReactRootID: function() {
            return o(p.createReactRootIndex())
        },
        createReactID: function(e, t) {
            return e + t
        },
        getReactRootIDFromNodeID: function(e) {
            if (e && e.charAt(0) === m && e.length > 1) {
                var t = e.indexOf(m, 1);
                return t > -1 ? e.substr(0, t) : e
            }
            return null
        },
        traverseEnterLeave: function(e, t, n, o, r) {
            var i = c(e, t);
            i !== e && u(e, i, n, o, !1, !0),
            i !== t && u(i, t, n, r, !0, !1)
        },
        traverseTwoPhase: function(e, t, n) {
            e && (u("", e, t, n, !0, !1),
            u(e, "", t, n, !1, !0))
        },
        traverseTwoPhaseSkipTarget: function(e, t, n) {
            e && (u("", e, t, n, !0, !0),
            u(e, "", t, n, !0, !0))
        },
        traverseAncestors: function(e, t, n) {
            u("", e, t, n, !0, !1)
        },
        getFirstCommonAncestorID: c,
        _getNextDescendantID: l,
        isAncestorIDOf: a,
        SEPARATOR: m
    };
    e.exports = g
}
, function(e, t) {
    "use strict";
    var n = {
        injectCreateReactRootIndex: function(e) {
            o.createReactRootIndex = e
        }
    }
      , o = {
        createReactRootIndex: null,
        injection: n
    };
    e.exports = o
}
, function(e, t) {
    "use strict";
    var n = {
        remove: function(e) {
            e._reactInternalInstance = void 0
        },
        get: function(e) {
            return e._reactInternalInstance
        },
        has: function(e) {
            return void 0 !== e._reactInternalInstance
        },
        set: function(e, t) {
            e._reactInternalInstance = t
        }
    };
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    var o = n(59)
      , r = /\/?>/
      , i = {
        CHECKSUM_ATTR_NAME: "data-react-checksum",
        addChecksumToMarkup: function(e) {
            var t = o(e);
            return e.replace(r, " " + i.CHECKSUM_ATTR_NAME + '="' + t + '"$&')
        },
        canReuseMarkup: function(e, t) {
            var n = t.getAttribute(i.CHECKSUM_ATTR_NAME);
            n = n && parseInt(n, 10);
            var r = o(e);
            return r === n
        }
    };
    e.exports = i
}
, function(e, t) {
    "use strict";
    function n(e) {
        for (var t = 1, n = 0, r = 0, i = e.length, a = i & -4; r < a; ) {
            for (; r < Math.min(r + 4096, a); r += 4)
                n += (t += e.charCodeAt(r)) + (t += e.charCodeAt(r + 1)) + (t += e.charCodeAt(r + 2)) + (t += e.charCodeAt(r + 3));
            t %= o,
            n %= o
        }
        for (; r < i; r++)
            n += t += e.charCodeAt(r);
        return t %= o,
        n %= o,
        t | n << 16
    }
    var o = 65521;
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o() {
        r.attachRefs(this, this._currentElement)
    }
    var r = n(61)
      , i = {
        mountComponent: function(e, t, n, r) {
            var i = e.mountComponent(t, n, r);
            return e._currentElement && null != e._currentElement.ref && n.getReactMountReady().enqueue(o, e),
            i
        },
        unmountComponent: function(e) {
            r.detachRefs(e, e._currentElement),
            e.unmountComponent()
        },
        receiveComponent: function(e, t, n, i) {
            var a = e._currentElement;
            if (t !== a || i !== e._context) {
                var s = r.shouldUpdateRefs(a, t);
                s && r.detachRefs(e, a),
                e.receiveComponent(t, n, i),
                s && e._currentElement && null != e._currentElement.ref && n.getReactMountReady().enqueue(o, e)
            }
        },
        performUpdateIfNecessary: function(e, t) {
            e.performUpdateIfNecessary(t)
        }
    };
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n) {
        "function" == typeof e ? e(t.getPublicInstance()) : i.addComponentAsRefTo(t, e, n)
    }
    function r(e, t, n) {
        "function" == typeof e ? e(null) : i.removeComponentAsRefFrom(t, e, n)
    }
    var i = n(62)
      , a = {};
    a.attachRefs = function(e, t) {
        if (null !== t && t !== !1) {
            var n = t.ref;
            null != n && o(n, e, t._owner)
        }
    }
    ,
    a.shouldUpdateRefs = function(e, t) {
        var n = null === e || e === !1
          , o = null === t || t === !1;
        return n || o || t._owner !== e._owner || t.ref !== e.ref
    }
    ,
    a.detachRefs = function(e, t) {
        if (null !== t && t !== !1) {
            var n = t.ref;
            null != n && r(n, e, t._owner)
        }
    }
    ,
    e.exports = a
}
, function(e, t, n) {
    "use strict";
    var o = n(23)
      , r = {
        isValidOwner: function(e) {
            return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef)
        },
        addComponentAsRefTo: function(e, t, n) {
            r.isValidOwner(n) ? void 0 : o(!1),
            n.attachRef(t, e)
        },
        removeComponentAsRefFrom: function(e, t, n) {
            r.isValidOwner(n) ? void 0 : o(!1),
            n.getPublicInstance().refs[t] === e.getPublicInstance() && n.detachRef(t)
        }
    };
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        s.enqueueUpdate(e)
    }
    function r(e, t) {
        var n = a.get(e);
        return n ? n : null
    }
    var i = (n(15),
    n(52))
      , a = n(57)
      , s = n(64)
      , l = n(49)
      , c = n(23)
      , u = (n(35),
    {
        isMounted: function(e) {
            var t = a.get(e);
            return !!t && !!t._renderedComponent
        },
        enqueueCallback: function(e, t) {
            "function" != typeof t ? c(!1) : void 0;
            var n = r(e);
            return n ? (n._pendingCallbacks ? n._pendingCallbacks.push(t) : n._pendingCallbacks = [t],
            void o(n)) : null
        },
        enqueueCallbackInternal: function(e, t) {
            "function" != typeof t ? c(!1) : void 0,
            e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t],
            o(e)
        },
        enqueueForceUpdate: function(e) {
            var t = r(e, "forceUpdate");
            t && (t._pendingForceUpdate = !0,
            o(t))
        },
        enqueueReplaceState: function(e, t) {
            var n = r(e, "replaceState");
            n && (n._pendingStateQueue = [t],
            n._pendingReplaceState = !0,
            o(n))
        },
        enqueueSetState: function(e, t) {
            var n = r(e, "setState");
            if (n) {
                var i = n._pendingStateQueue || (n._pendingStateQueue = []);
                i.push(t),
                o(n)
            }
        },
        enqueueSetProps: function(e, t) {
            var n = r(e, "setProps");
            n && u.enqueueSetPropsInternal(n, t)
        },
        enqueueSetPropsInternal: function(e, t) {
            var n = e._topLevelWrapper;
            n ? void 0 : c(!1);
            var r = n._pendingElement || n._currentElement
              , a = r.props
              , s = l({}, a.props, t);
            n._pendingElement = i.cloneAndReplaceProps(r, i.cloneAndReplaceProps(a, s)),
            o(n)
        },
        enqueueReplaceProps: function(e, t) {
            var n = r(e, "replaceProps");
            n && u.enqueueReplacePropsInternal(n, t)
        },
        enqueueReplacePropsInternal: function(e, t) {
            var n = e._topLevelWrapper;
            n ? void 0 : c(!1);
            var r = n._pendingElement || n._currentElement
              , a = r.props;
            n._pendingElement = i.cloneAndReplaceProps(r, i.cloneAndReplaceProps(a, t)),
            o(n)
        },
        enqueueElementInternal: function(e, t) {
            e._pendingElement = t,
            o(e)
        }
    });
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    function o() {
        N.ReactReconcileTransaction && w ? void 0 : g(!1)
    }
    function r() {
        this.reinitializeTransaction(),
        this.dirtyComponentsLength = null,
        this.callbackQueue = u.getPooled(),
        this.reconcileTransaction = N.ReactReconcileTransaction.getPooled(!1)
    }
    function i(e, t, n, r, i, a) {
        o(),
        w.batchedUpdates(e, t, n, r, i, a)
    }
    function a(e, t) {
        return e._mountOrder - t._mountOrder
    }
    function s(e) {
        var t = e.dirtyComponentsLength;
        t !== v.length ? g(!1) : void 0,
        v.sort(a);
        for (var n = 0; n < t; n++) {
            var o = v[n]
              , r = o._pendingCallbacks;
            if (o._pendingCallbacks = null,
            m.performUpdateIfNecessary(o, e.reconcileTransaction),
            r)
                for (var i = 0; i < r.length; i++)
                    e.callbackQueue.enqueue(r[i], o.getPublicInstance())
        }
    }
    function l(e) {
        return o(),
        w.isBatchingUpdates ? void v.push(e) : void w.batchedUpdates(l, e)
    }
    function c(e, t) {
        w.isBatchingUpdates ? void 0 : g(!1),
        b.enqueue(e, t),
        y = !0
    }
    var u = n(65)
      , p = n(66)
      , d = n(28)
      , m = n(60)
      , f = n(67)
      , h = n(49)
      , g = n(23)
      , v = []
      , b = u.getPooled()
      , y = !1
      , w = null
      , _ = {
        initialize: function() {
            this.dirtyComponentsLength = v.length
        },
        close: function() {
            this.dirtyComponentsLength !== v.length ? (v.splice(0, this.dirtyComponentsLength),
            C()) : v.length = 0
        }
    }
      , E = {
        initialize: function() {
            this.callbackQueue.reset()
        },
        close: function() {
            this.callbackQueue.notifyAll()
        }
    }
      , D = [_, E];
    h(r.prototype, f.Mixin, {
        getTransactionWrappers: function() {
            return D
        },
        destructor: function() {
            this.dirtyComponentsLength = null,
            u.release(this.callbackQueue),
            this.callbackQueue = null,
            N.ReactReconcileTransaction.release(this.reconcileTransaction),
            this.reconcileTransaction = null
        },
        perform: function(e, t, n) {
            return f.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n)
        }
    }),
    p.addPoolingTo(r);
    var C = function() {
        for (; v.length || y; ) {
            if (v.length) {
                var e = r.getPooled();
                e.perform(s, null, e),
                r.release(e)
            }
            if (y) {
                y = !1;
                var t = b;
                b = u.getPooled(),
                t.notifyAll(),
                u.release(t)
            }
        }
    };
    C = d.measure("ReactUpdates", "flushBatchedUpdates", C);
    var x = {
        injectReconcileTransaction: function(e) {
            e ? void 0 : g(!1),
            N.ReactReconcileTransaction = e
        },
        injectBatchingStrategy: function(e) {
            e ? void 0 : g(!1),
            "function" != typeof e.batchedUpdates ? g(!1) : void 0,
            "boolean" != typeof e.isBatchingUpdates ? g(!1) : void 0,
            w = e
        }
    }
      , N = {
        ReactReconcileTransaction: null,
        batchedUpdates: i,
        enqueueUpdate: l,
        flushBatchedUpdates: C,
        injection: x,
        asap: c
    };
    e.exports = N
}
, function(e, t, n) {
    "use strict";
    function o() {
        this._callbacks = null,
        this._contexts = null
    }
    var r = n(66)
      , i = n(49)
      , a = n(23);
    i(o.prototype, {
        enqueue: function(e, t) {
            this._callbacks = this._callbacks || [],
            this._contexts = this._contexts || [],
            this._callbacks.push(e),
            this._contexts.push(t)
        },
        notifyAll: function() {
            var e = this._callbacks
              , t = this._contexts;
            if (e) {
                e.length !== t.length ? a(!1) : void 0,
                this._callbacks = null,
                this._contexts = null;
                for (var n = 0; n < e.length; n++)
                    e[n].call(t[n]);
                e.length = 0,
                t.length = 0
            }
        },
        reset: function() {
            this._callbacks = null,
            this._contexts = null
        },
        destructor: function() {
            this.reset()
        }
    }),
    r.addPoolingTo(o),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var o = n(23)
      , r = function(e) {
        var t = this;
        if (t.instancePool.length) {
            var n = t.instancePool.pop();
            return t.call(n, e),
            n
        }
        return new t(e)
    }
      , i = function(e, t) {
        var n = this;
        if (n.instancePool.length) {
            var o = n.instancePool.pop();
            return n.call(o, e, t),
            o
        }
        return new n(e,t)
    }
      , a = function(e, t, n) {
        var o = this;
        if (o.instancePool.length) {
            var r = o.instancePool.pop();
            return o.call(r, e, t, n),
            r
        }
        return new o(e,t,n)
    }
      , s = function(e, t, n, o) {
        var r = this;
        if (r.instancePool.length) {
            var i = r.instancePool.pop();
            return r.call(i, e, t, n, o),
            i
        }
        return new r(e,t,n,o)
    }
      , l = function(e, t, n, o, r) {
        var i = this;
        if (i.instancePool.length) {
            var a = i.instancePool.pop();
            return i.call(a, e, t, n, o, r),
            a
        }
        return new i(e,t,n,o,r)
    }
      , c = function(e) {
        var t = this;
        e instanceof t ? void 0 : o(!1),
        e.destructor(),
        t.instancePool.length < t.poolSize && t.instancePool.push(e)
    }
      , u = 10
      , p = r
      , d = function(e, t) {
        var n = e;
        return n.instancePool = [],
        n.getPooled = t || p,
        n.poolSize || (n.poolSize = u),
        n.release = c,
        n
    }
      , m = {
        addPoolingTo: d,
        oneArgumentPooler: r,
        twoArgumentPooler: i,
        threeArgumentPooler: a,
        fourArgumentPooler: s,
        fiveArgumentPooler: l
    };
    e.exports = m
}
, function(e, t, n) {
    "use strict";
    var o = n(23)
      , r = {
        reinitializeTransaction: function() {
            this.transactionWrappers = this.getTransactionWrappers(),
            this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [],
            this._isInTransaction = !1
        },
        _isInTransaction: !1,
        getTransactionWrappers: null,
        isInTransaction: function() {
            return !!this._isInTransaction
        },
        perform: function(e, t, n, r, i, a, s, l) {
            this.isInTransaction() ? o(!1) : void 0;
            var c, u;
            try {
                this._isInTransaction = !0,
                c = !0,
                this.initializeAll(0),
                u = e.call(t, n, r, i, a, s, l),
                c = !1
            } finally {
                try {
                    if (c)
                        try {
                            this.closeAll(0)
                        } catch (e) {}
                    else
                        this.closeAll(0)
                } finally {
                    this._isInTransaction = !1
                }
            }
            return u
        },
        initializeAll: function(e) {
            for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                var o = t[n];
                try {
                    this.wrapperInitData[n] = i.OBSERVED_ERROR,
                    this.wrapperInitData[n] = o.initialize ? o.initialize.call(this) : null
                } finally {
                    if (this.wrapperInitData[n] === i.OBSERVED_ERROR)
                        try {
                            this.initializeAll(n + 1)
                        } catch (e) {}
                }
            }
        },
        closeAll: function(e) {
            this.isInTransaction() ? void 0 : o(!1);
            for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                var r, a = t[n], s = this.wrapperInitData[n];
                try {
                    r = !0,
                    s !== i.OBSERVED_ERROR && a.close && a.close.call(this, s),
                    r = !1
                } finally {
                    if (r)
                        try {
                            this.closeAll(n + 1)
                        } catch (e) {}
                }
            }
            this.wrapperInitData.length = 0
        }
    }
      , i = {
        Mixin: r,
        OBSERVED_ERROR: {}
    };
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    var o = {};
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t) {
        var n = !0;
        e: for (; n; ) {
            var o = e
              , i = t;
            if (n = !1,
            o && i) {
                if (o === i)
                    return !0;
                if (r(o))
                    return !1;
                if (r(i)) {
                    e = o,
                    t = i.parentNode,
                    n = !0;
                    continue e
                }
                return o.contains ? o.contains(i) : !!o.compareDocumentPosition && !!(16 & o.compareDocumentPosition(i))
            }
            return !1
        }
    }
    var r = n(70);
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return r(e) && 3 == e.nodeType
    }
    var r = n(71);
    e.exports = o
}
, function(e, t) {
    "use strict";
    function n(e) {
        return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return "function" == typeof e && "undefined" != typeof e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent
    }
    function r(e) {
        var t;
        if (null === e || e === !1)
            t = new a(r);
        else if ("object" == typeof e) {
            var n = e;
            !n || "function" != typeof n.type && "string" != typeof n.type ? c(!1) : void 0,
            t = "string" == typeof n.type ? s.createInternalComponent(n) : o(n.type) ? new n.type(n) : new u
        } else
            "string" == typeof e || "number" == typeof e ? t = s.createInstanceForText(e) : c(!1);
        return t.construct(e),
        t._mountIndex = 0,
        t._mountImage = null,
        t
    }
    var i = n(73)
      , a = n(78)
      , s = n(79)
      , l = n(49)
      , c = n(23)
      , u = (n(35),
    function() {}
    );
    l(u.prototype, i.Mixin, {
        _instantiateReactComponent: r
    }),
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        var t = e._currentElement._owner || null;
        if (t) {
            var n = t.getName();
            if (n)
                return " Check the render method of `" + n + "`."
        }
        return ""
    }
    function r(e) {}
    var i = n(74)
      , a = n(15)
      , s = n(52)
      , l = n(57)
      , c = n(28)
      , u = n(75)
      , p = (n(76),
    n(60))
      , d = n(63)
      , m = n(49)
      , f = n(68)
      , h = n(23)
      , g = n(77);
    n(35);
    r.prototype.render = function() {
        var e = l.get(this)._currentElement.type;
        return e(this.props, this.context, this.updater)
    }
    ;
    var v = 1
      , b = {
        construct: function(e) {
            this._currentElement = e,
            this._rootNodeID = null,
            this._instance = null,
            this._pendingElement = null,
            this._pendingStateQueue = null,
            this._pendingReplaceState = !1,
            this._pendingForceUpdate = !1,
            this._renderedComponent = null,
            this._context = null,
            this._mountOrder = 0,
            this._topLevelWrapper = null,
            this._pendingCallbacks = null
        },
        mountComponent: function(e, t, n) {
            this._context = n,
            this._mountOrder = v++,
            this._rootNodeID = e;
            var o, i, a = this._processProps(this._currentElement.props), c = this._processContext(n), u = this._currentElement.type, m = "prototype"in u;
            m && (o = new u(a,c,d)),
            m && null !== o && o !== !1 && !s.isValidElement(o) || (i = o,
            o = new r(u)),
            o.props = a,
            o.context = c,
            o.refs = f,
            o.updater = d,
            this._instance = o,
            l.set(o, this);
            var g = o.state;
            void 0 === g && (o.state = g = null),
            "object" != typeof g || Array.isArray(g) ? h(!1) : void 0,
            this._pendingStateQueue = null,
            this._pendingReplaceState = !1,
            this._pendingForceUpdate = !1,
            o.componentWillMount && (o.componentWillMount(),
            this._pendingStateQueue && (o.state = this._processPendingState(o.props, o.context))),
            void 0 === i && (i = this._renderValidatedComponent()),
            this._renderedComponent = this._instantiateReactComponent(i);
            var b = p.mountComponent(this._renderedComponent, e, t, this._processChildContext(n));
            return o.componentDidMount && t.getReactMountReady().enqueue(o.componentDidMount, o),
            b
        },
        unmountComponent: function() {
            var e = this._instance;
            e.componentWillUnmount && e.componentWillUnmount(),
            p.unmountComponent(this._renderedComponent),
            this._renderedComponent = null,
            this._instance = null,
            this._pendingStateQueue = null,
            this._pendingReplaceState = !1,
            this._pendingForceUpdate = !1,
            this._pendingCallbacks = null,
            this._pendingElement = null,
            this._context = null,
            this._rootNodeID = null,
            this._topLevelWrapper = null,
            l.remove(e)
        },
        _maskContext: function(e) {
            var t = null
              , n = this._currentElement.type
              , o = n.contextTypes;
            if (!o)
                return f;
            t = {};
            for (var r in o)
                t[r] = e[r];
            return t
        },
        _processContext: function(e) {
            var t = this._maskContext(e);
            return t
        },
        _processChildContext: function(e) {
            var t = this._currentElement.type
              , n = this._instance
              , o = n.getChildContext && n.getChildContext();
            if (o) {
                "object" != typeof t.childContextTypes ? h(!1) : void 0;
                for (var r in o)
                    r in t.childContextTypes ? void 0 : h(!1);
                return m({}, e, o)
            }
            return e
        },
        _processProps: function(e) {
            return e
        },
        _checkPropTypes: function(e, t, n) {
            var r = this.getName();
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var a;
                    try {
                        "function" != typeof e[i] ? h(!1) : void 0,
                        a = e[i](t, i, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                    } catch (e) {
                        a = e
                    }
                    if (a instanceof Error) {
                        o(this);
                        n === u.prop
                    }
                }
        },
        receiveComponent: function(e, t, n) {
            var o = this._currentElement
              , r = this._context;
            this._pendingElement = null,
            this.updateComponent(t, o, e, r, n)
        },
        performUpdateIfNecessary: function(e) {
            null != this._pendingElement && p.receiveComponent(this, this._pendingElement || this._currentElement, e, this._context),
            (null !== this._pendingStateQueue || this._pendingForceUpdate) && this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context)
        },
        updateComponent: function(e, t, n, o, r) {
            var i, a = this._instance, s = this._context === r ? a.context : this._processContext(r);
            t === n ? i = n.props : (i = this._processProps(n.props),
            a.componentWillReceiveProps && a.componentWillReceiveProps(i, s));
            var l = this._processPendingState(i, s)
              , c = this._pendingForceUpdate || !a.shouldComponentUpdate || a.shouldComponentUpdate(i, l, s);
            c ? (this._pendingForceUpdate = !1,
            this._performComponentUpdate(n, i, l, s, e, r)) : (this._currentElement = n,
            this._context = r,
            a.props = i,
            a.state = l,
            a.context = s)
        },
        _processPendingState: function(e, t) {
            var n = this._instance
              , o = this._pendingStateQueue
              , r = this._pendingReplaceState;
            if (this._pendingReplaceState = !1,
            this._pendingStateQueue = null,
            !o)
                return n.state;
            if (r && 1 === o.length)
                return o[0];
            for (var i = m({}, r ? o[0] : n.state), a = r ? 1 : 0; a < o.length; a++) {
                var s = o[a];
                m(i, "function" == typeof s ? s.call(n, i, e, t) : s)
            }
            return i
        },
        _performComponentUpdate: function(e, t, n, o, r, i) {
            var a, s, l, c = this._instance, u = Boolean(c.componentDidUpdate);
            u && (a = c.props,
            s = c.state,
            l = c.context),
            c.componentWillUpdate && c.componentWillUpdate(t, n, o),
            this._currentElement = e,
            this._context = i,
            c.props = t,
            c.state = n,
            c.context = o,
            this._updateRenderedComponent(r, i),
            u && r.getReactMountReady().enqueue(c.componentDidUpdate.bind(c, a, s, l), c)
        },
        _updateRenderedComponent: function(e, t) {
            var n = this._renderedComponent
              , o = n._currentElement
              , r = this._renderValidatedComponent();
            if (g(o, r))
                p.receiveComponent(n, r, e, this._processChildContext(t));
            else {
                var i = this._rootNodeID
                  , a = n._rootNodeID;
                p.unmountComponent(n),
                this._renderedComponent = this._instantiateReactComponent(r);
                var s = p.mountComponent(this._renderedComponent, i, e, this._processChildContext(t));
                this._replaceNodeWithMarkupByID(a, s)
            }
        },
        _replaceNodeWithMarkupByID: function(e, t) {
            i.replaceNodeWithMarkupByID(e, t)
        },
        _renderValidatedComponentWithoutOwnerOrContext: function() {
            var e = this._instance
              , t = e.render();
            return t
        },
        _renderValidatedComponent: function() {
            var e;
            a.current = this;
            try {
                e = this._renderValidatedComponentWithoutOwnerOrContext()
            } finally {
                a.current = null
            }
            return null === e || e === !1 || s.isValidElement(e) ? void 0 : h(!1),
            e
        },
        attachRef: function(e, t) {
            var n = this.getPublicInstance();
            null == n ? h(!1) : void 0;
            var o = t.getPublicInstance()
              , r = n.refs === f ? n.refs = {} : n.refs;
            r[e] = o
        },
        detachRef: function(e) {
            var t = this.getPublicInstance().refs;
            delete t[e]
        },
        getName: function() {
            var e = this._currentElement.type
              , t = this._instance && this._instance.constructor;
            return e.displayName || t && t.displayName || e.name || t && t.name || null
        },
        getPublicInstance: function() {
            var e = this._instance;
            return e instanceof r ? null : e
        },
        _instantiateReactComponent: null
    };
    c.measureMethods(b, "ReactCompositeComponent", {
        mountComponent: "mountComponent",
        updateComponent: "updateComponent",
        _renderValidatedComponent: "_renderValidatedComponent"
    });
    var y = {
        Mixin: b
    };
    e.exports = y
}
, function(e, t, n) {
    "use strict";
    var o = n(23)
      , r = !1
      , i = {
        unmountIDFromEnvironment: null,
        replaceNodeWithMarkupByID: null,
        processChildrenUpdates: null,
        injection: {
            injectEnvironment: function(e) {
                r ? o(!1) : void 0,
                i.unmountIDFromEnvironment = e.unmountIDFromEnvironment,
                i.replaceNodeWithMarkupByID = e.replaceNodeWithMarkupByID,
                i.processChildrenUpdates = e.processChildrenUpdates,
                r = !0
            }
        }
    };
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    var o = n(27)
      , r = o({
        prop: null,
        context: null,
        childContext: null
    });
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    var o = {};
    e.exports = o
}
, function(e, t) {
    "use strict";
    function n(e, t) {
        var n = null === e || e === !1
          , o = null === t || t === !1;
        if (n || o)
            return n === o;
        var r = typeof e
          , i = typeof t;
        return "string" === r || "number" === r ? "string" === i || "number" === i : "object" === i && e.type === t.type && e.key === t.key
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o() {
        a.registerNullComponentID(this._rootNodeID)
    }
    var r, i = n(52), a = n(54), s = n(60), l = n(49), c = {
        injectEmptyComponent: function(e) {
            r = i.createElement(e)
        }
    }, u = function(e) {
        this._currentElement = null,
        this._rootNodeID = null,
        this._renderedComponent = e(r)
    };
    l(u.prototype, {
        construct: function(e) {},
        mountComponent: function(e, t, n) {
            return t.getReactMountReady().enqueue(o, this),
            this._rootNodeID = e,
            s.mountComponent(this._renderedComponent, e, t, n)
        },
        receiveComponent: function() {},
        unmountComponent: function(e, t, n) {
            s.unmountComponent(this._renderedComponent),
            a.deregisterNullComponentID(this._rootNodeID),
            this._rootNodeID = null,
            this._renderedComponent = null
        }
    }),
    u.injection = c,
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        if ("function" == typeof e.type)
            return e.type;
        var t = e.type
          , n = p[t];
        return null == n && (p[t] = n = c(t)),
        n
    }
    function r(e) {
        return u ? void 0 : l(!1),
        new u(e.type,e.props)
    }
    function i(e) {
        return new d(e)
    }
    function a(e) {
        return e instanceof d
    }
    var s = n(49)
      , l = n(23)
      , c = null
      , u = null
      , p = {}
      , d = null
      , m = {
        injectGenericComponentClass: function(e) {
            u = e
        },
        injectTextComponentClass: function(e) {
            d = e
        },
        injectComponentClasses: function(e) {
            s(p, e)
        }
    }
      , f = {
        getComponentClassForElement: o,
        createInternalComponent: r,
        createInstanceForText: i,
        isTextComponent: a,
        injection: m
    };
    e.exports = f
}
, function(e, t, n) {
    "use strict";
    var o = (n(49),
    n(25))
      , r = (n(35),
    o);
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o() {
        if (!x) {
            x = !0,
            v.EventEmitter.injectReactEventListener(g),
            v.EventPluginHub.injectEventPluginOrder(s),
            v.EventPluginHub.injectInstanceHandle(b),
            v.EventPluginHub.injectMount(y),
            v.EventPluginHub.injectEventPluginsByName({
                SimpleEventPlugin: D,
                EnterLeaveEventPlugin: l,
                ChangeEventPlugin: i,
                SelectEventPlugin: _,
                BeforeInputEventPlugin: r
            }),
            v.NativeComponent.injectGenericComponentClass(f),
            v.NativeComponent.injectTextComponentClass(h),
            v.Class.injectMixin(p),
            v.DOMProperty.injectDOMPropertyConfig(u),
            v.DOMProperty.injectDOMPropertyConfig(C),
            v.EmptyComponent.injectEmptyComponent("noscript"),
            v.Updates.injectReconcileTransaction(w),
            v.Updates.injectBatchingStrategy(m),
            v.RootIndex.injectCreateReactRootIndex(c.canUseDOM ? a.createReactRootIndex : E.createReactRootIndex),
            v.Component.injectEnvironment(d)
        }
    }
    var r = n(82)
      , i = n(90)
      , a = n(93)
      , s = n(94)
      , l = n(95)
      , c = n(19)
      , u = n(99)
      , p = n(100)
      , d = n(36)
      , m = n(102)
      , f = n(103)
      , h = n(16)
      , g = n(128)
      , v = n(131)
      , b = n(55)
      , y = n(38)
      , w = n(135)
      , _ = n(140)
      , E = n(141)
      , D = n(142)
      , C = n(151)
      , x = !1;
    e.exports = {
        inject: o
    }
}
, function(e, t, n) {
    "use strict";
    function o() {
        var e = window.opera;
        return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12
    }
    function r(e) {
        return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
    }
    function i(e) {
        switch (e) {
        case S.topCompositionStart:
            return M.compositionStart;
        case S.topCompositionEnd:
            return M.compositionEnd;
        case S.topCompositionUpdate:
            return M.compositionUpdate
        }
    }
    function a(e, t) {
        return e === S.topKeyDown && t.keyCode === _
    }
    function s(e, t) {
        switch (e) {
        case S.topKeyUp:
            return w.indexOf(t.keyCode) !== -1;
        case S.topKeyDown:
            return t.keyCode !== _;
        case S.topKeyPress:
        case S.topMouseDown:
        case S.topBlur:
            return !0;
        default:
            return !1
        }
    }
    function l(e) {
        var t = e.detail;
        return "object" == typeof t && "data"in t ? t.data : null
    }
    function c(e, t, n, o, r) {
        var c, u;
        if (E ? c = i(e) : R ? s(e, o) && (c = M.compositionEnd) : a(e, o) && (c = M.compositionStart),
        !c)
            return null;
        x && (R || c !== M.compositionStart ? c === M.compositionEnd && R && (u = R.getData()) : R = g.getPooled(t));
        var p = v.getPooled(c, n, o, r);
        if (u)
            p.data = u;
        else {
            var d = l(o);
            null !== d && (p.data = d)
        }
        return f.accumulateTwoPhaseDispatches(p),
        p
    }
    function u(e, t) {
        switch (e) {
        case S.topCompositionEnd:
            return l(t);
        case S.topKeyPress:
            var n = t.which;
            return n !== N ? null : (k = !0,
            I);
        case S.topTextInput:
            var o = t.data;
            return o === I && k ? null : o;
        default:
            return null
        }
    }
    function p(e, t) {
        if (R) {
            if (e === S.topCompositionEnd || s(e, t)) {
                var n = R.getData();
                return g.release(R),
                R = null,
                n
            }
            return null
        }
        switch (e) {
        case S.topPaste:
            return null;
        case S.topKeyPress:
            return t.which && !r(t) ? String.fromCharCode(t.which) : null;
        case S.topCompositionEnd:
            return x ? null : t.data;
        default:
            return null
        }
    }
    function d(e, t, n, o, r) {
        var i;
        if (i = C ? u(e, o) : p(e, o),
        !i)
            return null;
        var a = b.getPooled(M.beforeInput, n, o, r);
        return a.data = i,
        f.accumulateTwoPhaseDispatches(a),
        a
    }
    var m = n(40)
      , f = n(83)
      , h = n(19)
      , g = n(84)
      , v = n(86)
      , b = n(88)
      , y = n(89)
      , w = [9, 13, 27, 32]
      , _ = 229
      , E = h.canUseDOM && "CompositionEvent"in window
      , D = null;
    h.canUseDOM && "documentMode"in document && (D = document.documentMode);
    var C = h.canUseDOM && "TextEvent"in window && !D && !o()
      , x = h.canUseDOM && (!E || D && D > 8 && D <= 11)
      , N = 32
      , I = String.fromCharCode(N)
      , S = m.topLevelTypes
      , M = {
        beforeInput: {
            phasedRegistrationNames: {
                bubbled: y({
                    onBeforeInput: null
                }),
                captured: y({
                    onBeforeInputCapture: null
                })
            },
            dependencies: [S.topCompositionEnd, S.topKeyPress, S.topTextInput, S.topPaste]
        },
        compositionEnd: {
            phasedRegistrationNames: {
                bubbled: y({
                    onCompositionEnd: null
                }),
                captured: y({
                    onCompositionEndCapture: null
                })
            },
            dependencies: [S.topBlur, S.topCompositionEnd, S.topKeyDown, S.topKeyPress, S.topKeyUp, S.topMouseDown]
        },
        compositionStart: {
            phasedRegistrationNames: {
                bubbled: y({
                    onCompositionStart: null
                }),
                captured: y({
                    onCompositionStartCapture: null
                })
            },
            dependencies: [S.topBlur, S.topCompositionStart, S.topKeyDown, S.topKeyPress, S.topKeyUp, S.topMouseDown]
        },
        compositionUpdate: {
            phasedRegistrationNames: {
                bubbled: y({
                    onCompositionUpdate: null
                }),
                captured: y({
                    onCompositionUpdateCapture: null
                })
            },
            dependencies: [S.topBlur, S.topCompositionUpdate, S.topKeyDown, S.topKeyPress, S.topKeyUp, S.topMouseDown]
        }
    }
      , k = !1
      , R = null
      , O = {
        eventTypes: M,
        extractEvents: function(e, t, n, o, r) {
            return [c(e, t, n, o, r), d(e, t, n, o, r)]
        }
    };
    e.exports = O
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n) {
        var o = t.dispatchConfig.phasedRegistrationNames[n];
        return b(e, o)
    }
    function r(e, t, n) {
        var r = t ? v.bubbled : v.captured
          , i = o(e, n, r);
        i && (n._dispatchListeners = h(n._dispatchListeners, i),
        n._dispatchIDs = h(n._dispatchIDs, e))
    }
    function i(e) {
        e && e.dispatchConfig.phasedRegistrationNames && f.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker, r, e)
    }
    function a(e) {
        e && e.dispatchConfig.phasedRegistrationNames && f.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(e.dispatchMarker, r, e)
    }
    function s(e, t, n) {
        if (n && n.dispatchConfig.registrationName) {
            var o = n.dispatchConfig.registrationName
              , r = b(e, o);
            r && (n._dispatchListeners = h(n._dispatchListeners, r),
            n._dispatchIDs = h(n._dispatchIDs, e))
        }
    }
    function l(e) {
        e && e.dispatchConfig.registrationName && s(e.dispatchMarker, null, e)
    }
    function c(e) {
        g(e, i)
    }
    function u(e) {
        g(e, a)
    }
    function p(e, t, n, o) {
        f.injection.getInstanceHandle().traverseEnterLeave(n, o, s, e, t)
    }
    function d(e) {
        g(e, l)
    }
    var m = n(40)
      , f = n(41)
      , h = (n(35),
    n(45))
      , g = n(46)
      , v = m.PropagationPhases
      , b = f.getListener
      , y = {
        accumulateTwoPhaseDispatches: c,
        accumulateTwoPhaseDispatchesSkipTarget: u,
        accumulateDirectDispatches: d,
        accumulateEnterLeaveDispatches: p
    };
    e.exports = y
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        this._root = e,
        this._startText = this.getText(),
        this._fallbackText = null
    }
    var r = n(66)
      , i = n(49)
      , a = n(85);
    i(o.prototype, {
        destructor: function() {
            this._root = null,
            this._startText = null,
            this._fallbackText = null
        },
        getText: function() {
            return "value"in this._root ? this._root.value : this._root[a()]
        },
        getData: function() {
            if (this._fallbackText)
                return this._fallbackText;
            var e, t, n = this._startText, o = n.length, r = this.getText(), i = r.length;
            for (e = 0; e < o && n[e] === r[e]; e++)
                ;
            var a = o - e;
            for (t = 1; t <= a && n[o - t] === r[i - t]; t++)
                ;
            var s = t > 1 ? 1 - t : void 0;
            return this._fallbackText = r.slice(e, s),
            this._fallbackText
        }
    }),
    r.addPoolingTo(o),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o() {
        return !i && r.canUseDOM && (i = "textContent"in document.documentElement ? "textContent" : "innerText"),
        i
    }
    var r = n(19)
      , i = null;
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        r.call(this, e, t, n, o)
    }
    var r = n(87)
      , i = {
        data: null
    };
    r.augmentClass(o, i),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        this.dispatchConfig = e,
        this.dispatchMarker = t,
        this.nativeEvent = n;
        var r = this.constructor.Interface;
        for (var i in r)
            if (r.hasOwnProperty(i)) {
                var s = r[i];
                s ? this[i] = s(n) : "target" === i ? this.target = o : this[i] = n[i]
            }
        var l = null != n.defaultPrevented ? n.defaultPrevented : n.returnValue === !1;
        l ? this.isDefaultPrevented = a.thatReturnsTrue : this.isDefaultPrevented = a.thatReturnsFalse,
        this.isPropagationStopped = a.thatReturnsFalse
    }
    var r = n(66)
      , i = n(49)
      , a = n(25)
      , s = (n(35),
    {
        type: null,
        target: null,
        currentTarget: a.thatReturnsNull,
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    });
    i(o.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            this.isDefaultPrevented = a.thatReturnsTrue)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0,
            this.isPropagationStopped = a.thatReturnsTrue)
        },
        persist: function() {
            this.isPersistent = a.thatReturnsTrue
        },
        isPersistent: a.thatReturnsFalse,
        destructor: function() {
            var e = this.constructor.Interface;
            for (var t in e)
                this[t] = null;
            this.dispatchConfig = null,
            this.dispatchMarker = null,
            this.nativeEvent = null
        }
    }),
    o.Interface = s,
    o.augmentClass = function(e, t) {
        var n = this
          , o = Object.create(n.prototype);
        i(o, e.prototype),
        e.prototype = o,
        e.prototype.constructor = e,
        e.Interface = i({}, n.Interface, t),
        e.augmentClass = n.augmentClass,
        r.addPoolingTo(e, r.fourArgumentPooler)
    }
    ,
    r.addPoolingTo(o, r.fourArgumentPooler),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        r.call(this, e, t, n, o)
    }
    var r = n(87)
      , i = {
        data: null
    };
    r.augmentClass(o, i),
    e.exports = o
}
, function(e, t) {
    "use strict";
    var n = function(e) {
        var t;
        for (t in e)
            if (e.hasOwnProperty(t))
                return t;
        return null
    };
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        var t = e.nodeName && e.nodeName.toLowerCase();
        return "select" === t || "input" === t && "file" === e.type
    }
    function r(e) {
        var t = D.getPooled(M.change, R, e, C(e));
        w.accumulateTwoPhaseDispatches(t),
        E.batchedUpdates(i, t)
    }
    function i(e) {
        y.enqueueEvents(e),
        y.processEventQueue(!1)
    }
    function a(e, t) {
        k = e,
        R = t,
        k.attachEvent("onchange", r)
    }
    function s() {
        k && (k.detachEvent("onchange", r),
        k = null,
        R = null)
    }
    function l(e, t, n) {
        if (e === S.topChange)
            return n
    }
    function c(e, t, n) {
        e === S.topFocus ? (s(),
        a(t, n)) : e === S.topBlur && s()
    }
    function u(e, t) {
        k = e,
        R = t,
        O = e.value,
        T = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"),
        Object.defineProperty(k, "value", B),
        k.attachEvent("onpropertychange", d)
    }
    function p() {
        k && (delete k.value,
        k.detachEvent("onpropertychange", d),
        k = null,
        R = null,
        O = null,
        T = null)
    }
    function d(e) {
        if ("value" === e.propertyName) {
            var t = e.srcElement.value;
            t !== O && (O = t,
            r(e))
        }
    }
    function m(e, t, n) {
        if (e === S.topInput)
            return n
    }
    function f(e, t, n) {
        e === S.topFocus ? (p(),
        u(t, n)) : e === S.topBlur && p()
    }
    function h(e, t, n) {
        if ((e === S.topSelectionChange || e === S.topKeyUp || e === S.topKeyDown) && k && k.value !== O)
            return O = k.value,
            R
    }
    function g(e) {
        return e.nodeName && "input" === e.nodeName.toLowerCase() && ("checkbox" === e.type || "radio" === e.type)
    }
    function v(e, t, n) {
        if (e === S.topClick)
            return n
    }
    var b = n(40)
      , y = n(41)
      , w = n(83)
      , _ = n(19)
      , E = n(64)
      , D = n(87)
      , C = n(91)
      , x = n(50)
      , N = n(92)
      , I = n(89)
      , S = b.topLevelTypes
      , M = {
        change: {
            phasedRegistrationNames: {
                bubbled: I({
                    onChange: null
                }),
                captured: I({
                    onChangeCapture: null
                })
            },
            dependencies: [S.topBlur, S.topChange, S.topClick, S.topFocus, S.topInput, S.topKeyDown, S.topKeyUp, S.topSelectionChange]
        }
    }
      , k = null
      , R = null
      , O = null
      , T = null
      , A = !1;
    _.canUseDOM && (A = x("change") && (!("documentMode"in document) || document.documentMode > 8));
    var P = !1;
    _.canUseDOM && (P = x("input") && (!("documentMode"in document) || document.documentMode > 9));
    var B = {
        get: function() {
            return T.get.call(this)
        },
        set: function(e) {
            O = "" + e,
            T.set.call(this, e)
        }
    }
      , W = {
        eventTypes: M,
        extractEvents: function(e, t, n, r, i) {
            var a, s;
            if (o(t) ? A ? a = l : s = c : N(t) ? P ? a = m : (a = h,
            s = f) : g(t) && (a = v),
            a) {
                var u = a(e, t, n);
                if (u) {
                    var p = D.getPooled(M.change, u, r, i);
                    return p.type = "change",
                    w.accumulateTwoPhaseDispatches(p),
                    p
                }
            }
            s && s(e, t, n)
        }
    };
    e.exports = W
}
, function(e, t) {
    "use strict";
    function n(e) {
        var t = e.target || e.srcElement || window;
        return 3 === t.nodeType ? t.parentNode : t
    }
    e.exports = n
}
, function(e, t) {
    "use strict";
    function n(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && o[e.type] || "textarea" === t)
    }
    var o = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    e.exports = n
}
, function(e, t) {
    "use strict";
    var n = 0
      , o = {
        createReactRootIndex: function() {
            return n++
        }
    };
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var o = n(89)
      , r = [o({
        ResponderEventPlugin: null
    }), o({
        SimpleEventPlugin: null
    }), o({
        TapEventPlugin: null
    }), o({
        EnterLeaveEventPlugin: null
    }), o({
        ChangeEventPlugin: null
    }), o({
        SelectEventPlugin: null
    }), o({
        BeforeInputEventPlugin: null
    })];
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    var o = n(40)
      , r = n(83)
      , i = n(96)
      , a = n(38)
      , s = n(89)
      , l = o.topLevelTypes
      , c = a.getFirstReactDOM
      , u = {
        mouseEnter: {
            registrationName: s({
                onMouseEnter: null
            }),
            dependencies: [l.topMouseOut, l.topMouseOver]
        },
        mouseLeave: {
            registrationName: s({
                onMouseLeave: null
            }),
            dependencies: [l.topMouseOut, l.topMouseOver]
        }
    }
      , p = [null, null]
      , d = {
        eventTypes: u,
        extractEvents: function(e, t, n, o, s) {
            if (e === l.topMouseOver && (o.relatedTarget || o.fromElement))
                return null;
            if (e !== l.topMouseOut && e !== l.topMouseOver)
                return null;
            var d;
            if (t.window === t)
                d = t;
            else {
                var m = t.ownerDocument;
                d = m ? m.defaultView || m.parentWindow : window
            }
            var f, h, g = "", v = "";
            if (e === l.topMouseOut ? (f = t,
            g = n,
            h = c(o.relatedTarget || o.toElement),
            h ? v = a.getID(h) : h = d,
            h = h || d) : (f = d,
            h = t,
            v = n),
            f === h)
                return null;
            var b = i.getPooled(u.mouseLeave, g, o, s);
            b.type = "mouseleave",
            b.target = f,
            b.relatedTarget = h;
            var y = i.getPooled(u.mouseEnter, v, o, s);
            return y.type = "mouseenter",
            y.target = h,
            y.relatedTarget = f,
            r.accumulateEnterLeaveDispatches(b, y, g, v),
            p[0] = b,
            p[1] = y,
            p
        }
    };
    e.exports = d
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        r.call(this, e, t, n, o)
    }
    var r = n(97)
      , i = n(48)
      , a = n(98)
      , s = {
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: a,
        button: function(e) {
            var t = e.button;
            return "which"in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0
        },
        buttons: null,
        relatedTarget: function(e) {
            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
        },
        pageX: function(e) {
            return "pageX"in e ? e.pageX : e.clientX + i.currentScrollLeft
        },
        pageY: function(e) {
            return "pageY"in e ? e.pageY : e.clientY + i.currentScrollTop
        }
    };
    r.augmentClass(o, s),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        r.call(this, e, t, n, o)
    }
    var r = n(87)
      , i = n(91)
      , a = {
        view: function(e) {
            if (e.view)
                return e.view;
            var t = i(e);
            if (null != t && t.window === t)
                return t;
            var n = t.ownerDocument;
            return n ? n.defaultView || n.parentWindow : window
        },
        detail: function(e) {
            return e.detail || 0
        }
    };
    r.augmentClass(o, a),
    e.exports = o
}
, function(e, t) {
    "use strict";
    function n(e) {
        var t = this
          , n = t.nativeEvent;
        if (n.getModifierState)
            return n.getModifierState(e);
        var o = r[e];
        return !!o && !!n[o]
    }
    function o(e) {
        return n
    }
    var r = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var o, r = n(33), i = n(19), a = r.injection.MUST_USE_ATTRIBUTE, s = r.injection.MUST_USE_PROPERTY, l = r.injection.HAS_BOOLEAN_VALUE, c = r.injection.HAS_SIDE_EFFECTS, u = r.injection.HAS_NUMERIC_VALUE, p = r.injection.HAS_POSITIVE_NUMERIC_VALUE, d = r.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
    if (i.canUseDOM) {
        var m = document.implementation;
        o = m && m.hasFeature && m.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
    }
    var f = {
        isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
        Properties: {
            accept: null,
            acceptCharset: null,
            accessKey: null,
            action: null,
            allowFullScreen: a | l,
            allowTransparency: a,
            alt: null,
            async: l,
            autoComplete: null,
            autoPlay: l,
            capture: a | l,
            cellPadding: null,
            cellSpacing: null,
            charSet: a,
            challenge: a,
            checked: s | l,
            classID: a,
            className: o ? a : s,
            cols: a | p,
            colSpan: null,
            content: null,
            contentEditable: null,
            contextMenu: a,
            controls: s | l,
            coords: null,
            crossOrigin: null,
            data: null,
            dateTime: a,
            default: l,
            defer: l,
            dir: null,
            disabled: a | l,
            download: d,
            draggable: null,
            encType: null,
            form: a,
            formAction: a,
            formEncType: a,
            formMethod: a,
            formNoValidate: l,
            formTarget: a,
            frameBorder: a,
            headers: null,
            height: a,
            hidden: a | l,
            high: null,
            href: null,
            hrefLang: null,
            htmlFor: null,
            httpEquiv: null,
            icon: null,
            id: s,
            inputMode: a,
            integrity: null,
            is: a,
            keyParams: a,
            keyType: a,
            kind: null,
            label: null,
            lang: null,
            list: a,
            loop: s | l,
            low: null,
            manifest: a,
            marginHeight: null,
            marginWidth: null,
            max: null,
            maxLength: a,
            media: a,
            mediaGroup: null,
            method: null,
            min: null,
            minLength: a,
            multiple: s | l,
            muted: s | l,
            name: null,
            nonce: a,
            noValidate: l,
            open: l,
            optimum: null,
            pattern: null,
            placeholder: null,
            poster: null,
            preload: null,
            radioGroup: null,
            readOnly: s | l,
            rel: null,
            required: l,
            reversed: l,
            role: a,
            rows: a | p,
            rowSpan: null,
            sandbox: null,
            scope: null,
            scoped: l,
            scrolling: null,
            seamless: a | l,
            selected: s | l,
            shape: null,
            size: a | p,
            sizes: a,
            span: p,
            spellCheck: null,
            src: null,
            srcDoc: s,
            srcLang: null,
            srcSet: a,
            start: u,
            step: null,
            style: null,
            summary: null,
            tabIndex: null,
            target: null,
            title: null,
            type: null,
            useMap: null,
            value: s | c,
            width: a,
            wmode: a,
            wrap: null,
            about: a,
            datatype: a,
            inlist: a,
            prefix: a,
            property: a,
            resource: a,
            typeof: a,
            vocab: a,
            autoCapitalize: a,
            autoCorrect: a,
            autoSave: null,
            color: null,
            itemProp: a,
            itemScope: a | l,
            itemType: a,
            itemID: a,
            itemRef: a,
            results: null,
            security: a,
            unselectable: a
        },
        DOMAttributeNames: {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv"
        },
        DOMPropertyNames: {
            autoComplete: "autocomplete",
            autoFocus: "autofocus",
            autoPlay: "autoplay",
            autoSave: "autosave",
            encType: "encoding",
            hrefLang: "hreflang",
            radioGroup: "radiogroup",
            spellCheck: "spellcheck",
            srcDoc: "srcdoc",
            srcSet: "srcset"
        }
    };
    e.exports = f
}
, function(e, t, n) {
    "use strict";
    var o = (n(57),
    n(101))
      , r = (n(35),
    "_getDOMNodeDidWarn")
      , i = {
        getDOMNode: function() {
            return this.constructor[r] = !0,
            o(this)
        }
    };
    e.exports = i
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return null == e ? null : 1 === e.nodeType ? e : r.has(e) ? i.getNodeFromInstance(e) : (null != e.render && "function" == typeof e.render ? a(!1) : void 0,
        void a(!1))
    }
    var r = (n(15),
    n(57))
      , i = n(38)
      , a = n(23);
    n(35);
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o() {
        this.reinitializeTransaction()
    }
    var r = n(64)
      , i = n(67)
      , a = n(49)
      , s = n(25)
      , l = {
        initialize: s,
        close: function() {
            d.isBatchingUpdates = !1
        }
    }
      , c = {
        initialize: s,
        close: r.flushBatchedUpdates.bind(r)
    }
      , u = [c, l];
    a(o.prototype, i.Mixin, {
        getTransactionWrappers: function() {
            return u
        }
    });
    var p = new o
      , d = {
        isBatchingUpdates: !1,
        batchedUpdates: function(e, t, n, o, r, i) {
            var a = d.isBatchingUpdates;
            d.isBatchingUpdates = !0,
            a ? e(t, n, o, r, i) : p.perform(e, null, t, n, o, r, i)
        }
    };
    e.exports = d
}
, function(e, t, n) {
    "use strict";
    function o() {
        return this
    }
    function r() {
        var e = this._reactInternalComponent;
        return !!e
    }
    function i() {}
    function a(e, t) {
        var n = this._reactInternalComponent;
        n && (O.enqueueSetPropsInternal(n, e),
        t && O.enqueueCallbackInternal(n, t))
    }
    function s(e, t) {
        var n = this._reactInternalComponent;
        n && (O.enqueueReplacePropsInternal(n, e),
        t && O.enqueueCallbackInternal(n, t))
    }
    function l(e, t) {
        t && (null != t.dangerouslySetInnerHTML && (null != t.children ? B(!1) : void 0,
        "object" == typeof t.dangerouslySetInnerHTML && K in t.dangerouslySetInnerHTML ? void 0 : B(!1)),
        null != t.style && "object" != typeof t.style ? B(!1) : void 0)
    }
    function c(e, t, n, o) {
        var r = M.findReactContainerForID(e);
        if (r) {
            var i = r.nodeType === q ? r.ownerDocument : r;
            j(t, i)
        }
        o.getReactMountReady().enqueue(u, {
            id: e,
            registrationName: t,
            listener: n
        })
    }
    function u() {
        var e = this;
        E.putListener(e.id, e.registrationName, e.listener)
    }
    function p() {
        var e = this;
        e._rootNodeID ? void 0 : B(!1);
        var t = M.getNode(e._rootNodeID);
        switch (t ? void 0 : B(!1),
        e._tag) {
        case "iframe":
            e._wrapperState.listeners = [E.trapBubbledEvent(_.topLevelTypes.topLoad, "load", t)];
            break;
        case "video":
        case "audio":
            e._wrapperState.listeners = [];
            for (var n in Y)
                Y.hasOwnProperty(n) && e._wrapperState.listeners.push(E.trapBubbledEvent(_.topLevelTypes[n], Y[n], t));
            break;
        case "img":
            e._wrapperState.listeners = [E.trapBubbledEvent(_.topLevelTypes.topError, "error", t), E.trapBubbledEvent(_.topLevelTypes.topLoad, "load", t)];
            break;
        case "form":
            e._wrapperState.listeners = [E.trapBubbledEvent(_.topLevelTypes.topReset, "reset", t), E.trapBubbledEvent(_.topLevelTypes.topSubmit, "submit", t)]
        }
    }
    function d() {
        x.mountReadyWrapper(this)
    }
    function m() {
        I.postUpdateWrapper(this)
    }
    function f(e) {
        Z.call($, e) || (J.test(e) ? void 0 : B(!1),
        $[e] = !0)
    }
    function h(e, t) {
        return e.indexOf("-") >= 0 || null != t.is
    }
    function g(e) {
        f(e),
        this._tag = e.toLowerCase(),
        this._renderedChildren = null,
        this._previousStyle = null,
        this._previousStyleCopy = null,
        this._rootNodeID = null,
        this._wrapperState = null,
        this._topLevelWrapper = null,
        this._nodeWithLegacyProperties = null
    }
    var v = n(104)
      , b = n(106)
      , y = n(33)
      , w = n(32)
      , _ = n(40)
      , E = n(39)
      , D = n(36)
      , C = n(114)
      , x = n(115)
      , N = n(119)
      , I = n(122)
      , S = n(123)
      , M = n(38)
      , k = n(124)
      , R = n(28)
      , O = n(63)
      , T = n(49)
      , A = n(53)
      , P = n(31)
      , B = n(23)
      , W = (n(50),
    n(89))
      , L = n(29)
      , U = n(30)
      , F = (n(127),
    n(80),
    n(35),
    E.deleteListener)
      , j = E.listenTo
      , G = E.registrationNameModules
      , H = {
        string: !0,
        number: !0
    }
      , V = W({
        children: null
    })
      , z = W({
        style: null
    })
      , K = W({
        __html: null
    })
      , q = 1
      , Y = {
        topAbort: "abort",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTimeUpdate: "timeupdate",
        topVolumeChange: "volumechange",
        topWaiting: "waiting"
    }
      , X = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }
      , Q = {
        listing: !0,
        pre: !0,
        textarea: !0
    }
      , J = (T({
        menuitem: !0
    }, X),
    /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/)
      , $ = {}
      , Z = {}.hasOwnProperty;
    g.displayName = "ReactDOMComponent",
    g.Mixin = {
        construct: function(e) {
            this._currentElement = e
        },
        mountComponent: function(e, t, n) {
            this._rootNodeID = e;
            var o = this._currentElement.props;
            switch (this._tag) {
            case "iframe":
            case "img":
            case "form":
            case "video":
            case "audio":
                this._wrapperState = {
                    listeners: null
                },
                t.getReactMountReady().enqueue(p, this);
                break;
            case "button":
                o = C.getNativeProps(this, o, n);
                break;
            case "input":
                x.mountWrapper(this, o, n),
                o = x.getNativeProps(this, o, n);
                break;
            case "option":
                N.mountWrapper(this, o, n),
                o = N.getNativeProps(this, o, n);
                break;
            case "select":
                I.mountWrapper(this, o, n),
                o = I.getNativeProps(this, o, n),
                n = I.processChildContext(this, o, n);
                break;
            case "textarea":
                S.mountWrapper(this, o, n),
                o = S.getNativeProps(this, o, n)
            }
            l(this, o);
            var r;
            if (t.useCreateElement) {
                var i = n[M.ownerDocumentContextKey]
                  , a = i.createElement(this._currentElement.type);
                w.setAttributeForID(a, this._rootNodeID),
                M.getID(a),
                this._updateDOMProperties({}, o, t, a),
                this._createInitialChildren(t, o, n, a),
                r = a
            } else {
                var s = this._createOpenTagMarkupAndPutListeners(t, o)
                  , c = this._createContentMarkup(t, o, n);
                r = !c && X[this._tag] ? s + "/>" : s + ">" + c + "</" + this._currentElement.type + ">"
            }
            switch (this._tag) {
            case "input":
                t.getReactMountReady().enqueue(d, this);
            case "button":
            case "select":
            case "textarea":
                o.autoFocus && t.getReactMountReady().enqueue(v.focusDOMComponent, this)
            }
            return r
        },
        _createOpenTagMarkupAndPutListeners: function(e, t) {
            var n = "<" + this._currentElement.type;
            for (var o in t)
                if (t.hasOwnProperty(o)) {
                    var r = t[o];
                    if (null != r)
                        if (G.hasOwnProperty(o))
                            r && c(this._rootNodeID, o, r, e);
                        else {
                            o === z && (r && (r = this._previousStyleCopy = T({}, t.style)),
                            r = b.createMarkupForStyles(r));
                            var i = null;
                            null != this._tag && h(this._tag, t) ? o !== V && (i = w.createMarkupForCustomAttribute(o, r)) : i = w.createMarkupForProperty(o, r),
                            i && (n += " " + i)
                        }
                }
            if (e.renderToStaticMarkup)
                return n;
            var a = w.createMarkupForID(this._rootNodeID);
            return n + " " + a
        },
        _createContentMarkup: function(e, t, n) {
            var o = ""
              , r = t.dangerouslySetInnerHTML;
            if (null != r)
                null != r.__html && (o = r.__html);
            else {
                var i = H[typeof t.children] ? t.children : null
                  , a = null != i ? null : t.children;
                if (null != i)
                    o = P(i);
                else if (null != a) {
                    var s = this.mountChildren(a, e, n);
                    o = s.join("")
                }
            }
            return Q[this._tag] && "\n" === o.charAt(0) ? "\n" + o : o
        },
        _createInitialChildren: function(e, t, n, o) {
            var r = t.dangerouslySetInnerHTML;
            if (null != r)
                null != r.__html && L(o, r.__html);
            else {
                var i = H[typeof t.children] ? t.children : null
                  , a = null != i ? null : t.children;
                if (null != i)
                    U(o, i);
                else if (null != a)
                    for (var s = this.mountChildren(a, e, n), l = 0; l < s.length; l++)
                        o.appendChild(s[l])
            }
        },
        receiveComponent: function(e, t, n) {
            var o = this._currentElement;
            this._currentElement = e,
            this.updateComponent(t, o, e, n)
        },
        updateComponent: function(e, t, n, o) {
            var r = t.props
              , i = this._currentElement.props;
            switch (this._tag) {
            case "button":
                r = C.getNativeProps(this, r),
                i = C.getNativeProps(this, i);
                break;
            case "input":
                x.updateWrapper(this),
                r = x.getNativeProps(this, r),
                i = x.getNativeProps(this, i);
                break;
            case "option":
                r = N.getNativeProps(this, r),
                i = N.getNativeProps(this, i);
                break;
            case "select":
                r = I.getNativeProps(this, r),
                i = I.getNativeProps(this, i);
                break;
            case "textarea":
                S.updateWrapper(this),
                r = S.getNativeProps(this, r),
                i = S.getNativeProps(this, i)
            }
            l(this, i),
            this._updateDOMProperties(r, i, e, null),
            this._updateDOMChildren(r, i, e, o),
            !A && this._nodeWithLegacyProperties && (this._nodeWithLegacyProperties.props = i),
            "select" === this._tag && e.getReactMountReady().enqueue(m, this)
        },
        _updateDOMProperties: function(e, t, n, o) {
            var r, i, a;
            for (r in e)
                if (!t.hasOwnProperty(r) && e.hasOwnProperty(r))
                    if (r === z) {
                        var s = this._previousStyleCopy;
                        for (i in s)
                            s.hasOwnProperty(i) && (a = a || {},
                            a[i] = "");
                        this._previousStyleCopy = null
                    } else
                        G.hasOwnProperty(r) ? e[r] && F(this._rootNodeID, r) : (y.properties[r] || y.isCustomAttribute(r)) && (o || (o = M.getNode(this._rootNodeID)),
                        w.deleteValueForProperty(o, r));
            for (r in t) {
                var l = t[r]
                  , u = r === z ? this._previousStyleCopy : e[r];
                if (t.hasOwnProperty(r) && l !== u)
                    if (r === z)
                        if (l ? l = this._previousStyleCopy = T({}, l) : this._previousStyleCopy = null,
                        u) {
                            for (i in u)
                                !u.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (a = a || {},
                                a[i] = "");
                            for (i in l)
                                l.hasOwnProperty(i) && u[i] !== l[i] && (a = a || {},
                                a[i] = l[i])
                        } else
                            a = l;
                    else
                        G.hasOwnProperty(r) ? l ? c(this._rootNodeID, r, l, n) : u && F(this._rootNodeID, r) : h(this._tag, t) ? (o || (o = M.getNode(this._rootNodeID)),
                        r === V && (l = null),
                        w.setValueForAttribute(o, r, l)) : (y.properties[r] || y.isCustomAttribute(r)) && (o || (o = M.getNode(this._rootNodeID)),
                        null != l ? w.setValueForProperty(o, r, l) : w.deleteValueForProperty(o, r))
            }
            a && (o || (o = M.getNode(this._rootNodeID)),
            b.setValueForStyles(o, a))
        },
        _updateDOMChildren: function(e, t, n, o) {
            var r = H[typeof e.children] ? e.children : null
              , i = H[typeof t.children] ? t.children : null
              , a = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html
              , s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html
              , l = null != r ? null : e.children
              , c = null != i ? null : t.children
              , u = null != r || null != a
              , p = null != i || null != s;
            null != l && null == c ? this.updateChildren(null, n, o) : u && !p && this.updateTextContent(""),
            null != i ? r !== i && this.updateTextContent("" + i) : null != s ? a !== s && this.updateMarkup("" + s) : null != c && this.updateChildren(c, n, o)
        },
        unmountComponent: function() {
            switch (this._tag) {
            case "iframe":
            case "img":
            case "form":
            case "video":
            case "audio":
                var e = this._wrapperState.listeners;
                if (e)
                    for (var t = 0; t < e.length; t++)
                        e[t].remove();
                break;
            case "input":
                x.unmountWrapper(this);
                break;
            case "html":
            case "head":
            case "body":
                B(!1)
            }
            if (this.unmountChildren(),
            E.deleteAllListeners(this._rootNodeID),
            D.unmountIDFromEnvironment(this._rootNodeID),
            this._rootNodeID = null,
            this._wrapperState = null,
            this._nodeWithLegacyProperties) {
                var n = this._nodeWithLegacyProperties;
                n._reactInternalComponent = null,
                this._nodeWithLegacyProperties = null
            }
        },
        getPublicInstance: function() {
            if (!this._nodeWithLegacyProperties) {
                var e = M.getNode(this._rootNodeID);
                e._reactInternalComponent = this,
                e.getDOMNode = o,
                e.isMounted = r,
                e.setState = i,
                e.replaceState = i,
                e.forceUpdate = i,
                e.setProps = a,
                e.replaceProps = s,
                e.props = this._currentElement.props,
                this._nodeWithLegacyProperties = e
            }
            return this._nodeWithLegacyProperties
        }
    },
    R.measureMethods(g, "ReactDOMComponent", {
        mountComponent: "mountComponent",
        updateComponent: "updateComponent"
    }),
    T(g.prototype, g.Mixin, k.Mixin),
    e.exports = g
}
, function(e, t, n) {
    "use strict";
    var o = n(38)
      , r = n(101)
      , i = n(105)
      , a = {
        componentDidMount: function() {
            this.props.autoFocus && i(r(this))
        }
    }
      , s = {
        Mixin: a,
        focusDOMComponent: function() {
            i(o.getNode(this._rootNodeID))
        }
    };
    e.exports = s
}
, function(e, t) {
    "use strict";
    function n(e) {
        try {
            e.focus()
        } catch (e) {}
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    var o = n(107)
      , r = n(19)
      , i = n(28)
      , a = (n(108),
    n(110))
      , s = n(111)
      , l = n(113)
      , c = (n(35),
    l(function(e) {
        return s(e)
    }))
      , u = !1
      , p = "cssFloat";
    if (r.canUseDOM) {
        var d = document.createElement("div").style;
        try {
            d.font = ""
        } catch (e) {
            u = !0
        }
        void 0 === document.documentElement.style.cssFloat && (p = "styleFloat")
    }
    var m = {
        createMarkupForStyles: function(e) {
            var t = "";
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var o = e[n];
                    null != o && (t += c(n) + ":",
                    t += a(n, o) + ";")
                }
            return t || null
        },
        setValueForStyles: function(e, t) {
            var n = e.style;
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var i = a(r, t[r]);
                    if ("float" === r && (r = p),
                    i)
                        n[r] = i;
                    else {
                        var s = u && o.shorthandPropertyExpansions[r];
                        if (s)
                            for (var l in s)
                                n[l] = "";
                        else
                            n[r] = ""
                    }
                }
        }
    };
    i.measureMethods(m, "CSSPropertyOperations", {
        setValueForStyles: "setValueForStyles"
    }),
    e.exports = m
}
, function(e, t) {
    "use strict";
    function n(e, t) {
        return e + t.charAt(0).toUpperCase() + t.substring(1)
    }
    var o = {
        animationIterationCount: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        stopOpacity: !0,
        strokeDashoffset: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , r = ["Webkit", "ms", "Moz", "O"];
    Object.keys(o).forEach(function(e) {
        r.forEach(function(t) {
            o[n(t, e)] = o[e]
        })
    });
    var i = {
        background: {
            backgroundAttachment: !0,
            backgroundColor: !0,
            backgroundImage: !0,
            backgroundPositionX: !0,
            backgroundPositionY: !0,
            backgroundRepeat: !0
        },
        backgroundPosition: {
            backgroundPositionX: !0,
            backgroundPositionY: !0
        },
        border: {
            borderWidth: !0,
            borderStyle: !0,
            borderColor: !0
        },
        borderBottom: {
            borderBottomWidth: !0,
            borderBottomStyle: !0,
            borderBottomColor: !0
        },
        borderLeft: {
            borderLeftWidth: !0,
            borderLeftStyle: !0,
            borderLeftColor: !0
        },
        borderRight: {
            borderRightWidth: !0,
            borderRightStyle: !0,
            borderRightColor: !0
        },
        borderTop: {
            borderTopWidth: !0,
            borderTopStyle: !0,
            borderTopColor: !0
        },
        font: {
            fontStyle: !0,
            fontVariant: !0,
            fontWeight: !0,
            fontSize: !0,
            lineHeight: !0,
            fontFamily: !0
        },
        outline: {
            outlineWidth: !0,
            outlineStyle: !0,
            outlineColor: !0
        }
    }
      , a = {
        isUnitlessNumber: o,
        shorthandPropertyExpansions: i
    };
    e.exports = a
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return r(e.replace(i, "ms-"))
    }
    var r = n(109)
      , i = /^-ms-/;
    e.exports = o
}
, function(e, t) {
    "use strict";
    function n(e) {
        return e.replace(o, function(e, t) {
            return t.toUpperCase()
        })
    }
    var o = /-(.)/g;
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o(e, t) {
        var n = null == t || "boolean" == typeof t || "" === t;
        if (n)
            return "";
        var o = isNaN(t);
        return o || 0 === t || i.hasOwnProperty(e) && i[e] ? "" + t : ("string" == typeof t && (t = t.trim()),
        t + "px")
    }
    var r = n(107)
      , i = r.isUnitlessNumber;
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return r(e).replace(i, "-ms-")
    }
    var r = n(112)
      , i = /^ms-/;
    e.exports = o
}
, function(e, t) {
    "use strict";
    function n(e) {
        return e.replace(o, "-$1").toLowerCase()
    }
    var o = /([A-Z])/g;
    e.exports = n
}
, function(e, t) {
    "use strict";
    function n(e) {
        var t = {};
        return function(n) {
            return t.hasOwnProperty(n) || (t[n] = e.call(this, n)),
            t[n]
        }
    }
    e.exports = n
}
, function(e, t) {
    "use strict";
    var n = {
        onClick: !0,
        onDoubleClick: !0,
        onMouseDown: !0,
        onMouseMove: !0,
        onMouseUp: !0,
        onClickCapture: !0,
        onDoubleClickCapture: !0,
        onMouseDownCapture: !0,
        onMouseMoveCapture: !0,
        onMouseUpCapture: !0
    }
      , o = {
        getNativeProps: function(e, t, o) {
            if (!t.disabled)
                return t;
            var r = {};
            for (var i in t)
                t.hasOwnProperty(i) && !n[i] && (r[i] = t[i]);
            return r
        }
    };
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o() {
        this._rootNodeID && d.updateWrapper(this)
    }
    function r(e) {
        var t = this._currentElement.props
          , n = a.executeOnChange(t, e);
        l.asap(o, this);
        var r = t.name;
        if ("radio" === t.type && null != r) {
            for (var i = s.getNode(this._rootNodeID), c = i; c.parentNode; )
                c = c.parentNode;
            for (var d = c.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), m = 0; m < d.length; m++) {
                var f = d[m];
                if (f !== i && f.form === i.form) {
                    var h = s.getID(f);
                    h ? void 0 : u(!1);
                    var g = p[h];
                    g ? void 0 : u(!1),
                    l.asap(o, g)
                }
            }
        }
        return n
    }
    var i = n(37)
      , a = n(116)
      , s = n(38)
      , l = n(64)
      , c = n(49)
      , u = n(23)
      , p = {}
      , d = {
        getNativeProps: function(e, t, n) {
            var o = a.getValue(t)
              , r = a.getChecked(t)
              , i = c({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: null != o ? o : e._wrapperState.initialValue,
                checked: null != r ? r : e._wrapperState.initialChecked,
                onChange: e._wrapperState.onChange
            });
            return i
        },
        mountWrapper: function(e, t) {
            var n = t.defaultValue;
            e._wrapperState = {
                initialChecked: t.defaultChecked || !1,
                initialValue: null != n ? n : null,
                onChange: r.bind(e)
            }
        },
        mountReadyWrapper: function(e) {
            p[e._rootNodeID] = e
        },
        unmountWrapper: function(e) {
            delete p[e._rootNodeID]
        },
        updateWrapper: function(e) {
            var t = e._currentElement.props
              , n = t.checked;
            null != n && i.updatePropertyByID(e._rootNodeID, "checked", n || !1);
            var o = a.getValue(t);
            null != o && i.updatePropertyByID(e._rootNodeID, "value", "" + o)
        }
    };
    e.exports = d
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        null != e.checkedLink && null != e.valueLink ? c(!1) : void 0
    }
    function r(e) {
        o(e),
        null != e.value || null != e.onChange ? c(!1) : void 0
    }
    function i(e) {
        o(e),
        null != e.checked || null != e.onChange ? c(!1) : void 0
    }
    function a(e) {
        if (e) {
            var t = e.getName();
            if (t)
                return " Check the render method of `" + t + "`."
        }
        return ""
    }
    var s = n(117)
      , l = n(75)
      , c = n(23)
      , u = (n(35),
    {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
    })
      , p = {
        value: function(e, t, n) {
            return !e[t] || u[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
        },
        checked: function(e, t, n) {
            return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
        },
        onChange: s.func
    }
      , d = {}
      , m = {
        checkPropTypes: function(e, t, n) {
            for (var o in p) {
                if (p.hasOwnProperty(o))
                    var r = p[o](t, o, e, l.prop, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                if (r instanceof Error && !(r.message in d)) {
                    d[r.message] = !0;
                    a(n)
                }
            }
        },
        getValue: function(e) {
            return e.valueLink ? (r(e),
            e.valueLink.value) : e.value
        },
        getChecked: function(e) {
            return e.checkedLink ? (i(e),
            e.checkedLink.value) : e.checked
        },
        executeOnChange: function(e, t) {
            return e.valueLink ? (r(e),
            e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (i(e),
            e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0
        }
    };
    e.exports = m
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        function t(t, n, o, r, i, a) {
            if (r = r || E,
            a = a || o,
            null == n[o]) {
                var s = y[i];
                return t ? new Error("Required " + s + " `" + a + "` was not specified in " + ("`" + r + "`.")) : null
            }
            return e(n, o, r, i, a)
        }
        var n = t.bind(null, !1);
        return n.isRequired = t.bind(null, !0),
        n
    }
    function r(e) {
        function t(t, n, o, r, i) {
            var a = t[n]
              , s = h(a);
            if (s !== e) {
                var l = y[r]
                  , c = g(a);
                return new Error("Invalid " + l + " `" + i + "` of type " + ("`" + c + "` supplied to `" + o + "`, expected ") + ("`" + e + "`."))
            }
            return null
        }
        return o(t)
    }
    function i() {
        return o(w.thatReturns(null))
    }
    function a(e) {
        function t(t, n, o, r, i) {
            var a = t[n];
            if (!Array.isArray(a)) {
                var s = y[r]
                  , l = h(a);
                return new Error("Invalid " + s + " `" + i + "` of type " + ("`" + l + "` supplied to `" + o + "`, expected an array."))
            }
            for (var c = 0; c < a.length; c++) {
                var u = e(a, c, o, r, i + "[" + c + "]", "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                if (u instanceof Error)
                    return u
            }
            return null
        }
        return o(t)
    }
    function s() {
        function e(e, t, n, o, r) {
            if (!b.isValidElement(e[t])) {
                var i = y[o];
                return new Error("Invalid " + i + " `" + r + "` supplied to " + ("`" + n + "`, expected a single ReactElement."))
            }
            return null
        }
        return o(e)
    }
    function l(e) {
        function t(t, n, o, r, i) {
            if (!(t[n]instanceof e)) {
                var a = y[r]
                  , s = e.name || E
                  , l = v(t[n]);
                return new Error("Invalid " + a + " `" + i + "` of type " + ("`" + l + "` supplied to `" + o + "`, expected ") + ("instance of `" + s + "`."))
            }
            return null
        }
        return o(t)
    }
    function c(e) {
        function t(t, n, o, r, i) {
            for (var a = t[n], s = 0; s < e.length; s++)
                if (a === e[s])
                    return null;
            var l = y[r]
              , c = JSON.stringify(e);
            return new Error("Invalid " + l + " `" + i + "` of value `" + a + "` " + ("supplied to `" + o + "`, expected one of " + c + "."))
        }
        return o(Array.isArray(e) ? t : function() {
            return new Error("Invalid argument supplied to oneOf, expected an instance of array.")
        }
        )
    }
    function u(e) {
        function t(t, n, o, r, i) {
            var a = t[n]
              , s = h(a);
            if ("object" !== s) {
                var l = y[r];
                return new Error("Invalid " + l + " `" + i + "` of type " + ("`" + s + "` supplied to `" + o + "`, expected an object."))
            }
            for (var c in a)
                if (a.hasOwnProperty(c)) {
                    var u = e(a, c, o, r, i + "." + c, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                    if (u instanceof Error)
                        return u
                }
            return null
        }
        return o(t)
    }
    function p(e) {
        function t(t, n, o, r, i) {
            for (var a = 0; a < e.length; a++) {
                var s = e[a];
                if (null == s(t, n, o, r, i, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"))
                    return null
            }
            var l = y[r];
            return new Error("Invalid " + l + " `" + i + "` supplied to " + ("`" + o + "`."))
        }
        return o(Array.isArray(e) ? t : function() {
            return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")
        }
        )
    }
    function d() {
        function e(e, t, n, o, r) {
            if (!f(e[t])) {
                var i = y[o];
                return new Error("Invalid " + i + " `" + r + "` supplied to " + ("`" + n + "`, expected a ReactNode."))
            }
            return null
        }
        return o(e)
    }
    function m(e) {
        function t(t, n, o, r, i) {
            var a = t[n]
              , s = h(a);
            if ("object" !== s) {
                var l = y[r];
                return new Error("Invalid " + l + " `" + i + "` of type `" + s + "` " + ("supplied to `" + o + "`, expected `object`."))
            }
            for (var c in e) {
                var u = e[c];
                if (u) {
                    var p = u(a, c, o, r, i + "." + c, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                    if (p)
                        return p
                }
            }
            return null
        }
        return o(t)
    }
    function f(e) {
        switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
            return !0;
        case "boolean":
            return !e;
        case "object":
            if (Array.isArray(e))
                return e.every(f);
            if (null === e || b.isValidElement(e))
                return !0;
            var t = _(e);
            if (!t)
                return !1;
            var n, o = t.call(e);
            if (t !== e.entries) {
                for (; !(n = o.next()).done; )
                    if (!f(n.value))
                        return !1
            } else
                for (; !(n = o.next()).done; ) {
                    var r = n.value;
                    if (r && !f(r[1]))
                        return !1
                }
            return !0;
        default:
            return !1
        }
    }
    function h(e) {
        var t = typeof e;
        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : t
    }
    function g(e) {
        var t = h(e);
        if ("object" === t) {
            if (e instanceof Date)
                return "date";
            if (e instanceof RegExp)
                return "regexp"
        }
        return t
    }
    function v(e) {
        return e.constructor && e.constructor.name ? e.constructor.name : "<<anonymous>>"
    }
    var b = n(52)
      , y = n(76)
      , w = n(25)
      , _ = n(118)
      , E = "<<anonymous>>"
      , D = {
        array: r("array"),
        bool: r("boolean"),
        func: r("function"),
        number: r("number"),
        object: r("object"),
        string: r("string"),
        any: i(),
        arrayOf: a,
        element: s(),
        instanceOf: l,
        node: d(),
        objectOf: u,
        oneOf: c,
        oneOfType: p,
        shape: m
    };
    e.exports = D
}
, function(e, t) {
    "use strict";
    function n(e) {
        var t = e && (o && e[o] || e[r]);
        if ("function" == typeof t)
            return t
    }
    var o = "function" == typeof Symbol && Symbol.iterator
      , r = "@@iterator";
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    var o = n(120)
      , r = n(122)
      , i = n(49)
      , a = (n(35),
    r.valueContextKey)
      , s = {
        mountWrapper: function(e, t, n) {
            var o = n[a]
              , r = null;
            if (null != o)
                if (r = !1,
                Array.isArray(o)) {
                    for (var i = 0; i < o.length; i++)
                        if ("" + o[i] == "" + t.value) {
                            r = !0;
                            break
                        }
                } else
                    r = "" + o == "" + t.value;
            e._wrapperState = {
                selected: r
            }
        },
        getNativeProps: function(e, t, n) {
            var r = i({
                selected: void 0,
                children: void 0
            }, t);
            null != e._wrapperState.selected && (r.selected = e._wrapperState.selected);
            var a = "";
            return o.forEach(t.children, function(e) {
                null != e && ("string" != typeof e && "number" != typeof e || (a += e))
            }),
            a && (r.children = a),
            r
        }
    };
    e.exports = s
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return ("" + e).replace(w, "//")
    }
    function r(e, t) {
        this.func = e,
        this.context = t,
        this.count = 0
    }
    function i(e, t, n) {
        var o = e.func
          , r = e.context;
        o.call(r, t, e.count++)
    }
    function a(e, t, n) {
        if (null == e)
            return e;
        var o = r.getPooled(t, n);
        v(e, i, o),
        r.release(o)
    }
    function s(e, t, n, o) {
        this.result = e,
        this.keyPrefix = t,
        this.func = n,
        this.context = o,
        this.count = 0
    }
    function l(e, t, n) {
        var r = e.result
          , i = e.keyPrefix
          , a = e.func
          , s = e.context
          , l = a.call(s, t, e.count++);
        Array.isArray(l) ? c(l, r, n, g.thatReturnsArgument) : null != l && (h.isValidElement(l) && (l = h.cloneAndReplaceKey(l, i + (l !== t ? o(l.key || "") + "/" : "") + n)),
        r.push(l))
    }
    function c(e, t, n, r, i) {
        var a = "";
        null != n && (a = o(n) + "/");
        var c = s.getPooled(t, a, r, i);
        v(e, l, c),
        s.release(c)
    }
    function u(e, t, n) {
        if (null == e)
            return e;
        var o = [];
        return c(e, o, null, t, n),
        o
    }
    function p(e, t, n) {
        return null
    }
    function d(e, t) {
        return v(e, p, null)
    }
    function m(e) {
        var t = [];
        return c(e, t, null, g.thatReturnsArgument),
        t
    }
    var f = n(66)
      , h = n(52)
      , g = n(25)
      , v = n(121)
      , b = f.twoArgumentPooler
      , y = f.fourArgumentPooler
      , w = /\/(?!\/)/g;
    r.prototype.destructor = function() {
        this.func = null,
        this.context = null,
        this.count = 0
    }
    ,
    f.addPoolingTo(r, b),
    s.prototype.destructor = function() {
        this.result = null,
        this.keyPrefix = null,
        this.func = null,
        this.context = null,
        this.count = 0
    }
    ,
    f.addPoolingTo(s, y);
    var _ = {
        forEach: a,
        map: u,
        mapIntoWithKeyPrefixInternal: c,
        count: d,
        toArray: m
    };
    e.exports = _
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return h[e]
    }
    function r(e, t) {
        return e && null != e.key ? a(e.key) : t.toString(36)
    }
    function i(e) {
        return ("" + e).replace(g, o)
    }
    function a(e) {
        return "$" + i(e)
    }
    function s(e, t, n, o) {
        var i = typeof e;
        if ("undefined" !== i && "boolean" !== i || (e = null),
        null === e || "string" === i || "number" === i || c.isValidElement(e))
            return n(o, e, "" === t ? m + r(e, 0) : t),
            1;
        var l, u, h = 0, g = "" === t ? m : t + f;
        if (Array.isArray(e))
            for (var v = 0; v < e.length; v++)
                l = e[v],
                u = g + r(l, v),
                h += s(l, u, n, o);
        else {
            var b = p(e);
            if (b) {
                var y, w = b.call(e);
                if (b !== e.entries)
                    for (var _ = 0; !(y = w.next()).done; )
                        l = y.value,
                        u = g + r(l, _++),
                        h += s(l, u, n, o);
                else
                    for (; !(y = w.next()).done; ) {
                        var E = y.value;
                        E && (l = E[1],
                        u = g + a(E[0]) + f + r(l, 0),
                        h += s(l, u, n, o))
                    }
            } else if ("object" === i) {
                String(e);
                d(!1)
            }
        }
        return h
    }
    function l(e, t, n) {
        return null == e ? 0 : s(e, "", t, n)
    }
    var c = (n(15),
    n(52))
      , u = n(55)
      , p = n(118)
      , d = n(23)
      , m = (n(35),
    u.SEPARATOR)
      , f = ":"
      , h = {
        "=": "=0",
        ".": "=1",
        ":": "=2"
    }
      , g = /[=.:]/g;
    e.exports = l
}
, function(e, t, n) {
    "use strict";
    function o() {
        if (this._rootNodeID && this._wrapperState.pendingUpdate) {
            this._wrapperState.pendingUpdate = !1;
            var e = this._currentElement.props
              , t = a.getValue(e);
            null != t && r(this, Boolean(e.multiple), t)
        }
    }
    function r(e, t, n) {
        var o, r, i = s.getNode(e._rootNodeID).options;
        if (t) {
            for (o = {},
            r = 0; r < n.length; r++)
                o["" + n[r]] = !0;
            for (r = 0; r < i.length; r++) {
                var a = o.hasOwnProperty(i[r].value);
                i[r].selected !== a && (i[r].selected = a)
            }
        } else {
            for (o = "" + n,
            r = 0; r < i.length; r++)
                if (i[r].value === o)
                    return void (i[r].selected = !0);
            i.length && (i[0].selected = !0)
        }
    }
    function i(e) {
        var t = this._currentElement.props
          , n = a.executeOnChange(t, e);
        return this._wrapperState.pendingUpdate = !0,
        l.asap(o, this),
        n
    }
    var a = n(116)
      , s = n(38)
      , l = n(64)
      , c = n(49)
      , u = (n(35),
    "__ReactDOMSelect_value$" + Math.random().toString(36).slice(2))
      , p = {
        valueContextKey: u,
        getNativeProps: function(e, t, n) {
            return c({}, t, {
                onChange: e._wrapperState.onChange,
                value: void 0
            })
        },
        mountWrapper: function(e, t) {
            var n = a.getValue(t);
            e._wrapperState = {
                pendingUpdate: !1,
                initialValue: null != n ? n : t.defaultValue,
                onChange: i.bind(e),
                wasMultiple: Boolean(t.multiple)
            }
        },
        processChildContext: function(e, t, n) {
            var o = c({}, n);
            return o[u] = e._wrapperState.initialValue,
            o
        },
        postUpdateWrapper: function(e) {
            var t = e._currentElement.props;
            e._wrapperState.initialValue = void 0;
            var n = e._wrapperState.wasMultiple;
            e._wrapperState.wasMultiple = Boolean(t.multiple);
            var o = a.getValue(t);
            null != o ? (e._wrapperState.pendingUpdate = !1,
            r(e, Boolean(t.multiple), o)) : n !== Boolean(t.multiple) && (null != t.defaultValue ? r(e, Boolean(t.multiple), t.defaultValue) : r(e, Boolean(t.multiple), t.multiple ? [] : ""))
        }
    };
    e.exports = p
}
, function(e, t, n) {
    "use strict";
    function o() {
        this._rootNodeID && u.updateWrapper(this)
    }
    function r(e) {
        var t = this._currentElement.props
          , n = i.executeOnChange(t, e);
        return s.asap(o, this),
        n
    }
    var i = n(116)
      , a = n(37)
      , s = n(64)
      , l = n(49)
      , c = n(23)
      , u = (n(35),
    {
        getNativeProps: function(e, t, n) {
            null != t.dangerouslySetInnerHTML ? c(!1) : void 0;
            var o = l({}, t, {
                defaultValue: void 0,
                value: void 0,
                children: e._wrapperState.initialValue,
                onChange: e._wrapperState.onChange
            });
            return o
        },
        mountWrapper: function(e, t) {
            var n = t.defaultValue
              , o = t.children;
            null != o && (null != n ? c(!1) : void 0,
            Array.isArray(o) && (o.length <= 1 ? void 0 : c(!1),
            o = o[0]),
            n = "" + o),
            null == n && (n = "");
            var a = i.getValue(t);
            e._wrapperState = {
                initialValue: "" + (null != a ? a : n),
                onChange: r.bind(e)
            }
        },
        updateWrapper: function(e) {
            var t = e._currentElement.props
              , n = i.getValue(t);
            null != n && a.updatePropertyByID(e._rootNodeID, "value", "" + n);
        }
    });
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n) {
        g.push({
            parentID: e,
            parentNode: null,
            type: p.INSERT_MARKUP,
            markupIndex: v.push(t) - 1,
            content: null,
            fromIndex: null,
            toIndex: n
        })
    }
    function r(e, t, n) {
        g.push({
            parentID: e,
            parentNode: null,
            type: p.MOVE_EXISTING,
            markupIndex: null,
            content: null,
            fromIndex: t,
            toIndex: n
        })
    }
    function i(e, t) {
        g.push({
            parentID: e,
            parentNode: null,
            type: p.REMOVE_NODE,
            markupIndex: null,
            content: null,
            fromIndex: t,
            toIndex: null
        })
    }
    function a(e, t) {
        g.push({
            parentID: e,
            parentNode: null,
            type: p.SET_MARKUP,
            markupIndex: null,
            content: t,
            fromIndex: null,
            toIndex: null
        })
    }
    function s(e, t) {
        g.push({
            parentID: e,
            parentNode: null,
            type: p.TEXT_CONTENT,
            markupIndex: null,
            content: t,
            fromIndex: null,
            toIndex: null
        })
    }
    function l() {
        g.length && (u.processChildrenUpdates(g, v),
        c())
    }
    function c() {
        g.length = 0,
        v.length = 0
    }
    var u = n(74)
      , p = n(26)
      , d = (n(15),
    n(60))
      , m = n(125)
      , f = n(126)
      , h = 0
      , g = []
      , v = []
      , b = {
        Mixin: {
            _reconcilerInstantiateChildren: function(e, t, n) {
                return m.instantiateChildren(e, t, n)
            },
            _reconcilerUpdateChildren: function(e, t, n, o) {
                var r;
                return r = f(t),
                m.updateChildren(e, r, n, o)
            },
            mountChildren: function(e, t, n) {
                var o = this._reconcilerInstantiateChildren(e, t, n);
                this._renderedChildren = o;
                var r = []
                  , i = 0;
                for (var a in o)
                    if (o.hasOwnProperty(a)) {
                        var s = o[a]
                          , l = this._rootNodeID + a
                          , c = d.mountComponent(s, l, t, n);
                        s._mountIndex = i++,
                        r.push(c)
                    }
                return r
            },
            updateTextContent: function(e) {
                h++;
                var t = !0;
                try {
                    var n = this._renderedChildren;
                    m.unmountChildren(n);
                    for (var o in n)
                        n.hasOwnProperty(o) && this._unmountChild(n[o]);
                    this.setTextContent(e),
                    t = !1
                } finally {
                    h--,
                    h || (t ? c() : l())
                }
            },
            updateMarkup: function(e) {
                h++;
                var t = !0;
                try {
                    var n = this._renderedChildren;
                    m.unmountChildren(n);
                    for (var o in n)
                        n.hasOwnProperty(o) && this._unmountChildByName(n[o], o);
                    this.setMarkup(e),
                    t = !1
                } finally {
                    h--,
                    h || (t ? c() : l())
                }
            },
            updateChildren: function(e, t, n) {
                h++;
                var o = !0;
                try {
                    this._updateChildren(e, t, n),
                    o = !1
                } finally {
                    h--,
                    h || (o ? c() : l())
                }
            },
            _updateChildren: function(e, t, n) {
                var o = this._renderedChildren
                  , r = this._reconcilerUpdateChildren(o, e, t, n);
                if (this._renderedChildren = r,
                r || o) {
                    var i, a = 0, s = 0;
                    for (i in r)
                        if (r.hasOwnProperty(i)) {
                            var l = o && o[i]
                              , c = r[i];
                            l === c ? (this.moveChild(l, s, a),
                            a = Math.max(l._mountIndex, a),
                            l._mountIndex = s) : (l && (a = Math.max(l._mountIndex, a),
                            this._unmountChild(l)),
                            this._mountChildByNameAtIndex(c, i, s, t, n)),
                            s++
                        }
                    for (i in o)
                        !o.hasOwnProperty(i) || r && r.hasOwnProperty(i) || this._unmountChild(o[i])
                }
            },
            unmountChildren: function() {
                var e = this._renderedChildren;
                m.unmountChildren(e),
                this._renderedChildren = null
            },
            moveChild: function(e, t, n) {
                e._mountIndex < n && r(this._rootNodeID, e._mountIndex, t)
            },
            createChild: function(e, t) {
                o(this._rootNodeID, t, e._mountIndex)
            },
            removeChild: function(e) {
                i(this._rootNodeID, e._mountIndex)
            },
            setTextContent: function(e) {
                s(this._rootNodeID, e)
            },
            setMarkup: function(e) {
                a(this._rootNodeID, e)
            },
            _mountChildByNameAtIndex: function(e, t, n, o, r) {
                var i = this._rootNodeID + t
                  , a = d.mountComponent(e, i, o, r);
                e._mountIndex = n,
                this.createChild(e, a)
            },
            _unmountChild: function(e) {
                this.removeChild(e),
                e._mountIndex = null
            }
        }
    };
    e.exports = b
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n) {
        var o = void 0 === e[n];
        null != t && o && (e[n] = i(t, null))
    }
    var r = n(60)
      , i = n(72)
      , a = n(77)
      , s = n(121)
      , l = (n(35),
    {
        instantiateChildren: function(e, t, n) {
            if (null == e)
                return null;
            var r = {};
            return s(e, o, r),
            r
        },
        updateChildren: function(e, t, n, o) {
            if (!t && !e)
                return null;
            var s;
            for (s in t)
                if (t.hasOwnProperty(s)) {
                    var l = e && e[s]
                      , c = l && l._currentElement
                      , u = t[s];
                    if (null != l && a(c, u))
                        r.receiveComponent(l, u, n, o),
                        t[s] = l;
                    else {
                        l && r.unmountComponent(l, s);
                        var p = i(u, null);
                        t[s] = p
                    }
                }
            for (s in e)
                !e.hasOwnProperty(s) || t && t.hasOwnProperty(s) || r.unmountComponent(e[s]);
            return t
        },
        unmountChildren: function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var n = e[t];
                    r.unmountComponent(n)
                }
        }
    });
    e.exports = l
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n) {
        var o = e
          , r = void 0 === o[n];
        r && null != t && (o[n] = t)
    }
    function r(e) {
        if (null == e)
            return e;
        var t = {};
        return i(e, o, t),
        t
    }
    var i = n(121);
    n(35);
    e.exports = r
}
, function(e, t) {
    "use strict";
    function n(e, t) {
        if (e === t)
            return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (var i = o.bind(t), a = 0; a < n.length; a++)
            if (!i(n[a]) || e[n[a]] !== t[n[a]])
                return !1;
        return !0
    }
    var o = Object.prototype.hasOwnProperty;
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        var t = d.getID(e)
          , n = p.getReactRootIDFromNodeID(t)
          , o = d.findReactContainerForID(n)
          , r = d.getFirstReactDOM(o);
        return r
    }
    function r(e, t) {
        this.topLevelType = e,
        this.nativeEvent = t,
        this.ancestors = []
    }
    function i(e) {
        a(e)
    }
    function a(e) {
        for (var t = d.getFirstReactDOM(h(e.nativeEvent)) || window, n = t; n; )
            e.ancestors.push(n),
            n = o(n);
        for (var r = 0; r < e.ancestors.length; r++) {
            t = e.ancestors[r];
            var i = d.getID(t) || "";
            v._handleTopLevel(e.topLevelType, t, i, e.nativeEvent, h(e.nativeEvent))
        }
    }
    function s(e) {
        var t = g(window);
        e(t)
    }
    var l = n(129)
      , c = n(19)
      , u = n(66)
      , p = n(55)
      , d = n(38)
      , m = n(64)
      , f = n(49)
      , h = n(91)
      , g = n(130);
    f(r.prototype, {
        destructor: function() {
            this.topLevelType = null,
            this.nativeEvent = null,
            this.ancestors.length = 0
        }
    }),
    u.addPoolingTo(r, u.twoArgumentPooler);
    var v = {
        _enabled: !0,
        _handleTopLevel: null,
        WINDOW_HANDLE: c.canUseDOM ? window : null,
        setHandleTopLevel: function(e) {
            v._handleTopLevel = e
        },
        setEnabled: function(e) {
            v._enabled = !!e
        },
        isEnabled: function() {
            return v._enabled
        },
        trapBubbledEvent: function(e, t, n) {
            var o = n;
            return o ? l.listen(o, t, v.dispatchEvent.bind(null, e)) : null
        },
        trapCapturedEvent: function(e, t, n) {
            var o = n;
            return o ? l.capture(o, t, v.dispatchEvent.bind(null, e)) : null
        },
        monitorScrollValue: function(e) {
            var t = s.bind(null, e);
            l.listen(window, "scroll", t)
        },
        dispatchEvent: function(e, t) {
            if (v._enabled) {
                var n = r.getPooled(e, t);
                try {
                    m.batchedUpdates(i, n)
                } finally {
                    r.release(n)
                }
            }
        }
    };
    e.exports = v
}
, function(e, t, n) {
    "use strict";
    var o = n(25)
      , r = {
        listen: function(e, t, n) {
            return e.addEventListener ? (e.addEventListener(t, n, !1),
            {
                remove: function() {
                    e.removeEventListener(t, n, !1)
                }
            }) : e.attachEvent ? (e.attachEvent("on" + t, n),
            {
                remove: function() {
                    e.detachEvent("on" + t, n)
                }
            }) : void 0
        },
        capture: function(e, t, n) {
            return e.addEventListener ? (e.addEventListener(t, n, !0),
            {
                remove: function() {
                    e.removeEventListener(t, n, !0)
                }
            }) : {
                remove: o
            }
        },
        registerDefault: function() {}
    };
    e.exports = r
}
, function(e, t) {
    "use strict";
    function n(e) {
        return e === window ? {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
        } : {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    var o = n(33)
      , r = n(41)
      , i = n(74)
      , a = n(132)
      , s = n(78)
      , l = n(39)
      , c = n(79)
      , u = n(28)
      , p = n(56)
      , d = n(64)
      , m = {
        Component: i.injection,
        Class: a.injection,
        DOMProperty: o.injection,
        EmptyComponent: s.injection,
        EventPluginHub: r.injection,
        EventEmitter: l.injection,
        NativeComponent: c.injection,
        Perf: u.injection,
        RootIndex: p.injection,
        Updates: d.injection
    };
    e.exports = m
}
, function(e, t, n) {
    "use strict";
    function o(e, t) {
        var n = E.hasOwnProperty(t) ? E[t] : null;
        C.hasOwnProperty(t) && (n !== w.OVERRIDE_BASE ? g(!1) : void 0),
        e.hasOwnProperty(t) && (n !== w.DEFINE_MANY && n !== w.DEFINE_MANY_MERGED ? g(!1) : void 0)
    }
    function r(e, t) {
        if (t) {
            "function" == typeof t ? g(!1) : void 0,
            d.isValidElement(t) ? g(!1) : void 0;
            var n = e.prototype;
            t.hasOwnProperty(y) && D.mixins(e, t.mixins);
            for (var r in t)
                if (t.hasOwnProperty(r) && r !== y) {
                    var i = t[r];
                    if (o(n, r),
                    D.hasOwnProperty(r))
                        D[r](e, i);
                    else {
                        var a = E.hasOwnProperty(r)
                          , c = n.hasOwnProperty(r)
                          , u = "function" == typeof i
                          , p = u && !a && !c && t.autobind !== !1;
                        if (p)
                            n.__reactAutoBindMap || (n.__reactAutoBindMap = {}),
                            n.__reactAutoBindMap[r] = i,
                            n[r] = i;
                        else if (c) {
                            var m = E[r];
                            !a || m !== w.DEFINE_MANY_MERGED && m !== w.DEFINE_MANY ? g(!1) : void 0,
                            m === w.DEFINE_MANY_MERGED ? n[r] = s(n[r], i) : m === w.DEFINE_MANY && (n[r] = l(n[r], i))
                        } else
                            n[r] = i
                    }
                }
        }
    }
    function i(e, t) {
        if (t)
            for (var n in t) {
                var o = t[n];
                if (t.hasOwnProperty(n)) {
                    var r = n in D;
                    r ? g(!1) : void 0;
                    var i = n in e;
                    i ? g(!1) : void 0,
                    e[n] = o
                }
            }
    }
    function a(e, t) {
        e && t && "object" == typeof e && "object" == typeof t ? void 0 : g(!1);
        for (var n in t)
            t.hasOwnProperty(n) && (void 0 !== e[n] ? g(!1) : void 0,
            e[n] = t[n]);
        return e
    }
    function s(e, t) {
        return function() {
            var n = e.apply(this, arguments)
              , o = t.apply(this, arguments);
            if (null == n)
                return o;
            if (null == o)
                return n;
            var r = {};
            return a(r, n),
            a(r, o),
            r
        }
    }
    function l(e, t) {
        return function() {
            e.apply(this, arguments),
            t.apply(this, arguments)
        }
    }
    function c(e, t) {
        var n = t.bind(e);
        return n
    }
    function u(e) {
        for (var t in e.__reactAutoBindMap)
            if (e.__reactAutoBindMap.hasOwnProperty(t)) {
                var n = e.__reactAutoBindMap[t];
                e[t] = c(e, n)
            }
    }
    var p = n(133)
      , d = n(52)
      , m = (n(75),
    n(76),
    n(134))
      , f = n(49)
      , h = n(68)
      , g = n(23)
      , v = n(27)
      , b = n(89)
      , y = (n(35),
    b({
        mixins: null
    }))
      , w = v({
        DEFINE_ONCE: null,
        DEFINE_MANY: null,
        OVERRIDE_BASE: null,
        DEFINE_MANY_MERGED: null
    })
      , _ = []
      , E = {
        mixins: w.DEFINE_MANY,
        statics: w.DEFINE_MANY,
        propTypes: w.DEFINE_MANY,
        contextTypes: w.DEFINE_MANY,
        childContextTypes: w.DEFINE_MANY,
        getDefaultProps: w.DEFINE_MANY_MERGED,
        getInitialState: w.DEFINE_MANY_MERGED,
        getChildContext: w.DEFINE_MANY_MERGED,
        render: w.DEFINE_ONCE,
        componentWillMount: w.DEFINE_MANY,
        componentDidMount: w.DEFINE_MANY,
        componentWillReceiveProps: w.DEFINE_MANY,
        shouldComponentUpdate: w.DEFINE_ONCE,
        componentWillUpdate: w.DEFINE_MANY,
        componentDidUpdate: w.DEFINE_MANY,
        componentWillUnmount: w.DEFINE_MANY,
        updateComponent: w.OVERRIDE_BASE
    }
      , D = {
        displayName: function(e, t) {
            e.displayName = t
        },
        mixins: function(e, t) {
            if (t)
                for (var n = 0; n < t.length; n++)
                    r(e, t[n])
        },
        childContextTypes: function(e, t) {
            e.childContextTypes = f({}, e.childContextTypes, t)
        },
        contextTypes: function(e, t) {
            e.contextTypes = f({}, e.contextTypes, t)
        },
        getDefaultProps: function(e, t) {
            e.getDefaultProps ? e.getDefaultProps = s(e.getDefaultProps, t) : e.getDefaultProps = t
        },
        propTypes: function(e, t) {
            e.propTypes = f({}, e.propTypes, t)
        },
        statics: function(e, t) {
            i(e, t)
        },
        autobind: function() {}
    }
      , C = {
        replaceState: function(e, t) {
            this.updater.enqueueReplaceState(this, e),
            t && this.updater.enqueueCallback(this, t)
        },
        isMounted: function() {
            return this.updater.isMounted(this)
        },
        setProps: function(e, t) {
            this.updater.enqueueSetProps(this, e),
            t && this.updater.enqueueCallback(this, t)
        },
        replaceProps: function(e, t) {
            this.updater.enqueueReplaceProps(this, e),
            t && this.updater.enqueueCallback(this, t)
        }
    }
      , x = function() {};
    f(x.prototype, p.prototype, C);
    var N = {
        createClass: function(e) {
            var t = function(e, t, n) {
                this.__reactAutoBindMap && u(this),
                this.props = e,
                this.context = t,
                this.refs = h,
                this.updater = n || m,
                this.state = null;
                var o = this.getInitialState ? this.getInitialState() : null;
                "object" != typeof o || Array.isArray(o) ? g(!1) : void 0,
                this.state = o
            };
            t.prototype = new x,
            t.prototype.constructor = t,
            _.forEach(r.bind(null, t)),
            r(t, e),
            t.getDefaultProps && (t.defaultProps = t.getDefaultProps()),
            t.prototype.render ? void 0 : g(!1);
            for (var n in E)
                t.prototype[n] || (t.prototype[n] = null);
            return t
        },
        injection: {
            injectMixin: function(e) {
                _.push(e)
            }
        }
    };
    e.exports = N
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = i,
        this.updater = n || r
    }
    var r = n(134)
      , i = (n(53),
    n(68))
      , a = n(23);
    n(35);
    o.prototype.isReactComponent = {},
    o.prototype.setState = function(e, t) {
        "object" != typeof e && "function" != typeof e && null != e ? a(!1) : void 0,
        this.updater.enqueueSetState(this, e),
        t && this.updater.enqueueCallback(this, t)
    }
    ,
    o.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this),
        e && this.updater.enqueueCallback(this, e)
    }
    ;
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t) {}
    var r = (n(35),
    {
        isMounted: function(e) {
            return !1
        },
        enqueueCallback: function(e, t) {},
        enqueueForceUpdate: function(e) {
            o(e, "forceUpdate")
        },
        enqueueReplaceState: function(e, t) {
            o(e, "replaceState")
        },
        enqueueSetState: function(e, t) {
            o(e, "setState")
        },
        enqueueSetProps: function(e, t) {
            o(e, "setProps")
        },
        enqueueReplaceProps: function(e, t) {
            o(e, "replaceProps")
        }
    });
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        this.reinitializeTransaction(),
        this.renderToStaticMarkup = !1,
        this.reactMountReady = r.getPooled(null),
        this.useCreateElement = !e && s.useCreateElement
    }
    var r = n(65)
      , i = n(66)
      , a = n(39)
      , s = n(51)
      , l = n(136)
      , c = n(67)
      , u = n(49)
      , p = {
        initialize: l.getSelectionInformation,
        close: l.restoreSelection
    }
      , d = {
        initialize: function() {
            var e = a.isEnabled();
            return a.setEnabled(!1),
            e
        },
        close: function(e) {
            a.setEnabled(e)
        }
    }
      , m = {
        initialize: function() {
            this.reactMountReady.reset()
        },
        close: function() {
            this.reactMountReady.notifyAll()
        }
    }
      , f = [p, d, m]
      , h = {
        getTransactionWrappers: function() {
            return f
        },
        getReactMountReady: function() {
            return this.reactMountReady
        },
        destructor: function() {
            r.release(this.reactMountReady),
            this.reactMountReady = null
        }
    };
    u(o.prototype, c.Mixin, h),
    i.addPoolingTo(o),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return i(document.documentElement, e)
    }
    var r = n(137)
      , i = n(69)
      , a = n(105)
      , s = n(139)
      , l = {
        hasSelectionCapabilities: function(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
        },
        getSelectionInformation: function() {
            var e = s();
            return {
                focusedElem: e,
                selectionRange: l.hasSelectionCapabilities(e) ? l.getSelection(e) : null
            }
        },
        restoreSelection: function(e) {
            var t = s()
              , n = e.focusedElem
              , r = e.selectionRange;
            t !== n && o(n) && (l.hasSelectionCapabilities(n) && l.setSelection(n, r),
            a(n))
        },
        getSelection: function(e) {
            var t;
            if ("selectionStart"in e)
                t = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                var n = document.selection.createRange();
                n.parentElement() === e && (t = {
                    start: -n.moveStart("character", -e.value.length),
                    end: -n.moveEnd("character", -e.value.length)
                })
            } else
                t = r.getOffsets(e);
            return t || {
                start: 0,
                end: 0
            }
        },
        setSelection: function(e, t) {
            var n = t.start
              , o = t.end;
            if ("undefined" == typeof o && (o = n),
            "selectionStart"in e)
                e.selectionStart = n,
                e.selectionEnd = Math.min(o, e.value.length);
            else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                var i = e.createTextRange();
                i.collapse(!0),
                i.moveStart("character", n),
                i.moveEnd("character", o - n),
                i.select()
            } else
                r.setOffsets(e, t)
        }
    };
    e.exports = l
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        return e === n && t === o
    }
    function r(e) {
        var t = document.selection
          , n = t.createRange()
          , o = n.text.length
          , r = n.duplicate();
        r.moveToElementText(e),
        r.setEndPoint("EndToStart", n);
        var i = r.text.length
          , a = i + o;
        return {
            start: i,
            end: a
        }
    }
    function i(e) {
        var t = window.getSelection && window.getSelection();
        if (!t || 0 === t.rangeCount)
            return null;
        var n = t.anchorNode
          , r = t.anchorOffset
          , i = t.focusNode
          , a = t.focusOffset
          , s = t.getRangeAt(0);
        try {
            s.startContainer.nodeType,
            s.endContainer.nodeType
        } catch (e) {
            return null
        }
        var l = o(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset)
          , c = l ? 0 : s.toString().length
          , u = s.cloneRange();
        u.selectNodeContents(e),
        u.setEnd(s.startContainer, s.startOffset);
        var p = o(u.startContainer, u.startOffset, u.endContainer, u.endOffset)
          , d = p ? 0 : u.toString().length
          , m = d + c
          , f = document.createRange();
        f.setStart(n, r),
        f.setEnd(i, a);
        var h = f.collapsed;
        return {
            start: h ? m : d,
            end: h ? d : m
        }
    }
    function a(e, t) {
        var n, o, r = document.selection.createRange().duplicate();
        "undefined" == typeof t.end ? (n = t.start,
        o = n) : t.start > t.end ? (n = t.end,
        o = t.start) : (n = t.start,
        o = t.end),
        r.moveToElementText(e),
        r.moveStart("character", n),
        r.setEndPoint("EndToStart", r),
        r.moveEnd("character", o - n),
        r.select()
    }
    function s(e, t) {
        if (window.getSelection) {
            var n = window.getSelection()
              , o = e[u()].length
              , r = Math.min(t.start, o)
              , i = "undefined" == typeof t.end ? r : Math.min(t.end, o);
            if (!n.extend && r > i) {
                var a = i;
                i = r,
                r = a
            }
            var s = c(e, r)
              , l = c(e, i);
            if (s && l) {
                var p = document.createRange();
                p.setStart(s.node, s.offset),
                n.removeAllRanges(),
                r > i ? (n.addRange(p),
                n.extend(l.node, l.offset)) : (p.setEnd(l.node, l.offset),
                n.addRange(p))
            }
        }
    }
    var l = n(19)
      , c = n(138)
      , u = n(85)
      , p = l.canUseDOM && "selection"in document && !("getSelection"in window)
      , d = {
        getOffsets: p ? r : i,
        setOffsets: p ? a : s
    };
    e.exports = d
}
, function(e, t) {
    "use strict";
    function n(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function o(e) {
        for (; e; ) {
            if (e.nextSibling)
                return e.nextSibling;
            e = e.parentNode
        }
    }
    function r(e, t) {
        for (var r = n(e), i = 0, a = 0; r; ) {
            if (3 === r.nodeType) {
                if (a = i + r.textContent.length,
                i <= t && a >= t)
                    return {
                        node: r,
                        offset: t - i
                    };
                i = a
            }
            r = n(o(r))
        }
    }
    e.exports = r
}
, function(e, t) {
    "use strict";
    function n() {
        if ("undefined" == typeof document)
            return null;
        try {
            return document.activeElement || document.body
        } catch (e) {
            return document.body
        }
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        if ("selectionStart"in e && l.hasSelectionCapabilities(e))
            return {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        if (window.getSelection) {
            var t = window.getSelection();
            return {
                anchorNode: t.anchorNode,
                anchorOffset: t.anchorOffset,
                focusNode: t.focusNode,
                focusOffset: t.focusOffset
            }
        }
        if (document.selection) {
            var n = document.selection.createRange();
            return {
                parentElement: n.parentElement(),
                text: n.text,
                top: n.boundingTop,
                left: n.boundingLeft
            }
        }
    }
    function r(e, t) {
        if (w || null == v || v !== u())
            return null;
        var n = o(v);
        if (!y || !m(y, n)) {
            y = n;
            var r = c.getPooled(g.select, b, e, t);
            return r.type = "select",
            r.target = v,
            a.accumulateTwoPhaseDispatches(r),
            r
        }
        return null
    }
    var i = n(40)
      , a = n(83)
      , s = n(19)
      , l = n(136)
      , c = n(87)
      , u = n(139)
      , p = n(92)
      , d = n(89)
      , m = n(127)
      , f = i.topLevelTypes
      , h = s.canUseDOM && "documentMode"in document && document.documentMode <= 11
      , g = {
        select: {
            phasedRegistrationNames: {
                bubbled: d({
                    onSelect: null
                }),
                captured: d({
                    onSelectCapture: null
                })
            },
            dependencies: [f.topBlur, f.topContextMenu, f.topFocus, f.topKeyDown, f.topMouseDown, f.topMouseUp, f.topSelectionChange]
        }
    }
      , v = null
      , b = null
      , y = null
      , w = !1
      , _ = !1
      , E = d({
        onSelect: null
    })
      , D = {
        eventTypes: g,
        extractEvents: function(e, t, n, o, i) {
            if (!_)
                return null;
            switch (e) {
            case f.topFocus:
                (p(t) || "true" === t.contentEditable) && (v = t,
                b = n,
                y = null);
                break;
            case f.topBlur:
                v = null,
                b = null,
                y = null;
                break;
            case f.topMouseDown:
                w = !0;
                break;
            case f.topContextMenu:
            case f.topMouseUp:
                return w = !1,
                r(o, i);
            case f.topSelectionChange:
                if (h)
                    break;
            case f.topKeyDown:
            case f.topKeyUp:
                return r(o, i)
            }
            return null
        },
        didPutListener: function(e, t, n) {
            t === E && (_ = !0)
        }
    };
    e.exports = D
}
, function(e, t) {
    "use strict";
    var n = Math.pow(2, 53)
      , o = {
        createReactRootIndex: function() {
            return Math.ceil(Math.random() * n)
        }
    };
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var o = n(40)
      , r = n(129)
      , i = n(83)
      , a = n(38)
      , s = n(143)
      , l = n(87)
      , c = n(144)
      , u = n(145)
      , p = n(96)
      , d = n(148)
      , m = n(149)
      , f = n(97)
      , h = n(150)
      , g = n(25)
      , v = n(146)
      , b = n(23)
      , y = n(89)
      , w = o.topLevelTypes
      , _ = {
        abort: {
            phasedRegistrationNames: {
                bubbled: y({
                    onAbort: !0
                }),
                captured: y({
                    onAbortCapture: !0
                })
            }
        },
        blur: {
            phasedRegistrationNames: {
                bubbled: y({
                    onBlur: !0
                }),
                captured: y({
                    onBlurCapture: !0
                })
            }
        },
        canPlay: {
            phasedRegistrationNames: {
                bubbled: y({
                    onCanPlay: !0
                }),
                captured: y({
                    onCanPlayCapture: !0
                })
            }
        },
        canPlayThrough: {
            phasedRegistrationNames: {
                bubbled: y({
                    onCanPlayThrough: !0
                }),
                captured: y({
                    onCanPlayThroughCapture: !0
                })
            }
        },
        click: {
            phasedRegistrationNames: {
                bubbled: y({
                    onClick: !0
                }),
                captured: y({
                    onClickCapture: !0
                })
            }
        },
        contextMenu: {
            phasedRegistrationNames: {
                bubbled: y({
                    onContextMenu: !0
                }),
                captured: y({
                    onContextMenuCapture: !0
                })
            }
        },
        copy: {
            phasedRegistrationNames: {
                bubbled: y({
                    onCopy: !0
                }),
                captured: y({
                    onCopyCapture: !0
                })
            }
        },
        cut: {
            phasedRegistrationNames: {
                bubbled: y({
                    onCut: !0
                }),
                captured: y({
                    onCutCapture: !0
                })
            }
        },
        doubleClick: {
            phasedRegistrationNames: {
                bubbled: y({
                    onDoubleClick: !0
                }),
                captured: y({
                    onDoubleClickCapture: !0
                })
            }
        },
        drag: {
            phasedRegistrationNames: {
                bubbled: y({
                    onDrag: !0
                }),
                captured: y({
                    onDragCapture: !0
                })
            }
        },
        dragEnd: {
            phasedRegistrationNames: {
                bubbled: y({
                    onDragEnd: !0
                }),
                captured: y({
                    onDragEndCapture: !0
                })
            }
        },
        dragEnter: {
            phasedRegistrationNames: {
                bubbled: y({
                    onDragEnter: !0
                }),
                captured: y({
                    onDragEnterCapture: !0
                })
            }
        },
        dragExit: {
            phasedRegistrationNames: {
                bubbled: y({
                    onDragExit: !0
                }),
                captured: y({
                    onDragExitCapture: !0
                })
            }
        },
        dragLeave: {
            phasedRegistrationNames: {
                bubbled: y({
                    onDragLeave: !0
                }),
                captured: y({
                    onDragLeaveCapture: !0
                })
            }
        },
        dragOver: {
            phasedRegistrationNames: {
                bubbled: y({
                    onDragOver: !0
                }),
                captured: y({
                    onDragOverCapture: !0
                })
            }
        },
        dragStart: {
            phasedRegistrationNames: {
                bubbled: y({
                    onDragStart: !0
                }),
                captured: y({
                    onDragStartCapture: !0
                })
            }
        },
        drop: {
            phasedRegistrationNames: {
                bubbled: y({
                    onDrop: !0
                }),
                captured: y({
                    onDropCapture: !0
                })
            }
        },
        durationChange: {
            phasedRegistrationNames: {
                bubbled: y({
                    onDurationChange: !0
                }),
                captured: y({
                    onDurationChangeCapture: !0
                })
            }
        },
        emptied: {
            phasedRegistrationNames: {
                bubbled: y({
                    onEmptied: !0
                }),
                captured: y({
                    onEmptiedCapture: !0
                })
            }
        },
        encrypted: {
            phasedRegistrationNames: {
                bubbled: y({
                    onEncrypted: !0
                }),
                captured: y({
                    onEncryptedCapture: !0
                })
            }
        },
        ended: {
            phasedRegistrationNames: {
                bubbled: y({
                    onEnded: !0
                }),
                captured: y({
                    onEndedCapture: !0
                })
            }
        },
        error: {
            phasedRegistrationNames: {
                bubbled: y({
                    onError: !0
                }),
                captured: y({
                    onErrorCapture: !0
                })
            }
        },
        focus: {
            phasedRegistrationNames: {
                bubbled: y({
                    onFocus: !0
                }),
                captured: y({
                    onFocusCapture: !0
                })
            }
        },
        input: {
            phasedRegistrationNames: {
                bubbled: y({
                    onInput: !0
                }),
                captured: y({
                    onInputCapture: !0
                })
            }
        },
        keyDown: {
            phasedRegistrationNames: {
                bubbled: y({
                    onKeyDown: !0
                }),
                captured: y({
                    onKeyDownCapture: !0
                })
            }
        },
        keyPress: {
            phasedRegistrationNames: {
                bubbled: y({
                    onKeyPress: !0
                }),
                captured: y({
                    onKeyPressCapture: !0
                })
            }
        },
        keyUp: {
            phasedRegistrationNames: {
                bubbled: y({
                    onKeyUp: !0
                }),
                captured: y({
                    onKeyUpCapture: !0
                })
            }
        },
        load: {
            phasedRegistrationNames: {
                bubbled: y({
                    onLoad: !0
                }),
                captured: y({
                    onLoadCapture: !0
                })
            }
        },
        loadedData: {
            phasedRegistrationNames: {
                bubbled: y({
                    onLoadedData: !0
                }),
                captured: y({
                    onLoadedDataCapture: !0
                })
            }
        },
        loadedMetadata: {
            phasedRegistrationNames: {
                bubbled: y({
                    onLoadedMetadata: !0
                }),
                captured: y({
                    onLoadedMetadataCapture: !0
                })
            }
        },
        loadStart: {
            phasedRegistrationNames: {
                bubbled: y({
                    onLoadStart: !0
                }),
                captured: y({
                    onLoadStartCapture: !0
                })
            }
        },
        mouseDown: {
            phasedRegistrationNames: {
                bubbled: y({
                    onMouseDown: !0
                }),
                captured: y({
                    onMouseDownCapture: !0
                })
            }
        },
        mouseMove: {
            phasedRegistrationNames: {
                bubbled: y({
                    onMouseMove: !0
                }),
                captured: y({
                    onMouseMoveCapture: !0
                })
            }
        },
        mouseOut: {
            phasedRegistrationNames: {
                bubbled: y({
                    onMouseOut: !0
                }),
                captured: y({
                    onMouseOutCapture: !0
                })
            }
        },
        mouseOver: {
            phasedRegistrationNames: {
                bubbled: y({
                    onMouseOver: !0
                }),
                captured: y({
                    onMouseOverCapture: !0
                })
            }
        },
        mouseUp: {
            phasedRegistrationNames: {
                bubbled: y({
                    onMouseUp: !0
                }),
                captured: y({
                    onMouseUpCapture: !0
                })
            }
        },
        paste: {
            phasedRegistrationNames: {
                bubbled: y({
                    onPaste: !0
                }),
                captured: y({
                    onPasteCapture: !0
                })
            }
        },
        pause: {
            phasedRegistrationNames: {
                bubbled: y({
                    onPause: !0
                }),
                captured: y({
                    onPauseCapture: !0
                })
            }
        },
        play: {
            phasedRegistrationNames: {
                bubbled: y({
                    onPlay: !0
                }),
                captured: y({
                    onPlayCapture: !0
                })
            }
        },
        playing: {
            phasedRegistrationNames: {
                bubbled: y({
                    onPlaying: !0
                }),
                captured: y({
                    onPlayingCapture: !0
                })
            }
        },
        progress: {
            phasedRegistrationNames: {
                bubbled: y({
                    onProgress: !0
                }),
                captured: y({
                    onProgressCapture: !0
                })
            }
        },
        rateChange: {
            phasedRegistrationNames: {
                bubbled: y({
                    onRateChange: !0
                }),
                captured: y({
                    onRateChangeCapture: !0
                })
            }
        },
        reset: {
            phasedRegistrationNames: {
                bubbled: y({
                    onReset: !0
                }),
                captured: y({
                    onResetCapture: !0
                })
            }
        },
        scroll: {
            phasedRegistrationNames: {
                bubbled: y({
                    onScroll: !0
                }),
                captured: y({
                    onScrollCapture: !0
                })
            }
        },
        seeked: {
            phasedRegistrationNames: {
                bubbled: y({
                    onSeeked: !0
                }),
                captured: y({
                    onSeekedCapture: !0
                })
            }
        },
        seeking: {
            phasedRegistrationNames: {
                bubbled: y({
                    onSeeking: !0
                }),
                captured: y({
                    onSeekingCapture: !0
                })
            }
        },
        stalled: {
            phasedRegistrationNames: {
                bubbled: y({
                    onStalled: !0
                }),
                captured: y({
                    onStalledCapture: !0
                })
            }
        },
        submit: {
            phasedRegistrationNames: {
                bubbled: y({
                    onSubmit: !0
                }),
                captured: y({
                    onSubmitCapture: !0
                })
            }
        },
        suspend: {
            phasedRegistrationNames: {
                bubbled: y({
                    onSuspend: !0
                }),
                captured: y({
                    onSuspendCapture: !0
                })
            }
        },
        timeUpdate: {
            phasedRegistrationNames: {
                bubbled: y({
                    onTimeUpdate: !0
                }),
                captured: y({
                    onTimeUpdateCapture: !0
                })
            }
        },
        touchCancel: {
            phasedRegistrationNames: {
                bubbled: y({
                    onTouchCancel: !0
                }),
                captured: y({
                    onTouchCancelCapture: !0
                })
            }
        },
        touchEnd: {
            phasedRegistrationNames: {
                bubbled: y({
                    onTouchEnd: !0
                }),
                captured: y({
                    onTouchEndCapture: !0
                })
            }
        },
        touchMove: {
            phasedRegistrationNames: {
                bubbled: y({
                    onTouchMove: !0
                }),
                captured: y({
                    onTouchMoveCapture: !0
                })
            }
        },
        touchStart: {
            phasedRegistrationNames: {
                bubbled: y({
                    onTouchStart: !0
                }),
                captured: y({
                    onTouchStartCapture: !0
                })
            }
        },
        volumeChange: {
            phasedRegistrationNames: {
                bubbled: y({
                    onVolumeChange: !0
                }),
                captured: y({
                    onVolumeChangeCapture: !0
                })
            }
        },
        waiting: {
            phasedRegistrationNames: {
                bubbled: y({
                    onWaiting: !0
                }),
                captured: y({
                    onWaitingCapture: !0
                })
            }
        },
        wheel: {
            phasedRegistrationNames: {
                bubbled: y({
                    onWheel: !0
                }),
                captured: y({
                    onWheelCapture: !0
                })
            }
        }
    }
      , E = {
        topAbort: _.abort,
        topBlur: _.blur,
        topCanPlay: _.canPlay,
        topCanPlayThrough: _.canPlayThrough,
        topClick: _.click,
        topContextMenu: _.contextMenu,
        topCopy: _.copy,
        topCut: _.cut,
        topDoubleClick: _.doubleClick,
        topDrag: _.drag,
        topDragEnd: _.dragEnd,
        topDragEnter: _.dragEnter,
        topDragExit: _.dragExit,
        topDragLeave: _.dragLeave,
        topDragOver: _.dragOver,
        topDragStart: _.dragStart,
        topDrop: _.drop,
        topDurationChange: _.durationChange,
        topEmptied: _.emptied,
        topEncrypted: _.encrypted,
        topEnded: _.ended,
        topError: _.error,
        topFocus: _.focus,
        topInput: _.input,
        topKeyDown: _.keyDown,
        topKeyPress: _.keyPress,
        topKeyUp: _.keyUp,
        topLoad: _.load,
        topLoadedData: _.loadedData,
        topLoadedMetadata: _.loadedMetadata,
        topLoadStart: _.loadStart,
        topMouseDown: _.mouseDown,
        topMouseMove: _.mouseMove,
        topMouseOut: _.mouseOut,
        topMouseOver: _.mouseOver,
        topMouseUp: _.mouseUp,
        topPaste: _.paste,
        topPause: _.pause,
        topPlay: _.play,
        topPlaying: _.playing,
        topProgress: _.progress,
        topRateChange: _.rateChange,
        topReset: _.reset,
        topScroll: _.scroll,
        topSeeked: _.seeked,
        topSeeking: _.seeking,
        topStalled: _.stalled,
        topSubmit: _.submit,
        topSuspend: _.suspend,
        topTimeUpdate: _.timeUpdate,
        topTouchCancel: _.touchCancel,
        topTouchEnd: _.touchEnd,
        topTouchMove: _.touchMove,
        topTouchStart: _.touchStart,
        topVolumeChange: _.volumeChange,
        topWaiting: _.waiting,
        topWheel: _.wheel
    };
    for (var D in E)
        E[D].dependencies = [D];
    var C = y({
        onClick: null
    })
      , x = {}
      , N = {
        eventTypes: _,
        extractEvents: function(e, t, n, o, r) {
            var a = E[e];
            if (!a)
                return null;
            var g;
            switch (e) {
            case w.topAbort:
            case w.topCanPlay:
            case w.topCanPlayThrough:
            case w.topDurationChange:
            case w.topEmptied:
            case w.topEncrypted:
            case w.topEnded:
            case w.topError:
            case w.topInput:
            case w.topLoad:
            case w.topLoadedData:
            case w.topLoadedMetadata:
            case w.topLoadStart:
            case w.topPause:
            case w.topPlay:
            case w.topPlaying:
            case w.topProgress:
            case w.topRateChange:
            case w.topReset:
            case w.topSeeked:
            case w.topSeeking:
            case w.topStalled:
            case w.topSubmit:
            case w.topSuspend:
            case w.topTimeUpdate:
            case w.topVolumeChange:
            case w.topWaiting:
                g = l;
                break;
            case w.topKeyPress:
                if (0 === v(o))
                    return null;
            case w.topKeyDown:
            case w.topKeyUp:
                g = u;
                break;
            case w.topBlur:
            case w.topFocus:
                g = c;
                break;
            case w.topClick:
                if (2 === o.button)
                    return null;
            case w.topContextMenu:
            case w.topDoubleClick:
            case w.topMouseDown:
            case w.topMouseMove:
            case w.topMouseOut:
            case w.topMouseOver:
            case w.topMouseUp:
                g = p;
                break;
            case w.topDrag:
            case w.topDragEnd:
            case w.topDragEnter:
            case w.topDragExit:
            case w.topDragLeave:
            case w.topDragOver:
            case w.topDragStart:
            case w.topDrop:
                g = d;
                break;
            case w.topTouchCancel:
            case w.topTouchEnd:
            case w.topTouchMove:
            case w.topTouchStart:
                g = m;
                break;
            case w.topScroll:
                g = f;
                break;
            case w.topWheel:
                g = h;
                break;
            case w.topCopy:
            case w.topCut:
            case w.topPaste:
                g = s
            }
            g ? void 0 : b(!1);
            var y = g.getPooled(a, n, o, r);
            return i.accumulateTwoPhaseDispatches(y),
            y
        },
        didPutListener: function(e, t, n) {
            if (t === C) {
                var o = a.getNode(e);
                x[e] || (x[e] = r.listen(o, "click", g))
            }
        },
        willDeleteListener: function(e, t) {
            t === C && (x[e].remove(),
            delete x[e])
        }
    };
    e.exports = N
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        r.call(this, e, t, n, o)
    }
    var r = n(87)
      , i = {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    };
    r.augmentClass(o, i),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        r.call(this, e, t, n, o)
    }
    var r = n(97)
      , i = {
        relatedTarget: null
    };
    r.augmentClass(o, i),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        r.call(this, e, t, n, o)
    }
    var r = n(97)
      , i = n(146)
      , a = n(147)
      , s = n(98)
      , l = {
        key: a,
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: s,
        charCode: function(e) {
            return "keypress" === e.type ? i(e) : 0
        },
        keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function(e) {
            return "keypress" === e.type ? i(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    };
    r.augmentClass(o, l),
    e.exports = o
}
, function(e, t) {
    "use strict";
    function n(e) {
        var t, n = e.keyCode;
        return "charCode"in e ? (t = e.charCode,
        0 === t && 13 === n && (t = 13)) : t = n,
        t >= 32 || 13 === t ? t : 0
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        if (e.key) {
            var t = i[e.key] || e.key;
            if ("Unidentified" !== t)
                return t
        }
        if ("keypress" === e.type) {
            var n = r(e);
            return 13 === n ? "Enter" : String.fromCharCode(n)
        }
        return "keydown" === e.type || "keyup" === e.type ? a[e.keyCode] || "Unidentified" : ""
    }
    var r = n(146)
      , i = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }
      , a = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    };
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        r.call(this, e, t, n, o)
    }
    var r = n(96)
      , i = {
        dataTransfer: null
    };
    r.augmentClass(o, i),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        r.call(this, e, t, n, o)
    }
    var r = n(97)
      , i = n(98)
      , a = {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: i
    };
    r.augmentClass(o, a),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o) {
        r.call(this, e, t, n, o)
    }
    var r = n(96)
      , i = {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: null,
        deltaMode: null
    };
    r.augmentClass(o, i),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var o = n(33)
      , r = o.injection.MUST_USE_ATTRIBUTE
      , i = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
    }
      , a = {
        Properties: {
            clipPath: r,
            cx: r,
            cy: r,
            d: r,
            dx: r,
            dy: r,
            fill: r,
            fillOpacity: r,
            fontFamily: r,
            fontSize: r,
            fx: r,
            fy: r,
            gradientTransform: r,
            gradientUnits: r,
            markerEnd: r,
            markerMid: r,
            markerStart: r,
            offset: r,
            opacity: r,
            patternContentUnits: r,
            patternUnits: r,
            points: r,
            preserveAspectRatio: r,
            r: r,
            rx: r,
            ry: r,
            spreadMethod: r,
            stopColor: r,
            stopOpacity: r,
            stroke: r,
            strokeDasharray: r,
            strokeLinecap: r,
            strokeOpacity: r,
            strokeWidth: r,
            textAnchor: r,
            transform: r,
            version: r,
            viewBox: r,
            x1: r,
            x2: r,
            x: r,
            xlinkActuate: r,
            xlinkArcrole: r,
            xlinkHref: r,
            xlinkRole: r,
            xlinkShow: r,
            xlinkTitle: r,
            xlinkType: r,
            xmlBase: r,
            xmlLang: r,
            xmlSpace: r,
            y1: r,
            y2: r,
            y: r
        },
        DOMAttributeNamespaces: {
            xlinkActuate: i.xlink,
            xlinkArcrole: i.xlink,
            xlinkHref: i.xlink,
            xlinkRole: i.xlink,
            xlinkShow: i.xlink,
            xlinkTitle: i.xlink,
            xlinkType: i.xlink,
            xmlBase: i.xml,
            xmlLang: i.xml,
            xmlSpace: i.xml
        },
        DOMAttributeNames: {
            clipPath: "clip-path",
            fillOpacity: "fill-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            gradientTransform: "gradientTransform",
            gradientUnits: "gradientUnits",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            patternContentUnits: "patternContentUnits",
            patternUnits: "patternUnits",
            preserveAspectRatio: "preserveAspectRatio",
            spreadMethod: "spreadMethod",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strokeDasharray: "stroke-dasharray",
            strokeLinecap: "stroke-linecap",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            textAnchor: "text-anchor",
            viewBox: "viewBox",
            xlinkActuate: "xlink:actuate",
            xlinkArcrole: "xlink:arcrole",
            xlinkHref: "xlink:href",
            xlinkRole: "xlink:role",
            xlinkShow: "xlink:show",
            xlinkTitle: "xlink:title",
            xlinkType: "xlink:type",
            xmlBase: "xml:base",
            xmlLang: "xml:lang",
            xmlSpace: "xml:space"
        }
    };
    e.exports = a
}
, function(e, t) {
    "use strict";
    e.exports = "0.14.9"
}
, function(e, t, n) {
    "use strict";
    var o = n(38);
    e.exports = o.renderSubtreeIntoContainer
}
, function(e, t, n) {
    "use strict";
    var o = n(81)
      , r = n(155)
      , i = n(152);
    o.inject();
    var a = {
        renderToString: r.renderToString,
        renderToStaticMarkup: r.renderToStaticMarkup,
        version: i
    };
    e.exports = a
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        a.isValidElement(e) ? void 0 : f(!1);
        var t;
        try {
            p.injection.injectBatchingStrategy(c);
            var n = s.createReactRootID();
            return t = u.getPooled(!1),
            t.perform(function() {
                var o = m(e, null)
                  , r = o.mountComponent(n, t, d);
                return l.addChecksumToMarkup(r)
            }, null)
        } finally {
            u.release(t),
            p.injection.injectBatchingStrategy(i)
        }
    }
    function r(e) {
        a.isValidElement(e) ? void 0 : f(!1);
        var t;
        try {
            p.injection.injectBatchingStrategy(c);
            var n = s.createReactRootID();
            return t = u.getPooled(!0),
            t.perform(function() {
                var o = m(e, null);
                return o.mountComponent(n, t, d)
            }, null)
        } finally {
            u.release(t),
            p.injection.injectBatchingStrategy(i)
        }
    }
    var i = n(102)
      , a = n(52)
      , s = n(55)
      , l = n(58)
      , c = n(156)
      , u = n(157)
      , p = n(64)
      , d = n(68)
      , m = n(72)
      , f = n(23);
    e.exports = {
        renderToString: o,
        renderToStaticMarkup: r
    }
}
, function(e, t) {
    "use strict";
    var n = {
        isBatchingUpdates: !1,
        batchedUpdates: function(e) {}
    };
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        this.reinitializeTransaction(),
        this.renderToStaticMarkup = e,
        this.reactMountReady = i.getPooled(null),
        this.useCreateElement = !1
    }
    var r = n(66)
      , i = n(65)
      , a = n(67)
      , s = n(49)
      , l = n(25)
      , c = {
        initialize: function() {
            this.reactMountReady.reset()
        },
        close: l
    }
      , u = [c]
      , p = {
        getTransactionWrappers: function() {
            return u
        },
        getReactMountReady: function() {
            return this.reactMountReady
        },
        destructor: function() {
            i.release(this.reactMountReady),
            this.reactMountReady = null
        }
    };
    s(o.prototype, a.Mixin, p),
    r.addPoolingTo(o),
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    var o = n(120)
      , r = n(133)
      , i = n(132)
      , a = n(159)
      , s = n(52)
      , l = (n(160),
    n(117))
      , c = n(152)
      , u = n(49)
      , p = n(162)
      , d = s.createElement
      , m = s.createFactory
      , f = s.cloneElement
      , h = {
        Children: {
            map: o.map,
            forEach: o.forEach,
            count: o.count,
            toArray: o.toArray,
            only: p
        },
        Component: r,
        createElement: d,
        cloneElement: f,
        isValidElement: s.isValidElement,
        PropTypes: l,
        createClass: i.createClass,
        createFactory: m,
        createMixin: function(e) {
            return e
        },
        DOM: a,
        version: c,
        __spread: u
    };
    e.exports = h
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return r.createFactory(e)
    }
    var r = n(52)
      , i = (n(160),
    n(161))
      , a = i({
        a: "a",
        abbr: "abbr",
        address: "address",
        area: "area",
        article: "article",
        aside: "aside",
        audio: "audio",
        b: "b",
        base: "base",
        bdi: "bdi",
        bdo: "bdo",
        big: "big",
        blockquote: "blockquote",
        body: "body",
        br: "br",
        button: "button",
        canvas: "canvas",
        caption: "caption",
        cite: "cite",
        code: "code",
        col: "col",
        colgroup: "colgroup",
        data: "data",
        datalist: "datalist",
        dd: "dd",
        del: "del",
        details: "details",
        dfn: "dfn",
        dialog: "dialog",
        div: "div",
        dl: "dl",
        dt: "dt",
        em: "em",
        embed: "embed",
        fieldset: "fieldset",
        figcaption: "figcaption",
        figure: "figure",
        footer: "footer",
        form: "form",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        head: "head",
        header: "header",
        hgroup: "hgroup",
        hr: "hr",
        html: "html",
        i: "i",
        iframe: "iframe",
        img: "img",
        input: "input",
        ins: "ins",
        kbd: "kbd",
        keygen: "keygen",
        label: "label",
        legend: "legend",
        li: "li",
        link: "link",
        main: "main",
        map: "map",
        mark: "mark",
        menu: "menu",
        menuitem: "menuitem",
        meta: "meta",
        meter: "meter",
        nav: "nav",
        noscript: "noscript",
        object: "object",
        ol: "ol",
        optgroup: "optgroup",
        option: "option",
        output: "output",
        p: "p",
        param: "param",
        picture: "picture",
        pre: "pre",
        progress: "progress",
        q: "q",
        rp: "rp",
        rt: "rt",
        ruby: "ruby",
        s: "s",
        samp: "samp",
        script: "script",
        section: "section",
        select: "select",
        small: "small",
        source: "source",
        span: "span",
        strong: "strong",
        style: "style",
        sub: "sub",
        summary: "summary",
        sup: "sup",
        table: "table",
        tbody: "tbody",
        td: "td",
        textarea: "textarea",
        tfoot: "tfoot",
        th: "th",
        thead: "thead",
        time: "time",
        title: "title",
        tr: "tr",
        track: "track",
        u: "u",
        ul: "ul",
        var: "var",
        video: "video",
        wbr: "wbr",
        circle: "circle",
        clipPath: "clipPath",
        defs: "defs",
        ellipse: "ellipse",
        g: "g",
        image: "image",
        line: "line",
        linearGradient: "linearGradient",
        mask: "mask",
        path: "path",
        pattern: "pattern",
        polygon: "polygon",
        polyline: "polyline",
        radialGradient: "radialGradient",
        rect: "rect",
        stop: "stop",
        svg: "svg",
        text: "text",
        tspan: "tspan"
    }, o);
    e.exports = a
}
, function(e, t, n) {
    "use strict";
    function o() {
        if (p.current) {
            var e = p.current.getName();
            if (e)
                return " Check the render method of `" + e + "`."
        }
        return ""
    }
    function r(e, t) {
        if (e._store && !e._store.validated && null == e.key) {
            e._store.validated = !0;
            i("uniqueKey", e, t)
        }
    }
    function i(e, t, n) {
        var r = o();
        if (!r) {
            var i = "string" == typeof n ? n : n.displayName || n.name;
            i && (r = " Check the top-level render call using <" + i + ">.")
        }
        var a = f[e] || (f[e] = {});
        if (a[r])
            return null;
        a[r] = !0;
        var s = {
            parentOrOwner: r,
            url: " See https://fb.me/react-warning-keys for more information.",
            childOwner: null
        };
        return t && t._owner && t._owner !== p.current && (s.childOwner = " It was passed a child from " + t._owner.getName() + "."),
        s
    }
    function a(e, t) {
        if ("object" == typeof e)
            if (Array.isArray(e))
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    c.isValidElement(o) && r(o, t)
                }
            else if (c.isValidElement(e))
                e._store && (e._store.validated = !0);
            else if (e) {
                var i = d(e);
                if (i && i !== e.entries)
                    for (var a, s = i.call(e); !(a = s.next()).done; )
                        c.isValidElement(a.value) && r(a.value, t)
            }
    }
    function s(e, t, n, r) {
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var a;
                try {
                    "function" != typeof t[i] ? m(!1) : void 0,
                    a = t[i](n, i, e, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")
                } catch (e) {
                    a = e
                }
                if (a instanceof Error && !(a.message in h)) {
                    h[a.message] = !0;
                    o()
                }
            }
    }
    function l(e) {
        var t = e.type;
        if ("function" == typeof t) {
            var n = t.displayName || t.name;
            t.propTypes && s(n, t.propTypes, e.props, u.prop),
            "function" == typeof t.getDefaultProps
        }
    }
    var c = n(52)
      , u = n(75)
      , p = (n(76),
    n(15))
      , d = (n(53),
    n(118))
      , m = n(23)
      , f = (n(35),
    {})
      , h = {}
      , g = {
        createElement: function(e, t, n) {
            var o = "string" == typeof e || "function" == typeof e
              , r = c.createElement.apply(this, arguments);
            if (null == r)
                return r;
            if (o)
                for (var i = 2; i < arguments.length; i++)
                    a(arguments[i], e);
            return l(r),
            r
        },
        createFactory: function(e) {
            var t = g.createElement.bind(null, e);
            return t.type = e,
            t
        },
        cloneElement: function(e, t, n) {
            for (var o = c.cloneElement.apply(this, arguments), r = 2; r < arguments.length; r++)
                a(arguments[r], o.type);
            return l(o),
            o
        }
    };
    e.exports = g
}
, function(e, t) {
    "use strict";
    function n(e, t, n) {
        if (!e)
            return null;
        var r = {};
        for (var i in e)
            o.call(e, i) && (r[i] = t.call(n, e[i], i, e));
        return r
    }
    var o = Object.prototype.hasOwnProperty;
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return r.isValidElement(e) ? void 0 : i(!1),
        e
    }
    var r = n(52)
      , i = n(23);
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n, o, r) {
        return r
    }
    n(49),
    n(35);
    e.exports = o
}
, function(e, t, n) {
    "use strict";
    e.exports = n(14)
}
, function(e, t, n) {
    "use strict";
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , r = n(12)
      , i = n(166)
      , a = n(169)
      , s = n(170)
      , l = n(197);
    e.exports = r.createClass({
        displayName: "exports",
        getInitialState: function() {
            return {
                signIn: !0,
                signUp: !1,
                chat: !1,
                loadingStatus: !1,
                loadingMsg: ""
            }
        },
        update: function(e) {
            this.setState({
                signIn: e.signIn,
                signUp: e.signUp,
                chat: e.chat,
                loadingStatus: e.loadingStatus,
                loadingMsg: e.loadingMsg,
                content: e.content,
                status: e.status
            })
        },
        loading: function(e, t) {
            t = t || Demo.lan.loading,
            this.setState({
                loadingStatus: e,
                loadingMsg: t
            })
        },
        render: function() {
            var e = {};
            e.rosterChange = this.props.rosterChange,
            e.groupChange = this.props.groupChange,
            e.chatroomChange = this.props.chatroomChange;
            var t = (new Date).getFullYear();
            return r.createElement("div", null, r.createElement("div", {
                className: "webim" + (WebIM.config.isWindowSDK ? " webim_isWindowSDK" : "")
            }, r.createElement("div", {
                className: "webim-logo" + (this.state.signIn || this.state.signUp ? "" : " hide")
            }, r.createElement("img", {
                src: "demo/images/logo" + (WebIM.config.isWindowSDK ? "-windowSDK" : "") + ".png"
            })), r.createElement(i, o({
                show: this.state.signIn
            }, this.props, {
                update: this.update,
                loading: this.loading
            })), r.createElement(a, o({
                show: this.state.signUp
            }, this.props, {
                update: this.update,
                loading: this.loading
            })), r.createElement(s, o({
                show: this.state.chat
            }, this.props, {
                update: this.update,
                loading: this.loading
            }, e)), r.createElement(l, {
                show: this.state.loadingStatus,
                msg: this.state.loadingMsg
            })), r.createElement("footer", {
                className: "copyright" + (WebIM.config.isWindowSDK ? " hide" : "")
            }, "© ", t, " 环信科技"))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = (n(167),
    n(168))
      , i = r.Input
      , a = r.Button
      , s = r.Checkbox;
    e.exports = o.createClass({
        displayName: "exports",
        getInitialState: function() {
            return {
                pageLimit: 8
            }
        },
        keyDown: function(e) {
            e && 13 === e.keyCode && this.login()
        },
        login: function() {
            var e = this.refs.name.refs.input.value || (WebIM.config.autoSignIn ? WebIM.config.autoSignInName : "")
              , t = this.refs.auth.refs.input.value || (WebIM.config.autoSignIn ? WebIM.config.autoSignInPwd : "")
              , n = this.refs.token.refs.input.checked;
            this.signin(e, t, n)
        },
        signin: function(e, t, n) {
            var e = e
              , t = t
              , n = n;
            if (!e || !t)
                return Demo.api.NotifyError(Demo.lan.notEmpty),
                !1;
            var o = {
                apiUrl: this.props.config.apiURL,
                user: e.toLowerCase(),
                pwd: t,
                accessToken: t,
                appKey: this.props.config.appkey,
                success: function(t) {
                    var n = btoa(e);
                    n = n.replace(/=*$/g, "");
                    var t = t.access_token
                      , o = "#username=" + n;
                    WebIM.utils.setCookie("webim_" + n, t, 1),
                    window.location.href = o,
                    Demo.token = t
                },
                error: function() {
                    window.location.href = "#"
                }
            };
            if (n || delete o.accessToken,
            Demo.user && Demo.user != e && (Demo.chatRecord = {}),
            Demo.user = e,
            this.props.loading("show"),
            Demo.conn.autoReconnectNumTotal = 0,
            WebIM.config.isWindowSDK) {
                var r = this;
                WebIM.config.appDir || (WebIM.config.appDir = ""),
                WebIM.config.imIP || (WebIM.config.imIP = ""),
                WebIM.config.imPort || (WebIM.config.imPort = ""),
                WebIM.config.restIPandPort || (WebIM.config.restIPandPort = ""),
                WebIM.doQuery('{"type":"login","id":"' + o.user + '","password":"' + o.pwd + '","appDir":"' + WebIM.config.appDir + '","appKey":"' + WebIM.config.appkey + '","imIP":"' + WebIM.config.imIP + '","imPort":"' + WebIM.config.imPort + '","restIPandPort":"' + WebIM.config.restIPandPort + '"}', function(e) {
                    Demo.conn.onOpened()
                }, function(e, t) {
                    r.props.loading("hide"),
                    Demo.api.NotifyError("open:" + e + " - " + t)
                })
            } else
                Demo.conn.open(o)
        },
        signup: function() {
            this.props.update({
                signIn: !1,
                signUp: !0,
                chat: !1
            })
        },
        componentWillMount: function() {
            var e = WebIM.utils.parseHrefHash()
              , t = e.username
              , n = WebIM.utils.getCookie()["webim_" + t];
            Demo.token = n,
            t && n && (t = atob(t),
            this.signin(t, n, !0))
        },
        componentDidMount: function() {
            WebIM.config.autoSignIn && this.refs.button.refs.button.click()
        },
        render: function() {
            return o.createElement("div", {
                className: this.props.show ? "webim-sign" : "webim-sign hide"
            }, o.createElement("h2", null, Demo.lan.signIn), o.createElement(i, {
                placeholder: Demo.lan.username,
                defaultFocus: "true",
                ref: "name",
                keydown: this.keyDown
            }), o.createElement(i, {
                placeholder: Demo.lan.password,
                ref: "auth",
                type: "password",
                keydown: this.keyDown
            }), o.createElement("div", {
                className: WebIM.config.isWindowSDK ? "hide" : ""
            }, o.createElement(s, {
                text: Demo.lan.tokenSignin,
                ref: "token"
            })), o.createElement(a, {
                ref: "button",
                text: Demo.lan.signIn,
                onClick: this.login
            }), o.createElement("p", null, Demo.lan.noaccount, ",", o.createElement("i", {
                onClick: this.signup
            }, Demo.lan.signupnow)))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(164)
      , i = document.getElementById("components")
      , a = document.createElement("div");
    i.appendChild(a);
    var s = o.createClass({
        displayName: "Notify",
        click: function() {
            clearTimeout(this.props.st),
            r.unmountComponentAtNode(a)
        },
        render: function() {
            var e = "";
            return this.props.status && (e = " " + this.props.status),
            o.createElement("p", {
                onClick: this.click,
                className: "webim-notify" + e
            }, this.props.content)
        }
    });
    e.exports = {
        success: function(e) {
            var t = setTimeout(function() {
                r.unmountComponentAtNode(a)
            }, 3e3);
            r.render(o.createElement(s, {
                st: t,
                status: "success",
                content: e
            }), a)
        },
        error: function(e) {
            var t = setTimeout(function() {
                r.unmountComponentAtNode(a)
            }, 3e3);
            r.render(o.createElement(s, {
                st: t,
                status: "error",
                content: e
            }), a)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(12);
    t.Input = o.createClass({
        displayName: "Input",
        getInitialState: function() {
            return {
                value: this.props.value || ""
            }
        },
        handleChange: function(e) {
            "function" == typeof this.props.change && this.props.change(this.refs.input.value);
            var t = e.target.value;
            this.setState({
                value: t
            }),
            "function" == typeof this.props.onChange && this.props.onChange(e)
        },
        componentWillUnmount: function() {
            this.props.keydown && this.refs.input.removeEventListener("keydown", this.props.keydown),
            this.refs.input = null
        },
        componentDidMount: function() {
            this.props.keydown && this.refs.input.addEventListener("keydown", this.props.keydown),
            this.props.defaultFocus && this.refs.input.focus()
        },
        render: function() {
            var e = this.props.type || "text";
            return o.createElement("input", {
                className: "webim-input",
                type: e,
                defaultValue: this.props.text,
                ref: "input",
                value: this.state.value,
                placeholder: this.props.placeholder,
                onChange: this.handleChange
            })
        }
    }),
    t.Button = o.createClass({
        displayName: "Button",
        render: function() {
            var e = this.props.className ? " " + this.props.className : ""
              , t = "";
            return t = e.indexOf("hide") >= 0 ? "hide" : "webim-button bg-color" + e,
            o.createElement("button", {
                className: t,
                ref: "button",
                onClick: this.props.onClick
            }, this.props.text)
        }
    }),
    t.SmallButton = o.createClass({
        displayName: "SmallButton",
        render: function() {
            var e = this.props.status ? " " + this.props.status : "";
            return o.createElement("button", {
                className: "webim-button small" + e,
                onClick: this.props.click
            }, this.props.text)
        }
    }),
    t.Radio = o.createClass({
        displayName: "Radio",
        handleChange: function() {
            this.props.change(this.refs.input.checked)
        },
        render: function() {
            return o.createElement("input", {
                ref: "input",
                type: "radio",
                className: "webim-input",
                defaultValue: this.props.text,
                onChange: this.handleChange
            })
        }
    }),
    t.Checkbox = o.createClass({
        displayName: "Checkbox",
        getInitialState: function() {
            return {
                checked: !1
            }
        },
        handleClick: function() {
            this.toggleChecked(),
            this.refs.input.checked = !this.state.checked,
            this.setState({
                checked: !this.state.checked
            })
        },
        toggleChecked: function() {
            this.refs.i.className ? this.refs.i.className = "" : this.refs.i.className = "checked"
        },
        handleChange: function() {
            "function" == typeof this.props.change && this.props.change(this.refs.input.value)
        },
        render: function() {
            var e = this.state.checked ? "" : " hide";
            return o.createElement("div", {
                className: "webim-checkbox"
            }, o.createElement("i", {
                ref: "i",
                onClick: this.handleClick
            }, o.createElement("em", {
                ref: "rec",
                className: "font small" + e
            }, "W")), o.createElement("input", {
                ref: "input",
                type: "checkbox",
                className: "hide",
                onChange: this.handleChange
            }), o.createElement("span", null, this.props.text))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(168)
      , i = r.Input
      , a = r.Button;
    e.exports = o.createClass({
        displayName: "exports",
        keyDown: function(e) {
            e && 13 === e.keyCode && this.signup()
        },
        signin: function() {
            this.props.update({
                signIn: !0,
                signUp: !1,
                chat: !1
            })
        },
        submiting: !1,
        signup: function() {
            var e = this;
            if (this.submiting)
                return !1;
            var t = this.refs.name.refs.input.value
              , n = this.refs.auth.refs.input.value
              , o = this.refs.nickname.refs.input.value;
            if (!t || !n)
                return Demo.api.NotifyError(Demo.lan.notEmpty),
                !1;
            this.submiting = !0;
            var r = {
                username: t.toLowerCase(),
                password: n,
                nickname: o,
                appKey: this.props.config.appkey,
                apiUrl: this.props.config.apiURL,
                success: function() {
                    e.submiting = !1,
                    Demo.api.NotifySuccess(Demo.lan.signUpSuccessfully),
                    setTimeout(function() {
                        e.props.update({
                            signIn: !0,
                            signUp: !1,
                            chat: !1
                        })
                    }, 1e3)
                },
                error: function(t) {
                    e.submiting = !1,
                    Demo.api.NotifyError(t.data || "registerUser error! Please check the network and try again!")
                }
            };
            if (WebIM.config.isWindowSDK) {
                var i = "";
                WebIM.config.appDir && (i = WebIM.config.appDir);
                var a = "";
                WebIM.config.imIP && (a = WebIM.config.imIP);
                var s = "";
                WebIM.config.imPort && (s = WebIM.config.imPort);
                var l = "";
                WebIM.config.restIPandPort && (l = WebIM.config.restIPandPort),
                WebIM.doQuery('{"type":"createAccount","id":"' + r.username + '","password":"' + r.password + '","appDir":"' + i + '","appKey":"' + WebIM.config.appkey + '","imIP":"' + a + '","imPort":"' + s + '","restIPandPort":"' + l + '"}', function(e) {
                    r.success()
                }, function(t, n) {
                    e.submiting = !1,
                    alert("registerUser:" + t + " - " + n)
                })
            } else
                Demo.conn.registerUser(r)
        },
        render: function() {
            return o.createElement("div", {
                className: this.props.show ? "webim-sign webim-signup" : "webim-sign webim-signup hide"
            }, o.createElement("h2", null, Demo.lan.signUp), o.createElement(i, {
                ref: "name",
                placeholder: Demo.lan.username,
                defaultFocus: "true",
                keydown: this.keyDown
            }), o.createElement(i, {
                ref: "auth",
                placeholder: Demo.lan.password,
                type: "password",
                keydown: this.keyDown
            }), o.createElement("div", {
                className: WebIM.config.isWindowSDK ? "hide" : ""
            }, o.createElement(i, {
                ref: "nickname",
                placeholder: Demo.lan.nickname,
                keydown: this.keyDown
            })), o.createElement(a, {
                text: Demo.lan.signUp,
                onClick: this.signup
            }), o.createElement("p", null, Demo.lan.haveaccount, ",", o.createElement("i", {
                onClick: this.signin
            }, Demo.lan.signIn)))
        }
    })
}
, function(module, exports, __webpack_require__) {
    "use strict";
    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , React = __webpack_require__(12)
      , LeftBar = __webpack_require__(171)
      , Contact = __webpack_require__(181)
      , ChatWindow = __webpack_require__(183)
      , RTCChannel = __webpack_require__(192)
      , Subscribe = __webpack_require__(194)
      , ConfirmPop = __webpack_require__(195)
      , _ = __webpack_require__(178)
      , ConfirmGroupInfo = __webpack_require__(196);
    module.exports = React.createClass({
        displayName: "exports",
        release: !0,
        getInitialState: function getInitialState() {
            var me = this
              , uri = WebIM.utils.parseHrefHash()
              , curNode = uri.curNode
              , windows = [];
            if (curNode) {
                if (Demo.selected = curNode,
                Demo.chatState.friends)
                    for (; Demo.chatState.friends.chatWindow.length; )
                        Demo.chatState.friends.chatWindow.pop();
                var props = {
                    sendPicture: this.sendPicture,
                    sendAudio: this.sendAudio,
                    sendFile: this.sendFile,
                    name: curNode,
                    delFriend: me.delContactItem
                };
                Demo.chatState.friends.chatWindow.push(React.createElement(ChatWindow, _extends({
                    id: "wrapper" + curNode,
                    key: curNode
                }, props, {
                    chatType: "singleChat",
                    updateNode: this.updateNode,
                    className: ""
                }))),
                windows = Demo.chatState.friends.chatWindow
            }
            return Demo.conn.listen({
                onUpdateMyRoster: function(e) {
                    me.updateMyRoster(e)
                },
                onUpdateMyGroupList: function(e) {
                    me.updateMyGroupList(e)
                },
                onConfirmPop: function(e) {
                    me.confirmPop(e)
                },
                onOpened: function() {
                    me.props.update({
                        signIn: !1,
                        signUp: !1,
                        chat: !0,
                        loadingStatus: "hide"
                    }),
                    me.getBlacklist(),
                    me.getGroup(),
                    me.getChatroom(),
                    Demo.conn.errorType = -1
                },
                onClosed: function(e) {
                    Demo.first = !0
                },
                onTextMessage: function onTextMessage(message) {
                    
                    //这里接送信息  
                    console.log('接收成功', message);
                                    
                    if (console.log("Message: ", message),
                    WebIM.config.isWindowSDK && (message = eval("(" + message + ")")),
                    Demo.api.addToChatRecord(message, "txt"),
                    Demo.api.appendMsg(message, "txt"),
                    Demo.selected == message.from) {
                        var id = message.id
                          , sentByMe = message.from === Demo.user
                          , targetId = sentByMe || "chat" !== message.type ? message.to : message.from;
                        Demo.chatRecord[targetId].messages[id].read = !0,
                        Demo.api.sendRead(message)
                    }
                },
                onEmojiMessage: function onEmojiMessage(message) {
                    if (WebIM.config.isWindowSDK && (message = eval("(" + message + ")")),
                    Demo.api.addToChatRecord(message, "emoji"),
                    Demo.api.appendMsg(message, "emoji"),
                    Demo.selected == message.from) {
                        var id = message.id
                          , sentByMe = message.from === Demo.user
                          , targetId = sentByMe || "chat" !== message.type ? message.to : message.from;
                        Demo.chatRecord[targetId].messages[id].read = !0,
                        Demo.api.sendRead(message)
                    }
                },
                onPictureMessage: function onPictureMessage(message) {
                    if (WebIM.config.isWindowSDK && (message = eval("(" + message + ")")),
                    Demo.api.addToChatRecord(message, "img"),
                    Demo.api.appendMsg(message, "img"),
                    Demo.selected == message.from) {
                        var id = message.id
                          , sentByMe = message.from === Demo.user
                          , targetId = sentByMe || "chat" !== message.type ? message.to : message.from;
                        Demo.chatRecord[targetId].messages[id].read = !0,
                        Demo.api.sendRead(message)
                    }
                },
                onCmdMessage: function onCmdMessage(message) {
                    if (WebIM.config.isWindowSDK && (message = eval("(" + message + ")")),
                    Demo.api.addToChatRecord(message, "cmd"),
                    Demo.api.appendMsg(message, "cmd"),
                    Demo.selected == message.from) {
                        var id = message.id
                          , sentByMe = message.from === Demo.user
                          , targetId = sentByMe || "chat" !== message.type ? message.to : message.from;
                        Demo.chatRecord[targetId].messages[id].read = !0,
                        Demo.api.sendRead(message)
                    }
                },
                onAudioMessage: function onAudioMessage(message) {
                    if (WebIM.config.isWindowSDK && (message = eval("(" + message + ")")),
                    Demo.api.addToChatRecord(message, "aud"),
                    Demo.api.appendMsg(message, "aud"),
                    Demo.selected == message.from) {
                        var id = message.id
                          , sentByMe = message.from === Demo.user
                          , targetId = sentByMe || "chat" !== message.type ? message.to : message.from;
                        Demo.chatRecord[targetId].messages[id].read = !0,
                        Demo.api.sendRead(message)
                    }
                },
                onLocationMessage: function onLocationMessage(message) {
                    if (WebIM.config.isWindowSDK && (message = eval("(" + message + ")")),
                    Demo.api.addToChatRecord(message, "loc"),
                    Demo.api.appendMsg(message, "loc"),
                    Demo.selected == message.from) {
                        var id = message.id
                          , sentByMe = message.from === Demo.user
                          , targetId = sentByMe || "chat" !== message.type ? message.to : message.from;
                        Demo.chatRecord[targetId].messages[id].read = !0,
                        Demo.api.sendRead(message)
                    }
                },
                onFileMessage: function onFileMessage(message) {
                    if (WebIM.config.isWindowSDK && (message = eval("(" + message + ")")),
                    Demo.api.addToChatRecord(message, "file"),
                    Demo.api.appendMsg(message, "file"),
                    Demo.selected == message.from) {
                        var id = message.id
                          , sentByMe = message.from === Demo.user
                          , targetId = sentByMe || "chat" !== message.type ? message.to : message.from;
                        Demo.chatRecord[targetId].messages[id].read = !0,
                        Demo.api.sendRead(message)
                    }
                },
                onVideoMessage: function onVideoMessage(message) {
                    if (WebIM.config.isWindowSDK && (message = eval("(" + message + ")")),
                    Demo.api.addToChatRecord(message, "video"),
                    Demo.api.appendMsg(message, "video"),
                    Demo.selected == message.from) {
                        var id = message.id
                          , sentByMe = message.from === Demo.user
                          , targetId = sentByMe || "chat" !== message.type ? message.to : message.from;
                        Demo.chatRecord[targetId].messages[id].read = !0,
                        Demo.api.sendRead(message)
                    }
                },
                onPresence: function onPresence(message) {
                    WebIM.config.isWindowSDK && (message = eval("(" + message + ")")),
                    me.handlePresence(message)
                },
                onRoster: function(e) {
                    me.getRoster("doNotUpdateGroup")
                },
                onInviteMessage: function(e) {
                    var t = WebIM.utils.sprintf(Demo.lan.inviteToGroup, e.from);
                    "invite" === e.type && Demo.api.NotifySuccess(t),
                    me.getGroup()
                },
                onOnline: function() {
                    console.log("onOnline")
                },
                onOffline: function() {
                    if (WebIM.config.isWindowSDK)
                        Demo.api.NotifyError("Network connection is broken. reconnecting...");
                    else {
                        if (WebIM.config.isWebRTC) {
                            var e = document.getElementById("webrtc_close");
                            e && e.click()
                        }
                        Demo.api.logout(WebIM.statusCode.WEBIM_CONNCTION_CLIENT_OFFLINE)
                    }
                },
                onError: function onError(message) {
                    var text = "";
                    if (WebIM.config.isWindowSDK)
                        message = eval("(" + message + ")"),
                        text = message.desc,
                        "206" == message.code && Demo.api.logout();
                    else {
                        if (message.type == WebIM.statusCode.WEBIM_CONNCTION_DISCONNECTED && Demo.conn.autoReconnectNumTotal < Demo.conn.autoReconnectNumMax)
                            return void (Demo.conn.errorType = message.type);
                        text = message.data && message.data.data ? message.data.data : WebIM.utils.getObjectKey(WebIM.statusCode, message.type) + "  type=" + message.type
                    }
                    if (Demo.conn.errorType != WebIM.statusCode.WEBIM_CONNCTION_CLIENT_LOGOUT) {
                        if (message.type === WebIM.statusCode.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP || message.type === WebIM.statusCode.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP || message.type === WebIM.statusCode.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP || message.type === WebIM.statusCode.WEBIM_CONNECTION_DECLINE_JOIN_GROUP || message.type === WebIM.statusCode.WEBIM_CONNECTION_CLOSED)
                            return void Demo.api.NotifySuccess(text);
                        "logout" == text || "WEBIM_CONNCTION_SERVER_ERROR  type=8" == text ? (text = Demo.lan.logoutSuc,
                        window.location.href = "#",
                        Demo.api.NotifySuccess(text)) : Demo.api.NotifyError("onError:" + text)
                    }
                    if (WebIM.config.isWebRTC) {
                        var closeButton = document.getElementById("webrtc_close");
                        closeButton && closeButton.click()
                    }
                    Demo.api.init()
                },
                onBlacklistUpdate: function(e) {
                    Demo.api.blacklist.parse(e),
                    me.setState({
                        blacklist: e
                    }),
                    Demo.api.updateRoster()
                },
                onReceivedMessage: function(e) {
                    var t = document.getElementById(e.id);
                    t && t.setAttribute("name", e.mid);
                    for (var n in Demo.chatRecord) {
                        var t = Demo.chatRecord[n].messages[e.id];
                        Demo.chatRecord[n].messages[e.mid] = t,
                        delete Demo.chatRecord[n].messages[e.id]
                    }
                },
                onDeliveredMessage: function(e) {
                    WebIM.config.isWindowSDK;
                    var t = document.getElementsByName(e.mid);
                    for (var n in Demo.chatRecord)
                        Demo.chatRecord[n].messages[e.mid] && "Read" != Demo.chatRecord[n].messages[e.mid].status && (t && t[0] && (t[0].innerHTML = "已送达"),
                        Demo.chatRecord[n].messages[e.mid].status = "Delivered")
                },
                onReadMessage: function(e) {
                    WebIM.config.isWindowSDK;
                    var t = document.getElementsByName(e.mid);
                    t && t[0] && (t[0].innerHTML = "已读");
                    for (var n in Demo.chatRecord)
                        Demo.chatRecord[n].messages[e.mid] && (Demo.chatRecord[n].messages[e.mid].status = "Read")
                },
                onCreateGroup: function(e) {
                    Demo.api.NotifySuccess("Group Created, Group id: " + e.data.groupid),
                    me.getGroup()
                },
                onMutedMessage: function(e) {
                    var t = document.getElementsByName(e.mid);
                    if (t) {
                        delete Demo.chatRecord[Demo.selected].messages[e.mid];
                        var n = document.getElementById("wrapper" + Demo.selected)
                          , o = t[0].parentNode.parentNode.parentNode;
                        n && n.removeChild(o)
                    }
                    Demo.api.NotifySuccess(Demo.lan.onMuted)
                }
            }),
            {
                cur: "friend",
                curNode: curNode || "",
                friends: [],
                groups: [],
                chatrooms: [],
                strangers: [],
                blacklist: {},
                chatrooms_totalnum: Demo.api.pagesize,
                contact_loading_show: !1,
                windows: windows,
                fileId: null
            }
        },
        confirmPop: function(e) {
            ConfirmPop.show(e)
        },
        updateMyRoster: function updateMyRoster(options) {
            var friends = []
              , roster = eval("(" + options + ")");
            Demo.roster = [];
            for (var i in roster) {
                var ros = roster[i];
                "both" !== ros.subscription && "from" !== ros.subscription && "to" !== ros.subscription || (friends.push(ros),
                Demo.roster[ros.name] = 1)
            }
            Demo.friends = friends,
            this.setState({
                friends: friends
            })
        },
        updateMyGroupList: function updateMyGroupList(options) {
            var rooms = eval("(" + options + ")");
            this.setState({
                groups: rooms
            })
        },
        restUpdateGroutList: function() {},
        friendRequest: function(e) {
            e && "[resp:true]" === e.status || Subscribe.show(e)
        },
        componentDidUpdate: function(e, t) {},
        componentDidMount: function() {
            WebIM.config.isWebRTC && WebIM.WebRTC && (this.initWebRTC(),
            this.channel = new RTCChannel(this.refs.rtcWrapper))
        },
        rtcTimeoutID: null,
        initWebRTC: function() {
            if (!Demo.call) {
                var e = this;
                Demo.call = new WebIM.WebRTC.Call({
                    connection: Demo.conn,
                    mediaStreamConstaints: {
                        audio: !0,
                        video: !0
                    },
                    listener: {
                        onOtherUserOpenVoice: function(e, t) {
                            console.log("from open:", t, " voice .", e)
                        },
                        onOtherUserOpenVideo: function(e, t) {
                            console.log("from open:", t, " voideo .", e)
                        },
                        onAcceptCall: function(e, t, n, o) {
                            console.log("onAcceptCall", e, t, n, o)
                        },
                        onGotRemoteStream: function(t, n) {
                            console.log("onGotRemoteStream"),
                            e.channel.setRemote(t, n)
                        },
                        onGotLocalStream: function(t, n) {
                            console.log("onGotLocalStream ", "Stream Type: ", n),
                            e.channel.setLocal(t, n)
                        },
                        onRinging: function(t, n) {
                            console.log("onRinging", t),
                            e.channel.ringing(t, n)
                        },
                        onTermCall: function(t) {
                            console.log("onTermCall"),
                            !t || "busy" != t && "BUSY" != t || Demo.api.NotifyError("Target is busy. Try it later."),
                            !t || "timeout" != t && "NORESPONSE" != t || Demo.api.NotifyError("Target no response. Try it later."),
                            !t || "decline" != t && "REJECT" != t || Demo.api.NotifyError("Target reject."),
                            !t || "failed-transport" != t && "FAIL" != t || Demo.api.NotifyError("Call failed. Try it later."),
                            !t || "ok" != t && "success" != t && "HANGUP" != t || Demo.api.NotifySuccess("Target hangup. "),
                            Demo.call.caller = "",
                            Demo.call.callee = "",
                            e.channel.close()
                        },
                        onIceConnectionStateChange: function(t) {
                            console.log("onIceConnectionStateChange"),
                            "disconnected" == t ? e.rtcTimeoutID || (e.rtcTimeoutID = setTimeout(function() {
                                if (!Demo.call.pattern || !Demo.call.pattern.hangup) {
                                    Demo.api.NotifySuccess("Target is offline");
                                    var e = document.getElementById("webrtc_close");
                                    e && e.click()
                                }
                            }, 1e4)) : "connected" == t && e.rtcTimeoutID && (clearTimeout(e.rtcTimeoutID),
                            e.rtcTimeoutID = null)
                        },
                        onError: function(e) {
                            if (e && e.message) {
                                var t = !1;
                                switch (e.message) {
                                case "CALLLING_EACH_OTHER_AT_THE_SAME_TIME":
                                    e.message = "Target is calling. Please try again later.",
                                    t = !0;
                                    break;
                                case "TARGET_OFFLINE":
                                    e.message = "Target is offline."
                                }
                                if (t) {
                                    var n = document.getElementById("webrtc_close");
                                    n && n.click()
                                }
                            }
                            Demo.api.NotifyError(e && e.message ? e.message : "An error occured when calling webrtc")
                        }
                    }
                })
            }
        },
        componentWillReceiveProps: function(e) {
            e.groupChange ? this.getGroup() : e.rosterChange ? this.getRoster("doNotUpdateGroup") : e.chatroomChange ? this.getChatroom() : e.strangerChange && this.getStrangers()
        },
        handlePresence: function(e) {
            var t = this;
            switch (e.type) {
            case "joinGroupNotifications":
                ConfirmGroupInfo.show(e);
                break;
            case "createGroupACK":
                Demo.conn.createGroupAsync({
                    from: e.from,
                    success: function(e) {
                        Demo.api.updateGroup();
                        var t = WebIM.utils.sprintf(Demo.lan.createGroupSuc, e.subject);
                        Demo.api.NotifySuccess(t)
                    }
                });
                break;
            case "leaveGroup":
                Demo.api.NotifySuccess((e.kicked || "You") + " have been dismissed by " + (e.actor || "admin") + " ."),
                Demo.api.updateGroup(),
                e.from != Demo.selected || e.kicked || (t.delContactItem(),
                Demo.selected = "");
                break;
            case "subscribe":
                Demo.roster[e.from] || t.friendRequest(e);
                break;
            case "subscribed":
                Demo.roster[e.from] || (Demo.roster[e.from] = 1),
                t.getRoster("doNotUpdateGroup");
                break;
            case "unsubscribe":
            case "unsubscribed":
                "code"in e ? Demo.api.NotifySuccess(WebIM.utils.sprintf(Demo.lan.refuse, e.from)) : (e.from != Demo.selected || e.kicked || (t.delContactItem(),
                Demo.selected = ""),
                delete Demo.chatRecord[e.from]),
                Demo.roster[e.from] && delete Demo.roster[e.from],
                t.delContactItem();
                break;
            case "joinPublicGroupSuccess":
                Demo.api.NotifySuccess("加入群组" + e.from + "成功！"),
                Demo.api.updateGroup();
                break;
            case "joinChatRoomSuccess":
                Demo.currentChatroom = e.from;
                break;
            case "reachChatRoomCapacity":
                Demo.currentChatroom = null,
                Demo.api.NotifySuccess("Fail to Join the group");
                break;
            case "memberJoinPublicGroupSuccess":
                Demo.api.NotifySuccess(e.mid + "已成功加入群组" + e.from);
                break;
            case "memberJoinChatRoomSuccess":
                Demo.api.NotifySuccess(e.mid + "已成功加入聊天室" + e.from);
                break;
            case "joinPublicGroupDeclined":
                Demo.api.NotifyError(e.owner + "拒绝了您加入" + e.gid + "的请求");
                break;
            case "leaveChatRoom":
                break;
            case "deleteGroupChat":
                if ("unavailable" == e.original_type)
                    return void Demo.api.updateGroup();
                var n = document.getElementById(e.from);
                delete Demo.chatRecord[n];
                var o = {
                    title: "Group notification",
                    msg: "You have been out of the group"
                };
                _.find(this.state.groups, function(t, n) {
                    if (t.roomId == e.from)
                        return o.msg = "You have been out of the group: " + t.name,
                        !0
                }),
                n && Demo.api.updateGroup(),
                Demo.api.NotifySuccess(o.msg);
                break;
            case "addAdmin":
                Demo.api.NotifySuccess(e.owner + "将您设为了组" + e.gid + "的管理员");
                break;
            case "removeAdmin":
                Demo.api.NotifyError(e.owner + "取消了您在" + e.gid + "的管理员");
                break;
            case "addMute":
                Demo.api.NotifyError(e.owner + "将您在组" + e.gid + "中禁言");
                break;
            case "removeMute":
                Demo.api.NotifySuccess(e.owner + "取消了您在" + e.gid + "的禁言")
            }
        },
        getStrangers: function() {
            var e = [];
            for (var t in Demo.strangers)
                Demo.strangers.hasOwnProperty(t) && e.push({
                    name: t
                });
            this.setState(_defineProperty({
                strangers: e
            }, "strangers", e))
        },
        getRoster: function getRoster(doNotUpdateGroup) {
            var me = this
              , conn = Demo.conn
              , friends = [];
            WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"getRoster"}', function success(str) {
                if (Demo.roster = [],
                str) {
                    var roster = eval("(" + str + ")");
                    for (var i in roster) {
                        var ros = roster[i];
                        "both" !== ros.subscription && "from" !== ros.subscription && "to" !== ros.subscription || (friends.push(ros),
                        Demo.roster[ros.name] = 1)
                    }
                }
                me.setState({
                    friends: friends
                }),
                doNotUpdateGroup || me.getGroup()
            }, function(e, t) {
                Demo.api.NotifyError("getRoster:" + e + " " + t)
            }) : conn.getRoster({
                success: function(e) {
                    var t = !1;
                    for (var n in e) {
                        var o = e[n];
                        "both" !== o.subscription && "from" !== o.subscription && "to" !== o.subscription || (friends.push(o),
                        Demo.roster[o.name] = 1)
                    }
                    for (var n in friends) {
                        var r = friends[n].name;
                        r == me.state.curNode && (t = !0)
                    }
                    t ? me.setState({
                        friends: friends
                    }) : me.setState({
                        friends: friends,
                        windows: []
                    }),
                    doNotUpdateGroup || me.getGroup();
                    var i = null;
                    try {
                        i = Demo.conn.getLocal()
                    } catch (e) {
                        console.log(e)
                    }
                    Demo.chatRecord = {},
                    Demo.first = !1;
                    for (var n in i) {
                        var a = i[n];
                        Demo.api.addToChatRecord(a, a.msgType, a.msgStatus)
                    }
                    Demo.api.releaseChatRecord()
                }
            }),
            Demo.friends = friends
        },
        getGroup: function getGroup() {
            var me = this;
            if (WebIM.config.isWindowSDK)
                WebIM.doQuery('{"type":"getGroup"}', function success(str) {
                    var rooms = [];
                    str && (rooms = eval("(" + str + ")")),
                    me.setState({
                        groups: rooms
                    })
                }, function(e, t) {
                    Demo.api.NotifyError("getGroup:" + e + " " + t)
                });
            else {
                var options = {
                    success: function(e) {
                        var t = e.data;
                        for (var n in t)
                            t[n].name = t[n].groupname,
                            t[n].roomId = t[n].groupid,
                            delete t[n].groupname,
                            delete t[n].groupid;
                        this.setState({
                            groups: t
                        })
                    }
                    .bind(this),
                    error: function(e) {
                        console.log("Ajax error")
                    }
                };
                Demo.conn.getGroup(options)
            }
        },
        getChatroom: function getChatroom() {
            var me = this
              , pagenum = Math.ceil(this.state.chatrooms.length / Demo.api.pagesize)
              , pageTotal = Math.ceil(this.state.chatrooms_totalnum / Demo.api.pagesize);
            pagenum != pageTotal && (pagenum++,
            this.setState({
                contact_loading_show: !0
            }),
            WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"getChatroom"}', function success(str) {
                var rooms = eval("(" + str + ")");
                me.setState({
                    chatrooms: rooms,
                    contact_loading_show: !1
                })
            }, function(e, t) {
                me.setState({
                    contact_loading_show: !1
                }),
                Demo.api.NotifyError("getChatroom:" + e + " " + t)
            }) : Demo.conn.getChatRooms({
                pagenum: pagenum,
                pagesize: Demo.api.pagesize,
                success: function(e) {
                    var t = {};
                    e.data && (e.data.length > 0 ? (t.chatrooms_totalnum = (parseInt(e.params.pagenum[0]) + 1) * Demo.api.pagesize,
                    t.chatrooms = me.state.chatrooms.concat(e.data)) : t.chatrooms_totalnum = parseInt(e.params.pagenum[0] - 1) * Demo.api.pagesize),
                    t.contact_loading_show = !1,
                    me.setState(t)
                },
                error: function(e) {
                    me.setState({
                        contact_loading_show: !1
                    }),
                    Demo.api.NotifyError("getChatroom:" + e)
                }
            }))
        },
        getBlacklist: function() {
            var e = this;
            Demo.api.blacklist.getBlacklist({
                success: function(t) {
                    e.setState({
                        blacklist: t
                    })
                }
            })
        },
        update: function(e) {
            var t = Demo.chatState[Demo.selectedCate].selected;
            Demo.selected = t,
            "chatrooms" == Demo.selectedCate && t && (delete Demo.chatRecord[t],
            WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"joinChatroom","id":"' + t + '"}', function(e) {
                Demo.currentChatroom = e
            }, function(e, t) {
                Demo.api.NotifyError("update chatrooms:" + e + " " + t)
            }) : Demo.conn.joinChatRoom({
                roomId: t
            })),
            this.setChatWindow(!0),
            this.setState({
                curNode: t,
                cur: e,
                contact_loading_show: !1
            })
        },
        storeChatWindow: function() {
            var e, t = "", n = {
                sendPicture: this.sendPicture,
                sendAudio: this.sendAudio,
                sendFile: this.sendFile,
                name: ""
            };
            if (Demo.selected) {
                for (e = Demo.selected,
                t = Demo.selectedCate; Demo.chatState[t].chatWindow.length; )
                    Demo.chatState[t].chatWindow.pop();
                switch (t) {
                case "friends":
                    n.name = e,
                    n.delFriend = this.delContactItem,
                    Demo.chatState[t].chatWindow.push(React.createElement(ChatWindow, _extends({
                        id: "wrapper" + e,
                        key: e
                    }, n, {
                        chatType: "singleChat",
                        updateNode: this.updateNode,
                        className: ""
                    })));
                    break;
                case "groups":
                    for (var o = 0; o < this.state.groups.length; o++)
                        if (e == this.state.groups[o].roomId) {
                            n.name = this.state.groups[o].name,
                            n.leaveGroup = this.delContactItem,
                            n.destroyGroup = this.delContactItem,
                            this.state.groups[o].roomId == this.state.groups[o].name && Demo.createGroupName && "" != Demo.createGroupName && (this.state.groups[o].name = Demo.createGroupName,
                            Demo.createGroupName = ""),
                            Demo.chatState[t].chatWindow.push(React.createElement(ChatWindow, _extends({
                                roomId: e,
                                id: "wrapper" + e,
                                key: e
                            }, n, {
                                chatType: "groupChat",
                                className: ""
                            })));
                            break
                        }
                    break;
                case "chatrooms":
                    for (var o = 0; o < this.state.chatrooms.length; o++)
                        e == this.state.chatrooms[o].id && (n.name = this.state.chatrooms[o].name,
                        Demo.chatState[t].chatWindow.push(React.createElement(ChatWindow, _extends({
                            roomId: e,
                            id: "wrapper" + e,
                            key: e
                        }, n, {
                            chatType: "chatRoom",
                            className: ""
                        }))));
                    break;
                case "strangers":
                    n.name = e,
                    Demo.chatState[t].chatWindow.push(React.createElement(ChatWindow, _extends({
                        id: "wrapper" + e,
                        key: e
                    }, n, {
                        className: ""
                    })));
                    break;
                default:
                    console.log("Default: ", t)
                }
            }
        },
        setChatWindow: function(e) {
            var t = Demo.selectedCate;
            e ? this.setState({
                windows: Demo.chatState[t].chatWindow
            }) : this.setState({
                windows: []
            })
        },
        delContactItem: function() {
            var e = Demo.selectedCate;
            Demo.selected = "",
            Demo.chatState.clear(e),
            this.setState({
                curNode: ""
            }),
            this.setChatWindow(!0)
        },
        updateNode: function(e) {
            var t = WebIM.utils.parseHrefHash()
              , n = t.username;
            window.location.href = "#username=" + n + "&curNode=" + e,
            Demo.chatState[Demo.selectedCate].selected = e,
            this.storeChatWindow(),
            this.setChatWindow(!0),
            this.setState({
                curNode: e
            })
        },
        sendPicture: function(e) {
            WebIM.config.isWindowSDK ? this.sendFileImpl("img", e) : this.refs.picture.click()
        },
        pictureChange: function() {
            var e, t = this, n = "chatrooms" === Demo.selectedCate, o = WebIM.utils.getFileUrl(t.refs.picture);
            if (!o.filename)
                return t.refs.picture.value = null,
                !1;
            if (!Demo.IMGTYPE[o.filetype.toLowerCase()])
                return t.refs.picture.value = null,
                void Demo.api.NotifyError(Demo.lan.invalidType + ": " + o.filetype);
            var r = Demo.conn.getUniqueId()
              , i = new WebIM.message("img",r);
            i.set({
                apiUrl: Demo.conn.apiUrl,
                file: o,
                to: Demo.selected,
                roomType: n,
                onFileUploadError: function(e) {
                    t.refs.picture.value = null;
                    var n = {
                        data: Demo.lan.sendImageFailed,
                        from: Demo.user,
                        to: Demo.selected
                    };
                    Demo.api.addToChatRecord(n, "txt"),
                    Demo.api.appendMsg(n, "txt")
                },
                onFileUploadComplete: function(n) {
                    e = ("https:" != location.protocol && WebIM.config.isHttpDNS ? Demo.conn.apiUrl + n.uri.substr(n.uri.indexOf("/", 9)) : n.uri) + "/" + n.entities[0].uuid,
                    t.refs.picture.value = null;
                    var o = {
                        data: e,
                        from: Demo.user,
                        to: Demo.selected,
                        id: r
                    };
                    Demo.api.addToChatRecord(o, "img"),
                    Demo.api.appendMsg(o, "img")
                },
                success: function(e) {},
                flashUpload: WebIM.flashUpload
            }),
            "groups" === Demo.selectedCate ? i.setGroup(Demo.groupType) : n && i.setGroup(Demo.groupType),
            Demo.conn.send(i.body)
        },
        sendAudio: function(e) {
            WebIM.config.isWindowSDK ? this.sendFileImpl("aud", e) : this.refs.audio.click()
        },
        sendAudioMsg: function(e, t) {
            var n, o = new WebIM.message("audio",Demo.conn.getUniqueId()), r = "chatrooms" === Demo.selectedCate, i = this;
            o.set({
                apiUrl: Demo.conn.apiUrl,
                file: e,
                to: Demo.selected,
                roomType: r,
                length: t || 0,
                onFileUploadError: function(e) {
                    i.refs.audio.value = null;
                    var t = {
                        data: Demo.lan.sendAudioFailed,
                        from: Demo.user,
                        to: Demo.selected
                    };
                    Demo.api.addToChatRecord(t, "txt"),
                    Demo.api.appendMsg(t, "txt")
                },
                onFileUploadComplete: function(e) {
                    n = ("https:" != location.protocol && WebIM.config.isHttpDNS ? Demo.conn.apiUrl + e.uri.substr(e.uri.indexOf("/", 9)) : e.uri) + "/" + e.entities[0].uuid,
                    i.refs.audio.value = null
                },
                success: function(e, o) {
                    var r = {
                        data: n,
                        from: Demo.user,
                        to: Demo.selected,
                        id: o,
                        length: t
                    };
                    Demo.api.addToChatRecord(r, "aud"),
                    Demo.api.appendMsg(r, "aud")
                },
                flashUpload: WebIM.flashUpload
            }),
            "groups" === Demo.selectedCate ? o.setGroup(Demo.groupType) : r && o.setGroup(Demo.groupType),
            Demo.conn.send(o.body)
        },
        audioChange: function() {
            var e = this
              , t = WebIM.utils.getFileUrl(e.refs.audio);
            if (!t.filename)
                return e.refs.audio.value = null,
                !1;
            if (!Demo.AUDIOTYPE[t.filetype.toLowerCase()])
                return e.refs.audio.value = null,
                void Demo.api.NotifyError(Demo.lan.invalidType + ": " + t.filetype);
            if ((null === WebIM.utils.getIEVersion || WebIM.utils.getIEVersion > 9) && window.Audio) {
                var n = document.createElement("audio");
                n.oncanplay = function() {
                    e.sendAudioMsg(t, Math.ceil(this.duration)),
                    n = null
                }
                ,
                n.src = t.url
            }
        },
        sendFile: function(e) {
            var t = Demo.conn.getUniqueId();
            this.setState({
                fileId: t
            }),
            WebIM.config.isWindowSDK ? this.sendFileImpl("file", e) : this.refs.file.click()
        },
        sendFileImpl: function sendFileImpl(type, chatType) {
            var is_chatroom = "chatrooms" === Demo.selectedCate ? "true" : "false"
              , is_group = "chatrooms" === Demo.selectedCate || "groups" === Demo.selectedCate ? "groupchat" : "singlechat";
            WebIM.doQuery('{"type":"sendFileMessage","to":"' + Demo.selected + '","message_type":"' + type + '","group":"' + is_group + '","chatType":"' + chatType + '","roomType":"' + is_chatroom + '"}', function(response) {
                var res = eval("(" + response + ")")
                  , url = decodeURI(res.url)
                  , pathSplitted = url.split("\\");
                url = url.replace(/\\/gi, "/");
                var fileurl = "file:///" + url;
                Demo.api.appendMsg({
                    id: res.id,
                    data: fileurl,
                    filename: pathSplitted[pathSplitted.length - 1],
                    from: Demo.user,
                    to: Demo.selected
                }, type)
            }, function(e, t) {
                alert(e + " - " + t)
            })
        },
        fileChange: function() {
            var e = this
              , t = this.state.fileId
              , n = new WebIM.message("file",t)
              , o = "chatrooms" === Demo.selectedCate
              , r = WebIM.utils.getFileUrl(e.refs.file)
              , i = WebIM.utils.getFileSize(e.refs.file)
              , a = WebIM.utils.getFileLength(e.refs.file)
              , s = r.filename;
            return i ? r.filename ? (n.set({
                apiUrl: Demo.conn.apiUrl,
                file: r,
                filename: s,
                to: Demo.selected,
                file_length: 3424134,
                roomType: o,
                ext: {
                    fileSize: i,
                    file_length: a
                },
                onFileUploadError: function(t) {
                    e.refs.file.value = null;
                    var n = {
                        data: Demo.lan.sendFileFailed,
                        from: Demo.user,
                        to: Demo.selected
                    };
                    Demo.api.addToChatRecord(n, "txt"),
                    Demo.api.appendMsg(n, "txt")
                },
                onFileUploadComplete: function(n) {
                    var o = ("https:" != location.protocol && WebIM.config.isHttpDNS ? Demo.conn.apiUrl + n.uri.substr(n.uri.indexOf("/", 9)) : n.uri) + "/" + n.entities[0].uuid;
                    e.refs.file.value = null;
                    var r = {
                        data: o,
                        filename: s,
                        from: Demo.user,
                        to: Demo.selected,
                        id: t
                    };
                    console.log("FileChange upload completed: ", r),
                    console.log("Data: ", n),
                    Demo.api.addToChatRecord(r, "file"),
                    Demo.api.appendMsg(r, "file")
                },
                success: function(e) {},
                flashUpload: WebIM.flashUpload
            }),
            "groups" === Demo.selectedCate ? n.setGroup(Demo.groupType) : o && n.setGroup(Demo.groupType),
            void Demo.conn.send(n.body)) : (e.refs.file.value = null,
            !1) : (Demo.api.NotifyError(Demo.lan.fileOverSize),
            !1)
        },
        render: function() {
            return React.createElement("div", {
                className: this.props.show ? "webim-chat" : "webim-chat hide"
            }, React.createElement(LeftBar, {
                cur: this.state.cur,
                update: this.update
            }), React.createElement(Contact, {
                cur: this.state.cur,
                curNode: this.state.curNode,
                updateNode: this.updateNode,
                update: this.update,
                friends: this.state.friends,
                blacklist: this.state.blacklist,
                groups: this.state.groups,
                chatrooms: this.state.chatrooms,
                strangers: this.state.strangers,
                getChatroom: this.getChatroom,
                loading: this.state.contact_loading_show
            }), this.state.windows, React.createElement("input", {
                ref: "picture",
                onChange: this.pictureChange,
                type: "file",
                className: "hide"
            }), React.createElement("input", {
                ref: "audio",
                onChange: this.audioChange,
                type: "file",
                className: "hide"
            }), React.createElement("input", {
                ref: "file",
                onChange: this.fileChange,
                type: "file",
                className: "hide"
            }), React.createElement("input", {
                id: "uploadShim",
                type: "file",
                className: "hide"
            }), React.createElement("div", {
                ref: "rtcWrapper"
            }))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(172)
      , i = n(173)
      , a = n(174);
    e.exports = o.createClass({
        displayName: "exports",
        getInitialState: function() {
            return null
        },
        shouldComponentUpdate: function(e, t) {
            return e.cur !== Demo.selectedCate
        },
        updateFriend: function() {
            Demo.selectedCate = "friends",
            this.props.update("friend", !0)
        },
        updateGroup: function() {
            Demo.selectedCate = "groups",
            this.props.update("group", !0)
        },
        updateStranger: function() {
            Demo.selectedCate = "strangers",
            this.props.update("stranger", !0)
        },
        updateChatroom: function() {
            Demo.selectedCate = "chatrooms",
            this.props.update("chatroom", !0)
        },
        render: function() {
            return o.createElement("div", {
                className: "webim-leftbar"
            }, o.createElement(r, {
                className: "webim-profile-avatar small",
                title: Demo.user
            }), o.createElement("div", {
                className: "username"
            }, Demo.user), o.createElement(i, {
                name: "friend",
                update: this.updateFriend,
                cur: this.props.cur
            }), o.createElement(i, {
                name: "group",
                update: this.updateGroup,
                cur: this.props.cur
            }), o.createElement(i, {
                name: "chatroom",
                update: this.updateChatroom,
                cur: this.props.cur
            }), o.createElement(i, {
                name: "stranger",
                update: this.updateStranger,
                cur: this.props.cur
            }), o.createElement(a, {
                username: Demo.user
            }))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12);
    e.exports = o.createClass({
        displayName: "exports",
        getInitialState: function() {
            return null
        },
        render: function() {
            var e = this.props.src || "demo/images/default.png"
              , t = this.props.className ? " " + this.props.className : "";
            return o.createElement("div", {
                className: "webim-avatar-icon" + t
            }, o.createElement("img", {
                className: "w100",
                src: e,
                title: this.props.title
            }))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12);
    e.exports = o.createClass({
        displayName: "exports",
        update: function() {
            var e = this.refs.icon
              , t = e.getAttribute("data-count");
            0 == t && (e.style.display = "none"),
            this.props.update()
        },
        render: function() {
            var e, t = this.props.cur === this.props.name ? " selected" : "", n = "", r = "";
            switch (this.props.name) {
            case "group":
                e = "N",
                r = Demo.lan.groups;
                break;
            case "stranger":
                e = "O",
                r = Demo.lan.strangers;
                break;
            case "chatroom":
                e = "F",
                r = Demo.lan.chatrooms;
                break;
            default:
                e = "E",
                n = " top50",
                r = Demo.lan.friends
            }
            return o.createElement("div", {
                id: this.props.name + "s",
                className: "rel" + n,
                onClick: this.update
            }, o.createElement("i", {
                title: r,
                className: "webim-leftbar-icon font small" + t
            }, e), o.createElement("i", {
                ref: "icon",
                className: "webim-msg-prompt webim-msg-icon-prompt",
                "data-count": "0",
                style: {
                    display: "none"
                }
            }))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(175)
      , i = n(176)
      , a = n(179)
      , s = n(180);
    e.exports = o.createClass({
        displayName: "exports",
        getInitialState: function() {
            return {
                hide: "hide"
            }
        },
        update: function() {
            this.setState({
                hide: this.state.hide ? "" : " hide"
            })
        },
        addFriends: function() {
            r.show(),
            this.update()
        },
        createGroup: function() {
            i.show(),
            this.update()
        },
        joinPublicGroup: function() {
            a.show(),
            this.update()
        },
        showBlacklist: function() {
            s.show(),
            this.update()
        },
        logout: function() {
            Demo.selected = "",
            Demo.api.logout(WebIM.statusCode.WEBIM_CONNCTION_CLIENT_LOGOUT)
        },
        restUpdateGroups: function(e) {
            this.props.restUpdateGroups(e)
        },
        render: function() {
            var e = this.state.hide ? " " + this.state.hide : "";
            return o.createElement("div", null, o.createElement("i", {
                className: "webim-operations-icon font xsmaller",
                onClick: this.update
            }, "M"), o.createElement("ul", {
                className: "webim-operations" + e
            }, o.createElement("li", {
                onClick: this.addFriends
            }, o.createElement("i", {
                className: "font smallest"
            }, "L"), o.createElement("span", null, Demo.lan.addAFriend)), o.createElement("li", {
                onClick: this.joinPublicGroup
            }, o.createElement("i", {
                className: "font smallest"
            }, "L"), o.createElement("span", null, Demo.lan.joinPublicGroup)), o.createElement("li", {
                onClick: this.showBlacklist
            }, o.createElement("i", {
                className: "font smallest"
            }, "n"), o.createElement("span", null, Demo.lan.blacklist)), o.createElement("li", {
                onClick: this.createGroup
            }, o.createElement("i", {
                className: "font smallest"
            }, "L"), o.createElement("span", null, Demo.lan.createGroup)), o.createElement("li", {
                onClick: this.logout
            }, o.createElement("i", {
                className: "font smallest"
            }, "Q"), o.createElement("span", null, Demo.lan.quit, "(", this.props.username, ")"))))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(164)
      , i = document.getElementById("components")
      , a = document.createElement("div");
    i.appendChild(a);
    var s = n(168)
      , l = s.Button
      , c = s.Input
      , u = o.createClass({
        displayName: "AddMember",
        addMember: function() {
            var e = this.refs.input.refs.input.value;
            return e ? e == Demo.user ? (Demo.api.NotifyError(Demo.lan.addFriendSelfInvalid),
            void this.close()) : 1 == Demo.roster[e] ? (Demo.api.NotifyError(e + " " + Demo.lan.addFriendRepeat),
            void this.close()) : (WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"addFriend","to":"' + e + '","message":"' + Demo.user + Demo.lan.request + '"}', function(e) {
                alert(Demo.lan.contact_added)
            }, function(e, t) {
                Demo.api.NotifyError("addMember:" + e + " " + t)
            }) : Demo.conn.subscribe({
                to: e,
                message: Demo.user + Demo.lan.request
            }),
            void this.close()) : void Demo.api.NotifyError(Demo.lan.username + Demo.lan.notEmpty)
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        render: function() {
            return o.createElement("div", {
                className: "webim-friend-options"
            }, o.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), o.createElement("div", {
                className: "webim-dialog"
            }, o.createElement("h3", null, Demo.lan.addAFriend), o.createElement("div", {
                ref: "content"
            }, o.createElement(c, {
                defaultFocus: "true",
                ref: "input",
                placeholder: Demo.lan.username
            })), o.createElement(l, {
                text: Demo.lan.add,
                onClick: this.addMember,
                className: "webim-dialog-button"
            }), o.createElement("span", {
                className: "font",
                onClick: this.close
            }, "A")))
        }
    });
    e.exports = {
        show: function() {
            r.render(o.createElement(u, {
                onClose: this.close
            }), a)
        },
        close: function() {
            r.unmountComponentAtNode(a)
        }
    }
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var r = n(177)
      , i = o(r)
      , a = n(12)
      , s = n(164)
      , l = n(178)
      , c = document.getElementById("components")
      , u = document.createElement("div");
    c.appendChild(u);
    var p = n(168)
      , d = p.Button
      , m = p.Input
      , f = (p.Checkbox,
    p.Radio,
    a.createClass({
        displayName: "FridendList",
        getInitialState: function() {
            var e = []
              , t = 0;
            for (var n in this.props.optionData)
                e.push({
                    id: t++,
                    text: n
                });
            return {
                options: e,
                value: []
            }
        },
        render: function() {
            return a.createElement("div", {
                className: "container"
            }, a.createElement(i.default, {
                ref: "multiSelected",
                options: this.state.options,
                value: this.state.value,
                nameText: Demo.lan.groupMemberLabel,
                label: Demo.lan.chooseGroupMember,
                selectedLabel: Demo.lan.selectedLabel
            }))
        }
    }))
      , h = a.createClass({
        displayName: "CreateGroup",
        getInitialState: function() {
            return {
                selectedOption: "option1",
                selectedOption2: "option3",
                allowInvite: !0,
                colors: []
            }
        },
        onSubmit: function() {
            var e = this.refs.input.refs.input.value
              , t = this.refs.textarea.value
              , n = this.state.selectedOption
              , o = this.state.selectedOption2
              , r = []
              , i = this.refs.friendList.refs.multiSelected.value()
              , a = this.state.allowInvite;
            if (!e)
                return void Demo.api.NotifyError(Demo.lan.groupNameNotEmpty);
            l.each(i, function(e, t) {
                r.push(e.text)
            });
            var s = ["PUBLIC_JOIN_APPROVAL", "PUBLIC_JOIN_OPEN", "PRIVATE_OWNER_INVITE", "PRIVATE_MEMBER_INVITE"]
              , c = "option1" == n ? 0 : 1
              , u = "option3" == o ? 0 : 1
              , p = s[2 * c + u];
            if (WebIM.config.isWindowSDK)
                WebIM.doQuery('{"type":"createGroup","subject":"' + e + '","description":"' + t + '","welcomeMessage":"","style":"' + p + '","maxUserCount":"200","members":' + JSON.stringify(r) + "}", function(e) {
                    Demo.api.NotifySuccess("createGroup successfully")
                }, function(e, t) {
                    Demo.api.NotifyError("onSubmit:" + e)
                });
            else {
                Demo.createGroupName = e;
                var d = !1;
                "PUBLIC_JOIN_OPEN" != p && "PUBLIC_JOIN_APPROVAL" != p || (d = !0);
                var m = 0 == u
                  , f = {
                    data: {
                        groupname: e,
                        desc: t,
                        members: r,
                        public: d,
                        approval: m,
                        allowinvites: a
                    },
                    success: function(e) {},
                    error: function() {}
                };
                Demo.conn.createGroupNew(f)
            }
            this.close()
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        handleOptionChange: function(e) {
            this.setState({
                selectedOption: e.target.value
            })
        },
        handleOptionChange2: function(e) {
            this.setState({
                selectedOption2: e.target.value
            })
        },
        handleInviteChange: function(e) {
            var t = e.target.checked;
            this.setState({
                allowInvite: t
            })
        },
        render: function() {
            return a.createElement("div", {
                className: "webim-friend-options"
            }, a.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), a.createElement("div", {
                className: "webim-dialog webim-dialog-2"
            }, a.createElement("h3", null, Demo.lan.createGroup), a.createElement("div", {
                ref: "content"
            }, a.createElement(m, {
                defaultFocus: "true",
                ref: "input",
                placeholder: Demo.lan.groupSubject
            }), a.createElement("br", null), a.createElement("textarea", {
                ref: "textarea",
                placeholder: Demo.lan.groupDescription
            }), a.createElement("br", null), a.createElement("br", null), a.createElement("div", null, a.createElement("label", null, Demo.lan.groupPermission, ":"), a.createElement("label", null, a.createElement("input", {
                className: "radio",
                type: "radio",
                value: "option1",
                checked: "option1" === this.state.selectedOption,
                onChange: this.handleOptionChange
            }), a.createElement("span", {
                className: "radio_span"
            }, "公有群")), a.createElement("label", null, a.createElement("input", {
                className: "radio",
                type: "radio",
                value: "option2",
                checked: "option2" === this.state.selectedOption,
                onChange: this.handleOptionChange
            }), a.createElement("span", {
                className: "radio_span"
            }, "私有群"))), a.createElement("div", {
                className: "option1" === this.state.selectedOption ? "" : "hide"
            }, a.createElement("label", null, Demo.lan.groupMemberPermission, ":"), a.createElement("label", null, a.createElement("input", {
                className: "radio",
                type: "radio",
                value: "option3",
                checked: "option3" === this.state.selectedOption2,
                onChange: this.handleOptionChange2
            }), a.createElement("span", {
                className: "radio_span"
            }, "option1" === this.state.selectedOption ? "审批" : "不允许邀请")), a.createElement("label", null, a.createElement("input", {
                className: "radio",
                type: "radio",
                value: "option4",
                checked: "option4" === this.state.selectedOption2,
                onChange: this.handleOptionChange2
            }), a.createElement("span", {
                className: "radio_span"
            }, "option1" === this.state.selectedOption ? "随便加" : "允许"))), a.createElement("div", {
                className: "option1" === this.state.selectedOption ? "hide" : ""
            }, a.createElement("label", null, Demo.lan.allowInvite, ":"), a.createElement("label", null, a.createElement("input", {
                className: "checkbox",
                type: "checkbox",
                defaultChecked: "checked",
                onChange: this.handleInviteChange
            })))), a.createElement("div", null, a.createElement(f, {
                ref: "friendList",
                optionData: Demo.roster
            })), a.createElement(d, {
                text: Demo.lan.add,
                onClick: this.onSubmit,
                className: "webim-dialog-button-left"
            }), a.createElement(d, {
                text: Demo.lan.cancel,
                onClick: this.close,
                className: "webim-dialog-button"
            }), a.createElement("span", {
                className: "font",
                onClick: this.close
            }, "A")))
        }
    });
    e.exports = {
        show: function() {
            s.render(a.createElement(h, {
                onClose: this.close
            }), u)
        },
        close: function() {
            s.unmountComponentAtNode(u)
        }
    }
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    var i = n(12)
      , a = o(i)
      , s = 0
      , l = function(e) {
        e && (e.preventDefault(),
        e.stopPropagation())
    }
      , c = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          , t = arguments[1];
        return e.includes(t) ? e.replace(t, "") : e.trim() + " " + t
    }
      , u = a.default.createClass({
        displayName: "MultipleSelectBoxList",
        getInitialState: function() {
            return {
                id: "react-multi-select-box-" + ++s,
                open: !1,
                focusedIndex: -1,
                pendingValue: this.props.value,
                value: this.props.value,
                options: this.props.options,
                clickingOption: !1,
                blurTimeout: null
            }
        },
        getDefaultProps: function() {
            return {
                label: "Choose ...",
                closeText: "close",
                clearText: "clear",
                confirmText: "ok",
                cancelText: "cancel",
                selectedLabel: "selected ",
                nameText: "",
                value: [],
                options: [],
                async: !1,
                onConfirmCallback: function() {},
                onCancelCallback: function() {}
            }
        },
        componentWillMount: function() {
            var e = this;
            0 === this.state.options.length && this.props.async && "function" == typeof this.props.asyncFetch && this.props.asyncFetch(-1).then(function(t) {
                e.setState({
                    options: t
                })
            })
        },
        componentWillReceiveProps: function(e) {
            this.setState({
                pendingValue: e.value,
                value: e.value
            })
        },
        label: function() {
            var e = this.state.value.map(function(e) {
                return e.text
            });
            return e.length > 0 ? e.join(", ") : this.props.label
        },
        value: function() {
            return this.state.value
        },
        hasValue: function() {
            return this.value().length > 0
        },
        handleConfirm: function() {
            var e = this
              , t = this.state.pendingValue;
            this.setState({
                open: !1,
                value: t
            }, function() {
                e.props.onConfirmCallback(e.state.value)
            })
        },
        handleCancel: function() {
            var e = this
              , t = this.state.value;
            this.setState({
                open: !1,
                pendingValue: t
            }, function() {
                e.props.onCancelCallback()
            })
        },
        isInclude: function(e, t) {
            var n = !1
              , o = !0
              , r = !1
              , i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done); o = !0) {
                    var l = a.value;
                    if (t == l.id) {
                        n = !0;
                        break
                    }
                }
            } catch (e) {
                r = !0,
                i = e
            } finally {
                try {
                    !o && s.return && s.return()
                } finally {
                    if (r)
                        throw i
                }
            }
            return n
        },
        getPendingValueIndex: function(e) {
            var t = 0
              , n = -1
              , o = this.state.pendingValue
              , r = !0
              , i = !1
              , a = void 0;
            try {
                for (var s, l = o[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
                    var c = s.value;
                    if (e == c.id) {
                        n = t;
                        break
                    }
                    t++
                }
            } catch (e) {
                i = !0,
                a = e
            } finally {
                try {
                    !r && l.return && l.return()
                } finally {
                    if (i)
                        throw a
                }
            }
            return n
        },
        toggleOpenClose: function(e) {
            return l(e),
            this.setState({
                open: !this.state.open
            }),
            this.state.open ? this.setState({
                open: !1
            }) : void this.handleOpen()
        },
        handleOpen: function(e) {
            var t = this;
            l(e),
            this.setState({
                open: !0
            }, function() {
                t.refs.selectArea.focus()
            })
        },
        handleClose: function(e) {
            l(e),
            this.clickingOption || this.setState({
                open: !1,
                focusedIndex: -1
            }),
            this.handleCancel()
        },
        handleFocus: function() {
            clearTimeout(this.blurTimeout)
        },
        handleBlur: function() {
            clearTimeout(this.blurTimeout),
            this.blurTimeout = setTimeout(this.handleClose, 0)
        },
        handleMouseDown: function() {
            this.clickingOption = !0
        },
        handleSelect: function(e, t) {
            var n = this
              , o = this.state.pendingValue;
            if (t.target.className.includes("react-multi-select-box-option-selected")) {
                var i = this.getPendingValueIndex(e.id);
                setTimeout(function() {
                    i >= 0 && n.setState({
                        pendingValue: [].concat(r(o.slice(0, i)), r(o.slice(i + 1)))
                    })
                }, 10)
            } else
                this.setState({
                    pendingValue: [].concat(r(o), [e])
                })
        },
        handleSelectedOptionClick: function(e, t) {
            var n = this.state.pendingValue;
            this.setState({
                pendingValue: [].concat(r(n.slice(0, e)), r(n.slice(e + 1)))
            })
        },
        handleToggleOption: function(e, t, n, o) {
            var r = this
              , i = o.currentTarget.firstChild
              , a = o.currentTarget.parentNode.lastChild;
            !this.props.async || n ? (i.setAttribute("class", c(i.getAttribute("class"), "expand")),
            a.setAttribute("class", c(a.getAttribute("class"), "react-multi-select-hide"))) : this.props.asyncFetch(e).then(function(e) {
                r.setState({
                    options: r.setOption(r.state.options, e, t)
                }),
                i.setAttribute("class", c(i.getAttribute("class"), "expand")),
                a.setAttribute("class", c(a.getAttribute("class"), "react-multi-select-hide"))
            })
        },
        setOption: function(e, t, n) {
            var o = n.split("-")
              , r = e
              , i = !0
              , a = !1
              , s = void 0;
            try {
                for (var l, c = o[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                    var u = l.value;
                    u = +u,
                    r[u].sub || (r[u].sub = []),
                    r = r[u].sub
                }
            } catch (e) {
                a = !0,
                s = e
            } finally {
                try {
                    !i && c.return && c.return()
                } finally {
                    if (a)
                        throw s
                }
            }
            return Array.prototype.push.apply(r, t),
            e
        },
        renderButton: function() {
            var e = this.label()
              , t = this.hasValue() ? e : "";
            return a.default.createElement("button", {
                className: "react-multi-select-box",
                ref: "button",
                tabIndex: "0",
                onClick: this.toggleOpenClose
            }, a.default.createElement("div", {
                className: "react-multi-select-box-label",
                title: t
            }, e))
        },
        renderOption: function(e, t, n) {
            return e.hasOwnProperty("subLen") || e.hasOwnProperty("sub") ? this.renderClassification(e, t, n) : this.renderRow(e)
        },
        renderClassification: function(e, t, n) {
            var o = this
              , r = !((!e.hasOwnProperty("sub") || e.sub.length != e.subLen) && e.hasOwnProperty("subLen"));
            return "" === n ? n = e.id : n += "-" + e.id,
            a.default.createElement("li", {
                key: n,
                className: "react-multi-select-classification"
            }, a.default.createElement("div", {
                className: "classification",
                onClick: this.handleToggleOption.bind(this, n, t, r),
                loaded: r
            }, a.default.createElement("i", {
                className: "react-multi-select-list-arrow"
            }), a.default.createElement("span", null, e.text + "(" + (e.subLen ? e.subLen : e.sub ? e.sub.length : 0) + ")")), a.default.createElement("ul", {
                key: "sub" + e.id,
                className: "react-multi-select-sub-options react-multi-select-hide"
            }, r && e.sub.map(function(e, r) {
                return o.renderOption(e, t + "-" + r, n)
            })))
        },
        renderRow: function(e) {
            var t = "react-multi-select-box-option";
            return this.isInclude(this.state.pendingValue, e.id) && (t += " react-multi-select-box-option-selected"),
            a.default.createElement("li", {
                key: e.id,
                className: "react-multi-select-list-option"
            }, a.default.createElement("div", {
                className: t,
                value: e.id,
                label: e.text,
                onClick: this.handleSelect.bind(this, e)
            }, e.text))
        },
        renderSelectOption: function() {
            var e = this;
            return a.default.createElement("ul", {
                className: "react-multi-select-col"
            }, this.state.options.map(function(t, n) {
                return e.renderOption(t, n + "", "")
            }))
        },
        renderSelectedOption: function(e, t) {
            return a.default.createElement("li", {
                key: e.id,
                className: "selected-option-row",
                onClick: this.handleSelectedOptionClick.bind(this, t)
            }, e.text)
        },
        renderSelectedValue: function() {
            var e = this;
            return a.default.createElement("div", {
                className: "react-multi-select-col"
            }, a.default.createElement("div", {
                className: "react-multiple-select-type-name"
            }, this.props.selectedLabel + this.props.nameText, "："), a.default.createElement("ul", null, this.state.pendingValue.map(function(t, n) {
                return e.renderSelectedOption(t, n)
            })))
        },
        renderSelectOptBtn: function() {
            return a.default.createElement("div", {
                className: "react-multi-select-area-btn"
            }, a.default.createElement("button", {
                className: "react-multi-select-btn",
                onClick: this.handleConfirm
            }, this.props.confirmText), a.default.createElement("button", {
                className: "react-multi-select-btn react-multi-select-btn-white",
                onClick: this.handleCancel
            }, this.props.cancelText))
        },
        renderSelectArea: function() {
            var e = "react-multi-select-area";
            return this.state.open || (e += " react-multi-select-box-hidden"),
            a.default.createElement("div", {
                className: e,
                ref: "selectArea",
                tabIndex: "0",
                onBlur: this.handleBlur,
                onFocus: this.handleFocus
            }, a.default.createElement("div", {
                className: "react-multi-select-panel",
                tabIndex: "-1"
            }, this.renderSelectOption(), a.default.createElement("div", {
                className: "react-multi-select-sign"
            }, a.default.createElement("i", null)), this.renderSelectedValue()), this.renderSelectOptBtn())
        },
        render: function() {
            var e = "react-multi-select-box-container";
            return this.props.className && (e += " " + this.props.className),
            this.hasValue() || (e += " react-multi-select-box-empty"),
            a.default.createElement("div", {
                className: e,
                id: this.state.id
            }, this.renderButton(), this.renderSelectArea())
        }
    });
    e.exports = u
}
, function(e, t, n) {
    var o, r;
    (function() {
        function n(e) {
            function t(t, n, o, r, i, a) {
                for (; i >= 0 && i < a; i += e) {
                    var s = r ? r[i] : i;
                    o = n(o, t[s], s, t)
                }
                return o
            }
            return function(n, o, r, i) {
                o = D(o, i, 4);
                var a = !k(n) && E.keys(n)
                  , s = (a || n).length
                  , l = e > 0 ? 0 : s - 1;
                return arguments.length < 3 && (r = n[a ? a[l] : l],
                l += e),
                t(n, o, r, a, l, s)
            }
        }
        function i(e) {
            return function(t, n, o) {
                n = C(n, o);
                for (var r = M(t), i = e > 0 ? 0 : r - 1; i >= 0 && i < r; i += e)
                    if (n(t[i], i, t))
                        return i;
                return -1
            }
        }
        function a(e, t, n) {
            return function(o, r, i) {
                var a = 0
                  , s = M(o);
                if ("number" == typeof i)
                    e > 0 ? a = i >= 0 ? i : Math.max(i + s, a) : s = i >= 0 ? Math.min(i + 1, s) : i + s + 1;
                else if (n && i && s)
                    return i = n(o, r),
                    o[i] === r ? i : -1;
                if (r !== r)
                    return i = t(f.call(o, a, s), E.isNaN),
                    i >= 0 ? i + a : -1;
                for (i = e > 0 ? a : s - 1; i >= 0 && i < s; i += e)
                    if (o[i] === r)
                        return i;
                return -1
            }
        }
        function s(e, t) {
            var n = P.length
              , o = e.constructor
              , r = E.isFunction(o) && o.prototype || p
              , i = "constructor";
            for (E.has(e, i) && !E.contains(t, i) && t.push(i); n--; )
                i = P[n],
                i in e && e[i] !== r[i] && !E.contains(t, i) && t.push(i)
        }
        var l = this
          , c = l._
          , u = Array.prototype
          , p = Object.prototype
          , d = Function.prototype
          , m = u.push
          , f = u.slice
          , h = p.toString
          , g = p.hasOwnProperty
          , v = Array.isArray
          , b = Object.keys
          , y = d.bind
          , w = Object.create
          , _ = function() {}
          , E = function(e) {
            return e instanceof E ? e : this instanceof E ? void (this._wrapped = e) : new E(e)
        };
        "undefined" != typeof e && e.exports && (t = e.exports = E),
        t._ = E,
        E.VERSION = "1.8.3";
        var D = function(e, t, n) {
            if (void 0 === t)
                return e;
            switch (null == n ? 3 : n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                }
                ;
            case 2:
                return function(n, o) {
                    return e.call(t, n, o)
                }
                ;
            case 3:
                return function(n, o, r) {
                    return e.call(t, n, o, r)
                }
                ;
            case 4:
                return function(n, o, r, i) {
                    return e.call(t, n, o, r, i)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
          , C = function(e, t, n) {
            return null == e ? E.identity : E.isFunction(e) ? D(e, t, n) : E.isObject(e) ? E.matcher(e) : E.property(e)
        };
        E.iteratee = function(e, t) {
            return C(e, t, 1 / 0)
        }
        ;
        var x = function(e, t) {
            return function(n) {
                var o = arguments.length;
                if (o < 2 || null == n)
                    return n;
                for (var r = 1; r < o; r++)
                    for (var i = arguments[r], a = e(i), s = a.length, l = 0; l < s; l++) {
                        var c = a[l];
                        t && void 0 !== n[c] || (n[c] = i[c])
                    }
                return n
            }
        }
          , N = function(e) {
            if (!E.isObject(e))
                return {};
            if (w)
                return w(e);
            _.prototype = e;
            var t = new _;
            return _.prototype = null,
            t
        }
          , I = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }
          , S = Math.pow(2, 53) - 1
          , M = I("length")
          , k = function(e) {
            var t = M(e);
            return "number" == typeof t && t >= 0 && t <= S
        };
        E.each = E.forEach = function(e, t, n) {
            t = D(t, n);
            var o, r;
            if (k(e))
                for (o = 0,
                r = e.length; o < r; o++)
                    t(e[o], o, e);
            else {
                var i = E.keys(e);
                for (o = 0,
                r = i.length; o < r; o++)
                    t(e[i[o]], i[o], e)
            }
            return e
        }
        ,
        E.map = E.collect = function(e, t, n) {
            t = C(t, n);
            for (var o = !k(e) && E.keys(e), r = (o || e).length, i = Array(r), a = 0; a < r; a++) {
                var s = o ? o[a] : a;
                i[a] = t(e[s], s, e)
            }
            return i
        }
        ,
        E.reduce = E.foldl = E.inject = n(1),
        E.reduceRight = E.foldr = n(-1),
        E.find = E.detect = function(e, t, n) {
            var o;
            if (o = k(e) ? E.findIndex(e, t, n) : E.findKey(e, t, n),
            void 0 !== o && o !== -1)
                return e[o]
        }
        ,
        E.filter = E.select = function(e, t, n) {
            var o = [];
            return t = C(t, n),
            E.each(e, function(e, n, r) {
                t(e, n, r) && o.push(e)
            }),
            o
        }
        ,
        E.reject = function(e, t, n) {
            return E.filter(e, E.negate(C(t)), n)
        }
        ,
        E.every = E.all = function(e, t, n) {
            t = C(t, n);
            for (var o = !k(e) && E.keys(e), r = (o || e).length, i = 0; i < r; i++) {
                var a = o ? o[i] : i;
                if (!t(e[a], a, e))
                    return !1
            }
            return !0
        }
        ,
        E.some = E.any = function(e, t, n) {
            t = C(t, n);
            for (var o = !k(e) && E.keys(e), r = (o || e).length, i = 0; i < r; i++) {
                var a = o ? o[i] : i;
                if (t(e[a], a, e))
                    return !0
            }
            return !1
        }
        ,
        E.contains = E.includes = E.include = function(e, t, n, o) {
            return k(e) || (e = E.values(e)),
            ("number" != typeof n || o) && (n = 0),
            E.indexOf(e, t, n) >= 0
        }
        ,
        E.invoke = function(e, t) {
            var n = f.call(arguments, 2)
              , o = E.isFunction(t);
            return E.map(e, function(e) {
                var r = o ? t : e[t];
                return null == r ? r : r.apply(e, n)
            })
        }
        ,
        E.pluck = function(e, t) {
            return E.map(e, E.property(t))
        }
        ,
        E.where = function(e, t) {
            return E.filter(e, E.matcher(t))
        }
        ,
        E.findWhere = function(e, t) {
            return E.find(e, E.matcher(t))
        }
        ,
        E.max = function(e, t, n) {
            var o, r, i = -(1 / 0), a = -(1 / 0);
            if (null == t && null != e) {
                e = k(e) ? e : E.values(e);
                for (var s = 0, l = e.length; s < l; s++)
                    o = e[s],
                    o > i && (i = o)
            } else
                t = C(t, n),
                E.each(e, function(e, n, o) {
                    r = t(e, n, o),
                    (r > a || r === -(1 / 0) && i === -(1 / 0)) && (i = e,
                    a = r)
                });
            return i
        }
        ,
        E.min = function(e, t, n) {
            var o, r, i = 1 / 0, a = 1 / 0;
            if (null == t && null != e) {
                e = k(e) ? e : E.values(e);
                for (var s = 0, l = e.length; s < l; s++)
                    o = e[s],
                    o < i && (i = o)
            } else
                t = C(t, n),
                E.each(e, function(e, n, o) {
                    r = t(e, n, o),
                    (r < a || r === 1 / 0 && i === 1 / 0) && (i = e,
                    a = r)
                });
            return i
        }
        ,
        E.shuffle = function(e) {
            for (var t, n = k(e) ? e : E.values(e), o = n.length, r = Array(o), i = 0; i < o; i++)
                t = E.random(0, i),
                t !== i && (r[i] = r[t]),
                r[t] = n[i];
            return r
        }
        ,
        E.sample = function(e, t, n) {
            return null == t || n ? (k(e) || (e = E.values(e)),
            e[E.random(e.length - 1)]) : E.shuffle(e).slice(0, Math.max(0, t))
        }
        ,
        E.sortBy = function(e, t, n) {
            return t = C(t, n),
            E.pluck(E.map(e, function(e, n, o) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, o)
                }
            }).sort(function(e, t) {
                var n = e.criteria
                  , o = t.criteria;
                if (n !== o) {
                    if (n > o || void 0 === n)
                        return 1;
                    if (n < o || void 0 === o)
                        return -1
                }
                return e.index - t.index
            }), "value")
        }
        ;
        var R = function(e) {
            return function(t, n, o) {
                var r = {};
                return n = C(n, o),
                E.each(t, function(o, i) {
                    var a = n(o, i, t);
                    e(r, o, a)
                }),
                r
            }
        };
        E.groupBy = R(function(e, t, n) {
            E.has(e, n) ? e[n].push(t) : e[n] = [t]
        }),
        E.indexBy = R(function(e, t, n) {
            e[n] = t
        }),
        E.countBy = R(function(e, t, n) {
            E.has(e, n) ? e[n]++ : e[n] = 1
        }),
        E.toArray = function(e) {
            return e ? E.isArray(e) ? f.call(e) : k(e) ? E.map(e, E.identity) : E.values(e) : []
        }
        ,
        E.size = function(e) {
            return null == e ? 0 : k(e) ? e.length : E.keys(e).length
        }
        ,
        E.partition = function(e, t, n) {
            t = C(t, n);
            var o = []
              , r = [];
            return E.each(e, function(e, n, i) {
                (t(e, n, i) ? o : r).push(e)
            }),
            [o, r]
        }
        ,
        E.first = E.head = E.take = function(e, t, n) {
            if (null != e)
                return null == t || n ? e[0] : E.initial(e, e.length - t)
        }
        ,
        E.initial = function(e, t, n) {
            return f.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }
        ,
        E.last = function(e, t, n) {
            if (null != e)
                return null == t || n ? e[e.length - 1] : E.rest(e, Math.max(0, e.length - t))
        }
        ,
        E.rest = E.tail = E.drop = function(e, t, n) {
            return f.call(e, null == t || n ? 1 : t)
        }
        ,
        E.compact = function(e) {
            return E.filter(e, E.identity)
        }
        ;
        var O = function(e, t, n, o) {
            for (var r = [], i = 0, a = o || 0, s = M(e); a < s; a++) {
                var l = e[a];
                if (k(l) && (E.isArray(l) || E.isArguments(l))) {
                    t || (l = O(l, t, n));
                    var c = 0
                      , u = l.length;
                    for (r.length += u; c < u; )
                        r[i++] = l[c++]
                } else
                    n || (r[i++] = l)
            }
            return r
        };
        E.flatten = function(e, t) {
            return O(e, t, !1)
        }
        ,
        E.without = function(e) {
            return E.difference(e, f.call(arguments, 1))
        }
        ,
        E.uniq = E.unique = function(e, t, n, o) {
            E.isBoolean(t) || (o = n,
            n = t,
            t = !1),
            null != n && (n = C(n, o));
            for (var r = [], i = [], a = 0, s = M(e); a < s; a++) {
                var l = e[a]
                  , c = n ? n(l, a, e) : l;
                t ? (a && i === c || r.push(l),
                i = c) : n ? E.contains(i, c) || (i.push(c),
                r.push(l)) : E.contains(r, l) || r.push(l)
            }
            return r
        }
        ,
        E.union = function() {
            return E.uniq(O(arguments, !0, !0))
        }
        ,
        E.intersection = function(e) {
            for (var t = [], n = arguments.length, o = 0, r = M(e); o < r; o++) {
                var i = e[o];
                if (!E.contains(t, i)) {
                    for (var a = 1; a < n && E.contains(arguments[a], i); a++)
                        ;
                    a === n && t.push(i)
                }
            }
            return t
        }
        ,
        E.difference = function(e) {
            var t = O(arguments, !0, !0, 1);
            return E.filter(e, function(e) {
                return !E.contains(t, e)
            })
        }
        ,
        E.zip = function() {
            return E.unzip(arguments)
        }
        ,
        E.unzip = function(e) {
            for (var t = e && E.max(e, M).length || 0, n = Array(t), o = 0; o < t; o++)
                n[o] = E.pluck(e, o);
            return n
        }
        ,
        E.object = function(e, t) {
            for (var n = {}, o = 0, r = M(e); o < r; o++)
                t ? n[e[o]] = t[o] : n[e[o][0]] = e[o][1];
            return n
        }
        ,
        E.findIndex = i(1),
        E.findLastIndex = i(-1),
        E.sortedIndex = function(e, t, n, o) {
            n = C(n, o, 1);
            for (var r = n(t), i = 0, a = M(e); i < a; ) {
                var s = Math.floor((i + a) / 2);
                n(e[s]) < r ? i = s + 1 : a = s
            }
            return i
        }
        ,
        E.indexOf = a(1, E.findIndex, E.sortedIndex),
        E.lastIndexOf = a(-1, E.findLastIndex),
        E.range = function(e, t, n) {
            null == t && (t = e || 0,
            e = 0),
            n = n || 1;
            for (var o = Math.max(Math.ceil((t - e) / n), 0), r = Array(o), i = 0; i < o; i++,
            e += n)
                r[i] = e;
            return r
        }
        ;
        var T = function(e, t, n, o, r) {
            if (!(o instanceof t))
                return e.apply(n, r);
            var i = N(e.prototype)
              , a = e.apply(i, r);
            return E.isObject(a) ? a : i
        };
        E.bind = function(e, t) {
            if (y && e.bind === y)
                return y.apply(e, f.call(arguments, 1));
            if (!E.isFunction(e))
                throw new TypeError("Bind must be called on a function");
            var n = f.call(arguments, 2)
              , o = function() {
                return T(e, o, t, this, n.concat(f.call(arguments)))
            };
            return o
        }
        ,
        E.partial = function(e) {
            var t = f.call(arguments, 1)
              , n = function() {
                for (var o = 0, r = t.length, i = Array(r), a = 0; a < r; a++)
                    i[a] = t[a] === E ? arguments[o++] : t[a];
                for (; o < arguments.length; )
                    i.push(arguments[o++]);
                return T(e, n, this, this, i)
            };
            return n
        }
        ,
        E.bindAll = function(e) {
            var t, n, o = arguments.length;
            if (o <= 1)
                throw new Error("bindAll must be passed function names");
            for (t = 1; t < o; t++)
                n = arguments[t],
                e[n] = E.bind(e[n], e);
            return e
        }
        ,
        E.memoize = function(e, t) {
            var n = function(o) {
                var r = n.cache
                  , i = "" + (t ? t.apply(this, arguments) : o);
                return E.has(r, i) || (r[i] = e.apply(this, arguments)),
                r[i]
            };
            return n.cache = {},
            n
        }
        ,
        E.delay = function(e, t) {
            var n = f.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }
        ,
        E.defer = E.partial(E.delay, E, 1),
        E.throttle = function(e, t, n) {
            var o, r, i, a = null, s = 0;
            n || (n = {});
            var l = function() {
                s = n.leading === !1 ? 0 : E.now(),
                a = null,
                i = e.apply(o, r),
                a || (o = r = null)
            };
            return function() {
                var c = E.now();
                s || n.leading !== !1 || (s = c);
                var u = t - (c - s);
                return o = this,
                r = arguments,
                u <= 0 || u > t ? (a && (clearTimeout(a),
                a = null),
                s = c,
                i = e.apply(o, r),
                a || (o = r = null)) : a || n.trailing === !1 || (a = setTimeout(l, u)),
                i
            }
        }
        ,
        E.debounce = function(e, t, n) {
            var o, r, i, a, s, l = function() {
                var c = E.now() - a;
                c < t && c >= 0 ? o = setTimeout(l, t - c) : (o = null,
                n || (s = e.apply(i, r),
                o || (i = r = null)))
            };
            return function() {
                i = this,
                r = arguments,
                a = E.now();
                var c = n && !o;
                return o || (o = setTimeout(l, t)),
                c && (s = e.apply(i, r),
                i = r = null),
                s
            }
        }
        ,
        E.wrap = function(e, t) {
            return E.partial(t, e)
        }
        ,
        E.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }
        ,
        E.compose = function() {
            var e = arguments
              , t = e.length - 1;
            return function() {
                for (var n = t, o = e[t].apply(this, arguments); n--; )
                    o = e[n].call(this, o);
                return o
            }
        }
        ,
        E.after = function(e, t) {
            return function() {
                if (--e < 1)
                    return t.apply(this, arguments)
            }
        }
        ,
        E.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)),
                e <= 1 && (t = null),
                n
            }
        }
        ,
        E.once = E.partial(E.before, 2);
        var A = !{
            toString: null
        }.propertyIsEnumerable("toString")
          , P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        E.keys = function(e) {
            if (!E.isObject(e))
                return [];
            if (b)
                return b(e);
            var t = [];
            for (var n in e)
                E.has(e, n) && t.push(n);
            return A && s(e, t),
            t
        }
        ,
        E.allKeys = function(e) {
            if (!E.isObject(e))
                return [];
            var t = [];
            for (var n in e)
                t.push(n);
            return A && s(e, t),
            t
        }
        ,
        E.values = function(e) {
            for (var t = E.keys(e), n = t.length, o = Array(n), r = 0; r < n; r++)
                o[r] = e[t[r]];
            return o
        }
        ,
        E.mapObject = function(e, t, n) {
            t = C(t, n);
            for (var o, r = E.keys(e), i = r.length, a = {}, s = 0; s < i; s++)
                o = r[s],
                a[o] = t(e[o], o, e);
            return a
        }
        ,
        E.pairs = function(e) {
            for (var t = E.keys(e), n = t.length, o = Array(n), r = 0; r < n; r++)
                o[r] = [t[r], e[t[r]]];
            return o
        }
        ,
        E.invert = function(e) {
            for (var t = {}, n = E.keys(e), o = 0, r = n.length; o < r; o++)
                t[e[n[o]]] = n[o];
            return t
        }
        ,
        E.functions = E.methods = function(e) {
            var t = [];
            for (var n in e)
                E.isFunction(e[n]) && t.push(n);
            return t.sort()
        }
        ,
        E.extend = x(E.allKeys),
        E.extendOwn = E.assign = x(E.keys),
        E.findKey = function(e, t, n) {
            t = C(t, n);
            for (var o, r = E.keys(e), i = 0, a = r.length; i < a; i++)
                if (o = r[i],
                t(e[o], o, e))
                    return o
        }
        ,
        E.pick = function(e, t, n) {
            var o, r, i = {}, a = e;
            if (null == a)
                return i;
            E.isFunction(t) ? (r = E.allKeys(a),
            o = D(t, n)) : (r = O(arguments, !1, !1, 1),
            o = function(e, t, n) {
                return t in n
            }
            ,
            a = Object(a));
            for (var s = 0, l = r.length; s < l; s++) {
                var c = r[s]
                  , u = a[c];
                o(u, c, a) && (i[c] = u)
            }
            return i
        }
        ,
        E.omit = function(e, t, n) {
            if (E.isFunction(t))
                t = E.negate(t);
            else {
                var o = E.map(O(arguments, !1, !1, 1), String);
                t = function(e, t) {
                    return !E.contains(o, t)
                }
            }
            return E.pick(e, t, n)
        }
        ,
        E.defaults = x(E.allKeys, !0),
        E.create = function(e, t) {
            var n = N(e);
            return t && E.extendOwn(n, t),
            n
        }
        ,
        E.clone = function(e) {
            return E.isObject(e) ? E.isArray(e) ? e.slice() : E.extend({}, e) : e
        }
        ,
        E.tap = function(e, t) {
            return t(e),
            e
        }
        ,
        E.isMatch = function(e, t) {
            var n = E.keys(t)
              , o = n.length;
            if (null == e)
                return !o;
            for (var r = Object(e), i = 0; i < o; i++) {
                var a = n[i];
                if (t[a] !== r[a] || !(a in r))
                    return !1
            }
            return !0
        }
        ;
        var B = function(e, t, n, o) {
            if (e === t)
                return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t)
                return e === t;
            e instanceof E && (e = e._wrapped),
            t instanceof E && (t = t._wrapped);
            var r = h.call(e);
            if (r !== h.call(t))
                return !1;
            switch (r) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e === +t
            }
            var i = "[object Array]" === r;
            if (!i) {
                if ("object" != typeof e || "object" != typeof t)
                    return !1;
                var a = e.constructor
                  , s = t.constructor;
                if (a !== s && !(E.isFunction(a) && a instanceof a && E.isFunction(s) && s instanceof s) && "constructor"in e && "constructor"in t)
                    return !1
            }
            n = n || [],
            o = o || [];
            for (var l = n.length; l--; )
                if (n[l] === e)
                    return o[l] === t;
            if (n.push(e),
            o.push(t),
            i) {
                if (l = e.length,
                l !== t.length)
                    return !1;
                for (; l--; )
                    if (!B(e[l], t[l], n, o))
                        return !1
            } else {
                var c, u = E.keys(e);
                if (l = u.length,
                E.keys(t).length !== l)
                    return !1;
                for (; l--; )
                    if (c = u[l],
                    !E.has(t, c) || !B(e[c], t[c], n, o))
                        return !1
            }
            return n.pop(),
            o.pop(),
            !0
        };
        E.isEqual = function(e, t) {
            return B(e, t)
        }
        ,
        E.isEmpty = function(e) {
            return null == e || (k(e) && (E.isArray(e) || E.isString(e) || E.isArguments(e)) ? 0 === e.length : 0 === E.keys(e).length)
        }
        ,
        E.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }
        ,
        E.isArray = v || function(e) {
            return "[object Array]" === h.call(e)
        }
        ,
        E.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }
        ,
        E.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            E["is" + e] = function(t) {
                return h.call(t) === "[object " + e + "]"
            }
        }),
        E.isArguments(arguments) || (E.isArguments = function(e) {
            return E.has(e, "callee")
        }
        ),
        "function" != typeof /./ && "object" != typeof Int8Array && (E.isFunction = function(e) {
            return "function" == typeof e || !1
        }
        ),
        E.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }
        ,
        E.isNaN = function(e) {
            return E.isNumber(e) && e !== +e
        }
        ,
        E.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" === h.call(e)
        }
        ,
        E.isNull = function(e) {
            return null === e
        }
        ,
        E.isUndefined = function(e) {
            return void 0 === e
        }
        ,
        E.has = function(e, t) {
            return null != e && g.call(e, t)
        }
        ,
        E.noConflict = function() {
            return l._ = c,
            this
        }
        ,
        E.identity = function(e) {
            return e
        }
        ,
        E.constant = function(e) {
            return function() {
                return e
            }
        }
        ,
        E.noop = function() {}
        ,
        E.property = I,
        E.propertyOf = function(e) {
            return null == e ? function() {}
            : function(t) {
                return e[t]
            }
        }
        ,
        E.matcher = E.matches = function(e) {
            return e = E.extendOwn({}, e),
            function(t) {
                return E.isMatch(t, e)
            }
        }
        ,
        E.times = function(e, t, n) {
            var o = Array(Math.max(0, e));
            t = D(t, n, 1);
            for (var r = 0; r < e; r++)
                o[r] = t(r);
            return o
        }
        ,
        E.random = function(e, t) {
            return null == t && (t = e,
            e = 0),
            e + Math.floor(Math.random() * (t - e + 1))
        }
        ,
        E.now = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        var W = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
          , L = E.invert(W)
          , U = function(e) {
            var t = function(t) {
                return e[t]
            }
              , n = "(?:" + E.keys(e).join("|") + ")"
              , o = RegExp(n)
              , r = RegExp(n, "g");
            return function(e) {
                return e = null == e ? "" : "" + e,
                o.test(e) ? e.replace(r, t) : e
            }
        };
        E.escape = U(W),
        E.unescape = U(L),
        E.result = function(e, t, n) {
            var o = null == e ? void 0 : e[t];
            return void 0 === o && (o = n),
            E.isFunction(o) ? o.call(e) : o
        }
        ;
        var F = 0;
        E.uniqueId = function(e) {
            var t = ++F + "";
            return e ? e + t : t
        }
        ,
        E.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var j = /(.)^/
          , G = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , H = /\\|'|\r|\n|\u2028|\u2029/g
          , V = function(e) {
            return "\\" + G[e]
        };
        E.template = function(e, t, n) {
            !t && n && (t = n),
            t = E.defaults({}, t, E.templateSettings);
            var o = RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join("|") + "|$", "g")
              , r = 0
              , i = "__p+='";
            e.replace(o, function(t, n, o, a, s) {
                return i += e.slice(r, s).replace(H, V),
                r = s + t.length,
                n ? i += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : o ? i += "'+\n((__t=(" + o + "))==null?'':__t)+\n'" : a && (i += "';\n" + a + "\n__p+='"),
                t
            }),
            i += "';\n",
            t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
            i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj","_",i)
            } catch (e) {
                throw e.source = i,
                e
            }
            var s = function(e) {
                return a.call(this, e, E)
            }
              , l = t.variable || "obj";
            return s.source = "function(" + l + "){\n" + i + "}",
            s
        }
        ,
        E.chain = function(e) {
            var t = E(e);
            return t._chain = !0,
            t
        }
        ;
        var z = function(e, t) {
            return e._chain ? E(t).chain() : t
        };
        E.mixin = function(e) {
            E.each(E.functions(e), function(t) {
                var n = E[t] = e[t];
                E.prototype[t] = function() {
                    var e = [this._wrapped];
                    return m.apply(e, arguments),
                    z(this, n.apply(E, e))
                }
            })
        }
        ,
        E.mixin(E),
        E.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = u[e];
            E.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments),
                "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0],
                z(this, n)
            }
        }),
        E.each(["concat", "join", "slice"], function(e) {
            var t = u[e];
            E.prototype[e] = function() {
                return z(this, t.apply(this._wrapped, arguments))
            }
        }),
        E.prototype.value = function() {
            return this._wrapped
        }
        ,
        E.prototype.valueOf = E.prototype.toJSON = E.prototype.value,
        E.prototype.toString = function() {
            return "" + this._wrapped
        }
        ,
        o = [],
        r = function() {
            return E
        }
        .apply(t, o),
        !(void 0 !== r && (e.exports = r))
    }
    ).call(this)
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(164)
      , i = document.getElementById("components")
      , a = document.createElement("div");
    i.appendChild(a);
    var s = n(168)
      , l = s.Button
      , c = s.Input
      , u = o.createClass({
        displayName: "JoinPublicGroup",
        getInitialState: function() {
            return {
                groupDetail: !1,
                gid: null,
                cursor: null,
                groups: [],
                loading: !1,
                bodyLoading: !1,
                groupName: "",
                owner: "",
                description: "",
                membersOnly: "",
                inputValue: ""
            }
        },
        onInputChange: function(e) {
            this.setState({
                inputValue: e.target.value
            })
        },
        search: function() {
            var e = this.state.inputValue;
            this.showDetail(e)
        },
        joinGroup: function() {
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var e = {
                    groupId: this.state.gid,
                    success: function(e) {
                        Demo.api.NotifySuccess("入群申请发送成功!")
                    },
                    error: function(e) {
                        17 == e.type && Demo.api.NotifyError("您已经在这个群组!")
                    }
                };
                Demo.conn.joinGroup(e)
            }
        },
        componentDidMount: function() {
            this.getGroupList()
        },
        onScroll: function() {
            if (!this.state.groupDetail) {
                var e = this.refs.groupList
                  , t = e.scrollTop
                  , n = this.state.groups.length;
                t - 174 < 0 || (t - 174) / 300 == n / 10 - 1 && (this.setState({
                    loading: !0
                }),
                this.getGroupList())
            }
        },
        getGroupList: function() {
            var e = 20
              , t = this.state.cursor;
            if (WebIM.config.isWindowSDK)
                ;
            else {
                this.setState({
                    loading: !0
                });
                var n = {
                    limit: e,
                    cursor: t,
                    success: function(e) {
                        var t = e.data
                          , n = this.state.groups;
                        for (var r in t)
                            n.push(o.createElement("li", {
                                className: "webim-blacklist-item",
                                "data-gid": t[r].groupid,
                                key: t[r].groupid,
                                onClick: this.showDetail.bind(this, t[r].groupid)
                            }, t[r].groupname, o.createElement("i", {
                                className: "webim-leftbar-icon font smaller"
                            }, "F")));
                        this.setState({
                            cursor: e.cursor,
                            groups: n,
                            loading: !1
                        })
                    }
                    .bind(this),
                    error: function(e) {}
                };
                Demo.conn.listGroups(n)
            }
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        backToList: function() {
            this.setState({
                groupDetail: !1
            })
        },
        showDetail: function(e) {
            if (WebIM.config.isWindowSDK)
                ;
            else {
                this.setState({
                    bodyLoading: !0
                });
                var t = {
                    groupId: e,
                    success: function(t) {
                        var n = t.data[0].name
                          , o = t.data[0].description
                          , r = ""
                          , i = t.data[0].affiliations
                          , a = t.data[0].membersonly;
                        for (var s in i)
                            if (i[s].owner) {
                                r = i[s].owner;
                                break
                            }
                        this.setState({
                            groupName: n,
                            description: o,
                            owner: r,
                            groupDetail: !0,
                            bodyLoading: !1,
                            gid: e,
                            membersOnly: a
                        })
                    }
                    .bind(this),
                    error: function(e) {
                        17 == e.type && Demo.api.NotifyError("此群组ID不存在！"),
                        this.setState({
                            bodyLoading: !1
                        })
                    }
                    .bind(this)
                };
                Demo.conn.getGroupInfo(t)
            }
        },
        render: function() {
            var e = this.state.groups;
            return o.createElement("div", {
                className: "webim-friend-options"
            }, o.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), o.createElement("div", {
                className: "webim-dialog"
            }, o.createElement("h3", null, Demo.lan.joinPublicGroup), o.createElement("div", {
                ref: "content"
            }, o.createElement(c, {
                defaultFocus: "true",
                placeholder: Demo.lan.groupSubject,
                onChange: this.onInputChange
            }), o.createElement(l, {
                text: Demo.lan.search,
                onClick: this.search,
                className: "webim-dialog-button-search"
            })), o.createElement("div", {
                className: "webim-dialog-body",
                onScroll: this.onScroll,
                ref: "groupList"
            }, o.createElement("div", {
                ref: "loading",
                className: "webim-body-loading " + (this.state.bodyLoading ? "" : "hide")
            }, o.createElement("img", {
                src: "demo/images/loading.gif"
            })), o.createElement("ul", {
                className: this.state.groupDetail ? "hide" : "webim-blacklist-wrapper"
            }, e), o.createElement("div", {
                ref: "loading",
                className: "webim-contact-loading " + (this.state.loading ? "" : "hide")
            }, o.createElement("img", {
                src: "demo/images/loading.gif"
            })), o.createElement("div", {
                className: this.state.groupDetail ? "webim-dialog-body-detail" : "hide"
            }, o.createElement("span", {
                className: "title"
            }, "群名称"), o.createElement("span", {
                className: "content"
            }, this.state.groupName || "[群名称未设置]")), o.createElement("div", {
                className: this.state.groupDetail ? "webim-dialog-body-detail" : "hide"
            }, o.createElement("span", {
                className: "title"
            }, "群主"), o.createElement("span", {
                className: "content"
            }, this.state.owner || "[群主未设置]")), o.createElement("div", {
                className: this.state.groupDetail ? "webim-dialog-body-detail" : "hide"
            }, o.createElement("span", {
                className: "title"
            }, "群简介"), o.createElement("span", {
                className: "content"
            }, this.state.description || "[群简介未设置]")), o.createElement("div", {
                className: this.state.groupDetail ? "webim-dialog-body-detail" : "hide"
            }, o.createElement("span", {
                className: "title"
            }, "是否需要审批"), o.createElement("span", {
                className: "content"
            }, this.state.membersOnly ? "[是]" : "否"))), o.createElement("div", {
                className: "webim-dialog-footer"
            }, o.createElement("div", {
                className: this.state.groupDetail ? "webim-group-back" : "hide",
                onClick: this.backToList
            }, o.createElement("span", null, "↵")), o.createElement(l, {
                text: Demo.lan.join,
                onClick: this.joinGroup,
                className: this.state.groupDetail ? "webim-dialog-button" : "hide"
            })), o.createElement("span", {
                className: "font",
                onClick: this.close
            }, "A")))
        }
    });
    e.exports = {
        show: function() {
            r.render(o.createElement(u, {
                onClose: this.close
            }), a)
        },
        close: function() {
            r.unmountComponentAtNode(a)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(164)
      , i = document.getElementById("components")
      , a = document.createElement("div");
    i.appendChild(a);
    var s = n(168)
      , l = s.Button
      , c = o.createClass({
        displayName: "ShowBlacklist",
        getInitialState: function() {
            return {
                change: !1
            }
        },
        onRemoveFromBlackList: function(e) {
            var t = this;
            if (WebIM.config.isWindowSDK)
                WebIM.doQuery('{"type":"removeFromBlackList", "username": "' + e + '"}', function(n) {
                    Demo.api.blacklist.remove(e),
                    t.setState({
                        change: !0
                    }),
                    Demo.api.updateRoster()
                }, function(e, t) {
                    Demo.api.NotifyError("getRoster:" + e)
                });
            else {
                var n = Demo.api.blacklist.remove(e);
                Demo.conn.removeFromBlackList({
                    list: n,
                    success: function() {
                        t.setState({
                            change: !0
                        })
                    },
                    error: function(e) {
                        Demo.api.NotifyError("ShowBlacklist error:" + e)
                    }
                })
            }
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        render: function() {
            var e = [];
            for (var t in Demo.blacklist) {
                var n = Demo.blacklist[t];
                e.push(o.createElement("li", {
                    className: "webim-blacklist-item",
                    key: t
                }, n.name, o.createElement("i", {
                    className: "webim-leftbar-icon font smaller",
                    onClick: this.onRemoveFromBlackList.bind(this, n.name)
                }, "d")))
            }
            return o.createElement("div", {
                className: "webim-friend-options"
            }, o.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), o.createElement("div", {
                className: "webim-dialog",
                style: {
                    height: "auto"
                }
            }, o.createElement("h3", null, Demo.lan.ShowBlacklist), o.createElement("div", {
                ref: "content",
                className: "webim-dialog-body"
            }, o.createElement("ul", {
                className: "webim-blacklist-wrapper"
            }, e)), o.createElement("div", {
                className: "webim-dialog-footer"
            }, o.createElement(l, {
                text: Demo.lan.confirm,
                onClick: this.close,
                className: "webim-dialog-button"
            })), o.createElement("span", {
                className: "font",
                onClick: this.close
            }, "A")))
        }
    });
    e.exports = {
        show: function() {
            r.render(o.createElement(c, {
                onClose: this.close
            }), a)
        },
        close: function() {
            r.unmountComponentAtNode(a)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(182);
    e.exports = o.createClass({
        displayName: "exports",
        getInitialState: function() {
            return {
                src: "demo/images/group_user.png"
            }
        },
        componentDidUpdate: function() {
            this.refs.contactContainer.scrollTop = Demo.chatState[Demo.selectedCate].scroll
        },
        update: function(e) {
            this.props.updateNode(e)
        },
        onscroll: function() {
            var e = this.refs.contactContainer.scrollTop;
            Demo.chatState[Demo.selectedCate].scroll = e,
            e / 60 + 10 == this.props[Demo.selectedCate].length && this.props.getChatroom()
        },
        getBrief: function(e) {
            if (Demo.chatRecord[e] && Demo.chatRecord[e].brief)
                return Demo.chatRecord[e].brief
        },
        render: function() {
            for (var e = [], t = [], n = [], i = [], a = 0; a < this.props.friends.length; a++)
                this.props.friends[a].name in this.props.blacklist || e.push(o.createElement(r, {
                    id: this.props.friends[a].name,
                    cate: "friends",
                    key: this.props.friends[a].name,
                    username: this.props.friends[a].name,
                    update: this.update,
                    cur: this.props.curNode,
                    brief: this.getBrief(this.props.friends[a].name)
                }));
            for (var a = 0; a < this.props.groups.length; a++)
                t.push(o.createElement(r, {
                    id: this.props.groups[a].roomId,
                    cate: "groups",
                    key: this.props.groups[a].roomId,
                    username: this.props.groups[a].name,
                    update: this.update,
                    cur: this.props.curNode,
                    src: this.state.src,
                    brief: this.getBrief(this.props.groups[a].roomId)
                }));
            for (var a = 0; a < this.props.chatrooms.length; a++)
                i.push(o.createElement(r, {
                    id: this.props.chatrooms[a].id,
                    cate: "chatrooms",
                    key: this.props.chatrooms[a].id,
                    username: this.props.chatrooms[a].name,
                    update: this.update,
                    cur: this.props.curNode,
                    src: this.state.src,
                    brief: this.getBrief(this.props.chatrooms[a].id)
                }));
            for (var a = 0; a < this.props.strangers.length; a++)
                n.push(o.createElement(r, {
                    id: this.props.strangers[a].name,
                    cate: "strangers",
                    key: this.props.strangers[a].name,
                    username: this.props.strangers[a].name,
                    update: this.update,
                    cur: this.props.curNode,
                    brief: this.getBrief(this.props.strangers[a].name)
                }));
            return o.createElement("div", {
                ref: "contactContainer",
                className: "webim-contact-wrapper",
                onScroll: this.onscroll
            }, o.createElement("div", {
                className: "friend" === this.props.cur ? "" : " hide"
            }, e), o.createElement("div", {
                className: "group" === this.props.cur ? "" : " hide"
            }, t), o.createElement("div", {
                className: "chatroom" === this.props.cur ? "" : " hide"
            }, i), o.createElement("div", {
                className: "stranger" === this.props.cur ? "" : " hide"
            }, n), o.createElement("div", {
                ref: "loading",
                className: "webim-contact-loading " + (this.props.loading ? "" : "hide")
            }, o.createElement("img", {
                src: "demo/images/loading.gif"
            })))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(172);
    n(178);
    e.exports = o.createClass({
        displayName: "exports",
        getInitialState: function() {
            return {
                msg: "",
                avatar: "",
                countShow: !1
            }
        },
        handleCurCateIconCount: function(e) {
            var t = document.getElementById(this.props.cate).getElementsByTagName("i")[1]
              , n = t.getAttribute("data-count") / 1;
            n -= e,
            n = Math.max(0, n),
            n > 0 ? t.style.display = "block" : (n = 0,
            t.style.display = "none"),
            t.setAttribute("data-count", n),
            Demo.chatState[this.props.cate].count = n
        },
        update: function() {
            if (Demo.chatingCate = Demo.selectedCate,
            this.refs.i) {
                var e = this.refs.i.getAttribute("data-count") / 1;
                this.handleCurCateIconCount(e),
                this.refs.i.style.display = "none",
                this.refs.i.setAttribute("data-count", 0),
                Demo.chatRecord[this.props.id] && (Demo.chatRecord[this.props.id].count = 0),
                this.refs.i.innerText = ""
            }
            if ("friends" !== Demo.selectedCate && "strangers" !== Demo.selectedCate ? Demo.selected = this.props.id : Demo.selected = this.props.username,
            Demo.currentChatroom && (delete Demo.chatRecord[Demo.currentChatroom],
            WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"quitChatroom","id":"' + Demo.currentChatroom + '"}', function(e) {}, function(e, t) {
                Demo.api.NotifyError("update currentChatroom:" + e + " " + t)
            }) : Demo.conn.quitChatRoom({
                roomId: Demo.currentChatroom
            }),
            Demo.currentChatroom = null),
            "chatrooms" === Demo.selectedCate)
                if (WebIM.config.isWindowSDK)
                    WebIM.doQuery('{"type":"joinChatroom","id":"' + this.props.id + '"}', function(e) {
                        Demo.currentChatroom = e
                    }, function(e, t) {
                        Demo.api.NotifyError("update chatrooms:" + e + " " + t)
                    });
                else {
                    var t = document.getElementById("wrapper" + this.props.id);
                    t && (t.innerHTML = ""),
                    Demo.conn.joinChatRoom({
                        roomId: this.props.id
                    }),
                    Demo.currentChatroom = this.props.id
                }
            else
                WebIM.config.isWindowSDK && (console.log(document.getElementById(this.props.id).querySelector("em").innerHTML),
                "" == document.getElementById(this.props.id).querySelector("em").innerHTML && WebIM.doQuery('{"type":"loadMoreMessages","id":"' + this.props.id + '","chatType":"singlechat"}', function(e) {}, function(e, t) {
                    Demo.api.NotifyError("getRoster:" + e),
                    errFn()
                }));
            this.props.update(Demo.selected)
        },
        render: function() {
            var e = this.props.cur === this.props.id ? " selected" : "";
            return o.createElement("div", {
                id: this.props.id,
                className: "webim-contact-item" + e,
                onClick: this.update
            }, o.createElement(r, {
                src: this.props.src
            }), o.createElement("div", {
                className: "webim-contact-info"
            }, o.createElement("span", {
                className: "webim-contact-username"
            }, this.props.username)), o.createElement("em", {
                dangerouslySetInnerHTML: {
                    __html: this.props.brief
                }
            }), o.createElement("i", {
                ref: "i",
                className: "webim-msg-prompt",
                "data-count": "0",
                style: {
                    display: "none"
                },
                dangerouslySetInnerHTML: {
                    __html: "0"
                }
            }))
        }
    })
}
, function(module, exports, __webpack_require__) {
    "use strict";
    var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , React = __webpack_require__(12)
      , ReactDOM = __webpack_require__(164)
      , SendWrapper = __webpack_require__(184)
      , Avatar = __webpack_require__(172)
      , OperationsGroups = __webpack_require__(186)
      , OperationsFriends = __webpack_require__(191)
      , _ = __webpack_require__(178);
    module.exports = React.createClass({
        displayName: "exports",
        getInitialState: function() {
            return {
                settings: "",
                admin: 0,
                owner: [],
                members: [],
                fields: {},
                memberShowStatus: !1
            }
        },
        getGroupInfo: function getGroupInfo(cb_type) {
            if ("groupChat" == this.props.chatType || "chatRoom" == this.props.chatType) {
                var me = this;
                WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"groupSpecification","id":"' + me.props.roomId + '"}', function success(str) {
                    if ("" != str) {
                        var json = eval("(" + str + ")")
                          , owner = [{
                            jid: json.owner,
                            affiliation: "owner"
                        }]
                          , admin = 0;
                        json.owner == Demo.user && (admin = 1),
                        me.setState({
                            settings: json.style,
                            admin: admin,
                            owner: owner
                        }),
                        "listMember" == cb_type ? me.listMember() : me.refs.operation_div.refs.switch.click()
                    }
                }, function(e, t) {
                    Demo.api.NotifyError("queryRoomInfo:" + e + " " + t)
                }) : Demo.conn.queryRoomInfo({
                    roomId: me.props.roomId,
                    success: function(e, t, n) {
                        if (t && t.length > 0) {
                            var o = t[0].jid
                              , r = o.substr(0, o.lastIndexOf("@"))
                              , i = this.state.admin;
                            "owner" == t[0].affiliation && r.toLowerCase() == Demo.user && (i = 1),
                            me.setState({
                                settings: e,
                                admin: i,
                                owner: t,
                                fields: n
                            }),
                            "listMember" == cb_type ? me.listMember() : "opertion" == cb_type && me.refs.operation_div.refs.switch.click()
                        }
                    }
                    .bind(this),
                    error: function() {
                        Demo.api.NotifyError("queryRoomInfo error", me.props.roomId)
                    }
                })
            }
        },
        componentWillReceiveProps: function(e) {},
        preListMember: function() {
            0 == this.state.owner.length ? this.getGroupInfo("listMember") : this.listMember()
        },
        listMember: function listMember() {
            if (this.state.memberShowStatus)
                this.setState({
                    members: [],
                    memberShowStatus: !1
                });
            else {
                var me = this;
                if (WebIM.config.isWindowSDK)
                    WebIM.doQuery('{"type":"groupMembers","id":"' + me.props.roomId + '"}', function success(str) {
                        if ("" != str) {
                            var members = eval("(" + str + ")");
                            members && members.length > 0 ? me.refreshMemberList(members) : me.refreshMemberList([])
                        }
                    }, function(e, t) {
                        Demo.api.NotifyError("listMember:" + e + " " + t)
                    });
                else {
                    var pageNum = 1
                      , pageSize = 1e3
                      , options = {
                        pageNum: pageNum,
                        pageSize: pageSize,
                        groupId: Demo.selected,
                        success: function(e) {
                            var t = e.data
                              , n = this.state.admin;
                            if (this.state.admin)
                                this.getAdmin(t);
                            else
                                for (var o in t)
                                    if (t[o].owner) {
                                        t[o].owner === Demo.user && (this.getAdmin(t),
                                        n = !0);
                                        break
                                    }
                            n || this.refreshMemberList(t)
                        }
                        .bind(this),
                        error: function(e) {}
                    };
                    "groupChat" == me.props.chatType ? Demo.conn.listGroupMember(options) : Demo.conn.listRoomMember(options)
                }
            }
        },
        addToGroupBlackList: function(e) {
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var t = this.state.members
                  , n = {
                    groupId: Demo.selected,
                    username: e,
                    success: function() {
                        for (var n in t)
                            if (t[n].member && t[n].member === e) {
                                delete t[n];
                                break
                            }
                        this.setState({
                            members: t
                        })
                    }
                    .bind(this),
                    error: function(e) {
                        Demo.api.NotifyError(e.data)
                    }
                };
                Demo.conn.groupBlockSingle(n)
            }
        },
        mute: function(e) {
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var t = 8864e5
                  , n = {
                    username: e,
                    muteDuration: t,
                    groupId: Demo.selected,
                    success: function(t) {
                        var n = this.state.members;
                        for (var o in n)
                            if (n[o].member && n[o].member === e) {
                                n[o].muted = !0;
                                break
                            }
                        this.setState({
                            members: n
                        })
                    }
                    .bind(this),
                    error: function(e) {
                        Demo.api.NotifyError(e.data)
                    }
                };
                Demo.conn.mute(n)
            }
        },
        removeMute: function(e) {
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var t = {
                    groupId: Demo.selected,
                    username: e,
                    success: function(t) {
                        var n = this.state.members;
                        for (var o in n)
                            if (n[o].member && n[o].member === e) {
                                n[o].muted && delete n[o].muted;
                                break
                            }
                        this.setState({
                            members: n
                        })
                    }
                    .bind(this),
                    error: function(e) {
                        Demo.api.NotifyError(e.data)
                    }
                };
                Demo.conn.removeMute(t)
            }
        },
        getAdmin: function(e) {
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var t = {
                    groupId: Demo.selected,
                    success: function(t) {
                        var n = t.data;
                        for (var o in n)
                            n[n[o]] = !0,
                            delete n[o];
                        for (var r in e)
                            if (e[r].member) {
                                var i = e[r].member;
                                n[i] && (e[r].admin = !0)
                            }
                        this.getMuted(e)
                    }
                    .bind(this),
                    error: function(e) {
                        Demo.api.NotifyError(e.data)
                    }
                };
                Demo.conn.getGroupAdmin(t)
            }
        },
        getMuted: function(e) {
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var t = {
                    groupId: Demo.selected,
                    success: function(t) {
                        var n = t.data;
                        for (var o in n) {
                            var r = n[o].user;
                            n[r] = !0,
                            delete n[o]
                        }
                        for (var i in e)
                            if (e[i].member) {
                                var a = e[i].member;
                                n[a] && (e[i].muted = !0)
                            }
                        this.refreshMemberList(e)
                    }
                    .bind(this),
                    error: function(e) {
                        Demo.api.NotifyError(e.data)
                    }
                };
                Demo.conn.getMuted(t)
            }
        },
        setAdmin: function(e) {
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var t = {
                    groupId: Demo.selected,
                    username: e,
                    success: function(t) {
                        var n = this.state.members;
                        for (var o in n)
                            if (n[o].member && n[o].member === e) {
                                n[o].admin = !0;
                                break
                            }
                        this.setState({
                            members: n
                        })
                    }
                    .bind(this),
                    error: function(e) {
                        Demo.api.NotifyError(e.data)
                    }
                    .bind(this)
                };
                Demo.conn.setAdmin(t)
            }
        },
        removeAdmin: function(e) {
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var t = this
                  , n = {
                    groupId: Demo.selected,
                    username: e,
                    success: function(n) {
                        var o = t.state.members;
                        for (var r in o)
                            if (o[r].member && o[r].member === e) {
                                o[r].admin && delete o[r].admin;
                                break
                            }
                        t.setState({
                            members: o
                        })
                    },
                    error: function(e) {
                        Demo.api.NotifyError(e.data)
                    }
                };
                Demo.conn.removeAdmin(n)
            }
        },
        refreshMemberList: function(e) {
            this.setState({
                members: e,
                memberShowStatus: !0
            })
        },
        removeGroupMember: function(e, t) {
            var n = {
                groupId: Demo.selected,
                username: e,
                success: function() {
                    Demo.api.NotifySuccess("Remove " + e + " succeed!");
                    var n = this.state.members;
                    delete n[t],
                    this.setState({
                        members: n
                    })
                }
                .bind(this),
                error: function(e) {
                    Demo.api.NotifyError(e.data)
                }
            };
            Demo.conn.removeSingleGroupMember(n)
        },
        send: function(e) {
            e.chatType = this.props.chatType,
            Demo.conn.send(e),
            Demo.api.addToChatRecord(e, "txt", "Undelivered"),
            Demo.api.appendMsg(e, "txt")
        },
        componentDidUpdate: function() {},
        componentDidMount: function() {
            if ("groups" == Demo.selectedCate) {
                var e = !1
                  , t = {
                    groupId: Demo.selected,
                    success: function(t) {
                        for (var n in t.data)
                            if (t.data[n] == Demo.user) {
                                console.log("True"),
                                e = !0;
                                break
                            }
                        this.setState({
                            admin: e
                        })
                    }
                    .bind(this)
                };
                Demo.conn.getGroupAdmin(t)
            }
            Demo.api.releaseChatRecord()
        },
        handleOnBlur: function() {
            this.setState({
                memberShowStatus: !1
            })
        },
        render: function() {
            var e = this.props.roomId ? " dib" : " hide"
              , t = {
                chatType: this.props.chatType,
                sendPicture: this.props.sendPicture,
                sendAudio: this.props.sendAudio,
                sendFile: this.props.sendFile
            }
              , n = this.state.memberShowStatus ? "" : " hide"
              , o = [];
            for (var r in this.state.members) {
                var i = r
                  , a = this.state.members[r]
                  , s = !1
                  , l = !1
                  , c = this.state.members[r];
                c.member ? (i = "member",
                s = c.admin,
                l = c.muted) : i = "owner",
                a = c[i],
                s ? o.push(React.createElement("li", {
                    key: r
                }, React.createElement(Avatar, {
                    src: "demo/images/default.png"
                }), React.createElement("span", {
                    className: "webim-group-name"
                }, a), React.createElement("div", {
                    className: "webim-operation-icon",
                    style: {
                        display: "owner" == i ? "none" : ""
                    }
                }, React.createElement("i", {
                    className: "webim-leftbar-icon font smaller " + e,
                    style: {
                        display: 1 != this.state.admin ? "none" : ""
                    },
                    onClick: this.removeGroupMember.bind(this, a, r),
                    title: Demo.lan.removeGroupMember
                }, "A")), React.createElement("div", {
                    className: "webim-operation-icon",
                    style: {
                        display: "owner" == i ? "none" : ""
                    }
                }, React.createElement("i", {
                    className: "webim-leftbar-icon font smaller " + e,
                    style: {
                        display: 1 != this.state.admin ? "none" : ""
                    },
                    onClick: this.addToGroupBlackList.bind(this, a, r),
                    title: Demo.lan.addToGroupBlackList
                }, "n")), React.createElement("div", {
                    className: "webim-operation-icon",
                    style: {
                        display: "owner" == i ? "none" : ""
                    }
                }, React.createElement("i", {
                    className: "webim-leftbar-icon font smaller " + e,
                    style: {
                        display: 1 != this.state.admin ? "none" : ""
                    },
                    onClick: l ? this.removeMute.bind(this, a) : this.mute.bind(this, a),
                    title: l ? Demo.lan.removeMute : Demo.lan.mute
                }, l ? "e" : "f")), React.createElement("div", {
                    className: "webim-operation-icon",
                    style: {
                        display: "owner" == i ? "none" : ""
                    }
                }, React.createElement("i", {
                    className: "webim-leftbar-icon font smaller " + e,
                    style: {
                        display: 1 != this.state.admin ? "none" : ""
                    },
                    onClick: s ? this.removeAdmin.bind(this, a) : this.setAdmin.bind(this, a),
                    title: Demo.lan.rmAdministrator
                }, "↓")))) : o.push(React.createElement("li", {
                    key: r
                }, React.createElement(Avatar, {
                    src: "demo/images/default.png"
                }), React.createElement("span", {
                    className: "webim-group-name"
                }, a), React.createElement("div", {
                    className: "webim-operation-icon",
                    style: {
                        display: "owner" == i ? "none" : ""
                    }
                }, React.createElement("i", {
                    className: "webim-leftbar-icon font smaller " + e,
                    style: {
                        display: 1 != this.state.admin ? "none" : ""
                    },
                    onClick: this.removeGroupMember.bind(this, a, r),
                    title: Demo.lan.removeGroupMember
                }, "A")), React.createElement("div", {
                    className: "webim-operation-icon",
                    style: {
                        display: "owner" == i ? "none" : ""
                    }
                }, React.createElement("i", {
                    className: "webim-leftbar-icon font smaller " + e,
                    style: {
                        display: 1 != this.state.admin ? "none" : ""
                    },
                    onClick: this.addToGroupBlackList.bind(this, a, r),
                    title: Demo.lan.addToGroupBlackList
                }, "n")), React.createElement("div", {
                    className: "webim-operation-icon",
                    style: {
                        display: "owner" == i ? "none" : ""
                    }
                }, React.createElement("i", {
                    className: "webim-leftbar-icon font smaller " + e,
                    style: {
                        display: 1 != this.state.admin ? "none" : ""
                    },
                    onClick: l ? this.removeMute.bind(this, a) : this.mute.bind(this, a),
                    title: l ? Demo.lan.removeMute : Demo.lan.mute
                }, l ? "e" : "f")), React.createElement("div", {
                    className: "webim-operation-icon",
                    style: {
                        display: "owner" == i ? "none" : ""
                    }
                }, React.createElement("i", {
                    className: "webim-leftbar-icon font smaller " + e,
                    style: {
                        display: 1 != this.state.admin ? "none" : ""
                    },
                    onClick: s ? this.removeAdmin.bind(this, a) : this.setAdmin.bind(this, a),
                    title: Demo.lan.administrator
                }, "↑"))))
            }
            var u = [];
            return "friends" == Demo.selectedCate ? u.push(React.createElement(OperationsFriends, {
                key: "operation_div",
                ref: "operation_div",
                roomId: this.props.roomId,
                admin: this.state.admin,
                owner: this.state.owner,
                settings: this.state.settings,
                getGroupInfo: this.getGroupInfo,
                onBlur: this.handleOnBlur,
                name: this.props.name,
                updateNode: this.props.updateNode,
                delFriend: this.props.delFriend
            })) : "groups" == Demo.selectedCate && u.push(React.createElement(OperationsGroups, {
                key: "operation_div",
                ref: "operation_div",
                name: this.props.name,
                roomId: this.props.roomId,
                admin: this.state.admin,
                owner: this.state.owner,
                settings: this.state.settings,
                fields: this.state.fields,
                getGroupInfo: this.getGroupInfo,
                onBlur: this.handleOnBlur,
                leaveGroup: this.props.leaveGroup,
                destroyGroup: this.props.destroyGroup
            })),
            React.createElement("div", {
                className: "webim-chatwindow " + this.props.className
            }, React.createElement("div", {
                className: "webim-chatwindow-title"
            }, "chatrooms" == Demo.selectedCate || "groups" == Demo.selectedCate ? Demo.lan.groupMemberLabel : this.props.name, React.createElement("i", {
                ref: "i",
                className: "webim-down-icon font smallest " + e + " " + (this.state.memberShowStatus ? "webim-up-icon" : "webim-down-icon"),
                onClick: this.preListMember
            }, "D")), React.createElement("div", {
                className: u.length > 0 ? "" : "hide"
            }, u), React.createElement("ul", {
                onBlur: this.handleOnBlur,
                tabIndex: "-1",
                ref: "member",
                className: "webim-group-memeber" + n
            }, " ", o), React.createElement("div", {
                id: this.props.id,
                ref: "wrapper",
                className: "webim-chatwindow-msg"
            }), React.createElement(SendWrapper, _extends({
                send: this.send
            }, t)))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(168)
      , i = r.Button
      , a = n(185);
    e.exports = o.createClass({
        displayName: "exports",
        getInitialState: function() {
            var e = []
              , t = WebIM.Emoji
              , n = t.map
              , o = t.path;
            for (var r in n)
                n.hasOwnProperty(r) && e.push('<li key="' + r + '" class="webim-emoji-item"><img src="' + o + n[r] + '" /></li>');
            return WebIM.flashUpload = a({
                fileInputId: "uploadShim"
            }).flashUpload,
            {
                send: !1,
                showEmoji: !1,
                emoji: {
                    data: e,
                    path: o
                }
            }
        },
        ctrl_down: !1,
        handleKeyDown: function(e) {
            return e && (17 == e.keyCode ? this.ctrl_down = !0 : 13 == e.keyCode && (this.ctrl_down ? (this.ctrl_down = !1,
            this.refs.textarea.value += "\n") : this.sendText())),
            !1
        },
        sendText: function() {
            var e = this
              , t = this.refs.textarea.value
              , n = "chatrooms" === Demo.selectedCate;
            if (t) {
                if (setTimeout(function() {
                    e.refs.textarea && (e.refs.textarea.value = "")
                }, 0),
                n && Demo.currentChatroom !== Demo.selected)
                    return Demo.api.NotifySuccess(Demo.lan.notin),
                    !1;
                var o = Demo.conn.getUniqueId()
                  , r = new WebIM.message("txt",o);
                r.set({
                    msg: t,  //这里是发送的内容
                    to: Demo.selected,    // 这里换成对方id，就是注册的用户名
                    roomType: n,
                    success: function(t, n) {
                        e.state.showEmoji && e.setState({
                            showEmoji: !1
                        })
                    }
                }),
                "groups" === Demo.selectedCate ? r.setGroup(Demo.groupType) : n && r.setGroup(Demo.groupType),
                this.props.send(r.body)
            }
        },
        showEmoji: function() {
            if (this.state.showEmoji)
                this.setState({
                    showEmoji: !1
                });
            else {
                if (!this.refs.emoji.innerHTML) {
                    for (var e = "", t = 0; t < this.state.emoji.data.length; t++)
                        e += this.state.emoji.data[t];
                    this.refs.emoji.innerHTML = e
                }
                this.setState({
                    showEmoji: !0
                })
            }
        },
        selectEmoji: function(e) {
            var t = e.target.parentNode.getAttribute("key");
            null != t && (this.refs.textarea.value += t)
        },
        callVideo: function() {
            console.log("sendWrapper::callVideo"),
            Demo.call.caller = Demo.user,
            Demo.call.makeVideoCall(Demo.selected)
        },
        callVoice: function() {
            console.log("sendWrapper::callVoice"),
            Demo.call.caller = Demo.user,
            Demo.call.makeVoiceCall(Demo.selected)
        },
        sendPicture: function() {
            this.props.sendPicture(this.props.chatType)
        },
        sendAudio: function() {
            this.props.sendAudio(this.props.chatType)
        },
        sendFile: function() {
            this.props.sendFile(this.props.chatType)
        },
        clear: function() {
            var e = Demo.selected
              , t = document.getElementById("wrapper" + e);
            t.innerHTML = "";
            var n = document.getElementById(e);
            n.querySelector("em").innerHTML = "",
            Demo.chatRecord[e] && delete Demo.chatRecord[e]
        },
        render: function() {
            var e = this.state.showEmoji ? "" : " hide"
              , t = this.state.send ? "" : " disabled"
              , n = []
              , r = 0;
            return n.push(o.createElement("span", {
                key: r++,
                className: "webim-emoji-icon font smaller",
                onClick: this.showEmoji
            }, "J")),
            n.push(o.createElement("span", {
                key: r++,
                className: "webim-picture-icon font smaller",
                onClick: this.sendPicture
            }, "K")),
            n.push(o.createElement("span", {
                key: r++,
                className: "webim-audio-icon font smaller",
                onClick: this.sendAudio
            }, "R")),
            n.push(o.createElement("span", {
                key: r++,
                className: "webim-file-icon font smaller",
                onClick: this.sendFile
            }, "S")),
            WebIM.config.isWebRTC && "friends" == Demo.selectedCate && (n.push(o.createElement("span", {
                key: r++,
                className: "webim-audio-icon font smaller",
                onClick: this.callVideo
            }, "a")),
            n.push(o.createElement("span", {
                key: r++,
                className: "webim-audio-icon font smaller",
                onClick: this.callVoice
            }, "z"))),
            n.push(o.createElement("span", {
                key: r++,
                className: "webim-file-icon font smaller",
                onClick: this.clear
            }, "T")),
            o.createElement("div", {
                className: "webim-send-wrapper"
            }, o.createElement("div", {
                className: "webim-chatwindow-options"
            }, n), o.createElement("ul", {
                ref: "emoji",
                onClick: this.selectEmoji,
                className: e
            }), o.createElement("textarea", {
                ref: "textarea",
                onKeyDown: this.handleKeyDown
            }), o.createElement(i, {
                className: "webim-send-btn base-bgcolor" + t,
                text: Demo.lan.send,
                onClick: this.sendText
            }))
        }
    })
}
, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t, n = function(e) {
            t.setUploadURL(e),
            t.startUpload()
        }, o = function() {
            WebIM.utils.uploadFile.call(Demo.conn, {
                apiUrl: WebIM.config.apiURL,
                flashUpload: n
            })
        }, r = {
            shim: function(t) {
                if (WebIM.utils.isCanUploadFile) {
                    var n = (document.title,
                    document.getElementById(e.fileInputId));
                    if ("undefined" != typeof SWFUpload && n)
                        return new SWFUpload({
                            file_post_name: "file",
                            flash_url: "demo/javascript/dist/swfupload/swfupload.swf",
                            button_placeholder_id: e.fileInputId,
                            button_width: 120,
                            button_height: 30,
                            button_cursor: SWFUpload.CURSOR.HAND,
                            button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
                            file_size_limit: 10485760,
                            file_upload_limit: 0,
                            file_queued_error_handler: function() {},
                            file_dialog_start_handler: function() {},
                            file_dialog_complete_handler: function() {},
                            file_queued_handler: function(e) {
                                this.getStats().files_queued > 1 && this.cancelUpload(),
                                10485760 < e.size ? (Demo.api.NotifyError(Demo.lan.exceed),
                                this.cancelUpload()) : Demo.IMGTYPE[e.type.slice(1).toLowerCase()] ? (this.filetype = "img",
                                o()) : Demo.FILETYPE[e.type.slice(1).toLowerCase()] ? (this.filetype = "audio",
                                o()) : Demo.AUDIOTYPE[e.type.slice(1).toLowerCase()] ? (this.filetype = "file",
                                o()) : (Demo.api.NotifyError(Demo.lan.invalidType + e.type),
                                this.cancelUpload())
                            },
                            upload_error_handler: function(e, t, n) {
                                if (t != SWFUpload.UPLOAD_ERROR.FILE_CANCELLED && t != SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED && t != SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED) {
                                    var o = {
                                        data: Demo.lan.uploadFileFailed,
                                        to: Demo.selected
                                    };
                                    Demo.api.addToChatRecord(o, "txt"),
                                    Demo.api.appendMsg(o, "txt")
                                }
                            },
                            upload_success_handler: function(e, t) {
                                if (e && t) {
                                    var n = this;
                                    try {
                                        var o = WebIM.utils.parseUploadResponse(t);
                                        o = JSON.parse(o),
                                        e && !e.url && o.entities && o.entities.length > 0 && (e.url = ("https:" != location.protocol && WebIM.config.isHttpDNS ? Demo.conn.apiUrl : o.uri) + "/" + o.entities[0].uuid);
                                        var r = new WebIM.message(this.filetype,Demo.conn.getUniqueId())
                                          , i = {
                                            body: {
                                                type: this.filetype,
                                                url: e.url,
                                                filename: e.name
                                            },
                                            file: e,
                                            to: Demo.selected,
                                            roomType: "chatrooms" === Demo.selectedCate,
                                            success: function(t) {
                                                var o = {
                                                    data: e.url,
                                                    from: Demo.user,
                                                    to: Demo.selected
                                                };
                                                Demo.api.addToChatRecord(o, n.filetype),
                                                Demo.api.appendMsg(o, n.filetype)
                                            }
                                        };
                                        r.set(i),
                                        "groups" === Demo.selectedCate ? r.setGroup(Demo.groupType) : "chatrooms" === Demo.selectedCate && r.setGroup(Demo.groupType),
                                        Demo.conn.send(r.body)
                                    } catch (e) {
                                        Demo.api.NotifyError("文件发送失败")
                                    }
                                }
                            }
                        })
                }
            }
        };
        return !WebIM.utils.isCanUploadFileAsync && WebIM.utils.isCanUploadFile && (t = r.shim(e.fileInputId)),
        r
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(164)
      , i = n(187)
      , a = n(188)
      , s = n(189)
      , l = n(190);
    e.exports = o.createClass({
        displayName: "exports",
        getInitialState: function() {
            return {
                admin: !1,
                hide: !0
            }
        },
        update: function() {
            if (0 == this.props.owner.length)
                return void this.props.getGroupInfo("opertion");
            var e = !1
              , t = this.props.owner[0].jid
              , n = t.substr(0, t.lastIndexOf("@"));
            if (n == Demo.user)
                e = !0,
                this.setState({
                    hide: !this.state.hide,
                    admin: e
                });
            else if (this.state.admin)
                this.setState({
                    hide: !this.state.hide
                });
            else {
                var o = {
                    groupId: Demo.selected,
                    success: function(t) {
                        for (var n in t.data)
                            if (t.data[n] == Demo.user) {
                                e = !0;
                                break
                            }
                        this.setState({
                            hide: !this.state.hide,
                            admin: e
                        })
                    }
                    .bind(this)
                };
                Demo.conn.getGroupAdmin(o)
            }
        },
        componentDidUpdate: function() {
            !this.state.hide && r.findDOMNode(this.refs["webim-operations"]).focus()
        },
        handleOnBlur: function() {
            this.setState({
                hide: !0
            })
        },
        adminGroupMembers: function() {
            s.show(this.props.name, this.props.roomId, this.props.settings),
            this.update()
        },
        changeGroupInfo: function() {
            i.show(this.props.roomId, this.props.fields, this.props.getGroupInfo),
            this.update()
        },
        showGroupBlacklist: function() {
            l.show(this.props.roomId),
            this.update()
        },
        addGroupMember: function() {
            a.show(this.props.roomId),
            this.update()
        },
        destroyGroup: function() {
            this.props.roomId;
            if (WebIM.config.isWindowSDK)
                WebIM.doQuery('{"type":"destroyGroup","id":"' + this.props.roomId + '"}', function() {
                    Demo.api.updateGroup()
                }, function(e, t) {
                    Demo.api.NotifyError("destroyGroup:" + e + " " + t)
                });
            else {
                var e = this.props.roomId
                  , t = {
                    groupId: e,
                    success: function(t) {
                        Demo.api.NotifySuccess("You just dissolved group " + e),
                        Demo.api.updateGroup()
                    },
                    error: function(e, t) {
                        Demo.api.NotifyError("destroyGroup:" + e + " " + t)
                    }
                };
                Demo.conn.dissolveGroup(t)
            }
            this.props.destroyGroup(),
            this.update()
        },
        leaveGroupBySelf: function() {
            if (WebIM.config.isWindowSDK)
                WebIM.doQuery('{"type":"leaveGroup","id":"' + this.props.roomId + '"}', function(e) {
                    Demo.api.updateGroup()
                }, function(e, t) {
                    Demo.api.NotifyError("leaveGroup:" + e + " " + t)
                });
            else {
                var e = this.props.roomId
                  , t = {
                    groupId: e,
                    success: function() {
                        Demo.selected = "",
                        Demo.api.updateGroup(),
                        delete Demo.chatRecord[e],
                        Demo.api.NotifySuccess("You have been out of the group " + e)
                    },
                    error: function(e, t) {
                        Demo.api.NotifyError("leaveGroup:" + e + " " + t)
                    }
                };
                Demo.conn.quitGroup(t)
            }
            this.props.leaveGroup(),
            this.update()
        },
        shield: function() {
            var e = this.props.roomId;
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var t = {
                    groupId: e,
                    success: function() {},
                    error: function() {}
                };
                Demo.conn.blockGroup(t)
            }
        },
        render: function() {
            var e = 1 == this.state.admin ? Demo.lan.destroyGroup : Demo.lan.leaveGroup
              , t = 1 == this.state.admin ? this.destroyGroup : this.leaveGroupBySelf
              , n = "";
            return this.state.admin ? n = Demo.lan.adminGroupMembers : "PRIVATE_MEMBER_INVITE" == this.props.settings && (n = Demo.lan.inviteGroupMembers),
            o.createElement("div", null, o.createElement("i", {
                ref: "switch",
                className: "webim-operations-icon font xsmaller",
                onClick: this.update
            }, "M"), o.createElement("ul", {
                tabIndex: "-1",
                ref: "webim-operations",
                className: "webim-operations " + (this.state.hide ? "hide" : ""),
                onBlur: this.handleOnBlur
            }, o.createElement("li", {
                onClick: this.adminGroupMembers,
                className: this.state.admin ? "" : "hide"
            }, o.createElement("i", {
                className: "font smallest"
            }, "F"), o.createElement("span", null, n)), o.createElement("li", {
                onClick: this.addGroupMember
            }, o.createElement("i", {
                className: "font smallest"
            }, "L"), o.createElement("span", null, Demo.lan.addGroupMember)), o.createElement("li", {
                onClick: this.changeGroupInfo,
                className: this.state.admin ? "" : "hide"
            }, o.createElement("i", {
                className: "font smallest"
            }, "B"), o.createElement("span", null, Demo.lan.changeGroupInfo)), o.createElement("li", {
                onClick: this.showGroupBlacklist,
                className: this.state.admin ? "" : "hide"
            }, o.createElement("i", {
                className: "font smallest"
            }, "n"), o.createElement("span", null, Demo.lan.groupBlacklist)), o.createElement("li", {
                onClick: t
            }, o.createElement("i", {
                className: "font smallest"
            }, "Q"), o.createElement("span", null, " ", e))))
        }
    })
}
, function(module, exports, __webpack_require__) {
    "use strict";
    var React = __webpack_require__(12)
      , ReactDOM = __webpack_require__(164)
      , componentsNode = document.getElementById("components")
      , dom = document.createElement("div");
    componentsNode.appendChild(dom);
    var UI = __webpack_require__(168)
      , Button = UI.Button
      , Input = UI.Input
      , ChangeGroupSubject = React.createClass({
        displayName: "ChangeGroupSubject",
        getInitialState: function() {
            return {
                subject: this.props.fields.name || "",
                description: this.props.fields.description || ""
            }
        },
        onSubjectChange: function(e) {
            this.setState({
                subject: e.target.value
            })
        },
        onDescriptionChange: function(e) {
            this.setState({
                description: e.target.value
            })
        },
        onSubmit: function onSubmit() {
            var _this = this
              , value = this.state.subject;
            if (!value)
                return void Demo.api.NotifyError("Group subject couldn't be null.");
            if (WebIM.config.isWindowSDK)
                WebIM.doQuery('{"type":"changeGroupSubject", "id":"' + this.props.roomId + '", "subject":"' + this.state.subject + '"}', function(response) {
                    var json = eval("(" + str + ")");
                    Demo.api.changeGroupSubjectCallBack(json.id, json.subject)
                }, function(e, t) {
                    Demo.api.NotifyError("changeGroupSubject:" + e)
                }),
                WebIM.doQuery('{"type":"changeGroupDescription", "id":"' + this.props.roomId + '", "description":"' + this.state.description + '"}', function(e) {}, function(e, t) {
                    Demo.api.NotifyError("changeGroupDescription:" + e)
                });
            else {
                var options = {
                    groupId: this.props.roomId,
                    groupName: this.state.subject,
                    description: this.state.description,
                    success: function() {
                        Demo.api.changeGroupSubjectCallBack(_this.props.roomId, value),
                        "function" == typeof _this.props.getGroupInfo && _this.props.getGroupInfo("groupChat")
                    }
                };
                console.log(options),
                Demo.conn.modifyGroup(options)
            }
            this.close()
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        render: function() {
            return React.createElement("div", {
                className: "webim-friend-options"
            }, React.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), React.createElement("div", {
                className: "webim-dialog"
            }, React.createElement("h3", null, Demo.lan.changeGroupInfo), React.createElement("div", {
                className: "webim-dialog-body"
            }, React.createElement(Input, {
                defaultFocus: "true",
                placeholder: Demo.lan.groupSubject,
                value: this.state.subject,
                onChange: this.onSubjectChange
            }), React.createElement(Input, {
                defaultFocus: "false",
                placeholder: Demo.lan.groupDescription,
                value: this.state.description,
                onChange: this.onDescriptionChange
            })), React.createElement("div", {
                className: "webim-dialog-footer"
            }, React.createElement(Button, {
                text: Demo.lan.confirm,
                onClick: this.onSubmit,
                className: "webim-dialog-button"
            })), React.createElement("span", {
                className: "font",
                onClick: this.close
            }, "A")))
        }
    });
    module.exports = {
        show: function(e, t, n) {
            ReactDOM.render(React.createElement(ChangeGroupSubject, {
                onClose: this.close,
                roomId: e,
                fields: t,
                getGroupInfo: n
            }), dom)
        },
        close: function() {
            ReactDOM.unmountComponentAtNode(dom)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(164)
      , i = document.getElementById("components")
      , a = document.createElement("div");
    i.appendChild(a);
    var s = n(168)
      , l = s.Button
      , c = s.Input
      , u = o.createClass({
        displayName: "AddGroupMember",
        getInitialState: function() {
            return {
                username: ""
            }
        },
        onInputChange: function(e) {
            this.setState({
                username: e.target.value
            })
        },
        onSubmit: function() {
            var e = this.state.username
              , t = Demo.selected
              , n = [];
            n.push(e);
            var o = {
                groupId: t,
                users: n,
                success: function() {
                    Demo.api.NotifySuccess("Invite succeed!")
                },
                error: function(e) {
                    Demo.api.NotifyError(e.data)
                }
            };
            Demo.conn.inviteToGroup(o)
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        render: function() {
            return o.createElement("div", {
                className: "webim-friend-options"
            }, o.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), o.createElement("div", {
                className: "webim-dialog"
            }, o.createElement("h3", null, Demo.lan.addGroupMember), o.createElement("div", {
                ref: "content"
            }, o.createElement(c, {
                defaultFocus: "true",
                placeholder: Demo.lan.username,
                onChange: this.onInputChange
            }), o.createElement(l, {
                text: Demo.lan.add,
                onClick: this.onSubmit,
                className: "webim-dialog-button-search"
            })), o.createElement("span", {
                className: "font",
                onClick: this.close
            }, "A")))
        }
    });
    e.exports = {
        show: function(e) {
            r.render(o.createElement(u, {
                onClose: this.close,
                roomId: e
            }), a)
        },
        close: function() {
            r.unmountComponentAtNode(a)
        }
    }
}
, function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var _multiSelectBoxList = __webpack_require__(177)
      , _multiSelectBoxList2 = _interopRequireDefault(_multiSelectBoxList)
      , React = __webpack_require__(12)
      , ReactDOM = __webpack_require__(164)
      , _ = __webpack_require__(178)
      , componentsNode = document.getElementById("components")
      , dom = document.createElement("div");
    componentsNode.appendChild(dom);
    var UI = __webpack_require__(168)
      , Button = UI.Button
      , Input = UI.Input
      , FridendList = React.createClass({
        displayName: "FridendList",
        getInitialState: function getInitialState() {
            var me = this;
            WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"groupMembers","id":"' + me.props.roomId + '"}', function success(str) {
                var members = eval("(" + str + ")");
                if (members && members.length > 0) {
                    for (var values = [], values_old = [], i = 0, l = members.length; i < l; i++) {
                        var jid = members[i].jid
                          , username = jid.substring(jid.indexOf("_") + 1).split("@")[0];
                        values.push({
                            id: username,
                            text: username
                        }),
                        values_old.push(username)
                    }
                    me.setState({
                        value: values,
                        value_old: values_old
                    })
                }
            }, function(e, t) {
                Demo.api.NotifyError("FridendList queryRoomMember:" + e + " " + t)
            }) : Demo.conn.queryRoomMember({
                roomId: me.props.roomId,
                success: function(e) {
                    if (e && e.length > 0) {
                        for (var t = [], n = [], o = 0, r = e.length; o < r; o++) {
                            var i = e[o].jid
                              , a = i.substring(i.indexOf("_") + 1).split("@")[0];
                            t.push({
                                id: a,
                                text: a
                            }),
                            n.push(a)
                        }
                        me.setState({
                            value: t,
                            value_old: n
                        })
                    }
                },
                error: function(e) {
                    Demo.api.NotifyError("FridendList queryRoomMember:" + e)
                }
            });
            var options = [];
            for (var name in this.props.optionData)
                options.push({
                    id: name,
                    text: name
                });
            return {
                options: options,
                value: [],
                value_old: []
            }
        },
        getValueOld: function() {
            return this.state.value_old
        },
        render: function() {
            return React.createElement("div", {
                className: "container"
            }, React.createElement(_multiSelectBoxList2.default, {
                ref: "multiSelected",
                options: this.state.options,
                value: this.state.value,
                nameText: Demo.lan.groupMemberLabel,
                label: Demo.lan.chooseGroupMember,
                selectedLabel: Demo.lan.selectedLabel,
                value_old: this.state.value_old
            }))
        }
    })
      , AdminGroupMembers = React.createClass({
        displayName: "AdminGroupMembers",
        onSubmit: function() {
            var e = []
              , t = this.refs.friendList.refs.multiSelected.value();
            _.each(t, function(t, n) {
                e.push(t.text)
            });
            for (var n = this.refs.friendList.getValueOld(), o = e, r = [], i = [], a = 0, s = o.length; a < s; a++)
                n.includes(o[a]) || r.push(o[a]);
            for (var a = 0, s = n.length; a < s; a++)
                o.includes(n[a]) || i.push(n[a]);
            if ("PRIVATE_MEMBER_INVITE" == this.props.value && i.length > 0)
                return void Demo.api.NotifyError(Demo.lan.deletePrivateGroupMember);
            if (WebIM.config.isWindowSDK) {
                if (r.length > 0) {
                    var r = '["' + r.join('","') + '"]';
                    WebIM.doQuery('{"type":"addGroupMembers","welcomeMessage":"","id":"' + this.props.roomId + '","members":' + r + "}", function(e) {}, function(e, t) {
                        Demo.api.NotifyError("onSubmit:code:" + e + " " + t)
                    })
                }
                if (i.length > 0) {
                    var i = '["' + i.join('","') + '"]';
                    WebIM.doQuery('{"type":"removeGroupMembers","welcomeMessage":"","id":"' + this.props.roomId + '","members":' + i + "}", function(e) {}, function(e, t) {
                        Demo.api.NotifyError("onSubmit:code:" + e + " " + t)
                    })
                }
            } else
                r.length > 0 && Demo.conn.addGroupMembers({
                    list: r,
                    roomId: this.props.roomId,
                    reason: Demo.user + " invite you to join group '" + this.props.name + "'",
                    success: function(e) {
                        var t = r.join(", ")
                          , n = WebIM.utils.sprintf(Demo.lan.inviteGroup, t);
                        Demo.api.NotifySuccess(n)
                    }
                }),
                i.length > 0 && Demo.conn.leaveGroup({
                    list: i,
                    roomId: this.props.roomId
                });
            this.close()
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        render: function() {
            return React.createElement("div", {
                className: "webim-friend-options"
            }, React.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), React.createElement("div", {
                className: "webim-dialog"
            }, React.createElement("h3", null, Demo.lan.adminGroupMembers), React.createElement("div", null, React.createElement(FridendList, {
                ref: "friendList",
                optionData: Demo.roster,
                roomId: this.props.roomId
            })), React.createElement(Button, {
                text: Demo.lan.confirm,
                onClick: this.onSubmit,
                className: "webim-dialog-button"
            }), React.createElement("span", {
                className: "font",
                onClick: this.close
            }, "A")))
        }
    });
    module.exports = {
        show: function(e, t, n) {
            ReactDOM.render(React.createElement(AdminGroupMembers, {
                onClose: this.close,
                name: e,
                roomId: t,
                settings: n
            }), dom)
        },
        close: function() {
            ReactDOM.unmountComponentAtNode(dom)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(164)
      , i = n(178)
      , a = document.getElementById("components")
      , s = document.createElement("div");
    a.appendChild(s);
    var l = n(168)
      , c = l.Button
      , u = o.createClass({
        displayName: "ShowGroupBlacklist",
        getInitialState: function() {
            return {
                list: []
            }
        },
        componentDidMount: function() {
            var e = this;
            Demo.api.blacklist.getGroupBlacklist({
                roomId: this.props.roomId,
                groupId: this.props.roomId,
                success: function(t) {
                    e.setState({
                        list: t
                    })
                }
            })
        },
        onRemoveFromGroupBlackList: function(e) {
            var t = this.state.list;
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var n = {
                    groupId: Demo.selected,
                    username: e,
                    success: function() {
                        for (var n in t)
                            t[n] == e && delete t[n];
                        this.setState({
                            list: t
                        })
                    }
                    .bind(this)
                };
                Demo.conn.removeGroupBlockSingle(n)
            }
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        render: function() {
            var e = this
              , t = [];
            return i.each(this.state.list, function(n, r) {
                n && t.push(o.createElement("li", {
                    className: "webim-blacklist-item",
                    key: n
                }, n, o.createElement("i", {
                    className: "webim-leftbar-icon font smaller",
                    onClick: e.onRemoveFromGroupBlackList.bind(e, n)
                }, "d")))
            }),
            o.createElement("div", {
                className: "webim-friend-options"
            }, o.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), o.createElement("div", {
                className: "webim-dialog",
                style: {
                    height: "auto"
                }
            }, o.createElement("h3", null, Demo.lan.showGroupBlacklist), o.createElement("div", {
                ref: "content",
                className: "webim-dialog-body"
            }, o.createElement("ul", {
                className: "webim-blacklist-wrapper"
            }, t)), o.createElement("div", {
                className: "webim-dialog-footer"
            }, o.createElement(c, {
                text: Demo.lan.confirm,
                onClick: this.close,
                className: "webim-dialog-button"
            })), o.createElement("span", {
                className: "font",
                onClick: this.close
            }, "A")))
        }
    });
    e.exports = {
        show: function(e) {
            r.render(o.createElement(u, {
                onClose: this.close,
                roomId: e
            }), s)
        },
        close: function() {
            r.unmountComponentAtNode(s)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(12);
    n(164);
    e.exports = o.createClass({
        displayName: "exports",
        getInitialState: function() {
            return {
                hide: !0
            }
        },
        update: function() {
            this.setState({
                hide: !this.state.hide
            })
        },
        componentDidUpdate: function() {},
        handleOnBlur: function() {
            this.setState({
                hide: !0
            })
        },
        delFriend: function() {
            var e = this.props.name;
            if (e) {
                if (delete Demo.chatRecord[e],
                e == Demo.user || !Demo.roster[e])
                    return Demo.api.NotifyError(e + " " + Demo.lan.delFriendSelfInvalid),
                    void this.update();
                WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"delFriend","to":"' + e + '"}', function(e) {
                    alert(Demo.lan.contact_deleted)
                }, function(e, t) {
                    Demo.api.NotifyError("delFriend:" + e)
                }) : Demo.conn.removeRoster({
                    to: e,
                    success: function() {
                        Demo.roster[e] && delete Demo.roster[e],
                        Demo.conn.unsubscribed({
                            to: e
                        })
                    },
                    error: function() {}
                }),
                Demo.selected = "",
                this.props.delFriend(),
                this.update()
            }
        },
        addToBlackList: function(e) {
            var t = this.props.name;
            if (t) {
                var t = this.props.name
                  , n = this;
                if (WebIM.config.isWindowSDK)
                    WebIM.doQuery('{"type":"addToBlackList", "username": "' + t + '"}', function(e) {
                        var o = Demo.api.bBlacklist.add(t);
                        n.setState({
                            blacklist: o
                        }),
                        Demo.api.updateRoster()
                    }, function(e, t) {
                        Demo.api.NotifyError("getRoster:" + e)
                    });
                else {
                    var o = Demo.api.blacklist.add(t);
                    Demo.conn.addToBlackList({
                        list: o,
                        success: function() {
                            n.props.updateNode(null)
                        },
                        error: function() {}
                    })
                }
            }
        },
        render: function() {
            return o.createElement("div", null, o.createElement("i", {
                ref: "switch",
                className: "webim-operations-icon font xsmaller",
                onClick: this.update
            }, "M"), o.createElement("ul", {
                tabIndex: "-1",
                ref: "webim-operations",
                className: "webim-operations " + (this.state.hide ? "hide" : ""),
                onBlur: this.handleOnBlur
            }, o.createElement("li", {
                onClick: this.delFriend
            }, o.createElement("i", {
                className: "font smallest"
            }, "C"), o.createElement("span", null, Demo.lan.delAFriend)), o.createElement("li", {
                onClick: this.addToBlackList
            }, o.createElement("i", {
                className: "font smallest"
            }, "n"), o.createElement("span", null, Demo.lan.addToBlackList))))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(164)
      , i = n(193)
      , a = o.createClass({
        displayName: "Channel",
        getInitialState: function() {
            return {
                localFullRemoteCorner: this.props.localFullRemoteCorner,
                full_width: 400,
                full_height: 400,
                toggle_right: 0,
                toggle_top: 0,
                toggle_display: "none",
                close_right: 0,
                close_bottom: 0,
                accept_left: 0,
                accept_bottom: 0,
                accept_display: this.props.hideAccept ? "none" : "block",
                mute_left: 0,
                mute_bottom: 6,
                mute_display: "none"
            }
        },
        close: function() {
            this.props.close();
            try {
                Demo.call.endCall()
            } catch (e) {
                console.log("endCall error1:", e)
            }
        },
        accept: function() {
            Demo.call.acceptCall()
        },
        toggle: function() {
            this.state.full_width == this.local_width && this.state.full_height == this.local_height ? (this.state.full_width = this.remote_width,
            this.state.full_height = this.remote_height) : (this.state.full_width = this.local_width,
            this.state.full_height = this.local_height),
            this.setState({
                localFullRemoteCorner: !this.state.localFullRemoteCorner,
                full_width: this.state.full_width,
                full_height: this.state.full_height
            })
        },
        mute: function() {
            this.refs.remoteVideo.muted = !this.refs.remoteVideo.muted;
            var e = this.refs.remoteVideo.muted;
            e ? this.refs.mute.style.color = "#4eb1f4" : this.refs.mute.style.color = "#eeeeee"
        },
        setStream: function(e) {
            this.refs.remoteVideo.srcObject = e.remoteStream,
            this.refs.localVideo.srcObject = e.localStream
        },
        componentWillReceiveProps: function(e) {
            console.log("componentWillReceiveProps", e),
            this.setStream(e)
        },
        componentDidMount: function() {
            console.log("did mount", this.props),
            new i(this.refs.onAcceptCallrtc),
            this.resetButtonPosition();
            var e = this.refs.localVideo
              , t = this.refs.remoteVideo;
            t.addEventListener("canplay", this.canplayRemoteHandler),
            e.addEventListener("loadedmetadata", this.loadedmetadataLocalHandler),
            t.addEventListener("loadedmetadata", this.loadedmetadataRemoteHandler),
            e.addEventListener("resize", this.resizeLocalHandler),
            t.addEventListener("resize", this.resizeRemoteHandler)
        },
        componentWillUnmount: function() {
            var e = this.refs.localVideo
              , t = this.refs.remoteVideo;
            t.removeEventListener("canplay", this.canplayRemoteHandler),
            e.removeEventListener("loadedmetadata", this.loadedmetadataLocalHandler),
            t.removeEventListener("loadedmetadata", this.loadedmetadataRemoteHandler),
            e.removeEventListener("resize", this.resizeLocalHandler),
            t.removeEventListener("resize", this.resizeRemoteHandler)
        },
        canplayRemoteHandler: function() {
            this.setState({
                toggle_display: "block",
                mute_display: "block",
                accept_display: "none"
            })
        },
        loadedmetadataLocalHandler: function() {
            var e = this.refs.localVideo;
            return this.local_width = e.videoWidth,
            this.local_height = e.videoHeight,
            0 == this.local_width && 0 == this.local_height ? void this.setState({
                toggle_display: "none",
                localVideo_display: "none"
            }) : void this.setState({
                full_width: e.videoWidth,
                full_height: e.videoHeight
            })
        },
        loadedmetadataRemoteHandler: function() {
            var e = this.refs.remoteVideo
              , t = this.props.remoteStream.getVideoTracks()[0] && this.props.remoteStream.getVideoTracks()[0].enabled
              , n = this.props.remoteStream.getAudioTracks()[0].enabled;
            t && (this.remote_width = e.videoWidth,
            this.remote_height = e.videoHeight,
            this.setState({
                full_width: e.videoWidth,
                full_height: e.videoHeight
            })),
            n && !t && (this.setState({
                full_width: 330,
                full_height: 90
            }),
            this.setState({
                toggle_display: "none",
                localVideo_display: "none"
            }))
        },
        resizeLocalHandler: function() {
            var e = this.refs.localVideo;
            this.state.localFullRemoteCorner && (this.local_width = e.videoWidth,
            this.local_height = e.videoHeight,
            this.setState({
                full_width: e.videoWidth,
                full_height: e.videoHeight
            }))
        },
        resizeRemoteHandler: function() {
            var e = this.refs.remoteVideo;
            if (!this.state.localFullRemoteCorner) {
                var t = this.props.remoteStream.getVideoTracks()[0] && this.props.remoteStream.getVideoTracks()[0].enabled
                  , n = this.props.remoteStream.getAudioTracks()[0].enabled;
                t && (this.remote_width = e.videoWidth,
                this.remote_height = e.videoHeight,
                this.setState({
                    full_width: e.videoWidth,
                    full_height: e.videoHeight
                })),
                n && !t && (this.setState({
                    full_width: 330,
                    full_height: 90
                }),
                this.setState({
                    toggle_display: "none",
                    localVideo_display: "none"
                }))
            }
        },
        resetButtonPosition: function() {
            this.setState({
                toggle_right: 6,
                toggle_top: 6,
                close_right: 6,
                close_bottom: 6,
                accept_left: 6,
                accept_bottom: 6
            })
        },
        render: function() {
            var e = this.state.localFullRemoteCorner ? "full" : "corner"
              , t = this.state.localFullRemoteCorner ? "corner" : "full";
            return o.createElement("div", {
                ref: "rtc",
                className: "webim-rtc-video",
                style: {
                    width: this.state.full_width + "px",
                    height: this.state.full_height + "px"
                }
            }, o.createElement("video", {
                ref: "localVideo",
                className: e,
                muted: !0,
                autoPlay: !0
            }), o.createElement("video", {
                ref: "remoteVideo",
                className: t,
                autoPlay: !0
            }), o.createElement("span", null, this.props.title), o.createElement("i", {
                ref: "close",
                id: "webrtc_close",
                className: "font small close",
                style: {
                    left: "auto",
                    right: this.state.close_right + "px",
                    top: "auto",
                    bottom: this.state.close_bottom + "px"
                },
                onClick: this.close
            }, "Q"), o.createElement("i", {
                ref: "accept",
                className: "font small accept",
                style: {
                    display: this.state.accept_display,
                    left: this.state.accept_left + "px",
                    right: "auto",
                    top: "auto",
                    bottom: this.state.accept_bottom + "px"
                },
                onClick: this.accept
            }, "z"), o.createElement("i", {
                ref: "toggle",
                className: "font small toggle",
                style: {
                    display: this.state.toggle_display,
                    left: "auto",
                    right: this.state.toggle_right + "px",
                    top: this.state.toggle_top + "px",
                    bottom: "auto"
                },
                onClick: this.toggle
            }, "d"), o.createElement("i", {
                ref: "mute",
                className: "font small mute",
                style: {
                    display: this.state.mute_display,
                    left: this.state.toggle_right + "px",
                    right: "auto",
                    top: "auto",
                    bottom: this.state.mute_bottom + "px"
                },
                onClick: this.mute
            }, "m"))
        }
    });
    e.exports = function(e) {
        this.dom = e;
        var t = this;
        return {
            setLocal: function(e, n) {
                this.localStream = e;
                var i = ""
                  , s = !1
                  , l = !1;
                Demo.user == Demo.call.caller ? (i = "等候 " + Demo.call.callee.split("@")[0].split("_")[1] + ("VOICE" == n ? " 语音中..." : " 视频中..."),
                s = !0) : i = Demo.call.callee.split("@")[0].split("_")[1],
                r.render(o.createElement(a, {
                    close: this.close,
                    localStream: this.localStream,
                    remoteStream: this.remoteStream,
                    title: i,
                    hideAccept: s,
                    localFullRemoteCorner: l
                }), t.dom)
            },
            setRemote: function(e, n) {
                this.remoteStream = e;
                var i = ""
                  , s = !1;
                i = "" != Demo.call.caller && Demo.call.caller == Demo.user ? Demo.call.callee.split("@")[0].split("_")[1] : Demo.call.callee.split("@")[0].split("_")[1] + ("VOICE" == n ? " 请求语音通话..." : " 请求视频通话..."),
                r.render(o.createElement(a, {
                    close: this.close,
                    localStream: this.localStream,
                    remoteStream: this.remoteStream,
                    title: i,
                    localFullRemoteCorner: s
                }), t.dom)
            },
            ringing: function(e, n) {
                var i = ""
                  , s = !1;
                i = "" != Demo.call.caller && Demo.call.caller == Demo.user ? Demo.call.callee.split("@")[0].split("_")[1] : Demo.call.callee.split("@")[0].split("_")[1] + ("VOICE" == n ? " 请求语音通话..." : " 请求视频通话..."),
                r.render(o.createElement(a, {
                    close: this.close,
                    title: i,
                    localFullRemoteCorner: s
                }), t.dom)
            },
            close: function() {
                var e = this.localStream
                  , n = this.remoteStream;
                n && n.getTracks().forEach(function(e) {
                    e.stop()
                }),
                e && e.getTracks().forEach(function(e) {
                    e.stop()
                });
                var o = t.dom.getElementsByTagName("video");
                if (o && o.length > 0)
                    for (var i = 0; i < o.length; i++)
                        o[i].srcObject = null;
                r.unmountComponentAtNode(t.dom)
            }
        }
    }
}
, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t = function() {
            var e = {};
            return document.addEventListener ? (e.bind = function(e, t, n) {
                e.addEventListener(t, n, !1)
            }
            ,
            e.unbind = function(e, t, n) {
                e.removeEventListener(t, n)
            }
            ) : document.attachEvent ? (e.bind = function(e, t, n) {
                e.attachEvent("on" + t, n, !1)
            }
            ,
            e.unbind = function(e, t, n) {
                e.detachEvent(t, n)
            }
            ) : (e.bind = function(e, t, n) {
                e["on" + t] = n
            }
            ,
            e.unbind = function(e, t, n) {
                e["on" + t] = null
            }
            ),
            e
        }();
        return function(n) {
            var o = this;
            if (o.dom = n,
            !o.dom)
                return !1;
            o._dragFlag = !1,
            o._st = 0,
            o._startPosition = {
                x: 0,
                y: 0
            };
            var r = function(n) {
                var r = e.event || n
                  , a = o.dom.getBoundingClientRect();
                o._dragFlag = !0,
                o._width = document.documentElement.clientWidth,
                o._height = document.documentElement.clientHeight,
                o._startPosition.x = r.clientX - a.left,
                o._startPosition.y = r.clientY - a.top,
                o.rect = {
                    width: a.width,
                    height: a.height
                },
                t.bind(document, "mousemove", i)
            }
              , i = function(t) {
                if (!o._dragFlag)
                    return !1;
                var n = e.event || t
                  , r = o._width - n.clientX - o.rect.width + o._startPosition.x
                  , i = o._height - n.clientY - o.rect.height + o._startPosition.y;
                n.clientX - o._startPosition.x <= 0 ? r = o._width - o.rect.width : n.clientX + o.rect.width - o._startPosition.x >= o._width && (r = 0),
                n.clientY - o._startPosition.y <= 0 ? i = o._height - o.rect.height : n.clientY + o.rect.height - o._startPosition.y >= o._height && (i = 0),
                o.dom.style.left = "auto",
                o.dom.style.top = "auto",
                o.dom.style.right = r + "px",
                o.dom.style.bottom = i + "px",
                o.position = {
                    x: r,
                    y: i
                },
                clearTimeout(o._st),
                o._st = setTimeout(a, 500)
            }
              , a = function() {
                return o._dragFlag = !1,
                t.unbind(document, "mousemove", i),
                !!o.position && (o.dom.style.left = "auto",
                o.dom.style.top = "auto",
                o.dom.style.right = o.position.x + "px",
                o.dom.style.bottom = o.position.y + "px",
                void (o.dom.style.display = "block"))
            }
              , s = function() {
                t.bind(e, "resize", function() {
                    if (o.rect && o.rect.width) {
                        var e = document.documentElement.clientWidth
                          , t = document.documentElement.clientHeight
                          , n = Number(o.dom.style.right.slice(0, -2))
                          , r = Number(o.dom.style.bottom.slice(0, -2));
                        e < o.rect.width ? (o.dom.style.left = "auto",
                        o.dom.style.right = 0) : e - n < o.rect.width ? (o.dom.style.right = e - o.rect.width + "px",
                        o.dom.style.left = 0) : o.dom.style.left = "auto",
                        t < o.rect.height ? (o.dom.style.top = "auto",
                        o.dom.style.bottom = 0) : t - r < o.rect.height ? (o.dom.style.bottom = t - o.rect.height + "px",
                        o.dom.style.top = 0) : o.dom.style.top = "auto"
                    }
                })
            };
            t.bind(o.dom, "mousedown", r),
            t.bind(o.dom, "mouseup", a),
            t.bind(e, "resize", s)
        }
    }(window)
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(164)
      , i = document.getElementById("components")
      , a = document.createElement("div");
    i.appendChild(a);
    var s = n(168)
      , l = s.Button
      , c = (s.Input,
    o.createClass({
        displayName: "Subscribe",
        check: function(e, t) {
            1 === e.parentNode.childNodes.length ? (e.parentNode.removeChild(e),
            this.close()) : e.parentNode.removeChild(e),
            this.props.onHandle(t)
        },
        agree: function(e) {
            var t = e.target.parentNode
              , n = t.getAttribute("id");
            WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"acceptInvitation","to":"' + n + '"}', function(e) {}, function(e, t) {
                Demo.api.NotifyError("agree:" + e + " " + t)
            }) : (Demo.conn.subscribed({
                to: n,
                message: "[resp:true]"
            }),
            Demo.conn.subscribe({
                to: n,
                message: "[resp:true]"
            })),
            this.check(t, n)
        },
        reject: function(e) {
            var t = e.target.parentNode
              , n = t.getAttribute("id");
            WebIM.config.isWindowSDK ? WebIM.doQuery('{"type":"declineInvitation","to":"' + n + '"}', function(e) {}, function(e, t) {
                Demo.api.NotifyError("reject:" + e + " " + t)
            }) : Demo.conn.unsubscribed({
                to: n,
                message: (new Date).toLocaleString()
            }),
            this.check(t, n)
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        render: function() {
            var e = [];
            for (var t in this.props.data)
                if (!this.props.data[t].handled) {
                    var n = this.props.data[t].msg;
                    e.push(o.createElement("li", {
                        id: t,
                        key: t
                    }, o.createElement("span", null, n), o.createElement(l, {
                        text: Demo.lan.agree,
                        onClick: this.agree,
                        className: "webim-subscribe-button"
                    }), o.createElement(l, {
                        text: Demo.lan.reject,
                        onClick: this.reject,
                        className: "error webim-subscribe-button"
                    })))
                }
            return o.createElement("div", null, o.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), o.createElement("div", {
                className: "webim-dialog webim-friend-requests"
            }, o.createElement("h3", null, "Friends Request"), o.createElement("div", {
                ref: "content"
            }, o.createElement("ul", null, e))))
        }
    }));
    e.exports = {
        requests: {},
        show: function(e) {
            this.requests[e.from] ? this.requests[e.from].handled && (this.requests[e.from].handled = !1) : this.requests[e.from] = {
                msg: e.from + ": " + e.status,
                handled: !1
            },
            r.render(o.createElement(c, {
                onClose: this.close,
                onHandle: this.handle,
                data: this.requests
            }), a)
        },
        handle: function(t) {
            e.exports.requests[t] && (e.exports.requests[t].handled = !0)
        },
        close: function() {
            r.unmountComponentAtNode(a)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(12)
      , r = n(164)
      , i = document.getElementById("components")
      , a = document.createElement("div");
    i.appendChild(a);
    var s = n(168)
      , l = s.Button
      , c = (s.Input,
    o.createClass({
        displayName: "ConfirmPop",
        check: function(e) {
            1 === e.parentNode.childNodes.length ? (e.parentNode.removeChild(e),
            this.close()) : e.parentNode.removeChild(e)
        },
        agree: function(e) {
            var t = e.target.parentNode;
            t.getAttribute("id");
            this.props.data.agree(),
            this.check(t)
        },
        reject: function(e) {
            var t = e.target.parentNode;
            t.getAttribute("id");
            this.props.data.reject(),
            this.check(t)
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        render: function() {
            var e = []
              , t = 0;
            return this.props.data.hasOwnProperty("reject") ? e.push(o.createElement("li", {
                id: t,
                key: t
            }, o.createElement("span", null, this.props.data.msg), o.createElement("br", null), o.createElement(l, {
                text: Demo.lan.agree,
                onClick: this.agree,
                className: "webim-subscribe-button"
            }), o.createElement(l, {
                text: Demo.lan.reject,
                onClick: this.reject,
                className: "error webim-subscribe-button"
            }))) : e.push(o.createElement("li", {
                id: t,
                key: t
            }, o.createElement("span", null, this.props.data.msg), o.createElement("br", null), o.createElement(l, {
                text: Demo.lan.confirm,
                onClick: this.agree,
                className: "webim-subscribe-button"
            }))),
            o.createElement("div", null, o.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), o.createElement("div", {
                className: "webim-dialog webim-friend-requests-widnowSDK"
            }, o.createElement("h3", null, this.props.data.title), o.createElement("div", {
                ref: "content"
            }, o.createElement("ul", null, e))))
        }
    }));
    e.exports = {
        requests: {},
        show: function(e) {
            r.render(o.createElement(c, {
                onClose: this.close,
                data: e
            }), a)
        },
        close: function() {
            r.unmountComponentAtNode(a)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , r = n(12)
      , i = n(164)
      , a = document.getElementById("components")
      , s = document.createElement("div");
    a.appendChild(s);
    var l = n(168)
      , c = l.Button
      , u = r.createClass({
        displayName: "ConfirmGroupInfo",
        getInitialState: function() {
            return {
                toNick: "",
                groupName: "",
                reason: ""
            }
        },
        onRefuse: function(e) {
            this.verify(!1)
        },
        onAgree: function() {
            this.verify(!0)
        },
        verify: function(e) {
            var t = this.props.from
              , n = this.props.gid;
            if (WebIM.config.isWindowSDK)
                ;
            else {
                var o = {
                    applicant: t,
                    groupId: n,
                    success: function(e) {
                        console.log(e)
                    }
                    .bind(this),
                    error: function(e) {}
                };
                e ? Demo.conn.agreeJoinGroup(o) : Demo.conn.rejectJoinGroup(o),
                this.close()
            }
        },
        close: function() {
            "function" == typeof this.props.onClose && this.props.onClose()
        },
        render: function() {
            return r.createElement("div", {
                className: "webim-friend-options"
            }, r.createElement("div", {
                ref: "layer",
                className: "webim-layer"
            }), r.createElement("div", {
                className: "webim-dialog"
            }, r.createElement("h3", null, Demo.lan.groupNotification), r.createElement("div", {
                className: "webim-dialog-body"
            }, this.props.from + " applys to join into group:" + this.props.toNick, r.createElement("p", null, this.props.reason)), r.createElement("div", {
                className: "webim-dialog-footer"
            }, r.createElement(c, {
                text: Demo.lan.reject,
                onClick: this.onRefuse,
                className: "webim-dialog-button"
            }), r.createElement(c, {
                text: Demo.lan.agree,
                onClick: this.onAgree,
                className: "webim-dialog-button"
            })), r.createElement("span", {
                className: "font",
                onClick: this.close
            }, "A")))
        }
    });
    e.exports = {
        show: function(e) {
            i.render(r.createElement(u, o({}, e, {
                onClose: this.close
            })), s)
        },
        close: function() {
            i.unmountComponentAtNode(s)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(12);
    e.exports = o.createClass({
        displayName: "exports",
        render: function() {
            return o.createElement("div", {
                className: "webim-loading" + ("show" === this.props.show ? "" : " hide")
            }, o.createElement("img", {
                src: "demo/images/loading.gif"
            }), o.createElement("span", null, this.props.msg))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , r = n(12)
      , i = n(164)
      , a = n(172)
      , s = r.createClass({
        displayName: "TextMsg",
        render: function() {
            var e = "left" === this.props.className ? "H" : "I"
              , t = "left" != this.props.className && "friends" === Demo.selectedCate && WebIM.config.msgStatus ? "" : "hide"
              , n = this.props.id
              , o = this.props.status
              , i = this.props.nid;
            switch (o) {
            case "Undelivered":
                o = "未送达";
                break;
            case "Delivered":
                o = "已送达";
                break;
            case "Read":
                o = "已读"
            }
            return r.createElement("div", {
                className: "rel " + this.props.className
            }, r.createElement(a, {
                src: this.props.src,
                className: this.props.className + " small"
            }), r.createElement("p", {
                className: this.props.className
            }, this.props.name, " ", this.props.time), r.createElement("div", {
                className: "clearfix"
            }, r.createElement("div", {
                className: "webim-msg-delivered " + t,
                id: n,
                name: i
            }, o), r.createElement("div", {
                className: "webim-msg-value"
            }, r.createElement("span", {
                className: "webim-msg-icon font"
            }, e), r.createElement("pre", {
                dangerouslySetInnerHTML: {
                    __html: this.props.value
                }
            })), r.createElement("div", {
                className: "webim-msg-error " + (this.props.error ? " " : "hide")
            }, r.createElement("span", {
                className: "webim-file-icon font smaller red",
                title: this.props.errorText
            }, "k"))))
        }
    });
    e.exports = function(e, t) {
        var n = {
            src: e.avatar || "demo/images/default.png",
            time: e.time || (new Date).toLocaleString(),
            value: e.value || "",
            name: e.name,
            error: e.error,
            errorText: e.errorText,
            id: e.id || "",
            status: e.status || "Undelivered",
            nid: e.nid || ""
        }
          , a = document.createElement("div");
        return a.className = "webim-msg-container rel",
        e.wrapper.appendChild(a),
        Demo.api.scrollIntoView(a),
        i.render(r.createElement(s, o({}, n, {
            className: t ? "right" : "left"
        })), a)
    }
}
, function(e, t, n) {
    "use strict";
    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , i = n(12)
      , a = n(164)
      , s = n(172)
      , l = i.createClass({
        displayName: "ImgMsg",
        getInitialState: function() {
            var e = this
              , t = {};
            return t["onUpdateFileUrl" + this.props.id] = function(t) {
                e.updateFileUrl(t)
            }
            ,
            Demo.api.listen(t),
            {
                value: this.props.value
            }
        },
        updateFileUrl: function(e) {
            this.setState({
                value: e.url
            })
        },
        show: function() {
            var e = document.createElement("div");
            e.className = "webim-img-expand",
            e.onclick = function() {
                this.parentNode.removeChild(this)
            }
            ,
            e.innerHTML = '<img src="' + this.refs.img.getAttribute("src") + '" />',
            document.body.appendChild(e)
        },
        render: function() {
            var e = "left" === this.props.className ? "H" : "I"
              , t = []
              , n = "left" != this.props.className && "friends" === Demo.selectedCate && WebIM.config.msgStatus ? "" : "hide"
              , o = this.props.id
              , r = this.props.status
              , a = this.props.nid;
            switch (r) {
            case "Undelivered":
                r = "未送达";
                break;
            case "Delivered":
                r = "已送达";
                break;
            case "Read":
                r = "已读"
            }
            return WebIM.config.isWindowSDK ? "" == this.state.value ? t.push(i.createElement("span", {
                key: "0"
            }, Demo.lan.image, Demo.lan.FileLoading)) : t.push(i.createElement("img", {
                key: "0",
                ref: "img",
                className: "webim-msg-img",
                src: this.state.value,
                onClick: this.show
            })) : t.push(i.createElement("img", {
                key: "0",
                ref: "img",
                className: "webim-msg-img",
                src: this.props.value,
                onClick: this.show
            })),
            i.createElement("div", {
                className: "rel " + this.props.className
            }, i.createElement(s, {
                src: this.props.src,
                className: this.props.className + " small"
            }), i.createElement("p", {
                className: this.props.className
            }, this.props.name, " ", this.props.time), i.createElement("div", {
                className: "clearfix"
            }, i.createElement("div", {
                className: "webim-msg-delivered " + n,
                id: o,
                name: a
            }, r), i.createElement("div", {
                className: "webim-msg-value webim-img-msg-wrapper"
            }, i.createElement("span", {
                className: "webim-msg-icon font"
            }, e), i.createElement("div", {
                id: "file_" + this.props.id
            }, t)), i.createElement("div", {
                className: "webim-msg-error " + (this.props.error ? " " : "hide")
            }, i.createElement("span", {
                className: "webim-file-icon font smaller red",
                title: this.props.errorText
            }, "k"))))
        }
    });
    e.exports = function(e, t) {
        var n, s = (n = {
            id: e.id,
            src: e.avatar || "demo/images/default.png",
            time: e.time || (new Date).toLocaleString(),
            value: e.value || "",
            name: e.name,
            error: e.error,
            errorText: e.errorText
        },
        o(n, "id", e.id || ""),
        o(n, "status", e.status || "Undelivered"),
        o(n, "nid", e.nid || ""),
        n), c = document.createElement("div");
        return c.className = "webim-msg-container rel",
        e.wrapper.appendChild(c),
        Demo.api.scrollIntoView(c),
        a.render(i.createElement(l, r({}, s, {
            className: t ? "right" : "left"
        })), c)
    }
}
, function(e, t, n) {
    "use strict";
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , r = n(12)
      , i = n(164)
      , a = n(172)
      , s = n(201).utils
      , l = r.createClass({
        displayName: "FileMsg",
        getInitialState: function() {
            var e = this
              , t = {};
            return t["onUpdateFileUrl" + this.props.id] = function(t) {
                e.updateFileUrl(t)
            }
            ,
            Demo.api.listen(t),
            {
                value: this.props.value
            }
        },
        updateFileUrl: function(e) {
            this.setState({
                value: e.url
            })
        },
        download: function() {
            var e = function(e, t) {}
              , t = function(e, t, n) {}
              , n = {
                url: this.props.value,
                dataType: "json",
                type: "GET",
                headers: {
                    Authorization: "Bearer " + Demo.conn.context.accessToken
                },
                success: e || s.emptyfn,
                error: t || s.emptyfn
            };
            s.ajax(n)
        },
        render: function() {
            var e = "left" === this.props.className ? "H" : "I"
              , t = []
              , n = "left" != this.props.className && "friends" === Demo.selectedCate && WebIM.config.msgStatus ? "" : "hide"
              , o = this.props.id
              , i = this.props.status
              , s = this.props.nid;
            switch (i) {
            case "Undelivered":
                i = "未送达";
                break;
            case "Delivered":
                i = "已送达";
                break;
            case "Read":
                i = "已读"
            }
            if (WebIM.config.isWindowSDK)
                if ("" == this.state.value)
                    t.push(r.createElement("a", {
                        key: "0",
                        href: "javascript:void(0)"
                    }, Demo.lan.FileLoading));
                else {
                    var l = this.state.value.replace("file:", "location:");
                    t.push(r.createElement("a", {
                        target: "_blank",
                        key: "0",
                        href: this.state.value
                    }, Demo.lan.openFile)),
                    t.push(r.createElement("a", {
                        target: "_blank",
                        key: "1",
                        href: l,
                        className: "dir"
                    }, Demo.lan.openDir))
                }
            else
                t.push(r.createElement("a", {
                    target: "_blank",
                    key: "0",
                    href: this.props.value
                }, Demo.lan.download));
            return r.createElement("div", {
                className: "rel " + this.props.className
            }, r.createElement(a, {
                src: this.props.src,
                className: this.props.className + " small"
            }), r.createElement("p", {
                className: this.props.className
            }, this.props.name, " ", this.props.time), r.createElement("div", {
                className: "clearfix",
                style: {
                    minWidth: "280px"
                }
            }, r.createElement("div", {
                className: "webim-msg-delivered " + n,
                id: o,
                name: s
            }, i), r.createElement("div", {
                className: "webim-msg-value",
                style: {
                    minWidth: "200px"
                }
            }, r.createElement("span", {
                className: "webim-msg-icon font"
            }, e), r.createElement("div", null, r.createElement("p", {
                className: "webim-msg-header"
            }, Demo.lan.file), r.createElement("div", {
                id: "file_" + this.props.id
            }, r.createElement("span", {
                className: "webim-msg-header-icon font small"
            }, "S"), r.createElement("span", {
                className: "webim-msg-name"
            }, " ", this.props.filename), r.createElement("span", {
                className: "webim-msg-fileSize"
            }, this.props.fileSize), t))), r.createElement("div", {
                className: "webim-msg-error " + (this.props.error ? " " : "hide")
            }, r.createElement("span", {
                className: "webim-file-icon font smaller red",
                title: this.props.errorText
            }, "k"))))
        }
    });
    e.exports = function(e, t) {
        var n = {
            id: e.id,
            src: e.avatar || "demo/images/default.png",
            time: e.time || (new Date).toLocaleString(),
            value: e.value || "",
            name: e.name,
            filename: e.filename || "",
            error: e.error,
            errorText: e.errorText,
            status: e.status || "Undelivered",
            nid: e.nid || ""
        };
        e.fileSize && (n.fileSize = e.fileSize);
        var a = document.createElement("div");
        return a.className = "webim-msg-container rel",
        e.wrapper.appendChild(a),
        Demo.api.scrollIntoView(a),
        i.render(r.createElement(l, o({}, n, {
            className: t ? "right" : "left"
        })), a)
    }
}
, function(e, t, n) {
    "use strict";
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    !function() {
        var e = function() {}
          , r = n(202).code
          , i = 10485760
          , a = function() {
            try {
                return new window.XMLHttpRequest
            } catch (e) {
                return !1
            }
        }
          , s = function() {
            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                return !1
            }
        }
          , l = function(t) {
            t = t || !0;
            var n = a() || s();
            if ("withCredentials"in n)
                return n;
            if (!t)
                return n;
            if ("undefined" == typeof window.XDomainRequest)
                return n;
            var o = new XDomainRequest;
            return o.readyState = 0,
            o.status = 100,
            o.onreadystatechange = e,
            o.onload = function() {
                o.readyState = 4,
                o.status = 200;
                var e = new ActiveXObject("Microsoft.XMLDOM");
                e.async = "false",
                e.loadXML(o.responseText),
                o.responseXML = e,
                o.response = o.responseText,
                o.onreadystatechange()
            }
            ,
            o.ontimeout = o.onerror = function() {
                o.readyState = 4,
                o.status = 500,
                o.onreadystatechange()
            }
            ,
            o
        }
          , c = function() {
            if ("ActiveXObject"in window)
                try {
                    return new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (e) {
                    return 0
                }
            else if (navigator.plugins && navigator.plugins.length > 0)
                return navigator.plugins["Shockwave Flash"];
            return 0
        }()
          , u = l()
          , p = "undefined" != typeof FormData
          , d = "undefined" != typeof Blob
          , m = u.setRequestHeader || !1
          , f = u.overrideMimeType || !1
          , h = m && p
          , g = h || c
          , v = m && (d || f);
        Object.keys || (Object.keys = function() {
            var e = Object.prototype.hasOwnProperty
              , t = !{
                toString: null
            }.propertyIsEnumerable("toString")
              , n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
              , r = n.length;
            return function(i) {
                if ("object" !== ("undefined" == typeof i ? "undefined" : o(i)) && ("function" != typeof i || null === i))
                    throw new TypeError("Object.keys called on non-object");
                var a, s, l = [];
                for (a in i)
                    e.call(i, a) && l.push(a);
                if (t)
                    for (s = 0; s < r; s++)
                        e.call(i, n[s]) && l.push(n[s]);
                return l
            }
        }());
        var b = {
            hasFormData: p,
            hasBlob: d,
            emptyfn: e,
            isCanSetRequestHeader: m,
            hasOverrideMimeType: f,
            isCanUploadFileAsync: h,
            isCanUploadFile: g,
            isCanDownLoadFile: v,
            isSupportWss: function() {
                var e = [/MQQBrowser[\/]5([.]\d+)?\sTBS/];
                if (!window.WebSocket)
                    return !1;
                for (var t = window.navigator.userAgent, n = 0, o = e.length; n < o; n++)
                    if (e[n].test(t))
                        return !1;
                return !0
            }(),
            getIEVersion: function() {
                var e, t = navigator.userAgent, n = {
                    4: 8,
                    5: 9,
                    6: 10,
                    7: 11
                };
                return e = t.match(/MSIE (\d+)/i),
                e && e[1] ? +e[1] : (e = t.match(/Trident\/(\d+)/i),
                e && e[1] ? n[e[1]] || null : null)
            }(),
            stringify: function(e) {
                if ("undefined" != typeof JSON && JSON.stringify)
                    return JSON.stringify(e);
                var t = ""
                  , n = []
                  , r = function e(r) {
                    var i = !1;
                    "[object Array]" === Object.prototype.toString.call(r) ? (n.push("]", "["),
                    i = !0) : "[object Object]" === Object.prototype.toString.call(r) && n.push("}", "{");
                    for (var a in r)
                        "[object Null]" === Object.prototype.toString.call(r[a]) ? r[a] = "null" : "[object Undefined]" === Object.prototype.toString.call(r[a]) && (r[a] = "undefined"),
                        t += r[a] && "object" === o(r[a]) ? "," + (i ? "" : '"' + a + '":' + (i ? '"' : "")) + e(r[a]) : ',"' + (i ? "" : a + '":"') + r[a] + '"';
                    return "" != t && (t = t.slice(1)),
                    n.pop() + t + n.pop()
                };
                return r(e)
            },
            login: function(t) {
                var t = t || {}
                  , n = t.success || e
                  , o = t.error || e
                  , i = t.appKey || ""
                  , a = i.split("#");
                if (2 !== a.length)
                    return o({
                        type: r.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR
                    }),
                    !1;
                var s = a[0]
                  , l = a[1]
                  , c = c || t.https
                  , u = t.user || ""
                  , p = t.pwd || ""
                  , d = t.apiUrl
                  , m = {
                    grant_type: "password",
                    username: u,
                    password: p,
                    timestamp: +new Date
                }
                  , f = b.stringify(m)
                  , t = {
                    url: d + "/" + s + "/" + l + "/token",
                    dataType: "json",
                    data: f,
                    success: n,
                    error: o
                };
                return b.ajax(t)
            },
            getFileUrl: function(e) {
                var t = {
                    url: "",
                    filename: "",
                    filetype: "",
                    data: ""
                }
                  , n = "string" == typeof e ? document.getElementById(e) : e;
                if (!b.isCanUploadFileAsync || !n)
                    return t;
                try {
                    if (window.URL.createObjectURL) {
                        var o = n.files;
                        if (o.length > 0) {
                            var r = o.item(0);
                            t.data = r,
                            t.url = window.URL.createObjectURL(r),
                            t.filename = r.name || ""
                        }
                    } else {
                        var r = document.getElementById(e).value;
                        t.url = r;
                        var i = r.lastIndexOf("/")
                          , a = r.lastIndexOf("\\")
                          , s = Math.max(i, a);
                        s < 0 ? t.filename = r : t.filename = r.substring(s + 1)
                    }
                    var l = t.filename.lastIndexOf(".");
                    return l != -1 && (t.filetype = t.filename.substring(l + 1).toLowerCase()),
                    t
                } catch (e) {
                    throw e
                }
            },
            getFileSize: function(e) {
                var t = this.getFileLength(e);
                if (t > 1e7)
                    return !1;
                var n = Math.round(t / 1e3);
                if (n < 1e3)
                    t = n + " KB";
                else if (n >= 1e3) {
                    var o = n / 1e3;
                    if (o < 1e3)
                        t = o.toFixed(1) + " MB";
                    else {
                        var r = o / 1e3;
                        t = r.toFixed(1) + " GB"
                    }
                }
                return t
            },
            getFileLength: function(e) {
                var t = 0;
                if (e)
                    if (e.files)
                        e.files.length > 0 && (t = e.files[0].size);
                    else if (e.select && "ActiveXObject"in window) {
                        e.select();
                        var n = new ActiveXObject("Scripting.FileSystemObject")
                          , e = n.GetFile(e.value);
                        t = e.Size
                    }
                return t
            },
            hasFlash: c,
            trim: function(e) {
                return e = "string" == typeof e ? e : "",
                e.trim ? e.trim() : e.replace(/^\s|\s$/g, "")
            },
            parseEmoji: function(e) {
                if ("undefined" == typeof WebIM.Emoji || "undefined" == typeof WebIM.Emoji.map)
                    return e;
                var t = WebIM.Emoji;
                for (var n in t.map)
                    if (t.map.hasOwnProperty(n))
                        for (; e.indexOf(n) > -1; )
                            e = e.replace(n, '<img class="emoji" src="' + t.path + t.map[n] + '" />');
                return e
            },
            parseLink: function(e) {
                var t = /(https?\:\/\/|www\.)([a-zA-Z0-9-]+(\.[a-zA-Z0-9]+)+)(\:[0-9]{2,4})?\/?((\.[:_0-9a-zA-Z-]+)|[:_0-9a-zA-Z-]*\/?)*\??[:_#@*&%0-9a-zA-Z-\/=]*/gm;
                return e = e.replace(t, function(e) {
                    var t = /^https?/gm.test(e);
                    return "<a href='" + (t ? e : "//" + e) + "' target='_blank'>" + e + "</a>"
                })
            },
            parseJSON: function(e) {
                if (window.JSON && window.JSON.parse)
                    return window.JSON.parse(e + "");
                var t, n = null, o = b.trim(e + "");
                return o && !b.trim(o.replace(/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g, function(e, o, r, i) {
                    return t && o && (n = 0),
                    0 === n ? e : (t = r || o,
                    n += !i - !r,
                    "")
                })) ? Function("return " + o)() : Function("Invalid JSON: " + e)()
            },
            parseUploadResponse: function(e) {
                return e.indexOf("callback") > -1 ? e.slice(9, -1) : e
            },
            parseDownloadResponse: function(e) {
                return e && e.type && "application/json" === e.type || 0 > Object.prototype.toString.call(e).indexOf("Blob") ? this.url + "?token=" : window.URL.createObjectURL(e)
            },
            uploadFile: function(t) {
                var t = t || {};
                t.onFileUploadProgress = t.onFileUploadProgress || e,
                t.onFileUploadComplete = t.onFileUploadComplete || e,
                t.onFileUploadError = t.onFileUploadError || e,
                t.onFileUploadCanceled = t.onFileUploadCanceled || e;
                var n = t.accessToken || this.context.accessToken;
                if (!n)
                    return void t.onFileUploadError({
                        type: r.WEBIM_UPLOADFILE_NO_LOGIN,
                        id: t.id
                    });
                var o, a, s, l = t.appKey || this.context.appKey || "";
                if (l && (s = l.split("#"),
                o = s[0],
                a = s[1]),
                !o && !a)
                    return void t.onFileUploadError({
                        type: r.WEBIM_UPLOADFILE_ERROR,
                        id: t.id
                    });
                var c = t.apiUrl
                  , u = c + "/" + o + "/" + a + "/chatfiles";
                if (!b.isCanUploadFileAsync)
                    return void (b.hasFlash && "function" == typeof t.flashUpload ? t.flashUpload && t.flashUpload(u, t) : t.onFileUploadError({
                        type: r.WEBIM_UPLOADFILE_BROWSER_ERROR,
                        id: t.id
                    }));
                var p = t.file.data ? t.file.data.size : void 0;
                if (p > i)
                    return void t.onFileUploadError({
                        type: r.WEBIM_UPLOADFILE_ERROR,
                        id: t.id
                    });
                if (p <= 0)
                    return void t.onFileUploadError({
                        type: r.WEBIM_UPLOADFILE_ERROR,
                        id: t.id
                    });
                var d = b.xmlrequest()
                  , m = function(e) {
                    t.onFileUploadError({
                        type: r.WEBIM_UPLOADFILE_ERROR,
                        id: t.id,
                        xhr: d
                    })
                };
                d.upload && d.upload.addEventListener("progress", t.onFileUploadProgress, !1),
                d.addEventListener ? (d.addEventListener("abort", t.onFileUploadCanceled, !1),
                d.addEventListener("load", function(e) {
                    try {
                        var n = b.parseJSON(d.responseText);
                        try {
                            t.onFileUploadComplete(n)
                        } catch (e) {
                            t.onFileUploadError({
                                type: r.WEBIM_CONNCTION_CALLBACK_INNER_ERROR,
                                data: e
                            })
                        }
                    } catch (e) {
                        t.onFileUploadError({
                            type: r.WEBIM_UPLOADFILE_ERROR,
                            data: d.responseText,
                            id: t.id,
                            xhr: d
                        })
                    }
                }, !1),
                d.addEventListener("error", m, !1)) : d.onreadystatechange && (d.onreadystatechange = function() {
                    if (4 === d.readyState)
                        if (200 === ajax.status)
                            try {
                                var e = b.parseJSON(d.responseText);
                                t.onFileUploadComplete(e)
                            } catch (e) {
                                t.onFileUploadError({
                                    type: r.WEBIM_UPLOADFILE_ERROR,
                                    data: d.responseText,
                                    id: t.id,
                                    xhr: d
                                })
                            }
                        else
                            t.onFileUploadError({
                                type: r.WEBIM_UPLOADFILE_ERROR,
                                data: d.responseText,
                                id: t.id,
                                xhr: d
                            });
                    else
                        d.abort(),
                        t.onFileUploadCanceled()
                }
                ),
                d.open("POST", u),
                d.setRequestHeader("restrict-access", "true"),
                d.setRequestHeader("Accept", "*/*"),
                d.setRequestHeader("Authorization", "Bearer " + n);
                var f = new FormData;
                f.append("file", t.file.data),
                window.XDomainRequest && (d.readyState = 2),
                d.send(f)
            },
            download: function(t) {
                t.onFileDownloadComplete = t.onFileDownloadComplete || e,
                t.onFileDownloadError = t.onFileDownloadError || e;
                var n = t.accessToken || this.context.accessToken;
                if (!n)
                    return void t.onFileDownloadError({
                        type: r.WEBIM_DOWNLOADFILE_NO_LOGIN,
                        id: t.id
                    });
                var o = function(e) {
                    t.onFileDownloadError({
                        type: r.WEBIM_DOWNLOADFILE_ERROR,
                        id: t.id,
                        xhr: i
                    })
                };
                if (!b.isCanDownLoadFile)
                    return void t.onFileDownloadComplete();
                var i = b.xmlrequest();
                "addEventListener"in i ? (i.addEventListener("load", function(e) {
                    t.onFileDownloadComplete(i.response, i)
                }, !1),
                i.addEventListener("error", o, !1)) : "onreadystatechange"in i && (i.onreadystatechange = function() {
                    4 === i.readyState ? 200 === ajax.status ? t.onFileDownloadComplete(i.response, i) : t.onFileDownloadError({
                        type: r.WEBIM_DOWNLOADFILE_ERROR,
                        id: t.id,
                        xhr: i
                    }) : (i.abort(),
                    t.onFileDownloadError({
                        type: r.WEBIM_DOWNLOADFILE_ERROR,
                        id: t.id,
                        xhr: i
                    }))
                }
                );
                var a = t.method || "GET"
                  , s = t.responseType || "blob"
                  , l = t.mimeType || "text/plain; charset=x-user-defined";
                i.open(a, t.url),
                "undefined" != typeof Blob ? i.responseType = s : i.overrideMimeType(l);
                var c = {
                    "X-Requested-With": "XMLHttpRequest",
                    Accept: "application/octet-stream",
                    "share-secret": t.secret,
                    Authorization: "Bearer " + n
                }
                  , u = t.headers || {};
                for (var p in u)
                    c[p] = u[p];
                for (var p in c)
                    c[p] && i.setRequestHeader(p, c[p]);
                window.XDomainRequest && (i.readyState = 2),
                i.send(null)
            },
            parseTextMessage: function(e, t) {
                if ("string" == typeof e) {
                    if ("[object Object]" !== Object.prototype.toString.call(t))
                        return {
                            isemoji: !1,
                            body: [{
                                type: "txt",
                                data: e
                            }]
                        };
                    var n = e
                      , o = []
                      , r = /\[[^[\]]{2,3}\]/gm
                      , i = n.match(r);
                    if (!i || i.length < 1)
                        return {
                            isemoji: !1,
                            body: [{
                                type: "txt",
                                data: e
                            }]
                        };
                    for (var a = !1, s = 0; s < i.length; s++) {
                        var l = n.substring(0, n.indexOf(i[s]))
                          , c = WebIM.Emoji.map[i[s]];
                        if (l && o.push({
                            type: "txt",
                            data: l
                        }),
                        c) {
                            var u = WebIM.Emoji.map ? WebIM.Emoji.path + c : null;
                            u ? (a = !0,
                            o.push({
                                type: "emoji",
                                data: u
                            })) : o.push({
                                type: "txt",
                                data: i[s]
                            });
                            var p = n.indexOf(i[s]) + i[s].length;
                            n = n.substring(p)
                        } else
                            o.push({
                                type: "txt",
                                data: i[s]
                            })
                    }
                    return n && o.push({
                        type: "txt",
                        data: n
                    }),
                    a ? {
                        isemoji: a,
                        body: o
                    } : {
                        isemoji: !1,
                        body: [{
                            type: "txt",
                            data: e
                        }]
                    }
                }
            },
            parseUri: function() {
                var e = /([^\?|&])\w+=([^&]+)/g
                  , t = {};
                if (window.location.search) {
                    var n = window.location.search.match(e);
                    for (var o in n) {
                        var r = n[o]
                          , i = r.indexOf("=")
                          , a = r.substr(0, i)
                          , s = r.substr(i + 1);
                        t[a] = s
                    }
                }
                return t
            },
            parseHrefHash: function() {
                var e = /([^\#|&])\w+=([^&]+)/g
                  , t = {};
                if (window.location.hash) {
                    var n = window.location.hash.match(e);
                    for (var o in n) {
                        var r = n[o]
                          , i = r.indexOf("=")
                          , a = r.substr(0, i)
                          , s = r.substr(i + 1);
                        t[a] = s
                    }
                }
                return t
            },
            xmlrequest: l,
            getXmlFirstChild: function(e, t) {
                var n = e.getElementsByTagName(t);
                return 0 == n.length ? null : n[0]
            },
            ajax: function(t) {
                var n = t.dataType || "text"
                  , o = t.success || e
                  , i = t.error || e
                  , a = b.xmlrequest();
                a.onreadystatechange = function() {
                    if (4 === a.readyState) {
                        var e = a.status || 0;
                        if (200 === e) {
                            try {
                                switch (n) {
                                case "text":
                                    return void o(a.responseText);
                                case "json":
                                    var t = b.parseJSON(a.responseText);
                                    return void o(t, a);
                                case "xml":
                                    return void (a.responseXML && a.responseXML.documentElement ? o(a.responseXML.documentElement, a) : i({
                                        type: r.WEBIM_CONNCTION_AJAX_ERROR,
                                        data: a.responseText
                                    }))
                                }
                                o(a.response || a.responseText, a)
                            } catch (e) {
                                i({
                                    type: r.WEBIM_CONNCTION_AJAX_ERROR,
                                    data: e
                                })
                            }
                            return
                        }
                        return void i({
                            type: r.WEBIM_CONNCTION_AJAX_ERROR,
                            data: a.responseText
                        })
                    }
                    0 === a.readyState && i({
                        type: r.WEBIM_CONNCTION_AJAX_ERROR,
                        data: a.responseText
                    })
                }
                ,
                t.responseType && a.responseType && (a.responseType = t.responseType),
                t.mimeType && b.hasOverrideMimeType && a.overrideMimeType(t.mimeType);
                var s = t.type || "POST"
                  , l = t.data || null
                  , c = "";
                if ("get" === s.toLowerCase() && l) {
                    for (var u in l)
                        l.hasOwnProperty(u) && (c += u + "=" + l[u] + "&");
                    c = c ? c.slice(0, -1) : c,
                    t.url += (t.url.indexOf("?") > 0 ? "&" : "?") + (c ? c + "&" : c) + "_v=" + (new Date).getTime(),
                    l = null,
                    c = null
                }
                if (a.open(s, t.url, b.isCanSetRequestHeader),
                b.isCanSetRequestHeader) {
                    var p = t.headers || {};
                    for (var d in p)
                        p.hasOwnProperty(d) && a.setRequestHeader(d, p[d])
                }
                return window.XDomainRequest && (a.readyState = 2),
                a.send(l),
                a
            },
            ts: function() {
                var e = new Date
                  , t = e.getHours()
                  , n = e.getMinutes()
                  , o = e.getSeconds()
                  , r = e.getMilliseconds();
                return (t < 10 ? "0" + t : t) + ":" + (n < 10 ? "0" + n : n) + ":" + (o < 10 ? "0" + o : o) + ":" + r + " "
            },
            getObjectKey: function(e, t) {
                for (var n in e)
                    if (e[n] == t)
                        return n;
                return ""
            },
            sprintf: function() {
                var e, t, n = arguments, o = n[0] || "";
                for (e = 1,
                t = n.length; e < t; e++)
                    o = o.replace(/%s/, n[e]);
                return o
            },
            setCookie: function(e, t, n) {
                var o = e + "=" + encodeURIComponent(t);
                "number" == typeof n && (o += "; max-age: " + 60 * n * 60 * 24),
                document.cookie = o
            },
            getCookie: function() {
                var e = {}
                  , t = document.cookie;
                if ("" === t)
                    return e;
                for (var n = t.split("; "), o = 0; o < n.length; o++) {
                    var r = n[o]
                      , i = r.indexOf("=")
                      , a = r.substring(0, i)
                      , s = r.substring(i + 1);
                    s = decodeURIComponent(s),
                    e[a] = s
                }
                return e
            }
        };
        t.utils = b
    }()
}
, function(e, t) {
    "use strict";
    !function() {
        t.code = {
            WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR: 0,
            WEBIM_CONNCTION_OPEN_ERROR: 1,
            WEBIM_CONNCTION_AUTH_ERROR: 2,
            WEBIM_CONNCTION_OPEN_USERGRID_ERROR: 3,
            WEBIM_CONNCTION_ATTACH_ERROR: 4,
            WEBIM_CONNCTION_ATTACH_USERGRID_ERROR: 5,
            WEBIM_CONNCTION_REOPEN_ERROR: 6,
            WEBIM_CONNCTION_SERVER_CLOSE_ERROR: 7,
            WEBIM_CONNCTION_SERVER_ERROR: 8,
            WEBIM_CONNCTION_IQ_ERROR: 9,
            WEBIM_CONNCTION_PING_ERROR: 10,
            WEBIM_CONNCTION_NOTIFYVERSION_ERROR: 11,
            WEBIM_CONNCTION_GETROSTER_ERROR: 12,
            WEBIM_CONNCTION_CROSSDOMAIN_ERROR: 13,
            WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES: 14,
            WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR: 15,
            WEBIM_CONNCTION_DISCONNECTED: 16,
            WEBIM_CONNCTION_AJAX_ERROR: 17,
            WEBIM_CONNCTION_JOINROOM_ERROR: 18,
            WEBIM_CONNCTION_GETROOM_ERROR: 19,
            WEBIM_CONNCTION_GETROOMINFO_ERROR: 20,
            WEBIM_CONNCTION_GETROOMMEMBER_ERROR: 21,
            WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR: 22,
            WEBIM_CONNCTION_LOAD_CHATROOM_ERROR: 23,
            WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR: 24,
            WEBIM_CONNCTION_JOINCHATROOM_ERROR: 25,
            WEBIM_CONNCTION_QUITCHATROOM_ERROR: 26,
            WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR: 27,
            WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR: 28,
            WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR: 29,
            WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR: 30,
            WEBIM_CONNCTION_CALLBACK_INNER_ERROR: 31,
            WEBIM_CONNCTION_CLIENT_OFFLINE: 32,
            WEBIM_CONNCTION_CLIENT_LOGOUT: 33,
            WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR: 34,
            WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP: 35,
            WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP: 36,
            WEBIM_CONNECTION_ACCEPT_JOIN_GROUP: 37,
            WEBIM_CONNECTION_DECLINE_JOIN_GROUP: 38,
            WEBIM_CONNECTION_CLOSED: 39,
            WEBIM_UPLOADFILE_BROWSER_ERROR: 100,
            WEBIM_UPLOADFILE_ERROR: 101,
            WEBIM_UPLOADFILE_NO_LOGIN: 102,
            WEBIM_UPLOADFILE_NO_FILE: 103,
            WEBIM_DOWNLOADFILE_ERROR: 200,
            WEBIM_DOWNLOADFILE_NO_LOGIN: 201,
            WEBIM_DOWNLOADFILE_BROWSER_ERROR: 202,
            WEBIM_MESSAGE_REC_TEXT: 300,
            WEBIM_MESSAGE_REC_TEXT_ERROR: 301,
            WEBIM_MESSAGE_REC_EMOTION: 302,
            WEBIM_MESSAGE_REC_PHOTO: 303,
            WEBIM_MESSAGE_REC_AUDIO: 304,
            WEBIM_MESSAGE_REC_AUDIO_FILE: 305,
            WEBIM_MESSAGE_REC_VEDIO: 306,
            WEBIM_MESSAGE_REC_VEDIO_FILE: 307,
            WEBIM_MESSAGE_REC_FILE: 308,
            WEBIM_MESSAGE_SED_TEXT: 309,
            WEBIM_MESSAGE_SED_EMOTION: 310,
            WEBIM_MESSAGE_SED_PHOTO: 311,
            WEBIM_MESSAGE_SED_AUDIO: 312,
            WEBIM_MESSAGE_SED_AUDIO_FILE: 313,
            WEBIM_MESSAGE_SED_VEDIO: 314,
            WEBIM_MESSAGE_SED_VEDIO_FILE: 315,
            WEBIM_MESSAGE_SED_FILE: 316,
            WEBIM_MESSAGE_SED_ERROR: 317,
            STATUS_INIT: 400,
            STATUS_DOLOGIN_USERGRID: 401,
            STATUS_DOLOGIN_IM: 402,
            STATUS_OPENED: 403,
            STATUS_CLOSING: 404,
            STATUS_CLOSED: 405,
            STATUS_ERROR: 406
        }
    }()
}
, function(e, t, n) {
    "use strict";
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , r = n(12)
      , i = n(164)
      , a = n(172)
      , s = r.createClass({
        displayName: "LocMsg",
        render: function() {
            var e = "left" === this.props.className ? "H" : "I";
            return r.createElement("div", {
                className: "rel " + this.props.className
            }, r.createElement(a, {
                src: this.props.src,
                className: this.props.className + " small"
            }), r.createElement("p", {
                className: this.props.className
            }, this.props.name, " ", this.props.time), r.createElement("div", {
                className: "webim-msg-value",
                style: {
                    minWidth: "200px"
                }
            }, r.createElement("span", {
                className: "webim-msg-icon font"
            }, e), r.createElement("div", null, r.createElement("p", {
                className: "webim-msg-header"
            }, "Location"), r.createElement("div", null, r.createElement("span", {
                className: "webim-msg-header-icon font small"
            }, "U"), r.createElement("span", {
                title: this.props.value,
                style: {
                    lineHeight: "40px"
                },
                className: "webim-msg-name"
            }, this.props.value)))))
        }
    });
    e.exports = function(e, t) {
        var n = {
            src: e.avatar || "demo/images/default.png",
            time: e.time || (new Date).toLocaleString(),
            value: e.value || "",
            name: e.name,
            error: e.error,
            errorText: e.errorText
        }
          , a = document.createElement("div");
        return a.className = "webim-msg-container rel",
        e.wrapper.appendChild(a),
        Demo.api.scrollIntoView(a),
        i.render(r.createElement(s, o({}, n, {
            className: t ? "right" : "left"
        })), a)
    }
}
, function(e, t, n) {
    "use strict";
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , r = n(12)
      , i = n(164)
      , a = n(172)
      , s = r.createClass({
        displayName: "AudioMsg",
        getInitialState: function() {
            return {
                status: 0,
                src: null
            }
        },
        componentDidMount: function() {
            var e = this
              , t = {
                url: e.props.value
            };
            t.onFileDownloadComplete = function(t) {
                var n = WebIM.utils.parseDownloadResponse.call(Demo.conn, t);
                e.refs.audio.onended = function() {
                    e.setState({
                        status: 0
                    })
                }
                ,
                (null === WebIM.utils.getIEVersion || WebIM.utils.getIEVersion > 9) && window.Audio && e.setState({
                    src: n
                })
            }
            ,
            t.onFileDownloadError = function() {
                e.stop(),
                e.setState({
                    status: 0
                })
            }
            ,
            t.headers = {
                Accept: "audio/mp3"
            },
            WebIM.utils.download.call(Demo.conn, t)
        },
        stop: function() {
            for (var e = document.getElementsByTagName("audio"), t = 0, n = e.length; t < n; t++)
                e[t] && e[t].getAttribute("id") !== this.props.id && (e[t].pause(),
                e[t].currentTime = 0)
        },
        shouldComponentUpdate: function(e, t) {
            return t.src !== this.state.src || t.status !== this.state.status
        },
        componentDidUpdate: function(e, t) {
            var n = this;
            n.state.status ? (n.refs.bg.className = "webim-audio-slash slash",
            n.state.src && (n.refs.audio.src || (n.refs.audio.src = n.state.src),
            n.refs.audio.play())) : (n.refs.bg.className = "webim-audio-slash",
            n.refs.audio.pause(),
            n.refs.audio.currentTime = 0)
        },
        toggle: function() {
            this.stop(),
            this.setState({
                status: this.state.status ? 0 : 1
            })
        },
        render: function() {
            var e = "left" === this.props.className ? "H" : "I";
            return r.createElement("div", {
                className: "rel pointer " + this.props.className
            }, r.createElement(a, {
                src: this.props.src,
                className: this.props.className + " small"
            }), r.createElement("p", {
                className: this.props.className
            }, this.props.name, " ", this.props.time), r.createElement("div", {
                className: "webim-msg-value"
            }, r.createElement("span", {
                className: "webim-msg-icon font"
            }, e), r.createElement("div", null, r.createElement("div", {
                className: "webim-audio-msg"
            }, "audio " + this.props.length + "''")), r.createElement("div", {
                ref: "bg",
                className: "webim-audio-slash",
                onClick: this.toggle
            })), r.createElement("audio", {
                id: this.props.id,
                ref: "audio",
                className: "hide"
            }))
        }
    });
    e.exports = function(e, t) {
        var n = {
            src: e.avatar || "demo/images/default.png",
            time: e.time || (new Date).toLocaleString(),
            value: e.value || "",
            name: e.name,
            length: e.length || "",
            id: e.id,
            error: e.error,
            errorText: e.errorText
        }
          , a = document.createElement("div");
        return a.className = "webim-msg-container rel",
        e.wrapper.appendChild(a),
        Demo.api.scrollIntoView(a),
        i.render(r.createElement(s, o({}, n, {
            className: t ? "right" : "left"
        })), a)
    }
}
, function(e, t, n) {
    "use strict";
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
      , r = n(12)
      , i = n(164)
      , a = n(172)
      , s = r.createClass({
        displayName: "VideoMsg",
        componentDidMount: function() {
            var e = this
              , t = {
                url: e.props.value
            };
            t.onFileDownloadComplete = function(t) {
                var n = WebIM.utils.parseDownloadResponse.call(Demo.conn, t);
                e.refs.video.src = n
            }
            ,
            t.onFileDownloadError = function() {}
            ,
            t.headers = {
                Accept: "audio/mp4"
            },
            WebIM.utils.download.call(Demo.conn, t)
        },
        render: function() {
            var e = "left" === this.props.className ? "H" : "I";
            return r.createElement("div", {
                className: "rel pointer " + this.props.className
            }, r.createElement(a, {
                src: this.props.src,
                className: this.props.className + " small"
            }), r.createElement("p", {
                className: this.props.className
            }, this.props.name, " ", this.props.time), r.createElement("div", {
                className: "clearfix"
            }, r.createElement("div", {
                className: "webim-msg-value"
            }, r.createElement("span", {
                className: "webim-msg-icon font"
            }, e), r.createElement("div", {
                className: "webim-video-msg"
            }, r.createElement("video", {
                id: this.props.id,
                ref: "video",
                controls: !0,
                autoPlay: !0
            }))), r.createElement("div", {
                className: "webim-msg-error " + (this.props.error ? " " : "hide")
            }, r.createElement("span", {
                className: "webim-file-icon font smaller red",
                title: this.props.errorText
            }, "k"))))
        }
    });
    e.exports = function(e, t) {
        var n = {
            src: e.avatar || "demo/images/default.png",
            time: e.time || (new Date).toLocaleString(),
            value: e.value || "",
            name: e.name,
            length: e.length || "",
            id: e.id,
            error: e.error,
            errorText: e.errorText
        }
          , a = document.createElement("div");
        return a.className = "webim-msg-container rel",
        e.wrapper.appendChild(a),
        Demo.api.scrollIntoView(a),
        i.render(r.createElement(s, o({}, n, {
            className: t ? "right" : "left"
        })), a)
    }
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239));
    }(this, function(e) {
        return e
    })
}
, function(e, t, n) {
    !function(n, o) {
        e.exports = t = o()
    }(this, function() {
        var e = e || function(e, t) {
            var n = Object.create || function() {
                function e() {}
                return function(t) {
                    var n;
                    return e.prototype = t,
                    n = new e,
                    e.prototype = null,
                    n
                }
            }()
              , o = {}
              , r = o.lib = {}
              , i = r.Base = function() {
                return {
                    extend: function(e) {
                        var t = n(this);
                        return e && t.mixIn(e),
                        t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                            t.$super.init.apply(this, arguments)
                        }
                        ),
                        t.init.prototype = t,
                        t.$super = this,
                        t
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments),
                        e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e)
                            e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                }
            }()
              , a = r.WordArray = i.extend({
                init: function(e, n) {
                    e = this.words = e || [],
                    n != t ? this.sigBytes = n : this.sigBytes = 4 * e.length
                },
                toString: function(e) {
                    return (e || l).stringify(this)
                },
                concat: function(e) {
                    var t = this.words
                      , n = e.words
                      , o = this.sigBytes
                      , r = e.sigBytes;
                    if (this.clamp(),
                    o % 4)
                        for (var i = 0; i < r; i++) {
                            var a = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            t[o + i >>> 2] |= a << 24 - (o + i) % 4 * 8
                        }
                    else
                        for (var i = 0; i < r; i += 4)
                            t[o + i >>> 2] = n[i >>> 2];
                    return this.sigBytes += r,
                    this
                },
                clamp: function() {
                    var t = this.words
                      , n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                    t.length = e.ceil(n / 4)
                },
                clone: function() {
                    var e = i.clone.call(this);
                    return e.words = this.words.slice(0),
                    e
                },
                random: function(t) {
                    for (var n, o = [], r = function(t) {
                        var t = t
                          , n = 987654321
                          , o = 4294967295;
                        return function() {
                            n = 36969 * (65535 & n) + (n >> 16) & o,
                            t = 18e3 * (65535 & t) + (t >> 16) & o;
                            var r = (n << 16) + t & o;
                            return r /= 4294967296,
                            r += .5,
                            r * (e.random() > .5 ? 1 : -1)
                        }
                    }, i = 0; i < t; i += 4) {
                        var s = r(4294967296 * (n || e.random()));
                        n = 987654071 * s(),
                        o.push(4294967296 * s() | 0)
                    }
                    return new a.init(o,t)
                }
            })
              , s = o.enc = {}
              , l = s.Hex = {
                stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r++) {
                        var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        o.push((i >>> 4).toString(16)),
                        o.push((15 & i).toString(16))
                    }
                    return o.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], o = 0; o < t; o += 2)
                        n[o >>> 3] |= parseInt(e.substr(o, 2), 16) << 24 - o % 8 * 4;
                    return new a.init(n,t / 2)
                }
            }
              , c = s.Latin1 = {
                stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r++) {
                        var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        o.push(String.fromCharCode(i))
                    }
                    return o.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], o = 0; o < t; o++)
                        n[o >>> 2] |= (255 & e.charCodeAt(o)) << 24 - o % 4 * 8;
                    return new a.init(n,t)
                }
            }
              , u = s.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(c.stringify(e)))
                    } catch (e) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return c.parse(unescape(encodeURIComponent(e)))
                }
            }
              , p = r.BufferedBlockAlgorithm = i.extend({
                reset: function() {
                    this._data = new a.init,
                    this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = u.parse(e)),
                    this._data.concat(e),
                    this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var n = this._data
                      , o = n.words
                      , r = n.sigBytes
                      , i = this.blockSize
                      , s = 4 * i
                      , l = r / s;
                    l = t ? e.ceil(l) : e.max((0 | l) - this._minBufferSize, 0);
                    var c = l * i
                      , u = e.min(4 * c, r);
                    if (c) {
                        for (var p = 0; p < c; p += i)
                            this._doProcessBlock(o, p);
                        var d = o.splice(0, c);
                        n.sigBytes -= u
                    }
                    return new a.init(d,u)
                },
                clone: function() {
                    var e = i.clone.call(this);
                    return e._data = this._data.clone(),
                    e
                },
                _minBufferSize: 0
            })
              , d = (r.Hasher = p.extend({
                cfg: i.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e),
                    this.reset()
                },
                reset: function() {
                    p.reset.call(this),
                    this._doReset()
                },
                update: function(e) {
                    return this._append(e),
                    this._process(),
                    this
                },
                finalize: function(e) {
                    e && this._append(e);
                    var t = this._doFinalize();
                    return t
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, n) {
                        return new e.init(n).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, n) {
                        return new d.HMAC.init(e,n).finalize(t)
                    }
                }
            }),
            o.algo = {});
            return o
        }(Math);
        return e
    })
}
, function(e, t, n) {
    !function(o, r) {
        e.exports = t = r(n(207))
    }(this, function(e) {
        return function(t) {
            var n = e
              , o = n.lib
              , r = o.Base
              , i = o.WordArray
              , a = n.x64 = {};
            a.Word = r.extend({
                init: function(e, t) {
                    this.high = e,
                    this.low = t
                }
            }),
            a.WordArray = r.extend({
                init: function(e, n) {
                    e = this.words = e || [],
                    n != t ? this.sigBytes = n : this.sigBytes = 8 * e.length
                },
                toX32: function() {
                    for (var e = this.words, t = e.length, n = [], o = 0; o < t; o++) {
                        var r = e[o];
                        n.push(r.high),
                        n.push(r.low)
                    }
                    return i.create(n, this.sigBytes)
                },
                clone: function() {
                    for (var e = r.clone.call(this), t = e.words = this.words.slice(0), n = t.length, o = 0; o < n; o++)
                        t[o] = t[o].clone();
                    return e
                }
            })
        }(),
        e
    })
}
, function(e, t, n) {
    !function(o, r) {
        e.exports = t = r(n(207))
    }(this, function(e) {
        return function() {
            if ("function" == typeof ArrayBuffer) {
                var t = e
                  , n = t.lib
                  , o = n.WordArray
                  , r = o.init
                  , i = o.init = function(e) {
                    if (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                    (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),
                    e instanceof Uint8Array) {
                        for (var t = e.byteLength, n = [], o = 0; o < t; o++)
                            n[o >>> 2] |= e[o] << 24 - o % 4 * 8;
                        r.call(this, n, t)
                    } else
                        r.apply(this, arguments)
                }
                ;
                i.prototype = o
            }
        }(),
        e.lib.WordArray
    })
}
, function(e, t, n) {
    !function(o, r) {
        e.exports = t = r(n(207))
    }(this, function(e) {
        return function() {
            function t(e) {
                return e << 8 & 4278255360 | e >>> 8 & 16711935
            }
            var n = e
              , o = n.lib
              , r = o.WordArray
              , i = n.enc;
            i.Utf16 = i.Utf16BE = {
                stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, o = [], r = 0; r < n; r += 2) {
                        var i = t[r >>> 2] >>> 16 - r % 4 * 8 & 65535;
                        o.push(String.fromCharCode(i))
                    }
                    return o.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], o = 0; o < t; o++)
                        n[o >>> 1] |= e.charCodeAt(o) << 16 - o % 2 * 16;
                    return r.create(n, 2 * t)
                }
            };
            i.Utf16LE = {
                stringify: function(e) {
                    for (var n = e.words, o = e.sigBytes, r = [], i = 0; i < o; i += 2) {
                        var a = t(n[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
                        r.push(String.fromCharCode(a))
                    }
                    return r.join("")
                },
                parse: function(e) {
                    for (var n = e.length, o = [], i = 0; i < n; i++)
                        o[i >>> 1] |= t(e.charCodeAt(i) << 16 - i % 2 * 16);
                    return r.create(o, 2 * n)
                }
            }
        }(),
        e.enc.Utf16
    })
}
, function(e, t, n) {
    !function(o, r) {
        e.exports = t = r(n(207))
    }(this, function(e) {
        return function() {
            function t(e, t, n) {
                for (var o = [], i = 0, a = 0; a < t; a++)
                    if (a % 4) {
                        var s = n[e.charCodeAt(a - 1)] << a % 4 * 2
                          , l = n[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
                        o[i >>> 2] |= (s | l) << 24 - i % 4 * 8,
                        i++
                    }
                return r.create(o, i)
            }
            var n = e
              , o = n.lib
              , r = o.WordArray
              , i = n.enc;
            i.Base64 = {
                stringify: function(e) {
                    var t = e.words
                      , n = e.sigBytes
                      , o = this._map;
                    e.clamp();
                    for (var r = [], i = 0; i < n; i += 3)
                        for (var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255, s = t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255, l = t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, c = a << 16 | s << 8 | l, u = 0; u < 4 && i + .75 * u < n; u++)
                            r.push(o.charAt(c >>> 6 * (3 - u) & 63));
                    var p = o.charAt(64);
                    if (p)
                        for (; r.length % 4; )
                            r.push(p);
                    return r.join("")
                },
                parse: function(e) {
                    var n = e.length
                      , o = this._map
                      , r = this._reverseMap;
                    if (!r) {
                        r = this._reverseMap = [];
                        for (var i = 0; i < o.length; i++)
                            r[o.charCodeAt(i)] = i
                    }
                    var a = o.charAt(64);
                    if (a) {
                        var s = e.indexOf(a);
                        s !== -1 && (n = s)
                    }
                    return t(e, n, r)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        }(),
        e.enc.Base64
    })
}
, function(e, t, n) {
    !function(o, r) {
        e.exports = t = r(n(207))
    }(this, function(e) {
        return function(t) {
            function n(e, t, n, o, r, i, a) {
                var s = e + (t & n | ~t & o) + r + a;
                return (s << i | s >>> 32 - i) + t
            }
            function o(e, t, n, o, r, i, a) {
                var s = e + (t & o | n & ~o) + r + a;
                return (s << i | s >>> 32 - i) + t
            }
            function r(e, t, n, o, r, i, a) {
                var s = e + (t ^ n ^ o) + r + a;
                return (s << i | s >>> 32 - i) + t
            }
            function i(e, t, n, o, r, i, a) {
                var s = e + (n ^ (t | ~o)) + r + a;
                return (s << i | s >>> 32 - i) + t
            }
            var a = e
              , s = a.lib
              , l = s.WordArray
              , c = s.Hasher
              , u = a.algo
              , p = [];
            !function() {
                for (var e = 0; e < 64; e++)
                    p[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
            }();
            var d = u.MD5 = c.extend({
                _doReset: function() {
                    this._hash = new l.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(e, t) {
                    for (var a = 0; a < 16; a++) {
                        var s = t + a
                          , l = e[s];
                        e[s] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                    }
                    var c = this._hash.words
                      , u = e[t + 0]
                      , d = e[t + 1]
                      , m = e[t + 2]
                      , f = e[t + 3]
                      , h = e[t + 4]
                      , g = e[t + 5]
                      , v = e[t + 6]
                      , b = e[t + 7]
                      , y = e[t + 8]
                      , w = e[t + 9]
                      , _ = e[t + 10]
                      , E = e[t + 11]
                      , D = e[t + 12]
                      , C = e[t + 13]
                      , x = e[t + 14]
                      , N = e[t + 15]
                      , I = c[0]
                      , S = c[1]
                      , M = c[2]
                      , k = c[3];
                    I = n(I, S, M, k, u, 7, p[0]),
                    k = n(k, I, S, M, d, 12, p[1]),
                    M = n(M, k, I, S, m, 17, p[2]),
                    S = n(S, M, k, I, f, 22, p[3]),
                    I = n(I, S, M, k, h, 7, p[4]),
                    k = n(k, I, S, M, g, 12, p[5]),
                    M = n(M, k, I, S, v, 17, p[6]),
                    S = n(S, M, k, I, b, 22, p[7]),
                    I = n(I, S, M, k, y, 7, p[8]),
                    k = n(k, I, S, M, w, 12, p[9]),
                    M = n(M, k, I, S, _, 17, p[10]),
                    S = n(S, M, k, I, E, 22, p[11]),
                    I = n(I, S, M, k, D, 7, p[12]),
                    k = n(k, I, S, M, C, 12, p[13]),
                    M = n(M, k, I, S, x, 17, p[14]),
                    S = n(S, M, k, I, N, 22, p[15]),
                    I = o(I, S, M, k, d, 5, p[16]),
                    k = o(k, I, S, M, v, 9, p[17]),
                    M = o(M, k, I, S, E, 14, p[18]),
                    S = o(S, M, k, I, u, 20, p[19]),
                    I = o(I, S, M, k, g, 5, p[20]),
                    k = o(k, I, S, M, _, 9, p[21]),
                    M = o(M, k, I, S, N, 14, p[22]),
                    S = o(S, M, k, I, h, 20, p[23]),
                    I = o(I, S, M, k, w, 5, p[24]),
                    k = o(k, I, S, M, x, 9, p[25]),
                    M = o(M, k, I, S, f, 14, p[26]),
                    S = o(S, M, k, I, y, 20, p[27]),
                    I = o(I, S, M, k, C, 5, p[28]),
                    k = o(k, I, S, M, m, 9, p[29]),
                    M = o(M, k, I, S, b, 14, p[30]),
                    S = o(S, M, k, I, D, 20, p[31]),
                    I = r(I, S, M, k, g, 4, p[32]),
                    k = r(k, I, S, M, y, 11, p[33]),
                    M = r(M, k, I, S, E, 16, p[34]),
                    S = r(S, M, k, I, x, 23, p[35]),
                    I = r(I, S, M, k, d, 4, p[36]),
                    k = r(k, I, S, M, h, 11, p[37]),
                    M = r(M, k, I, S, b, 16, p[38]),
                    S = r(S, M, k, I, _, 23, p[39]),
                    I = r(I, S, M, k, C, 4, p[40]),
                    k = r(k, I, S, M, u, 11, p[41]),
                    M = r(M, k, I, S, f, 16, p[42]),
                    S = r(S, M, k, I, v, 23, p[43]),
                    I = r(I, S, M, k, w, 4, p[44]),
                    k = r(k, I, S, M, D, 11, p[45]),
                    M = r(M, k, I, S, N, 16, p[46]),
                    S = r(S, M, k, I, m, 23, p[47]),
                    I = i(I, S, M, k, u, 6, p[48]),
                    k = i(k, I, S, M, b, 10, p[49]),
                    M = i(M, k, I, S, x, 15, p[50]),
                    S = i(S, M, k, I, g, 21, p[51]),
                    I = i(I, S, M, k, D, 6, p[52]),
                    k = i(k, I, S, M, f, 10, p[53]),
                    M = i(M, k, I, S, _, 15, p[54]),
                    S = i(S, M, k, I, d, 21, p[55]),
                    I = i(I, S, M, k, y, 6, p[56]),
                    k = i(k, I, S, M, N, 10, p[57]),
                    M = i(M, k, I, S, v, 15, p[58]),
                    S = i(S, M, k, I, C, 21, p[59]),
                    I = i(I, S, M, k, h, 6, p[60]),
                    k = i(k, I, S, M, E, 10, p[61]),
                    M = i(M, k, I, S, m, 15, p[62]),
                    S = i(S, M, k, I, w, 21, p[63]),
                    c[0] = c[0] + I | 0,
                    c[1] = c[1] + S | 0,
                    c[2] = c[2] + M | 0,
                    c[3] = c[3] + k | 0
                },
                _doFinalize: function() {
                    var e = this._data
                      , n = e.words
                      , o = 8 * this._nDataBytes
                      , r = 8 * e.sigBytes;
                    n[r >>> 5] |= 128 << 24 - r % 32;
                    var i = t.floor(o / 4294967296)
                      , a = o;
                    n[(r + 64 >>> 9 << 4) + 15] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                    n[(r + 64 >>> 9 << 4) + 14] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                    e.sigBytes = 4 * (n.length + 1),
                    this._process();
                    for (var s = this._hash, l = s.words, c = 0; c < 4; c++) {
                        var u = l[c];
                        l[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                    }
                    return s
                },
                clone: function() {
                    var e = c.clone.call(this);
                    return e._hash = this._hash.clone(),
                    e
                }
            });
            a.MD5 = c._createHelper(d),
            a.HmacMD5 = c._createHmacHelper(d)
        }(Math),
        e.MD5
    })
}
, function(e, t, n) {
    !function(o, r) {
        e.exports = t = r(n(207))
    }(this, function(e) {
        return function() {
            var t = e
              , n = t.lib
              , o = n.WordArray
              , r = n.Hasher
              , i = t.algo
              , a = []
              , s = i.SHA1 = r.extend({
                _doReset: function() {
                    this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                },
                _doProcessBlock: function(e, t) {
                    for (var n = this._hash.words, o = n[0], r = n[1], i = n[2], s = n[3], l = n[4], c = 0; c < 80; c++) {
                        if (c < 16)
                            a[c] = 0 | e[t + c];
                        else {
                            var u = a[c - 3] ^ a[c - 8] ^ a[c - 14] ^ a[c - 16];
                            a[c] = u << 1 | u >>> 31
                        }
                        var p = (o << 5 | o >>> 27) + l + a[c];
                        p += c < 20 ? (r & i | ~r & s) + 1518500249 : c < 40 ? (r ^ i ^ s) + 1859775393 : c < 60 ? (r & i | r & s | i & s) - 1894007588 : (r ^ i ^ s) - 899497514,
                        l = s,
                        s = i,
                        i = r << 30 | r >>> 2,
                        r = o,
                        o = p
                    }
                    n[0] = n[0] + o | 0,
                    n[1] = n[1] + r | 0,
                    n[2] = n[2] + i | 0,
                    n[3] = n[3] + s | 0,
                    n[4] = n[4] + l | 0
                },
                _doFinalize: function() {
                    var e = this._data
                      , t = e.words
                      , n = 8 * this._nDataBytes
                      , o = 8 * e.sigBytes;
                    return t[o >>> 5] |= 128 << 24 - o % 32,
                    t[(o + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296),
                    t[(o + 64 >>> 9 << 4) + 15] = n,
                    e.sigBytes = 4 * t.length,
                    this._process(),
                    this._hash
                },
                clone: function() {
                    var e = r.clone.call(this);
                    return e._hash = this._hash.clone(),
                    e
                }
            });
            t.SHA1 = r._createHelper(s),
            t.HmacSHA1 = r._createHmacHelper(s)
        }(),
        e.SHA1
    })
}
, function(e, t, n) {
    !function(o, r) {
        e.exports = t = r(n(207))
    }(this, function(e) {
        return function(t) {
            var n = e
              , o = n.lib
              , r = o.WordArray
              , i = o.Hasher
              , a = n.algo
              , s = []
              , l = [];
            !function() {
                function e(e) {
                    for (var n = t.sqrt(e), o = 2; o <= n; o++)
                        if (!(e % o))
                            return !1;
                    return !0
                }
                function n(e) {
                    return 4294967296 * (e - (0 | e)) | 0
                }
                for (var o = 2, r = 0; r < 64; )
                    e(o) && (r < 8 && (s[r] = n(t.pow(o, .5))),
                    l[r] = n(t.pow(o, 1 / 3)),
                    r++),
                    o++
            }();
            var c = []
              , u = a.SHA256 = i.extend({
                _doReset: function() {
                    this._hash = new r.init(s.slice(0))
                },
                _doProcessBlock: function(e, t) {
                    for (var n = this._hash.words, o = n[0], r = n[1], i = n[2], a = n[3], s = n[4], u = n[5], p = n[6], d = n[7], m = 0; m < 64; m++) {
                        if (m < 16)
                            c[m] = 0 | e[t + m];
                        else {
                            var f = c[m - 15]
                              , h = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3
                              , g = c[m - 2]
                              , v = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
                            c[m] = h + c[m - 7] + v + c[m - 16]
                        }
                        var b = s & u ^ ~s & p
                          , y = o & r ^ o & i ^ r & i
                          , w = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22)
                          , _ = (s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)
                          , E = d + _ + b + l[m] + c[m]
                          , D = w + y;
                        d = p,
                        p = u,
                        u = s,
                        s = a + E | 0,
                        a = i,
                        i = r,
                        r = o,
                        o = E + D | 0
                    }
                    n[0] = n[0] + o | 0,
                    n[1] = n[1] + r | 0,
                    n[2] = n[2] + i | 0,
                    n[3] = n[3] + a | 0,
                    n[4] = n[4] + s | 0,
                    n[5] = n[5] + u | 0,
                    n[6] = n[6] + p | 0,
                    n[7] = n[7] + d | 0
                },
                _doFinalize: function() {
                    var e = this._data
                      , n = e.words
                      , o = 8 * this._nDataBytes
                      , r = 8 * e.sigBytes;
                    return n[r >>> 5] |= 128 << 24 - r % 32,
                    n[(r + 64 >>> 9 << 4) + 14] = t.floor(o / 4294967296),
                    n[(r + 64 >>> 9 << 4) + 15] = o,
                    e.sigBytes = 4 * n.length,
                    this._process(),
                    this._hash
                },
                clone: function() {
                    var e = i.clone.call(this);
                    return e._hash = this._hash.clone(),
                    e
                }
            });
            n.SHA256 = i._createHelper(u),
            n.HmacSHA256 = i._createHmacHelper(u)
        }(Math),
        e.SHA256
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(214))
    }(this, function(e) {
        return function() {
            var t = e
              , n = t.lib
              , o = n.WordArray
              , r = t.algo
              , i = r.SHA256
              , a = r.SHA224 = i.extend({
                _doReset: function() {
                    this._hash = new o.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                },
                _doFinalize: function() {
                    var e = i._doFinalize.call(this);
                    return e.sigBytes -= 4,
                    e
                }
            });
            t.SHA224 = i._createHelper(a),
            t.HmacSHA224 = i._createHmacHelper(a)
        }(),
        e.SHA224
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(208))
    }(this, function(e) {
        return function() {
            function t() {
                return a.create.apply(a, arguments)
            }
            var n = e
              , o = n.lib
              , r = o.Hasher
              , i = n.x64
              , a = i.Word
              , s = i.WordArray
              , l = n.algo
              , c = [t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591)]
              , u = [];
            !function() {
                for (var e = 0; e < 80; e++)
                    u[e] = t()
            }();
            var p = l.SHA512 = r.extend({
                _doReset: function() {
                    this._hash = new s.init([new a.init(1779033703,4089235720), new a.init(3144134277,2227873595), new a.init(1013904242,4271175723), new a.init(2773480762,1595750129), new a.init(1359893119,2917565137), new a.init(2600822924,725511199), new a.init(528734635,4215389547), new a.init(1541459225,327033209)])
                },
                _doProcessBlock: function(e, t) {
                    for (var n = this._hash.words, o = n[0], r = n[1], i = n[2], a = n[3], s = n[4], l = n[5], p = n[6], d = n[7], m = o.high, f = o.low, h = r.high, g = r.low, v = i.high, b = i.low, y = a.high, w = a.low, _ = s.high, E = s.low, D = l.high, C = l.low, x = p.high, N = p.low, I = d.high, S = d.low, M = m, k = f, R = h, O = g, T = v, A = b, P = y, B = w, W = _, L = E, U = D, F = C, j = x, G = N, H = I, V = S, z = 0; z < 80; z++) {
                        var K = u[z];
                        if (z < 16)
                            var q = K.high = 0 | e[t + 2 * z]
                              , Y = K.low = 0 | e[t + 2 * z + 1];
                        else {
                            var X = u[z - 15]
                              , Q = X.high
                              , J = X.low
                              , $ = (Q >>> 1 | J << 31) ^ (Q >>> 8 | J << 24) ^ Q >>> 7
                              , Z = (J >>> 1 | Q << 31) ^ (J >>> 8 | Q << 24) ^ (J >>> 7 | Q << 25)
                              , ee = u[z - 2]
                              , te = ee.high
                              , ne = ee.low
                              , oe = (te >>> 19 | ne << 13) ^ (te << 3 | ne >>> 29) ^ te >>> 6
                              , re = (ne >>> 19 | te << 13) ^ (ne << 3 | te >>> 29) ^ (ne >>> 6 | te << 26)
                              , ie = u[z - 7]
                              , ae = ie.high
                              , se = ie.low
                              , le = u[z - 16]
                              , ce = le.high
                              , ue = le.low
                              , Y = Z + se
                              , q = $ + ae + (Y >>> 0 < Z >>> 0 ? 1 : 0)
                              , Y = Y + re
                              , q = q + oe + (Y >>> 0 < re >>> 0 ? 1 : 0)
                              , Y = Y + ue
                              , q = q + ce + (Y >>> 0 < ue >>> 0 ? 1 : 0);
                            K.high = q,
                            K.low = Y
                        }
                        var pe = W & U ^ ~W & j
                          , de = L & F ^ ~L & G
                          , me = M & R ^ M & T ^ R & T
                          , fe = k & O ^ k & A ^ O & A
                          , he = (M >>> 28 | k << 4) ^ (M << 30 | k >>> 2) ^ (M << 25 | k >>> 7)
                          , ge = (k >>> 28 | M << 4) ^ (k << 30 | M >>> 2) ^ (k << 25 | M >>> 7)
                          , ve = (W >>> 14 | L << 18) ^ (W >>> 18 | L << 14) ^ (W << 23 | L >>> 9)
                          , be = (L >>> 14 | W << 18) ^ (L >>> 18 | W << 14) ^ (L << 23 | W >>> 9)
                          , ye = c[z]
                          , we = ye.high
                          , _e = ye.low
                          , Ee = V + be
                          , De = H + ve + (Ee >>> 0 < V >>> 0 ? 1 : 0)
                          , Ee = Ee + de
                          , De = De + pe + (Ee >>> 0 < de >>> 0 ? 1 : 0)
                          , Ee = Ee + _e
                          , De = De + we + (Ee >>> 0 < _e >>> 0 ? 1 : 0)
                          , Ee = Ee + Y
                          , De = De + q + (Ee >>> 0 < Y >>> 0 ? 1 : 0)
                          , Ce = ge + fe
                          , xe = he + me + (Ce >>> 0 < ge >>> 0 ? 1 : 0);
                        H = j,
                        V = G,
                        j = U,
                        G = F,
                        U = W,
                        F = L,
                        L = B + Ee | 0,
                        W = P + De + (L >>> 0 < B >>> 0 ? 1 : 0) | 0,
                        P = T,
                        B = A,
                        T = R,
                        A = O,
                        R = M,
                        O = k,
                        k = Ee + Ce | 0,
                        M = De + xe + (k >>> 0 < Ee >>> 0 ? 1 : 0) | 0
                    }
                    f = o.low = f + k,
                    o.high = m + M + (f >>> 0 < k >>> 0 ? 1 : 0),
                    g = r.low = g + O,
                    r.high = h + R + (g >>> 0 < O >>> 0 ? 1 : 0),
                    b = i.low = b + A,
                    i.high = v + T + (b >>> 0 < A >>> 0 ? 1 : 0),
                    w = a.low = w + B,
                    a.high = y + P + (w >>> 0 < B >>> 0 ? 1 : 0),
                    E = s.low = E + L,
                    s.high = _ + W + (E >>> 0 < L >>> 0 ? 1 : 0),
                    C = l.low = C + F,
                    l.high = D + U + (C >>> 0 < F >>> 0 ? 1 : 0),
                    N = p.low = N + G,
                    p.high = x + j + (N >>> 0 < G >>> 0 ? 1 : 0),
                    S = d.low = S + V,
                    d.high = I + H + (S >>> 0 < V >>> 0 ? 1 : 0)
                },
                _doFinalize: function() {
                    var e = this._data
                      , t = e.words
                      , n = 8 * this._nDataBytes
                      , o = 8 * e.sigBytes;
                    t[o >>> 5] |= 128 << 24 - o % 32,
                    t[(o + 128 >>> 10 << 5) + 30] = Math.floor(n / 4294967296),
                    t[(o + 128 >>> 10 << 5) + 31] = n,
                    e.sigBytes = 4 * t.length,
                    this._process();
                    var r = this._hash.toX32();
                    return r
                },
                clone: function() {
                    var e = r.clone.call(this);
                    return e._hash = this._hash.clone(),
                    e
                },
                blockSize: 32
            });
            n.SHA512 = r._createHelper(p),
            n.HmacSHA512 = r._createHmacHelper(p)
        }(),
        e.SHA512
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(208), n(216))
    }(this, function(e) {
        return function() {
            var t = e
              , n = t.x64
              , o = n.Word
              , r = n.WordArray
              , i = t.algo
              , a = i.SHA512
              , s = i.SHA384 = a.extend({
                _doReset: function() {
                    this._hash = new r.init([new o.init(3418070365,3238371032), new o.init(1654270250,914150663), new o.init(2438529370,812702999), new o.init(355462360,4144912697), new o.init(1731405415,4290775857), new o.init(2394180231,1750603025), new o.init(3675008525,1694076839), new o.init(1203062813,3204075428)])
                },
                _doFinalize: function() {
                    var e = a._doFinalize.call(this);
                    return e.sigBytes -= 16,
                    e
                }
            });
            t.SHA384 = a._createHelper(s),
            t.HmacSHA384 = a._createHmacHelper(s)
        }(),
        e.SHA384
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(208))
    }(this, function(e) {
        return function(t) {
            var n = e
              , o = n.lib
              , r = o.WordArray
              , i = o.Hasher
              , a = n.x64
              , s = a.Word
              , l = n.algo
              , c = []
              , u = []
              , p = [];
            !function() {
                for (var e = 1, t = 0, n = 0; n < 24; n++) {
                    c[e + 5 * t] = (n + 1) * (n + 2) / 2 % 64;
                    var o = t % 5
                      , r = (2 * e + 3 * t) % 5;
                    e = o,
                    t = r
                }
                for (var e = 0; e < 5; e++)
                    for (var t = 0; t < 5; t++)
                        u[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
                for (var i = 1, a = 0; a < 24; a++) {
                    for (var l = 0, d = 0, m = 0; m < 7; m++) {
                        if (1 & i) {
                            var f = (1 << m) - 1;
                            f < 32 ? d ^= 1 << f : l ^= 1 << f - 32
                        }
                        128 & i ? i = i << 1 ^ 113 : i <<= 1
                    }
                    p[a] = s.create(l, d)
                }
            }();
            var d = [];
            !function() {
                for (var e = 0; e < 25; e++)
                    d[e] = s.create()
            }();
            var m = l.SHA3 = i.extend({
                cfg: i.cfg.extend({
                    outputLength: 512
                }),
                _doReset: function() {
                    for (var e = this._state = [], t = 0; t < 25; t++)
                        e[t] = new s.init;
                    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                },
                _doProcessBlock: function(e, t) {
                    for (var n = this._state, o = this.blockSize / 2, r = 0; r < o; r++) {
                        var i = e[t + 2 * r]
                          , a = e[t + 2 * r + 1];
                        i = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                        a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                        var s = n[r];
                        s.high ^= a,
                        s.low ^= i
                    }
                    for (var l = 0; l < 24; l++) {
                        for (var m = 0; m < 5; m++) {
                            for (var f = 0, h = 0, g = 0; g < 5; g++) {
                                var s = n[m + 5 * g];
                                f ^= s.high,
                                h ^= s.low
                            }
                            var v = d[m];
                            v.high = f,
                            v.low = h
                        }
                        for (var m = 0; m < 5; m++)
                            for (var b = d[(m + 4) % 5], y = d[(m + 1) % 5], w = y.high, _ = y.low, f = b.high ^ (w << 1 | _ >>> 31), h = b.low ^ (_ << 1 | w >>> 31), g = 0; g < 5; g++) {
                                var s = n[m + 5 * g];
                                s.high ^= f,
                                s.low ^= h
                            }
                        for (var E = 1; E < 25; E++) {
                            var s = n[E]
                              , D = s.high
                              , C = s.low
                              , x = c[E];
                            if (x < 32)
                                var f = D << x | C >>> 32 - x
                                  , h = C << x | D >>> 32 - x;
                            else
                                var f = C << x - 32 | D >>> 64 - x
                                  , h = D << x - 32 | C >>> 64 - x;
                            var N = d[u[E]];
                            N.high = f,
                            N.low = h
                        }
                        var I = d[0]
                          , S = n[0];
                        I.high = S.high,
                        I.low = S.low;
                        for (var m = 0; m < 5; m++)
                            for (var g = 0; g < 5; g++) {
                                var E = m + 5 * g
                                  , s = n[E]
                                  , M = d[E]
                                  , k = d[(m + 1) % 5 + 5 * g]
                                  , R = d[(m + 2) % 5 + 5 * g];
                                s.high = M.high ^ ~k.high & R.high,
                                s.low = M.low ^ ~k.low & R.low
                            }
                        var s = n[0]
                          , O = p[l];
                        s.high ^= O.high,
                        s.low ^= O.low
                    }
                },
                _doFinalize: function() {
                    var e = this._data
                      , n = e.words
                      , o = (8 * this._nDataBytes,
                    8 * e.sigBytes)
                      , i = 32 * this.blockSize;
                    n[o >>> 5] |= 1 << 24 - o % 32,
                    n[(t.ceil((o + 1) / i) * i >>> 5) - 1] |= 128,
                    e.sigBytes = 4 * n.length,
                    this._process();
                    for (var a = this._state, s = this.cfg.outputLength / 8, l = s / 8, c = [], u = 0; u < l; u++) {
                        var p = a[u]
                          , d = p.high
                          , m = p.low;
                        d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8),
                        m = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8),
                        c.push(m),
                        c.push(d)
                    }
                    return new r.init(c,s)
                },
                clone: function() {
                    for (var e = i.clone.call(this), t = e._state = this._state.slice(0), n = 0; n < 25; n++)
                        t[n] = t[n].clone();
                    return e
                }
            });
            n.SHA3 = i._createHelper(m),
            n.HmacSHA3 = i._createHmacHelper(m)
        }(Math),
        e.SHA3
    })
}
, function(e, t, n) {
    !function(o, r) {
        e.exports = t = r(n(207))
    }(this, function(e) {
        /** @preserve
		(c) 2012 by Cédric Mesnil. All rights reserved.
	
		Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
	
		    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
		    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
	
		THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		*/
        return function(t) {
            function n(e, t, n) {
                return e ^ t ^ n
            }
            function o(e, t, n) {
                return e & t | ~e & n
            }
            function r(e, t, n) {
                return (e | ~t) ^ n
            }
            function i(e, t, n) {
                return e & n | t & ~n
            }
            function a(e, t, n) {
                return e ^ (t | ~n)
            }
            function s(e, t) {
                return e << t | e >>> 32 - t
            }
            var l = e
              , c = l.lib
              , u = c.WordArray
              , p = c.Hasher
              , d = l.algo
              , m = u.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13])
              , f = u.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11])
              , h = u.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6])
              , g = u.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11])
              , v = u.create([0, 1518500249, 1859775393, 2400959708, 2840853838])
              , b = u.create([1352829926, 1548603684, 1836072691, 2053994217, 0])
              , y = d.RIPEMD160 = p.extend({
                _doReset: function() {
                    this._hash = u.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                },
                _doProcessBlock: function(e, t) {
                    for (var l = 0; l < 16; l++) {
                        var c = t + l
                          , u = e[c];
                        e[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                    }
                    var p, d, y, w, _, E, D, C, x, N, I = this._hash.words, S = v.words, M = b.words, k = m.words, R = f.words, O = h.words, T = g.words;
                    E = p = I[0],
                    D = d = I[1],
                    C = y = I[2],
                    x = w = I[3],
                    N = _ = I[4];
                    for (var A, l = 0; l < 80; l += 1)
                        A = p + e[t + k[l]] | 0,
                        A += l < 16 ? n(d, y, w) + S[0] : l < 32 ? o(d, y, w) + S[1] : l < 48 ? r(d, y, w) + S[2] : l < 64 ? i(d, y, w) + S[3] : a(d, y, w) + S[4],
                        A |= 0,
                        A = s(A, O[l]),
                        A = A + _ | 0,
                        p = _,
                        _ = w,
                        w = s(y, 10),
                        y = d,
                        d = A,
                        A = E + e[t + R[l]] | 0,
                        A += l < 16 ? a(D, C, x) + M[0] : l < 32 ? i(D, C, x) + M[1] : l < 48 ? r(D, C, x) + M[2] : l < 64 ? o(D, C, x) + M[3] : n(D, C, x) + M[4],
                        A |= 0,
                        A = s(A, T[l]),
                        A = A + N | 0,
                        E = N,
                        N = x,
                        x = s(C, 10),
                        C = D,
                        D = A;
                    A = I[1] + y + x | 0,
                    I[1] = I[2] + w + N | 0,
                    I[2] = I[3] + _ + E | 0,
                    I[3] = I[4] + p + D | 0,
                    I[4] = I[0] + d + C | 0,
                    I[0] = A
                },
                _doFinalize: function() {
                    var e = this._data
                      , t = e.words
                      , n = 8 * this._nDataBytes
                      , o = 8 * e.sigBytes;
                    t[o >>> 5] |= 128 << 24 - o % 32,
                    t[(o + 64 >>> 9 << 4) + 14] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                    e.sigBytes = 4 * (t.length + 1),
                    this._process();
                    for (var r = this._hash, i = r.words, a = 0; a < 5; a++) {
                        var s = i[a];
                        i[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                    }
                    return r
                },
                clone: function() {
                    var e = p.clone.call(this);
                    return e._hash = this._hash.clone(),
                    e
                }
            });
            l.RIPEMD160 = p._createHelper(y),
            l.HmacRIPEMD160 = p._createHmacHelper(y)
        }(Math),
        e.RIPEMD160
    })
}
, function(e, t, n) {
    !function(o, r) {
        e.exports = t = r(n(207))
    }(this, function(e) {
        !function() {
            var t = e
              , n = t.lib
              , o = n.Base
              , r = t.enc
              , i = r.Utf8
              , a = t.algo;
            a.HMAC = o.extend({
                init: function(e, t) {
                    e = this._hasher = new e.init,
                    "string" == typeof t && (t = i.parse(t));
                    var n = e.blockSize
                      , o = 4 * n;
                    t.sigBytes > o && (t = e.finalize(t)),
                    t.clamp();
                    for (var r = this._oKey = t.clone(), a = this._iKey = t.clone(), s = r.words, l = a.words, c = 0; c < n; c++)
                        s[c] ^= 1549556828,
                        l[c] ^= 909522486;
                    r.sigBytes = a.sigBytes = o,
                    this.reset()
                },
                reset: function() {
                    var e = this._hasher;
                    e.reset(),
                    e.update(this._iKey)
                },
                update: function(e) {
                    return this._hasher.update(e),
                    this
                },
                finalize: function(e) {
                    var t = this._hasher
                      , n = t.finalize(e);
                    t.reset();
                    var o = t.finalize(this._oKey.clone().concat(n));
                    return o
                }
            })
        }()
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(213), n(220))
    }(this, function(e) {
        return function() {
            var t = e
              , n = t.lib
              , o = n.Base
              , r = n.WordArray
              , i = t.algo
              , a = i.SHA1
              , s = i.HMAC
              , l = i.PBKDF2 = o.extend({
                cfg: o.extend({
                    keySize: 4,
                    hasher: a,
                    iterations: 1
                }),
                init: function(e) {
                    this.cfg = this.cfg.extend(e)
                },
                compute: function(e, t) {
                    for (var n = this.cfg, o = s.create(n.hasher, e), i = r.create(), a = r.create([1]), l = i.words, c = a.words, u = n.keySize, p = n.iterations; l.length < u; ) {
                        var d = o.update(t).finalize(a);
                        o.reset();
                        for (var m = d.words, f = m.length, h = d, g = 1; g < p; g++) {
                            h = o.finalize(h),
                            o.reset();
                            for (var v = h.words, b = 0; b < f; b++)
                                m[b] ^= v[b]
                        }
                        i.concat(d),
                        c[0]++
                    }
                    return i.sigBytes = 4 * u,
                    i
                }
            });
            t.PBKDF2 = function(e, t, n) {
                return l.create(n).compute(e, t)
            }
        }(),
        e.PBKDF2
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(213), n(220))
    }(this, function(e) {
        return function() {
            var t = e
              , n = t.lib
              , o = n.Base
              , r = n.WordArray
              , i = t.algo
              , a = i.MD5
              , s = i.EvpKDF = o.extend({
                cfg: o.extend({
                    keySize: 4,
                    hasher: a,
                    iterations: 1
                }),
                init: function(e) {
                    this.cfg = this.cfg.extend(e)
                },
                compute: function(e, t) {
                    for (var n = this.cfg, o = n.hasher.create(), i = r.create(), a = i.words, s = n.keySize, l = n.iterations; a.length < s; ) {
                        c && o.update(c);
                        var c = o.update(e).finalize(t);
                        o.reset();
                        for (var u = 1; u < l; u++)
                            c = o.finalize(c),
                            o.reset();
                        i.concat(c)
                    }
                    return i.sigBytes = 4 * s,
                    i
                }
            });
            t.EvpKDF = function(e, t, n) {
                return s.create(n).compute(e, t)
            }
        }(),
        e.EvpKDF
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(222))
    }(this, function(e) {
        e.lib.Cipher || function(t) {
            var n = e
              , o = n.lib
              , r = o.Base
              , i = o.WordArray
              , a = o.BufferedBlockAlgorithm
              , s = n.enc
              , l = (s.Utf8,
            s.Base64)
              , c = n.algo
              , u = c.EvpKDF
              , p = o.Cipher = a.extend({
                cfg: r.extend(),
                createEncryptor: function(e, t) {
                    return this.create(this._ENC_XFORM_MODE, e, t)
                },
                createDecryptor: function(e, t) {
                    return this.create(this._DEC_XFORM_MODE, e, t)
                },
                init: function(e, t, n) {
                    this.cfg = this.cfg.extend(n),
                    this._xformMode = e,
                    this._key = t,
                    this.reset()
                },
                reset: function() {
                    a.reset.call(this),
                    this._doReset()
                },
                process: function(e) {
                    return this._append(e),
                    this._process()
                },
                finalize: function(e) {
                    e && this._append(e);
                    var t = this._doFinalize();
                    return t
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function() {
                    function e(e) {
                        return "string" == typeof e ? D : w
                    }
                    return function(t) {
                        return {
                            encrypt: function(n, o, r) {
                                return e(o).encrypt(t, n, o, r)
                            },
                            decrypt: function(n, o, r) {
                                return e(o).decrypt(t, n, o, r)
                            }
                        }
                    }
                }()
            })
              , d = (o.StreamCipher = p.extend({
                _doFinalize: function() {
                    var e = this._process(!0);
                    return e
                },
                blockSize: 1
            }),
            n.mode = {})
              , m = o.BlockCipherMode = r.extend({
                createEncryptor: function(e, t) {
                    return this.Encryptor.create(e, t)
                },
                createDecryptor: function(e, t) {
                    return this.Decryptor.create(e, t)
                },
                init: function(e, t) {
                    this._cipher = e,
                    this._iv = t
                }
            })
              , f = d.CBC = function() {
                function e(e, n, o) {
                    var r = this._iv;
                    if (r) {
                        var i = r;
                        this._iv = t
                    } else
                        var i = this._prevBlock;
                    for (var a = 0; a < o; a++)
                        e[n + a] ^= i[a]
                }
                var n = m.extend();
                return n.Encryptor = n.extend({
                    processBlock: function(t, n) {
                        var o = this._cipher
                          , r = o.blockSize;
                        e.call(this, t, n, r),
                        o.encryptBlock(t, n),
                        this._prevBlock = t.slice(n, n + r)
                    }
                }),
                n.Decryptor = n.extend({
                    processBlock: function(t, n) {
                        var o = this._cipher
                          , r = o.blockSize
                          , i = t.slice(n, n + r);
                        o.decryptBlock(t, n),
                        e.call(this, t, n, r),
                        this._prevBlock = i
                    }
                }),
                n
            }()
              , h = n.pad = {}
              , g = h.Pkcs7 = {
                pad: function(e, t) {
                    for (var n = 4 * t, o = n - e.sigBytes % n, r = o << 24 | o << 16 | o << 8 | o, a = [], s = 0; s < o; s += 4)
                        a.push(r);
                    var l = i.create(a, o);
                    e.concat(l)
                },
                unpad: function(e) {
                    var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                    e.sigBytes -= t
                }
            }
              , v = (o.BlockCipher = p.extend({
                cfg: p.cfg.extend({
                    mode: f,
                    padding: g
                }),
                reset: function() {
                    p.reset.call(this);
                    var e = this.cfg
                      , t = e.iv
                      , n = e.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE)
                        var o = n.createEncryptor;
                    else {
                        var o = n.createDecryptor;
                        this._minBufferSize = 1
                    }
                    this._mode && this._mode.__creator == o ? this._mode.init(this, t && t.words) : (this._mode = o.call(n, this, t && t.words),
                    this._mode.__creator = o)
                },
                _doProcessBlock: function(e, t) {
                    this._mode.processBlock(e, t)
                },
                _doFinalize: function() {
                    var e = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        e.pad(this._data, this.blockSize);
                        var t = this._process(!0)
                    } else {
                        var t = this._process(!0);
                        e.unpad(t)
                    }
                    return t
                },
                blockSize: 4
            }),
            o.CipherParams = r.extend({
                init: function(e) {
                    this.mixIn(e)
                },
                toString: function(e) {
                    return (e || this.formatter).stringify(this)
                }
            }))
              , b = n.format = {}
              , y = b.OpenSSL = {
                stringify: function(e) {
                    var t = e.ciphertext
                      , n = e.salt;
                    if (n)
                        var o = i.create([1398893684, 1701076831]).concat(n).concat(t);
                    else
                        var o = t;
                    return o.toString(l)
                },
                parse: function(e) {
                    var t = l.parse(e)
                      , n = t.words;
                    if (1398893684 == n[0] && 1701076831 == n[1]) {
                        var o = i.create(n.slice(2, 4));
                        n.splice(0, 4),
                        t.sigBytes -= 16
                    }
                    return v.create({
                        ciphertext: t,
                        salt: o
                    })
                }
            }
              , w = o.SerializableCipher = r.extend({
                cfg: r.extend({
                    format: y
                }),
                encrypt: function(e, t, n, o) {
                    o = this.cfg.extend(o);
                    var r = e.createEncryptor(n, o)
                      , i = r.finalize(t)
                      , a = r.cfg;
                    return v.create({
                        ciphertext: i,
                        key: n,
                        iv: a.iv,
                        algorithm: e,
                        mode: a.mode,
                        padding: a.padding,
                        blockSize: e.blockSize,
                        formatter: o.format
                    })
                },
                decrypt: function(e, t, n, o) {
                    o = this.cfg.extend(o),
                    t = this._parse(t, o.format);
                    var r = e.createDecryptor(n, o).finalize(t.ciphertext);
                    return r
                },
                _parse: function(e, t) {
                    return "string" == typeof e ? t.parse(e, this) : e
                }
            })
              , _ = n.kdf = {}
              , E = _.OpenSSL = {
                execute: function(e, t, n, o) {
                    o || (o = i.random(8));
                    var r = u.create({
                        keySize: t + n
                    }).compute(e, o)
                      , a = i.create(r.words.slice(t), 4 * n);
                    return r.sigBytes = 4 * t,
                    v.create({
                        key: r,
                        iv: a,
                        salt: o
                    })
                }
            }
              , D = o.PasswordBasedCipher = w.extend({
                cfg: w.cfg.extend({
                    kdf: E
                }),
                encrypt: function(e, t, n, o) {
                    o = this.cfg.extend(o);
                    var r = o.kdf.execute(n, e.keySize, e.ivSize);
                    o.iv = r.iv;
                    var i = w.encrypt.call(this, e, t, r.key, o);
                    return i.mixIn(r),
                    i
                },
                decrypt: function(e, t, n, o) {
                    o = this.cfg.extend(o),
                    t = this._parse(t, o.format);
                    var r = o.kdf.execute(n, e.keySize, e.ivSize, t.salt);
                    o.iv = r.iv;
                    var i = w.decrypt.call(this, e, t, r.key, o);
                    return i
                }
            })
        }()
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        return e.mode.CFB = function() {
            function t(e, t, n, o) {
                var r = this._iv;
                if (r) {
                    var i = r.slice(0);
                    this._iv = void 0
                } else
                    var i = this._prevBlock;
                o.encryptBlock(i, 0);
                for (var a = 0; a < n; a++)
                    e[t + a] ^= i[a]
            }
            var n = e.lib.BlockCipherMode.extend();
            return n.Encryptor = n.extend({
                processBlock: function(e, n) {
                    var o = this._cipher
                      , r = o.blockSize;
                    t.call(this, e, n, r, o),
                    this._prevBlock = e.slice(n, n + r)
                }
            }),
            n.Decryptor = n.extend({
                processBlock: function(e, n) {
                    var o = this._cipher
                      , r = o.blockSize
                      , i = e.slice(n, n + r);
                    t.call(this, e, n, r, o),
                    this._prevBlock = i
                }
            }),
            n
        }(),
        e.mode.CFB
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        return e.mode.CTR = function() {
            var t = e.lib.BlockCipherMode.extend()
              , n = t.Encryptor = t.extend({
                processBlock: function(e, t) {
                    var n = this._cipher
                      , o = n.blockSize
                      , r = this._iv
                      , i = this._counter;
                    r && (i = this._counter = r.slice(0),
                    this._iv = void 0);
                    var a = i.slice(0);
                    n.encryptBlock(a, 0),
                    i[o - 1] = i[o - 1] + 1 | 0;
                    for (var s = 0; s < o; s++)
                        e[t + s] ^= a[s]
                }
            });
            return t.Decryptor = n,
            t
        }(),
        e.mode.CTR
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        /** @preserve
		 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
		 * derived from CryptoJS.mode.CTR
		 * Jan Hruby jhruby.web@gmail.com
		 */
        return e.mode.CTRGladman = function() {
            function t(e) {
                if (255 === (e >> 24 & 255)) {
                    var t = e >> 16 & 255
                      , n = e >> 8 & 255
                      , o = 255 & e;
                    255 === t ? (t = 0,
                    255 === n ? (n = 0,
                    255 === o ? o = 0 : ++o) : ++n) : ++t,
                    e = 0,
                    e += t << 16,
                    e += n << 8,
                    e += o
                } else
                    e += 1 << 24;
                return e
            }
            function n(e) {
                return 0 === (e[0] = t(e[0])) && (e[1] = t(e[1])),
                e
            }
            var o = e.lib.BlockCipherMode.extend()
              , r = o.Encryptor = o.extend({
                processBlock: function(e, t) {
                    var o = this._cipher
                      , r = o.blockSize
                      , i = this._iv
                      , a = this._counter;
                    i && (a = this._counter = i.slice(0),
                    this._iv = void 0),
                    n(a);
                    var s = a.slice(0);
                    o.encryptBlock(s, 0);
                    for (var l = 0; l < r; l++)
                        e[t + l] ^= s[l]
                }
            });
            return o.Decryptor = r,
            o
        }(),
        e.mode.CTRGladman
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        return e.mode.OFB = function() {
            var t = e.lib.BlockCipherMode.extend()
              , n = t.Encryptor = t.extend({
                processBlock: function(e, t) {
                    var n = this._cipher
                      , o = n.blockSize
                      , r = this._iv
                      , i = this._keystream;
                    r && (i = this._keystream = r.slice(0),
                    this._iv = void 0),
                    n.encryptBlock(i, 0);
                    for (var a = 0; a < o; a++)
                        e[t + a] ^= i[a]
                }
            });
            return t.Decryptor = n,
            t
        }(),
        e.mode.OFB
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        return e.mode.ECB = function() {
            var t = e.lib.BlockCipherMode.extend();
            return t.Encryptor = t.extend({
                processBlock: function(e, t) {
                    this._cipher.encryptBlock(e, t)
                }
            }),
            t.Decryptor = t.extend({
                processBlock: function(e, t) {
                    this._cipher.decryptBlock(e, t)
                }
            }),
            t
        }(),
        e.mode.ECB
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        return e.pad.AnsiX923 = {
            pad: function(e, t) {
                var n = e.sigBytes
                  , o = 4 * t
                  , r = o - n % o
                  , i = n + r - 1;
                e.clamp(),
                e.words[i >>> 2] |= r << 24 - i % 4 * 8,
                e.sigBytes += r
            },
            unpad: function(e) {
                var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                e.sigBytes -= t
            }
        },
        e.pad.Ansix923
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        return e.pad.Iso10126 = {
            pad: function(t, n) {
                var o = 4 * n
                  , r = o - t.sigBytes % o;
                t.concat(e.lib.WordArray.random(r - 1)).concat(e.lib.WordArray.create([r << 24], 1))
            },
            unpad: function(e) {
                var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                e.sigBytes -= t
            }
        },
        e.pad.Iso10126
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        return e.pad.Iso97971 = {
            pad: function(t, n) {
                t.concat(e.lib.WordArray.create([2147483648], 1)),
                e.pad.ZeroPadding.pad(t, n)
            },
            unpad: function(t) {
                e.pad.ZeroPadding.unpad(t),
                t.sigBytes--
            }
        },
        e.pad.Iso97971
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        return e.pad.ZeroPadding = {
            pad: function(e, t) {
                var n = 4 * t;
                e.clamp(),
                e.sigBytes += n - (e.sigBytes % n || n)
            },
            unpad: function(e) {
                for (var t = e.words, n = e.sigBytes - 1; !(t[n >>> 2] >>> 24 - n % 4 * 8 & 255); )
                    n--;
                e.sigBytes = n + 1
            }
        },
        e.pad.ZeroPadding
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        return e.pad.NoPadding = {
            pad: function() {},
            unpad: function() {}
        },
        e.pad.NoPadding
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(223))
    }(this, function(e) {
        return function(t) {
            var n = e
              , o = n.lib
              , r = o.CipherParams
              , i = n.enc
              , a = i.Hex
              , s = n.format;
            s.Hex = {
                stringify: function(e) {
                    return e.ciphertext.toString(a)
                },
                parse: function(e) {
                    var t = a.parse(e);
                    return r.create({
                        ciphertext: t
                    })
                }
            }
        }(),
        e.format.Hex
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(211), n(212), n(222), n(223))
    }(this, function(e) {
        return function() {
            var t = e
              , n = t.lib
              , o = n.BlockCipher
              , r = t.algo
              , i = []
              , a = []
              , s = []
              , l = []
              , c = []
              , u = []
              , p = []
              , d = []
              , m = []
              , f = [];
            !function() {
                for (var e = [], t = 0; t < 256; t++)
                    t < 128 ? e[t] = t << 1 : e[t] = t << 1 ^ 283;
                for (var n = 0, o = 0, t = 0; t < 256; t++) {
                    var r = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
                    r = r >>> 8 ^ 255 & r ^ 99,
                    i[n] = r,
                    a[r] = n;
                    var h = e[n]
                      , g = e[h]
                      , v = e[g]
                      , b = 257 * e[r] ^ 16843008 * r;
                    s[n] = b << 24 | b >>> 8,
                    l[n] = b << 16 | b >>> 16,
                    c[n] = b << 8 | b >>> 24,
                    u[n] = b;
                    var b = 16843009 * v ^ 65537 * g ^ 257 * h ^ 16843008 * n;
                    p[r] = b << 24 | b >>> 8,
                    d[r] = b << 16 | b >>> 16,
                    m[r] = b << 8 | b >>> 24,
                    f[r] = b,
                    n ? (n = h ^ e[e[e[v ^ h]]],
                    o ^= e[e[o]]) : n = o = 1
                }
            }();
            var h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
              , g = r.AES = o.extend({
                _doReset: function() {
                    if (!this._nRounds || this._keyPriorReset !== this._key) {
                        for (var e = this._keyPriorReset = this._key, t = e.words, n = e.sigBytes / 4, o = this._nRounds = n + 6, r = 4 * (o + 1), a = this._keySchedule = [], s = 0; s < r; s++)
                            if (s < n)
                                a[s] = t[s];
                            else {
                                var l = a[s - 1];
                                s % n ? n > 6 && s % n == 4 && (l = i[l >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l]) : (l = l << 8 | l >>> 24,
                                l = i[l >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l],
                                l ^= h[s / n | 0] << 24),
                                a[s] = a[s - n] ^ l
                            }
                        for (var c = this._invKeySchedule = [], u = 0; u < r; u++) {
                            var s = r - u;
                            if (u % 4)
                                var l = a[s];
                            else
                                var l = a[s - 4];
                            u < 4 || s <= 4 ? c[u] = l : c[u] = p[i[l >>> 24]] ^ d[i[l >>> 16 & 255]] ^ m[i[l >>> 8 & 255]] ^ f[i[255 & l]]
                        }
                    }
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, s, l, c, u, i)
                },
                decryptBlock: function(e, t) {
                    var n = e[t + 1];
                    e[t + 1] = e[t + 3],
                    e[t + 3] = n,
                    this._doCryptBlock(e, t, this._invKeySchedule, p, d, m, f, a);
                    var n = e[t + 1];
                    e[t + 1] = e[t + 3],
                    e[t + 3] = n
                },
                _doCryptBlock: function(e, t, n, o, r, i, a, s) {
                    for (var l = this._nRounds, c = e[t] ^ n[0], u = e[t + 1] ^ n[1], p = e[t + 2] ^ n[2], d = e[t + 3] ^ n[3], m = 4, f = 1; f < l; f++) {
                        var h = o[c >>> 24] ^ r[u >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & d] ^ n[m++]
                          , g = o[u >>> 24] ^ r[p >>> 16 & 255] ^ i[d >>> 8 & 255] ^ a[255 & c] ^ n[m++]
                          , v = o[p >>> 24] ^ r[d >>> 16 & 255] ^ i[c >>> 8 & 255] ^ a[255 & u] ^ n[m++]
                          , b = o[d >>> 24] ^ r[c >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & p] ^ n[m++];
                        c = h,
                        u = g,
                        p = v,
                        d = b
                    }
                    var h = (s[c >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & d]) ^ n[m++]
                      , g = (s[u >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & c]) ^ n[m++]
                      , v = (s[p >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & u]) ^ n[m++]
                      , b = (s[d >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & p]) ^ n[m++];
                    e[t] = h,
                    e[t + 1] = g,
                    e[t + 2] = v,
                    e[t + 3] = b
                },
                keySize: 8
            });
            t.AES = o._createHelper(g)
        }(),
        e.AES
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(211), n(212), n(222), n(223))
    }(this, function(e) {
        return function() {
            function t(e, t) {
                var n = (this._lBlock >>> e ^ this._rBlock) & t;
                this._rBlock ^= n,
                this._lBlock ^= n << e
            }
            function n(e, t) {
                var n = (this._rBlock >>> e ^ this._lBlock) & t;
                this._lBlock ^= n,
                this._rBlock ^= n << e
            }
            var o = e
              , r = o.lib
              , i = r.WordArray
              , a = r.BlockCipher
              , s = o.algo
              , l = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
              , c = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
              , u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
              , p = [{
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378
            }, {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672
            }, {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792
            }, {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464
            }, {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040
            }, {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656
            }, {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577
            }, {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848
            }]
              , d = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
              , m = s.DES = a.extend({
                _doReset: function() {
                    for (var e = this._key, t = e.words, n = [], o = 0; o < 56; o++) {
                        var r = l[o] - 1;
                        n[o] = t[r >>> 5] >>> 31 - r % 32 & 1
                    }
                    for (var i = this._subKeys = [], a = 0; a < 16; a++) {
                        for (var s = i[a] = [], p = u[a], o = 0; o < 24; o++)
                            s[o / 6 | 0] |= n[(c[o] - 1 + p) % 28] << 31 - o % 6,
                            s[4 + (o / 6 | 0)] |= n[28 + (c[o + 24] - 1 + p) % 28] << 31 - o % 6;
                        s[0] = s[0] << 1 | s[0] >>> 31;
                        for (var o = 1; o < 7; o++)
                            s[o] = s[o] >>> 4 * (o - 1) + 3;
                        s[7] = s[7] << 5 | s[7] >>> 27
                    }
                    for (var d = this._invSubKeys = [], o = 0; o < 16; o++)
                        d[o] = i[15 - o]
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._subKeys)
                },
                decryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._invSubKeys)
                },
                _doCryptBlock: function(e, o, r) {
                    this._lBlock = e[o],
                    this._rBlock = e[o + 1],
                    t.call(this, 4, 252645135),
                    t.call(this, 16, 65535),
                    n.call(this, 2, 858993459),
                    n.call(this, 8, 16711935),
                    t.call(this, 1, 1431655765);
                    for (var i = 0; i < 16; i++) {
                        for (var a = r[i], s = this._lBlock, l = this._rBlock, c = 0, u = 0; u < 8; u++)
                            c |= p[u][((l ^ a[u]) & d[u]) >>> 0];
                        this._lBlock = l,
                        this._rBlock = s ^ c
                    }
                    var m = this._lBlock;
                    this._lBlock = this._rBlock,
                    this._rBlock = m,
                    t.call(this, 1, 1431655765),
                    n.call(this, 8, 16711935),
                    n.call(this, 2, 858993459),
                    t.call(this, 16, 65535),
                    t.call(this, 4, 252645135),
                    e[o] = this._lBlock,
                    e[o + 1] = this._rBlock
                },
                keySize: 2,
                ivSize: 2,
                blockSize: 2
            });
            o.DES = a._createHelper(m);
            var f = s.TripleDES = a.extend({
                _doReset: function() {
                    var e = this._key
                      , t = e.words;
                    this._des1 = m.createEncryptor(i.create(t.slice(0, 2))),
                    this._des2 = m.createEncryptor(i.create(t.slice(2, 4))),
                    this._des3 = m.createEncryptor(i.create(t.slice(4, 6)))
                },
                encryptBlock: function(e, t) {
                    this._des1.encryptBlock(e, t),
                    this._des2.decryptBlock(e, t),
                    this._des3.encryptBlock(e, t)
                },
                decryptBlock: function(e, t) {
                    this._des3.decryptBlock(e, t),
                    this._des2.encryptBlock(e, t),
                    this._des1.decryptBlock(e, t)
                },
                keySize: 6,
                ivSize: 2,
                blockSize: 2
            });
            o.TripleDES = a._createHelper(f)
        }(),
        e.TripleDES
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(211), n(212), n(222), n(223))
    }(this, function(e) {
        return function() {
            function t() {
                for (var e = this._S, t = this._i, n = this._j, o = 0, r = 0; r < 4; r++) {
                    t = (t + 1) % 256,
                    n = (n + e[t]) % 256;
                    var i = e[t];
                    e[t] = e[n],
                    e[n] = i,
                    o |= e[(e[t] + e[n]) % 256] << 24 - 8 * r
                }
                return this._i = t,
                this._j = n,
                o
            }
            var n = e
              , o = n.lib
              , r = o.StreamCipher
              , i = n.algo
              , a = i.RC4 = r.extend({
                _doReset: function() {
                    for (var e = this._key, t = e.words, n = e.sigBytes, o = this._S = [], r = 0; r < 256; r++)
                        o[r] = r;
                    for (var r = 0, i = 0; r < 256; r++) {
                        var a = r % n
                          , s = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                        i = (i + o[r] + s) % 256;
                        var l = o[r];
                        o[r] = o[i],
                        o[i] = l
                    }
                    this._i = this._j = 0
                },
                _doProcessBlock: function(e, n) {
                    e[n] ^= t.call(this)
                },
                keySize: 8,
                ivSize: 0
            });
            n.RC4 = r._createHelper(a);
            var s = i.RC4Drop = a.extend({
                cfg: a.cfg.extend({
                    drop: 192
                }),
                _doReset: function() {
                    a._doReset.call(this);
                    for (var e = this.cfg.drop; e > 0; e--)
                        t.call(this)
                }
            });
            n.RC4Drop = r._createHelper(s)
        }(),
        e.RC4
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(211), n(212), n(222), n(223))
    }(this, function(e) {
        return function() {
            function t() {
                for (var e = this._X, t = this._C, n = 0; n < 8; n++)
                    s[n] = t[n];
                t[0] = t[0] + 1295307597 + this._b | 0,
                t[1] = t[1] + 3545052371 + (t[0] >>> 0 < s[0] >>> 0 ? 1 : 0) | 0,
                t[2] = t[2] + 886263092 + (t[1] >>> 0 < s[1] >>> 0 ? 1 : 0) | 0,
                t[3] = t[3] + 1295307597 + (t[2] >>> 0 < s[2] >>> 0 ? 1 : 0) | 0,
                t[4] = t[4] + 3545052371 + (t[3] >>> 0 < s[3] >>> 0 ? 1 : 0) | 0,
                t[5] = t[5] + 886263092 + (t[4] >>> 0 < s[4] >>> 0 ? 1 : 0) | 0,
                t[6] = t[6] + 1295307597 + (t[5] >>> 0 < s[5] >>> 0 ? 1 : 0) | 0,
                t[7] = t[7] + 3545052371 + (t[6] >>> 0 < s[6] >>> 0 ? 1 : 0) | 0,
                this._b = t[7] >>> 0 < s[7] >>> 0 ? 1 : 0;
                for (var n = 0; n < 8; n++) {
                    var o = e[n] + t[n]
                      , r = 65535 & o
                      , i = o >>> 16
                      , a = ((r * r >>> 17) + r * i >>> 15) + i * i
                      , c = ((4294901760 & o) * o | 0) + ((65535 & o) * o | 0);
                    l[n] = a ^ c
                }
                e[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0,
                e[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0,
                e[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0,
                e[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0,
                e[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0,
                e[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0,
                e[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0,
                e[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0
            }
            var n = e
              , o = n.lib
              , r = o.StreamCipher
              , i = n.algo
              , a = []
              , s = []
              , l = []
              , c = i.Rabbit = r.extend({
                _doReset: function() {
                    for (var e = this._key.words, n = this.cfg.iv, o = 0; o < 4; o++)
                        e[o] = 16711935 & (e[o] << 8 | e[o] >>> 24) | 4278255360 & (e[o] << 24 | e[o] >>> 8);
                    var r = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16]
                      , i = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
                    this._b = 0;
                    for (var o = 0; o < 4; o++)
                        t.call(this);
                    for (var o = 0; o < 8; o++)
                        i[o] ^= r[o + 4 & 7];
                    if (n) {
                        var a = n.words
                          , s = a[0]
                          , l = a[1]
                          , c = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                          , u = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                          , p = c >>> 16 | 4294901760 & u
                          , d = u << 16 | 65535 & c;
                        i[0] ^= c,
                        i[1] ^= p,
                        i[2] ^= u,
                        i[3] ^= d,
                        i[4] ^= c,
                        i[5] ^= p,
                        i[6] ^= u,
                        i[7] ^= d;
                        for (var o = 0; o < 4; o++)
                            t.call(this)
                    }
                },
                _doProcessBlock: function(e, n) {
                    var o = this._X;
                    t.call(this),
                    a[0] = o[0] ^ o[5] >>> 16 ^ o[3] << 16,
                    a[1] = o[2] ^ o[7] >>> 16 ^ o[5] << 16,
                    a[2] = o[4] ^ o[1] >>> 16 ^ o[7] << 16,
                    a[3] = o[6] ^ o[3] >>> 16 ^ o[1] << 16;
                    for (var r = 0; r < 4; r++)
                        a[r] = 16711935 & (a[r] << 8 | a[r] >>> 24) | 4278255360 & (a[r] << 24 | a[r] >>> 8),
                        e[n + r] ^= a[r]
                },
                blockSize: 4,
                ivSize: 2
            });
            n.Rabbit = r._createHelper(c)
        }(),
        e.Rabbit
    })
}
, function(e, t, n) {
    !function(o, r, i) {
        e.exports = t = r(n(207), n(211), n(212), n(222), n(223))
    }(this, function(e) {
        return function() {
            function t() {
                for (var e = this._X, t = this._C, n = 0; n < 8; n++)
                    s[n] = t[n];
                t[0] = t[0] + 1295307597 + this._b | 0,
                t[1] = t[1] + 3545052371 + (t[0] >>> 0 < s[0] >>> 0 ? 1 : 0) | 0,
                t[2] = t[2] + 886263092 + (t[1] >>> 0 < s[1] >>> 0 ? 1 : 0) | 0,
                t[3] = t[3] + 1295307597 + (t[2] >>> 0 < s[2] >>> 0 ? 1 : 0) | 0,
                t[4] = t[4] + 3545052371 + (t[3] >>> 0 < s[3] >>> 0 ? 1 : 0) | 0,
                t[5] = t[5] + 886263092 + (t[4] >>> 0 < s[4] >>> 0 ? 1 : 0) | 0,
                t[6] = t[6] + 1295307597 + (t[5] >>> 0 < s[5] >>> 0 ? 1 : 0) | 0,
                t[7] = t[7] + 3545052371 + (t[6] >>> 0 < s[6] >>> 0 ? 1 : 0) | 0,
                this._b = t[7] >>> 0 < s[7] >>> 0 ? 1 : 0;
                for (var n = 0; n < 8; n++) {
                    var o = e[n] + t[n]
                      , r = 65535 & o
                      , i = o >>> 16
                      , a = ((r * r >>> 17) + r * i >>> 15) + i * i
                      , c = ((4294901760 & o) * o | 0) + ((65535 & o) * o | 0);
                    l[n] = a ^ c
                }
                e[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0,
                e[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0,
                e[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0,
                e[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0,
                e[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0,
                e[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0,
                e[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0,
                e[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0
            }
            var n = e
              , o = n.lib
              , r = o.StreamCipher
              , i = n.algo
              , a = []
              , s = []
              , l = []
              , c = i.RabbitLegacy = r.extend({
                _doReset: function() {
                    var e = this._key.words
                      , n = this.cfg.iv
                      , o = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16]
                      , r = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
                    this._b = 0;
                    for (var i = 0; i < 4; i++)
                        t.call(this);
                    for (var i = 0; i < 8; i++)
                        r[i] ^= o[i + 4 & 7];
                    if (n) {
                        var a = n.words
                          , s = a[0]
                          , l = a[1]
                          , c = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                          , u = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                          , p = c >>> 16 | 4294901760 & u
                          , d = u << 16 | 65535 & c;
                        r[0] ^= c,
                        r[1] ^= p,
                        r[2] ^= u,
                        r[3] ^= d,
                        r[4] ^= c,
                        r[5] ^= p,
                        r[6] ^= u,
                        r[7] ^= d;
                        for (var i = 0; i < 4; i++)
                            t.call(this)
                    }
                },
                _doProcessBlock: function(e, n) {
                    var o = this._X;
                    t.call(this),
                    a[0] = o[0] ^ o[5] >>> 16 ^ o[3] << 16,
                    a[1] = o[2] ^ o[7] >>> 16 ^ o[5] << 16,
                    a[2] = o[4] ^ o[1] >>> 16 ^ o[7] << 16,
                    a[3] = o[6] ^ o[3] >>> 16 ^ o[1] << 16;
                    for (var r = 0; r < 4; r++)
                        a[r] = 16711935 & (a[r] << 8 | a[r] >>> 24) | 4278255360 & (a[r] << 24 | a[r] >>> 8),
                        e[n + r] ^= a[r]
                },
                blockSize: 4,
                ivSize: 2
            });
            n.RabbitLegacy = r._createHelper(c)
        }(),
        e.RabbitLegacy
    })
}
, function(e, t) {
    "use strict";
    e.exports = {
        path: "demo/images/faces/",
        map: {
            "[):]": "ee_1.png",
            "[:D]": "ee_2.png",
            "[;)]": "ee_3.png",
            "[:-o]": "ee_4.png",
            "[:p]": "ee_5.png",
            "[(H)]": "ee_6.png",
            "[:@]": "ee_7.png",
            "[:s]": "ee_8.png",
            "[:$]": "ee_9.png",
            "[:(]": "ee_10.png",
            "[:'(]": "ee_11.png",
            "[:|]": "ee_18.png",
            "[(a)]": "ee_13.png",
            "[8o|]": "ee_14.png",
            "[8-|]": "ee_15.png",
            "[+o(]": "ee_16.png",
            "[<o)]": "ee_12.png",
            "[|-)]": "ee_17.png",
            "[*-)]": "ee_19.png",
            "[:-#]": "ee_20.png",
            "[:-*]": "ee_22.png",
            "[^o)]": "ee_21.png",
            "[8-)]": "ee_23.png",
            "[(|)]": "ee_24.png",
            "[(u)]": "ee_25.png",
            "[(S)]": "ee_26.png",
            "[(*)]": "ee_27.png",
            "[(#)]": "ee_28.png",
            "[(R)]": "ee_29.png",
            "[({)]": "ee_30.png",
            "[(})]": "ee_31.png",
            "[(k)]": "ee_32.png",
            "[(F)]": "ee_33.png",
            "[(W)]": "ee_34.png",
            "[(D)]": "ee_35.png"
        }
    }
}
, function(e, t) {
    "use strict";
    t.English = {
        signIn: "Sign In",
        username: "Username",
        password: "Password",
        tokenSignin: "Sign in with token",
        nickname: "Nickname",
        signUp: "Sign Up",
        signUpSuccessfully: "You've signed up successfully!",
        notEmpty: "cannot be empty",
        request: "want to add you as a friend",
        add: "Add",
        delete: "Delete",
        addAFriend: "Add friend",
        delAFriend: "Delete friend",
        quit: "Quit",
        groups: "Groups",
        strangers: "Strangers",
        chatrooms: "Chat rooms",
        friends: "Friends",
        exceed: "Please upload a file less than 10M.",
        invalidType: "Invalid type",
        uploadFileFailed: "An error occured when uploading a file",
        agree: "Agree",
        reject: "Reject",
        send: "Send",
        notin: "You are not in the current chat room.",
        sendImageFailed: "Failed to send image!",
        sendAudioFailed: "Failed to send audio!",
        sendFileFailed: "Failed to send file!",
        image: "Image",
        audio: "Audio",
        file: "File",
        location: "Location",
        video: "Video",
        cmd: "Command",
        download: "Download",
        loading: "Loading",
        FileLoading: "Loading...",
        openFile: "Open File",
        openDir: "Open Dir",
        noaccount: "No account",
        signupnow: "Sign up now",
        joinPublicGroup: "Join Group",
        createGroup: "Create Group",
        chooseGroupMember: "Choose Member",
        selectedLabel: "Selected",
        groupMemberLabel: "Member",
        groupSubject: "Group Subject",
        groupDescription: "Group Description",
        groupPermission: "Group Permission",
        groupMemberPermission: "Group Member Permission",
        adminGroupMembers: "Admin Group Members",
        inviteGroupMembers: "Invite Group Members",
        changeGroupSubject: "Change Subjec",
        changeGroupDescription: "Change Description",
        destroyGroup: "Destroy",
        leaveGroup: "Leave",
        shield: "Shield",
        receive: "Remove shield",
        haveaccount: "i have account",
        confirm: "confirm",
        cancel: "cancel",
        contact_added: "Contact added!",
        contact_deleted: "Contact deleted!",
        addFriendSelfInvalid: "Can't add youself as friend",
        delFriendSelfInvalid: "Can't del youself as friend",
        addFriendRepeat: "is friend already",
        addToBlackList: "add to blacklist",
        blacklist: "Blacklist",
        ShowBlacklist: "Blacklist",
        groupBlacklist: "Blacklist",
        showGroupBlacklist: "Blacklist",
        memberInvite: "Invite",
        changeGroupInfo: "Edit group info",
        groupNotification: "Group Notification",
        fileOverSize: "Size of file can't over 10 MB",
        deletePrivateGroupMember: "Permission denied, can't delete private members",
        groupNameNotEmpty: "Group name can't be empty",
        refuse: "You were refused by %s",
        inviteToGroup: "%s invite you to the group",
        inviteGroup: "You invited %s to this group",
        createGroupSuc: "Group %s is successfully created",
        logoutSuc: "You are off line!",
        onMuted: "You were muted in this group",
        search: "Search",
        join: "Join",
        addToGroupBlackList: "Add to group black list",
        mute: "Block this member",
        removeMute: "Unblock this member",
        administrator: "Set as administrator",
        rmAdministrator: "Remove administrator",
        removeGroupMember: "Remove this member",
        addGroupMember: "Add Group Member",
        allowInvite: "Allow invite",
        last: ""
    },
    t.Chinese = {
        signIn: "登录",
        username: "用户名",
        password: "密码",
        tokenSignin: "使用token登录",
        nickname: "昵称",
        signUp: "注册",
        signUpSuccessfully: "注册成功",
        notEmpty: "不能为空",
        request: "请求添加好友",
        add: "添加",
        delete: "删除",
        addAFriend: "添加好友",
        delAFriend: "删除好友",
        quit: "退出",
        groups: "群组",
        strangers: "陌生人",
        chatrooms: "聊天室",
        friends: "好友",
        exceed: "请上传大小不超过10M的文件",
        invalidType: "不支持此类型",
        uploadFileFailed: "上传文件发生错误",
        agree: "同意",
        reject: "拒绝",
        send: "发送",
        notin: "您不在当前聊天室",
        sendImageFailed: "图片发送失败",
        sendAudioFailed: "发送音频失败",
        sendFileFailed: "文件发送失败",
        image: "图片",
        audio: "音频",
        file: "文件",
        location: "位置",
        video: "视频",
        cmd: "命令消息",
        download: "点击下载",
        loading: "正在加载",
        FileLoading: "正在下载...",
        openFile: "打开文件",
        openDir: "打开文件夹",
        noaccount: "没有账号",
        signupnow: "现在注册",
        joinPublicGroup: "申请加入公开群",
        createGroup: "创建群组",
        chooseGroupMember: "选择成员",
        selectedLabel: "选中",
        groupMemberLabel: "成员",
        groupSubject: "群组名",
        groupDescription: "群组简介",
        groupPermission: "群组权限",
        groupMemberPermission: "成员权限",
        adminGroupMembers: "管理群成员",
        inviteGroupMembers: "邀请群成员",
        changeGroupSubject: "修改群名称",
        changeGroupDescription: "修改群简介",
        destroyGroup: "解散群组",
        leaveGroup: "退出群组",
        shield: "消息免打扰",
        receive: "接受消息",
        haveaccount: "已有账号",
        confirm: "确定",
        cancel: "取消",
        contact_added: "已发送添加请求!",
        contact_deleted: "好友已删除!",
        addFriendSelfInvalid: "不能添加自己为好友",
        delFriendSelfInvalid: "该好友不存在",
        addFriendRepeat: "已经是好友",
        addToBlackList: "加入黑名单",
        blacklist: "好友黑名单",
        ShowBlacklist: "好友黑名单",
        groupBlacklist: "群组黑名单",
        showGroupBlacklist: "群组黑名单",
        memberInvite: "邀请好友",
        changeGroupInfo: "修改群信息",
        groupNotification: "群消息",
        fileOverSize: "文件最大不能超过10MB",
        deletePrivateGroupMember: "权限不够，不能删除私有群成员",
        groupNameNotEmpty: "群组名不能为空",
        refuse: "%s拒绝了你的请求",
        inviteToGroup: "%s邀请您进群",
        inviteGroup: "您邀请了%s进群",
        createGroupSuc: "已成功创建群组%s",
        logoutSuc: "您已下线",
        onMuted: "您已被禁言",
        search: "搜索",
        join: "加入群组",
        addToGroupBlackList: "加入群黑名单",
        mute: "禁言",
        removeMute: "解除禁言",
        administrator: "设为管理员",
        rmAdministrator: "移除管理员",
        removeGroupMember: "从本群中移除",
        addGroupMember: "添加群成员",
        allowInvite: "允许邀请入群",
        last: ""
    }
}
]);