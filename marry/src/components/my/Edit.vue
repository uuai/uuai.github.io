<template>
  <div>
    <wv-group title="带验证">
      <wv-input label="姓名" placeholder="请输入你的名字" v-model="userName" required></wv-input>
      <wv-cell title="性别" is-link :value="sex | pickerValueFilter" @click.native="sexPickerShow = true"/>
      <wv-cell title="生日" :value="demoDate | datetimeFilter('date')" is-link @click="openData('datePicker')"/>
      <wv-cell title="地区" is-link :value="curArea | areaValueFilter" @click.native="openArea"/>
    </wv-group>
    <!--年月日-->
    <wv-datetime-picker type="date"  ref="datePicker" v-model="demoDate" @confirm="onDatafirm"/>
    <!--选择性别-->
    <wv-picker :visible.sync="sexPickerShow" v-model="sex" :columns="sexColumns" @confirm="confirmPerson"/>
    <!--省市区-->
    <wv-picker :visible.sync="areaShow" v-model="curArea" :columns="areaArr"  @confirm="confirmArea"/>
  </div>

</template>

<script>
  import area from "../../assets/area"

  export default {
    name: "edit",
    data() {
      return {
        userName: '',
        //性别
        sexPickerShow: false,
        sex: ['男'],
        sexColumns: [
          {
            values: ['男','女','保密' ],
            defaultIndex: 0
          }
        ],
        //生日
        demoDate: new Date(),
        //区域
        areaShow: false,
        curArea:['北京'],
        areaArr: [
          {
            values:['全部'],
            defaultIndex: 0
           },
          {
            values:['全部'],
            defaultIndex: 0
          },
          {
            values:['全部'],
            defaultIndex: 0
          }],
      }
    },
    mounted:function(){
      //area.city_list*area.county_list*area.province_list
      for(var p in area.province_list ){
        this.areaArr[0].values.push(area.province_list[p])
        //console.log("i："+p+";"+"对应值："+area.province_list[p]);
      }

     for(var  c in area.city_list ){
       this.areaArr[1].values.push(area.city_list[c])
      // console.log("i："+c+";"+"对应值："+area.city_list[c]);
     }
      for(var  k in area.county_list ){
        this.areaArr[2].values.push(area.county_list[k])
        //console.log("i："+k+";"+"对应值："+area.county_list[k]);
      }
    },
    methods: {
      //性别
      confirmPerson: function (picker) {
        this.sex = picker.getValues();
      },
      //生日
      openData(ref) {
        this.$refs[ref].open()
      },
      onDatafirm(value) {
        let message = ''
        if (value !== null && typeof value === 'object') {
          let year = value.getFullYear()
          let month = value.getMonth() + 1
          let date = value.getDate()
          let hour = value.getHours()
          let minute = value.getMinutes()
          message = `${year}-${month}-${date} ${hour}:${minute}`
        } else {
          message = value
        }
      },
      //区域
      openArea() {
        this.areaShow = true
      },
      confirmArea() {
        console.log()
      }
    },
    filters: {
      //生日
      pickerValueFilter(val) {
        if (Array.isArray(val)) {
          return val.toString()
        } else {
          return '请选择'
        }
      },
      areaValueFilter(val) {
        if (Array.isArray(val)) {
          return val.toString()
        } else {
          return '请选择'
        }
      },
      //时间
      datetimeFilter(value, type) {
        if (value !== null && typeof value === 'object') {
          let year = value.getFullYear()
          let month = value.getMonth() + 1
          let date = value.getDate()
          let hour = value.getHours()
          let minute = value.getMinutes()
          return type === 'date' ? `${year}-${month}-${date}` : `${year}-${month}-${date} ${hour}:${minute}`
        } else {
          return value
        }
      }
    }
  }
</script>

<style scoped>

</style>
