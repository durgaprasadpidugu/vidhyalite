const DATA = [
  { cls:'9', id:'telugu', name:'Telugu', tb:'https://ncert.nic.in/textbook/pdf/ietb1.pdf', guide:'https://ncert.nic.in/textbook/pdf/iegp1.pdf' },
  { cls:'9', id:'hindi', name:'Hindi', tb:'https://ncert.nic.in/textbook/pdf/khhb1.pdf', guide:'https://ncert.nic.in/textbook/pdf/khgp1.pdf' },
  { cls:'9', id:'english', name:'English', tb:'https://ncert.nic.in/textbook/pdf/keeb1.pdf', guide:'https://ncert.nic.in/textbook/pdf/kegp1.pdf' },
  { cls:'9', id:'maths', name:'Maths', tb:'https://ncert.nic.in/textbook/pdf/iemh1.pdf', guide:'https://ncert.nic.in/textbook/pdf/iemg1.pdf' },
  { cls:'9', id:'biology', name:'Biology', tb:'https://ncert.nic.in/textbook/pdf/ibob1.pdf', guide:'https://ncert.nic.in/textbook/pdf/ibog1.pdf' },
  { cls:'9', id:'physics', name:'Physics', tb:'https://ncert.nic.in/textbook/pdf/ipbh1.pdf', guide:'https://ncert.nic.in/textbook/pdf/ipbg1.pdf' },
  { cls:'9', id:'social', name:'Social', tb:'https://ncert.nic.in/textbook/pdf/issb1.pdf', guide:'https://ncert.nic.in/textbook/pdf/issg1.pdf' },
  { cls:'10', id:'telugu', name:'Telugu', tb:'https://ncert.nic.in/textbook/pdf/jetb1.pdf', guide:'https://ncert.nic.in/textbook/pdf/jegp1.pdf' },
  { cls:'10', id:'hindi', name:'Hindi', tb:'https://ncert.nic.in/textbook/pdf/jhhb1.pdf', guide:'https://ncert.nic.in/textbook/pdf/jhgp1.pdf' },
  { cls:'10', id:'english', name:'English', tb:'https://ncert.nic.in/textbook/pdf/jeeb1.pdf', guide:'https://ncert.nic.in/textbook/pdf/jegp1.pdf' },
  { cls:'10', id:'maths', name:'Maths', tb:'https://ncert.nic.in/textbook/pdf/jemh1.pdf', guide:'https://ncert.nic.in/textbook/pdf/jemg1.pdf' },
  { cls:'10', id:'biology', name:'Biology', tb:'https://ncert.nic.in/textbook/pdf/jbob1.pdf', guide:'https://ncert.nic.in/textbook/pdf/jbog1.pdf' },
  { cls:'10', id:'physics', name:'Physics', tb:'https://ncert.nic.in/textbook/pdf/jpbh1.pdf', guide:'https://ncert.nic.in/textbook/pdf/jpbg1.pdf' },
  { cls:'10', id:'social', name:'Social', tb:'https://ncert.nic.in/textbook/pdf/jssb1.pdf', guide:'https://ncert.nic.in/textbook/pdf/jssg1.pdf' }
];

const grid = document.getElementById('grid');
const q = document.getElementById('q');
const classFilter = document.getElementById('classFilter');
const reset = document.getElementById('reset');
const empty = document.getElementById('empty');

function render(list){
  grid.innerHTML = '';
  if(!list.length){ empty.style.display='block'; return; } else empty.style.display='none';
  for(const item of list){
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3>${item.name} <span style="float:right;font-size:13px;color:#666">Class ${item.cls}</span></h3>
      <div class="links">
        <a href="${item.tb}" target="_blank" rel="noopener">📖 Textbook</a>
        <a href="${item.guide}" target="_blank" rel="noopener">📝 Guide</a>
      </div>`;
    grid.appendChild(card);
  }
}

function applyFilters(){
  const term = q.value.trim().toLowerCase();
  const cls = classFilter.value;
  const filtered = DATA.filter(d=>{
    if(cls && d.cls!==cls) return false;
    if(!term) return true;
    return (d.name + ' ' + d.id + ' ' + d.cls).toLowerCase().includes(term);
  });
  render(filtered);
}

q.addEventListener('input', applyFilters);
classFilter.addEventListener('change', applyFilters);
reset.addEventListener('click', ()=>{ q.value=''; classFilter.value=''; applyFilters(); });

applyFilters();
