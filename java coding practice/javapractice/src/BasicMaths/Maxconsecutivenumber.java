package BasicMaths;

import java.util.Arrays;

public class Maxconsecutivenumber {
    public static void main(String[] args) {
        int [] nums = {1,1,0,1,1,1};
        System.out.println(findMaxConsecutiveOnes(nums));

    }
    public static int findMaxConsecutiveOnes(int[] nums) {
        int n = nums.length;
        int[] store =new int[n];
        int count =0;
        int k =0;
        for(int i =0;i<n;i++){
            if(nums[i]==1){
                count++;
            }else{
                store[k]=count;
                count =0;
                k++;
            }
        }
        store[k]=count;
        Arrays.sort(store);
        return store[n-1];

    }
}
