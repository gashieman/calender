let topdiv = new Vue({
    el: '#vue-app-top',
    data: {
        movie: 'The Avengers End Game'
    },
    methods: {      
     
    },
    computed:{        
        greet: function(){
            return 'Greetings from captain America';
        }
      
    }
});

let bottomdiv = new Vue({
    el: '#vue-app-bottom',
    data: {
        movie: 'The Terminator',
        actor: 'Arnold Schwarzenegger'
    },
    methods: {             
      changeHeader:function(){
          this.actor = "Batman vs Superman";
          topdiv.movie = "Batman vs Superman";
      }
     
    },
    computed:{        
        greet: function(){
            return 'Greetings from The Judgement Day';
        }
      
    }
});

