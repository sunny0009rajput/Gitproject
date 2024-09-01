package ArrayAllProblem;

public class MaximumConsecutiveOnce {
    public static void main(String[] args) {
        int[] arr= {1, 1, 0, 1, 1, 1};
        int n= arr.length;
        int count =0;

        for(int i=0;i<n;i++){
            if(arr[i]==1){
                count++;
            }else{
                count=0;
            }
        }
        System.out.println(count);
    }
}
