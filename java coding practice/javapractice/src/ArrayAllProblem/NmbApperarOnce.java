package ArrayAllProblem;

import java.util.ArrayList;
import java.util.Arrays;

public class NmbApperarOnce {
    public static void main(String[] args) {
        int[] arr={4,1,2,1,2,3};
        int n= arr.length;
        ArrayList<Integer> arrayList=new ArrayList<>();

        int count =0;
        for(int i =0; i<n;i++){
            for(int j=0;j<n;j++){
                if(arr[i]==arr[j]){
                    count++;
                }
            }
            if(count==1){
                arrayList.add(arr[i]);
            }
            count=0;
        }
        System.out.println(arrayList);
    }
}
