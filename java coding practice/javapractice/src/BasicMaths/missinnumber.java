package BasicMaths;

import java.util.Arrays;

public class missinnumber {
    public static void main(String[] args) {
        int[] nums = {3,0,1};
        System.out.println(missingNumber(nums));
    }
    public static int missingNumber(int[] nums) {
        int n = nums.length;
        int result =0;
        Arrays.sort(nums);



        for(int i =0; i < n;i++){
            if(nums[i]==i){
                result =i;
                break;
            }
        }
        return result;

    }
}
