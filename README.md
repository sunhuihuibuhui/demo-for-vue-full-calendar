# vue-full-calendar
适用于pc端的vue日历样式记事本

安装 :

npm i vue-full-calendar


引入：

import FullCalendar from 'vue-full-calendar' //全局

Vue.use(FullCalendar)


import { FullCalendar } from 'vue-full-calendar' //单页

import 'fullcalendar/dist/fullcalendar.css'


使用：

<full-calendar  
    :config="config" 
    :events="events"
    ref="calendar" 
    @event-selected='eventClick' 
    @day-click="dayClick">
</full-calendar> 


4.15更新

因为有人问到新建，就把添加和编辑也加上了，这周要加班，月底要搬家，不知道最近还有没有时间完善，所以先把这个及其简陋的放上来。不对之处，还望不吝赐教，帮助我这个小菜鸟进步，感谢感谢


api参考：https://www.helloweba.net/javascript/445.html


