package BinarySearch;

public class FindKthPositiveNumber {
    public static void main(String[] args) {
        int[] arr = {2,3,4,7,11};
        int k = 5;
        System.out.println(solution(arr,k));
    }
    public static int solution(int [] arr,int k){
        int count =0;
        int num =1;
        for(int i =0; i< arr.length;i++){
            if(arr[i]== num){
                num++;
            }else{
                count++;
                num++;
                if(count == num){
                    return num;
                }
            }
        }
        return  num;

    }
}
