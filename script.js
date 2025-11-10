const names = [
  {
    dhokai: "અતુલભાઈ ધોકાઈ",
    kamleshmasa: "કમલેશભાઈ કારિયા અને પરિવાર",
    sata: "સાતા અરવિંદભાઈ અને પરિવાર",
    raythatha: "દામોદરભાઈ રાયઠઠા અને પરિવાર",
    kundanfoi: "કારિયા નવીનભાઈ અને પરિવાર",
    motapappa: "કિરીટભાઈ તથા નરેન્દ્ર લાલચેતા અને પરિવાર",
    ilafai: "ઇલાબેન હરીશકુમાર દત્તાણી અને પરિવાર",
    rashmifai: "રાજેશકુમાર ભરતભાઈ સોનછાત્રા અને પરિવાર",
    simariya: "મંજુલાબેન મથુરાદાસ સીમરીયા અને પરિવાર",
    vandanamami: "વંદનાબેન દુર્લભજી કોટેચા.",
    khakhariya: "દિલીપભાઈ પસાભાઇ ખાખરીયા અને પરિવાર",
    chotai: "વિરેન્દ્રભાઈ તથા કેતનભાઈ ચોટાઈ, સહ પરિવાર.",
    thakrar: "સુરેશભાઈ શાંતિલાલ ઠકરાર અને પરિવાર",
    dipakbhai: "દીપકભાઈ શાહ",
    devendrabhai: "દેવેન્દ્રકુમાર જાદવ અને પરિવાર",
    nathvani: "મહેન્દ્રભાઈ  કાનજીભાઈ નથવાણી અને પરિવાર",
    panjvani: "ભરતભાઈ રસિકભાઈ પંજવાણી અને પરિવાર",
    lakhani: "પ્રવીણભાઈ વસંતભાઈ લાખાણી અને પરિવાર",
    joshi: "દિલીપભાઈ જોશી અને પરિવાર",
    agarwal: "Sanjaykumar Agarwal and Family",
    jagwani: "અમિતભાઇ જગવાણી અને પરિવાર",
    jagwaniandcompany: "Jagwani and Company",
    dipikachauhan: "દીપિકા ચૌહાણ",
    kanabar: "કૃષ્ણકુમાર ભગવાનજીભાઈ કાનાબાર અને પરિવાર",
    sk: "શશીકાંત મકનભાઈ મકવાણા અને પરિવાર",
    ak: "Aryaman Pravinbhai Karde and Family",
    pv: "Parth Nareshbhai Vaswani and Family",
    noroxen: "Shiv Patel and Family",
    idxteam:
      "સાઇમન વર્ઘીસ, ભાવેશ ગુપ્તા, દિક્ષિત સોલંકી, દીપ પટેલ, દર્શક શાહ, દીપ શર્મા, અંકુર શર્મા. (સહ-પરિવાર)",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

if (id && names[0][id]) {
  const recipientElement = document.getElementById("recipient-name");
  if (recipientElement) {
    recipientElement.textContent = names[0][id];
  }
} else {
  const p = document.getElementById("invitation-recipient");
  if (p) {
    p.remove();
  }
}

// load each section with animation as the user scrolls down
const sections = document.querySelectorAll("section");
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section = entry.target;
      section.classList.add("revealed");
      observer.unobserve(section);
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const pageSizeScrollIndicator = document.querySelector(
  ".page-size-scroll-indicator",
);
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.offsetHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
  pageSizeScrollIndicator.style.width = scrollPercent + "%";
});
