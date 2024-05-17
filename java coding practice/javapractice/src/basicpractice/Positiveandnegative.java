package basicpractice;

import java.util.Scanner;

public class Positiveandnegative {
    public static void main(String[] args) {
        System.out.println("enter the number to check the number is positive or negative ");
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        if (n > 0){
            System.out.println("given number is positive = "+n);
        } else if (n < 0) {
            System.out.println("given number is negative = "+n);

        }else {
            System.out.println("given number is neither positive nor negative its 0");
        }
    }
}
