
import Index from "./components/Index"
import Release from "./components/Release"
import My from "./components/My"
// (首页)二级路由
import Nearby from "./components/index/Nearby"
import Attention from "./components/index/Attention"
import Find from "./components/index/Find"
import FlowDetails from "./components/index/FlowDetails"
//内页
import AttentionDetails from "./components/index/AttentionDetails"
//搜索页面
import SearchDetails from "./components/search/SearchDetails"
//消息
import Notification from "./components/message/Notification"
import Notice from "./components/message/Notice"
import System from "./components/message/System"
//my
import Edit from "./components/my/Edit"



export const routes = [
    {path:'/',name:"indexLink",component:Index,redirect:'/find',
       children:[
         {path:'/nearby',name:"nearbyLink",component:Nearby},
         {path:'/attention',name:"attentionLink",component:Attention,},
         {path:'/find',name:"findLink",component:Find},
       ]
    },
    {path:'/release',name:"releaseLink",component:Release},
    {path:'/my',name:"myLink",component:My},
    {path:'/attentionDetails',component:AttentionDetails},
    {path:'/flowDetails',component:FlowDetails},
    {path:'/flowDetails',component:FlowDetails},
    //子页面
    {path:'/search/details',component:SearchDetails},
    {path:'/notification',component:Notification},
    {path:'/notice',component:Notice},
    {path:'/system',component:System},
    {path:'/edit',component:Edit},
    {path: "*", redirect: "/"},
]
