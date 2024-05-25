#include <iostream>
#include <vector>

using namespace std;

vector<int> insertionSort(vector<int> arr)
{
    int len = arr.size();
    for (int i = 1; i < len; i++)
    {
        int current = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > current)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

int main()
{
    vector<int> arrayToSort = {6, 3, 7, 4, 8, 1, 5, 2, 8, 9};
    vector<int> sortedArray = insertionSort(arrayToSort);
    cout << "Sorted array:";
    for (int num : sortedArray)
    {
        cout << " " << num;
    }
    cout << endl;
    return 0;
}