# Vodič za dvojezični sistem / Bilingual System Guide

## 🌐 Pregled / Overview

Sajt je sada potpuno dvojezičan sa podrškom za:
- 🇬🇧 **Engleski** (English) - Podrazumevani jezik / Default language
- 🇷🇸 **Srpski** (Serbian) - Alternativni jezik / Alternative language

## 🔧 Kako funkcioniše / How it works

### 1. Dugme za promenu jezika / Language Toggle Button

U navigaciji postoji dugme sa trenutnim jezikom koji NIJE aktivan:
- Ako je aktivan **engleski**, dugme prikazuje **SR** (kliknite za prebacivanje na srpski)
- Ako je aktivan **srpski**, dugme prikazuje **EN** (kliknite za prebacivanje na engleski)

### 2. Pamćenje izbora / Remembering Choice

Sistem koristi `localStorage` da zapamti izbor jezika korisnika:
- Izbor se čuva između sesija
- Prilikom ponovnog posete sajta, učitava se prethodno izabrani jezik

### 3. HTML Atributi / HTML Attributes

Svi elementi sa prevodom koriste `data-lang` atribute:

```html
<!-- Za obične tekstove -->
<h2 data-lang-en="Products" data-lang-sr="Proizvodi">Products</h2>

<!-- Za input polja (placeholder) -->
<input type="text" 
       data-lang-en-placeholder="Your Name" 
       data-lang-sr-placeholder="Vaše ime" 
       placeholder="Your Name">
```

## 📝 Dodavanje novih prevoda / Adding New Translations

Kada dodajete novi sadržaj, pratite ovaj format:

### Za tekstualne elemente:
```html
<element data-lang-en="English text" data-lang-sr="Srpski tekst">English text</element>
```

### Za placeholder atribute:
```html
<input data-lang-en-placeholder="English" data-lang-sr-placeholder="Srpski" placeholder="English">
```

### Primeri / Examples:

```html
<!-- Naslovi -->
<h2 data-lang-en="About Us" data-lang-sr="O nama">About Us</h2>

<!-- Paragrafi -->
<p data-lang-en="This is a description" data-lang-sr="Ovo je opis">This is a description</p>

<!-- Dugmad -->
<button data-lang-en="Learn More" data-lang-sr="Saznaj više">Learn More</button>

<!-- Linkovi -->
<a href="#" data-lang-en="Contact" data-lang-sr="Kontakt">Contact</a>
```

## 🎨 CSS Stilizovanje / CSS Styling

Dugme za jezik ima sledeće stilove:
- Primarnu boju (`--primary`: #DC3545)
- Hover efekat sa tamnijom bojom
- Responsive dizajn za mobilne uređaje
- Smooth transition animacije

## 📱 Responsivnost / Responsiveness

Na mobilnim uređajima (< 768px):
- Dugme se prikazuje između logoa i hamburger menija
- Smanjene dimenzije za bolju upotrebljivost
- Zadržava punu funkcionalnost

## 🔍 JavaScript Logika / JavaScript Logic

Funkcija `setLanguage(lang)` u `script.js`:
1. Postavlja jezik u `localStorage`
2. Ažurira `lang` atribut na `<html>` elementu
3. Prelazi kroz sve elemente sa `data-lang` atributima
4. Zamenjuje tekstualni sadržaj
5. Ažurira placeholder atribute
6. Menja tekst na dugmetu za jezik

## ✅ Koje sekcije imaju prevod / Translated Sections

- ✅ Navigacija / Navigation
- ✅ O nama / About Us
- ✅ Proizvodi / Products
- ✅ Usluge / Services
- ✅ Naši projekti / Our Projects
- ✅ Istraživanje i razvoj / Research & Development
- ✅ Kontakt / Contact
- ✅ Footer

## 🚀 Testiranje / Testing

Da testirate funkcionalnost:
1. Otvorite sajt u browseru
2. Kliknite na dugme "SR" u navigaciji
3. Sav sadržaj bi trebao da se prebaci na srpski
4. Kliknite "EN" da se vratite na engleski
5. Osvežite stranicu - jezik bi trebao ostati izabran

## 🛠️ Održavanje / Maintenance

Pri dodavanju novog sadržaja:
1. Uvek dodajte **oba** atributa (`data-lang-en` i `data-lang-sr`)
2. Podrazumevani tekstualni sadržaj treba biti na **engleskom**
3. Koristite UTF-8 encoding za srpska slova (latinica)
4. Testirajte oba jezika pre objave

## 📞 Podrška / Support

Za pitanja ili probleme, kontaktirajte razvojni tim.
