# Global Bops

One song and artist per country, on a globe and flat equirectangular map.
Static site: no build step, no server code, deploy the folder as-is.

## Structure

```
global-bops/
  index.html          page + markup
  style.css           all styles
  site.js             app logic (globe via three.js, flat map, tabs, dropdown)
  vendor/three.min.js three.js r128 (MIT)
  data/map.png        4096x2048 map raster (globe + map texture)
  data/map.svg        your original vector map (source of truth for regenerating map.png)
  data/countries.js   country list + curation (EDIT THIS to add songs)
  data/grid.js        hit-testing grid (gzip base64), no need to touch
```

## Curate a country

Open `data/countries.js`, find the row and fill artist, song, genre:

```
["NG","Nigeria",9.1,8.7,"Burna Boy","Last Last","Afrobeats",null],
```

The About page, Full Playlist page, map behavior and Surprise-me react automatically.

## Preview locally

Open `index.html` in a browser (double-click works, everything loads over file://).

## Deploy (pick one, all free)

- **GitHub Pages**: create a repo, push this folder, then repo Settings > Pages >
  Deploy from branch > main / root. Live at `https://<user>.github.io/<repo>/`.
- **Netlify**: drag-and-drop the `global-bops` folder onto https://app.netlify.com
  (Sites tab). Instant URL; connect a git repo for auto-deploy on every push.
- **Cloudflare Pages**: create project > connect repo (or direct upload) > done.

https and custom domain are included in all three. To use your own domain, buy it
anywhere (about 10 EUR/year) and follow the host's custom-domain instructions.

## Regenerating data/map.png

map.png was rasterized from data/map.svg (4096x2048) with palette quantization.
If you update the SVG, keep the 2:1 equirectangular aspect ratio:
translator q = 2*u-1 at v=0.5 must remain in view.
