// Butterfly image SVG
const butterflySVG = `
  <svg viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="16" rx="12" ry="16" fill="#fed6f2"/>
    <ellipse cx="36" cy="16" rx="12" ry="16" fill="#c9f5cb"/>
    <ellipse cx="24" cy="39" rx="6" ry="5" fill="#ffba98"/>
    <rect x="22" y="14" width="4" height="20" rx="2" fill="#6b0049"/>
    <ellipse cx="24" cy="11" rx="5" ry="4" fill="#fa9eff"/>
    <ellipse cx="10" cy="5" rx="5" ry="2" fill="#6b0049" opacity="0.3"/>
    <ellipse cx="38" cy="5" rx="5" ry="2" fill="#6b0049" opacity="0.3"/>
  </svg>
`;

function randomButterfly(i) {
  const el = document.createElement('div');
  el.className = 'butterfly';
  el.style.left = Math.random()*98 + 'vw';
  el.style.top = (Math.random()*80+5) + 'vh';
  el.style.animationDuration = `${4.5 + Math.random()*2.5}s`;
  el.style.transform += ` rotate(${Math.random()*360}deg) scale(${0.85 + Math.random()*0.4})`;
  el.style.zIndex = 0;
  el.innerHTML = butterflySVG;
  return el;
}

// Generate 15 butterflies
for(let i=0; i<15; i++) {
  document.body.appendChild(randomButterfly(i));
}
