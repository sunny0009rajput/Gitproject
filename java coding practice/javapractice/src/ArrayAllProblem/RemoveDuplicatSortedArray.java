package ArrayAllProblem;

public class RemoveDuplicatSortedArray {
    public static void main(String[] args) {
        int[] arr={10,20,30,40,50,50,60};
        int n =arr.length;
        int value=Integer.MIN_VALUE;
        for(int i=0;i<n-1;i++){
            if(arr[i]==arr[i+1]){
                value=arr[i];
            }
        }
        if(value== Integer.MIN_VALUE){
            System.out.println("array have no any duplicate Element");
        }else {
            System.out.println(value);
        }
    }
}
