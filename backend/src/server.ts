import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnik from './model/korisnik';
import student from './model/student';
import zaposleni from './model/zaposleni';
import predmet from './model/predmet';
import pohadja from './model/pohadja';
import drzi from './model/drzi';
import obavestenja from './model/obavestenja';
import predavanja from './model/predavanja';
import vezbe from './model/vezbe';
import ispitna from './model/ispitna';
import labvezbe from './model/labvezbe';
import vesti from './model/vesti';
import projekat from './model/projekat';
import spisak from './model/spisak';
import prijava from './model/prijava';


const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/estudent_projekat');

const conn = mongoose.connection;

conn.once('open', ()=> {
    console.log('mongo open');
})

const router = express.Router();

router.route('/login').post((req,res) => {
    let username = req.body.username;
    let password = req.body.password;

    korisnik.findOne({'username': username, 'password':password})
    .then((korisnik) => {
        res.json(korisnik);
    }).catch((err)=> {
        console.log(err);
    });
});


router.route('/registruj').post((req,res) => {
    let s = new student(req.body);
    s.save().then(s=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});


router.route('/registrujZap').post((req,res) => {
    let z = new zaposleni(req.body);
    z.save().then(z=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});

router.route('/dodajObavestenje').post((req,res) => {
    let o = new obavestenja(req.body);
    o.save().then(o=>{
        res.status(200).json({'obavestenje':'ok'});
    }).catch(err=> {
        res.status(400).json({'obavestenje':'no'});
    });
});


router.route('/dodajPredmet').post((req,res) => {
    let p = new predmet(req.body);
    p.save().then(p=>{
        res.status(200).json({'predmet':'ok'});
    }).catch(err=> {
        res.status(400).json({'predmet':'no'});
    });
});


router.route('/dodajDrzi').post((req,res) => {
    let d = new drzi(req.body);
    d.save().then(d=>{
        res.status(200).json({'drzi':'ok'});
    }).catch(err=> {
        res.status(400).json({'drzi':'no'});
    });
});


router.route('/dodajPohadja').post((req,res) => {
    let p = new pohadja(req.body);
    p.save().then(p=>{
        res.status(200).json({'pohadja':'ok'});
    }).catch(err=> {
        res.status(400).json({'pohadja':'no'});
    });
});



router.route('/registrujKor').post((req,res) => {
    let k = new korisnik(req.body);
    k.save().then(k=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});

router.route('/dohvSveZaposlene').get((req,res)=> {
    zaposleni.find({})
    .then((zaposleni) => {
        res.json(zaposleni);
    }).catch((err)=> {
        console.log(err);
    });
});


router.route('/dohvSvaObavestenja').get((req,res)=> {
    obavestenja.find({})
    .then((obavestenja)=> {
        res.json(obavestenja);
    }).catch((err)=> {
        console.log(err);
    });
});


router.route('/dohvSveStudente').get((req,res)=> {
    student.find({})
    .then((student)=> {
        res.json(student);
    }).catch((err)=> {
        console.log(err);
    });
});


router.route('/dohvSvePredmete').get((req,res)=> {
    predmet.find({})
    .then((predmet)=> {
        res.json(predmet);
    }).catch((err)=> {
        console.log(err);
    });
});


router.route('/dohvSveVesti').get((req,res)=> {
    vesti.find({})
    .then((vesti)=> {
        res.json(vesti);
    }).catch((err)=> {
        console.log(err);
    });
});




router.route('/dohvNastavno').post((req,res) => {
    let username = req.body.username;
    zaposleni.findOne({'username': username})
    .then((zaposleni)=> {
        res.json(zaposleni);
    }).catch((err)=> {
        console.log(err);
    });
});


router.route('/dohvPredmete').post((req,res)=> {
    let username = req.body.username;
    pohadja.find({'username': username})
    .then((pohadja)=> {
        res.json(pohadja);
    }).catch((err)=> {
        console.log(err);
    });
});

router.route('/dohvPredmetFilter').post((req,res)=> {
    let naziv = req.body.naziv;
    predmet.findOne({'naziv': naziv})
    .then((predmet)=> {
        res.json(predmet);
    }).catch((err)=> {
        console.log(err);
    });
});

router.route('/dohvStudenta').post((req,res)=> {
    let username = req.body.username;
    student.findOne({'username': username})
    .then((student)=> {
        res.json(student);
    }).catch((err)=> {
        console.log(err);
    });
});

router.route('/dohvKorisnika').post((req,res) => {
    let username = req.body.username;

    korisnik.findOne({'username': username})
    .then((korisnik)=> {
        res.json(korisnik);
    }).catch((err)=> {
        console.log(err);
    });
});

router.route('/dohvDrziNaziv').post((req,res)=> {
    let naziv = req.body.naziv;
    drzi.find({'naziv': naziv})
    .then((drzi)=> {
        res.json(drzi);
    }).catch((err)=> {
        console.log(err);
    });
});

router.route('/dohvDrziIme').post((req,res)=> {
    let username = req.body.username;
    drzi.find({'username': username})
    .then((drzi)=> {
        res.json(drzi);
    }).catch((err)=> {
        console.log(err);
    });
});

router.route('/dohvObavestenja').post((req,res)=> {
    let naziv = req.body.naziv;
    obavestenja.find({'naziv': naziv})
    .then((obavestenja)=> {
        res.json(obavestenja);
    }).catch((err)=> {
        console.log(err);
    });
});

router.route('/dohvObavestenje').post((req,res)=> {
    let id = req.body.id;
    obavestenja.findOne({'id': id})
    .then((obavestenja)=> {
        res.json(obavestenja);
    }).catch((err)=> {
        console.log(err);
    });
});


router.route('/dohvPredavanja').post((req,res)=> {
    let naziv = req.body.naziv;
    predavanja.find({'naziv': naziv})
    .then((predavanja)=> {
        res.json(predavanja);
    }).catch((err)=> {
        console.log(err);
    });
});

router.route('/dohvVezbe').post((req,res)=> {
    let naziv = req.body.naziv;
    vezbe.find({'naziv': naziv})
    .then((vezbe)=> {
        res.json(vezbe);
    }).catch((err)=> { 
        console.log(err);
    });
});

router.route('/dohvIspitna').post((req,res)=> {
    let naziv = req.body.naziv;
    ispitna.find({'naziv': naziv})
    .then((ispitna)=> {
        res.json(ispitna);
    }).catch((err)=> {
        console.log(err);
    });
});

router.route('/dohvLab').post((req,res)=> {
    let naziv = req.body.naziv;
    labvezbe.find({'naziv': naziv})
    .then((labvezbe)=> {
        res.json(labvezbe);
    }).catch(err=> {
        console.log(err);
    });
});


router.route('/dohvProjekat').post((req,res)=> {
    let naziv = req.body.naziv;
    projekat.find({'naziv': naziv})
    .then((projekat)=> {
        res.json(projekat);
    }).catch((err)=> {
        console.log(err);
    });
});




router.route('/azurirajZaposlenog').post((req, res)=>{
    let username = req.body.username;
    let adresa =  req.body.adresa;
    let telefon = req.body.telefon;
    let podaci = req.body.podaci;
    let vebsajt = req.body.vebsajt;
    let kabinet = req.body.kabinet;
    zaposleni.collection.updateOne({"username":username}, {$set: {"adresa": adresa}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"telefon": telefon}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"podaci": podaci}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"vebsajt": vebsajt}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"kabinet": kabinet}});
    res.json({'poruka': 'OK'});
});


router.route('/azurirajZaposlenogAdmin').post((req, res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let ime = req.body.ime;
    let prezime = req.body.prezime;
    let adresa =  req.body.adresa;
    let telefon = req.body.telefon;
    let podaci = req.body.podaci;
    let vebsajt = req.body.vebsajt;
    let kabinet = req.body.kabinet;
    let zvanje = req.body.zvanje;
    let status = req.body.status;
    let slika = req.body.slika;
    zaposleni.collection.updateOne({"username":username}, {$set: {"password": password}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"ime": ime}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"prezime": prezime}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"adresa": adresa}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"telefon": telefon}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"podaci": podaci}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"vebsajt": vebsajt}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"kabinet": kabinet}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"zvanje": zvanje}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"status": status}});
    zaposleni.collection.updateOne({"username":username}, {$set: {"slika": slika}});
    res.json({'poruka': 'OK'});
});


router.route('/azurirajStudenta').post((req, res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let ime = req.body.ime;
    let prezime = req.body.prezime;
    let indeks =  req.body.indeks;
    let tip = req.body.tip;
    let status = req.body.status;
    student.collection.updateOne({"username":username}, {$set: {"password": password}});
    student.collection.updateOne({"username":username}, {$set: {"ime": ime}});
    student.collection.updateOne({"username":username}, {$set: {"prezime": prezime}});
    student.collection.updateOne({"username":username}, {$set: {"indeks": indeks}});
    student.collection.updateOne({"username":username}, {$set: {"tip": tip}});
    student.collection.updateOne({"username":username}, {$set: {"status": status}});
    res.json({'poruka': 'OK'});
});



router.route('/promeniLozinkuKor').post((req, res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let prvi = req.body.prvi;
    korisnik.collection.updateOne({"username":username}, {$set: {"password": password}});
    korisnik.collection.updateOne({"username":username}, {$set: {"prvi": prvi}});
    res.json({'poruka': 'OK'});
});


router.route('/promeniLozinkuStud').post((req, res)=>{
    let username = req.body.username;
    let password = req.body.password;
    student.collection.updateOne({"username":username}, {$set: {"password": password}});
    res.json({'poruka': 'OK'});
});

router.route('/promeniLozinkuZap').post((req, res)=>{
    let username = req.body.username;
    let password = req.body.password;
    zaposleni.collection.updateOne({"username":username}, {$set: {"password": password}});
    res.json({'poruka': 'OK'});
});

router.route('/azurirajPredmet').post((req, res)=>{
    let naziv = req.body.naziv;
    let sifra = req.body.sifra;
    let tip = req.body.tip;
    let espb = req.body.espb;
    let ishod = req.body.ishod;
    let cilj = req.body.cilj;
    
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"sifra": sifra}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"tip": tip}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"espb": espb}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"ishod": ishod}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"cilj": cilj}});
    
    res.json({'poruka': 'OK'});
});

router.route('/azurirajPredmetAdmin').post((req, res)=>{
    let naziv = req.body.naziv;
    let tip = req.body.tip;
    let sifra = req.body.sifra;
    let fond = req.body.fond;
    let espb = req.body.espb;
    let cilj = req.body.cilj;
    let ishod = req.body.ishod;
    let predavanja = req.body.predavanja;
    let vezbe = req.body.vezbe;
    let labvezbe = req.body.labvezbe;
    let komentar = req.body.komentar;
    
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"tip": tip}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"sifra": sifra}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"fond": fond}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"espb": espb}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"cilj": cilj}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"ishod": ishod}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"predavanja": predavanja}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"vezbe": vezbe}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"labvezbe": labvezbe}});
    predmet.collection.updateOne({"naziv":naziv}, {$set: {"komentar": komentar}});
    
    res.json({'poruka': 'OK'});
});

router.route('/obrisiPredavanja').post((req,res) => {

    let id = req.body.id;
    predavanja.deleteOne({"id":id}).then(s=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});


router.route('/obrisiVezbe').post((req,res) => {

    let id = req.body.id;
    vezbe.deleteOne({"id":id}).then(s=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});


router.route('/obrisiLab').post((req,res) => {

    let id = req.body.id;
    labvezbe.deleteOne({"id":id}).then(s=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});


router.route('/obrisiIspitna').post((req,res) => {

    let id = req.body.id;
    ispitna.deleteOne({"id":id}).then(s=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});


router.route('/obrisiStudenta').post((req,res) => {

    let username = req.body.username;
    student.deleteOne({"username":username}).then(s=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});

router.route('/obrisiZaposlenog').post((req,res) => {

    let username = req.body.username;
    zaposleni.deleteOne({"username":username}).then(z=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});


router.route('/obrisiKorisnika').post((req,res) => {

    let username = req.body.username;
    korisnik.deleteOne({"username":username}).then(k=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});

router.route('/obrisiPredmet').post((req,res) => {

    let naziv = req.body.naziv;
    predmet.deleteOne({"naziv":naziv}).then(p=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=> {
        res.status(400).json({'user':'no'});
    });
});


router.route('/azurirajObavestenje').post((req, res)=>{
    let id = req.body.id;
    let naslov = req.body.naslov;
    let fajl = req.body.fajl;
    let tekst = req.body.tekst;
    let datum = req.body.datum;

    obavestenja.collection.updateOne({"id":id}, {$set: {"naslov": naslov}});
    obavestenja.collection.updateOne({"id":id}, {$set: {"fajl": fajl}});
    obavestenja.collection.updateOne({"id":id}, {$set: {"tekst": tekst}});
    obavestenja.collection.updateOne({"id":id}, {$set: {"datum": datum}});
    
    res.json({'poruka': 'OK'});
});


app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));