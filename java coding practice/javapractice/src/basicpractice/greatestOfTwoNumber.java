package basicpractice;

import java.util.Scanner;

public class greatestOfTwoNumber {
    public static void main(String[] args) {
        System.out.println("to find the greater of two number ");
        Scanner scan = new Scanner(System.in);
        int num1 = scan.nextInt();
        int num2 = scan.nextInt();

        if(num1 == num2 ){
            System.out.println("both number are equals ");
        }

    }
}
