import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FilterimagesPipe } from '../filterimages.pipe';
import { ImageService } from '../image.service';

import { GalleryComponent } from './image-gallery.component';

xdescribe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ImageGalleryComponent', () => {
  // tslint:disable-next-line: prefer-const
  let imageService: ImageService;
  // tslint:disable-next-line: prefer-const
  let galleryComponent: GalleryComponent;
  // tslint:disable-next-line: prefer-const

  let imageService2: ImageService;
  let fixture: ComponentFixture<GalleryComponent>;
  let component: GalleryComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, FilterimagesPipe],
      providers: [
        {
          provide: ImageService
        }
      ]
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    // tslint:disable-next-line: deprecation
    imageService2 = TestBed.get(ImageService);

    component.allImages = imageService2.getImages();

    fixture.whenStable();
    fixture.detectChanges();

    imageService = new ImageService();
    galleryComponent = new GalleryComponent(imageService);
  });

  it('debe crearse el componente de gallery', () => {
    expect(galleryComponent).toBeTruthy();
  });

  describe('#allImages', () => {
    it('debe asignar 5 imagenes #allImages cuando se llame el metodo del imageService', () => {
      expect(galleryComponent.allImages.length).toBe(5);
    });
  });

  it(`En la pagina se muestran 5 elementos li a`, () => {
    // tslint:disable-next-line: prefer-const
    let el = fixture.nativeElement.querySelectorAll('li a');
    expect(el.length).toEqual(5);
  });

  it(`En la pagina se muestran 3 elementos li a cuando se da click en perro`, () => {
    // tslint:disable-next-line: prefer-const
    component.filterBy = 'perro';

    fixture.whenStable();
    fixture.detectChanges();

    let el = fixture.nativeElement.querySelectorAll('li a');
    expect(el.length).toEqual(3);
  });

  it(`En la pagina se muestran 2 elementos li a cuando se da click en gato`, () => {
    // tslint:disable-next-line: prefer-const
    component.filterBy = 'gato';

    fixture.whenStable();
    fixture.detectChanges();

    let el = fixture.nativeElement.querySelectorAll('li a');
    expect(el.length).toEqual(2);
  });
});
