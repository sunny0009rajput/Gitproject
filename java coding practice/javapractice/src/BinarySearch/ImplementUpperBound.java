package BinarySearch;

public class ImplementUpperBound {
    public static void main(String[] args) {
        int[]arr={3, 5, 8, 15, 19};
        int target =9;
        int n = arr.length;
        int start =0;
        int end= arr.length-1;
        int ans = n;

        while(start <= end){
            int mid = start+(end-start)/2;

            if(arr[mid] > target){
                ans = mid;
                end = mid-1;
            }else {
                start= mid+1;
            }
        }
        System.out.println(ans);
    }
}
