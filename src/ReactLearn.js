import React from "react";

import Article from "./components/Article";

export default function Main(props) {
  console.log(props);

  return (
    <div>
      <Article
        customColor="blue"
        title="Adaptasi MU dengan Taktik Rangnick Berjalan dengan Baik"
        writer="Putra Rusdi K - Sepakbola"
        date="Minggu, 26 Des 2021 21:05 WIB"
        content="Manchester - Nemanja Matic mengatakan proses adaptasi skuad Manchester United dengan taktik Ralf Rangnick berjalan baik. Rangnick membawa perubahan ke tubuh Setan Merah.\nRangnick ditunjuk sebagai manajer interim MU mengisi posisi yang tinggalkan oleh Ole Gunnar Solskjaer yang dipecat. Ia menukangi MU hingga akhir musim sebelum kemudian beralis tugas menjadi penasihat dengan kontrak selama dua tahun.\nPria asal Jerman ini membawa gaya permainan pressing andalannya untuk membangkitkan MU. Setan Merah memang terseok-seok di Liga Inggris di akhir masa jabatan Solskjaer."
      />
      <Article
        title="Getir Satpam di Cilincing Ambruk Disambar Petir"
        writer="Putra Rusdi K - Sepakbola"
        date="Minggu, 26 Des 2021 21:05 WIB"
        content="Manchester - Nemanja Matic mengatakan proses adaptasi skuad Manchester United dengan taktik Ralf Rangnick berjalan baik. Rangnick membawa perubahan ke tubuh Setan Merah.\nRangnick ditunjuk sebagai manajer interim MU mengisi posisi yang tinggalkan oleh Ole Gunnar Solskjaer yang dipecat. Ia menukangi MU hingga akhir musim sebelum kemudian beralis tugas menjadi penasihat dengan kontrak selama dua tahun.\nPria asal Jerman ini membawa gaya permainan pressing andalannya untuk membangkitkan MU. Setan Merah memang terseok-seok di Liga Inggris di akhir masa jabatan Solskjaer."
      />
    </div>
  );
}
