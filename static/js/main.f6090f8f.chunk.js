(this["webpackJsonpmedia-player-front-end"]=this["webpackJsonpmedia-player-front-end"]||[]).push([[0],{368:function(n,e,t){},369:function(n,e,t){},370:function(n,e,t){"use strict";t.r(e);var o=t(0),i=t.n(o),r=t(9),a=t.n(r),c=t(8),s=t(6),d=t(165),u=t(185),l=t(28),p=(t(199),t(200),t(32)),f=(t(18),t(27),t(13)),b=t.n(f),h=t(23),g=t(12),m=t(166),x=t.n(m),j=t(25),v=t(103),O=t(167),y=t.n(O),w=t(168),k=t(26),M=Object(j.createAsyncThunk)("auth/login",function(){var n=Object(h.a)(b.a.mark((function n(e,t){var o,i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.rejectWithValue,n.prev=1,n.next=4,ln.login(e);case 4:return i=n.sent,n.abrupt("return",i.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",o(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),S=Object(j.createAsyncThunk)("auth/register",function(){var n=Object(h.a)(b.a.mark((function n(e,t){var o,i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.rejectWithValue,n.prev=1,n.next=4,ln.register(e);case 4:return i=n.sent,n.abrupt("return",i.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",o(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),I=Object(j.createAsyncThunk)("auth/getInfo",function(){var n=Object(h.a)(b.a.mark((function n(e,t){var o,i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.rejectWithValue,n.prev=1,n.next=4,ln.getInfo();case 4:return i=n.sent,n.abrupt("return",i.data);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",o(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t){return n.apply(this,arguments)}}()),L=Object(j.createSlice)({name:"auth",initialState:{accessToken:null,userInfo:null,isLoading:!1},reducers:{logout:function(n){n.accessToken=null,n.userInfo=null,n.isLoading=!1}},extraReducers:function(n){n.addCase(M.fulfilled,(function(n,e){var t=e.payload,o=t.data,i=t.meta;n.userInfo=o,n.accessToken=i.token,n.isLoading=!1})),n.addCase(M.pending,(function(n){n.isLoading=!0})),n.addCase(M.rejected,(function(n){n.accessToken=null,n.userInfo=null,n.isLoading=!1})),n.addCase(S.fulfilled,(function(n,e){var t=e.payload,o=t.data,i=t.meta;n.userInfo=o,n.accessToken=i.token,n.isLoading=!1})),n.addCase(S.pending,(function(n){n.isLoading=!0})),n.addCase(S.rejected,(function(n){n.accessToken=null,n.userInfo=null,n.isLoading=!1})),n.addCase(I.fulfilled,(function(n,e){var t=e.payload.data;n.userInfo=t,n.isLoading=!1})),n.addCase(I.pending,(function(n){n.isLoading=!0}))}}),P=function(n){return n.auth},B=L.actions.logout,C=L.reducer,F=(0,t(25).createSlice)({name:"player",initialState:{playlist:[],currentSong:null,isPlaying:!1,isClosed:!1,listPlayedSongs:[]},reducers:{concatPlaylist:function(n,e){e.payload.forEach((function(e){n.playlist.some((function(n){return n.musicSrc===e.musicSrc}))||(n.playlist.push(e),l.b.success("\u0110\xe3 th\xeam v\xe0o danh s\xe1ch ph\xe1t!"))}))},replacePlaylist:function(n,e){var t=e.payload;n.playlist=t},play:function(n){n.isPlaying=!0},pause:function(n){n.isPlaying=!1},refreshPlaylist:function(n){n.playlist=[]},closePlayer:function(n){n.isClosed=!0},openPlayer:function(n){n.isClosed=!1},addPlayedSong:function(n,e){n.listPlayedSongs.push(e.payload)},updateCurrentSong:function(n,e){n.currentSong=e.payload}}}),z=function(n){return n.player},T=F.actions,A=(T.concatPlaylist,T.play),N=T.pause,_=T.replacePlaylist,R=(T.refreshPlaylist,T.closePlayer),E=(T.openPlayer,T.addPlayedSong),q=T.updateCurrentSong,D=F.reducer,H=Object(j.createSlice)({name:"history",initialState:{history:[],recently:[]},reducers:{updateHistory:function(n,e){var t=n.history.findIndex((function(n){return e.payload.musicSrc===n.musicSrc}));-1===t||n.history.splice(t,1),n.history.unshift(e.payload),n.recently=n.history.slice(0,4)}}}),W=H.actions.updateHistory,U=H.reducer,V=Object(j.createSlice)({name:"formLogin",initialState:{isShowFormLogin:!1},reducers:{showFormLogin:function(n){n.isShowFormLogin=!0},hiddenFormLogin:function(n){n.isShowFormLogin=!1}}}),X=function(n){return n.formLogin},G=V.actions,J=(G.showFormLogin,G.hiddenFormLogin),K=V.reducer,Y=Object(k.d)({auth:C,player:D,history:U,formLogin:K}),Q={key:"root",storage:y.a,whitelist:["auth","history"]},Z=Object(v.a)(Q,Y),$=Object(j.configureStore)({reducer:Z,middleware:[w.a]}),nn=Object(v.b)($),en=$,tn=t(221),on=x.a.create({baseURL:"https://media-player-be.herokuapp.com/",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},paramsSerializer:function(n){return tn.stringify(n)}});on.interceptors.request.use((function(n){var e=en.getState().auth.accessToken;return e&&(n.headers.Authorization="Bearer ".concat(e)),n})),on.interceptors.response.use((function(n){return n&&n.data,n}),(function(n){throw n.response&&401===n.response.status&&en.dispatch(B()),n}));var rn,an,cn,sn,dn,un=on,ln={login:function(n){return un.post("/auth/login",n)},register:function(n){return un.post("/auth/register",n)},getInfo:function(){return un.get("/me")},updateInfo:function(n){return un.patch("/auth",n)}},pn=function(n){var e="/songs/"+n;return un.post(e)},fn=t(4),bn=(s.c.div(rn||(rn=Object(fn.a)(["\n    min-height: 100vh;\n\n    .listTopSongs {\n        padding: 20px;\n    }\n\n    .noSongs {\n        margin-top: 10px;\n        padding-left: 10px;\n    }\n\n"]))),s.c.div(an||(an=Object(fn.a)(["\n    padding-left: 30px;\n\n    .heading {\n        font-size: 30px;\n        margin-left: -20px;\n        padding-top: 20px;\n    }\n"]))),{colors:{main:"#170F23",secondary:"#3F0537",purple:"#7200A1",orange:"#FF5D24",gray:"#F6F6F6",gray_1:"#333333",gray_2:"#4f4f4f",gray_3:"#828282",gray_4:"#BDBDBD",gray_5:"#E0E0E0",gray_6:"#F2F2F2",black:"#231B2E",bgBtn:"#430538"},breakPoints:{breakSmall:"320px",breakMobile:"540px",breakMobileMedium:"575px",breakTablet:"770px",breakOnlyMobile:"768px",breakMedium:"980px",breakIpadPro:"1024px",breakLarge:"1200px",breakBig:"1366px"}}),hn=function(){return Object(s.b)(cn||(cn=Object(fn.a)(["\n        @media (max-width: ",") {\n            ","\n        }\n    "])),bn.breakPoints.breakMobile,s.b.apply(void 0,arguments))},gn=function(){return Object(s.b)(sn||(sn=Object(fn.a)(["\n        @media (max-width: ",") {\n            ","\n        }\n    "])),bn.breakPoints.breakTablet,s.b.apply(void 0,arguments))},mn=function(){return Object(s.b)(dn||(dn=Object(fn.a)(["\n        @media (max-width: ",") {\n            ","\n        }\n    "])),bn.breakPoints.breakIpadPro,s.b.apply(void 0,arguments))},xn=t(41),jn=xn.a().shape({email:xn.c().required("This field is required!").email("Email is invalid!"),password:xn.c().required("This field is required!")}),vn=xn.a().shape({email:xn.c().required("This field is required!").email("Email is invalid!"),password:xn.c().required("This field is required!"),confirmPassword:xn.c().required("This field is required!").oneOf([xn.b("password"),null],"Passwords must match")}),On=function(n){return{key:n.key||n.slug,name:n.name,musicSrc:n.musicSrc||n.fileUrl,cover:n.cover||n.thumbUrl,singer:n.singer||"",lyric:n.lyric||n.lyrics}};s.c.div(yn||(yn=Object(fn.a)(["\n    padding: 20px 20px 0 20px;\n\n    .infoWrapper {\n        display: flex;\n        width: 100%;\n\n        ","\n    }\n\n    .generalInfoWrapper {\n        padding-left: 20px;\n        padding-top: 20px;\n        display: flex;\n\n        ","\n\n        .userInfo {\n            padding: 0 10px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n\n            ","\n            \n            & > p {\n                padding: 5px 0;\n            }\n\n            .username {\n                font-size: 20px;\n            }\n\n            .value {\n                display: block;\n                max-width: 270px;\n                text-overflow: ellipsis;\n                overflow: hidden;\n\n                ","\n\n                ","\n\n                ","\n            }\n        }\n    }\n\n    .update {\n        min-width: 550px;\n        margin-left: 50px;\n\n        ","\n        \n        ","\n\n        ","\n\n        .updateInfo {\n            margin-top: 10px;\n        }\n\n        .updateItem {\n            padding: 10px;\n\n            .labelAvatar {\n                display: inline-block;\n                padding-bottom: 10px;\n            }\n        }\n    }\n\n    .MuiFormLabel-root {\n        color: #fff;\n    }\n\n    .MuiInputBase-root {\n        color: #fff;\n    }\n\n    .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n\n    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n\n    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n\n    .MuiFormLabel-root.Mui-focused {\n        color: #fff;\n    }\n    \n    .MuiFormLabel-root.Mui-error {\n        color: #f44336;\n    }\n\n    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {\n        border-color: #f44336;\n    }\n\n    .MuiFormLabel-root.Mui-disabled {\n        color: #fff;\n    }\n\n    .MuiInputBase-root.Mui-disabled {\n        color: #fff;\n    }\n\n    .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n"])),gn(wn||(wn=Object(fn.a)(["\n            flex-direction: column;\n        "]))),hn(kn||(kn=Object(fn.a)(["\n            flex-direction: column;\n            padding-left: 0px;\n            align-items: center;\n        "]))),hn(Mn||(Mn=Object(fn.a)(["\n                margin-top: 10px;\n            "]))),mn(Sn||(Sn=Object(fn.a)(["\n                    max-width: 185px;\n                "]))),gn(In||(In=Object(fn.a)(["\n                    max-width: unset;\n                "]))),hn(Ln||(Ln=Object(fn.a)(["\n                    max-width: 275px;\n                "]))),mn(Pn||(Pn=Object(fn.a)(["\n            margin-left: 0;\n            min-width: 350px;\n        "]))),gn(Bn||(Bn=Object(fn.a)(["\n            margin-top: 30px;\n        "]))),gn(Cn||(Cn=Object(fn.a)(["\n            min-width: 100%;\n        "]))));var yn,wn,kn,Mn,Sn,In,Ln,Pn,Bn,Cn,Fn,zn,Tn,An,Nn,_n,Rn,En,qn,Dn,Hn,Wn,Un,Vn,Xn,Gn,Jn,Kn,Yn,Qn,Zn,$n,ne,ee,te,oe,ie,re,ae,ce,se,de=s.c.button(Fn||(Fn=Object(fn.a)(["\n    padding: 13px 20px;\n    border-radius: 6px;\n    width: 100%;\n    transition: 300ms;\n    font-size: 16px;\n    \n    &:hover {\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.secondary})),ue=Object(s.c)(de)(zn||(zn=Object(fn.a)(["\n    margin-top: 20px;\n    border: 1px solid #fff;\n    background-color: ",";\n\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(n){return n.disabled?"#ccc":"transparent"}),(function(n){return n.disabled?"#ccc":n.theme.colors.secondary})),le=(s.c.div(Tn||(Tn=Object(fn.a)(["\n    background: rgb(2,0,36);\n    background: linear-gradient(32deg, rgba(2,0,36,1) 0%, rgba(121,9,73,1) 50%, rgba(0,212,255,1) 100%);\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n"]))),s.c.div(An||(An=Object(fn.a)(['\n    background-image: url("images/backgrounds/background_login.jpg");\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    background-size: cover;\n    top: 0;\n    left: 0;\n    z-index: -1;\n']))),s.c.div(Nn||(Nn=Object(fn.a)(["\n    margin: 20px 0;\n"])))),pe=(s.c.div(_n||(_n=Object(fn.a)(["\n    background-color: #fff;\n    padding: 10px;\n"]))),t(400)),fe=t(1),be=(Object(s.c)(pe.a.div)(Rn||(Rn=Object(fn.a)(["\n    background-color: ",";\n    box-shadow: 3px 0 10px rgba(0, 0, 0, .3);\n    min-height: 100vh;\n    position: sticky;\n    top: 0;\n    left: 0;\n\n    .logo {\n        padding-top: 5px;\n        position: relative;\n\n        .ringAnimate {\n            position: absolute;\n            display: inline-block;\n            width: 40%;\n            height: 100%;\n            border-radius: 50%;\n            border: 1px solid ",";\n            transform: scale(0.7);\n            ","\n            z-index: -1;\n        }\n\n        img {\n            width: 40%;\n        }\n    }\n\n    .listItem {\n        display: flex;\n        flex-direction: column;\n        padding-top: 30px;\n        padding-left: 15px;\n        padding-bottom: 10px;\n        border-bottom: 1px solid ",";\n\n        &.listItemBottom {\n            border-bottom: none;\n            padding-top: 10px;\n        }\n    }\n\n    @keyframes scale {\n        from {\n            transform: scale(0.9);\n            opacity: 1;\n        }\n\n        to {\n            transform: scale(1.5);\n            opacity: 0;\n        }\n    }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.gray_5}),(function(n){return n.isPlaying?"animation: scale 3s infinite var(--i);":""}),(function(n){return n.theme.colors.gray_3})),t(175),s.c.div(En||(En=Object(fn.a)(["\n    background-color: ",";\n    border-radius: 8px;\n    overflow: hidden;\n\n    .item {\n        display: flex;\n        width: 130px;\n        padding: 10px;\n        cursor: pointer;\n\n        &:hover {\n            background-color: ",";\n        }\n\n        .icon {\n            margin-right: 10px;\n        }\n\n        .text {\n            display: inline-block;\n            /* width: 100px; */\n        }\n    }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.main})),Object(s.c)(pe.a.div)(qn||(qn=Object(fn.a)(["\n    height: 80px;\n    justify-content: space-between;\n    padding: 0 10px;\n    position: sticky;\n    top: 0;\n    right: 0;\n    transition: height 300ms;\n    z-index: 1;\n    ","\n\n    /* "," */\n    \n    .menu {\n        .uploadBtn {\n            ","\n        }\n\n        .loginBtn {\n            margin-left: 10px;\n            display: ",";\n            position: relative;\n            margin-right: 20px;\n\n            ","\n\n            &:hover {\n                .menuAccount {\n                    padding-top: 5px;\n                    display: block;\n                }\n            }\n\n            .menuAccount {\n                position: absolute;\n                top: 100%;\n                right: 0;\n                display: none;\n            }\n\n            button {\n                ","\n            }\n        }\n    }\n\n    .uploadBtn {\n        border-bottom: 1px solid transparent;\n        font-size: 16px;\n\n        &:hover {\n            border-bottom: 1px solid #fff;\n        }\n\n        .text {\n            margin-left: 5px;\n            margin-bottom: 2px;\n        }\n    }\n\n    .searchBox {\n        background-color: ",";\n        padding: 10px 20px;\n        border-radius: 100px;\n        margin-left: 30px;\n        min-width: 300px;\n        position: relative;\n\n        ","\n\n        input {\n            border: none;\n            padding: 0 5px;\n            flex: 1;\n        }\n\n        .searchIcon {\n            position: relative;\n            top: 2px;\n        }\n\n        .spinner {\n            position: absolute;\n            top: calc(50% + 2px);\n            right: 15px;\n            transform: translateY(-50%);\n        }\n\n        .searchResult {\n            position: absolute;\n            top: calc(100% + 5px);\n            left: 0;\n            width: 100%;\n        }\n    }\n"])),(function(n){var e=n.isBlur,t=n.theme;return e?"\n        backdrop-filter: blur(10px);\n        border-bottom: 1px solid ".concat(t.colors.gray_1,";\n        box-shadow: 0 3px 7px rgba(0, 0, 0, .3);\n        height: 60px;\n    "):""}),hn(Dn||(Dn=Object(fn.a)(["\n        justify-content: center;\n    "]))),hn(Hn||(Hn=Object(fn.a)(["\n                display: none;\n            "]))),(function(n){return n.width<744&&n.isFocused?"none":"block"}),hn(Wn||(Wn=Object(fn.a)(["\n                margin-right: 0px;\n            "]))),hn(Un||(Un=Object(fn.a)(["\n                    padding: 5px;\n                "]))),(function(n){return n.theme.colors.gray_1}),hn(Vn||(Vn=Object(fn.a)(["\n            padding: 10px 20px;\n            margin-left: 0;\n            min-width: unset;\n            flex: 1;\n        "])))),t(401)),he=function(n){var e=n.label,t=void 0===e?"":e,o=n.value,i=void 0===o?"":o,r=n.type,a=void 0===r?"text":r,c=n.error,s=void 0===c?"":c,d=n.touched,u=void 0!==d&&d,l=n.name,p=void 0===l?"":l,f=n.onChange,b=void 0===f?function(){}:f,h=n.onBlur,g=void 0===h?function(){}:h;return Object(fe.jsx)(ge,{children:Object(fe.jsx)(be.a,{label:t,fullWidth:!0,value:i,type:a,error:!!s&&u,helperText:s&&u?s:"",name:p,variant:"outlined",onChange:b,onBlur:g,autoComplete:""})})},ge=s.c.div(Xn||(Xn=Object(fn.a)(["\n    .MuiFormLabel-root {\n        color: #fff;\n    }\n\n    .MuiInputBase-root {\n        color: #fff;\n    }\n\n    .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n\n    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n\n    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n\n    .MuiFormLabel-root.Mui-focused {\n        color: #fff;\n    }\n    \n    .MuiFormLabel-root.Mui-error {\n        color: #f44336;\n    }\n\n    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {\n        border-color: #f44336;\n    }\n\n    .MuiFormLabel-root.Mui-disabled {\n        color: #fff;\n    }\n\n    .MuiInputBase-root.Mui-disabled {\n        color: #fff;\n    }\n\n    .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {\n        border-color: #fff;\n    }\n"]))),me=function(n){var e=n.values,t=void 0===e?{}:e,o=n.errors,i=void 0===o?{}:o,r=n.touched,a=void 0===r?{}:r,c=n.onChange,s=void 0===c?function(){}:c,d=n.onBlur,u=void 0===d?function(){}:d,l=n.onSubmit,p=void 0===l?function(){}:l,f=n.isSubmitting,b=void 0!==f&&f;return Object(fe.jsxs)(xe,{onSubmit:p,children:[Object(fe.jsx)("div",{className:"heading",children:"Login"}),Object(fe.jsxs)("div",{className:"formMain",children:[Object(fe.jsx)(le,{children:Object(fe.jsx)(he,{label:"Email",value:t.email,error:i.email,touched:a.email,name:"email",onChange:s,onBlur:u})}),Object(fe.jsx)(le,{children:Object(fe.jsx)(he,{label:"Password",value:t.password,error:i.password,touched:a.password,name:"password",onChange:s,onBlur:u,type:"password"})})]}),Object(fe.jsx)("div",{className:"loginBtn",children:Object(fe.jsx)(ue,{type:"submit",variant:"contained",disabled:b,children:"Login"})})]})},xe=Object(s.c)(pe.a.form)(Gn||(Gn=Object(fn.a)(["\n    display: flex;\n    flex-direction: column;\n    min-height: 350px;\n    /* border: 1px solid ","; */\n    padding: 20px;\n    border-radius: 8px;\n    min-width: 300px;\n\n    .formMain {\n        flex: 1;\n    }\n\n    .heading {\n        text-align: center;\n        font-weight: 800;\n        font-size: 23px;\n        margin-bottom: 10px;\n    }\n\n    .loginBtn {\n        border-top: 1px solid #fff;\n    }\n"])),(function(n){return n.theme.colors.gray_3})),je=function(n){var e=n.values,t=void 0===e?{}:e,o=n.errors,i=void 0===o?{}:o,r=n.touched,a=void 0===r?{}:r,c=n.onChange,s=void 0===c?function(){}:c,d=n.onBlur,u=void 0===d?function(){}:d,l=n.onSubmit,p=void 0===l?function(){}:l,f=n.isSubmitting,b=void 0!==f&&f;return Object(fe.jsxs)(ve,{onSubmit:p,children:[Object(fe.jsx)("div",{className:"heading",children:"Register"}),Object(fe.jsxs)("div",{className:"formMain",children:[Object(fe.jsx)(le,{children:Object(fe.jsx)(he,{label:"Email",value:t.email,error:i.email,touched:a.email,name:"email",onChange:s,onBlur:u})}),Object(fe.jsx)(le,{children:Object(fe.jsx)(he,{label:"Password",value:t.password,error:i.password,touched:a.password,name:"password",onChange:s,onBlur:u,type:"password"})}),Object(fe.jsx)(le,{children:Object(fe.jsx)(he,{label:"Confirm password",value:t.confirmPassword,error:i.confirmPassword,touched:a.confirmPassword,name:"confirmPassword",onChange:s,onBlur:u,type:"password"})})]}),Object(fe.jsx)("div",{className:"loginBtn",children:Object(fe.jsx)(ue,{variant:"contained",disabled:b,type:"submit",children:"Register"})})]})},ve=Object(s.c)(pe.a.form)(Jn||(Jn=Object(fn.a)(["\n    display: flex;\n    flex-direction: column;\n    min-height: 350px;\n    /* border: 1px solid ","; */\n    padding: 20px;\n    border-radius: 8px;\n    min-width: 300px;\n\n    .formMain {\n        flex: 1;\n    }\n\n    .heading {\n        text-align: center;\n        font-weight: 800;\n        font-size: 23px;\n        margin-bottom: 10px;\n    }\n\n    .loginBtn {\n        border-top: 1px solid #fff;\n    }\n"])),(function(n){return n.theme.colors.gray_3})),Oe=t(57),ye=t.n(Oe),we=function(){return Object(fe.jsx)(ke,{className:"flexCenter",children:Object(fe.jsx)(ye.a,{color:"#36D7B7"})})},ke=s.c.div(Kn||(Kn=Object(fn.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .3);\n    z-index: 100000;\n"]))),Me=(s.c.div(Yn||(Yn=Object(fn.a)(["\n    background-color: ",";\n    width: 100%;\n    border-radius: 10px;\n    overflow: hidden;\n\n    .heading {\n        margin: 10px 0 5px 10px;\n    }\n\n    .searchResultItem {\n        padding: 10px 20px;\n        cursor: pointer;\n\n        &:hover {\n            background-color: ",";\n        }\n\n        &.showAll {\n            border-top: 1px solid ",";\n        }\n\n        .info {\n            flex: 1;\n\n            .singer {\n                font-size: 13px;\n            }\n        }\n    }\n\n    .thumb {\n        margin-right: 5px;\n\n        img {\n            width: 40px;\n            border-radius: 50%;\n        }\n    }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.black})),s.c.div(Qn||(Qn=Object(fn.a)(["\n    padding: 10px;\n\n    .thumb {\n        cursor: pointer;\n        position: relative;\n\n        .groupBtn {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            opacity: 0;\n            background-color: rgba(0, 0, 0, .5);\n            transition: 300ms;\n\n            &:hover {\n                opacity: 1;\n            }\n            \n            ion-icon {\n                font-size: 40px;\n\n                @media (max-width: 1111px) {\n                    font-size: 50px;\n                }\n            }\n        }\n\n        img {\n            width: 100%;\n        }\n    }\n\n    .wrapperMobile {\n        display: flex;\n        border-bottom: 1px solid ",";\n        padding-bottom: 10px;\n\n        .thumb {\n            width: 50px;\n            margin-right: 10px;\n\n            img {\n                width: 100%;\n            }\n        }\n\n        .info {\n            flex: 1;\n\n            .songName {\n                max-width: 185px;\n            }\n        }\n\n        .add {\n            .addBtn {\n                font-size: 20px;\n            }\n        }\n    }\n"])),(function(n){return n.theme.colors.gray_3})),Object(s.c)(pe.a.div)(Zn||(Zn=Object(fn.a)(["\n    font-size: 20px;\n\n    .icon {\n        margin-right: 10px;\n    }\n\n    .link {\n        justify-content: flex-start;\n        padding: 10px 0;\n    }\n"]))),"FORM_LOGIN"),Se=(t(53),t(76)),Ie=function(n){var e=n.onHiddenLogin,t=void 0===e?function(){}:e,o=Object(c.b)();return Object(fe.jsx)(Se.a,{initialValues:{email:"buiduclong0511@gmail.com",password:"123@abc"},onSubmit:function(){var n=Object(h.a)(b.a.mark((function n(e,i){var r,a,c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.setSubmitting,n.prev=1,n.next=4,o(M(e));case 4:a=n.sent,Object(j.unwrapResult)(a),a&&t(),n.next=15;break;case 9:n.prev=9,n.t0=n.catch(1),r(!1),c="",c=401===n.t0.response.status?"Sai t\xe0i kho\u1ea3n ho\u1eb7c m\u1eadt kh\u1ea9u!":"L\u1ed7i \u0111\u0103ng nh\u1eadp!",l.b.error(c);case 15:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}(),validationSchema:jn,children:function(n){var e=n.values,t=n.errors,o=n.touched,i=n.handleChange,r=n.handleBlur,a=n.handleSubmit,c=n.isSubmitting;return Object(fe.jsx)(me,{values:e,errors:t,touched:o,onChange:i,onBlur:r,onSubmit:a,isSubmitting:c})}})},Le=t(186),Pe=["confirmPassword"],Be=function(n){var e=n.onHiddenLogin,t=void 0===e?function(){}:e,o=Object(c.b)();return Object(fe.jsx)(Se.a,{initialValues:{email:"",password:"",confirmPassword:""},onSubmit:function(){var n=Object(h.a)(b.a.mark((function n(e,i){var r,a,c,s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.setSubmitting,n.prev=1,e.confirmPassword,a=Object(Le.a)(e,Pe),n.next=5,o(S(a));case 5:c=n.sent,Object(j.unwrapResult)(c),c&&t(),n.next=16;break;case 10:n.prev=10,n.t0=n.catch(1),r(!1),s="",s=409===n.t0.response.status?"Email \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u0103ng k\xfd!":"L\u1ed7i \u0111\u0103ng k\xfd!",l.b.error(s);case 16:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}(),validationSchema:vn,children:function(n){var e=n.values,t=n.errors,o=n.touched,i=n.handleChange,r=n.handleBlur,a=n.handleSubmit,c=n.isSubmitting;return Object(fe.jsx)(je,{values:e,errors:t,touched:o,onChange:i,onBlur:r,onSubmit:a,isSubmitting:c})}})},Ce=function(n){var e=n.onHiddenLogin,t=void 0===e?function(){}:e,i=Object(o.useState)(Me),r=Object(g.a)(i,2),a=r[0],s=r[1],d=Object(c.b)(),u=Object(c.c)(P).isLoading,l=function(){s(a===Me?"FORM_REGISTER":Me)};return Object(o.useEffect)((function(){d(R())}),[]),Object(fe.jsxs)(Fe,{className:"flexCenter",children:[Object(fe.jsx)("div",{className:"overlay",onClick:t}),Object(fe.jsxs)(pe.a.div,{className:"formWrapper",initial:{x:1e3},animate:{x:0},children:[Object(fe.jsx)("button",{className:"closeButton",onClick:t,children:"\xd7"}),a===Me?Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)(Ie,{onHiddenLogin:t}),Object(fe.jsxs)("p",{className:"switch",children:["B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? ",Object(fe.jsx)("span",{onClick:l,children:"\u0110\u0103ng k\xfd"})]})]}):Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)(Be,{onHiddenLogin:t}),Object(fe.jsxs)("p",{className:"switch",children:["B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n? ",Object(fe.jsx)("span",{onClick:l,children:"\u0110\u0103ng nh\u1eadp"})]})]})]}),u&&Object(fe.jsx)(we,{})]})},Fe=s.c.div($n||($n=Object(fn.a)(["\n    min-height: 100vh;\n    flex-direction: column;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 100;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, .3);\n\n    .overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n    }\n    \n    .formWrapper {\n        background-color: ",";\n        border-radius: 8px;\n        padding: 20px;\n        z-index: 2;\n        position: relative;\n\n        .closeButton {\n            position: absolute;\n            top: 0;\n            right: 0;\n            padding: 10px;\n            font-size: 30px;\n        }\n    }\n\n    .switch {\n        padding-top: 10px;\n        text-align: center;\n\n        span {\n            transition: 300ms;\n            cursor: pointer;\n\n            &:hover {\n                color: ",";\n            }\n        }\n    }\n"])),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.orange})),ze=(s.c.div(ne||(ne=Object(fn.a)(["\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    display: none;\n    background-color: ",";\n    \n    ","\n"])),(function(n){return n.theme.colors.main}),hn(ee||(ee=Object(fn.a)(["\n        display: flex;\n    "])))),Object(s.c)(p.c)(te||(te=Object(fn.a)(["\n    padding: 15px 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    ion-icon {\n        font-size: 20px;\n    }\n    \n    .text {\n        margin-top: 7px;\n    }\n"]))),t(399),s.c.div(oe||(oe=Object(fn.a)(["\n    display: flex;\n    padding: 10px 0; \n\n    .thumb {\n        width: 100px;\n        margin-right: 10px;\n\n        img {\n            width: 100%;\n        }\n    }\n\n    .listControls {\n        padding-top: 10px;\n\n        .icon {\n            margin: 0 5px;\n            cursor: pointer;\n            display: inline-block;\n\n            ion-icon {\n                font-size: 23px;\n            }\n        }\n\n        .addIcon {\n            position: relative;\n\n            .addMenu {\n                position: absolute;\n                top: 100%;\n                left: 50%;\n                transform: translateX(-50%);\n            }\n        }\n    }\n\n    .listControlsMobile {\n        display: none;\n\n        ","\n    }\n"])),hn(ie||(ie=Object(fn.a)(["\n            display: block;\n        "])))),s.c.div(re||(re=Object(fn.a)(["\n    background-color: ",";\n    width: 200px;\n    z-index: 3;\n    border-radius: 8px;\n    overflow: hidden;\n    box-shadow: 3px 5px 8px rgba(0, 0, 0, .3), 3px 5px 10px rgba(0, 0, 0, .3);\n\n    .item {\n        font-size: 13px;\n        padding: 10px 20px;\n        cursor: pointer;\n\n        ","\n\n        &:hover {\n            background-color: ",";\n        }\n    }\n"])),(function(n){return n.theme.colors.secondary}),hn(ae||(ae=Object(fn.a)(["\n            font-size: 15px;\n            padding: 10px;\n        "]))),(function(n){return n.theme.colors.main})),s.c.div(ce||(ce=Object(fn.a)(["\n    width: ",";\n    height: ",";\n    /* background-color: #fff; */\n    background-image: url(",");\n    background-size: cover;\n    background-position: center;\n    border-radius: 50%;\n    border: ",";\n    cursor: pointer;\n    position: relative;\n\n    .emptyAvatar {\n        position: absolute;\n        top: 0;\n        left: 0;\n\n        ion-icon {\n            font-size: ",";\n        }\n    }\n"])),(function(n){return n.width+"px"}),(function(n){return n.width+"px"}),(function(n){return n.avatarUrl?n.avatarUrl:""}),(function(n){return n.avatarUrl?"1px solid ".concat(n.theme.colors.gray_1):"unset"}),(function(n){return n.width+"px"})),s.c.div(se||(se=Object(fn.a)(["\n    width: 100%;\n    margin: ",";\n"])),(function(n){return n.margin+"px"})),"/"),Te="/account",Ae=function(){var n=Object(c.c)(z),e=(n.playlist,n.isPlaying),t=n.listPlayedSongs,i=Object(c.c)(P).userInfo,r=Object(c.c)(X).isShowFormLogin,a=Object(o.useRef)(null),s=Object(c.b)(),d=Object(o.useRef)(null);Object(o.useEffect)((function(){var n=window.location.pathname===Te;!i&&n&&window.location.assign(ze)}),[i]);return Object(fe.jsxs)("div",{className:"App",children:[Object(fe.jsx)(l.a,{position:"top-right",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0}),Object(fe.jsx)(u.a,{quietUpdate:!0,defaultPosition:{right:100,top:100},audioLists:[{name:"name",musicSrc:"http://res.cloudinary.com/dyhgnyjpb/raw/upload/v1629177095/AudioUploads/Co-Don-Danh-Cho-Ai-Lofi-Version-Lee-Ken-Nal.mp3",singer:"singer",cover:"cover"}],showDownload:!1,glassBg:!0,mode:"full",autoPlay:e,getAudioInstance:function(n){a.current=n},clearPriorAudioLists:!0,showThemeSwitch:!1,theme:"dark",onAudioListsChange:function(n,e,t){s(_(e))},onAudioPlay:function(n){d.current||(a.current.volume=.99,d.current=a.current.volume);var e=On(n);s(W(e)),s(q(e)),s(A())},onAudioProgress:function(n){100/n.duration*n.currentTime>=50&&(t.some((function(e){return e===n.key}))||pn(n.key).then(console.log).catch(console.log).finally((function(){s(E(n.key))})))},onAudioPause:function(){s(N())}}),r&&Object(fe.jsx)(Ce,{onHiddenLogin:function(){s(J())}})]})},Ne=(t(368),t(369),function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,402)).then((function(e){var t=e.getCLS,o=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),o(n),i(n),r(n),a(n)}))});a.a.render(Object(fe.jsx)(i.a.StrictMode,{children:Object(fe.jsx)(s.a,{theme:bn,children:Object(fe.jsx)(d.a,{loading:null,persistor:nn,children:Object(fe.jsx)(c.a,{store:en,children:Object(fe.jsx)(Ae,{})})})})}),document.getElementById("root")),Ne()}},[[370,1,2]]]);
//# sourceMappingURL=main.f6090f8f.chunk.js.map