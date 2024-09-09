package BinarySearch;

public class MinimumInRotatedSorted {
    public static void main(String[] args) {
        int[] arr={4, 5, 6, 7,8, 0, 1, 2};
        int start = 0;
        int end = arr.length-1;

        int result= minimumInRotatedArray(arr,start,end);
        System.out.println(result);
    }
    public static int minimumInRotatedArray(int[] arr,int start,int end){


        if(arr[start] <= arr[end]){
            return arr[start];
        }

        while(start<end){
            int mid=start+(end-start)/2;



            if(arr[mid]>arr[end] ){

                start=mid+1;

            }else{
                end=mid;
            }

        }
        return arr[start];
    }
}
