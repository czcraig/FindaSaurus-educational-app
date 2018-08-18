const leaflet = require('leaflet');
const tilesetKey = require('./helpers/tileset_key.js');
const TimePeriod = require('./models/time_period.js');
const TimelineView = require('./views/timeline_view.js');
const DietView = require('./views/diet_view.js');
const Diet = require('./models/diet.js');
const Dinosaur = require('./models/dinosaur.js');
const Map = require('./models/map.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
<<<<<<< HEAD

  const dinosaur = new Dinosaur();
  dinosaur.bindingEvents();
=======
  // const map = L.map('map').setView([55.9472, -3.2017], 13);
  // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //   maxZoom: 18,
  //   id: 'mapbox.streets',
  //   accessToken: tilesetKey
  // }).addTo(map);
>>>>>>> develop

  const timelineNav = document.querySelector('#timeline-container');
  const timelineView = new TimelineView(timelineNav);
  timelineView.bindingEvents();

  const dietNav = document.querySelector('nav#families');
  const dietView = new DietView(dietNav);
  dietView.bindingEvents();

  const diet = new Diet();
  diet.bindingEvents();

  const dinosaur = new Dinosaur();
  dinosaur.bindingEvents();

  const timePeriod = new TimePeriod();
  timePeriod.get();
  timePeriod.bindingEvents();

  const map = new Map();
  map.bindEvents();

})
