//  passive events 
let passiveSupported = false; try { window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function() { passiveSupported = true; } }));} catch(err) {}

//  scroll listener
addEventListener('scroll', e=> {
    const height =  document.querySelector('.parallax').getBoundingClientRect().height;
    const percentage = Math.min(Math.max(pageYOffset/height, 0),1);
    document.documentElement.style.setProperty('--pct',percentage);
}, passiveSupported ? { passive: true } : false)


