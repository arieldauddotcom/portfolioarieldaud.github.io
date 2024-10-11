//
//  main.cpp
//  latihan 4 oktober (1)
//
//  Created by Ariel Daud on 04/10/24.
//

#include <iostream>
using namespace std;

int main() {
    int jmlh;
    string nama[100], alamat[100], hobi[100];

    cout << "Input Jumlah Data: ";
    cin >> jmlh;

    for (int i = 0; i < jmlh; i++) {
        cout << "Data " << i + 1 << endl;
        cout << "Nama: "; cin >> nama[i];
        cout << "Alamat: "; cin >> alamat[i];
        cout << "Hobi: "; cin >> hobi[i];
        cout << endl;
    }

    cout << "HASIL" << endl;
    for (int i = 0; i < jmlh; i++) {
        cout << "Data " << i + 1 << endl;
        cout << "Nama: " << nama[i] << endl;
        cout << "Alamat: " << alamat[i] << endl;
        cout << "Hobi: " << hobi[i] << endl << endl;
    }
    
    cout << "\nDaftar Alamat Mahasiswa:\n";
    cout << "================================================\n";
    cout << "| No | Nama     | Alamat       | Hobi         |\n";
    cout << "================================================\n";
    for (int i = 0; i < jmlh; i++) {
        cout << "| " << i + 1 << "  | "
             << nama[i] << "     | "
             << alamat[i] << "      | "
             << hobi[i] << "        |"
             << endl;
    }

    return 0;

}



