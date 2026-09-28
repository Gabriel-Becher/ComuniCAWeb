const categories = [
  { id: 'essenciais', label: '☀️  Essenciais', eyebrow: 'DIA A DIA', cards: [['💧','Quero água'],['🍽️','Quero comer'],['🚻','Quero ir ao banheiro'],['🛏️','Quero descansar'],['🆘','Preciso de ajuda'],['⏸️','Quero uma pausa'],['🥶','Estou com frio'],['🥵','Estou com calor']] },
  { id: 'sentimentos', label: '💛  Sentimentos', eyebrow: 'COMO EU ME SINTO', cards: [['😊','Estou feliz'],['😟','Estou preocupado'],['😢','Estou triste'],['😣','Estou com dor'],['😌','Estou bem'],['😠','Estou irritado'],['😴','Estou cansado'],['🤗','Quero um abraço']] },
  { id: 'conversa', label: '💬  Conversa', eyebrow: 'VAMOS CONVERSAR', cards: [['👋','Olá!'],['🙏','Por favor'],['💚','Obrigado'],['✅','Sim'],['❌','Não'],['🔁','Repita, por favor'],['❓','Tenho uma pergunta'],['👂','Estou ouvindo']] },
  { id: 'escola', label: '📚  Escola', eyebrow: 'NA ESCOLA', cards: [['🙋','Quero falar'],['✏️','Preciso de um lápis'],['🤔','Não entendi'],['📖','Quero ler'],['🧑‍🏫','Preciso do professor'],['✅','Terminei a atividade'],['👀','Olhe para mim'],['🚪','Quero sair']] },
  { id: 'preferidos', label: '⭐  Meus cartões', eyebrow: 'FRASES PERSONALIZADAS', cards: [] }
];
const customKey = 'comunicaweb-custom-phrases';
let activeCategory = 'essenciais';
let selectedPhrases = [];
let toastTimer;
const $ = (selector) => document.querySelector(selector);
const categoriesEl = $('#categories');
const gridEl = $('#card-grid');

function getCustomPhrases() {
  try { return JSON.parse(localStorage.getItem(customKey) || '[]'); } catch { return []; }
}
function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('visible');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 2400);
}
function renderCategories() {
  categoriesEl.replaceChildren();
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.className = 'category-button'; button.type = 'button'; button.textContent = category.label;
    button.setAttribute('aria-pressed', String(category.id === activeCategory));
    button.addEventListener('click', () => { activeCategory = category.id; renderCategories(); renderCards(); });
    categoriesEl.append(button);
  });
}
function renderCards() {
  const category = categories.find((item) => item.id === activeCategory);
  const cards = activeCategory === 'preferidos'
    ? getCustomPhrases().map((phrase) => ['💬', phrase])
    : category.cards;
  $('#category-eyebrow').textContent = category.eyebrow;
  gridEl.replaceChildren();
  if (!cards.length) {
    const empty = document.createElement('p'); empty.className = 'empty-state';
    empty.textContent = 'Suas frases personalizadas aparecerão aqui. Adicione uma frase no campo abaixo.';
    gridEl.append(empty); return;
  }
  cards.forEach(([emoji, phrase]) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'phrase-card';
    button.setAttribute('aria-label', `Adicionar: ${phrase}`);
    const icon = document.createElement('span'); icon.className = 'card-emoji'; icon.setAttribute('aria-hidden', 'true'); icon.textContent = emoji;
    const label = document.createElement('span'); label.className = 'card-label'; label.textContent = phrase;
    button.append(icon, label);
    button.addEventListener('click', () => addPhrase(phrase));
    gridEl.append(button);
  });
}
function updateMessage() {
  const text = $('#message-text');
  text.textContent = selectedPhrases.length ? selectedPhrases.join(' ') : 'Sua mensagem aparece aqui…';
  text.classList.toggle('message-placeholder', !selectedPhrases.length);
  $('#speak-message').disabled = !selectedPhrases.length;
}
function addPhrase(phrase) {
  selectedPhrases.push(phrase); updateMessage();
  showToast(`“${phrase}” adicionada à mensagem`);
}
function speak(text) {
  if (!('speechSynthesis' in window)) { showToast('A leitura por voz não está disponível neste navegador.'); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR'; utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

renderCategories(); renderCards(); updateMessage();
$('#clear-message').addEventListener('click', () => { selectedPhrases = []; updateMessage(); showToast('Mensagem limpa'); });
$('#speak-message').addEventListener('click', () => speak(selectedPhrases.join(' ')));
$('#custom-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = $('#custom-phrase'); const phrase = input.value.trim();
  if (!phrase) return;
  const phrases = getCustomPhrases();
  if (phrases.some((item) => item.toLocaleLowerCase('pt-BR') === phrase.toLocaleLowerCase('pt-BR'))) {
    showToast('Essa frase já está na sua lista.'); return;
  }
  phrases.push(phrase); localStorage.setItem(customKey, JSON.stringify(phrases)); input.value = '';
  activeCategory = 'preferidos'; renderCategories(); renderCards(); showToast('Frase personalizada salva neste dispositivo.');
});
$('#contrast-toggle').addEventListener('click', (event) => {
  const active = document.body.classList.toggle('high-contrast');
  event.currentTarget.setAttribute('aria-pressed', String(active));
});
const settings = $('#settings-panel');
$('#settings-toggle').addEventListener('click', (event) => {
  settings.hidden = !settings.hidden; event.currentTarget.setAttribute('aria-expanded', String(!settings.hidden));
  if (!settings.hidden) $('#font-size').focus();
});
$('#settings-close').addEventListener('click', () => {
  settings.hidden = true; $('#settings-toggle').setAttribute('aria-expanded', 'false'); $('#settings-toggle').focus();
});
$('#font-size').addEventListener('input', (event) => {
  const value = Number(event.target.value); const labels = ['Pequeno', 'Normal', 'Grande'];
  document.body.classList.toggle('small-cards', value === 0); document.body.classList.toggle('large-cards', value === 2);
  $('#font-output').textContent = labels[value];
});
