location.redirect = 'https://www.linkedin.com/in/sharanam-chotai'
const names = [
  {
    kamleshmasa: "કમલેશકુમાર ચંદ્રકાન્તભાઈ  કારિયા અને પરિવાર",
    sata: "અરવિંદકુમાર પ્રભુદાસભાઈ સાતા અને પરિવાર",
    raythatha: "દામોદરભાઈ કેશવજી રાયઠઠા અને પરિવાર",
    kundanfoi: "નવીનકુમાર ઓધવજીભાઈ કારિયા  અને પરિવાર",
    hastibhabhi: "હસ્તીબેન અને ધ્યાના કારિયા",
    lalcheta: "કિરીટભાઈ તથા નરેન્દ્રભાઈ  લાલચેતા અને પરિવાર",
    ilafai: "ઇલાબેન હરીશકુમાર દત્તાણી અને પરિવાર",
    rashmifai: "રાજેશકુમાર ભરતભાઈ સોનછાત્રા અને પરિવાર",
    simariya: "મંજુલાબેન મથુરાદાસ સીમરીયા અને પરિવાર",
    vandanamami: "વંદનાબેન દુર્લભજી કોટેચા.",
    khakhariya: "દિલીપભાઈ પસાભાઇ ખાખરીયા અને પરિવાર",
    chotai: "વિરેન્દ્રભાઈ તથા કેતનભાઈ ચોટાઈ, સહ પરિવાર.",
    npchotai: "નરેન્દ્રભાઇ પ્રભુદાસભાઈ ચોટાઈ, સહ પરિવાર.",
    thakrar: "સુરેશભાઈ શાંતિલાલ ઠકરાર અને પરિવાર",
    deepakbhai: "દીપકભાઈ શાહ",
    devendrabhai: "દેવેન્દ્રકુમાર જાદવ અને પરિવાર",
    nathvani: "મહેન્દ્રભાઈ  કાનજીભાઈ નથવાણી અને પરિવાર",
    panjvani: "ભરતભાઈ રસિકભાઈ પંજવાણી અને પરિવાર",
    lakhani: "પ્રવીણભાઈ વસંતભાઈ લાખાણી અને પરિવાર",
    joshi: "દિલીપભાઈ જોશી અને પરિવાર",
    agarwal: "Sanjaykumar Agarwal and Family",
    jagwani: "અમિતભાઇ જગવાણી અને પરિવાર",
    jagwaniandcompany:
      "Payal,harshita,Pooja,shrushti,aashtha,<br> Harsh,Yash,parth",
    dipikachauhan: "દીપિકા ચૌહાણ",
    kanabar: "કૃષ્ણકુમાર ભગવાનજીભાઈ કાનાબાર અને પરિવાર",
    sk: "શશીકાંત મકનભાઈ મકવાણા અને પરિવાર",
    ak: "Aryaman Pravinbhai Karde and Family",
    pv: "Parth Nareshbhai Vaswani and Family",
    shiv: "Shiv Patel and Family",
    girls: "Aayushi Pancholi & Yogita Agarwal",
    shailesh: "Shailesh Parmar and Family",
    prince: "પ્રિન્સ પટેલ અને પરિવાર",
    roshan: "Roshan Khemchandani and Family",
    friends: "Janki, Radha, Anjali, Noor, Mahima, Amrita, Rafik, OP.",
    mcom: "Namrata, Janki, Nisha, Aishwarya.",
    kajal: "કાજલ ચૌહાણ અને પરિવાર",
    rasula: "રસુલા અને પરિવાર",
    mcagirls: "ખ્યાતિ કારિયા, રોશની ધીમ્મર",
    idxteam:
      "Simon Varghese, Darshak Shah, Bhavesh Gupta, Dixit Solanki, Deepkumar Patel, Deep Sharma, Ankur Sharma. (with families)",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

if (id && names[0][id]) {
  const recipientElement = document.getElementById("recipient-name");
  if (recipientElement) {
    recipientElement.innerHTML = names[0][id];
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

// Tab functionality
function showTab(evt, tabName) {
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((tab) => tab.classList.remove("active"));

  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
