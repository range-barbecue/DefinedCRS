import './style/style.less';
import Hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'proj4leaflet';

var crs = new L.Proj.CRS('EPSG:3857', '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs', {
  resolutions: [
    156543.03392800014,
    78271.51696399994,
    39135.75848200009,
    19567.87924099992,
    9783.93962049996,
    4891.96981024998,
    2445.98490512499,
    1222.992452562495,
    611.4962262813797,
    305.74811314055756,
    152.87405657041106,
    76.43702828507324,
    38.21851414253662,
    19.10925707126831,
    9.554628535634155,
    4.77731426794937,
  ],
  origin: [-2.0037508342787E7, 2.0037508342787E7]
});

var map = L.map('map',{crs: crs}).setView([30.70, -81.47], 9);
L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}', {
  detectRetina: false,
  minZoom: 3,
  maxZoom: 16
}).addTo(map);
Hljs.initHighlightingOnLoad();