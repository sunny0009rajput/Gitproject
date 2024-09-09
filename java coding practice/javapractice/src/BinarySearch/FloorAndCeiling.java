package BinarySearch;
// The floor of x is the largest element in the array which is smaller than or equal to x.
//The ceiling of x is the smallest element in the array greater than or equal to x.
public class FloorAndCeiling {
    public static void main(String[] args) {

        int[] arr={3, 4, 4, 7, 8, 10};
        int target =8;
        int start =0;
        int n = arr.length;

        int end = n-1;
        int floor= lowerBoundBinarySearchFloor(arr,start,end,target);
        int ceiling=lowerBoundBinarySerchCeiling(arr,start,end,target);

        System.out.println(floor);
        System.out.println(ceiling);


    }
    public static int lowerBoundBinarySearchFloor(int[] arr,int start,int end,int target){
        int ans =arr.length;
        while(start <= end){
            int mid = start+(end-start)/2;

            if(arr[mid] <= target){
                ans=mid;
                start=mid+1;
            }else {
                end=mid-1;
            }
        }
        return ans;
    }

    public static int lowerBoundBinarySerchCeiling(int[] arr,int start,int end , int target){
        int ans = arr.length;
        while(start<= end){
            int mid = start+(end-start)/2;
            if(arr[mid] >= target){
                ans=mid;
                end=mid-1;
            }else {
                start=mid+1;
            }
        }
        return ans;
    }
}
