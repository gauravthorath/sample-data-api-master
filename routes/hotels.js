var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    items: [
      {
        "title":"Mariannenhof",
        "address":{
          "label":"Mariannenhof, Mariannenstraße 1, 80538 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Lehel",
          "street":"Mariannenstraße",
          "postalCode":"80538",
          "houseNumber":"1"
        },
        "position":{
          "lat":48.13598,
          "lng":11.58643
        },
        "distance":127
      },
      {
        "title":"Pension Beck",
        "address":{
          "label":"Pension Beck, Thierschstraße 36, 80538 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Lehel",
          "street":"Thierschstraße",
          "postalCode":"80538",
          "houseNumber":"36"
        },
        "position":{
          "lat":48.13621,
          "lng":11.58774
        },
        "distance":178
      },
      {
        "title":"Stollberg Plaza",
        "address":{
          "label":"Stollberg Plaza, Stollbergstraße 2, 80539 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Altstadt",
          "street":"Stollbergstraße",
          "postalCode":"80539",
          "houseNumber":"2"
        },
        "position":{
          "lat":48.1362,
          "lng":11.58293
        },
        "distance":221
      },
      {
        "title":"Hotel Opéra",
        "address":{
          "label":"Hotel Opéra, Sankt-Anna-Straße 10, 80538 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Lehel",
          "street":"Sankt-Anna-Straße",
          "postalCode":"80538",
          "houseNumber":"10"
        },
        "position":{
          "lat":48.13883,
          "lng":11.58706
        },
        "distance":228
      },
      {
        "title":"Hotel Concorde",
        "address":{
          "label":"Hotel Concorde, Herrnstraße 38, 80539 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Altstadt",
          "street":"Herrnstraße",
          "postalCode":"80539",
          "houseNumber":"38"
        },
        "position":{
          "lat":48.13649,
          "lng":11.58244
        },
        "distance":246
      },
      {
        "title":"Maximilian Munich",
        "address":{
          "label":"Maximilian Munich, Hochbrückenstraße 18, 80331 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Altstadt",
          "street":"Hochbrückenstraße",
          "postalCode":"80331",
          "houseNumber":"18"
        },
        "position":{
          "lat":48.13723,
          "lng":11.58206
        },
        "distance":268
      },
      {
        "title":"Gasthaus Isarthor",
        "address":{
          "label":"Gasthaus Isarthor, Kanalstraße 2, 80538 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Lehel",
          "street":"Kanalstraße",
          "postalCode":"80538",
          "houseNumber":"2"
        },
        "position":{
          "lat":48.13494,
          "lng":11.58374
        },
        "distance":270
      },
      {
        "title":"Internet Cafe Isartor / Marienplatz",
        "address":{
          "label":"Internet Cafe Isartor / Marienplatz, Thomas-Wimmer-Ring 1, 80539 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Altstadt",
          "street":"Thomas-Wimmer-Ring",
          "postalCode":"80539",
          "houseNumber":"1"
        },
        "position":{
          "lat":48.13543,
          "lng":11.58237
        },
        "distance":300
      },
      {
        "title":"Hotel Splendid-Dollmann",
        "address":{
          "label":"Hotel Splendid-Dollmann, Thierschstraße 49, 80538 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Lehel",
          "street":"Thierschstraße",
          "postalCode":"80538",
          "houseNumber":"49"
        },
        "position":{
          "lat":48.13896,
          "lng":11.58846
        },
        "distance":301
      },
      {
        "title":"La Stanza",
        "address":{
          "label":"La Stanza, Sankt-Anna-Straße 13, 80538 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Lehel",
          "street":"Sankt-Anna-Straße",
          "postalCode":"80538",
          "houseNumber":"13"
        },
        "position":{
          "lat":48.13968,
          "lng":11.58672
        },
        "distance":308
      },
      {
        "title":"Hotel Torbräu",
        "address":{
          "label":"Hotel Torbräu, Tal 41, 80331 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Altstadt",
          "street":"Tal",
          "postalCode":"80331",
          "houseNumber":"41"
        },
        "position":{
          "lat":48.13552,
          "lng":11.58158
        },
        "distance":345
      },
      {
        "title":"Kitcho",
        "address":{
          "label":"Kitcho, Wurzerstraße 14, 80539 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Altstadt",
          "street":"Wurzerstraße",
          "postalCode":"80539",
          "houseNumber":"14"
        },
        "position":{
          "lat":48.13966,
          "lng":11.58282
        },
        "distance":363
      },
      {
        "title":"Bezirksfinanzdirektion Muenchen",
        "address":{
          "label":"Bezirksfinanzdirektion Muenchen, Ländstraße 6, 80538 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Lehel",
          "street":"Ländstraße",
          "postalCode":"80538",
          "houseNumber":"6"
        },
        "position":{
          "lat":48.13373,
          "lng":11.58575
        },
        "distance":364
      },
      {
        "title":"Appartment München Isartor",
        "address":{
          "label":"Appartment München Isartor, Ländstraße 6, 80538 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Lehel",
          "street":"Ländstraße",
          "postalCode":"80538",
          "houseNumber":"6"
        },
        "position":{
          "lat":48.13373,
          "lng":11.58575
        },
        "distance":364
      },
      {
        "title":"Mandarin Oriental",
        "address":{
          "label":"Mandarin Oriental, Neuturmstraße 1, 80331 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Altstadt",
          "street":"Neuturmstraße",
          "postalCode":"80331",
          "houseNumber":"1"
        },
        "position":{
          "lat":48.13729,
          "lng":11.58076
        },
        "distance":365
      },
      {
        "title":"Hotel vier Jahreszeiten Kempinski",
        "address":{
          "label":"Hotel vier Jahreszeiten Kempinski, Maximilianstraße 17, 80539 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Altstadt",
          "street":"Maximilianstraße",
          "postalCode":"80539",
          "houseNumber":"17"
        },
        "position":{
          "lat":48.1391,
          "lng":11.5817
        },
        "distance":375
      },
      {
        "title":"Hotel an der Isar",
        "address":{
          "label":"Hotel an der Isar, Steinsdorfstraße 15, 80538 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Lehel",
          "street":"Steinsdorfstraße",
          "postalCode":"80538",
          "houseNumber":"15"
        },
        "position":{
          "lat":48.13352,
          "lng":11.58585
        },
        "distance":387
      },
      {
        "title":"Mona Lisa",
        "address":{
          "label":"Mona Lisa, Robert-Koch-Straße 4, 80538 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Lehel",
          "street":"Robert-Koch-Straße",
          "postalCode":"80538",
          "houseNumber":"4"
        },
        "position":{
          "lat":48.13976,
          "lng":11.58941
        },
        "distance":414
      },
      {
        "title":"Der Katzlmacher",
        "address":{
          "label":"Der Katzlmacher, Bräuhausstraße 6, 80331 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Altstadt",
          "street":"Bräuhausstraße",
          "postalCode":"80331",
          "houseNumber":"6"
        },
        "position":{
          "lat":48.13719,
          "lng":11.58005
        },
        "distance":417
      },
      {
        "title":"Pusser's New York Bar",
        "address":{
          "label":"Pusser's New York Bar, Falkenturmstraße 9, 80331 München, Deutschland",
          "countryCode":"DEU",
          "countryName":"Deutschland",
          "stateCode":"BY",
          "state":"Bayern",
          "countyCode":"M",
          "county":"München (Stadt)",
          "city":"München",
          "district":"Altstadt",
          "street":"Falkenturmstraße",
          "postalCode":"80331",
          "houseNumber":"9"
        },
        "position":{
          "lat":48.13856,
          "lng":11.58045
        },
        "distance":424
      }
    ]
  });
});

module.exports = router;
