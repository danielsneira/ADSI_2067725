var app = new Vue({
    el: "#app",
    data: {
        num1: 0,
        num2: 0,
        rta: 0
      
    },
    methods: {
        add: function(){
            this.rta = this.num1 + this.num2;
            return this.rta;
        },
        substract: function(num1, num2){
            this.rta = this.num1 - this.num2;
            return this.rta;
        },
        multiply: function(num1, num2){
            this.rta = this.num1 * this.num2;
            return this.rta;
        }
      
    }
  })