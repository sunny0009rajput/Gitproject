package basicpractice;

import java.util.Scanner;

public class SumOfNumberIngivenRange {
    public static void main(String[] args) {
        System.out.println("enter the range to find sum of the range ");
        System.out.println("enter the first number");
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        System.out.println("enter the second number ");
        int b = scan.nextInt();
//        int sum =0;
//        for(int i = a;i <=b;i++){
//            sum = sum+i;
//
//        }
//        System.out.println(sum);

        // using formula
//        int sum = b*(b+1)/2 -a*(a+1)/2 +a;
//        System.out.println(sum);

        // using recursion method

        int sum = getSum(0,a,b);
        System.out.println(sum);
    }
    public static int getSum(int sum,int a , int b){
        if(a > b)
            return sum;
        return a + getSum(sum,a+1,b);
    }
}
