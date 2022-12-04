<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
const timelineData=ref([
    {year:'2022',works:[
        {
            title:"Freelancing project- New concepts",
            desc:"I got involved in this project through upwork and I worked as FrontEnd developer for this project. We trying out several techniques and libraries and analyze them.",
            projectlink:"",
            url:"https://www.racingkong.com/",
            isPublic:false,
            isLive:false,
            tags:['VueJS 3','Pinia','Element-plus','ssg', 'ssg-magic','auto-import','md','file-routing']
        },
        {
            title:"Broker Exchange Site Conversion",
            desc:"I was responsible for conversion of broker exchange site of our company from traditional php based site to new vue-laravel app.I was responsible for FrontEnd Development. ",
            projectlink:"",
            url:"https://brokerexchanges.com/",
            isPublic:false,
            isLive:true,
            tags:['VueJS 2','Vuex','BootStrapVue', 'insurance', 'Ben Advance']
        },
        {
            title:"Elite Enrollment Site",
            desc:"I was responsible for FrontEnd development for this project.",
            projectlink:"",
            url:"",
            isPublic:false,
            isLive:false,
            tags:['VueJS 2','Vuex','BootStrapVue', 'insurance','Elite']
        },
        {
            title:"Horse-Race Betting Website",
            desc:"I got involved in this project through upwork and I worked as FrontEnd developer for this project.",
            projectlink:"",
            url:"https://www.racingkong.com/",
            isPublic:false,
            isLive:true,
            tags:['VueJS','Pinia','Naive-UI', 'swiperJS']
        },

    ]},
    {year:'2021',works:[
        {
            title:"Broker Management System",
            desc:"This is project our company has been working, where I was responsible for looking at various web portals under this system.",
            projectlink:"",
            url:"",
            isPublic:false,
            isLive:false,
            tags:['VueJS','Vuex','BootStrap-Vue', 'rep-dashboard', 'commission-billing','group-dashboard']
        },
        {
            title:"Client Support System",
            desc:"It is an online support system where company can provide support to its user through online tickets system. I was responsible for frontEnd support for this project.",
            projectlink:"",
            url:"",
            isPublic:false,
            isLive:false,
            tags:['VueJS','Vuex','BootStrap-Vue', 'client-support-system', 'jQuery']
        },
        {
            title:"Plant Disease Detection",
            desc:"This is a project that I did for university marking. It predicts disease of plant based on image of plant leaf. We used CNN algorithm for this project.",
            projectlink:"https://github.com/BuffMomo-1105/Final-Year-Project",
            url:"",
            isPublic:true,
            isLive:false,
            tags:['CNN','machine-learning','kaggle', 'html','image-processing']
        },

    ]},
])
const goTo=(url:string, isTrue:Boolean,action:string)=>{
    if(isTrue){
        window.open(url,'_blank');
    }else{
        let msg=action=='github'?'Sorry, This repo is private.':'Sorry, This website is not live yet.'
        ElMessage.error(msg)
    }
}
</script>
<template>
    <div class="w-auto m-auto">
<el-timeline>
    <el-timeline-item v-for="item in timelineData" :timestamp="item.year" placement="top">
      <el-card v-for="work in item.works"  class="work-card mt-1" shadow="never">
        <h4>{{work.title}}</h4>
        <p>{{work.desc}}</p>
        <ul class="flex flex-wrap list-none justify-center my-1">
            <li class="proj-git mx-1" @click="goTo(work.projectlink,work.isPublic,'github')">github</li>
            <li class="proj-web mx-1" @click="goTo(work.url,work.isLive,'visit')">visit</li>
        </ul>
        <div v-if="work && work.tags && work.tags.length>0 ">
            <el-tag
            v-for="item in work.tags" 
            :key="item"
            type="success"
            class="mx-1 my-1"
            effect="dark"
            round
            >
            {{ item}}
        </el-tag>
    </div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>
</template>
<style>
.proj-web, .proj-git{
    text-decoration: underline;
    cursor:pointer;
    color:green;
}
.proj-web{
    color:blue;
}
.work-card{
    max-width: 600px;
}
</style>