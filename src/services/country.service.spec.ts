import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CountryService } from './country.service';
import { API_ENDPOINT, REST_ENDPOINT } from 'src/config';
import { StoreModule } from '@ngrx/store';

describe('CountryService', () => {
  let service: CountryService,
    testingController: HttpTestingController,
    apiEndpoint: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [{ provide: API_ENDPOINT, useValue: REST_ENDPOINT }]
    });

    testingController = TestBed.inject(HttpTestingController);
    apiEndpoint = TestBed.inject(API_ENDPOINT);
    service = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all countries', () => {
    service.getAll()
      .subscribe(rawCountries => {
        expect(rawCountries).toBeTruthy();
        expect(rawCountries.length).toBeGreaterThan(1);
        expect('name' in rawCountries[0]).toBeTrue();
      });

    const httpRequest = testingController.expectOne(apiEndpoint);
    expect(httpRequest.request.method).toEqual('GET');
    httpRequest.flush(testData);
  });

  afterEach(() => {
    testingController.verify();
  })

});

const testData = [{
  "name": {
    "common": "DR Congo",
    "official": "Democratic Republic of the Congo",
    "nativeName": {
      "fra": {
        "official": "République démocratique du Congo",
        "common": "RD Congo"
      },
      "kon": {
        "official": "Repubilika ya Kongo Demokratiki",
        "common": "Repubilika ya Kongo Demokratiki"
      },
      "lin": {
        "official": "Republiki ya Kongó Demokratiki",
        "common": "Republiki ya Kongó Demokratiki"
      },
      "lua": {
        "official": "Ditunga dia Kongu wa Mungalaata",
        "common": "Ditunga dia Kongu wa Mungalaata"
      },
      "swa": {
        "official": "Jamhuri ya Kidemokrasia ya Kongo",
        "common": "Jamhuri ya Kidemokrasia ya Kongo"
      }
    }
  },
  "tld": [
    ".cd"
  ],
  "cca2": "CD",
  "ccn3": "180",
  "cca3": "COD",
  "cioc": "COD",
  "independent": true,
  "status": "officially-assigned",
  "unMember": true,
  "currencies": {
    "CDF": {
      "name": "Congolese franc",
      "symbol": "FC"
    }
  },
  "idd": {
    "root": "+2",
    "suffixes": [
      "43"
    ]
  },
  "capital": [
    "Kinshasa"
  ],
  "altSpellings": [
    "CD",
    "DR Congo",
    "Congo-Kinshasa",
    "Congo, the Democratic Republic of the",
    "DRC"
  ],
  "region": "Africa",
  "subregion": "Middle Africa",
  "languages": {
    "fra": "French",
    "kon": "Kikongo",
    "lin": "Lingala",
    "lua": "Tshiluba",
    "swa": "Swahili"
  },
  "translations": {
    "ara": {
      "official": "جمهورية الكونغو الديمقراطية",
      "common": "الكونغو"
    },
    "ces": {
      "official": "Demokratická republika Kongo",
      "common": "DR Kongo"
    },
    "cym": {
      "official": "Gweriniaeth Ddemocrataidd Congo",
      "common": "Gweriniaeth Ddemocrataidd Congo"
    },
    "deu": {
      "official": "Demokratische Republik Kongo",
      "common": "Kongo (Dem. Rep.)"
    },
    "est": {
      "official": "Kongo Demokraatlik Vabariik",
      "common": "Kongo DV"
    },
    "fin": {
      "official": "Kongon demokraattinen tasavalta",
      "common": "Kongon demokraattinen tasavalta"
    },
    "fra": {
      "official": "République démocratique du Congo",
      "common": "Congo (Rép. dém.)"
    },
    "hrv": {
      "official": "Demokratska Republika Kongo",
      "common": "Kongo, Demokratska Republika"
    },
    "hun": {
      "official": "Kongói Demokratikus Köztársaság",
      "common": "Kongói Demokratikus Köztársaság"
    },
    "ita": {
      "official": "Repubblica Democratica del Congo",
      "common": "Congo (Rep. Dem.)"
    },
    "jpn": {
      "official": "コンゴ民主共和国",
      "common": "コンゴ民主共和国"
    },
    "kor": {
      "official": "콩고 민주 공화국",
      "common": "콩고 민주 공화국"
    },
    "nld": {
      "official": "Democratische Republiek Congo",
      "common": "Congo (DRC)"
    },
    "per": {
      "official": "جمهوری دموکراتیک کنگو",
      "common": "کنگو دموکراتیک"
    },
    "pol": {
      "official": "Demokratyczna Republika Konga",
      "common": "Demokratyczna Republika Konga"
    },
    "por": {
      "official": "República Democrática do Congo",
      "common": "República Democrática do Congo"
    },
    "rus": {
      "official": "Демократическая Республика Конго",
      "common": "Демократическая Республика Конго"
    },
    "slk": {
      "official": "Konžská demokratická republika",
      "common": "Kongo"
    },
    "spa": {
      "official": "República Democrática del Congo",
      "common": "Congo (Rep. Dem.)"
    },
    "swe": {
      "official": "Demokratiska republiken Kongo",
      "common": "Kongo-Kinshasa"
    },
    "urd": {
      "official": "جمہوری جمہوریہ کانگو",
      "common": "کانگو"
    },
    "zho": {
      "official": "刚果民主共和国",
      "common": "民主刚果"
    }
  },
  "latlng": [
    0.0,
    25.0
  ],
  "landlocked": false,
  "borders": [
    "AGO",
    "BDI",
    "CAF",
    "COG",
    "RWA",
    "SSD",
    "TZA",
    "UGA",
    "ZMB"
  ],
  "area": 2344858.0,
  "demonyms": {
    "eng": {
      "f": "Congolese",
      "m": "Congolese"
    },
    "fra": {
      "f": "Congolaise",
      "m": "Congolais"
    }
  },
  "flag": "\uD83C\uDDE8\uD83C\uDDE9",
  "maps": {
    "googleMaps": "https://goo.gl/maps/KfhNVn6VqdZXWu8n9",
    "openStreetMaps": "https://www.openstreetmap.org/relation/192795"
  },
  "population": 89561404,
  "gini": {
    "2012": 42.1
  },
  "fifa": "COD",
  "car": {
    "signs": [
      "CGO"
    ],
    "side": "right"
  },
  "timezones": [
    "UTC+01:00",
    "UTC+02:00"
  ],
  "continents": [
    "Africa"
  ],
  "flags": {
    "png": "https://flagcdn.com/w320/cd.png",
    "svg": "https://flagcdn.com/cd.svg"
  },
  "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/cd.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/cd.svg"
  },
  "startOfWeek": "monday",
  "capitalInfo": {
    "latlng": [
      -4.32,
      15.3
    ]
  }
},
{
  "name": {
    "common": "North Macedonia",
    "official": "Republic of North Macedonia",
    "nativeName": {
      "mkd": {
        "official": "Република Северна Македонија",
        "common": "Македонија"
      }
    }
  },
  "tld": [
    ".mk"
  ],
  "cca2": "MK",
  "ccn3": "807",
  "cca3": "MKD",
  "cioc": "MKD",
  "independent": true,
  "status": "officially-assigned",
  "unMember": true,
  "currencies": {
    "MKD": {
      "name": "denar",
      "symbol": "den"
    }
  },
  "idd": {
    "root": "+3",
    "suffixes": [
      "89"
    ]
  },
  "capital": [
    "Skopje"
  ],
  "altSpellings": [
    "MK",
    "The former Yugoslav Republic of Macedonia",
    "Republic of North Macedonia",
    "Macedonia, The Former Yugoslav Republic of",
    "Република Северна Македонија"
  ],
  "region": "Europe",
  "subregion": "Southeast Europe",
  "languages": {
    "mkd": "Macedonian"
  },
  "translations": {
    "ara": {
      "official": "جمهورية شمال مقدونيا",
      "common": "شمال مقدونيا"
    },
    "ces": {
      "official": "Republika Severní Makedonie",
      "common": "Severní Makedonie"
    },
    "cym": {
      "official": "Republic of North Macedonia",
      "common": "North Macedonia"
    },
    "deu": {
      "official": "Republik Nordmazedonien",
      "common": "Nordmazedonien"
    },
    "est": {
      "official": "Põhja-Makedoonia Vabariik",
      "common": "Põhja-Makedoonia"
    },
    "fin": {
      "official": "Pohjois-Makedonian tasavalta",
      "common": "Pohjois-Makedonia"
    },
    "fra": {
      "official": "République de Macédoine du Nord",
      "common": "Macédoine du Nord"
    },
    "hrv": {
      "official": "Republika Sjeverna Makedonija",
      "common": "Sjeverna Makedonija"
    },
    "hun": {
      "official": "Észak-macedón Köztársaság",
      "common": "Észak-Macedónia"
    },
    "ita": {
      "official": "Repubblica di Macedonia del Nord",
      "common": "Macedonia del Nord"
    },
    "jpn": {
      "official": "北マケドニア共和国",
      "common": "北マケドニア "
    },
    "kor": {
      "official": "북마케도니아 공화국",
      "common": "북마케도니아"
    },
    "nld": {
      "official": "Republiek Noord-Macedonië",
      "common": "Noord-Macedonië"
    },
    "per": {
      "official": "جمهوری مقدونیه شمالی",
      "common": "مقدونیه شمالی"
    },
    "pol": {
      "official": "Republika Macedonii Północnej",
      "common": "Macedonia Północna"
    },
    "por": {
      "official": "República da Macedônia do Norte",
      "common": "Macedónia do Norte"
    },
    "rus": {
      "official": "Республика Северная Македония",
      "common": "Северная Македония"
    },
    "slk": {
      "official": "Severomacedónska republika",
      "common": "Severné Macedónsko"
    },
    "spa": {
      "official": "República de Macedonia del Norte",
      "common": "Macedonia del Norte"
    },
    "swe": {
      "official": "Republiken Nordmakedonien",
      "common": "Nordmakedonien"
    },
    "urd": {
      "official": "جمہوریہ مقدونیہ",
      "common": "شمالی مقدونیہ"
    },
    "zho": {
      "official": "北馬其頓共和國",
      "common": "北馬其頓"
    }
  },
  "latlng": [
    41.83333333,
    22.0
  ],
  "landlocked": true,
  "borders": [
    "ALB",
    "BGR",
    "GRC",
    "UNK",
    "SRB"
  ],
  "area": 25713.0,
  "demonyms": {
    "eng": {
      "f": "Macedonian",
      "m": "Macedonian"
    },
    "fra": {
      "f": "Macédonienne",
      "m": "Macédonien"
    }
  },
  "flag": "\uD83C\uDDF2\uD83C\uDDF0",
  "maps": {
    "googleMaps": "https://goo.gl/maps/55Q8MEnF6ACdu3q79",
    "openStreetMaps": "https://www.openstreetmap.org/relation/53293"
  },
  "population": 2077132,
  "gini": {
    "2018": 33.0
  },
  "fifa": "MKD",
  "car": {
    "signs": [
      "MK"
    ],
    "side": "right"
  },
  "timezones": [
    "UTC+01:00"
  ],
  "continents": [
    "Europe"
  ],
  "flags": {
    "png": "https://flagcdn.com/w320/mk.png",
    "svg": "https://flagcdn.com/mk.svg"
  },
  "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/mk.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/mk.svg"
  },
  "startOfWeek": "monday",
  "capitalInfo": {
    "latlng": [
      42.0,
      21.43
    ]
  },
  "postalCode": {
    "format": "####",
    "regex": "^(\\d{4})$"
  }
},
{
  "name": {
    "common": "Tonga",
    "official": "Kingdom of Tonga",
    "nativeName": {
      "eng": {
        "official": "Kingdom of Tonga",
        "common": "Tonga"
      },
      "ton": {
        "official": "Kingdom of Tonga",
        "common": "Tonga"
      }
    }
  },
  "tld": [
    ".to"
  ],
  "cca2": "TO",
  "ccn3": "776",
  "cca3": "TON",
  "cioc": "TGA",
  "independent": true,
  "status": "officially-assigned",
  "unMember": true,
  "currencies": {
    "TOP": {
      "name": "Tongan paʻanga",
      "symbol": "T$"
    }
  },
  "idd": {
    "root": "+6",
    "suffixes": [
      "76"
    ]
  },
  "capital": [
    "Nuku'alofa"
  ],
  "altSpellings": [
    "TO"
  ],
  "region": "Oceania",
  "subregion": "Polynesia",
  "languages": {
    "eng": "English",
    "ton": "Tongan"
  },
  "translations": {
    "ara": {
      "official": "مملكة تونغا",
      "common": "تونغا"
    },
    "ces": {
      "official": "Království Tonga",
      "common": "Tonga"
    },
    "cym": {
      "official": "Kingdom of Tonga",
      "common": "Tonga"
    },
    "deu": {
      "official": "Königreich Tonga",
      "common": "Tonga"
    },
    "est": {
      "official": "Tonga Kuningriik",
      "common": "Tonga"
    },
    "fin": {
      "official": "Tongan kuningaskunta",
      "common": "Tonga"
    },
    "fra": {
      "official": "Royaume des Tonga",
      "common": "Tonga"
    },
    "hrv": {
      "official": "Kraljevina Tonga",
      "common": "Tonga"
    },
    "hun": {
      "official": "Tongai Királyság",
      "common": "Tonga"
    },
    "ita": {
      "official": "Regno di Tonga",
      "common": "Tonga"
    },
    "jpn": {
      "official": "トンガ王国",
      "common": "トンガ"
    },
    "kor": {
      "official": "통가 왕국",
      "common": "통가"
    },
    "nld": {
      "official": "Koninkrijk Tonga",
      "common": "Tonga"
    },
    "per": {
      "official": "پادشاهی تونگا",
      "common": "تونگا"
    },
    "pol": {
      "official": "Królestwo Tonga",
      "common": "Tonga"
    },
    "por": {
      "official": "Reino de Tonga",
      "common": "Tonga"
    },
    "rus": {
      "official": "Королевство Тонга",
      "common": "Тонга"
    },
    "slk": {
      "official": "Tongské kráľovstvo",
      "common": "Tonga"
    },
    "spa": {
      "official": "Reino de Tonga",
      "common": "Tonga"
    },
    "swe": {
      "official": "Konungariket Tonga",
      "common": "Tonga"
    },
    "urd": {
      "official": "مملکتِ ٹونگا",
      "common": "ٹونگا"
    },
    "zho": {
      "official": "汤加王国",
      "common": "汤加"
    }
  },
  "latlng": [
    -20.0,
    -175.0
  ],
  "landlocked": false,
  "area": 747.0,
  "demonyms": {
    "eng": {
      "f": "Tongan",
      "m": "Tongan"
    },
    "fra": {
      "f": "Tonguienne",
      "m": "Tonguien"
    }
  },
  "flag": "\uD83C\uDDF9\uD83C\uDDF4",
  "maps": {
    "googleMaps": "https://goo.gl/maps/p5YALBY2QdEzswRo7",
    "openStreetMaps": "https://www.openstreetmap.org/relation/2186665"
  },
  "population": 105697,
  "gini": {
    "2015": 37.6
  },
  "fifa": "TGA",
  "car": {
    "signs": [
      "TO"
    ],
    "side": "left"
  },
  "timezones": [
    "UTC+13:00"
  ],
  "continents": [
    "Oceania"
  ],
  "flags": {
    "png": "https://flagcdn.com/w320/to.png",
    "svg": "https://flagcdn.com/to.svg"
  },
  "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/to.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/to.svg"
  },
  "startOfWeek": "monday",
  "capitalInfo": {
    "latlng": [
      -21.13,
      -175.2
    ]
  }
}];
