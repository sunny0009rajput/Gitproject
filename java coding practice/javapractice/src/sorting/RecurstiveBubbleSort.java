package sorting;

public class RecurstiveBubbleSort {
    public static void main(String[] args) {
        int arr[] ={13,46,24,52,20,9};
        int n = arr.length;
        bubbleSort(arr,n);
        // print
        for(int i =0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }
    public static void bubbleSort(int arr[],int n){
        if(n == 1){
            return;
        }
        int didSwap=0;
        for(int j =0; j <= n-2;j++){
            if(arr[j]> arr[j+1]){
                int temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                didSwap=1;
            }
        }
        if(didSwap == 0){
            return;
        }
        bubbleSort(arr,n-1);
    }
}
