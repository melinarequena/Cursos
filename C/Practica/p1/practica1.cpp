//
// Created by melin on 24/4/2025.
//

using namespace std;
#include <iostream>
#include <string>

int main () {

  int a = 0, b = 0, c = 0;

  string entrada;

  //entrada "aaaabbbc"
  //salida (aaaabbbc)(a:4)(b:3)(c:1)

  cout << "Ingrese un numero entero: ";
  cin >> entrada;

  for (int i = 0; i < entrada.length(); i++) {
    if(entrada[i] == 'a' || entrada[i] == 'A') {
      a++;
    }
    if(entrada[i] == 'b' || entrada[i] == 'B') {
      b++;
    }
    if(entrada[i] == 'c' || entrada[i] == 'C') {
      c++;
    }
  }

  cout << "(" << entrada << ")(a:" << a << ")(b:" << b << ")(c:" << c  << ")"<< endl;

}