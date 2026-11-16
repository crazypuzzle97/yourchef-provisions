/* Your Chef Provisions (yourchefprovisions.com)
   Catalogue, order list, order form, EN/EL. No build step, no dependencies. */

/* ================= 1. EDIT: business details ================= */
const CONFIG = {
  whatsapp: "306947642736",          // digits only, country code first. Shared with I Am Your Chef for now
  phoneDisplay: "+30 694 764 2736",
  email: "info@iam-yourchef.com"     // switch to a @yourchefprovisions.com address when it exists
};

/* ================= 2. Catalogue ================= */
/* [id, category, EN name, EL name, EN note, EL note, unit, tags] — tags: gr = Greek, pdo = PDO/ΠΟΠ */
const PRODUCTS = [
  ["tomato","fv","Tomatoes","Ντομάτες","Greek, in season","Ελληνικές, εποχής","kg","gr"],
  ["cherrytom","fv","Cherry tomatoes","Ντοματίνια","","","kg",""],
  ["cucumber","fv","Cucumbers","Αγγούρια","","","pc","gr"],
  ["lettuce","fv","Lettuce & salad leaves","Μαρούλι & σαλατικά","","","pc",""],
  ["potato","fv","Potatoes, Naxos","Πατάτες Νάξου","","","kg","gr"],
  ["onion","fv","Onions","Κρεμμύδια","Red or white","Κόκκινα ή λευκά","kg",""],
  ["lemon","fv","Lemons","Λεμόνια","","","kg","gr"],
  ["herbs","fv","Fresh herbs","Φρέσκα μυρωδικά","Basil, dill, mint, parsley","Βασιλικός, άνηθος, δυόσμος, μαϊντανός","bunch",""],
  ["avocado","fv","Avocados","Αβοκάντο","Ready to eat","Έτοιμα για κατανάλωση","pc",""],
  ["fruit","fv","Seasonal fruit","Φρούτα εποχής","Best of the week","Τα καλύτερα της εβδομάδας","kg","gr"],
  ["berries","fv","Berries","Φρούτα του δάσους","","","punnet",""],
  ["micro","fv","Microgreens & edible flowers","Microgreens & βρώσιμα λουλούδια","","","punnet",""],

  ["bream","fish","Sea bream","Τσιπούρα","Whole or filleted","Ολόκληρη ή φιλέτο","kg","gr"],
  ["bass","fish","Sea bass","Λαβράκι","Whole or filleted","Ολόκληρο ή φιλέτο","kg","gr"],
  ["mullet","fish","Red mullet","Μπαρμπούνι","Local catch","Ντόπια ψαριά","kg","gr"],
  ["octopus","fish","Octopus","Χταπόδι","Local catch","Ντόπια ψαριά","kg","gr"],
  ["shrimp","fish","Shrimp","Γαρίδες","Fresh or frozen","Νωπές ή κατεψυγμένες","kg",""],
  ["salmon","fish","Salmon fillet","Φιλέτο σολομού","Imported","Εισαγόμενος","kg",""],
  ["tuna","fish","Tuna loin","Φιλέτο τόνου","","","kg",""],

  ["lamb","meat","Lamb chops","Αρνίσια παϊδάκια","Greek","Ελληνικά","kg","gr"],
  ["chickbr","meat","Chicken breast","Στήθος κοτόπουλο","Free-range","Ελευθέρας βοσκής","kg",""],
  ["chicken","meat","Whole chicken","Ολόκληρο κοτόπουλο","Free-range","Ελευθέρας βοσκής","pc",""],
  ["beef","meat","Beef fillet","Μοσχαρίσιο φιλέτο","","","kg",""],
  ["ribeye","meat","Ribeye","Ribeye","Dry-aged","Ωρίμανσης (dry-aged)","kg",""],
  ["mince","meat","Minced beef","Μοσχαρίσιος κιμάς","","","kg",""],
  ["pork","meat","Pork tenderloin","Χοιρινό φιλέτο","","","kg",""],
  ["cured","meat","Cured meats","Αλλαντικά","Selection","Ποικιλία","pack",""],

  ["feta","dairy","Feta PDO","Φέτα ΠΟΠ","Barrel-aged","Βαρελίσια","kg","gr pdo"],
  ["graviera","dairy","Graviera Naxou PDO","Γραβιέρα Νάξου ΠΟΠ","","","kg","gr pdo"],
  ["kopanisti","dairy","Kopanisti PDO","Κοπανιστή ΠΟΠ","Spicy Cycladic cheese","Πικάντικο τυρί των Κυκλάδων","g200","gr pdo"],
  ["yoghurt","dairy","Greek yoghurt","Γιαούρτι στραγγιστό","Strained, full-fat or 2%","Πλήρες ή 2%","kg","gr"],
  ["eggs","dairy","Free-range eggs","Αυγά ελευθέρας βοσκής","","","p10","gr"],
  ["butter","dairy","Butter","Βούτυρο","","","g250",""],
  ["milk","dairy","Fresh milk","Φρέσκο γάλα","","","l","gr"],
  ["plantmilk","dairy","Plant milk","Φυτικό ρόφημα","Oat, almond or soy","Βρώμης, αμυγδάλου ή σόγιας","l",""],

  ["sourdough","bakery","Sourdough bread","Ψωμί με προζύμι","","","loaf",""],
  ["croissant","bakery","Croissants","Κρουασάν βουτύρου","Butter","","pc",""],
  ["koulouri","bakery","Sesame bread rings","Κουλούρια","Koulouri","","pc","gr"],
  ["rusks","bakery","Barley rusks","Κριθαρένια παξιμάδια","Cretan","Κρητικά","pack","gr"],
  ["gf","bakery","Gluten-free bread","Ψωμί χωρίς γλουτένη","","","loaf",""],

  ["oil","pantry","Extra-virgin olive oil","Εξαιρετικό παρθένο ελαιόλαδο","Cretan","Κρητικό","l","gr"],
  ["honey","pantry","Thyme honey","Θυμαρίσιο μέλι","","","jar","gr"],
  ["fava","pantry","Fava Santorinis PDO","Φάβα Σαντορίνης ΠΟΠ","Grass pea","Λαθούρι","g500","gr pdo"],
  ["olives","pantry","Kalamata olives PDO","Ελιές Καλαμάτας ΠΟΠ","From Messinia","Από τη Μεσσηνία","jar","gr pdo"],
  ["pistachio","pantry","Aegina pistachios PDO","Φιστίκι Αιγίνης ΠΟΠ","","","g250","gr pdo"],
  ["pasta","pantry","Pasta","Ζυμαρικά","Various shapes","Διάφορα σχήματα","g500",""],
  ["rice","pantry","Rice","Ρύζι","","","kg",""],
  ["coffee","pantry","Coffee beans","Καφές σε κόκκους","","","kg",""],
  ["salt","pantry","Sea salt","Θαλασσινό αλάτι","","","pack","gr"],

  ["water","drinks","Still water","Νερό","","","w6","gr"],
  ["sparkling","drinks","Sparkling water","Ανθρακούχο νερό","","","c24","gr"],
  ["soft","drinks","Soft drinks & mixers","Αναψυκτικά & mixers","","","c24",""],
  ["juice","drinks","Fresh orange juice","Φρέσκος χυμός πορτοκάλι","","","l","gr"],
  ["ice","drinks","Ice cubes","Παγάκια","","","bag",""],

  ["cling","galley","Cling film","Μεμβράνη τροφίμων","","","roll",""],
  ["foil","galley","Aluminium foil","Αλουμινόχαρτο","","","roll",""],
  ["vacuum","galley","Vacuum bags","Σακούλες κενού","","","pack",""],
  ["paper","galley","Kitchen paper","Χαρτί κουζίνας","","","pack",""],
  ["gloves","galley","Disposable gloves","Γάντια μιας χρήσης","","","box",""],
  ["cleaning","galley","Cleaning products","Καθαριστικά","Galley set","Σετ κουζίνας","set",""]
].map(([id,cat,en,el,noteEn,noteEl,unit,tags]) => ({id,cat,en,el,noteEn,noteEl:noteEl||noteEn,unit,tags:tags.split(" ").filter(Boolean)}));
const BY_ID = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));

const CATS = ["all","gr","fv","fish","meat","dairy","bakery","pantry","drinks","galley"];
const UNITS = { // [EN, EL, quantity step]
  kg:["kg","κιλά",.5], pc:["pcs","τεμ.",1], bunch:["bunch","ματσάκι",1], punnet:["punnet","κουπάκι",1],
  pack:["pack","συσκ.",1], l:["L","λίτρα",1], jar:["jar","βάζο",1], loaf:["loaf","καρβέλι",1],
  g200:["200 g","200 γρ.",1], g250:["250 g","250 γρ.",1], g500:["500 g","500 γρ.",1],
  p10:["pack of 10","συσκ. 10 τεμ.",1], w6:["6 × 1.5 L","6 × 1,5 λτ",1], c24:["case of 24","κιβώτιο 24 τεμ.",1],
  bag:["bag","σακούλα",1], roll:["roll","ρολό",1], box:["box","κουτί",1], set:["set","σετ",1], custom:["","",1]
};

/* ================= 3. Text ================= */
const UI = {
  en: {
    cat:{all:"All",gr:"Greek",fv:"Fruit & veg",fish:"Fish & seafood",meat:"Meat & poultry",dairy:"Dairy & eggs",bakery:"Bakery",pantry:"Pantry",drinks:"Drinks",galley:"Galley & cleaning"},
    results:n => `${n} ${n===1?"product":"products"}`,
    addCustom:t => `Add “${t}” to my list`,
    add:n => `Add ${n}`, inc:n => `More ${n}`, dec:n => `Less ${n}`,
    tag:{gr:"Greek",pdo:"PDO"}, customNote:"Special request",
    errRequired:"Please fill in the highlighted fields.",
    errEmpty:"Add at least one product, or write what you need under “Anything else”.",
    errDate:"Choose a delivery date from tomorrow onwards.",
    copied:"Copied ✓", hello:"Hi! Here is my provisioning list:",
    mailCut:"(List shortened for email. Full list copied to your clipboard, paste it here.)",
    msg:{h:"New order · Your Chef Provisions",name:"Name",phone:"Phone",vessel:"Yacht/villa",where:"Deliver to",berth:"Port/berth",date:"Date",pax:"Guests/crew",email:"Email",list:"ORDER",notes:"Anything else"},
    title:"Your Chef Provisions · Yacht & villa provisioning in Greece",
    desc:"Fresh provisions for yachts and villas in the Greek islands. Choose products, get an itemised quote within 2 hours, next-day delivery."
  },
  el: {
    cat:{all:"Όλα",gr:"Ελληνικά",fv:"Φρούτα & λαχανικά",fish:"Ψάρια & θαλασσινά",meat:"Κρέας & πουλερικά",dairy:"Γαλακτοκομικά & αυγά",bakery:"Αρτοποιία",pantry:"Κελάρι",drinks:"Ποτά & νερά",galley:"Κουζίνα & καθαριότητα"},
    results:n => `${n} ${n===1?"προϊόν":"προϊόντα"}`,
    addCustom:t => `Προσθήκη «${t}» στη λίστα`,
    add:n => `Προσθήκη: ${n}`, inc:n => `Περισσότερο: ${n}`, dec:n => `Λιγότερο: ${n}`,
    tag:{gr:"Ελληνικό",pdo:"ΠΟΠ"}, customNote:"Ειδικό αίτημα",
    errRequired:"Συμπληρώστε τα επισημασμένα πεδία.",
    errEmpty:"Προσθέστε τουλάχιστον ένα προϊόν ή γράψτε τι χρειάζεστε στο «Κάτι άλλο».",
    errDate:"Επιλέξτε ημερομηνία παράδοσης από αύριο και μετά.",
    copied:"Αντιγράφηκε ✓", hello:"Γεια σας! Η λίστα τροφοδοσίας μου:",
    mailCut:"(Η λίστα συντομεύτηκε για το email. Η πλήρης λίστα αντιγράφηκε, επικολλήστε την εδώ.)",
    msg:{h:"Νέα παραγγελία · Your Chef Provisions",name:"Όνομα",phone:"Τηλέφωνο",vessel:"Σκάφος/βίλα",where:"Παράδοση σε",berth:"Λιμάνι/θέση",date:"Ημερομηνία",pax:"Φιλοξενούμενοι/πλήρωμα",email:"Email",list:"ΠΑΡΑΓΓΕΛΙΑ",notes:"Κάτι άλλο"},
    title:"Your Chef Provisions · Τροφοδοσία σκαφών & βιλών στην Ελλάδα",
    desc:"Φρέσκα τρόφιμα για σκάφη και βίλες στα ελληνικά νησιά. Επιλέξτε προϊόντα, λάβετε αναλυτική προσφορά σε 2 ώρες, παράδοση την επόμενη μέρα."
  }
};

/* Greek for the static page (English lives in index.html) */
const EL = {
  "skip":"Μετάβαση στο περιεχόμενο",
  "nav.products":"Προϊόντα","nav.how":"Πώς λειτουργεί","nav.delivery":"Παράδοση","nav.faq":"Ερωτήσεις","nav.order":"Η παραγγελία μου",
  "aria.brand":"Your Chef Provisions, αρχική","aria.nav":"Κύριο μενού","aria.lang":"Γλώσσα","aria.menu":"Μενού","aria.cats":"Κατηγορίες",
  "aria.search":"Αναζήτηση προϊόντων","aria.cart":"Η παραγγελία μου","aria.custom":"Προσθέστε άλλο είδος",

  "hero.eyebrow":"Τροφοδοσία σκαφών &amp; βιλών · Ελληνικά νησιά",
  "hero.title":"Φρέσκα τρόφιμα, στο σκάφος ή στη βίλα σας.",
  "hero.lead":"Επιλέξτε προϊόντα ή στείλτε τη λίστα σας. Αναλυτική προσφορά μέσα σε 2&nbsp;ώρες. Παράδοση την επόμενη μέρα.",
  "hero.cta":"Δείτε τα προϊόντα","hero.wa":"Λίστα μέσω WhatsApp",
  "f1.t":"2&nbsp;ώρες","f1.p":"για την προσφορά","f2.p":"τελευταία ώρα για αυριανή παράδοση","f3.p":"ψυχρή αλυσίδα ως το ψυγείο σας",

  "pr.eyebrow":"Προϊόντα","pr.title":"Επιλέξτε ό,τι χρειάζεστε",
  "pr.note":"Πατήστε <b>+</b> για προσθήκη. Οι τιμές της αγοράς αλλάζουν καθημερινά, γι’ αυτό κάθε είδος τιμολογείται στην προσφορά σας.",
  "pr.search":"Αναζήτηση προϊόντων","pr.empty":"Δεν το βρίσκετε; Μπορούμε να το αναζητήσουμε για εσάς.",
  "cart.title":"Η παραγγελία μου","cart.clear":"Καθαρισμός",
  "cart.empty":"Η λίστα σας είναι άδεια. Προσθέστε προϊόντα ή γράψτε ένα είδος παρακάτω.",
  "cart.customph":"Προσθέστε άλλο είδος…","cart.add":"Προσθήκη","cart.next":"Συνέχεια στα στοιχεία παράδοσης",

  "how.eyebrow":"Πώς λειτουργεί","how.title":"Τρία βήματα. Χωρίς λογαριασμό.",
  "how.1t":"Επιλέξτε","how.1p":"Προσθέστε προϊόντα εδώ ή στείλτε τη λίστα σας στο WhatsApp, ως κείμενο, φωτογραφία ή αρχείο.",
  "how.2t":"Εγκρίνετε την προσφορά","how.2p":"Αναλυτική προσφορά μέσα σε 2 ώρες. Πληρωμή με σύνδεσμο κάρτας ή τραπεζική μεταφορά.",
  "how.3t":"Παραλάβετε","how.3p":"Παράδοση με ψύξη την ώρα που ορίσατε και έλεγχος μαζί σας επί τόπου.",

  "do.t":"Τι κάνουμε",
  "do.1":"Φρούτα, λαχανικά, ψάρια, κρέας, γαλακτοκομικά και αρτοσκευάσματα",
  "do.2":"Ελληνικά προϊόντα και πλήρης αποθήκη τροφίμων",
  "do.3":"Ποτά, φαγητό πληρώματος και αναλώσιμα κουζίνας",
  "do.4":"Παράδοση στην προβλήτα, στο tender σας ή στη βίλα",
  "do.5":"Αναλυτική προσφορά πριν πληρώσετε",
  "dont.t":"Τι δεν κάνουμε",
  "dont.1":"Μαγείρεμα ή υπηρεσίες σεφ (δείτε <a href=\"https://iam-yourchef.com/\" target=\"_blank\" rel=\"noopener\">I Am Your Chef</a>)",
  "dont.2":"Καύσιμα, ανταλλακτικά ή ναυτιλιακά είδη",
  "dont.3":"Αντικαταστάσεις χωρίς τη σύμφωνη γνώμη σας",
  "dont.4":"Χρεώσεις πριν εγκρίνετε την προσφορά",
  "dont.5":"Παραδόσεις εκτός Ελλάδας",

  "del.eyebrow":"Παράδοση","del.title":"Πού παραδίδουμε",
  "del.note":"Στην άγκυρα; Συναντάμε το tender σας στην πλησιέστερη προβλήτα.",
  "del.coreTag":"Επόμενη μέρα · παραγγελία έως 14:00","del.core":"Μύκονος · Πάρος · Αντίπαρος · Κέρκυρα · Κρήτη",
  "del.reqTag":"48–72 ώρες · κατόπιν αιτήματος","del.req":"Αθήνα &amp; Σαρωνικός · υπόλοιπες Κυκλάδες · Ιόνιο",

  "or.eyebrow":"Η παραγγελία μου","or.title":"Στοιχεία παράδοσης",
  "or.lead":"Σας απαντάμε στο WhatsApp με αναλυτική προσφορά. Δεν χρεώνεται τίποτα πριν την εγκρίνετε.",
  "or.list":"Η λίστα σας","or.edit":"Αλλαγή",
  "or.noitems":"Δεν έχετε επιλέξει προϊόντα. Γράψτε τι χρειάζεστε στο «Κάτι άλλο».",
  "fm.name":"Ονοματεπώνυμο","fm.phone":"Τηλέφωνο / WhatsApp","fm.vessel":"Σκάφος ή βίλα","fm.where":"Παράδοση σε",
  "fm.choose":"Επιλέξτε…","fm.l1":"Μύκονος","fm.l2":"Πάρος","fm.l3":"Αντίπαρος","fm.l4":"Κέρκυρα","fm.l5":"Κρήτη","fm.other":"Άλλο (48–72 ώρες)",
  "fm.date":"Ημερομηνία","fm.time":"Ώρα","fm.t1":"Πρωί (08–12)","fm.t2":"Μεσημέρι (12–16)","fm.t3":"Απόγευμα (16–20)","fm.t4":"Ευέλικτα",
  "fm.pax":"Φιλοξενούμενοι / πλήρωμα","fm.berth":"Λιμάνι και θέση πρόσδεσης ή διεύθυνση βίλας",
  "fm.notes":"Κάτι άλλο (είδη, αλλεργίες, μάρκες)",
  "fm.sendWa":"Αποστολή στο WhatsApp","fm.sendMail":"Αποστολή με email",
  "fm.sent":"Η παραγγελία σας είναι έτοιμη στο WhatsApp. Πατήστε αποστολή εκεί. Δεν άνοιξε;","fm.copy":"Αντιγραφή κειμένου",

  "faq.eyebrow":"Ερωτήσεις","faq.title":"Χρήσιμες πληροφορίες",
  "q1":"Πώς διαμορφώνονται οι τιμές;",
  "a1":"Οι τιμές της αγοράς αλλάζουν καθημερινά. Η προσφορά σας τιμολογεί κάθε είδος και δείχνει ΦΠΑ και κόστος παράδοσης. Πληρώνετε μόνο αφού την εγκρίνετε.",
  "q2":"Πώς πληρώνω;",
  "a2":"Με σύνδεσμο πληρωμής με κάρτα ή με τραπεζική μεταφορά, σε ευρώ. Η παραγγελία επιβεβαιώνεται με την πληρωμή. Εκδίδουμε ηλεκτρονικά τιμολόγια που διαβιβάζονται στο myDATA της ΑΑΔΕ.",
  "q3":"Κι αν κάτι δεν είναι όπως πρέπει;","a3":"Πείτε μας κατά την παράδοση και θα το αντικαταστήσουμε ή θα σας πιστώσουμε την αξία του.",
  "q4":"Κι αν ακυρωθεί ένα δρομολόγιο πλοίου;",
  "a4":"Από τον Ιούνιο ως τον Σεπτέμβριο, ιδίως τον Ιούλιο και τον Αύγουστο, τα μελτέμια μπορεί να ακυρώσουν δρομολόγια. Παρακολουθούμε τον καιρό και σας ενημερώνουμε την προηγούμενη μέρα, με εναλλακτική λύση.",
  "q6":"Υπάρχει κόστος παράδοσης ή ελάχιστη παραγγελία;","a6":"Το κόστος παράδοσης εμφανίζεται ως ξεχωριστή γραμμή στην προσφορά, ώστε να το βλέπετε πριν πληρώσετε.",
  "q5":"Βρίσκετε προϊόντα που δεν είναι στη λίστα;","a5":"Συνήθως ναι. Προσθέστε το στη λίστα σας ή ρωτήστε μας στο WhatsApp. Επιβεβαιώνουμε διαθεσιμότητα και τιμή στην προσφορά.",

  "ft.p":"Τροφοδοσία σκαφών και βιλών στην Ελλάδα.","ft.hours":"Καθημερινά 08:00–22:00 τη σεζόν",
  "ft.sister":"Μέρος της οικογένειας","ft.terms":"Όροι","ft.privacy":"Απόρρητο",
  "bar.list":"Η παραγγελία μου","bar.next":"Συνέχεια →"
};

/* ================= 4. State ================= */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const EN = {};
let lang = "en", query = "";
let cat = window.matchMedia("(max-width:720px)").matches ? "fv" : "all";  // phones open on one category
let cart = { items:{}, custom:[] };   // items: {id: qty}; custom: [{id, name, qty}]
try { const c = JSON.parse(localStorage.getItem("ycp-cart")); if (c && c.items && Array.isArray(c.custom)) cart = c; } catch(e){}
const save = () => { try { localStorage.setItem("ycp-cart", JSON.stringify(cart)); } catch(e){} };
const T = () => UI[lang];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const pname = p => lang === "el" ? p.el : p.en;
const pnote = p => lang === "el" ? p.noteEl : p.noteEn;
const fmtQty = q => lang === "el" ? String(q).replace(".", ",") : String(q);
function qtyLabel(unit, q){
  const u = UNITS[unit][lang === "el" ? 1 : 0];
  if (unit === "custom") return fmtQty(q);
  if (unit === "kg" || unit === "l") return `${fmtQty(q)} ${u}`;
  if (unit === "pc") return `${fmtQty(q)} ${u}`;
  return `${fmtQty(q)} × ${u}`;
}
const unitText = unit => unit === "custom" ? T().customNote : UNITS[unit][lang === "el" ? 1 : 0];

/* ================= 5. Catalogue rendering ================= */
const inCat = (p, c) => c === "all" || (c === "gr" ? p.tags.includes("gr") : p.cat === c);
const matches = p => !query || norm(`${p.en} ${p.el} ${p.noteEn} ${p.noteEl}`).includes(norm(query));

function renderChips(){
  $("#chips").innerHTML = CATS.map(c => {
    const n = PRODUCTS.filter(p => inCat(p, c) && matches(p)).length;
    return `<button type="button" class="chip" data-cat="${c}" aria-pressed="${c===cat}">${esc(T().cat[c])}<small>${n}</small></button>`;
  }).join("");
}

function stepper(id, q, where){
  const name = id.startsWith("c-") ? (cart.custom.find(c => c.id === id)||{}).name : pname(BY_ID[id]);
  return `<span class="stepper">
    <button type="button" data-act="dec" data-id="${id}" data-key="dec:${id}:${where}" aria-label="${esc(T().dec(name))}">−</button>
    <output aria-live="polite">${esc(fmtQty(q))}</output>
    <button type="button" data-act="inc" data-id="${id}" data-key="inc:${id}:${where}" aria-label="${esc(T().inc(name))}">+</button>
  </span>`;
}

function renderGrid(){
  const list = PRODUCTS.filter(p => inCat(p, cat) && matches(p));
  $("#result-count").textContent = T().results(list.length);
  $("#grid").innerHTML = list.map(p => {
    const q = cart.items[p.id];
    const tags = p.tags.map(t => `<span class="tagsm ${t}">${T().tag[t]}</span>`).join("");
    return `<article class="card${q ? " in" : ""}" data-card="${p.id}">
      <div class="card-name">${esc(pname(p))}</div>
      ${pnote(p) ? `<div class="card-sub">${esc(pnote(p))}</div>` : ""}
      ${tags ? `<div class="card-tags">${tags}</div>` : ""}
      <div class="card-foot">
        <span class="card-unit">${esc(unitText(p.unit))}</span>
        ${q ? stepper(p.id, q, "grid")
            : `<button type="button" class="add" data-act="add" data-id="${p.id}" data-key="add:${p.id}:grid" aria-label="${esc(T().add(pname(p)))}">+</button>`}
      </div>
    </article>`;
  }).join("");
  const empty = list.length === 0;
  $("#empty").hidden = !empty;
  if (empty) $("#add-custom").textContent = T().addCustom(query.trim());
}

/* ================= 6. Cart rendering ================= */
function lines(){
  const out = Object.entries(cart.items).filter(([id]) => BY_ID[id]).map(([id,q]) => ({id, q, name:pname(BY_ID[id]), unit:BY_ID[id].unit}));
  cart.custom.forEach(c => out.push({id:c.id, q:c.qty, name:c.name, unit:"custom"}));
  return out;
}
function lineHtml(l, where){
  return `<li class="line"><span class="line-name">${esc(l.name)}<span class="line-unit">${esc(l.unit === "custom" ? T().customNote : qtyLabel(l.unit, l.q))}</span></span>${stepper(l.id, l.q, where)}</li>`;
}
function renderCart(){
  const ls = lines(), n = ls.length;
  $("#cart-list").innerHTML = ls.map(l => lineHtml(l, "cart")).join("");
  $("#summary-list").innerHTML = ls.map(l => lineHtml(l, "sum")).join("");
  $("#cart-empty").hidden = n > 0;
  $("#summary-empty").hidden = n > 0;
  $("#cart-clear").hidden = n === 0;
  $$("[data-count]").forEach(el => { el.textContent = n; el.hidden = n === 0; });
  $$("[data-count-text]").forEach(el => el.textContent = n);
  updateBar();
}
function renderAll(){
  const key = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.key : null;
  renderChips(); renderGrid(); renderCart();
  if (key){ // keep keyboard focus on the same control after re-render
    const [act, id, where] = key.split(":");
    const el = $(`[data-key="${key}"]`) || $(`[data-key="inc:${id}:${where}"]`) || $(`[data-key="add:${id}:grid"]`);
    if (el) el.focus({preventScroll:true});
  }
}

/* ================= 7. Cart actions ================= */
function step(id){ return id.startsWith("c-") ? 1 : UNITS[BY_ID[id].unit][2]; }
function setQty(id, q){
  q = Math.max(0, Math.round(q * 2) / 2);
  if (id.startsWith("c-")){
    const c = cart.custom.find(x => x.id === id); if (!c) return;
    if (q <= 0) cart.custom = cart.custom.filter(x => x.id !== id); else c.qty = q;
  } else {
    if (q <= 0) delete cart.items[id]; else cart.items[id] = q;
  }
  save(); renderAll();
}
const getQty = id => id.startsWith("c-") ? (cart.custom.find(x => x.id === id)||{}).qty || 0 : cart.items[id] || 0;
function addCustom(name){
  name = name.trim(); if (!name) return;
  const ex = cart.custom.find(c => norm(c.name) === norm(name));
  if (ex) ex.qty += 1; else cart.custom.push({ id:"c-" + Date.now().toString(36), name, qty:1 });
  save(); renderAll();
}

document.addEventListener("click", e => {
  const b = e.target.closest("[data-act]");
  if (b){
    const id = b.dataset.id;
    if (b.dataset.act === "add") setQty(id, BY_ID[id].unit === "kg" ? 1 : step(id));
    if (b.dataset.act === "inc") setQty(id, getQty(id) + step(id));
    if (b.dataset.act === "dec") setQty(id, getQty(id) - step(id));
    return;
  }
  const card = e.target.closest("[data-card]");   // tap anywhere on a product card to add it
  if (card && !cart.items[card.dataset.card]) {
    const id = card.dataset.card;
    setQty(id, BY_ID[id].unit === "kg" ? 1 : 1);
    const plus = $(`[data-key="inc:${id}:grid"]`); if (plus) plus.focus({preventScroll:true});
  }
  const chip = e.target.closest("[data-cat]");
  if (chip){ cat = chip.dataset.cat; renderChips(); renderGrid(); }
});
$("#search").addEventListener("input", e => { query = e.target.value; renderChips(); renderGrid(); });
$("#add-custom").addEventListener("click", () => { addCustom(query); query = ""; $("#search").value = ""; renderAll(); });
$("#custom-form").addEventListener("submit", e => { e.preventDefault(); const i = $("#custom-input"); addCustom(i.value); i.value = ""; i.focus(); });
$("#cart-clear").addEventListener("click", () => { cart = { items:{}, custom:[] }; save(); renderAll(); });

/* ================= 8. Order form ================= */
const form = $("#order-form");
const errBox = $("#form-error");
let lastMessage = "";

function localISO(d){ const x = new Date(d); x.setMinutes(x.getMinutes() - x.getTimezoneOffset()); return x.toISOString().slice(0,10); }
const tomorrow = () => { const d = new Date(); d.setDate(d.getDate() + 1); return localISO(d); };
form.date.min = tomorrow();

function fmtDate(iso){
  const [y,m,d] = iso.split("-").map(Number);
  return new Date(y, m-1, d).toLocaleDateString(lang === "el" ? "el-GR" : "en-GB", { weekday:"short", day:"numeric", month:"short", year:"numeric" });
}
function buildMessage(){
  const L = T().msg, f = form.elements, opt = f.where.selectedOptions[0];
  const out = [`*${L.h}*`, ""];
  const add = (k, v) => { if (v && String(v).trim()) out.push(`${L[k]}: ${String(v).trim()}`); };
  add("name", f.name.value); add("phone", f.phone.value); add("vessel", f.vessel.value);
  add("where", opt && opt.value ? opt.textContent : ""); add("berth", f.berth.value);
  add("date", f.date.value ? `${fmtDate(f.date.value)} · ${f.time.selectedOptions[0].textContent}` : "");
  add("pax", f.pax.value);
  const ls = lines();
  if (ls.length){ out.push("", `*${L.list}*`); ls.forEach(l => out.push(`• ${l.name} — ${l.unit === "custom" ? fmtQty(l.q) : qtyLabel(l.unit, l.q)}`)); }
  if (f.notes.value.trim()) out.push("", `${L.notes}:`, f.notes.value.trim());
  return out.join("\n");
}
function validate(){
  let ok = true, msg = T().errRequired;
  $$("input, select, textarea", form).forEach(el => {
    let bad = el.required && !el.value.trim();
    if (!bad && el.value && !el.checkValidity()) bad = true;
    if (el.name === "date" && el.value && el.value < tomorrow()){ bad = true; msg = T().errDate; }
    el.classList.toggle("invalid", bad); el.setAttribute("aria-invalid", bad);
    if (bad) ok = false;
  });
  if (ok && !lines().length && !form.notes.value.trim()){
    ok = false; msg = T().errEmpty; form.notes.classList.add("invalid"); form.notes.setAttribute("aria-invalid", true);
  }
  errBox.textContent = ok ? "" : msg; errBox.hidden = ok;
  if (!ok) $(".invalid", form).focus();
  return ok;
}
form.addEventListener("input", e => { if (e.target.classList.contains("invalid")) { e.target.classList.remove("invalid"); e.target.setAttribute("aria-invalid", false); } });
form.addEventListener("submit", e => {
  e.preventDefault();
  if (!validate()) return;
  const via = e.submitter && e.submitter.dataset.send || "wa";
  lastMessage = buildMessage();
  if (via === "mail"){
    let body = lastMessage.replace(/\*/g, "");
    if (body.length > 1800){ copyText(body); body = body.slice(0, 1500) + "\n…\n" + T().mailCut; }
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(T().msg.h + " · " + form.vessel.value)}&body=${encodeURIComponent(body)}`;
  } else {
    window.open(waLink(lastMessage), "_blank", "noopener");
  }
  $("#sent").hidden = false;
});
function copyText(t){
  if (navigator.clipboard) return navigator.clipboard.writeText(t).catch(() => {});
  const a = document.createElement("textarea"); a.value = t; document.body.appendChild(a); a.select();
  try { document.execCommand("copy"); } catch(e){} a.remove();
}
$("#copy-msg").addEventListener("click", e => { copyText(lastMessage.replace(/\*/g, "")); e.currentTarget.textContent = T().copied; });

/* ================= 9. Contact links ================= */
const waLink = text => `https://wa.me/${CONFIG.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : "");
function updateLinks(){
  $$("[data-wa]").forEach(a => {
    a.href = waLink(a.dataset.wa === "hello" ? T().hello : ""); a.target = "_blank"; a.rel = "noopener";
  });
  $$("[data-mail]").forEach(a => a.href = `mailto:${CONFIG.email}`);
  $$("[data-cfg]").forEach(el => el.textContent = CONFIG[el.dataset.cfg]);
}

/* ================= 10. Language ================= */
function setLang(next){
  lang = next === "el" ? "el" : "en";
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => { const v = lang === "el" ? EL[el.dataset.i18n] : EN[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
  $$("[data-i18n-ph]").forEach(el => { const k = el.dataset.i18nPh; el.placeholder = lang === "el" ? EL[k] : EN["ph:" + k]; });
  $$("[data-i18n-aria]").forEach(el => { const k = el.dataset.i18nAria; el.setAttribute("aria-label", lang === "el" ? EL[k] : EN["aria:" + k]); });
  $$(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  document.title = T().title;
  $('meta[name="description"]').setAttribute("content", T().desc);
  updateLinks(); renderAll();
  try { localStorage.setItem("lang", lang); } catch(e){}
}
$$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

/* ================= 11. Header, menu, mobile bar ================= */
const header = $(".site-header"), nav = $("#nav"), toggle = $(".menu-toggle"), bar = $("#cart-bar");
const mq = window.matchMedia("(max-width:1024px)");
function setMenu(open){
  nav.classList.toggle("open", open); header.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", open);
  nav.inert = mq.matches && !open;          // closed mobile menu is not focusable
}
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); toggle.focus(); } });
mq.addEventListener("change", () => setMenu(false));

let orderVisible = false, footerVisible = false, pastHero = false;
function updateBar(){
  const show = mq.matches && pastHero && !orderVisible && !footerVisible && lines().length > 0;
  bar.classList.toggle("show", show);
  bar.inert = !show;
}
new IntersectionObserver(es => es.forEach(en => {
  if (en.target.id === "order") orderVisible = en.isIntersecting; else footerVisible = en.isIntersecting;
  updateBar();
})).observe($("#order"));
new IntersectionObserver(es => es.forEach(en => { footerVisible = en.isIntersecting; updateBar(); })).observe($(".footer"));
const onScroll = () => { header.classList.toggle("scrolled", scrollY > 30); pastHero = scrollY > innerHeight * .6; updateBar(); };
addEventListener("scroll", onScroll, { passive:true });

/* ================= 12. Init ================= */
$$("[data-i18n]").forEach(el => { if (!(el.dataset.i18n in EN)) EN[el.dataset.i18n] = el.innerHTML; });
$$("[data-i18n-ph]").forEach(el => EN["ph:" + el.dataset.i18nPh] = el.placeholder);
$$("[data-i18n-aria]").forEach(el => EN["aria:" + el.dataset.i18nAria] = el.getAttribute("aria-label"));
$("#year").textContent = new Date().getFullYear();
let saved = null; try { saved = localStorage.getItem("lang"); } catch(e){}
setLang(saved === "el" || saved === "en" ? saved : ((navigator.language || "").toLowerCase().startsWith("el") ? "el" : "en"));
setMenu(false); onScroll();
