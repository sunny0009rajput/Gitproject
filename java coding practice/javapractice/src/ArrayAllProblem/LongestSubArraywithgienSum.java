package ArrayAllProblem;

public class LongestSubArraywithgienSum {
    public static void main(String[] args) {
        int[] arr={2,3,5,1,9};
        int k = 10;
        int n = arr.length;

        int start=0;
        int end =0;
        int sum=0;
        int maxLength=0;

        while(end < arr.length){
            sum= sum+arr[end];

            while(sum > k && start <= end){
                sum = sum-arr[start];
                start++;
            }

            if(sum == k){
                maxLength=Math.max(maxLength,end-start+1);

            }
            end++;
        }
        System.out.println(maxLength);

    }
}
