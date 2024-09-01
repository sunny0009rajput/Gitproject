package ArrayAllProblem;

import java.util.Arrays;

public class LeftRotateByOnePlace {
    public static void main(String[] args) {
        int[] arr= {1,2,3,4,5,6,7,8,9};
        int n = arr.length;

        int[] arr1 = new int[n];
        int j=0;
        arr1[n-1]=arr[0];

        for(int i =1;i<n;i++){
            arr1[j]=arr[i];
            j++;
        }
        System.out.println(Arrays.toString(arr1));
    }
}
