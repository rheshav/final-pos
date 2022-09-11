import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";

//show log
// console.log("Hello World");

// variable

var x = 1;

let y = 2;

// console.log("Y SEBELUM DIUBAH", y);

const UKURAN_HP = 340;

y = "Aldo";

// console.log("UKURAN_HP", UKURAN_HP);

// console.log("Y SESUDAH DIUBAH", y);

var x = 6;

const lampu_menyala = false;

const RAM = "8GB";

const laptop_saya = {
  RAM,
  STORAGE: "SSD 256 GB",
  OS: "MAC",
  POWER: null,
  DESKRIPSI: "",
  APLIKASI: [
    "ZOOM",
    "ATOM",
    "CHROME",
    "WHATSAPP",
    4,
    { CALENDAR: "V1", UPDATE: { PATCH: 1 } },
    null,
  ],
};

const calendarLaptopSaya = laptop_saya.APLIKASI[5].UPDATE;

laptop_saya.NAMA = "MACBOOK PRO M1";

laptop_saya["TERJUAL"] = false;

const siswa = ["Miftarif", "Fahmi", "Rhesa", "Gama", "Indra"];

const a = (60).toString();

const p = parseInt("70.58988");

console.log("a", a);

// parseInt, parseFloat, String

// 70.5 => 70 parseInt

const ab = 1;

const cd = 2;

const ef = 4;

const abc = ab - cd + ef / ab + cd;

console.log("abc", abc);

let b = 7;

const c = a + b;

const d = a - b;

const e = a % b;

let f = 5;

f += 2.75;

// console.log("laptop_saya STORAGE", laptop_saya.STORAGE, laptop_saya["STORAGE"]);

// console.log("laptop_saya POWER", laptop_saya.POWER);

console.log("laptop_saya", laptop_saya);

console.log("f", f);

//console.log(c);

//console.log(d);

console.log("b1", Math.pow(b, 3));

console.log("b2", b);

//console.log("GAMA", siswa[6]);

console.log("calendarLaptopSaya", calendarLaptopSaya);

// console.log("laptop_saya DESKRIPSI", laptop_saya.DESKRIPSI);

// console.log("lampu_menyala", lampu_menyala);

// console.log("siswa", siswa, siswa.length);

// console.log("laptop_saya", laptop_saya);

//function

//if

//

function tambah(a = 2, b = 3, c, d, e, f) {
  console.log("a", a);
  console.log("b", b);
  return a + b;
}

const tambahArrow = (a = 2, b = 3, c, d, e, f) => {
  console.log("a", a);
  console.log("b", b);
  return a + b;
};

function robot(fungsi, nama, voltase) {
  console.log("nama", nama);
  console.log("fungsi", fungsi);
  console.log("voltase", voltase);
}

function robotTunggal({
  nama = "Tidak Ada Nama",
  fungsi = "Tidak ada fungsi",
  voltase = 0,
}) {
  console.log("robotTunggal nama", nama);
  console.log("robotTunggal fungsi", fungsi);
  console.log("robotTunggal voltase", voltase);
}

const robotSaya = { fungsi: "Berlari", nama: "Robot-Y", voltase: 300 };

const robotSayaX = null;
console.log("tambah", tambah(7, 8));
console.log("tambahArrow", tambahArrow(7, 8));

console.log("robot");

robot("Jalan", "Robot-X", 120);

console.log("robotSaya");

robot(robotSaya.fungsi, robotSaya["nama"], robotSaya.voltase);

robotTunggal({ nama: "Robot Z" });

let { fungsi, nama, voltase, bobot } = robotSayaX || {
  fungsi: "Object Kosong",
};

console.log("pecah fungsi", fungsi);

console.log("pecah nama", nama);

console.log("pecah voltase", voltase);

console.log("pecah bobot", bobot);

// const i = "5.51"; // integer / number
//
// const o = "5.5"; // string

const i = { a: "B" };

const o = { a: "B" };

console.log("==", i == o);

console.log("===", i === o);

console.log("!=", i != o);

console.log("!==", i !== o);

console.log(">", i >= o);

console.log("<", i <= o);

//KALAU PELANGGAN MEMBELI LEBIH DARI 100.000, MAKA MENDAPATKAN POTONGAN SEBERSAR 20%

//KALAU PELANGGAN MEMBELI DIBAWAH DARI 100.000, MAKA MENDAPATKAN POTONGAN SEBERSAR 5%

const pembeli = "Aldo";

const cart = [
  { Nama: "Rinso", harga: 5000, jumlah: 1 },
  { Nama: "Pepsodent", harga: 12000, jumlah: 2 },
];

function total(cart) {
  let totalBelanja = 0;

  for (let i = 0; i < cart.length; i++) {
    const harga = cart[i]?.harga || 0;
    const jumlah = cart[i]?.jumlah || 0;
    const hasil = harga * jumlah;
    totalBelanja += hasil;
    // console.log(i, harga, jumlah, hasil);
  }

  console.log("totalBelanja", totalBelanja);

  return totalBelanja;
}

function potongan(cart) {
  const totalBelanja = total(cart);

  let potongan = 0;

  if (totalBelanja > 100000) {
    console.log("KONDISI 1");
    potongan = totalBelanja * 0.2;
    if (pembeli === "Aldo") {
      potongan = totalBelanja * 0.3;
      console.log("KONDISI Spesial 1");
    }
  } else if (totalBelanja < 100000 && pembeli != "Aldo") {
    console.log("KONDISI 2");
    potongan = totalBelanja * 0.05;
  } else if (totalBelanja === 0) {
    console.log("KONDISI 3");
  } else {
    console.log("KONDISI 4");
  }

  console.log("potongan", potongan);

  return potongan;
}

function totalFinal(keranjangBelanja) {
  const potonganfinal = potongan(keranjangBelanja);
  const totalBelanjafinal = total(keranjangBelanja);
  return totalBelanjafinal - potonganfinal;
}

console.log("potongan", potongan(cart));

console.log("totalFinal", totalFinal(cart));

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>button</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
