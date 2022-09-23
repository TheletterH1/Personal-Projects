#include <iostream>
#include <string>
using std::cout; using std::cin; using std::endl; using std::string;

string additivePersistance(int number){
    if(number > 9){
        additivePersistance(number / 10);
    }
    int currentDigit = number % 10;
    cout << currentDigit;
    return "";
}

int main(){
    int input;
    while(cin >> input && input >= 0){
        cout << additivePersistance(input) << endl;
    }
    return 0;
}