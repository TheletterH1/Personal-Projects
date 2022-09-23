#include <iostream>
#include <string>
using std::cout; using std::cin; using std::endl; using std::string;

string additivePersistance(int number){
    string numAsString = std::to_string(number);
    string returnValue;
    int numSize = numAsString.size();
    if(numSize == 1){
        return "0 " + numAsString;
    }
    int sum = 0;
    int counter = 0;
    for(int i = 0; i < numSize; i++){
        int currentDigit = 0;
        currentDigit = (numAsString[i] - '0');
        sum += currentDigit;
    }
    if(sum > 9){
        counter++;
        int newInput = sum;
        returnValue = additivePersistance(newInput);
        return returnValue;
    }
    returnValue = std::to_string(counter) + " " + std::to_string(sum);
    return returnValue;
}
int main(){
    int input;
    while(cin >> input && input >= 0){
        cout << additivePersistance(input) << endl;
    }
    return 0;
}