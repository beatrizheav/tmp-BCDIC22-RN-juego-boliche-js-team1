/* eslint-disable no-undef */
// import 'jasmine';
describe('Test de Tiros', () => {
  it('Debe generar 22 tiros', () => {
    expect(tiros()).toEqual(22);
  });
  it('Debe generar solo valores numericos', () => {
    expect(tiposValoresTiros()).toMatch(/\d{1,}/);
  });
});

describe('Test de Sumatoria', () => {
  it('El contador de puntaje debe terminar con un valor distinto a 0', () => {
    expect(puntajeCero()).not.toEqual(0);
  });
  it('Debe generar solo valores numericos', () => {
    expect(tiposValoresSumatoria()).toMatch(/\d{1,}/);
  });
});
