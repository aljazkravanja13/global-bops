
"use strict";
function report(msg) {
  if (!/error|fail|unavailable|missing|ERR|REJ|denied/i.test(msg)) return;
  const el = document.getElementById('errbar');
  el.style.display = 'block';
  el.textContent += msg + ' | ';
}
window.addEventListener('error', e => report('ERR: ' + e.message + ' @' + (e.lineno||'?')));
window.addEventListener('unhandledrejection', e => report('REJ: ' + (e.reason && e.reason.message || e.reason)));
// ===== embedded data =====
const PNG_URI = 'data/map.png';
const GRID_GZ = window.GRID_GZ;
const COUNTRIES = window.COUNTRIES;
const ISO3_TO_ISO2 = {   "ABW": "AW", "AFG": "AF", "AGO": "AO", "AIA": "AI", "ALB": "AL", "ALD": "AX",   "AND": "AD", "ARE": "AE", "ARG": "AR", "ARM": "AM", "ASM": "AS", "ATA": "AQ",   "ATC": "AU", "ATF": "TF", "ATG": "AG", "AUS": "AU", "AUT": "AT", "AZE": "AZ",   "BDI": "BI", "BEL": "BE", "BEN": "BJ", "BFA": "BF", "BGD": "BD", "BGR": "BG",   "BHR": "BH", "BHS": "BS", "BIH": "BA", "BLM": "BL", "BLR": "BY", "BLZ": "BZ",   "BMU": "BM", "BOL": "BO", "BRA": "BR", "BRB": "BB", "BRN": "BN", "BTN": "BT",   "BWA": "BW", "CAF": "CF", "CAN": "CA", "CHE": "CH", "CHL": "CL", "CHN": "CN",   "CIV": "CI", "CMR": "CM", "COD": "CD", "COG": "CG", "COK": "CK", "COL": "CO",   "COM": "KM", "CPV": "CV", "CRI": "CR", "CUB": "CU", "CUW": "CW", "CYM": "KY",   "CYP": "CY", "CZE": "CZ", "DEU": "DE", "DJI": "DJ", "DMA": "DM", "DNK": "DK",   "DOM": "DO", "DZA": "DZ", "ECU": "EC", "EGY": "EG", "ERI": "ER", "ESP": "ES",   "EST": "EE", "ETH": "ET", "FIN": "FI", "FJI": "FJ", "FLK": "FK", "FRA": "FR",   "FRO": "FO", "FSM": "FM", "GAB": "GA", "GBR": "GB", "GEO": "GE", "GGY": "GG",   "GHA": "GH", "GIN": "GN", "GMB": "GM", "GNB": "GW", "GNQ": "GQ", "GRC": "GR",   "GRD": "GD", "GRL": "GL", "GTM": "GT", "GUM": "GU", "GUY": "GY", "HKG": "HK",   "HMD": "HM", "HND": "HN", "HRV": "HR", "HTI": "HT", "HUN": "HU", "IDN": "ID",   "IMN": "IM", "IND": "IN", "IOA": "AU", "IOT": "IO", "IRL": "IE", "IRN": "IR",   "IRQ": "IQ", "ISL": "IS", "ISR": "IL", "ITA": "IT", "JAM": "JM", "JEY": "JE",   "JOR": "JO", "JPN": "JP", "KAZ": "KZ", "KEN": "KE", "KGZ": "KG", "KHM": "KH",   "KIR": "KI", "KNA": "KN", "KOR": "KR", "KOS": "XK", "KWT": "KW", "LAO": "LA",   "LBN": "LB", "LBR": "LR", "LBY": "LY", "LCA": "LC", "LIE": "LI", "LKA": "LK",   "LSO": "LS", "LTU": "LT", "LUX": "LU", "LVA": "LV", "MAC": "MO", "MAF": "MF",   "MAR": "MA", "MCO": "MC", "MDA": "MD", "MDG": "MG", "MDV": "MV", "MEX": "MX",   "MHL": "MH", "MKD": "MK", "MLI": "ML", "MLT": "MT", "MMR": "MM", "MNE": "ME",   "MNG": "MN", "MNP": "MP", "MOZ": "MZ", "MRT": "MR", "MSR": "MS", "MUS": "MU",   "MWI": "MW", "MYS": "MY", "NAM": "NA", "NCL": "NC", "NER": "NE", "NFK": "NF",   "NGA": "NG", "NIC": "NI", "NIU": "NU", "NLD": "NL", "NOR": "NO", "NPL": "NP",   "NRU": "NR", "NZL": "NZ", "OMN": "OM", "PAK": "PK", "PAN": "PA", "PCN": "PN",   "PER": "PE", "PHL": "PH", "PLW": "PW", "PNG": "PG", "POL": "PL", "PRI": "PR",   "PRK": "KP", "PRT": "PT", "PRY": "PY", "PSX": "PS", "PYF": "PF", "QAT": "QA",   "ROU": "RO", "RUS": "RU", "RWA": "RW", "SAH": "EH", "SAU": "SA", "SDN": "SD",   "SDS": "SS", "SEN": "SN", "SGP": "SG", "SGS": "GS", "SHN": "SH", "SLB": "SB",   "SLE": "SL", "SLV": "SV", "SMR": "SM", "SOL": "SO", "SOM": "SO", "SPM": "PM",   "SRB": "RS", "STP": "ST", "SUR": "SR", "SVK": "SK", "SVN": "SI", "SWE": "SE",   "SWZ": "SZ", "SXM": "SX", "SYC": "SC", "SYR": "SY", "TCA": "TC", "TCD": "TD",   "TGO": "TG", "THA": "TH", "TJK": "TJ", "TKM": "TM", "TLS": "TL", "TON": "TO",   "TTO": "TT", "TUN": "TN", "TUR": "TR", "TUV": "TV", "TWN": "TW", "TZA": "TZ",   "UGA": "UG", "UKR": "UA", "URY": "UY", "USA": "US", "UZB": "UZ", "VAT": "VA",   "VCT": "VC", "VEN": "VE", "VGB": "VG", "VIR": "VI", "VNM": "VN", "VUT": "VU",   "WLF": "WF", "WSM": "WS", "YEM": "YE", "ZAF": "ZA", "ZMB": "ZM", "ZWE": "ZW"};

const W = 2048, H = 1024, GRID_W = 512, GRID_H = 256;
const BY_ISO2 = {}; COUNTRIES.forEach(r => BY_ISO2[r[0]] = r);
const CURATED = COUNTRIES.filter(r => r[4]);

// ===== flag emoji =====
function flag(iso2) {
  return String.fromCodePoint(...[...iso2].map(c => 127397 + c.charCodeAt(0)));
}

// ===== decompress hit grid =====
let GRID = null, GRID_IDS = null;
async function loadGrid() {
  const bin = Uint8Array.from(atob(GRID_GZ), c => c.charCodeAt(0));
  const ds = new DecompressionStream('gzip');
  const stream = new Blob([bin]).stream().pipeThrough(ds);
  const buf = new Uint8Array(await new Response(stream).arrayBuffer());
  const sep = buf.indexOf(124); // '|'
  GRID_IDS = JSON.parse(new TextDecoder().decode(buf.slice(0, sep)));
  GRID = buf.slice(sep + 1);
}
function gridIso3(u, v) {
  if (!GRID) return null;
  const gx = Math.min(GRID_W - 1, Math.max(0, Math.floor(u * GRID_W)));
  const gy = Math.min(GRID_H - 1, Math.max(0, Math.floor(v * GRID_H)));
  const id = GRID[gy * GRID_W + gx];
  if (!id) return null;
  return GRID_IDS[id - 1] || null;
}
const TERRITORY_NAMES = {
  ABW:"Aruba", AIA:"Anguilla", ALD:"Åland Islands", ASM:"American Samoa", ATA:"Antarctica",
  ATF:"French Southern Territories", BLM:"Saint Barthélemy", BMU:"Bermuda", COK:"Cook Islands",
  CUW:"Curaçao", CYM:"Cayman Islands", CYN:"Northern Cyprus", FLK:"Falkland Islands",
  FRO:"Faroe Islands", GGY:"Guernsey", GUM:"Guam", HKG:"Hong Kong", HMD:"Heard and McDonald Islands",
  IMN:"Isle of Man", IOT:"British Indian Ocean Territory", JEY:"Jersey", KAS:"Kashmir (disputed)",
  MAC:"Macao", MAF:"Saint Martin", MNP:"Northern Mariana Islands", MSR:"Montserrat",
  NCL:"New Caledonia", NFK:"Norfolk Island", NIU:"Niue", PCN:"Pitcairn Islands",
  PRI:"Puerto Rico", PYF:"French Polynesia", SAH:"Western Sahara", SGS:"South Georgia",
  SHN:"Saint Helena", SPM:"Saint Pierre and Miquelon", SXM:"Sint Maarten",
  TCA:"Turks and Caicos Islands", VGB:"British Virgin Islands", VIR:"U.S. Virgin Islands",
  WLF:"Wallis and Futuna"
};
function countryAt(u, v) {
  const iso3 = gridIso3(u, v);
  if (!iso3) return null;
  const iso2 = ISO3_TO_ISO2[iso3] || iso3;
  return BY_ISO2[iso2] || { iso2, name: TERRITORY_NAMES[iso3] || iso3, cur: false };
}

// ===== detail card =====
const detail = document.getElementById('detail');
function showDetail(r) {
  if (!r) return;
  const row = Array.isArray(r) ? r : null;
  if (!row) return;
  detail.style.display = 'block';
  if (row[4]) {
    detail.innerHTML = '<span class="x" onclick="this.parentElement.style.display=\'none\'">&#10005;</span>'
      + '<h3>' + flag(row[0]) + ' ' + row[1] + '</h3>'
      + '<div class="song">' + row[4] + ' &#8212; ' + row[5] + '</div>'
      + (row[6] ? '<div class="genre">' + row[6] + '</div>' : '')
      + '<a class="link" target="_blank" rel="noopener" href="https://open.spotify.com/search/'
      + encodeURIComponent(row[4] + ' ' + row[5]) + '">Find on Spotify</a>';
  } else {
    detail.innerHTML = '<span class="x" onclick="this.parentElement.style.display=\'none\'">&#10005;</span>'
      + '<h3>' + flag(row[0]) + ' ' + row[1] + '</h3>'
      + '<div class="empty">Not curated yet &#8212; check back soon!</div>';
  }
}

// ===== tooltip =====
const tip = document.getElementById('tip');

// ===== canvas + modes =====
const stage = document.getElementById('stage');
const view = document.getElementById('view');
const gview = document.getElementById('gview');
const ctx2d = view.getContext('2d');
let MODE = 'globe';

// image
const texImg = new Image();
let mips = [];
texImg.onerror = () => report('map image failed to load');
texImg.onload = () => {
  if (!texImg.width) { report('image load with width 0'); return; }
  buildMips();
  if (MODE === 'map') draw(); else glPlus.refresh();
  report('map image ' + texImg.width + 'x' + texImg.height);
};
texImg.src = PNG_URI;
// stepwise mipmap chain for clean downscaled dot rendering
function buildMips() {
  mips = [];
  let c = document.createElement('canvas');
  c.width = texImg.width; c.height = texImg.height;
  c.getContext('2d').drawImage(texImg, 0, 0);
  mips.push(c);
  while (c.width > 256) {
    const n = document.createElement('canvas');
    n.width = c.width / 2; n.height = c.height / 2;
    const g = n.getContext('2d');
    g.imageSmoothingEnabled = true;
    g.drawImage(c, 0, 0, n.width, n.height);
    mips.push(n); c = n;
  }
}

// map pan/zoom
let zoom = 1, panX = 0, panY = 0, dragging = false, lastX = 0, lastY = 0, moved = false;

function resize() {
  const r = stage.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  view.width = gview.width = Math.round(r.width * dpr);
  view.height = gview.height = Math.round(r.height * dpr);
  if (MODE === 'map') draw(); else glPlus.draw();
}
window.addEventListener('resize', resize);

// ---- flat map mode ----
function mapToScreen(mx, my) {
  const cw = view.width, ch = view.height;
  const base = Math.max(cw / W, ch / H);
  const s = base * zoom;
  const ox = (cw - W * s) / 2 + panX, oy = (ch - H * s) / 2 + panY;
  return [mx * s + ox, my * s + oy];
}
function screenToMap(sx, sy) {
  const cw = view.width, ch = view.height;
  const base = Math.max(cw / W, ch / H);
  const s = base * zoom;
  const ox = (cw - W * s) / 2 + panX, oy = (ch - H * s) / 2 + panY;
  return [(sx - ox) / s, (sy - oy) / s];
}
function draw() {
  const cw = view.width, ch = view.height;
  ctx2d.fillStyle = '#fff';
  ctx2d.fillRect(0, 0, cw, ch);
  if (!texImg.width) return;
  const [x, y] = mapToScreen(0, 0);
  const base = Math.max(cw / W, ch / H);
  const s = base * zoom;
  ctx2d.imageSmoothingEnabled = true;
  let src = texImg;
  if (mips.length > 1 && W * s < W) {
    let best = mips[0];
    for (const m of mips) { if (m.width >= W * s) best = m; }
    src = best;
  }
  if (src === texImg) ctx2d.drawImage(texImg, x, y, W * s, H * s);
  else ctx2d.drawImage(src, 0, 0, src.width, src.height, x, y, W * s, H * s);
}
function mapHit(e) {
  const r = stage.getBoundingClientRect();
  const dpr = view.width / r.width;
  const sx = (e.clientX - r.left) * dpr, sy = (e.clientY - r.top) * dpr;
  const [mx, my] = screenToMap(sx, sy);
  if (mx < 0 || my < 0 || mx >= W || my >= H) return null;
  return { u: mx / W, v: my / H, sx, sy };
}
function showTipHit(hit) {
  if (!hit) { tip.style.display = 'none'; return null; }
  const c = countryAt(hit.u, hit.v);
  if (!c) { tip.style.display = 'none'; return null; }
  const r = view.getBoundingClientRect();
  const sd = view.width / r.width;
  tip.textContent = (c.name || c[1]);
  tip.style.display = 'block';
  if (hit.sx !== undefined) {
    tip.style.left = (hit.sx / sd + 14) + 'px';
    tip.style.top = (hit.sy / sd - 10) + 'px';
  }
  return c;
}

// pointer events (shared by both modes for drag)
[view,gview].forEach(c => c.addEventListener('pointerdown', e => {
  dragging = true; moved = false; lastX = e.clientX; lastY = e.clientY;
  c.setPointerCapture(e.pointerId);
}));
[view,gview].forEach(c => c.addEventListener('pointerup', e => {
  const wasDrag = moved; dragging = false;
  if (!wasDrag) handleClick(e);
}));
[view,gview].forEach(c => c.addEventListener('pointermove', e => {
  if (dragging) {
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    if (Math.abs(dx) + Math.abs(dy) > 0) moved = true;
    if (MODE === 'map') {
      const dpr = view.width / view.getBoundingClientRect().width;
      panX += dx * dpr; panY += dy * dpr; draw();
    } else glPlus.drag(dx, dy);
  } else handleHover(e);
}));
[view,gview].forEach(c => c.addEventListener('wheel', e => {
  e.preventDefault();
  if (MODE === 'map') {
    const f = Math.exp(-e.deltaY * 0.0015);
    zoom = Math.min(12, Math.max(0.8, zoom * f));
    draw();
  } else glPlus.wheel(e.deltaY);
}, { passive: false }));

function handleClick(e) {
  if (MODE === 'map') {
    const hit = mapHit(e);
    if (!hit) return;
    const c = countryAt(hit.u, hit.v);
    if (c) showDetail(c);
  } else {
    const c = glPlus.hitCountry(e);
    if (c) showDetail(c);
  }
}
function handleHover(e) {
  if (MODE === 'map') {
    showTipHit(mapHit(e));
  } else {
    const c = glPlus.hitCountry(e, true);
    if (c) {
      const r = view.getBoundingClientRect();
      tip.textContent = c.name || c[1];
      tip.style.display = 'block';
      tip.style.left = (e.clientX - r.left + 14) + 'px';
      tip.style.top = (e.clientY - r.top - 10) + 'px';
    } else tip.style.display = 'none';
  }
}

// ---- globe (three.js renderer, 2D-canvas fallback) ----
const glPlus = (function () {
  let yaw = 0.6, pitch = 0.35, dist = 2.8, spinning = true;
  let mode = null; // 'three' | '2d'
  let ready = false, rafOn = false;
  const FOV = 45;

  // R = Rx(pitch) * Ry(yaw), row-major rows (same as group orientation)
  function rotRows() {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    return [
      [cy, 0, sy],
      [sp * sy, cp, -sp * cy],
      [-cp * sy, sp, cp * cy]
    ];
  }
  function localRay(ndcX, ndcY) {
    // camera at (0,0,dist), looking -z, fov FOV
    const ar = gview.width / gview.height, f = 1 / Math.tan(FOV * Math.PI / 360);
    const d = [ndcX * ar / f, ndcY / f, -1];
    const o = [0, 0, dist];
    const R = rotRows();
    // local = R^T * (world - 0); group rotation applied to local->world
    const ol = [
      R[0][0] * o[0] + R[1][0] * o[1] + R[2][0] * o[2],
      R[0][1] * o[0] + R[1][1] * o[1] + R[2][1] * o[2],
      R[0][2] * o[0] + R[1][2] * o[1] + R[2][2] * o[2]
    ];
    const dl = [
      R[0][0] * d[0] + R[1][0] * d[1] + R[2][0] * d[2],
      R[0][1] * d[0] + R[1][1] * d[1] + R[2][1] * d[2],
      R[0][2] * d[0] + R[1][2] * d[1] + R[2][2] * d[2]
    ];
    return { ol, dl };
  }
  function pickUV(ndcX, ndcY) {
    const { ol, dl } = localRay(ndcX, ndcY);
    const a = dl[0] * dl[0] + dl[1] * dl[1] + dl[2] * dl[2];
    const b = 2 * (ol[0] * dl[0] + ol[1] * dl[1] + ol[2] * dl[2]);
    const c = ol[0] * ol[0] + ol[1] * ol[1] + ol[2] * ol[2] - 1;
    const disc = b * b - 4 * a * c;
    if (disc < 0) return null;
    const t = (-b - Math.sqrt(disc)) / (2 * a);
    if (t < 0) return null;
    const px = ol[0] + t * dl[0], py = ol[1] + t * dl[1], pz = ol[2] + t * dl[2];
    const v = Math.acos(Math.max(-1, Math.min(1, py))) / Math.PI;
    const u = ((Math.atan2(pz, -px) / (2 * Math.PI)) + 1) % 1;
    return { u, v };
  }

  // ---------- three.js path ----------
  let T = null, renderer = null, scene = null, camera = null, group = null, mesh = null, texOwn = null;
  function initThree() {
    if (typeof THREE === 'undefined') throw new Error('three.js missing');
    // probe webgl on a throwaway canvas so a failure leaves gview free for 2D
    const probe = document.createElement('canvas');
    const pcx = probe.getContext('webgl') || probe.getContext('experimental-webgl');
    if (!pcx) throw new Error('no webgl');
    T = THREE;
    renderer = new T.WebGLRenderer({ canvas: gview, antialias: true });
    renderer.setClearColor(0xffffff, 1);
    scene = new T.Scene();
    camera = new T.PerspectiveCamera(FOV, gview.width / gview.height, 0.1, 50);
    camera.position.z = dist;
    group = new T.Group();
    scene.add(group);
    applyTexture();
    addSpinToGroup();
  }
  function applyTexture() {
    if (!mips.length) return; // texture attaches on refresh()
    if (texOwn) { texOwn.dispose(); texOwn = null; }
    texOwn = new T.CanvasTexture(mips[0]);
    texOwn.anisotropy = 1;
    if (mesh) { group.remove(mesh); mesh.geometry.dispose(); mesh.material.dispose(); mesh = null; }
    const geo = new T.SphereGeometry(1, 128, 64);
    const mat = new T.MeshBasicMaterial({ map: texOwn });
    mesh = new T.Mesh(geo, mat);
    group.add(mesh);
  }
  function addSpinToGroup() {
    const R = rotRows();
    const m4 = new T.Matrix4().set(
      R[0][0], R[0][1], R[0][2], 0,
      R[1][0], R[1][1], R[1][2], 0,
      R[2][0], R[2][1], R[2][2], 0,
      0, 0, 0, 1
    );
    group.quaternion.setFromRotationMatrix(m4);
  }
  function drawThree() {
    const w = gview.width, h = gview.height;
    if (renderer.domElement.width !== w) { renderer.setPixelRatio(1); renderer.setSize(w, h, false); }
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    camera.position.z = dist;
    addSpinToGroup();
    renderer.render(scene, camera);
  }

  // ---------- 2D fallback path ----------
  let c2 = null, g2 = null, srcData = null, SW = 0, SH = 0;
  function init2D() {
    c2 = gview.getContext('2d');
    if (!c2) throw new Error('no 2d ctx');
    const src = mips.length > 2 ? mips[2] : null;
    if (!src) return; // texture at refresh()
    loadSrc(src);
  }
  function loadSrc(src) {
    SW = src.width; SH = src.height;
    const tmp = document.createElement('canvas');
    tmp.width = SW; tmp.height = SH;
    tmp.getContext('2d').drawImage(src, 0, 0);
    srcData = tmp.getContext('2d').getImageData(0, 0, SW, SH).data;
  }
  function draw2D() {
    const w = gview.width, h = gview.height;
    c2.fillStyle = '#fff';
    c2.fillRect(0, 0, w, h);
    if (!srcData || !SW) return;
    const step = 2; // paint at half resolution
    const img = c2.createImageData(Math.ceil(w / step), Math.ceil(h / step));
    const iw = img.width, ih = img.height;
    const ar = w / h, f = 1 / Math.tan(FOV * Math.PI / 360);
    for (let y = 0; y < ih; y++) {
      const ndcY = 1 - 2 * (y / ih);
      for (let x = 0; x < iw; x++) {
        const ndcX = 2 * (x / iw) - 1;
        const p = pickUV(ndcX, ndcY);
        const o4 = (y * iw + x) * 4;
        if (!p) { img.data[o4] = 255; img.data[o4 + 1] = 255; img.data[o4 + 2] = 255; img.data[o4 + 3] = 255; continue; }
        const sx = Math.min(SW - 1, Math.floor(p.u * SW));
        const sy = Math.min(SH - 1, Math.floor(p.v * SH));
        const s4 = (sy * SW + sx) * 4;
        img.data[o4] = srcData[s4];
        img.data[o4 + 1] = srcData[s4 + 1];
        img.data[o4 + 2] = srcData[s4 + 2];
        img.data[o4 + 3] = 255;
      }
    }
    // blit scaled up
    const tmp = document.createElement('canvas');
    tmp.width = iw; tmp.height = ih;
    tmp.getContext('2d').putImageData(img, 0, 0);
    c2.imageSmoothingEnabled = true;
    c2.drawImage(tmp, 0, 0, w, h);
  }

  function draw() {
    if (mode === 'three') { try { drawThree(); } catch (e) { draw2D(); } }
    else if (mode === '2d') draw2D();
  }
  function raf() {
    if (MODE === 'globe') {
      if (spinning) yaw += 0.0016;
      draw();
    }
    requestAnimationFrame(raf);
  }

  function start() {
    if (!mode) {
      try { initThree(); mode = 'three'; ready = true; report('globe: three.js renderer'); }
      catch (e) {
        report('globe: webgl unavailable (' + (e.message || e) + '), using 2D fallback');
        try { mode = '2d'; init2D(); ready = true; }
        catch (e2) { report('globe failed entirely: ' + (e2.message || e2)); return; }
      }
    } else {
      refresh2();
    }
    if (!rafOn) { rafOn = true; raf(); }
  }
  function refresh2() {
    if (mode === 'three' && mips.length && T) {
      try { applyTexture(); } catch (e) { report('texture error: ' + e.message); }
    } else if (mode === '2d' && mips.length) {
      loadSrc(mips.length > 2 ? mips[2] : mips[mips.length - 1]);
    }
  }

  return {
    get ready() { return ready; },
    start,
    refresh: refresh2,
    draw,
    drag(dx, dy) {
      spinning = false;
      yaw += dx * 0.005;
      pitch = Math.max(-1.35, Math.min(1.35, pitch + dy * 0.005));
    },
    wheel(dy) {
      dist = Math.max(1.35, Math.min(5, dist * Math.exp(dy * 0.0012)));
    },
    focusOn(lat, lon) {
      spinning = false;
      yaw = Math.PI / 2 - (lon + 180) * Math.PI / 180;
      pitch = Math.max(-1.35, Math.min(1.35, lat * Math.PI / 180));
      dist = 1.7;
      draw();
    },
    hitCountry(e, hoverOnly) {
      if (!ready) return null;
      const r = gview.getBoundingClientRect();
      const ndcX = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ndcY = 1 - ((e.clientY - r.top) / r.height) * 2;
      const p = pickUV(ndcX, ndcY);
      if (!p) return null;
      return countryAt(p.u, p.v);
    }
  };
})();


// ---- map/globe mode switching ----
const mProdMap = document.getElementById('m-map'), mProdGlobe = document.getElementById('m-globe');
function setMode(m) {
  MODE = m;
  mProdMap.classList.toggle('on', m === 'map');
  mProdGlobe.classList.toggle('on', m === 'globe');
  document.getElementById('hint').textContent = m === 'map'
    ? 'Click a country for its song. Drag to pan, scroll to zoom.'
    : 'Click a country for its song. Drag to spin the globe, scroll to zoom.';
  view.style.display = (m === 'map') ? 'block' : 'none';
  gview.style.display = (m === 'globe') ? 'block' : 'none';
  if (m === 'globe') {
    try { glPlus.start(); report('globe ready: ' + glPlus.ready); }
    catch (err) { report('globe error: ' + err.message); }
  } else draw();
}
mProdMap.onclick = () => setMode('map');
mProdGlobe.onclick = () => setMode('globe');

// ---- tab pages ----
const tabs = document.querySelectorAll('.tab');
function showPage(name) {
  tabs.forEach(t => t.classList.toggle('active', t.dataset.page === name));
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === 'page-' + name));
  if (name === 'explore') requestAnimationFrame(() => { resize(); if (MODE === 'globe') glPlus.draw(); });
  else detail.style.display = 'none';
}
tabs.forEach(t => t.onclick = () => showPage(t.dataset.page));

// ---- playlist page (built from live data) ----
const plist = document.getElementById('plist');
function buildPlaylist() {
  plist.innerHTML = '';
  const rows = CURATED.slice().sort((a, b) => a[1].localeCompare(b[1]));
  for (const r of rows) {
    const li = document.createElement('li');
    const q = encodeURIComponent(r[4] + ' ' + r[5]);
    li.innerHTML = '<span class="flag">' + flag(r[0]) + '</span>'
      + '<span class="cname">' + r[1] + '</span>'
      + '<span class="song">' + r[4] + ' — ' + r[5] + '</span>'
      + (r[6] ? '<span class="genre">' + r[6] + '</span>' : '')
      + '<a target="_blank" rel="noopener" href="https://open.spotify.com/search/' + q + '">Spotify</a>';
    plist.appendChild(li);
  }
  if (!rows.length) plist.innerHTML = '<li class="muted">Nothing curated yet — check back soon.</li>';
  document.getElementById('about-count').textContent = CURATED.length;
  document.getElementById('more-count').textContent = CURATED.length;
  document.querySelectorAll('.page .total').forEach(el => el.textContent = COUNTRIES.length);
}
buildPlaylist();

// ---- surprise ----
document.getElementById('surprise').onclick = () => {
  if (!CURATED.length) return;
  showPage('explore');
  const r = CURATED[Math.floor(Math.random() * CURATED.length)];
  showDetail(r);
};

// ---- country dropdown: pick any country, the map focuses on it ----
function focusMap(lat, lon) {
  const cw = view.width, ch = view.height;
  const base = Math.max(cw / W, ch / H);
  zoom = 5;
  const s = base * zoom;
  const mx = (lon + 180) / 360 * W, my = (90 - lat) / 180 * H;
  panX = cw / 2 - mx * s - (cw - W * s) / 2;
  panY = ch / 2 - my * s - (ch - H * s) / 2;
  draw();
}
const cselect = document.getElementById('cselect');
COUNTRIES.slice().sort((a, b) => a[1].localeCompare(b[1])).forEach(r => {
  const o = document.createElement('option');
  o.value = r[0];
  o.textContent = flag(r[0]) + ' ' + r[1];
  cselect.appendChild(o);
});
cselect.onchange = () => {
  const iso2 = cselect.value;
  cselect.selectedIndex = 0;
  if (!iso2) return;
  const row = BY_ISO2[iso2];
  if (!row) return;
  showPage('explore');
  showDetail(row);
  if (MODE === 'map') focusMap(row[2], row[3]);
  else { try { glPlus.start(); glPlus.focusOn(row[2], row[3]); } catch (e) { report('globe error: ' + e.message); } }
};

// ---- boot ----
resize();
(async () => {
  await loadGrid();
  resize();
  setMode('globe');
})();
