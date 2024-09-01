package sorting;
// comparing each element with the next element if the element is larger than the next element we will swap that element to next and soo on

public class BubbleSort {
    public static void main(String[] args) {
        int arr[]={7,8,3,2,1};
        int n = arr.length;

        for(int i =0;i<n-1 ; i++){
            for(int j =0;j<n-i-1;j++){
                if(arr[j]== arr[j+1]){
                    //swap
                    int temp= arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        for(int i =0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }

}
