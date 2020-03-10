Vue.component('CoinDetail', {
    props: ['changePercent'],

  data(){
    return{
      showPrices:false
    }
  },
  methods:{
    toggleShowPrices(){
          this.showPrices =!this.showPrices
    }
  }, 
  template:`
  <h1 v-bind:class="changePercent > 0 ? 'green': 'red'">{{title}}
      <span v-if="changePercent > 0">👌</span>
      <span v-else-if="changePercent == 0">✨</span>
      <span v-else>🤦‍♀️</span>
   
      <input type="number" v-model="value">
      <span>{{convertedValue}}</span>

      <span v-on:click="toggleShowPrices">
        {{showPrices ? '🙈' : '🙉'}}
      </span>
    </h1>
  `
})

new Vue({

  //el, data, compute, method son objetos/propiedades
  el:'#app', 
  data(){
    return{
      name :'Bitcoin', 
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      value:0, 
      price: 8400,
      color: 'f4f4f4', 
      pricesWithDays:[
        {day:'Lunes', value: 8400},
        {day:'Martes', value: 7900},
        {day:'Miercoles', value: 8200},
        {day:'Jueves', value: 9400},
        {day:'Viernes', value: 9000},
        {day:'Sabado', value: 10000},
        {day:'Domingo', value: 10200}
      ], 
      showPrices: false
    }
  },
  computed: {
    title(){
      return  this.name + ' ' + this.symbol
    },
    convertedValue(){
      if(!this.value){
        return 0
      }
        return this.value / this.price
      
    }
  },

  watch: {
    showPrices(newVal, oldVal){
      console.log(newVal, oldVal)
    }
  }, 

  methods: {
    toggleShowPrices(){
      this.showPrices=!this.showPrices
      
      this.color = this.color.split('').reverse().join('')

    }
  },
})