package BinarySearch;

public class BinarySearchImplementation {
    public static void main(String[] args) {
        int[] arr={3, 4, 6, 7, 9, 12, 16, 17};
        int target = 6;
        int start=0;
        int end=arr.length-1;

        int result = binarysearch(arr,start,end,target);
        if(result == -1 ){
            System.out.println("target is not found");
        }else {
            System.out.println("target is found "+result);
        }
    }
    public static int binarysearch(int[] arr,int start,int end,int target){
        if(start<=end){
            int mid= start+(end - start)/2;

            if(target==arr[mid]){
                return mid;

            }
            else if(target < arr[mid]){
                 return  binarysearch(arr,start,mid-1,target);
            }else {

                return binarysearch(arr, mid + 1, end, target);
            }


        }
        return -1;

    }
}
