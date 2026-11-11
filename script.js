
"use strict";

// ==========================================
// IT BILIMDONI
// Muallif: Akramjonova Jadra Maratovna
// ==========================================

// SAVOLLAR BAZASI
const questions = [
  // PYTHON
  {
    id: 1, category: "Python", difficulty: "expert",
    q: "Python'da generator funksiyasi yield orqali qiymat qaytarganda, uning bajarilishi qanday davom etadi?",
    options: [
      "Funksiya butunlay tugaydi",
      "Keyingi next() chaqirig'ida yield dan keyingi joydan davom etadi",
      "Funksiya qayta boshidan boshlanadi",
      "Faqat oxirgi qiymat xotirada saqlanadi"
    ],
    answer: 1,
    accepted: ["yield dan keyin davom etadi", "keyingi next chaqirigida davom etadi"],
    explanation: "Generator yield nuqtasida o'z holatini saqlaydi va keyingi next() chaqirig'ida shu nuqtadan davom etadi."
  },
  {
    id: 2, category: "Python", difficulty: "olympiad",
    q: "Python'da mutable obyekt default argument sifatida ishlatilganda qanday xavf yuzaga keladi?",
    options: [
      "Har chaqiriqda yangi obyekt yaratiladi",
      "Obyekt faqat funksiya tugaganda o'chadi",
      "Bir xil obyekt chaqiriqlar orasida qayta ishlatiladi",
      "Funksiya avtomatik async bo'ladi"
    ],
    answer: 2,
    accepted: ["bir xil obyekt qayta ishlatiladi", "obyekt chaqiriqlar orasida saqlanadi"],
    explanation: "Default argumentlar funksiya aniqlangan paytda bir marta yaratiladi. Mutable obyektga kiritilgan o'zgarishlar keyingi chaqiriqlarda ham saqlanadi."
  },
  {
    id: 3, category: "Python", difficulty: "expert",
    q: "Python'da descriptor protokoli qaysi metodlar orqali amalga oshiriladi?",
    options: [
      "__iter__, __next__, __call__",
      "__get__, __set__, __delete__",
      "__init__, __str__, __repr__",
      "__enter__, __exit__, __del__"
    ],
    answer: 1,
    accepted: ["__get__ __set__ __delete__"],
    explanation: "Descriptor protokoli __get__, __set__ va __delete__ metodlariga asoslanadi."
  },
  {
    id: 4, category: "Python", difficulty: "olympiad",
    q: "Python'da metaclassning asosiy vazifasi nima?",
    options: [
      "Obyektlarni avtomatik o'chirish",
      "Sinflarning yaratilish jarayonini boshqarish",
      "Faqat xotirani tozalash",
      "Funksiyalarni parallel bajarish"
    ],
    answer: 1,
    accepted: ["sinflarning yaratilish jarayonini boshqarish"],
    explanation: "Metaclass — sinflarni yaratish va ularning xatti-harakatlarini boshqarish mexanizmi."
  },
  {
    id: 5, category: "Python", difficulty: "expert",
    q: "Python'da __slots__ ishlatilishining asosiy sabablaridan biri nima?",
    options: [
      "Har bir obyekt uchun avtomatik thread ochish",
      "Obyekt atributlarini cheklash va ayrim holatlarda xotirani tejash",
      "Barcha metodlarni static qilish",
      "Funksiyani generatorga aylantirish"
    ],
    answer: 1,
    accepted: ["atributlarni cheklash", "xotirani tejash"],
    explanation: "__slots__ obyekt atributlarini cheklashi va ayrim holatlarda __dict__ yaratmaslik orqali xotirani tejashi mumkin."
  },

  // C++
  {
    id: 6, category: "C++", difficulty: "expert",
    q: "C++ da std::move qanday ishlaydi?",
    options: [
      "Obyektni darhol boshqa xotira manziliga ko'chiradi",
      "Obyektni const qiladi",
      "Qiymatni rvalue sifatida uzatishga imkon beradi",
      "Obyektni nusxalashni butunlay taqiqlaydi"
    ],
    answer: 2,
    accepted: ["rvalue sifatida uzatadi", "rvalue ga aylantiradi"],
    explanation: "std::move obyektning o'zini ko'chirmaydi. U ifodani rvalue sifatida uzatib, move semantics ishlashiga imkon beradi."
  },
  {
    id: 7, category: "C++", difficulty: "olympiad",
    q: "C++ da virtual destruktor qachon ayniqsa muhim?",
    options: [
      "Oddiy int o'zgaruvchida",
      "Bazaviy sinf ko'rsatkichi orqali hosila sinf obyektini o'chirishda",
      "Har bir static funksiyada",
      "Faqat konstruktor ichida"
    ],
    answer: 1,
    accepted: ["bazaviy sinf ko'rsatkichi orqali", "hosila sinf obyektini o'chirishda"],
    explanation: "Polimorfizmda bazaviy sinf ko'rsatkichi orqali hosila obyekt o'chirilganda virtual destruktor to'g'ri destruksiya zanjirini ta'minlaydi."
  },
  {
    id: 8, category: "C++", difficulty: "expert",
    q: "C++ da undefined behavior nimani anglatadi?",
    options: [
      "Dastur har doim xato beradi",
      "Standart bajarilish natijasini belgilamaydi",
      "Kompilyator dasturni doim rad etadi",
      "Faqat runtime exception yuz beradi"
    ],
    answer: 1,
    accepted: ["standart bajarilish natijasini belgilamaydi"],
    explanation: "Undefined behavior holatida C++ standarti dastur natijasi yoki xatti-harakatini kafolatlamaydi."
  },
  {
    id: 9, category: "C++", difficulty: "olympiad",
    q: "C++ da std::unique_ptr ning asosiy xususiyati nima?",
    options: [
      "Bir nechta mustaqil egaga ega bo'lish",
      "Yagona egalik asosidagi avtomatik xotira boshqaruvi",
      "Faqat stack xotirasida ishlash",
      "Obyektni nusxalashni avtomatik bajarish"
    ],
    answer: 1,
    accepted: ["yagona egalik", "unique ownership"],
    explanation: "unique_ptr resursga yagona egalik qiladi va scope tugaganda uni avtomatik bo'shatadi."
  },

  // JAVA
  {
    id: 10, category: "Java", difficulty: "expert",
    q: "Java Memory Model'da happens-before munosabati nimani ifodalaydi?",
    options: [
      "Obyektlarning yaratilish tartibini",
      "Threadlar orasidagi ko'rinish va tartib kafolatini",
      "GC ishlash tezligini",
      "JVM xotirasining hajmini"
    ],
    answer: 1,
    accepted: ["threadlar orasidagi ko'rinish", "bajarilish tartibi kafolati"],
    explanation: "Happens-before bir threaddagi amallar natijalarining boshqa threadga ko'rinishi va bajarilish tartibiga oid kafolatlarni belgilaydi."
  },
  {
    id: 11, category: "Java", difficulty: "olympiad",
    q: "Java'da volatile kalit so'zi nimani ta'minlaydi?",
    options: [
      "Barcha amallarni atomik qiladi",
      "O'zgaruvchining threadlar orasida ko'rinishini va tegishli tartib kafolatini",
      "Har qanday deadlockni bartaraf etadi",
      "Obyektni immutable qiladi"
    ],
    answer: 1,
    accepted: ["threadlar orasida ko'rinish", "ko'rinish va tartib kafolati"],
    explanation: "volatile ko'rinish va tartib kafolatlarini beradi, ammo i++ kabi murakkab amallarni atomik qilmaydi."
  },
  {
    id: 12, category: "Java", difficulty: "expert",
    q: "Java'da type erasure nimaga olib keladi?",
    options: [
      "Generic tiplar runtime'da to'liq saqlanadi",
      "Generic tip parametrlarining ko'p qismi kompilyatsiyadan keyin o'chiriladi",
      "Barcha obyektlar primitive bo'ladi",
      "JVM genericsni qo'llab-quvvatlamaydi"
    ],
    answer: 1,
    accepted: ["generic tip parametrlarining o'chirilishi"],
    explanation: "Java generics asosan kompilyatsiya vaqtida tekshiriladi va type erasure orqali runtime ko'rinishi o'zgaradi."
  },

  // KOTLIN
  {
    id: 13, category: "Kotlin", difficulty: "expert",
    q: "Kotlin'da suspend funksiyani oddiy funksiya sifatida istalgan joyda chaqirish mumkinmi?",
    options: [
      "Ha, har doim",
      "Yo'q, coroutine yoki boshqa suspend kontekst kerak",
      "Faqat main() ichida",
      "Faqat Android Activity ichida"
    ],
    answer: 1,
    accepted: ["coroutine kontekst kerak", "suspend kontekst kerak"],
    explanation: "Suspend funksiya coroutine yoki boshqa suspend funksiyadan chaqirilishi kerak."
  },
  {
    id: 14, category: "Kotlin", difficulty: "olympiad",
    q: "Kotlin'da StateFlow va SharedFlow o'rtasidagi muhim farq qaysi?",
    options: [
      "StateFlow doimiy joriy qiymatga ega, SharedFlow esa umumiy hodisalarni uzatishi mumkin",
      "Ikkalasi faqat fayl bilan ishlaydi",
      "SharedFlow faqat bitta qiymat saqlaydi",
      "StateFlow faqat Java'da ishlaydi"
    ],
    answer: 0,
    accepted: ["stateflow joriy qiymatga ega"],
    explanation: "StateFlow doim joriy state qiymatiga ega. SharedFlow esa replay va buffer sozlamalari bilan hodisalarni uzatishi mumkin."
  },

  // JAVASCRIPT
  {
    id: 15, category: "JavaScript", difficulty: "expert",
    q: "JavaScript event loop'da Promise.then callback qaysi navbatda bajariladi?",
    options: [
      "Macrotask navbatida",
      "Microtask navbatida",
      "Call stack ichida darhol",
      "Rendering navbatida"
    ],
    answer: 1,
    accepted: ["microtask navbatida", "microtask"],
    explanation: "Promise.then callbacklari microtask queue ga joylanadi va joriy stack bo'shagach bajariladi."
  },
  {
    id: 16, category: "JavaScript", difficulty: "olympiad",
    q: "JavaScript'da closure nimani anglatadi?",
    options: [
      "Funksiyaning faqat tashqi ko'rinishini",
      "Funksiyaning o'z leksik muhitidagi o'zgaruvchilarga kirish imkonini saqlashi",
      "Obyektni muzlatish",
      "DOM elementlarini o'chirish"
    ],
    answer: 1,
    accepted: ["leksik muhitidagi o'zgaruvchilarga kirish"],
    explanation: "Closure funksiya yaratilgan leksik muhitga murojaatini saqlaydi."
  },
  {
    id: 17, category: "JavaScript", difficulty: "expert",
    q: "JavaScript'da Object.freeze() qaysi xususiyatni ta'minlaydi?",
    options: [
      "Obyektni chuqur muzlatadi",
      "Obyektning o'z darajasidagi xususiyatlarini o'zgartirishni cheklaydi",
      "Obyektni JSON ga aylantiradi",
      "Obyektni xotiradan o'chiradi"
    ],
    answer: 1,
    accepted: ["o'z darajasidagi xususiyatlarini o'zgartirishni cheklaydi"],
    explanation: "Object.freeze() shallow ishlaydi: ichki obyektlar alohida muzlatilmagan bo'lsa, ularning xususiyatlari o'zgarishi mumkin."
  },
  {
    id: 18, category: "JavaScript", difficulty: "olympiad",
    q: "JavaScript'da Promise.all() metodida bitta Promise reject bo'lsa nima yuz beradi?",
    options: [
      "Barcha Promise natijalari alohida qaytariladi",
      "Umumiy Promise reject bo'ladi",
      "Faqat oxirgi Promise bajariladi",
      "Xatolik avtomatik e'tiborsiz qoldiriladi"
    ],
    answer: 1,
    accepted: ["umumiy promise reject bo'ladi"],
    explanation: "Promise.all barcha Promise muvaffaqiyatli bajarilgandagina natijalar massivini beradi. Bittasi reject bo'lsa, umumiy Promise reject bo'ladi."
  },

  // ALGORITMLAR
  {
    id: 19, category: "Algorithms", difficulty: "expert",
    q: "Dijkstra algoritmi manfiy vaznli qirralar mavjud grafda nega ishonchli ishlamaydi?",
    options: [
      "Graf yo'naltirilmagan bo'lgani uchun",
      "Yakuniy deb belgilangan masofa keyinchalik kamayishi mumkinligi uchun",
      "Grafda sikl bo'lgani uchun",
      "Faqat daraxtlarda ishlagani uchun"
    ],
    answer: 1,
    accepted: ["masofa keyinchalik kamayishi", "manfiy vaznli qirralar"],
    explanation: "Dijkstra algoritmi masofalar faqat oshishi haqidagi xususiyatga tayanadi. Manfiy qirralar bu xususiyatni buzadi."
  },
  {
    id: 20, category: "Algorithms", difficulty: "olympiad",
    q: "Amortized analysis nimani o'rganadi?",
    options: [
      "Bitta eng yomon bajarilish holatini",
      "Amallar ketma-ketligidagi xarajatning kafolatlangan chegarasini",
      "Faqat xotira hajmini",
      "Faqat parallel algoritmlarni"
    ],
    answer: 1,
    accepted: ["amallar ketma-ketligidagi xarajat", "ketma-ket amallar xarajati"],
    explanation: "Amortized analysis bitta amal emas, balki amallar ketma-ketligidagi xarajatni tahlil qiladi."
  },
  {
    id: 21, category: "Algorithms", difficulty: "expert",
    q: "Dinamik dasturlashning optimal substructure xususiyati nimani bildiradi?",
    options: [
      "Masalaning optimal yechimi kichik masalalarning optimal yechimlariga tayanadi",
      "Barcha masalalar greedy bilan yechiladi",
      "Har bir algoritm O(1) bo'ladi",
      "Grafda faqat bitta yo'l mavjud"
    ],
    answer: 0,
    accepted: ["kichik masalalarning optimal yechimlariga tayanadi"],
    explanation: "Optimal substructure — katta masalaning optimal yechimini kichik masalalarning optimal yechimlari orqali qurish mumkinligini bildiradi."
  },
  {
    id: 22, category: "Algorithms", difficulty: "olympiad",
    q: "Hash jadvalning o'rtacha qidiruv murakkabligi odatda qanday?",
    options: ["O(log n)", "O(n log n)", "O(1)", "O(n²)"],
    answer: 2,
    accepted: ["o(1)", "constant time"],
    explanation: "Yaxshi hash funksiyasi va mos load factor sharoitida o'rtacha qidiruv O(1), eng yomon holatda O(n) bo'lishi mumkin."
  },

  // DATABASE
  {
    id: 23, category: "Database", difficulty: "expert",
    q: "Database'dagi ACID xususiyatlaridan Isolation nimani anglatadi?",
    options: [
      "Ma'lumotlarni shifrlash",
      "Parallel tranzaksiyalar bir-biriga ta'sirini belgilangan darajada cheklashi",
      "Zaxira nusxa yaratish",
      "Serverni avtomatik qayta ishga tushirish"
    ],
    answer: 1,
    accepted: ["parallel tranzaksiyalar bir-biriga ta'sirini cheklashi"],
    explanation: "Isolation parallel tranzaksiyalar bajarilishidagi o'zaro ta'sir va ko'rinish qoidalarini belgilaydi."
  },
  {
    id: 24, category: "Database", difficulty: "olympiad",
    q: "B-tree indekslarining asosiy afzalligi nimada?",
    options: [
      "Faqat matnli ma'lumotlarni saqlash",
      "Tartiblangan qidiruv va diapazon so'rovlarini samarali bajarish",
      "Barcha yozuvlarni RAMda saqlash",
      "Tranzaksiyalarni avtomatik bekor qilish"
    ],
    answer: 1,
    accepted: ["diapazon so'rovlarini samarali bajarish"],
    explanation: "B-tree indekslari tartiblangan ma'lumotlar bo'yicha qidiruv, diapazon so'rovlari va saralashda foydali."
  },

  // KIBERXAVFSIZLIK
  {
    id: 25, category: "Security", difficulty: "expert",
    q: "SHA-256 algoritmi qanday turdagi kriptografik algoritm?",
    options: [
      "Simmetrik shifrlash",
      "Assimetrik shifrlash",
      "Kriptografik xesh funksiyasi",
      "Raqamli imzo algoritmi"
    ],
    answer: 2,
    accepted: ["kriptografik xesh funksiyasi", "hash function"],
    explanation: "SHA-256 — 256 bitli natija hosil qiladigan kriptografik xesh funksiyasi."
  },
  {
    id: 26, category: "Security", difficulty: "olympiad",
    q: "TLS sertifikatining asosiy vazifalaridan biri nima?",
    options: [
      "Foydalanuvchi parolini saqlash",
      "Server identifikatorini ochiq kalit bilan bog'lash va ishonchni tekshirish",
      "Internet tezligini oshirish",
      "IP manzilni yashirish"
    ],
    answer: 1,
    accepted: ["server identifikatorini ochiq kalit bilan bog'lash"],
    explanation: "TLS sertifikati server identifikatorini ochiq kalit bilan bog'laydi va sertifikat zanjiri orqali tekshiriladi."
  },
  {
    id: 27, category: "Security", difficulty: "expert",
    q: "SQL Injection zaifligidan himoyalanishning eng asosiy usullaridan biri qaysi?",
    options: [
      "SQL so'rovlarini rasmga aylantirish",
      "Parameterized queries ishlatish",
      "Ma'lumotlar bazasini internetdan uzish har doim",
      "Parolni HTML ichida saqlash"
    ],
    answer: 1,
    accepted: ["parameterized queries", "parametrli so'rovlar"],
    explanation: "Parametrli so'rovlar foydalanuvchi kiritgan ma'lumotni SQL kodidan ajratib turadi."
  },

  // KOMPYUTER ARXITEKTURASI
  {
    id: 28, category: "Architecture", difficulty: "expert",
    q: "CPU cache'dagi spatial locality nimani anglatadi?",
    options: [
      "Yaqinda ishlatilgan ma'lumot yana ishlatilishi",
      "Yaqin xotira manzillaridagi ma'lumotlardan foydalanish ehtimoli",
      "CPU chastotasining oshishi",
      "RAM hajmining ko'payishi"
    ],
    answer: 1,
    accepted: ["yaqin xotira manzillaridagi ma'lumotlardan foydalanish"],
    explanation: "Spatial locality yaqin xotira manzillaridagi ma'lumotlarga murojaat qilish ehtimoli yuqoriligini bildiradi."
  },
  {
    id: 29, category: "Architecture", difficulty: "olympiad",
    q: "TLB ning vazifasi nima?",
    options: [
      "CPU haroratini o'lchash",
      "Virtual manzildan fizik manzilga o'girish natijalarini keshlash",
      "Diskni defragmentatsiya qilish",
      "Tarmoq paketlarini shifrlash"
    ],
    answer: 1,
    accepted: ["virtual manzildan fizik manzilga o'girish natijalarini keshlash"],
    explanation: "Translation Lookaside Buffer virtual xotira manzillarining fizik manzillarga tarjimasini keshlaydi."
  },

  // SUN'IY INTELLEKT
  {
    id: 30, category: "AI", difficulty: "expert",
    q: "Transformer arxitekturasidagi self-attention mexanizmining asosiy vazifasi nima?",
    options: [
      "Matnni faqat alfavit bo'yicha saralash",
      "Ketma-ketlikdagi elementlar o'rtasidagi bog'liqlikni hisoblash",
      "Faqat tasvirlarni siqish",
      "Model xotirasini avtomatik o'chirish"
    ],
    answer: 1,
    accepted: ["elementlar o'rtasidagi bog'liqlikni hisoblash", "tokenlar o'rtasidagi bog'liqlik"],
    explanation: "Self-attention tokenlarning bir-biriga nisbatan ahamiyatini hisoblab, kontekstni shakllantiradi."
  },
  {
    id: 31, category: "AI", difficulty: "olympiad",
    q: "Machine learning'da overfitting nimani anglatadi?",
    options: [
      "Model o'qitish ma'lumotlariga juda moslashib, yangi ma'lumotlarda yomon ishlashi",
      "Model umuman o'rganmasligi",
      "Ma'lumotlar bazasi buzilishi",
      "Model hajmining kichikligi"
    ],
    answer: 0,
    accepted: ["o'qitish ma'lumotlariga ortiqcha moslashish"],
    explanation: "Overfitting modelning o'quv ma'lumotlariga ortiqcha moslashishi va umumlashtirish qobiliyatining pasayishidir."
  },
  {
    id: 32, category: "AI", difficulty: "expert",
    q: "Gradient descent algoritmida learning rate juda katta tanlansa nima yuz berishi mumkin?",
    options: [
      "Model doim optimal yechimga yetadi",
      "Optimallashtirish optimal nuqtadan oshib ketishi yoki beqaror bo'lishi mumkin",
      "Gradient avtomatik nol bo'ladi",
      "Model barcha ma'lumotlarni o'chiradi"
    ],
    answer: 1,
    accepted: ["optimal nuqtadan oshib ketishi", "optimallashtirish beqaror bo'lishi"],
    explanation: "Juda katta learning rate optimallashtirish jarayonini beqarorlashtirishi yoki minimumdan uzoqlashtirishi mumkin."
  }
];

// ==========================================
// O'YIN SOZLAMALARI
// ==========================================

const MAX_QUESTIONS = 10;
const TIME_LIMIT = 45;

let gameQuestions = [];
let current = 0;
let totalQuestions = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let seconds = TIME_LIMIT;
let timer = null;
let answered = false;
let history = [];
let usedQuestions = new Set();

// ==========================================
// YORDAMCHI FUNKSIYALAR
// ==========================================

const $ = id => document.getElementById(id);

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  $(id).classList.add("active");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[‘’`']/g, "'")
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ");
}

// ==========================================
// NATIJANI SAQLASH
// ==========================================

function updateBest() {
  const best = Number(
    localStorage.getItem("itBilimdonBest") || 0
  );

  $("bestScore").textContent = best;
}

// ==========================================
// MUSOBAQANI BOSHLASH
// ==========================================

function startGame() {
  clearInterval(timer);

  const difficulty = $("difficulty").value;
  const category = $("category").value;

  const pool = questions.filter(q => {
    const difficultyMatch =
      difficulty === "all" || q.difficulty === difficulty;

    const categoryMatch =
      category === "all" || q.category === category;

    return difficultyMatch && categoryMatch;
  });

  if (pool.length === 0) {
    alert("Bu yo'nalishda savollar topilmadi!");
    return;
  }

  // Oldin ishlatilmagan savollar
  let freshQuestions = pool.filter(q => !usedQuestions.has(q.id));

  // Savollar tugagan bo'lsa, yangi aylanish
  if (freshQuestions.length < Math.min(MAX_QUESTIONS, pool.length)) {
    pool.forEach(q => usedQuestions.delete(q.id));
    freshQuestions = [...pool];
  }

  totalQuestions = Math.min(MAX_QUESTIONS, freshQuestions.length);

  gameQuestions = shuffle(freshQuestions).slice(0, totalQuestions);

  gameQuestions.forEach(q => usedQuestions.add(q.id));

  current = 0;
  score = 0;
  correct = 0;
  wrong = 0;
  history = [];

  $("score").textContent = score;

  showScreen("game");
  loadQuestion();
}

// ==========================================
// SAVOLNI YUKLASH
// ==========================================

function loadQuestion() {
  clearInterval(timer);

  answered = false;
  seconds = TIME_LIMIT;

  const q = gameQuestions[current];

  // JAVOB VARIANTLARINI TASODIFIY ARALASHTIRISH
  const shuffledOptions = shuffle(
    q.options.map((text, originalIndex) => ({
      text,
      originalIndex
    }))
  );

  q.displayOptions = shuffledOptions;

  // To'g'ri javobning yangi indeksini topish
  q.correctDisplayIndex = shuffledOptions.findIndex(
    option => option.originalIndex === q.answer
  );

  $("currentNumber").textContent = current + 1;
  $("game").querySelector(".game-top h2 small").textContent =
    ` / ${totalQuestions}`;

  $("progress").style.width =
    `${(current / totalQuestions) * 100}%`;

  $("questionCategory").textContent = q.category.toUpperCase();

  $("questionDifficulty").textContent =
    q.difficulty === "expert" ? "EKSPERT" : "OLIMPIADA";

  $("questionText").textContent = q.q;

  $("feedback").className = "feedback hidden";
  $("nextBtn").classList.add("hidden");
  $("otherBtn").classList.remove("hidden");
  $("customArea").classList.add("hidden");

  $("customInput").value = "";
  $("customInput").disabled = false;
  $("customSubmit").disabled = false;

  $("timer").textContent = seconds;
  $("timer").parentElement.classList.remove("warning");

  const optionsContainer = $("options");
  optionsContainer.innerHTML = "";

  // A, B, C, D variantlar
  shuffledOptions.forEach((option, index) => {
    const button = document.createElement("button");

    button.className = "option";

    button.textContent =
      `${String.fromCharCode(65 + index)}. ${option.text}`;

    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    optionsContainer.appendChild(button);
  });

  // VAQT HISOBLAGICHI
  timer = setInterval(() => {
    seconds--;

    $("timer").textContent = seconds;

    if (seconds <= 10) {
      $("timer").parentElement.classList.add("warning");
    }

    if (seconds <= 0) {
      clearInterval(timer);
      checkAnswer(-1, "Vaqt tugadi");
    }
  }, 1000);
}

// ==========================================
// FOYDALANUVCHI JAVOBINI TEKSHIRISH
// ==========================================

function isAccepted(value, question) {
  const userAnswer = normalizeText(value);

  if (!userAnswer) return false;

  return question.accepted.some(answer => {
    return userAnswer === normalizeText(answer);
  });
}

// ==========================================
// JAVOBNI TEKSHIRISH
// ==========================================

function checkAnswer(index, customText = null) {
  if (answered) return;

  answered = true;
  clearInterval(timer);

  const q = gameQuestions[current];

  const buttons = [...document.querySelectorAll(".option")];

  let isCorrect;

  if (customText !== null) {
    isCorrect = isAccepted(customText, q);
  } else {
    isCorrect = index === q.correctDisplayIndex;
  }

  // Variantlarni ranglash
  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === q.correctDisplayIndex) {
      button.classList.add("correct");
    }

    if (i === index && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  // BALL HISOBLASH
  const earned = isCorrect ? 10 + seconds : 0;

  if (isCorrect) {
    correct++;
    score += earned;
  } else {
    wrong++;
  }

  $("score").textContent = score;

  // JAVOBLAR
  const userAnswer =
    customText !== null
      ? customText
      : index >= 0
        ? q.displayOptions[index].text
        : "Javob berilmadi";

  const correctAnswer =
    q.displayOptions[q.correctDisplayIndex].text;

  // NATIJANI KO'RSATISH
  const feedback = $("feedback");

  feedback.className =
    `feedback ${isCorrect ? "success" : "error"}`;

  feedback.innerHTML = `
    <strong>
      ${
        isCorrect
          ? "✓ TO'G'RI JAVOB! +" + earned + " BALL"
          : "✕ NOTO'G'RI JAVOB"
      }
    </strong>

    <p>
      To'g'ri javob:
      <strong>${escapeHTML(correctAnswer)}</strong>
    </p>

    <p>${escapeHTML(q.explanation)}</p>
  `;

  // TARIXGA YOZISH
  history.push({
    question: q.q,
    userAnswer,
    correctAnswer,
    isCorrect,
    explanation: q.explanation
  });

  $("otherBtn").classList.add("hidden");
  $("customArea").classList.add("hidden");

  $("nextBtn").classList.remove("hidden");

  $("nextBtn").textContent =
    current === totalQuestions - 1
      ? "NATIJANI KO'RISH →"
      : "KEYINGI SAVOL →";

  $("customInput").disabled = true;
  $("customSubmit").disabled = true;
}

// ==========================================
// KEYINGI SAVOL
// ==========================================

function nextQuestion() {
  if (!answered) return;

  current++;

  if (current < totalQuestions) {
    loadQuestion();
  } else {
    finishGame();
  }
}

// ==========================================
// MUSOBAQANI YAKUNLASH
// ==========================================

function finishGame() {
  clearInterval(timer);

  showScreen("result");

  const percent = Math.round(
    (correct / totalQuestions) * 100
  );

  const best = Number(
    localStorage.getItem("itBilimdonBest") || 0
  );

  if (score > best) {
    localStorage.setItem("itBilimdonBest", score);
  }

  $("finalScore").textContent = score;
  $("correctCount").textContent = correct;
  $("wrongCount").textContent = wrong;
  $("percent").textContent = percent + "%";

  // DARAJANI ANIQLASH
  if (percent >= 90) {
    $("resultIcon").textContent = "👑";
    $("resultTitle").textContent = "IT GRAND MASTER!";
    $("resultMessage").textContent =
      "Siz haqiqiy IT bilimdonisiz!";
  } else if (percent >= 70) {
    $("resultIcon").textContent = "🏆";
    $("resultTitle").textContent = "AJOYIB NATIJA!";
    $("resultMessage").textContent =
      "Siz kuchli IT bilim egasisiz!";
  } else if (percent >= 40) {
    $("resultIcon").textContent = "⚡";
    $("resultTitle").textContent = "YAXSHI HARAKAT!";
    $("resultMessage").textContent =
      "Yana mashq qiling va darajangizni oshiring!";
  } else {
    $("resultIcon").textContent = "💡";
    $("resultTitle").textContent = "YANGI BOSHLANISH!";
    $("resultMessage").textContent =
      "Har bir xato yangi bilim sari qadam!";
  }

  // JAVOBLAR TAHLILI
  const review = $("review");

  review.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = "JAVOBLAR TAHLILI";
  heading.style.color = "#ffd21f";
  heading.style.marginBottom = "15px";

  review.appendChild(heading);

  history.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "review-item";

    const title = document.createElement("strong");

    title.textContent =
      `${index + 1}. ${item.isCorrect ? "✓" : "✕"} ${item.question}`;

    const user = document.createElement("p");
    user.textContent =
      `Sizning javobingiz: ${item.userAnswer}`;

    const correctAnswer = document.createElement("p");
    correctAnswer.textContent =
      `To'g'ri javob: ${item.correctAnswer}`;

    const explanation = document.createElement("p");
    explanation.textContent =
      `Izoh: ${item.explanation}`;

    div.append(title, user, correctAnswer, explanation);

    review.appendChild(div);
  });

  updateBest();
}

// ==========================================
// BOSHQA JAVOBNI YOZISH
// ==========================================

$("otherBtn").addEventListener("click", () => {
  $("customArea").classList.remove("hidden");
  $("customInput").focus();
});

$("customSubmit").addEventListener("click", () => {
  const value = $("customInput").value.trim();

  if (!value) {
    alert("Iltimos, javobingizni yozing!");
    return;
  }

  checkAnswer(-1, value);
});

$("customInput").addEventListener("keydown", event => {
  if (event.key === "Enter") {
    $("customSubmit").click();
  }
});

// ==========================================
// TUGMALAR
// ==========================================

$("startBtn").addEventListener("click", startGame);

$("nextBtn").addEventListener("click", nextQuestion);

$("exitBtn").addEventListener("click", () => {
  if (confirm("Musobaqadan chiqishni xohlaysizmi?")) {
    clearInterval(timer);
    showScreen("home");
  }
});

$("restartBtn").addEventListener("click", startGame);

$("homeBtn").addEventListener("click", () => {
  clearInterval(timer);
  showScreen("home");
});

// ==========================================
// DASTLABKI ISHGA TUSHIRISH
// ==========================================

updateBest();

console.log("IT BILIMDONI muvaffaqiyatli ishga tushdi!");
console.log("Savollar soni:", questions.length);
console.log("Muallif: Akramjonova Jadra Maratovna");
