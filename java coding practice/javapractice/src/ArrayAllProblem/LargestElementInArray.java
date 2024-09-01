package ArrayAllProblem;

public class LargestElementInArray {
    public static void main(String[] args) {
        int[] arr= { 5,10,23,12,7,9};
        int n = arr.length;
        int maxEle= 0;
        for(int i = 0; i< n ; i++){
            if(arr[i] >= maxEle){
                maxEle = arr[i];
            }
        }
        System.out.println(maxEle);
    }
}
