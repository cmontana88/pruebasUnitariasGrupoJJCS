import { FilterimagesPipe } from './filterimages.pipe';

const Imagesdelatils = [    
  { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
  { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },  
  { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
  { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
  { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" }
]
describe('FilterimagesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });
  it('debe retornar una lista de 3 perros si envío el filtro perro', () => {
    const pipe = new FilterimagesPipe();
    let listaPerro = pipe.transform(Imagesdelatils, "perro");    
    expect(listaPerro.length).toBe(3);
  });
  it('debe retornar una lista de 2 gatos si envío el filtro gato', () => {
    const pipe = new FilterimagesPipe();
    let listaGato = pipe.transform(Imagesdelatils, "gato");    
    expect(listaGato.length).toBe(2);
  });
});
