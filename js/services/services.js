'use strict';

app.factory('MyHTTP', function(INIT, $http,$q) {
    return {
        get : function(url) {
            return $http.get(url)
                .then(function(response){
                    return response;
                }, function(response) {
                    return $q.reject(response);
                });
        },

      
    
    };
}); //End MyHTTP
    
   