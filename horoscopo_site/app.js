// === Utilidades ===
function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const fecha = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - fecha.getFullYear();
  const m = hoy.getMonth() - fecha.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < fecha.getDate())) edad--;
  return edad;
}

function signoZodiacal(d, m) {
  // m: 0-11
  const mm = m + 1, dd = d;
  if ((mm == 3 && dd >= 21) || (mm == 4 && dd <= 19)) return 'Aries';
  if ((mm == 4 && dd >= 20) || (mm == 5 && dd <= 20)) return 'Tauro';
  if ((mm == 5 && dd >= 21) || (mm == 6 && dd <= 20)) return 'Géminis';
  if ((mm == 6 && dd >= 21) || (mm == 7 && dd <= 22)) return 'Cáncer';
  if ((mm == 7 && dd >= 23) || (mm == 8 && dd <= 22)) return 'Leo';
  if ((mm == 8 && dd >= 23) || (mm == 9 && dd <= 22)) return 'Virgo';
  if ((mm == 9 && dd >= 23) || (mm == 10 && dd <= 22)) return 'Libra';
  if ((mm == 10 && dd >= 23) || (mm == 11 && dd <= 21)) return 'Escorpio';
  if ((mm == 11 && dd >= 22) || (mm == 12 && dd <= 21)) return 'Sagitario';
  if ((mm == 12 && dd >= 22) || (mm == 1 && dd <= 19)) return 'Capricornio';
  if ((mm == 1 && dd >= 20) || (mm == 2 && dd <= 18)) return 'Acuario';
  return 'Piscis';
}

function hashStr(str){
  // hash simple para determinismo
  let h = 2166136261;
  for (let i=0;i<str.length;i++){
    h ^= str.charCodeAt(i);
    h += (h<<1) + (h<<4) + (h<<7) + (h<<8) + (h<<24);
  }
  return h >>> 0;
}

function pseudoAleatorio(seed){
  let s = seed >>> 0;
  return function(){
    // xorshift32
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17; s >>>= 0;
    s ^= s << 5;  s >>>= 0;
    return (s >>> 0) / 4294967296;
  }
}

function pick(arr, rnd){
  return arr[Math.floor(rnd()*arr.length)];
}

// === Render ===
const form = document.getElementById('formHoroscope');
const resultado = document.getElementById('resultado');
const outNombre = document.getElementById('outNombre');
const outEdad = document.getElementById('outEdad');
const outSexo = document.getElementById('outSexo');
const outRasgos = document.getElementById('outRasgos');
const signSymbol = document.getElementById('signSymbol');
const signName = document.getElementById('signName');
const signRange = document.getElementById('signRange');
const diasContainer = document.getElementById('diasContainer');
const btnLimpiar = document.getElementById('btnLimpiar');
const signList = document.getElementById('signList');

// Llenar listado de signos en sidebar desde HOROSCOPE_DATA (archivo en data)
function poblarSidebar(){
  const signos = Object.keys(HOROSCOPE_DATA);
  signos.forEach(s => {
    const li = document.createElement('li');
    li.className = 'sign-item';
    li.innerHTML = `
      <span class="sign-chip">${HOROSCOPE_DATA[s].symbol}</span>
      <span class="sign-name">${s}</span>
      <span class="sign-range">${HOROSCOPE_DATA[s].dates}</span>`;
    li.addEventListener('click', () => mostrarSignoGenerico(s));
    signList.appendChild(li);
  });
}

function mostrarSignoGenerico(signo){
  const data = HOROSCOPE_DATA[signo];
  signSymbol.textContent = data.symbol;
  signName.textContent = signo;
  signRange.textContent = data.dates;
  outNombre.textContent = '—';
  outEdad.textContent = '—';
  outSexo.textContent = '—';
  outRasgos.textContent = data.traits.join(' · ');
  renderPronostico(signo, 'Demo', 'X', new Date());
  resultado.classList.remove('hidden');
  resultado.focus();
}

poblarSidebar();

// Persistencia ligera en localStorage
(function cargarGuardado(){
  const saved = JSON.parse(localStorage.getItem('horoscopoForm') || 'null');
  if(saved){
    document.getElementById('nombre').value = saved.nombre || '';
    document.getElementById('sexo').value = saved.sexo || '';
    document.getElementById('fecha').value = saved.fecha || '';
  }
})();

btnLimpiar.addEventListener('click', () => {
  localStorage.removeItem('horoscopoForm');
  form.reset();
  resultado.classList.add('hidden');
  diasContainer.innerHTML = '';
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const sexo = document.getElementById('sexo').value;
  const fechaStr = document.getElementById('fecha').value;
  if(!nombre || !sexo || !fechaStr) return;
  localStorage.setItem('horoscopoForm', JSON.stringify({nombre, sexo, fecha: fechaStr}));

  const fecha = new Date(fechaStr + 'T12:00:00'); // evitar TZ edge cases
  const edad = calcularEdad(fecha);
  const signo = signoZodiacal(fecha.getDate(), fecha.getMonth());
  const data = HOROSCOPE_DATA[signo];

  outNombre.textContent = nombre;
  outEdad.textContent = `${edad} años`;
  outSexo.textContent = sexo === 'F' ? 'Femenino' : (sexo === 'M' ? 'Masculino' : 'Prefiere no decir');
  outRasgos.textContent = data.traits.join(' · ');

  signSymbol.textContent = data.symbol;
  signName.textContent = signo;
  signRange.textContent = data.dates;

  renderPronostico(signo, nombre, sexo, fecha);
  resultado.classList.remove('hidden');
  resultado.scrollIntoView({behavior: 'smooth', block: 'start'});
});

function renderPronostico(signo, nombre, sexo, fechaBase){
  diasContainer.innerHTML = '';
  const data = HOROSCOPE_DATA[signo];
  const hoy = new Date();
  const seed = hashStr(`${signo}|${nombre}|${sexo}|${hoy.toISOString().slice(0,10)}`);
  const rng = pseudoAleatorio(seed);

  const dias = 7; // próximos 7 días
  for(let i=0;i<dias;i++){
    const d = new Date(hoy);
    d.setDate(hoy.getDate() + i + 1);
    const fechaLabel = d.toLocaleDateString('es-MX', {weekday:'long', day:'2-digit', month:'short'});

    const amor = pick(data.messages.amor, rng);
    const salud = pick(data.messages.salud, rng);
    const dinero = pick(data.messages.dinero, rng);
    const consejo = pick(data.messages.consejo, rng);

    const el = document.createElement('div');
    el.className = 'box day-card';
    el.innerHTML = `
      <h5>${fechaLabel}</h5>
      <div class="badges">
        <span class="badge">Amor</span>
        <span class="badge">Salud</span>
        <span class="badge">Dinero</span>
      </div>
      <p><strong>Amor:</strong> ${amor}</p>
      <p><strong>Salud:</strong> ${salud}</p>
      <p><strong>Dinero:</strong> ${dinero}</p>
      <p><em>Consejo:</em> ${consejo}</p>
    `;
    diasContainer.appendChild(el);
  }
}
