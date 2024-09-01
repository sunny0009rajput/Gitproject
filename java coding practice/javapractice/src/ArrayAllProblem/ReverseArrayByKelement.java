package ArrayAllProblem;

import java.util.Arrays;

public class ReverseArrayByKelement {
    public static void main(String[] args) {
        int[] arr= {1,2,3,4,5,6,7,8,9};
        int n= arr.length;
        int k = 3;

        rotateArray(arr,n,k);
        System.out.println(Arrays.toString(arr));
    }
    public static void rotateArray(int[] arr, int n,int k){
        k=k%n;
        reverse(arr,0,n-1);
        reverse(arr,0,k-1);
        reverse(arr,k,n-1);
    }
    public static void reverse(int[] arr,int start,int end){
        while (start < end){
            int temp= arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }
    }
}
