package ArrayAllProblem;

public class SecondSmallestElement {
    public static void main(String[] args) {
        int[] arr= {10,20,30,45,121,34,56,98};
        int n= arr.length;
        int small=Integer.MAX_VALUE;
        int secondsmall=Integer.MAX_VALUE;
        if(n < 2 ){
            System.out.println("there must be more than 2 digits");
        }else {
            for(int i =0;i<n;i++){
                if(arr[i] < small){
                    secondsmall=small;
                    small=arr[i];
                }else if(arr[i] < secondsmall && arr[i]!= small){
                    secondsmall=arr[i];
                }
            }
        }
        if(secondsmall != Integer.MAX_VALUE){
            System.out.println(secondsmall);
        }else {
            System.out.println("ther is no second small element");
        }
    }
}
