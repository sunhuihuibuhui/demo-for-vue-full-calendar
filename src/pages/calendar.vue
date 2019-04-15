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
    <add-schedule v-if="isAdd" :isAdd='isAdd' :editItem='editItem' @add='addItem' @close='isAdd = false'></add-schedule>
  </div>
</template>
<script>
import { FullCalendar } from 'vue-full-calendar'
import addSchedule from '@/components/calendar/add.vue'
import 'fullcalendar/dist/fullcalendar.css'
export default {
   data () {
    return {
      isAdd:false,
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
        start:'2019-04-03',
        end:'2019-04-05'
      }, {
        id:2,
        title:'春游',
        start:'2019-04-12',
      }],
      newItem:{},
      editItem:{}
    }
  },
  components : { FullCalendar, addSchedule },
  methods:{
    changeDate(){
      this.$refs.calendar.fireMethod('gotoDate', this.selectDate)
    },
    eventClick(event){ //events的点击事件
      this.editItem = event
      this.isAdd = true
    },
    dayClick(date, jsEvent, view){ //日期的点击事件
      this.editItem = {}
      this.isAdd = true
    },
    addItem(detail){
      this.newItem = JSON.parse(detail)
      if(this.editItem.id){//如果是编辑，就删掉该条
        this.events.forEach( (el,ind)=>{
          if(el.id == this.editItem.id){
            this.events.splice(ind,1)
          }
        })
      }
      this.events.push({
        id : this.editItem.id?this.editItem.id:this.setUuid(),
        title : this.newItem.title,
        start : this.newItem.period[0],
        end : this.newItem.period[1],
      })
    },
    setUuid(){
        var s = [];
        var hexDigits = "0123456789abcdef";
        for(var i = 0; i < 36; i++){ s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1); }
        s[14] = "4";  
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); 
        s[8] = s[13] = s[18] = s[23];
        var uuid = s.join("");
        return uuid;
    },
   
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
