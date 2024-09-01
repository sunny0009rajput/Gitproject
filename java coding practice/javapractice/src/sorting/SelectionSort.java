package sorting;

public class SelectionSort {
    public static void main(String[] args) {
        int arr[]={7,8,3,2,1};
        int n = arr.length;

        for(int i =0;i<n-1;i++){
            int smallest = i;
            for(int j=i+1;j<n; j++){
                if(arr[smallest]> arr[j]){
                    smallest=j;
                }
            }
            // swap
            int temp = arr[smallest];
            arr[smallest]=arr[i];
            arr[i]=arr[temp];
        }
        for(int i =0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }
}
