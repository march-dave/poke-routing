'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($q, $http) {
  console.log('homeCtrl');
});

app.controller('listCtrl', function($scope, $state, pokedex) {
  console.log('listCtrl');
  console.log('pokedex:', pokedex);

  $scope.pokedex = pokedex;
});



app.controller('detailCtrl', function($scope, $interval, pokemon) {
  console.log('detailCtrl');
  console.log('pokemon:', pokemon);
  $scope.pokemon = pokemon;

  console.log('sprites:', $scope.pokemon.sprites);
  
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








