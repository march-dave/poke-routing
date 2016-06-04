'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($q, $http) {

});

app.controller('listCtrl', function($scope, $state, pokedex) {
  $scope.pokedex = pokedex;
});

app.controller('detailCtrl', function($scope, $interval, pokemon) {
  $scope.pokemon = pokemon;
  var sprites = pokemon.sprites;
  var keys = Object.keys(sprites);
  var numSprites = keys.length;

  var count = 0;
  $interval(function() {
    count++;

    var index = count % numSprites;
    var spriteUrl = sprites[keys[index]];
    $scope.sprite = spriteUrl;

  }, 1000);

})
