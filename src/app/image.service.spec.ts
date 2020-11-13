import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('#getImages', () => {
    it('debe asignar 5 imagenes #allImages cuando se llame el metodo', () => {
      service.getImages();
      expect(service.allImages.length).toBe(5);
    });
  });

  describe('#getImage', () => {
    it('debe retornar la imagen 1 que es perro en #allImages cuando se llame el metodo con uno.', () => {
      // tslint:disable-next-line: prefer-const
      let resp = service.getImage(1);
      expect(resp.id).toBe(1);
      expect(resp.brand).toBe('perro');
      expect(resp.url).toBe('assets/images/perro1.jpg');
    });

    it('debe retornar indefinido cuando se llame el metodo 20 (No existe la imagen con ese id).', () => {
      // tslint:disable-next-line: prefer-const
      let resp = service.getImage(20);
      expect(resp).toBeUndefined();
    });
  });

});
