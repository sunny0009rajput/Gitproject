package ArrayAllProblem;

import java.util.HashMap;

public class subarraySumequalK {
    public static void main(String[] args) {
        int[] nums = {1,2,3};
        int k = 2;
        System.out.println(subarraySum(nums,k));
    }


    public static int subarraySum(int[] nums, int k) {
        int count = 0, sum = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1); // Default case: a prefix sum of 0 has occurred once

        for (int num : nums) {
            sum += num;

            if (map.containsKey(sum - k)) {
                count += map.get(sum - k);
            }

            // Update the count of current prefix sum in map
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }

        return count;
    }
}
