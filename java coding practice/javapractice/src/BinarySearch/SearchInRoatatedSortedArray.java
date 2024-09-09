package BinarySearch;

public class SearchInRoatatedSortedArray {
    public static void main(String[] args) {
        int[] arr={4,5,6,7,0,1,2,3};
        int target = 0;
        int start=0;
        int end =arr.length-1;
        int result = RotatedSortedArraySearch(arr,start,end,target);
        System.out.println(result);

    }
    public static int RotatedSortedArraySearch(int[] arr,int start,int end,int target){
        int ans =-1;
        while(start<=end){
            int mid=start+(end-start)/2;

            if(arr[mid]== target){
                ans=mid;
            }
            if(arr[start] <= arr[mid]){
                if(target >= arr[start] && target <=arr[mid]){
                    end=mid-1;
                }else {
                    start=mid+1;
                }
            }else {
                if(target >= arr[mid] && target <=arr[end]){
                    start=mid+1;
                }else {
                    end=mid-1;
                }
            }
        }
        return ans;
    }
}
