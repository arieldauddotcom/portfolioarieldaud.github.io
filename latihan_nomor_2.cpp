#include <iostream>
#include <string>

using namespace std;

int main() {
    string jenisPelanggan;
    int dayaSambungan;
    long long hargaDasar = 0;
    long long ppn, administrasi, totalBiaya;

    cout << "Jenis Pelanggan (Rumah Tangga/Industri): ";
    getline(cin, jenisPelanggan);

    cout << "Daya Sambungan (Watt): ";
    cin >> dayaSambungan;

    if ((jenisPelanggan != "Rumah Tangga" && jenisPelanggan != "rumah tangga") && (jenisPelanggan != "Industri" && jenisPelanggan != "industri")) {
        cout << "Jenis pelanggan tidak valid!" << endl;
        return 1;
    }

    if (jenisPelanggan == "Rumah Tangga" || jenisPelanggan == "rumah tangga") {
        if (dayaSambungan >= 0 && dayaSambungan <= 450) {
            hargaDasar = 650000;
        } else if (dayaSambungan >= 451 && dayaSambungan <= 900) {
            hargaDasar = 850000;
        } else if (dayaSambungan >= 901 && dayaSambungan <= 1200) {
            hargaDasar = 1200000;
        } else if (dayaSambungan >= 1201 && dayaSambungan <= 2200) {
            hargaDasar = 1500000;
        } else if (dayaSambungan >= 2201 && dayaSambungan <= 4400) {
            hargaDasar = 1750000;
        } else {
            cout << "Daya sambungan untuk Rumah Tangga tidak valid!" << endl;
            return 1;
        }
    } else if (jenisPelanggan == "Industri" || jenisPelanggan == "industri") {
        if (dayaSambungan >= 4401 && dayaSambungan <= 9500) {
            hargaDasar = 2250000;
        } else if (dayaSambungan >= 9501 && dayaSambungan <= 12000) {
            hargaDasar = 2750000;
        } else if (dayaSambungan >= 12001 && dayaSambungan <= 16000) {
            hargaDasar = 3250000;
        } else if (dayaSambungan >= 16001 && dayaSambungan <= 22000) {
            hargaDasar = 4500000;
        } else if (dayaSambungan > 22000) {
            hargaDasar = 6700000;
        } else {
            cout << "Daya sambungan untuk Industri tidak valid!" << endl;
            return 1;
        }
    }

    ppn = hargaDasar * 0.1;
    administrasi = hargaDasar * 0.05;
    
    totalBiaya = hargaDasar + ppn + administrasi;

    cout << "----- Detail Pembayaran -----" << endl;
    cout << "Jenis Pelanggan: " << jenisPelanggan << endl;
    cout << "Daya Sambungan: " << dayaSambungan << " Watt" << endl;
    cout << "Harga Dasar: Rp" << hargaDasar << endl;
    cout << "PPN (10%): Rp" << ppn << endl;
    cout << "Administrasi (5%): Rp" << administrasi << endl;
    cout << "------------------------------------" << endl;
    cout << "Total Biaya: Rp" << totalBiaya << endl;

    return 0;
}
