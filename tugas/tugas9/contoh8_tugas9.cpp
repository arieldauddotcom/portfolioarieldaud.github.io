#include <iostream>
using namespace std;

// Prototipe fungsi
void tesglobal(void);
string bunga = "Ayelir";

int main() {
    cout << "di Fungsi main() : bunga = " << bunga << endl;
   
    string bungaLokal = "Mawar";
    cout << "di Fungsi main() : bunga = " << bungaLokal << endl;
    tesglobal();
    cout << "di Fungsi main() : bunga = " << bunga << endl; 
    return 0;
}

void tesglobal(void) {
    bunga = "Melati";
    cout << "di Fungsi tesglobal() : bunga = " << bunga << endl;
    return;
}