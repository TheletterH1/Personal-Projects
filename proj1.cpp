#include <iostream>
#include <string>
#include <algorithm>
#include <iomanip>
using std::cout;
using std::cin;
using std::endl;
using std::string;

void toLowercase(string& textToSearch, string& searchPhrase) {
  // Temporary string to hold lowercase versions.
  string temp = "";
  for (auto ch : textToSearch) {
    temp = temp + static_cast<char>(tolower(ch));
  }
  textToSearch = temp;
  temp = "";
  for (auto ch : searchPhrase) {
    temp = temp + static_cast<char>(tolower(ch));
  }
  searchPhrase = temp;
}

void searchStrings(string& textToSearch, string& searchPhrase,
                   int& numTimesFound, int& indexFound) {
  // Index for the searchphrase
  string::size_type i = 0;
  string::size_type j = 0;
  indexFound = -1;
  while (i < searchPhrase.size()) {
    while (j < textToSearch.size()) {
      // Check if the indexes match, or if it is a % or a # representing a
      // number
      if (textToSearch.at(j) == searchPhrase.at(i) ||
          searchPhrase.at(i) == '%' ||
          (searchPhrase.at(i) == '#' &&
           (char(textToSearch.at(j)) < 58 && char(textToSearch.at(j)) > 47))) {
        if (i == 0 && numTimesFound == 0) {
          indexFound = j;
        }
        i++;
      } else if (i > 0) {
        i = 0;
        j--;
      } else {
        i = 0;
        if (numTimesFound < 1) {
          indexFound = -1;
        }
      }
      if (i == searchPhrase.size()) {
        numTimesFound += 1;
        i = 0;
        if (searchPhrase.size() > 1) {
          j--;
        }
      }
      j++;
    }
    if (indexFound > -1 && numTimesFound == 0) {
      indexFound = -1;
    }
    break;
  }
}

bool ImprovedContains(string const& textToSearch, string const& searchPhrase,
                      bool const* caseInsensitive) {
  string lowerTextToSearch = textToSearch;
  string lowerSearchPhrase = searchPhrase;
  // Checks for case insensitive
  if (*caseInsensitive) {
    toLowercase(lowerTextToSearch, lowerSearchPhrase);
  }
  int numTimesFound = 0;
  int indexFound = 0;
  searchStrings(lowerTextToSearch, lowerSearchPhrase, numTimesFound,
                indexFound);
  if (numTimesFound > 0) {
    return true;
  }
  return false;
}

int ImprovedMatches(string const& textToSearch, string const& searchPhrase,
                    bool const* caseInsensitive) {
  string lowerTextToSearch = textToSearch;
  string lowerSearchPhrase = searchPhrase;
  // Checks for case insensitive
  if (*caseInsensitive) {
    toLowercase(lowerTextToSearch, lowerSearchPhrase);
  }
  int numTimesFound = 0;
  int indexFound = 0;
  searchStrings(lowerTextToSearch, lowerSearchPhrase, numTimesFound,
                indexFound);
  return numTimesFound;
}

int ImprovedFindFirstOf(string const& textToSearch, string const& searchPhrase,
                        bool const* caseInsensitive) {
  string lowerTextToSearch = textToSearch;
  string lowerSearchPhrase = searchPhrase;
  if (*caseInsensitive) {
    toLowercase(lowerTextToSearch, lowerSearchPhrase);
  }
  int numTimesFound = 0;
  int indexFound = 0;
  searchStrings(lowerTextToSearch, lowerSearchPhrase, numTimesFound,
                indexFound);
  return indexFound;
}

void ImprovedReplace(string& textToSearch, string const& searchPhrase,
                     string const& replace, bool const* caseInsensitive) {
  int index = ImprovedFindFirstOf(textToSearch, searchPhrase, caseInsensitive);
  if (index != -1) {
    textToSearch.replace(index, searchPhrase.size(), replace);
  }
}

int ImprovedNumberOfDifferences(string const& compare1, string const& compare2,
                                bool const& caseInsensitive) {
  string lowerCompare1 = compare1;
  string lowerCompare2 = compare2;
  if (caseInsensitive) {
    toLowercase(lowerCompare1, lowerCompare2);
  }
  string::size_type stringLength = 0;
  int64_t numDifferences = 0;
  if (compare1.size() > compare2.size()) {
    stringLength = compare2.size();
  } else {
    stringLength = compare1.size();
  }
  for (string::size_type i = 0; i < stringLength; i++) {
    if (!(lowerCompare1.at(i) == lowerCompare2.at(i))) {
      numDifferences++;
    }
  }
  numDifferences += (abs(static_cast<int>(compare1.size() - compare2.size())));
  return numDifferences;
}

int main() { return 0; }