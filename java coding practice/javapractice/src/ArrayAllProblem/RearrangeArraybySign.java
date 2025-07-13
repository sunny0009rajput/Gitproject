package ArrayAllProblem;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RearrangeArraybySign {
    public static void main(String[] args) {
        int[] nums = {-1,1};
        System.out.println(Arrays.toString(rearrangeArray(nums)));

    }

    public static int[] rearrangeArray(int[] nums) {
        int i =0;
        int j =1;
        List<Integer> list = new ArrayList<>();

        int start =0;
        int end = nums.length;

        while(start< end){

            if(nums[start] > 0){
                list.add(i,nums[start]);
               i= i + 1;
                start++;
            }else{
                list.add(j,nums[start]);
                j=j+1;
                start++;
            }
        }
        int[] result = new int[list.size()];
        for(int p =0; p<list.size();p++){
            result[p]=list.get(p);
        }
        return result;

    }

}
