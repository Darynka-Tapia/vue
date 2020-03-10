Vue.component('CoinDetail', {
    props: ['coin'],

  data(){
    return{
      showPrices:false, 
      value:0,
    }
  },
  methods:{
    toggleShowPrices(){
      this.showPrices =!this.showPrices

      this.$emit('change-color', 
        this.showPrices ? '0000FF' : 'f4f4f4'
      )
    }
  }, 
  
  created() {
    console.log('Created de coin-Detail...')
  },

  mounted() {
    console.log('Mounted de coin-Detail...')
  },

  computed: {
    title() {
      return this.coin.name + ' ' + this.coin.symbol
    },
    convertedValue() {
      if (!this.value) {
        return 0
      }
      return this.value / this.coin.price

    }
  },
  
  template:`
  <div>
    <img v-on:mouseover="toggleShowPrices"
      v-on:mouseOut="toggleShowPrices" 
      v-bind:src="coin.img" v-bind:alt="coin.name">

    <h1 v-bind:class="coin.changePercent > 0 ? 'green': 'red'">{{title}}
      <span v-if="coin.changePercent > 0">👌</span>
      <span v-else-if="coin.changePercent == 0">✨</span>
      <span v-else>🤦‍♀️</span>
    </h1>
      <input type="number" v-model="value">
      <span>{{convertedValue}}</span>

      <span v-on:click="toggleShowPrices">
        {{showPrices ? '🙈' : '🙉'}}
      </span>

      <slot name="texto"></slot>

      <ul v-show=showPrices>
        <li class="uppercase" v-for="(p, i) in coin.pricesWithDays" v-bind:key="p.day"
        v-bind:class="{orange:p.value==coin.price, red:p.value<coin.price, green:p.value>coin.price}"
        >
          {{i}} El día {{p.day}} costo: {{p.value}}
        </li>
      </ul>
      <slot name="link"></slot>

  </div>
  `
})

new Vue({

  //el, data, compute, method son objetos/propiedades
  el:'#app', 
  data(){
    return{
      btc:{
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
        price: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9400 },
          { day: 'Viernes', value: 9000 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 }
        ],
      },
      color: 'f4f4f4',

    }
  },

  created(){
    console.log('Created...')
  },

  mounted(){
    console.log('Mounted...')
  },
 

  methods: {
    updateColor(color){  
      this.color = color || this.color    
      .split('').reverse().join('')

    }
  },
})