package ArrayQuestion;

public class FindEvenNo {
    public static void main(String[] args) {
        int[] arr = {10,45,76,85,98,101,104,118,23};
        int ans = FindNumberOfEvenDigit(arr);
        System.out.println(ans);
    }

    static int FindNumberOfEvenDigit(int[] arr){
        int count =0;
        for(int i=0;i<arr.length;i++){
            if(arr[i] % 2 == 0){
                count++;
            }
        }
        return count;
    }
}
