#include <iostream>
#include <string>
#include <cmath>
#include <algorithm>
using std::string; using std::cout; using std::cin; using std::int64_t;
using std::sort; using std::endl;

int64_t LocToDec (string const &loc){
    int64_t sum = 0;
    for(auto ch: loc){
        int difference = ch - 'a';
        sum += pow(2, difference);
    }
    return sum;
}

string Abbreviate(string const &loc){
    string sortedLoc = loc;
    string output = "";
    string::size_type i = 1; 
    while(i < sortedLoc.size()){
        sort(sortedLoc.begin(), sortedLoc.end());
        if(sortedLoc[i] == sortedLoc[i-1]){
            sortedLoc.insert(i+1, 1, sortedLoc[i] + 1);
            sortedLoc.erase(i-1, 2);
        }else{
            i++;
        }
    }
    return sortedLoc;
}

string DecToLoc(int64_t dec){
    string output = "";
    int64_t counter = 1;
    while((dec / counter) >= 1){
        output = output + 'a';
        dec--;
    }
    output = Abbreviate(output);
    return output;
}

int64_t AddLoc(string const &loc1, string const &loc2){
    string combined = loc1 + loc2;
    combined = Abbreviate(combined);
    int64_t output = LocToDec(combined);
    return output;
}

int main(){
    int64_t decInput;
    string locInput1;
    string locInput2;
    string locInput3;
    string test;
    cout << "Give me a location string: " << endl;
    cin >> locInput1;
    cout << "Give me an integer: " << endl;
    cin >> decInput;
    cout << locInput1 << " to dec: " << LocToDec(locInput1) << endl;
    cout << locInput1 << " abbreviated: " << Abbreviate(locInput1) << endl;
    cout << decInput << " to loc: " << DecToLoc(decInput) << endl;
    cout << "Give me two more location strings: " << endl;
    cin >> locInput2;
    cin >> locInput3;
    cout << "Sum of " << locInput2 << " and " << locInput3 << " is: " << AddLoc(locInput2, locInput3);
    return 0;
}
