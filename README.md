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

新建的添加和编辑也加上了


api参考：https://www.helloweba.net/javascript/445.html


