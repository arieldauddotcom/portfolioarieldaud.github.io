
#include <iostream>

using namespace std;


void multiplyMatrices(int** A, int** B, int rowA, int colA, int colB, int** C) {
    for (int i = 0; i < rowA; i++) {
        for (int j = 0; j < colB; j++) {
            C[i][j] = 0;
            for (int k = 0; k < colA; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}

int main() {
    int rowA, colA, colB;


    cout << "Jumlah Baris Matrik A ? ";
    cin >> rowA;
    cout << "Jumlah Kolom Matrik A ? ";
    cin >> colA;

    cout << "Jumlah Kolom Matrik B ? ";
    cin >> colB;

    int** A = new int*[rowA];
    int** B = new int*[colA];
    int** C = new int*[rowA];

    for (int i = 0; i < rowA; i++) {
        A[i] = new int[colA];
    }

    for (int i = 0; i < colA; i++) {
        B[i] = new int[colB];
    }

    for (int i = 0; i < rowA; i++) {
        C[i] = new int[colB];
    }

    cout << "Input Nilai Matrik A :" << endl;
    for (int i = 0; i < rowA; i++) {
        for (int j = 0; j < colA; j++) {
            cout << "A(" << i + 1 << ", " << j + 1 << ") = ";
            cin >> A[i][j];
        }
    }

    cout << "Input Nilai Matrik B :" << endl;
    for (int i = 0; i < colA; i++) {
        for (int j = 0; j < colB; j++) {
            cout << "B(" << i + 1 << ", " << j + 1 << ") = ";
            cin >> B[i][j];
        }
    }


    multiplyMatrices(A, B, rowA, colA, colB, C);

    
    cout << "Hasil Perkalian Matrik :" << endl;
    for (int i = 0; i < rowA; i++) {
        for (int j = 0; j < colB; j++) {
            cout << C[i][j] << " ";
        }
        cout << endl;
    }

   
    for (int i = 0; i < rowA; i++) {
        delete[] A[i];
    }
    delete[] A;

    for (int i = 0; i < colA; i++) {
        delete[] B[i];
    }
    delete[] B;

    for (int i = 0; i < rowA; i++) {
        delete[] C[i];
    }
    delete[] C;

    return 0;
}
