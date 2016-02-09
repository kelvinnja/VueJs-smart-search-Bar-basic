new Vue({
    el:'#search',
    data:{
       displaying:'none',
        name:'',
        users:[
            {name:'arif'},
            {name:'harif'},
            {name:'sharf'},
            {name:'faiha'},
            {name:'baen'},
            {name:'came'},
            {name:'deki'},
            {name:'eroba'},
            {name:'gob'},
        ]//user array end
    },//data end

    methods:{
        searching:function(){
            if(this.name)
            {
            	
		/* for AJAX REQUST
		+this.name, think as id or search argument for apiController
               if you are using laravel then add this line in your route,
               Route::get('api/search/users/{name}', 'apiController');
		for laravel or ajax request, just uncomment only two line below
		
                this.$http.get('/api/search/users/'+this.name, function(id){
                    this.$set('users', id);
                    
                });*/ //AJAX REQUEST END
                this.displaying = 'block';
            }
            if(this.name=='')
                this.displaying='none';
        }//search method end
    }//method end
});
