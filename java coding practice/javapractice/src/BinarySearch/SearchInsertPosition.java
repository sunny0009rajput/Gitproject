package BinarySearch;

import ArrayAllProblem.LinearSearch;

public class SearchInsertPosition {
    public static void main(String[] args) {
        int[] arr={1, 2, 4, 7};
        int target = 6;
        int start=0;
        int end= arr.length-1;
        int n= arr.length;


        int result= LowerBoundBinarySearch(arr,start,end,target);
        System.out.println(result);



    }
    public static int LowerBoundBinarySearch(int[ ] arr,int start,int end,int target){
        int ans = arr.length;
        while(start <= end){
            int mid=start + (end -start)/2;

            if(arr[mid] >= target){
                ans = mid;
                end = mid-1;

            }else {
                start=mid+1;
            }

        }
        return ans;
    }
}
