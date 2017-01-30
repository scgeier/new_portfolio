  
var app = angular.module('projects', []);

app.controller('ProjectsController', ['$http', function($http) {

    this.projects = [];
    var _this = this;

    $http.get('js/projects.json')
        .success(function(data) {
            console.log(data);
            console.log(this);
            _this.projects = data;
            console.log("JSON loaded");
        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });
        

    
}]);