<template>
  <div>
    <div class="bg-image position-relative d-flex align-items-center justify-content-center text-white">
      <div class="curved-top bg-gray"></div>
      <div class="curved-bottom bg-gray"></div>
      <div class="row container">
        <SectionTitle :title="section[3].title" />
        <div class="col-12 pt-4" :class="index == current ? 'd-block' : 'd-none'" v-for="(items, index) in owners"
          @click="slider">
          <div class="card text-center border-0 bg-transparent">
            <div class="circle">
              <img :src="items.image" alt="">
            </div>
            <div class="card-body text-white max-w">
              <p class="card-title">{{ items.title }}</p>
              <p class="card-text">{{ items.text }}</p>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <span v-for="(items, index) in owners" :class="index == current ? 'bg-primary' : ''" @click="slider">A</span>
        </div>
      </div>
    </div>
  </div>
</template>
 


<script>
import SectionTitle from './SectionTitle.vue'
import {sectionTitleArray} from '../assets/data/store.js';
import {ownersElement} from '../assets/data/store.js'
export default{
 name: 'OwnersComponent',
 components:{
  SectionTitle,
 },
 
 data(){
     return{
      owners: [...ownersElement],
      section: [...sectionTitleArray],
      current: 0
         
       
     }
 },
 methods:{
  slider(){
    this.current++;
    if(this.current > this.owners.length - 1){
      this.current = 0
    }
  }
     
 },
 
 computed:{
     
 }
 
  
}
</script>




<style lang="scss" scoped>
@use '../../src/assets/styles/general.scss' as *;
.bg-image{
  background-image: url('../../public/img/home-parallax-144609983.jpg');
  min-height: 600px;
  background-size: cover;
   
  .row{
    padding-top: 70px;
    padding-bottom: 90px;
    .max-w{
      max-width: 500px;
      margin: 0 auto;
    }
    .col-12{
      min-height: 300px;
    }
  }
  .circle{
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  margin: 0 auto;
  
  img{
    width: 120px;
  }
}

  .curved-top{
    @include curved();
    top: 0;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
  }
  .curved-bottom{
    @include curved();
    bottom: 0;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
  }
}
 
</style>