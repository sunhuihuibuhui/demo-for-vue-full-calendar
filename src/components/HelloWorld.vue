<template>
  <div class="hello">
    <el-date-picker size='small' v-model="selectDate" type="month"
      placeholder="选择月" value-format="yyyy-MM">
    </el-date-picker>
    <el-button size='small' @click='changeDate'>确定</el-button>
    <full-calendar  
      :config="config" 
      :events="events"
      ref="calendar" 
      @event-selected='eventClick' 
      @day-click="dayClick">
    </full-calendar> 
  </div>
</template>
<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css'
export default {
   data () {
    return {
      selectDate:'',//日期选择器选中的月份
      config: {
        firstDay:'0',//以周日为每周的第一天
        // weekends: true,//是否在日历中显示周末
        locale: 'zh-cn',//语言
        defaultView: 'month',//默认按月显示
        height: 'auto',//高度
        fixedWeekCount:false,//是否固定显示六周
        // weekMode:"liquid",//周数不定，每周的高度可变，整个日历高度不变
        allDaySlot:false,
        // allDay:true,
        header: {//表头信息
          left: 'prev, next, today',
          center: 'title',
          right: 'hide, custom'
        },
      },
      events: [{
        id:1,
        title:'出差',
        start:'2019-01-03',
        end:'2019-01-05'
      }, {
        id:2,
        title:'春游',
        start:'2019-01-12',
      }],
    }
  },
  components : { FullCalendar },
  methods:{
    changeDate(){
      this.$refs.calendar.fireMethod('gotoDate', this.selectDate)
    },
    eventClick(event){ //events的点击事件
		
    },
    dayClick(date, jsEvent, view){ //日期的点击事件

    },
   
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
