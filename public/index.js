"use strict";

var saudacao = function saudacao(nome) {
  return "Ol\xE1 Fulano".concat(nome);
};
var usuario = 'Mundo';
console.log(saudacao(usuario));