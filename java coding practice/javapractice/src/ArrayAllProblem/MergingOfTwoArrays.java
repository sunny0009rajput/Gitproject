package ArrayAllProblem;

import java.util.Arrays;

public class MergingOfTwoArrays {
    public static void main(String[] args) {
        int[] arr1= {1,2,3,4,5,6};
        int[] arr2={5,6,7,8,9};
        int[] mergedArray=new int[arr1.length+arr2.length];
        System.arraycopy(arr1,0,mergedArray,0,arr1.length);
        System.arraycopy(arr2,0,mergedArray,arr1.length,arr2.length);
        System.out.println(Arrays.toString(mergedArray));
    }
}
