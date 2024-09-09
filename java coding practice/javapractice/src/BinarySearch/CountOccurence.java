package BinarySearch;

public class CountOccurence {
    public static void main(String[] args) {
        int[] arr =  {2, 4,4,4,4,4,4, 6, 8, 8, 8, 11, 13};
        int target =4;
        int start=0;
        int end = arr.length-1;
        int firstOccurence=BinarySearchFirstOccurence(arr,start,end,target);
        int lastOccurence=BinarySearchLastOccurence(arr,start,end,target);
        int result = lastOccurence-firstOccurence+1;
        System.out.println(result);
    }

    public static int BinarySearchFirstOccurence(int[] arr,int start,int end,int target){
        int ans = arr.length;
        while(start <= end){
            int mid = start+(end-start)/2;
            if(arr[mid]== target){
                ans=mid;
                end=mid-1;
            }else if(target < arr[mid]){
                end=mid-1;
            }else{
                start=mid+1;
            }
        }
        return ans;

    }
    public static int BinarySearchLastOccurence(int[] arr,int start,int end ,int target){
        int ans=arr.length-1;


        while(start <= end){
            int mid=start+(end-start)/2;
            if(arr[mid]== target){
                ans=mid;
                start=mid+1;
            }else if(target < arr[mid]){
                end=mid-1;
            }else {
                start=mid+1;
            }
        }
        return ans;
    }
}
