package ArrayAllProblem;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class UnionOfArray {
    public static void main(String[] args) {
        int[] arr1={1,2,3,4,5};
        int[] arr2={2,2,3,4,4,5};
        int n= arr1.length+arr2.length;
        int[] mergedAray=new int[n];
        ArrayList<Integer> arrayList = new ArrayList<>();
        int j =0;

        for(int i =0;i<arr1.length;i++){
            mergedAray[i]=arr1[i];
        }
        for(int i =0;i<arr2.length;i++){
            mergedAray[arr1.length+i]=arr2[i];
        }
        Arrays.sort(mergedAray);
        arrayList.add(mergedAray[0]);

        for(int i =1;i<mergedAray.length-1;i++){
            if(mergedAray[i-1]!=mergedAray[i]){
                arrayList.add(mergedAray[i]);
            }
        }
        System.out.println(arrayList);
    }
}
