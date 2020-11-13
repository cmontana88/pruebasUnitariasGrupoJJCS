import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of  } from 'rxjs';
import { ImageService } from '../image.service';

import { ImageDetailComponent } from './image-details.component';

xdescribe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ImageDetailsComponent', () => {
  // tslint:disable-next-line: prefer-const
  let component: ImageDetailComponent;
  // tslint:disable-next-line: prefer-const
  let fixture: ComponentFixture<ImageDetailComponent>;

  // tslint:disable-next-line: prefer-const
  let location: Location;
  // tslint:disable-next-line: prefer-const
  let router: Router;

  const routes = [
    { path: 'image/:id', component: ImageDetailComponent }
  ];

  // tslint:disable-next-line: prefer-const
  let mockAR: any = {
    snapshot: { params: { id: 1 } }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ImageDetailComponent],
      providers: [
        ImageService,
        {
          provide: ActivatedRoute, useValue: mockAR,
        }
      ]
    });
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
  });

  it('debe retornar la imagen 1 que es perro en image cuando en la url venga el id 1.', () => {
    component.ngOnInit();

    expect(component.image.id).toBe(1);
    expect(component.image.brand).toBe('perro');
    expect(component.image.url).toBe('assets/images/perro1.jpg');
  });

  it('debe retornar la url en el style del div en la propiedad background-image.', () => {
    component.ngOnInit();

    fixture.whenStable();
    fixture.detectChanges();

    // tslint:disable-next-line: prefer-const
    let el = fixture.nativeElement.querySelector('div.img-container');
    expect(el.style.backgroundImage.replace(/(url\(|\)|")/g, '')).toBe(component.image.url);
  });
});
