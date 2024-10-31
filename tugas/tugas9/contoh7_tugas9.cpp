#include <iostream>
using namespace std;

void teslokal(void);

int main() {
    string bunga = "Mawar";
    cout << "di Fungsi main() : bunga = " << bunga << endl;
    teslokal();
    cout << "di Fungsi main() : bunga = " << bunga << endl;
    return 0;
}

void teslokal(void) {
    string bunga = "Melati";
    cout << "di Fungsi teslokal() : bunga = " << bunga << endl;
    return;
}