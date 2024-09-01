package ArrayAllProblem;

public class ContainEvenNODigit {
    public static void main(String[] args) {
        int[] arr = {12,345,2,6,7896};
        evenCount(arr);
    }

    public static void evenCount(int[] arr){
        int[] arr1 = new int[arr.length];


        for(int i=0; i< arr.length;i++){
            int count =0;
            int num = arr[i];

            while (num !=0){
                num = num / 10;
                count++;

            }
            arr1[i]=count;
        }
  
        for(int i=0;i<arr1.length;i++){
            System.out.println(arr1[i]);
        }

        int count1 =0;

        for(int j=0;j<arr1.length;j++){
            if(arr1[j] % 2 == 0){
                count1++;
            }
        }
        System.out.println("...................................");

        System.out.println(count1);

    }
    // output

}
