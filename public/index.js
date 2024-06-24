"use strict";

var saudacao = function saudacao(nome) {
  return "Ol\xE1 Fulano ".concat(nome);
};
var usuario = 'andré feliz';
console.log(saudacao(usuario));