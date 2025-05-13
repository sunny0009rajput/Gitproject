package BasicMaths;

public class printallsubarray {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        System.out.println("print all the subarrays");
        System.out.println(maxsubarraysum(arr));

//        for(int start = 0; start < arr.length;start++){
//            for(int end = start; end < arr.length;end++){
//                System.out.print("[");
//                for(int i = start; i <= end; i++){
//                    System.out.print(arr[i]);
//                    if(i < end){
//                        System.out.print(", ");
//                    }
//                }
//                System.out.println("]");
//            }
//        }
        // to print the maximum subarray


    }

    public static int maxsubarraysum(int[] nums){
        int n= nums.length;
        int maxsum = Integer.MIN_VALUE;
        int start =0;
        int end =0;
        for(int i =0;i < n;i++){
            int currentsum =0;
            for(int j =i; j< n; j++) {
                currentsum = currentsum + nums[i];
                maxsum = Math.max(maxsum, currentsum);
                start = i;
                end = j;

            }

        }
        System.out.print("[");
        for(int i = start;i<= end ; i++){
            System.out.print(nums[i]);
            if(i < end){
                System.out.print(", ");
            }
        }
        System.out.println("]");


        return maxsum;


    }


}
