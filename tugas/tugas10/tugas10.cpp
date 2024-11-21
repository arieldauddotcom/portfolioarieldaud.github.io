#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

struct Mahasiswa {
    string NIM, Nama, Alamat, Kelas;
    float Nilai;
};

int LinearSearch(Mahasiswa data[], int ukuran, const string& nama) {
    for (int i = 0; i < ukuran; i++)
        if (data[i].Nama == nama) return i;
    return -1;
}

int pencarianBiner(Mahasiswa data[], int ukuran, const string& nama) {
    int kiri = 0, kanan = ukuran - 1;
    while (kiri <= kanan) {
        int tengah = kiri + (kanan - kiri) / 2;
        if (data[tengah].Nama == nama) return tengah;
        if (data[tengah].Nama < nama) kiri = tengah + 1;
        else kanan = tengah - 1;
    }
    return -1;
}

void urutkanMahasiswa(Mahasiswa data[], int ukuran) {
    sort(data, data + ukuran, [](const Mahasiswa& a, const Mahasiswa& b) {
        return a.Nama < b.Nama;
    });
}

int main() {
    Mahasiswa data[] = {
        {"2021001", "Nazril", "Gorontalo", "D", 85.0},
        {"2021002", "Syifa", "Gorontalo", "D", 90.0},
        {"2021003", "Safri", "Gorontalo", "D", 78.0},
        {"2021004", "Nazwa", "Gorontalo", "D", 88.5},
        {"2021005", "Zohra", "Gorontalo", "D", 92.0},
        {"2021006", "Nikma", "Gorontalo", "D", 76.5},
        {"2021007", "Zilya", "Gorontalo", "D", 81.0},
        {"2021008", "Aan", "Gorontalo", "D", 95.0},
        {"2021009", "Rasta", "Gorontalo", "D", 89.5},
        {"2021010", "Rizal", "Gorontalo", "D", 82.0},
        {"2021011", "Aril", "Gorontalo", "D", 74.0},
        {"2021012", "Ino", "Gorontalo", "D", 91.0},
        {"2021013", "Rafli", "Gorontalo", "D", 87.0},
        {"2021014", "Hafid", "Gorontalo", "D", 79.5},
        {"2021015", "Adam", "Gorontalo", "D", 84.0},
        {"2021016", "Rijalul", "Gorontalo", "D", 80.0},
        {"2021017", "Reza", "Gorontalo", "D", 86.0},
        {"2021018", "Diky", "Gorontalo", "D", 77.0},
        {"2021019", "Rega", "Gorontalo", "D", 93.0},
        {"2021020", "Muflih", "Gorontalo", "D", 88.0}
    };
    const int UKURAN = sizeof(data) / sizeof(data[0]);

    string namaDicari;
    cout << "Masukkan nama mahasiswa yang dicari (linear search): ";
    cin >> namaDicari;

    int indeksLinear = LinearSearch(data, UKURAN, namaDicari);
    cout << (indeksLinear != -1
            ? "Mahasiswa ditemukan: " + data[indeksLinear].Nama +
              ", NIM: " + data[indeksLinear].NIM +
              ", Alamat: " + data[indeksLinear].Alamat +
              ", Nilai: " + to_string(data[indeksLinear].Nilai)
            : "Mahasiswa tidak ditemukan.") << endl;


    urutkanMahasiswa(data, UKURAN);
    
    cout << "Masukkan nama mahasiswa yang dicari (Binary Search): ";
    cin >> namaDicari;

    int indeksBiner = pencarianBiner(data, UKURAN, namaDicari);
    cout << (indeksBiner != -1
            ? "Mahasiswa ditemukan: " + data[indeksBiner].Nama +
              ", NIM: " + data[indeksBiner].NIM +
              ", Alamat: " + data[indeksBiner].Alamat +
              ", Nilai: " + to_string(data[indeksBiner].Nilai)
            : "Mahasiswa tidak ditemukan.") << endl;

    return 0;
}
