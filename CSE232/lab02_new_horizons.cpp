#include <iostream>
#include <iomanip>
#include <string>
using std::cout; using std::cin; using std::fixed; using std::setprecision;
using std::endl;
int main() {
  // Define input, total distance, and speed per day
    int input;
    double auPerDay = 0.0082762675;
    double totalDistanceAu = 37.33;
    cin >> input;
    if(input > 0){
        totalDistanceAu += auPerDay * input;
    }
    cout << fixed << setprecision(2);
    cout << totalDistanceAu * 149598000 << endl;
    cout << totalDistanceAu * 92955800 << endl;
    cout << (totalDistanceAu * 2) / 7.21435969476 << endl;
  return 0;
}
