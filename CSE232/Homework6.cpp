#include <iostream>
#include <string>
using std::cout; using std::cin; using std::string; using std::endl;
int main() 
{
    bool hasWon = false;
    int attemptNum = 1;
    string currentGuess = "";
    string outputString = ".....";
    string answer = "";
    cout << "Give me a secret word: \n";
    getline(cin, answer);
    while(attemptNum < 7 && !hasWon){
        cout << "Give me a guess: \n";
        getline(cin, currentGuess);
        for(int i = 0; i < 6; i++){
            for(int j = 0; j < 6; j++){
                if(currentGuess[i] == answer[j]){
                    if(i == j){
                        outputString[i] = answer[i];
                    }else if(char(outputString[i]) >= 65){
                        break;
                    }else{
                        outputString[i] = '?';
                    }
                }
            }
        }
        if(!(currentGuess.size() < 5)){
        attemptNum++;
        cout <<  outputString << endl;
        }else{
            attemptNum = 7;
        }
        if(outputString == answer){
            hasWon = true;
            cout << "You Win!";
        }
        outputString = ".....";
    }
    if(!hasWon){
        cout << "You Lose.";
    }

    return 0;
}
