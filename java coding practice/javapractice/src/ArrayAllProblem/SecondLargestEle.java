package ArrayAllProblem;

public class SecondLargestEle {
    public static void main(String[] args) {
        int[] arr= {10,9,12,34,67,45,98};
        int n = arr.length;
        int largest = Integer.MIN_VALUE;
        int secondlargest = Integer.MIN_VALUE;
        if(n < 2 ){
            System.out.println("there must me more than 2 digit are to check the second largest element");
        }else{
            for(int i =0;i<n;i++){
                if(arr[i]>largest){
                    secondlargest=largest;
                    largest=arr[i];
                } else if (arr[i]>secondlargest && arr[i]!= largest) {
                    secondlargest=arr[i];
                }
            }
        }
        if(secondlargest != Integer.MIN_VALUE){
            System.out.println(secondlargest);
        }else {
            System.out.println("there is no second largest element");
        }


    }
}
