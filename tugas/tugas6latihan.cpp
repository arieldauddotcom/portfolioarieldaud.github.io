#include <iostream>
using namespace std;

int main() {
    int jmlhmhsiswa;
    cout << "Masukkan jumlah mahasiswa: ";
    cin >> jmlhmhsiswa;

    double total = 0.0;
    double ratarata;

    for (int i = 0; i < jmlhmhsiswa; i++) {
        double nilai;
        cout << "Masukkan nilai untuk mahasiswa " << (i + 1) << ": ";
        cin >> nilai;
        total += nilai;
    }

    ratarata = total / jmlhmhsiswa;

    cout << "Total nilai: " << total << endl;
    cout << "Rata-rata nilai: " << ratarata << endl;

    return 0;
}
