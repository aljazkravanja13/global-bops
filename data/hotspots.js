// Non-country clickable areas: graphic elements drawn on the map, each with a song.
// Coordinates are the same equirect system as the rest of the map.
//   - rectangular area: lonMin / lonMax / latMin / latMax
//   - circular area:    lon / lat / radiusDeg
// Song fields: artist, title, genre, emoji (card + tooltip decoration).
// spotify: paste a direct open.spotify.com track/album/playlist URL here to get
// an embedded player in the card; leave it or set '' to fall back to a
// "Find on Spotify" search link.
window.HOTSPOTS = [
  { id: "whale", name: "The Whale", emoji: "\u{1F40B}",
    lonMin: 88, lonMax: 91, latMin: -52, latMax: -49,
    artist: "Gojira", title: "Flying Whales", genre: "Technical Death Metal", spotify: "" },
  { id: "submarine", name: "Yellow Submarine", emoji: "\u{1F7E1}",
    lonMin: -30, lonMax: -28, latMin: 52, latMax: 54,
    artist: "The Beatles", title: "Yellow Submarine", genre: "Classic Rock", spotify: "" },
  { id: "ripple", name: "Ripple Rock", emoji: "\u{1FAA8}",
    lon: -125.35, lat: 50.08, radiusDeg: 0.5,
    artist: "The Evaporators", title: "Ripple Rock", genre: "Egg Punk", spotify: "" }
];
