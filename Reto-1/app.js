new Vue({
    el: '#app',


    data() {
        return {
            cursos:false,
            totalTime:0,
            name:'',
            hours:0,
            arrayCursos:[], 
        }
    },

    computed: {
        totalTime(){
            var total=0
            total+=parseInt(this.hours)
            return total
        }
    },

    methods: {
        GuardarCurso(){
            var cursos = {nombre:this.name, horas:this.hours}
            this.arrayCursos.push(cursos)
            var totalTime = parseInt(this.totalTime)
            totalTime += parseInt(this.hours)
            this.totalTime=totalTime
            this.cursos=true
            this.name=""
            this.hours=0
            
        }
    }
})