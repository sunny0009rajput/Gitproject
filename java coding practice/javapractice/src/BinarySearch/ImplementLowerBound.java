package BinarySearch;
// lower bound == greater than or eqal to that number
// if lower bound is not present in that element then the lower bound is hypothetical i.e last element(index) of the array
public class ImplementLowerBound {
    public static void main(String[] args) {
        int[]arr={3, 5, 8, 15, 19};
        int target =9;

        int start =0;
        int n=arr.length;
        int end= arr.length-1;
        int ans = n;

        while(start <= end){
            int mid = start+(end-start)/2;

            if(arr[mid] >= target){
                ans = mid;
                end = mid-1;
            }else {
                start= mid+1;
            }
        }
        System.out.println(ans);

    }
}
