package sorting;

public class MergeSort {
    public static void main(String[] args) {
        int arr[]={6,3,9,5,2,8};
        int n = arr.length;

        divide(arr,0,n-1);

        //print
        for(int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }
    public static void divide(int arr[],int start,int end){
        if(start >= end){
            return;
        }
        int mid = start + (end - start)/2;
        divide(arr,start,mid);
        divide(arr,mid+1,end);
        conquer(arr,start,mid,end);
    }
    public static void conquer(int arr[],int start,int mid,int end){
        int merged[] = new int[end-start+1];
        int index1 = start;
        int index2 = mid+1;
        int x =0;

        while( index1 <= mid && index2 <= end){
            if(arr[index1] <= arr[index2]){
                merged[x++]=arr[index1++];
            }else {
                merged[x++]=arr[index2++];
            }
        }

        while(index1 <= mid){
            merged[x++]=arr[index1++];
        }

        while (index2 <= end){
            merged[x++]=arr[index2++];
        }

        for(int i =0; i< merged.length;i++){
            arr[start+i]=merged[i];
        }
    }
}
