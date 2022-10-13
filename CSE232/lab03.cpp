#include <iostream>
#include <string>
using std::cout; using std::cin; using std::endl; using std::string;

string additivePersistance(int number, int counterInput){
    string numAsString = std::to_string(number);
    string returnValue;
    int numSize = numAsString.size();
    if(numSize == 1){
        return "0 " + numAsString;
    }
    int sum = 0;
    int counter = counterInput;
    for(int i = 0; i < numSize; i++){
        int currentDigit = 0;
        currentDigit = (numAsString[i] - '0');
        sum += currentDigit;
    }
    if(sum > 9){
        int newInput = sum;
        counter++;
        returnValue = additivePersistance(newInput, counter);
        return returnValue;
    }
    returnValue = std::to_string(counter) + " " + std::to_string(sum);
    return returnValue;
}
int main(){
    int input;
    while(cin >> input && input >= 0){
        cout << additivePersistance(input, 1) << endl;
    }
    return 0;
}