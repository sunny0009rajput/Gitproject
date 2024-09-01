package sorting;
// take the pivot of the array it can be any first number , last number , random number and any number .
// place the pivot on correct place
// before the pivot the element is smallest element than the pivot and after the pivot is larger element then pivot on right side and smalledr then the pivot oon left side.
// best time complexity o(nlogn)
// worst time complexetiy o(n^2)
public class QuickSort {
    public static void main(String[] args) {
        int[] arr={6,9,5,2,8};
        int n = arr.length;
        quickSort(arr,0,n-1);
        // print
        for(int i =0;i<n; i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }

    public static void quickSort(int arr[],int low, int high){
        if(low < high){
            int pidx = partition(arr,low,high);
            quickSort(arr,low,pidx-1);
            quickSort(arr,pidx+1,high);
        }
    }
    public static int partition(int arr[],int low,int high){
        int pivot = arr[high];
        int i = low-1;

        for(int j=low; j<high;j++){
            if(arr[j]<pivot){
                i++;
                // swap
                int temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
        i++;
        int temp = arr[i];
        arr[i]=pivot;
        arr[high]=temp;
        return i;
    }
}
