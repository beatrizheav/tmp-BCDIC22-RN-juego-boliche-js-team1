/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
const totalesFrames = [];
const tiro1 = [];
const tiro2 = [];

function tiros() {
  for (let i = 0; i < 11; i++) {
    tiro1[i] = Math.round(Math.random() * 10);
    const numero = 10 - tiro1[i];
    tiro2[i] = Math.round(Math.random() * numero);
    totalesFrames[i] = tiro1[i] + tiro2[i];
  }

  return tiro1.length + tiro2.length;
}

function tiposValoresSumatoria() {
  tiros();
  const rand = Math.round(Math.random() * 10);
  return totalesFrames[rand];
}

function tiposValoresTiros() {
  tiros();
  const rand = Math.round(Math.random() * 10);
  return totalesFrames[rand];
}

function puntajeCero() {
  return totalesFrames[9];
}
