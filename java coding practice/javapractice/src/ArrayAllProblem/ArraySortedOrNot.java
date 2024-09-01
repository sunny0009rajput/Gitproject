package ArrayAllProblem;

public class ArraySortedOrNot {
    public static void main(String[] args) {
        int[] arr={10,20,25, 27,50,70};
        int n = arr.length;
        boolean value = false;

        for(int i =0;i<n-1;i++){
            if(arr[i]< arr[i+1]){
                value=true;
            }else {
                value=false;
                break;
            }
        }
        System.out.println(value);
    }
}
