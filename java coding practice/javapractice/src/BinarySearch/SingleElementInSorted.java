package BinarySearch;

public class SingleElementInSorted {
    public static void main(String[] args) {
        int[] arr={1, 1, 2, 2, 3, 4, 4, 5, 5};
        int start=0;
        int end=arr.length-1;
        int result =findSingleElement(arr,start,end);
        System.out.println(result);
    }
    public static int findSingleElement(int[] arr,int start,int end){
        while(start<end){
            int mid = start+(end-start)/2;

            if(arr[mid]%2 == 0){
                if(arr[mid]== arr[mid+1]){
                    start=mid+2;
                }else {
                    end=mid;
                }
            }else{
                if(arr[mid]==arr[mid-1]){
                    start=mid+1;
                }else {
                    end=mid-1;
                }
            }
        }
        return arr[start];
    }
}
