#include <iostream>
#include <string>
#include <cmath>
#include <iomanip>
using std::cout; using std::cin; using std::endl; using std::abs;
using std::fixed; using std::setprecision;

double Fn(double x){
    double answer = -6*pow(x, 2) + 5*x + 3;
    return answer;
}
double Integral(double x){
    double answer = -2*pow(x, 3) + (5.0/2.0)*pow(x, 2) + 3*x;
    return answer;
}
double EstimateWithTraps(double a, double b, int n){
    double width = (b - a) / n;
    double current = a;
    double area = 0;
    for(int i = 1; i <= n; i++){
        area += (Fn(current) + Fn(current + width));
        current += width;
    }
    area *= width/2;
    return area;
}

int main() 
{
    cout << fixed << setprecision(4);
    bool isAccurate = false;
    double lowerBound;
    double upperBound;
    float tolerance;
    int numTraps;
    cout << "Lower Range:";
    cin >> lowerBound;
    cout << "Upper Range:";
    cin >> upperBound;
    cout << "Tolerance:";
    cin >> tolerance;
    cout << "Initial trapezoid count:";
    cin >> numTraps;
    double numTrapsOutput = EstimateWithTraps(lowerBound, upperBound, numTraps);
    double integralOutput = Integral(upperBound);
    while(!(isAccurate)){
        if(abs(integralOutput - numTrapsOutput) < tolerance){
            cout << "Estimate:" << numTrapsOutput << ", Number of Traps:"
                 << numTraps << ", Diff:" << abs(integralOutput - numTrapsOutput);
            isAccurate = true;
        }else{
            cout << "Estimate:" << numTrapsOutput << ", Number of Traps:"
                 << numTraps << ", Diff:" << abs(integralOutput - numTrapsOutput) 
                 << endl;
        }
        numTraps *= 2;
        numTrapsOutput = EstimateWithTraps(lowerBound, upperBound, numTraps);
    }
    return 0;
}
