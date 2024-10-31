#include <iostream>
using namespace std;


unsigned long long faktorial(int n) {
    if (n < 0) {
        return 0; 
    }
    unsigned long long hasil = 1;
    for (int i = 1; i <= n; ++i) {
        hasil *= i;
    }
    return hasil;
}


int main() {
    int n;
    cout << "Masukkan bilangan bulat positif untuk menghitung faktorial: ";
    cin >> n;

    unsigned long long hasil = faktorial(n);
    cout << "Faktorial dari" << n << " adalah " << hasil << endl;

    return 0;
}