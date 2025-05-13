package BasicMaths;

import java.util.Arrays;

public class FrequencyOfMostFrequentElement {
    public static void main(String[] args) {
        int[] nums = {1,2,4};
        int k = 5;
        System.out.println(MaxFrequency(nums,k));
    }
    public static int MaxFrequency(int[] nums, int k){
        Arrays.sort(nums);
        int left =0;
        long total =0;
        int result =0;

        for(int right =0; right < nums.length;right++){
            total = total + (long)(nums[right]-nums[left] * right-left);

            while(total > k){
                total = total - nums[right]-nums[left];
                left++;
            }
            result = Math.max(result,right-left+1);
        }
        return result;
    }

}
