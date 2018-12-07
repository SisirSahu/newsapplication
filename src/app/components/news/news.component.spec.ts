import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkStubDirective } from '../../../../testing/router-stubs';
import { ActivatedRoute, ActivatedRouteStub } from '../../../../testing';

import { NewsComponent } from './news.component';
import { MockActivatedRoute } from '../../model/mockActivatedRoute';

import { NewsActions } from '../../store/actions/news.actions';
import { NewsService } from './../../services/news.service';

import { NO_ERRORS_SCHEMA } from '@angular/core';

const list = [
  {
    'section': 'World',
    'subsection': 'Europe',
    'title': 'Trump Advisers Urge Tougher Russia Policy After Expulsions',
    'abstract': 'xx',
    'url': 'https://www.nytimes.com/2018/03/30/world/europe/russia-expels-diplomacy.html',
    'byline': 'By PETER BAKER, ANDREW HIGGINS and STEVEN ERLANGER',
    'item_type': 'Article',
    'updated_date': '2018-03-31T02:22:05-04:00',
    'created_date': '2018-03-30T14:17:19-04:00',
    'published_date': '2018-03-30T14:17:19-04:00',
    'material_type_facet': '',
    'kicker': '',
    'des_facet': [
      'Diplomatic Service, Embassies and Consulates',
      'Espionage and Intelligence Services'
    ],
    'org_facet': [
      'State Department',
      'Boeing Company'
    ],
    'per_facet': [
      'Putin, Vladimir V',
      'Skripal, Sergei V'
    ],
    'geo_facet': [
      'Moscow (Russia)',
      'St Petersburg (Russia)',
      'Seattle (Wash)'
    ],
    'multimedia': [
      {
        'url': 'https://static01.nyt.com/images/2018/03/31/world/europe/31dc-russia1-print-sub/31diplo-russia1-thumbStandard.jpg',
        'format': 'Standard Thumbnail',
        'height': 75,
        'width': 75,
        'type': 'image',
        'subtype': 'photo',
        'caption': 'xx',
        'copyright': 'Alexander Nemenov/Agence France-Presse &mdash; Getty Images'
      },
      {
        'url': 'https://static01.nyt.com/images/2018/03/31/world/europe/31dc-russia1-print-sub/31diplo-russia1-thumbLarge.jpg',
        'format': 'thumbLarge',
        'height': 150,
        'width': 150,
        'type': 'image',
        'subtype': 'photo',
        'caption': 'xx',
        'copyright': 'Alexander Nemenov/Agence France-Presse &mdash; Getty Images'
      },
      {
        'url': 'xx',
        'format': 'Normal',
        'height': 127,
        'width': 190,
        'type': 'image',
        'subtype': 'photo',
        'caption': 'xx',
        'copyright': 'Alexander Nemenov/Agence France-Presse &mdash; Getty Images'
      },
      {
        'url': 'xx',
        'format': 'mediumThreeByTwo210',
        'height': 140,
        'width': 210,
        'type': 'image',
        'subtype': 'photo',
        'caption': 'xx',
        'copyright': 'Alexander Nemenov/Agence France-Presse &mdash; Getty Images'
      },
      {
        'url': 'xx',
        'format': 'superJumbo',
        'height': 1365,
        'width': 2048,
        'type': 'image',
        'subtype': 'photo',
        'caption': 'xx',
        'copyright': 'Alexander Nemenov/Agence France-Presse &mdash; Getty Images'
      }
    ],
    'short_url': 'https://nyti.ms/2uzn7ds'
  },
  {
    'section': 'U.S.',
    'subsection': 'Politics',
    'title': 'Let Us Catch You Up on the Biggest Stories in Politics This Week',
    'abstract': 'xx',
    'url': 'https://www.nytimes.com/2018/03/30/us/politics/let-us-catch-you-up-on-the-biggest-stories-in-politics-this-week.html',
    'byline': 'By EMILY COCHRANE',
    'item_type': 'Article',
    'updated_date': '2018-03-30T15:37:50-04:00',
    'created_date': '2018-03-30T13:15:15-04:00',
    'published_date': '2018-03-30T13:15:15-04:00',
    'material_type_facet': '',
    'kicker': '',
    'des_facet': [
      'United States International Relations'
    ],
    'org_facet': [],
    'per_facet': [
      'Trump, Donald J',
      'Hicks, Hope C (1988- )',
      'Shulkin, David J'
    ],
    'geo_facet': [],
    'multimedia': [
      {
        'url': 'https://static01.nyt.com/images/2018/03/31/us/politics/31dc-roundup/31dc-roundup-thumbStandard.jpg',
        'format': 'Standard Thumbnail',
        'height': 75,
        'width': 75,
        'type': 'image',
        'subtype': 'photo',
        'caption': 'xx',
        'copyright': 'Doug Mills/The New York Times'
      },
      {
        'url': 'https://static01.nyt.com/images/2018/03/31/us/politics/31dc-roundup/31dc-roundup-thumbLarge.jpg',
        'format': 'thumbLarge',
        'height': 150,
        'width': 150,
        'type': 'image',
        'subtype': 'photo',
        'caption': 'xx',
        'copyright': 'Doug Mills/The New York Times'
      },
      {
        'url': 'xx',
        'format': 'Normal',
        'height': 127,
        'width': 190,
        'type': 'image',
        'subtype': 'photo',
        'caption': 'xx',
        'copyright': 'Doug Mills/The New York Times'
      },
      {
        'url': 'https://static01.nyt.com/images/2018/03/31/us/politics/31dc-roundup/31dc-roundup-mediumThreeByTwo210.jpg',
        'format': 'mediumThreeByTwo210',
        'height': 140,
        'width': 210,
        'type': 'image',
        'subtype': 'photo',
        'caption': 'xx',
        'copyright': 'Doug Mills/The New York Times'
      },
      {
        'url': 'xx',
        'format': 'superJumbo',
        'height': 1365,
        'width': 2048,
        'type': 'image',
        'subtype': 'photo',
        'caption': 'xx',
        'copyright': 'Doug Mills/The New York Times'
      }
    ],
    'short_url': 'https://nyti.ms/2uxKP9U'
  }
];

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let spy: jasmine.Spy;
  let newsService: NewsService;
  let activatedRoute: ActivatedRouteStub;
  let store;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(async(() => {
    const mockActivatedRoute = new MockActivatedRoute({
      parent: new MockActivatedRoute({
        params: Observable.of({ id: 'home' })
      })
    });
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        HttpModule,  // no provider for http, if not imported
        RouterTestingModule
      ],
      declarations: [
        NewsComponent,
        RouterLinkStubDirective
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        NewsActions,
        NewsService,
        { provide: mockActivatedRoute, Location },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;

    // inject NewsService into component and spy on the method:getSectionNews()
    newsService = fixture.debugElement.injector.get(NewsService);
    spy = spyOn(newsService, 'getSectionNews').and.callThrough();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should define the store', () => {
    store = TestBed.get(Store);

    expect(store).toBeDefined();
  });

  it('should load list of news from server', () => {
    const mockServiceData = {
      'status': 'OK',
      'copyright': 'Copyright (c) 2018 The New York Times Company. All Rights Reserved.',
      'section': 'home',
      'last_updated': '2018-04-04T07:07:10-04:00',
      'num_results': 44,
      'results': [
        {
          'section': 'Briefing',
          'subsection': '',
          'title': 'Mexico, YouTube, China: Your Wednesday Briefing',
          'abstract': 'Here’s what you need to know to start your day.',
          'url': 'https://www.nytimes.com/2018/04/04/briefing/mexico-youtube-china.html',
          'byline': 'By CHRIS STANFORD',
          'item_type': 'Article',
          'updated_date': '2018-04-04T06:11:10-04:00',
          'created_date': '2018-04-04T05:38:49-04:00',
          'published_date': '2018-04-04T05:38:49-04:00',
          'material_type_facet': '',
          'kicker': '',
          'des_facet': [],
          'org_facet': [],
          'per_facet': [],
          'geo_facet': [],
          'multimedia': [
            {
              'url': 'https://static01.nyt.com/images/2018/04/04/world/04USBriefing-Amcore/04USBriefing-King-thumbStandard.jpg',
              'format': 'Standard Thumbnail',
              'height': 75,
              'width': 75,
              'type': 'image',
              'subtype': 'photo',
              'caption': '',
              'copyright': ''
            },
            {
              'url': 'https://static01.nyt.com/images/2018/04/04/world/04USBriefing-Amcore/04USBriefing-King-thumbLarge.jpg',
              'format': 'thumbLarge',
              'height': 150,
              'width': 150,
              'type': 'image',
              'subtype': 'photo',
              'caption': '',
              'copyright': ''
            },
            {
              // tslint:disable-next-line:max-line-length
              'url': 'https://static01.nyt.com/images/2018/04/04/world/04USBriefing-Amcore/merlin_59711050_69aa4262-04b4-4fd4-96e5-72df355f9c53-articleInline.jpg',
              'format': 'Normal',
              'height': 133,
              'width': 190,
              'type': 'image',
              'subtype': 'photo',
              'caption': '',
              'copyright': ''
            },
            {
              'url': 'https://static01.nyt.com/images/2018/04/04/world/04USBriefing-Amcore/04USBriefing-King-mediumThreeByTwo210.jpg',
              'format': 'mediumThreeByTwo210',
              'height': 140,
              'width': 210,
              'type': 'image',
              'subtype': 'photo',
              'caption': '',
              'copyright': ''
            },
            {
              'url': 'https://static01.nyt.com/images/2018/04/04/world/04USBriefing-Amcore/04USBriefing-Amcore-superJumbo-v2.jpg',
              'format': 'superJumbo',
              'height': 188,
              'width': 624,
              'type': 'image',
              'subtype': 'photo',
              'caption': '',
              'copyright': ''
            }
          ],
          'short_url': 'https://nyti.ms/2Ej0xoL'
        },
        {
          'section': 'N.Y. / Region',
          'subsection': '',
          'title': 'New York Today: Guerrilla Gardening',
          'abstract': 'Wednesday: Gardening season, windy weather, and one book to bind New Yorkers.',
          'url': 'https://www.nytimes.com/2018/04/04/nyregion/new-york-today-guerrilla-gardening.html',
          'byline': 'By JONATHAN WOLFE',
          'item_type': 'Article',
          'updated_date': '2018-04-04T06:00:03-04:00',
          'created_date': '2018-04-04T06:00:04-04:00',
          'published_date': '2018-04-04T06:00:04-04:00',
          'material_type_facet': '',
          'kicker': '',
          'des_facet': [],
          'org_facet': [],
          'per_facet': [],
          'geo_facet': [
            'New York City'
          ],
          'multimedia': [
            {
              'url': 'https://static01.nyt.com/images/2018/04/04/nyregion/04JENNYSGARDEN01/04JENNYSGARDEN01-thumbStandard.jpg',
              'format': 'Standard Thumbnail',
              'height': 75,
              'width': 75,
              'type': 'image',
              'subtype': 'photo',
              'caption': 'xx',
              'copyright': 'Elias Williams for The New York Times'
            },
            {
              'url': 'https://static01.nyt.com/images/2018/04/04/nyregion/04JENNYSGARDEN01/04JENNYSGARDEN01-thumbLarge.jpg',
              'format': 'thumbLarge',
              'height': 150,
              'width': 150,
              'type': 'image',
              'subtype': 'photo',
              'caption': 'xx',
              'copyright': 'Elias Williams for The New York Times'
            },
            {
              'url': 'https://static01.nyt.com/images/2018/04/04/nyregion/04JENNYSGARDEN01/04JENNYSGARDEN01-articleInline.jpg',
              'format': 'Normal',
              'height': 127,
              'width': 190,
              'type': 'image',
              'subtype': 'photo',
              'caption': 'xx',
              'copyright': 'Elias Williams for The New York Times'
            },
            {
              'url': 'https://static01.nyt.com/images/2018/04/04/nyregion/04JENNYSGARDEN01/04JENNYSGARDEN01-mediumThreeByTwo210.jpg',
              'format': 'mediumThreeByTwo210',
              'height': 140,
              'width': 210,
              'type': 'image',
              'subtype': 'photo',
              'caption': 'xx',
              'copyright': 'Elias Williams for The New York Times'
            },
            {
              'url': 'https://static01.nyt.com/images/2018/04/04/nyregion/04JENNYSGARDEN01/04JENNYSGARDEN01-superJumbo.jpg',
              'format': 'superJumbo',
              'height': 1366,
              'width': 2048,
              'type': 'image',
              'subtype': 'photo',
              'caption': 'xx',
              'copyright': 'Elias Williams for The New York Times'
            }
          ],
          'short_url': 'https://nyti.ms/2EjbFlv'
        }
      ]
    };
    const service = TestBed.get(NewsService);

    spyOn(service, 'getSectionNews').and.returnValue(Observable.from([mockServiceData]));

    expect(mockServiceData.results.length).toBe(2);
  });

});
