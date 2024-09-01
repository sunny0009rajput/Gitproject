package ArrayAllProblem;

import java.util.Arrays;

public class MovezeroToEnd {
    public static void main(String[] args) {
        int[] arr= {1,0,2,3,0,4,0,1};
        int n= arr.length;
        int[] arr1 = new int[n];
        int start=0;
        int end = n-1;
        int arr1start=0;

        while(start<n-1){
            if(arr[start]==0){
                arr1[end]=arr[start];
                end--;
                start++;
            }else{
                arr1[arr1start]=arr[start];
                arr1start++;
                start++;
            }
        }
        System.out.println(Arrays.toString(arr1));
    }
}
