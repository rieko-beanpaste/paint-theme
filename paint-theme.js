'usestrict';
// おえかきのテーマ
const themes = [
    'せかいで　いちばん　おおきいもの　を　かこう！',
    'いちばん　すきな　たべもの　を　かこう！',
    'いまの　きもちを　あらわそう！',
    'はる　っぽいものを　かこう！',
    'なつ　っぽいものを　かこう！',
    'あき　っぽいものを　かこう！',
    'ふゆ　っぽいものを　かこう！',
    'おきにいりの　あいてむ　を　かこう！',
    'いま　いちばん　ほしいもの　を　かこう！'
];

document.getElementById("button").onclick = function(){
    let random = Math.floor(Math.random() * themes.length);
    document.getElementById("result").textContent = themes[random];
}


