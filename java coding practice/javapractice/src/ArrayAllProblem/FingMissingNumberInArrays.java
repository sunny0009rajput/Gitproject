package ArrayAllProblem;

import java.util.Arrays;

public class FingMissingNumberInArrays {
    public static void main(String[] args) {
        int[] arr= {0,1,3,4,5,6,7,8};
        int n = arr.length;

        int Totalsum=0;
        for(int i =0;i<n;i++){
            Totalsum= Totalsum+arr[i];

        }
        int actualSum=n*(n+1)/2;
        int missinNumber = actualSum-Totalsum;
        System.out.println(missinNumber);
    }
}
