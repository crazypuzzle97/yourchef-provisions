/* Your Chef Provisions (yourchefprovisions.com)
   Catalogue, order list, order form, seasonal guide, EN/EL. No build step, no dependencies. */

/* ================= 1. EDIT: business details ================= */
const CONFIG = {
  whatsapp: "306947642736",          // digits only, country code first. Replace with the Provisions WhatsApp number
  phoneDisplay: "+30 694 764 2736",
  email: ""                          // e.g. "orders@yourchefprovisions.com". Empty = email option hidden
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


/* ================= 3. Seasonal guide (typical Greek availability) ================= */
const MONTHS = {
  en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  el:["Ιαν","Φεβ","Μαρ","Απρ","Μαΐ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"]
};
const SP = { // produce [EN, EL]
  orange:["Oranges","Πορτοκάλια"], mand:["Mandarins","Μανταρίνια"], lemon:["Lemons","Λεμόνια"], kiwi:["Kiwi","Ακτινίδια"],
  cabbage:["Cabbage","Λάχανο"], cauli:["Cauliflower","Κουνουπίδι"], broc:["Broccoli","Μπρόκολο"], leek:["Leeks","Πράσα"],
  spinach:["Spinach","Σπανάκι"], horta:["Wild greens (horta)","Άγρια χόρτα"], fennel:["Fennel","Μάραθος"], art:["Artichokes","Αγκινάρες"],
  straw:["Strawberries","Φράουλες"], broad:["Broad beans","Κουκιά"], peas:["Peas","Αρακάς"], asp:["Wild asparagus","Άγρια σπαράγγια"],
  dill:["Dill","Άνηθος"], lettuce:["Lettuce","Μαρούλι"], newpot:["New potatoes","Φρέσκες πατάτες"], cherry:["Cherries (late May)","Κεράσια (τέλη Μαΐου)"],
  cherries:["Cherries","Κεράσια"], loquat:["Loquats","Μούσμουλα"], apricot:["Apricots","Βερίκοκα"], zucc:["Courgettes & flowers","Κολοκυθάκια & ανθοί"],
  gbean:["Green beans","Φασολάκια"], peach:["Peaches","Ροδάκινα"], plum:["Plums","Δαμάσκηνα"], cuc:["Cucumbers","Αγγούρια"],
  tom:["Tomatoes","Ντομάτες"], basil:["Basil","Βασιλικός"], water:["Watermelon","Καρπούζι"], melon:["Melon","Πεπόνι"],
  aub:["Aubergines","Μελιτζάνες"], pep:["Peppers","Πιπεριές"], okra:["Okra","Μπάμιες"], fig:["Figs","Σύκα"], grape:["Grapes","Σταφύλια"],
  prick:["Prickly pears","Φραγκόσυκα"], pear:["Pears","Αχλάδια"], apple:["Apples","Μήλα"], pom:["Pomegranates","Ρόδια"],
  pump:["Pumpkin","Κολοκύθα"], quince:["Quinces","Κυδώνια"], chest:["Chestnuts","Κάστανα"], mush:["Wild mushrooms","Άγρια μανιτάρια"],
  oil:["Early-harvest olive oil","Αγουρέλαιο"]
};
const SS = { // sea [EN, EL]
  bream:["Sea bream","Τσιπούρα"], mullet:["Red mullet","Μπαρμπούνι"], cuttle:["Cuttlefish","Σουπιά"], octo:["Octopus","Χταπόδι"],
  shrimp:["Shrimp","Γαρίδες"], urchin:["Sea urchins","Αχινοί"], hake:["Hake (fresh)","Μπακαλιάρος (νωπός)"], squid:["Squid","Καλαμάρι"],
  porgy:["Red porgy","Φαγκρί"], dentex:["Dentex","Συναγρίδα"], grouper:["Grouper","Ροφός"], bass:["Sea bass","Λαβράκι"],
  sardine:["Sardines","Σαρδέλες"], anchovy:["Anchovies","Γαύρος"], bonito:["Bonito","Παλαμίδα"], scorp:["Scorpion fish","Σκορπίνα"]
};
const SEASON = [
  {p:"orange mand lemon kiwi cabbage cauli broc leek spinach horta", s:"bream mullet hake cuttle shrimp urchin"},
  {p:"orange lemon kiwi art straw cauli broc leek fennel horta", s:"bream mullet hake cuttle shrimp urchin"},
  {p:"art straw broad peas asp fennel dill lettuce orange", s:"cuttle octo mullet hake shrimp urchin"},
  {p:"art straw broad peas asp lettuce dill newpot", s:"cuttle octo mullet bream shrimp"},
  {p:"loquat straw cherry apricot zucc broad peas newpot gbean", s:"mullet octo bream scorp shrimp"},
  {p:"cherries apricot peach plum zucc cuc tom gbean basil", s:"porgy dentex bass sardine anchovy octo"},
  {p:"tom water melon peach apricot plum aub pep okra zucc cuc", s:"porgy dentex grouper bass sardine anchovy urchin"},
  {p:"fig grape water melon peach prick tom aub pep okra", s:"porgy dentex grouper bass sardine anchovy urchin"},
  {p:"fig grape prick pear apple pom tom aub pep pump", s:"porgy dentex bass sardine squid bonito"},
  {p:"pom quince apple pear grape chest pump mush cabbage", s:"squid bonito mullet hake shrimp"},
  {p:"pom quince chest mand orange kiwi apple cabbage cauli oil", s:"squid mullet hake shrimp cuttle"},
  {p:"orange mand lemon kiwi pom chest cabbage cauli broc leek horta", s:"bream mullet hake shrimp urchin cuttle"}
];

/* ================= 4. Text ================= */
const UI = {
  en: {
    cat:{all:"All products",gr:"Greek",fv:"Fruit & veg",fish:"Fish & seafood",meat:"Meat & poultry",dairy:"Dairy & eggs",bakery:"Bakery",pantry:"Pantry",drinks:"Drinks",galley:"Galley & cleaning"},
    results:n => `${n} ${n===1?"product":"products"}`,
    addCustom:t => `Add “${t}” to my list`,
    addLabel:"Add", add:n => `Add ${n}`, inc:n => `More ${n}`, dec:n => `Less ${n}`,
    tag:{gr:"Greek",pdo:"PDO"}, customNote:"Special request",
    errRequired:"Please fill in the highlighted fields.",
    errEmpty:"Add at least one product, or write your list under “Anything else”.",
    errDate:"Choose a delivery date from tomorrow onwards.",
    copied:"Copied ✓", hello:"Hi! Here is my provisioning list:", prices:"Hi! Could you send this week’s prices for:",
    mailCut:"(List shortened for email. The full list is copied to your clipboard, paste it here.)",
    msg:{h:"New inquiry · Your Chef Provisions",name:"Name",role:"Role",phone:"Phone",email:"Email",vessel:"Yacht/villa",where:"Island",date:"Date",type:"Delivery to",berth:"Port/berth",pax:"People",guests:"Guests",crew:"Crew",grade:"Quality",list:"ORDER",notes:"Anything else"},
    items:n => `${n} ${n===1?"item":"items"}`, notesOnly:"Written list", edit:"Edit",
    title:"Your Chef Provisions · Yacht & villa provisioning in Greece",
    desc:"Fresh provisions for yachts and villas in the Greek islands. Choose products, get an itemised quote within 2 hours, next-day delivery."
  },
  el: {
    cat:{all:"Όλα τα προϊόντα",gr:"Ελληνικά",fv:"Φρούτα & λαχανικά",fish:"Ψάρια & θαλασσινά",meat:"Κρέας & πουλερικά",dairy:"Γαλακτοκομικά & αυγά",bakery:"Αρτοποιία",pantry:"Κελάρι",drinks:"Ποτά & νερά",galley:"Κουζίνα & καθαριότητα"},
    results:n => `${n} ${n===1?"προϊόν":"προϊόντα"}`,
    addCustom:t => `Προσθήκη «${t}» στη λίστα`,
    addLabel:"Προσθήκη", add:n => `Προσθήκη: ${n}`, inc:n => `Περισσότερο: ${n}`, dec:n => `Λιγότερο: ${n}`,
    tag:{gr:"Ελληνικό",pdo:"ΠΟΠ"}, customNote:"Ειδικό αίτημα",
    errRequired:"Συμπληρώστε τα επισημασμένα πεδία.",
    errEmpty:"Προσθέστε τουλάχιστον ένα προϊόν ή γράψτε τι χρειάζεστε στο «Κάτι άλλο».",
    errDate:"Επιλέξτε ημερομηνία παράδοσης από αύριο και μετά.",
    copied:"Αντιγράφηκε ✓", hello:"Γεια σας! Η λίστα τροφοδοσίας μου:", prices:"Γεια σας! Μπορείτε να μου στείλετε τις τιμές της εβδομάδας για:",
    mailCut:"(Η λίστα συντομεύτηκε για το email. Η πλήρης λίστα αντιγράφηκε, επικολλήστε την εδώ.)",
    msg:{h:"Νέο αίτημα · Your Chef Provisions",name:"Όνομα",role:"Ιδιότητα",phone:"Τηλέφωνο",email:"Email",vessel:"Σκάφος/βίλα",where:"Νησί",date:"Ημερομηνία",type:"Παράδοση σε",berth:"Λιμάνι/θέση",pax:"Άτομα",guests:"Φιλοξενούμενοι",crew:"Πλήρωμα",grade:"Ποιότητα",list:"ΠΑΡΑΓΓΕΛΙΑ",notes:"Κάτι άλλο"},
    items:n => `${n} ${n===1?"είδος":"είδη"}`, notesOnly:"Γραπτή λίστα", edit:"Αλλαγή",
    title:"Your Chef Provisions · Τροφοδοσία σκαφών & βιλών στην Ελλάδα",
    desc:"Φρέσκα τρόφιμα για σκάφη και βίλες στα ελληνικά νησιά. Επιλέξτε προϊόντα, λάβετε αναλυτική προσφορά σε 2 ώρες, παράδοση την επόμενη μέρα."
  }
};

/* Greek for the static page (English lives in index.html) */
const EL = {
  "skip":"Μετάβαση στο περιεχόμενο",
  "nav.how":"Πώς λειτουργεί","nav.products":"Προϊόντα","nav.greek":"Ελληνικό κελάρι","nav.delivery":"Παράδοση","nav.pricing":"Τιμές","nav.faq":"Ερωτήσεις","nav.order":"Η παραγγελία μου",
  "aria.brand":"Your Chef Provisions, αρχική","aria.nav":"Κύριο μενού","aria.lang":"Γλώσσα","aria.menu":"Μενού","aria.quote":"Παράδειγμα αναλυτικής προσφοράς",
  "aria.cats":"Κατηγορίες","aria.search":"Αναζήτηση προϊόντων","aria.cart":"Η παραγγελία μου","aria.custom":"Προσθέστε άλλο είδος","aria.month":"Μήνας",

  "hero.eyebrow":"Τροφοδοσία σκαφών &amp; βιλών · Ελληνικά νησιά",
  "hero.title":"Η κουζίνα σας, πλήρως εφοδιασμένη. Ο χρόνος σας, πάλι δικός σας.",
  "hero.lead":"Επιλέξτε προϊόντα ή στείλτε τη λίστα σας. Αναλυτική προσφορά μέσα σε 2&nbsp;ώρες. Παράδοση με ψύξη στην προβλήτα ή στην κουζίνα της βίλας, την ώρα που ορίζετε.",
  "hero.cta":"Δείτε τα προϊόντα","hero.wa":"Λίστα μέσω WhatsApp",
  "hero.note":"Χωρίς εγγραφή. Χωρίς κρυφό τιμοκατάλογο. Καμία χρέωση πριν εγκρίνετε την προσφορά.",
  "qc.label":"Δείγμα προσφοράς","qc.for":"M/Y Example · Μύκονος","qc.slot":"Πέμ · 10:00–11:00",
  "qc.l1":"Ντομάτες Κρήτης","qc.l2":"Φέτα ΠΟΠ, βαρελίσια","qc.l3":"Τσιπούρα, ολόκληρη","qc.l4":"Κοπανιστή ΠΟΠ",
  "qc.del":"Παράδοση με ψύξη στην προβλήτα","qc.total":"Σύνολο με ΦΠΑ","qc.caption":"Ενδεικτικό παράδειγμα · ενδεικτικές τιμές",
  "f1.t":"2 ώρες","f1.p":"για την αναλυτική προσφορά, <span class=\"nw\">08:00–22:00</span>","f2.p":"τελευταία ώρα για παράδοση την επόμενη μέρα",
  "f3.p":"ψυχόμενα και κατεψυγμένα χωριστά, ως το ψυγείο σας","f4.p":"ένας συντονιστής, στα ελληνικά ή στα αγγλικά",

  "why.eyebrow":"Γιατί μας επιλέγουν οι σεφ","why.title":"Δουλεύουμε όπως η ομάδα ενός σεφ",
  "why.lead":"Ξέρουμε τι χρειάζεται μια κουζίνα σκάφους, πότε το χρειάζεται και πώς πρέπει να φτάσει.",
  "why.1t":"Ένας υπεύθυνος, όλη τη σεζόν","why.1p":"Ο δικός σας συντονιστής στο WhatsApp για το σκάφος ή τη βίλα σας.",
  "why.2t":"Τιμή για κάθε προϊόν, εκ των προτέρων","why.2p":"Εγκρίνετε την προσφορά πριν αγοράσουμε. Τίποτα δεν προστίθεται μετά την παράδοση.",
  "why.3t":"Πρώτα το ελληνικό προϊόν","why.3p":"Παραγωγοί των νησιών, ψαράδες και προϊόντα ΠΟΠ. Εισαγόμενα όταν το μενού σας τα χρειάζεται.",
  "why.4t":"Η μεταφορά στα νησιά, δική μας δουλειά","why.4p":"Δρομολόγια πλοίων, μελτέμια, πρόσβαση στη μαρίνα και μεταφορά με ψυγείο.",
  "why.5t":"Τελευταία στιγμή; Ρωτήστε","why.5p":"Άλλαξε το μενού το μεσημέρι; Σας λέμε αμέσως τι μπορούμε να φέρουμε σήμερα.",
  "why.6t":"Τιμολόγηση χωρίς μπλεξίματα","why.6p":"Ένα ηλεκτρονικό τιμολόγιο ανά παραγγελία, διαβιβασμένο στο myDATA. Καπετάνιος και εταιρεία διαχείρισης βλέπουν τα ίδια ποσά.",

  "how.eyebrow":"Πώς λειτουργεί","how.title":"Από τη λίστα σας στο ψυγείο σας, σε τέσσερα βήματα","how.note":"Χωρίς λογαριασμό.",
  "how.1t":"Επιλέξτε","how.1p":"Προσθέστε προϊόντα παρακάτω ή στείλτε τη λίστα σας στο WhatsApp, ως κείμενο, φωτογραφία ή αρχείο.","how.1s":"2 λεπτά",
  "how.2t":"Λάβετε προσφορά","how.2p":"Κάθε γραμμή δείχνει προέλευση, ποσότητα και τιμή. Εκτός εποχής; Σας προτείνουμε εναλλακτική.","how.2s":"Μέσα σε 2 ώρες",
  "how.3t":"Εγκρίνετε &amp; πληρώστε","how.3p":"Πληρωμή με σύνδεσμο κάρτας ή τραπεζική μεταφορά. Λαμβάνετε επιβεβαίωση με την ώρα παράδοσης.","how.3s":"Έως τις 14:00 για την επόμενη μέρα",
  "how.4t":"Παράδοση &amp; έλεγχος","how.4p":"Συσκευασία ανά κατηγορία, ψυχόμενα και κατεψυγμένα χωριστά. Τα ελέγχουμε μαζί σας επί τόπου.","how.4s":"Τιμολόγιο αυθημερόν",

  "flow.1":"Βήμα 1 από 2","flow.2":"Βήμα 2 από 2",
  "pr.eyebrow":"Προϊόντα","pr.title":"Επιλέξτε ό,τι χρειάζεστε",
  "pr.note":"Οι τιμές της αγοράς αλλάζουν καθημερινά, γι’ αυτό κάθε είδος τιμολογείται στην προσφορά σας. Διαθέσιμα σε ποιότητα guest και crew.",
  "pr.search":"Αναζήτηση προϊόντων","pr.empty":"Δεν το βρίσκετε; Μπορούμε να το αναζητήσουμε για εσάς.",
  "cart.title":"Η παραγγελία μου","cart.clear":"Καθαρισμός",
  "cart.empty":"Η λίστα σας είναι άδεια. Προσθέστε προϊόντα ή γράψτε ένα είδος παρακάτω.",
  "cart.customph":"Προσθέστε άλλο είδος…","cart.add":"Προσθήκη","cart.next":"Συνέχεια στην παράδοση",

  "gk.eyebrow":"Το ελληνικό κελάρι","gk.title":"Η Ελλάδα στο πιάτο των φιλοξενούμενών σας",
  "gk.lead":"Ελληνικά προϊόντα που ζητούν οι φιλοξενούμενοι, από παραγωγούς που εμπιστευόμαστε.",
  "p1t":"Εξαιρετικό παρθένο ελαιόλαδο","p1p":"Μονοκτηματικό, Κρήτη &amp; Λακωνία",
  "p2t":"Φέτα ΠΟΠ","p2p":"Βαρελίσια, πρόβειο &amp; κατσικίσιο γάλα",
  "p3t":"Γραβιέρα Νάξου ΠΟΠ","p3p":"Ιδανική για σαγανάκι",
  "p4t":"Κοπανιστή ΠΟΠ","p4p":"Πικάντικο τυρί των Κυκλάδων",
  "p5t":"Φάβα Σαντορίνης ΠΟΠ","p5p":"Λαθούρι από ηφαιστειακό έδαφος",
  "p6t":"Φιστίκι Αιγίνης ΠΟΠ","p6p":"Για γλυκά, παγωτό, κρούστες",
  "p7t":"Θυμαρίσιο μέλι","p7p":"Από μελισσοκόμους των νησιών",
  "p8t":"Μαστίχα Χίου","p8p":"Για επιδόρπια και κοκτέιλ",
  "p9t":"Ελιές Καλαμάτας ΠΟΠ","p9p":"Από τη Μεσσηνία, και κάπαρη Σαντορίνης",
  "p10t":"Ελληνικά κρασιά","p10p":"Ασύρτικο, Μαλαγουζιά, Ξινόμαυρο",
  "se.t":"Στην εποχή τους αυτόν τον μήνα","se.p":"Μαγειρέψτε με τις ελληνικές εποχές: καλύτερα προϊόντα, συχνά καλύτερες τιμές.",
  "se.fv":"Φρούτα &amp; λαχανικά","se.sea":"Από τη θάλασσα",
  "se.note":"Η αλιεία με μηχανότρατα απαγορεύεται στα παράκτια ύδατα από 1 Ιουνίου έως 30 Σεπτεμβρίου. Το καλοκαίρι, γαρίδες, καραβίδες και μπακαλιάρος είναι κυρίως κατεψυγμένα ή εισαγόμενα. Ενημερώστε μας νωρίς αν τα χρειάζεστε νωπά.",

  "del.eyebrow":"Παράδοση","del.title":"Πού παραδίδουμε και σε πόσο χρόνο",
  "del.note":"Μαρίνες, προβλήτες και βίλες. Στην άγκυρα, συναντάμε το tender σας στην πλησιέστερη προβλήτα.",
  "del.coreTag":"Επόμενη μέρα","del.reqTag":"48–72 ώρες · κατόπιν αιτήματος",
  "del.r1":"Κυκλάδες","del.r1p":"Μύκονος · Πάρος · Αντίπαρος","del.r2":"Ιόνιο","del.r2p":"Κέρκυρα",
  "del.r3":"Κρήτη","del.r3p":"Χανιά · Ηράκλειο · Ελούντα · Άγιος Νικόλαος",
  "del.r4":"Αθήνα &amp; Σαρωνικός","del.r4p":"Πειραιάς · Άλιμος · Λαύριο · Ύδρα · Σπέτσες · Πόρτο Χέλι",
  "del.r5":"Υπόλοιπες Κυκλάδες","del.r5p":"Νάξος · Σαντορίνη · Σύρος · Μήλος · Ίος",
  "del.r6":"Υπόλοιπο Ιόνιο","del.r6p":"Παξοί · Λευκάδα · Κεφαλονιά · Ζάκυνθος",
  "lg.1t":"Πλοία &amp; μελτέμια","lg.1p":"Από τον Ιούνιο ως τον Σεπτέμβριο, οι ισχυροί άνεμοι μπορεί να ακυρώσουν δρομολόγια. Στέλνουμε νωρίτερα και σας ενημερώνουμε την προηγούμενη μέρα, ποτέ το πρωί της παράδοσης.",
  "lg.2t":"Ψυχρή αλυσίδα","lg.2p":"Ψυχόμενα στους 0–4 °C και κατεψυγμένα στους −18 °C, σε χωριστά ψυγεία, από τον προμηθευτή ως το ψυγείο σας.",
  "lg.3t":"Πρόσβαση στη μαρίνα","lg.3p":"Στείλτε μας τη θέση πρόσδεσης και ένα τηλέφωνο του πληρώματος. Κανονίζουμε την είσοδο με το γραφείο της μαρίνας.",

  "do.t":"Τι κάνουμε","do.1":"Φρούτα, λαχανικά, ψάρια, κρέας, γαλακτοκομικά και αρτοσκευάσματα","do.2":"Ελληνικά προϊόντα και πλήρης αποθήκη τροφίμων",
  "do.3":"Ποτά, φαγητό πληρώματος και αναλώσιμα κουζίνας","do.4":"Παράδοση στην προβλήτα, στο tender σας ή στη βίλα","do.5":"Αναζήτηση ειδικών προϊόντων κατόπιν αιτήματος",
  "dont.t":"Τι δεν κάνουμε","dont.1":"Μαγείρεμα ή catering","dont.2":"Καύσιμα, ανταλλακτικά ή ναυτιλιακά είδη",
  "dont.3":"Αντικαταστάσεις χωρίς τη σύμφωνη γνώμη σας","dont.4":"Χρεώσεις πριν εγκρίνετε την προσφορά","dont.5":"Παραδόσεις εκτός Ελλάδας",

  "pc.eyebrow":"Τιμές &amp; πληρωμή","pc.title":"Ξεκάθαρες τιμές πριν δεσμευτείτε",
  "pc.lead":"Χωρίς κρυφό τιμοκατάλογο και χωρίς επιπλέον χρεώσεις μετά την παράδοση. Ζητήστε τις τιμές της εβδομάδας όποτε θέλετε.",
  "pc.cta":"Ζητήστε τις τιμές της εβδομάδας",
  "t1t":"Τι περιέχει η προσφορά","t1p":"Προϊόν, προέλευση, τιμή μονάδας και ποσότητα σε κάθε γραμμή. Η παράδοση είναι ξεχωριστή γραμμή. Το σύνολο περιλαμβάνει ΦΠΑ.",
  "t2t":"Αντικαταστάσεις","t2p":"Ποτέ χωρίς την έγκρισή σας. Αν ένα προϊόν δεν περάσει τον έλεγχό μας, σας τηλεφωνούμε πρώτα.",
  "t3t":"Πληρωμή","t3p":"Σύνδεσμος πληρωμής με κάρτα ή τραπεζική μεταφορά, σε ευρώ. Η παραγγελία επιβεβαιώνεται με την πληρωμή.",
  "t4t":"Τιμολόγια","t4p":"Ηλεκτρονικά τιμολόγια διαβιβασμένα στο myDATA της ΑΑΔΕ, στο όνομα της πλοιοκτήτριας ή της εταιρείας διαχείρισης.",
  "t5t":"Εγγύηση ποιότητας","t5p":"Κάτι δεν είναι όπως πρέπει; Πείτε μας κατά την παράδοση και το αντικαθιστούμε ή σας πιστώνουμε την αξία του.",
  "t6t":"Ποιότητα guest &amp; crew","t6p":"Κορυφαία ποιότητα για το τραπέζι των φιλοξενούμενων, λογική ποιότητα για το mess του πληρώματος. Σημειώστε το στη λίστα σας.",

  "dt.eyebrow":"Προγραμματίστε έγκαιρα","dt.title":"Ελληνικές ημερομηνίες που επηρεάζουν την τροφοδοσία το 2027","dt.note":"Γύρω από αυτές τις ημερομηνίες, παραγγείλτε 48 ώρες νωρίτερα.",
  "d1d":"15 Μαρ","d1":"Καθαρά Δευτέρα: αργία, αρχή της Σαρακοστής. Αυξημένη ζήτηση για θαλασσινά.",
  "d2d":"25 Μαρ","d2":"Εθνική επέτειος: αργία.",
  "d3d":"30 Απρ – 3 Μαΐ","d3":"Ορθόδοξο Πάσχα: το αρνί εξαντλείται νωρίς. Μειωμένο ωράριο Παρασκευή και Σάββατο, κλειστά Κυριακή και Δευτέρα.",
  "d4d":"1 Μαΐ","d4":"Εργατική Πρωτομαγιά: το 2027 συμπίπτει με το Μεγάλο Σάββατο και συνήθως μετατίθεται. Η ημερομηνία θα επιβεβαιωθεί.",
  "d5d":"21 Ιουν","d5":"Αγίου Πνεύματος: κλειστές τράπεζες, κάποιοι προμηθευτές κλειστοί.",
  "d6d":"15 Αυγ","d6":"Δεκαπενταύγουστος: αιχμή της σεζόν, γεμάτα πλοία, κλειστές αγορές. Παραγγείλτε έως τις 12 Αυγούστου.",
  "d7d":"28 Οκτ","d7":"Επέτειος του «Όχι»: αργία.",

  "or.eyebrow":"Το αίτημά σας","or.title":"Στείλτε το αίτημά σας",
  "or.lead":"Τέσσερα σύντομα βήματα. Σας απαντάμε στο WhatsApp με αναλυτική προσφορά. Καμία χρέωση πριν την εγκρίνετε.",
  "or.noitems":"Δεν έχετε επιλέξει προϊόντα ακόμη. Δείτε τον κατάλογο ή γράψτε τη λίστα σας παρακάτω.",
  "or.wa":"WhatsApp","or.email":"Email","or.hours":"Ωράριο","or.hoursV":"Καθημερινά 08:00–22:00 τη σεζόν",
  "wz.s1":"Η λίστα σας","wz.s2":"Παράδοση","wz.s3":"Επικοινωνία","wz.s4":"Έλεγχος &amp; αποστολή",
  "wz.s1h":"Ελέγξτε τις ποσότητες και προσθέστε ό,τι δεν υπάρχει στον κατάλογο.",
  "wz.more":"+ Προσθήκη προϊόντων","wz.grade":"Ποιότητα","wz.g1":"Τραπέζι φιλοξενούμενων","wz.g2":"Mess πληρώματος","wz.g3":"Και τα δύο",
  "fm.notes":"Κάτι άλλο (είδη, αλλεργίες, μάρκες)","wz.notesph":"π.χ. 2 κιλά καραβίδες, χωρίς ξηρούς καρπούς, καφές Illy",
  "wz.s2h":"Πού και πότε να παραδώσουμε;","fm.where":"Νησί","wz.next":"Επόμενη μέρα",
  "fm.l1":"Μύκονος","fm.l2":"Πάρος","fm.l3":"Αντίπαρος","fm.l4":"Κέρκυρα","fm.l5":"Κρήτη","fm.other":"Άλλο",
  "fm.date":"Ημερομηνία","fm.time":"Ώρα","fm.t1":"08–12","fm.t2":"12–16","fm.t3":"16–20","fm.t4":"Ευέλικτα",
  "wz.type":"Παράδοση σε","wz.ty1":"Θέση στη μαρίνα","wz.ty2":"Στην άγκυρα (tender)","wz.ty3":"Βίλα",
  "fm.berth":"Λιμάνι και θέση πρόσδεσης ή διεύθυνση βίλας","wz.berthph":"π.χ. Νέο Λιμάνι Μυκόνου, θέση 12",
  "wz.guests":"Φιλοξενούμενοι","wz.crew":"Πλήρωμα",
  "wz.s3h":"Σε ποιον να στείλουμε την προσφορά;","fm.name":"Ονοματεπώνυμο","fm.phone":"Τηλέφωνο / WhatsApp",
  "fm.vessel":"Όνομα σκάφους ή βίλας","wz.email":"Email (προαιρετικό)",
  "wz.role":"Είστε","wz.r1":"Σεφ","wz.r2":"Καπετάνιος / purser","wz.r3":"Διαχειριστής βίλας","wz.r4":"Άλλο",
  "wz.s4h":"Ελέγξτε τα στοιχεία και στείλτε. Το WhatsApp ανοίγει με το αίτημα έτοιμο.",
  "fm.sent":"Το αίτημά σας είναι έτοιμο στο WhatsApp. Πατήστε αποστολή εκεί. Δεν άνοιξε;","fm.copy":"Αντιγραφή κειμένου",
  "fm.sendWa":"Αποστολή στο WhatsApp","fm.sendMail":"Αποστολή με email","wz.back":"Πίσω","wz.nextBtn":"Συνέχεια",

  "faq.eyebrow":"Ερωτήσεις","faq.title":"Χρήσιμες πληροφορίες",
  "q1":"Πόσο νωρίτερα πρέπει να παραγγείλω;","a1":"Στα νησιά με παράδοση την επόμενη μέρα, παραγγείλτε έως τις 14:00. Για την αρχή ενός ναύλου, 3–5 μέρες νωρίτερα μας επιτρέπουν να βρούμε ειδικά προϊόντα και να ετοιμάσουμε κρέας και ψάρι σε μερίδες. Στην υπόλοιπη Ελλάδα, υπολογίστε 48–72 ώρες.",
  "q2":"Μπορώ να δω τιμές πριν παραγγείλω;","a2":"Ναι. Στείλτε μας μήνυμα στο WhatsApp και σας στέλνουμε τις τιμές της εβδομάδας για ό,τι χρειάζεστε. Χωρίς φόρμα, χωρίς εγγραφή.",
  "q3":"Υπάρχει κόστος παράδοσης ή ελάχιστη παραγγελία;","a3":"Το κόστος παράδοσης εμφανίζεται ως ξεχωριστή γραμμή στην προσφορά, ώστε να το βλέπετε πριν πληρώσετε.",
  "q4":"Παραδίδετε Κυριακές και αργίες;","a4":"Τη σεζόν ναι, με έγκαιρη ενημέρωση. Στις αργίες η αγορά υπολειτουργεί, οπότε δείτε τις ημερομηνίες παραπάνω και παραγγείλτε νωρίτερα.",
  "q5":"Κι αν ακυρωθεί ένα δρομολόγιο;","a5":"Σας ενημερώνουμε μόλις κάποιο δρομολόγιο κινδυνεύσει και προτείνουμε λύση: προηγούμενο δρομολόγιο, τοπικό προμηθευτή στο νησί σας ή αλλαγή στο μενού.",
  "q6":"Εξυπηρετείτε βίλες και ιδιωτικούς σεφ;","a6":"Ναι. Εκτός από σκάφη, προμηθεύουμε κουζίνες βιλών, ιδιωτικούς σεφ και εταιρείες catering.",
  "q7":"Βρίσκετε προϊόντα που δεν είναι στη λίστα;","a7":"Συνήθως ναι. Προσθέστε το στη λίστα σας ή στείλτε μια φωτογραφία στο WhatsApp. Επιβεβαιώνουμε διαθεσιμότητα, χρόνο και τιμή στην προσφορά.",

  "ft.p":"Τροφοδοσία σκαφών και βιλών στα ελληνικά νησιά.","ft.contact":"Επικοινωνία","ft.hours":"Καθημερινά 08:00–22:00 τη σεζόν",
  "ft.menu":"Μενού","ft.terms":"Όροι","ft.privacy":"Απόρρητο",
  "bar.list":"Η παραγγελία μου","bar.next":"Συνέχεια →"
};

/* ================= 5. State ================= */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const EN = {};
let lang = "en", query = "", month = new Date().getMonth();
let cat = window.matchMedia("(max-width:720px)").matches ? "fv" : "all";   // phones open on one category
let cart = { items:{}, custom:[] };   // items: {id: qty}; custom: [{id, name, qty}]
try { const c = JSON.parse(localStorage.getItem("ycp-cart")); if (c && c.items && Array.isArray(c.custom)) cart = c; } catch(e){}
const save = () => { try { localStorage.setItem("ycp-cart", JSON.stringify(cart)); } catch(e){} };
const T = () => UI[lang];
const L = () => lang === "el" ? 1 : 0;
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const pname = p => lang === "el" ? p.el : p.en;
const pnote = p => lang === "el" ? p.noteEl : p.noteEn;
const fmtQty = q => lang === "el" ? String(q).replace(".", ",") : String(q);
const unitText = unit => unit === "custom" ? T().customNote : UNITS[unit][L()];
function qtyLabel(unit, q){
  if (unit === "custom") return T().customNote;
  if (unit === "kg" || unit === "l" || unit === "pc") return `${fmtQty(q)} ${unitText(unit)}`;
  return `${fmtQty(q)} × ${unitText(unit)}`;
}

/* ================= 6. Catalogue ================= */
const inCat = (p, c) => c === "all" || (c === "gr" ? p.tags.includes("gr") : p.cat === c);
const matches = p => !query || norm(`${p.en} ${p.el} ${p.noteEn} ${p.noteEl}`).includes(norm(query));
const PLUS = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

function renderCats(){
  $("#cats").innerHTML = CATS.map(c => {
    const n = PRODUCTS.filter(p => inCat(p, c) && matches(p)).length;
    return `<button type="button" class="cat" data-cat="${c}" aria-pressed="${c===cat}"><span>${esc(T().cat[c])}</span><small>${n}</small></button>`;
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
const ICONS = { // simple line icons per category
  fv:'<path d="M12 21c-4.5 0-7-3.3-7-7.2C5 10 7.6 7.5 12 7.5S19 10 19 13.8C19 17.7 16.5 21 12 21Z"/><path d="M12 7.5c0-2 1-3.6 3-4.5M12 7.5C10.6 5.8 8.6 5.3 7 5.6"/>',
  fish:'<path d="M3 12c3-4.5 8-6 12-3.6L20 5v14l-5-3.4C11 18 6 16.5 3 12Z"/><circle cx="8.5" cy="11" r=".9" fill="currentColor"/>',
  meat:'<path d="M14.5 3.5a6 6 0 0 1 2.9 11.2l-2.6 1.4-2.3 2.3a2.5 2.5 0 1 1-3.3-3.3l2.3-2.3 1.4-2.6A6 6 0 0 1 14.5 3.5Z"/><path d="M8 19.5 5.2 21.8M5.5 16 3 18.5"/>',
  dairy:'<path d="M4 15.5 13 8l7 4v6H4Z"/><path d="M4 15.5V18M9 15h.01M15 14h.01M12 17h.01"/>',
  bakery:'<path d="M4 15c0-5 3.6-9 8-9s8 4 8 9v3H4Z"/><path d="M9 9.5c.6 1.4.6 3.6 0 5M15 9.5c-.6 1.4-.6 3.6 0 5M12 8.5v7"/>',
  pantry:'<path d="M7 7h10v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z"/><path d="M8 3.5h8V7H8ZM7 12h10"/>',
  drinks:'<path d="M10 3h4v4l2 3v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V10l2-3Z"/><path d="M8 13h8"/>',
  galley:'<path d="M9 4h6l-1 4h-4Z"/><path d="M8 8h8l1 13H7Z"/><path d="M15 4h3l1 2"/>'
};
const icon = c => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[c]||ICONS.pantry}</svg>`;
let justAdded = null, justAddedLine = false;
function bumpCount(){
  justAddedLine = true;
  $$("[data-count], [data-count-text]").forEach(el => { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); });
}
function rowHtml(p){
  const q = cart.items[p.id];
  const sub = [pnote(p), unitText(p.unit)].filter(Boolean).join(" · ");
  const tags = p.tags.map(t => `<span class="tagsm ${t}">${T().tag[t]}</span>`).join("");
  return `<div class="pr${q ? " in" : ""}${justAdded === p.id ? " just" : ""}" data-card="${p.id}">
    <span class="pi">${icon(p.cat)}</span>
    <span class="pt"><b>${esc(pname(p))}</b><small>${esc(sub)}</small></span>
    <span class="ptags">${tags}</span>
    ${q ? stepper(p.id, q, "grid")
        : `<button type="button" class="add" data-act="add" data-id="${p.id}" data-key="add:${p.id}:grid" aria-label="${esc(T().add(pname(p)))}">${PLUS}</button>`}
  </div>`;
}
function renderGrid(){
  const list = PRODUCTS.filter(p => inCat(p, cat) && matches(p));
  $("#result-count").textContent = T().results(list.length);
  let html = "";
  if (cat === "all" && !query){            // grouped by category, like a provisioning sheet
    CATS.slice(2).forEach(c => {
      const g = list.filter(p => p.cat === c); if (!g.length) return;
      html += `<h3 class="group-h">${esc(T().cat[c])}<small>${g.length}</small></h3><div class="plist">${g.map(rowHtml).join("")}</div>`;
    });
  } else {
    html = list.length ? `<div class="plist">${list.map(rowHtml).join("")}</div>` : "";
  }
  $("#grid").innerHTML = html;
  justAdded = null;
  const empty = list.length === 0;
  $("#empty").hidden = !empty;
  if (empty) $("#add-custom").textContent = T().addCustom(query.trim());
}

/* ================= 7. Order list ================= */
function lines(){
  const out = Object.entries(cart.items).filter(([id]) => BY_ID[id]).map(([id,q]) => ({id, q, name:pname(BY_ID[id]), unit:BY_ID[id].unit}));
  cart.custom.forEach(c => out.push({id:c.id, q:c.qty, name:c.name, unit:"custom"}));
  return out;
}
const lineHtml = (l, where) => `<li class="line"><span class="line-name">${esc(l.name)}<span class="line-unit">${esc(qtyLabel(l.unit, l.q))}</span></span>${stepper(l.id, l.q, where)}</li>`;
function renderCart(){
  const ls = lines(), n = ls.length;
  $("#cart-list").innerHTML = ls.map(l => lineHtml(l, "cart")).join("");
  $("#summary-list").innerHTML = ls.map(l => lineHtml(l, "sum")).join("");
  $("#cart-empty").hidden = n > 0;
  $("#summary-empty").hidden = n > 0;
  $("#cart-clear").hidden = n === 0;
  $$("[data-count]").forEach(el => { el.textContent = n; el.hidden = n === 0; });
  if (justAddedLine) { const li = $$("#cart-list .line").pop(); if (li) li.classList.add("just"); justAddedLine = false; }
  $$("[data-count-text]").forEach(el => el.textContent = n);
  updateBar();
  updateNav(); if (wStep === 4) renderReview();
}
function renderAll(){
  const key = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.key : null;
  renderCats(); renderGrid(); renderCart();
  if (key){ // keep keyboard focus on the same control after re-render
    const [, id, where] = key.split(":");
    const el = $(`[data-key="${key}"]`) || $(`[data-key="inc:${id}:${where}"]`) || $(`[data-key="add:${id}:grid"]`);
    if (el) el.focus({preventScroll:true});
  }
}
const step = id => id.startsWith("c-") ? 1 : UNITS[BY_ID[id].unit][2];
const getQty = id => id.startsWith("c-") ? ((cart.custom.find(x => x.id === id)||{}).qty || 0) : (cart.items[id] || 0);
function setQty(id, q){
  q = Math.max(0, Math.round(q * 2) / 2);
  if (id.startsWith("c-")){
    const c = cart.custom.find(x => x.id === id); if (!c) return;
    if (q <= 0) cart.custom = cart.custom.filter(x => x.id !== id); else c.qty = q;
  } else if (BY_ID[id]) {
    if (q <= 0) delete cart.items[id]; else cart.items[id] = q;
  }
  save(); renderAll();
}
function addProduct(id){ justAdded = id; bumpCount(); setQty(id, 1); const plus = $(`[data-key="inc:${id}:grid"]`); if (plus) plus.focus({preventScroll:true}); }
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
    if (b.dataset.act === "add") addProduct(id);
    if (b.dataset.act === "inc") setQty(id, getQty(id) + step(id));
    if (b.dataset.act === "dec") setQty(id, getQty(id) - step(id));
    return;
  }
  const card = e.target.closest("[data-card]");          // tap anywhere on a product card to add it
  if (card && !cart.items[card.dataset.card]) { addProduct(card.dataset.card); return; }
  const c = e.target.closest("[data-cat]");
  if (c){ cat = c.dataset.cat; renderCats(); renderGrid(); }
  const m = e.target.closest("[data-month]");
  if (m){ month = +m.dataset.month; renderSeason(); }
});
$("#search").addEventListener("input", e => { query = e.target.value; renderCats(); renderGrid(); });
$("#add-custom").addEventListener("click", () => { addCustom(query); query = ""; $("#search").value = ""; renderAll(); });
$("#custom-form").addEventListener("submit", e => { e.preventDefault(); const i = $("#custom-input"); addCustom(i.value); i.value = ""; i.focus(); });
$("#cart-clear").addEventListener("click", () => { cart = { items:{}, custom:[] }; save(); renderAll(); });

/* ================= 8. Seasonal guide ================= */
function renderSeason(){
  const box = $("#months");
  if (!box.children.length) box.innerHTML = MONTHS.en.map((_, i) => `<button type="button" data-month="${i}"></button>`).join("");
  $$("button", box).forEach((b, i) => { b.textContent = MONTHS[lang][i]; b.setAttribute("aria-pressed", i === month); });
  const li = (keys, dict) => keys.split(" ").map(k => `<li>${esc(dict[k][L()])}</li>`).join("");
  $("#season-produce").innerHTML = li(SEASON[month].p, SP);
  $("#season-sea").innerHTML = li(SEASON[month].s, SS);
}

/* ================= 9. Inquiry (4-step wizard) ================= */
const form = $("#order-form");
const errBox = $("#form-error");
const stepsEls = $$(".wiz-step", form);
let wStep = 1, lastMessage = "";
function localISO(d){ const x = new Date(d); x.setMinutes(x.getMinutes() - x.getTimezoneOffset()); return x.toISOString().slice(0,10); }
const tomorrow = () => { const d = new Date(); d.setDate(d.getDate() + 1); return localISO(d); };
form.date.min = tomorrow();
function fmtDate(iso){
  const [y,m,d] = iso.split("-").map(Number);
  return new Date(y, m-1, d).toLocaleDateString(lang === "el" ? "el-GR" : "en-GB", { weekday:"short", day:"numeric", month:"short", year:"numeric" });
}
const val = n => (form.elements[n] && form.elements[n].value || "").trim();
const choice = n => { const i = $(`input[name="${n}"]:checked`, form); return i ? i.nextElementSibling.textContent.trim() : ""; };
const pickedWhere = () => !!$('input[name="where"]:checked', form);

// remember what was typed (per browser)
function saveForm(){
  const d = {}; [...new FormData(form)].forEach(([k, v]) => d[k] = v);
  try { localStorage.setItem("ycp-form", JSON.stringify(d)); } catch(e){}
}
function restoreForm(){
  let d = null; try { d = JSON.parse(localStorage.getItem("ycp-form")); } catch(e){}
  if (!d) return;
  Object.entries(d).forEach(([k, v]) => {
    const els = $$(`[name="${k}"]`, form);
    els.forEach(el => { if (el.type === "radio") el.checked = el.value === v; else el.value = v; });
  });
  if (form.date.value && form.date.value < tomorrow()) form.date.value = "";
}

function stepProblems(n){   // returns [fields to mark, message] or null when the wStep is complete
  if (n === 1) return (!lines().length && !val("notes")) ? [[form.notes], T().errEmpty] : null;
  if (n === 2){
    const bad = [];
    if (!pickedWhere()) bad.push($("#where-group"));
    if (!form.date.value) bad.push(form.date);
    else if (form.date.value < tomorrow()) return [[form.date], T().errDate];
    return bad.length ? [bad, T().errRequired] : null;
  }
  if (n === 3){
    const bad = ["name","phone","vessel"].filter(k => !val(k)).map(k => form.elements[k]);
    if (val("phone") && val("phone").replace(/\D/g, "").length < 7) bad.push(form.phone);
    if (val("email") && !form.email.checkValidity()) bad.push(form.email);
    return bad.length ? [bad, T().errRequired] : null;
  }
  return null;
}
function clearMarks(){ $$(".invalid", form).forEach(el => { el.classList.remove("invalid"); el.removeAttribute("aria-invalid"); }); errBox.hidden = true; }
function validateStep(n){
  clearMarks();
  const p = stepProblems(n); if (!p) return true;
  p[0].forEach(el => { el.classList.add("invalid"); el.setAttribute("aria-invalid", "true"); });
  errBox.textContent = p[1]; errBox.hidden = false;
  const first = p[0][0]; (first.matches("input,textarea,select") ? first : $("input", first)).focus();
  return false;
}

function updateNav(){
  const n = lines().length;
  $("#wn-1").textContent = n ? T().items(n) : (val("notes") ? T().notesOnly : "");
  $("#wn-2").textContent = [pickedWhere() ? choice("where") : "", form.date.value ? fmtDate(form.date.value) : ""].filter(Boolean).join(" · ");
  $("#wn-3").textContent = [val("name"), val("vessel")].filter(Boolean).join(" · ");
  $("#wn-4").textContent = "";
  $$("#wiz-nav li").forEach((li, i) => {
    const s = i + 1;
    li.classList.toggle("current", s === wStep);
    li.classList.toggle("done", s < 4 && !stepProblems(s) && s !== wStep);
  });
}
function showStep(n, scroll){
  wStep = n;
  stepsEls.forEach(fs => { const on = +fs.dataset.step === n; fs.hidden = !on; if (on){ fs.classList.remove("enter"); void fs.offsetWidth; fs.classList.add("enter"); } });
  $("#wiz-num").textContent = n;
  $("#wiz-bar").style.width = (n / 4 * 100) + "%";
  $("#wiz-back").style.visibility = n === 1 ? "hidden" : "visible";
  $("#wiz-next").hidden = n === 4;
  $("#send-row").hidden = n !== 4;
  $("#sent").hidden = true;
  clearMarks();
  if (n === 4) renderReview();
  updateNav();
  if (scroll){ const top = form.getBoundingClientRect().top; if (top < 70 || top > innerHeight * .6) form.scrollIntoView({ behavior:"smooth", block:"start" }); }
}
function goTo(n){   // can always go back; going forward requires the earlier steps to be complete
  for (let s = 1; s < n; s++){ if (stepProblems(s)){ showStep(s, true); validateStep(s); return; } }
  showStep(n, true);
}

function renderReview(){
  const ls = lines(), L = T().msg, ed = s => `<button type="button" class="link-light" data-goto="${s}">${esc(T().edit)}</button>`;
  const row = (k, v) => v ? `<div class="rv-row"><span>${esc(k)}</span><span>${esc(v)}</span></div>` : "";
  const items = ls.length ? `<ul class="rv-list">${ls.map(l => `<li><span>${esc(l.name)}</span><span>${esc(l.unit === "custom" ? fmtQty(l.q) : qtyLabel(l.unit, l.q))}</span></li>`).join("")}</ul>` : "";
  const pax = [val("guests") && `${val("guests")} ${L.guests.toLowerCase()}`, val("crew") && `${val("crew")} ${L.crew.toLowerCase()}`].filter(Boolean).join(" · ");
  $("#review").innerHTML = `
    <div class="rv"><div class="rv-h"><b>${esc(EN_OR_EL("wz.s1"))}</b>${ed(1)}</div>${items}${row(L.grade, choice("grade"))}${row(L.notes, val("notes"))}</div>
    <div class="rv"><div class="rv-h"><b>${esc(EN_OR_EL("wz.s2"))}</b>${ed(2)}</div>
      ${row(L.where, choice("where"))}${row(L.date, form.date.value ? `${fmtDate(form.date.value)} · ${choice("time")}` : "")}
      ${row(L.type, choice("type"))}${row(L.berth, val("berth"))}${row(L.pax, pax)}</div>
    <div class="rv"><div class="rv-h"><b>${esc(EN_OR_EL("wz.s3"))}</b>${ed(3)}</div>
      ${row(L.name, val("name"))}${row(L.phone, val("phone"))}${row(L.vessel, val("vessel"))}${row(L.email, val("email"))}${row(L.role, choice("role"))}</div>`;
}
const EN_OR_EL = k => (lang === "el" ? EL[k] : EN[k] || "").replace(/&amp;/g, "&");

function buildMessage(){
  const L = T().msg, out = [`*${L.h}*`, ""];
  const add = (k, v) => { if (v) out.push(`${L[k]}: ${v}`); };
  add("name", val("name")); add("role", choice("role")); add("phone", val("phone")); add("email", val("email")); add("vessel", val("vessel"));
  out.push("");
  add("where", choice("where")); add("date", form.date.value ? `${fmtDate(form.date.value)} · ${choice("time")}` : "");
  add("type", choice("type")); add("berth", val("berth"));
  add("pax", [val("guests") && `${val("guests")} ${L.guests.toLowerCase()}`, val("crew") && `${val("crew")} ${L.crew.toLowerCase()}`].filter(Boolean).join(" · "));
  const ls = lines();
  if (ls.length){ out.push("", `*${L.list}* (${choice("grade")})`); ls.forEach(l => out.push(`• ${l.name} — ${l.unit === "custom" ? fmtQty(l.q) : qtyLabel(l.unit, l.q)}`)); }
  if (val("notes")) out.push("", `${L.notes}:`, val("notes"));
  return out.join("\n");
}
function send(via){
  for (let s = 1; s <= 3; s++){ if (stepProblems(s)){ showStep(s, true); validateStep(s); return; } }
  lastMessage = buildMessage();
  if (via === "mail" && CONFIG.email){
    let body = lastMessage.replace(/\*/g, "");
    if (body.length > 1800){ copyText(body); body = body.slice(0, 1500) + "\n…\n" + T().mailCut; }
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(T().msg.h + " · " + val("vessel"))}&body=${encodeURIComponent(body)}`;
  } else {
    window.open(waLink(lastMessage), "_blank", "noopener");
  }
  $("#sent").hidden = false;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const via = (e.submitter && e.submitter.dataset.send) || (wStep === 4 ? "wa" : "next");
  if (via === "next"){ if (validateStep(wStep)) showStep(wStep + 1, true); return; }
  send(via);
});
$("#send-mail").addEventListener("click", () => send("mail"));
$("#wiz-back").addEventListener("click", () => showStep(Math.max(1, wStep - 1), true));
form.addEventListener("input", e => { if (e.target.classList.contains("invalid")) { e.target.classList.remove("invalid"); e.target.removeAttribute("aria-invalid"); } saveForm(); updateNav(); });
form.addEventListener("change", e => { if (e.target.name === "where") $("#where-group").classList.remove("invalid"); saveForm(); updateNav(); });
function copyText(t){
  if (navigator.clipboard) return navigator.clipboard.writeText(t).catch(() => {});
  const a = document.createElement("textarea"); a.value = t; document.body.appendChild(a); a.select();
  try { document.execCommand("copy"); } catch(e){} a.remove();
}
$("#copy-msg").addEventListener("click", e => { copyText(lastMessage.replace(/\*/g, "")); e.currentTarget.textContent = T().copied; });
document.addEventListener("click", e => {    // wStep navigation: side list, review "Edit", cart "Continue"
  const g = e.target.closest("[data-goto]"); if (!g) return;
  const n = +g.dataset.goto;
  if (g.tagName === "A"){ showStep(n === 2 && stepProblems(1) ? 1 : n, false); return; }   // links scroll on their own
  goTo(n);
});
restoreForm();

/* ================= 10. Contact links ================= */
const waLink = text => `https://wa.me/${CONFIG.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : "");
function updateLinks(){
  $$("[data-wa]").forEach(a => {
    const k = a.dataset.wa; a.href = waLink(k === "hello" ? T().hello : k === "prices" ? T().prices : "");
    a.target = "_blank"; a.rel = "noopener";
  });
  $$("[data-if-email]").forEach(el => el.hidden = !CONFIG.email);
  $$("[data-mail]").forEach(a => a.href = `mailto:${CONFIG.email}`);
  $$("[data-cfg]").forEach(el => el.textContent = CONFIG[el.dataset.cfg]);
}

/* ================= 11. Language ================= */
function setLang(next){
  lang = next === "el" ? "el" : "en";
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => { const v = lang === "el" ? EL[el.dataset.i18n] : EN[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
  $$("[data-i18n-ph]").forEach(el => { const k = el.dataset.i18nPh; el.placeholder = lang === "el" ? EL[k] : EN["ph:" + k]; });
  $$("[data-i18n-aria]").forEach(el => { const k = el.dataset.i18nAria; el.setAttribute("aria-label", lang === "el" ? EL[k] : EN["aria:" + k]); });
  $$(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  document.title = T().title;
  $('meta[name="description"]').setAttribute("content", T().desc);
  updateLinks(); renderAll(); renderSeason();
  updateNav(); if (wStep === 4) renderReview();
  try { localStorage.setItem("lang", lang); } catch(e){}
}
$$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

/* ================= 12. Header, menu, mobile bar ================= */
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
new IntersectionObserver(es => es.forEach(en => { orderVisible = en.isIntersecting; updateBar(); })).observe($("#order"));
new IntersectionObserver(es => es.forEach(en => { footerVisible = en.isIntersecting; updateBar(); })).observe($(".footer"));
const onScroll = () => { header.classList.toggle("scrolled", scrollY > 30); pastHero = scrollY > innerHeight * .6; updateBar(); };
addEventListener("scroll", onScroll, { passive:true });

/* ================= 13. Motion ================= */
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduce){
  document.documentElement.classList.add("motion");
  const groups = [".head", ".why-grid > *", ".steps > li", ".pantry > li", ".season", ".regions > *", ".logistics > *",
                  ".scope-col", ".terms > div", ".dates > li", ".pricing-intro", ".order-intro", ".form", ".faq details", ".footer-panel"];
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
  }), { rootMargin:"0px 0px -8% 0px" });
  groups.forEach(sel => $$(sel).forEach((el, i) => { el.classList.add("reveal"); el.style.setProperty("--i", i % 6); io.observe(el); }));
  const m1 = $(".hero-media .m1"), m2 = $(".hero-media .m2");   // hero photos drift on scroll
  addEventListener("scroll", () => {
    if (scrollY > innerHeight || innerWidth < 1100) return;
    m1.style.translate = `0 ${scrollY * .06}px`; m2.style.translate = `0 ${scrollY * -.05}px`;
  }, { passive:true });
}
const how = $("#how"), stepsLine = $(".steps-line"), stepEls = $$(".steps > li");   // progress line in "How it works"
function stepsProgress(){
  const r = how.getBoundingClientRect(), vh = innerHeight;
  const p = Math.min(1, Math.max(0, (vh * .75 - r.top) / (r.height * .7)));
  stepsLine.style.setProperty("--p", p.toFixed(3));
  stepEls.forEach((el, i) => el.classList.toggle("on", p >= (i + .5) / stepEls.length));
}
addEventListener("scroll", stepsProgress, { passive:true }); stepsProgress();
const navLinks = $$(".nav a");   // highlight the nav link of the section in view
const secIO = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin:"-45% 0px -50% 0px" });
navLinks.forEach(a => { const sec = $(a.getAttribute("href")); if (sec) secIO.observe(sec); });

/* ================= 14. Init ================= */
$$("[data-i18n]").forEach(el => { if (!(el.dataset.i18n in EN)) EN[el.dataset.i18n] = el.innerHTML; });
$$("[data-i18n-ph]").forEach(el => EN["ph:" + el.dataset.i18nPh] = el.placeholder);
$$("[data-i18n-aria]").forEach(el => EN["aria:" + el.dataset.i18nAria] = el.getAttribute("aria-label"));
$("#year").textContent = new Date().getFullYear();
let saved = null; try { saved = localStorage.getItem("lang"); } catch(e){}
setLang(saved === "el" || saved === "en" ? saved : ((navigator.language || "").toLowerCase().startsWith("el") ? "el" : "en"));
setMenu(false); onScroll(); showStep(1, false);
