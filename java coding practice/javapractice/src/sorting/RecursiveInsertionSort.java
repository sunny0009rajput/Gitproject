package sorting;

public class RecursiveInsertionSort {
    public static void main(String[] args) {
        int arr[] ={13,46,24,52,20,9};
        int n = arr.length;
        insertionSort(arr,0,n);
        for(int i =0; i<n;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }
    public static void insertionSort(int[] arr, int i , int n){
        // base case i ==n
        if(i == n){
            return;
        }
        int j=i;
        while(j > 0 && arr[j-1] > arr[j]){
            int temp = arr[j-1];
            arr[j-1]= arr[j];
            arr[j] = temp;
            j--;
        }
        insertionSort(arr,i+1,n);
    }
}
