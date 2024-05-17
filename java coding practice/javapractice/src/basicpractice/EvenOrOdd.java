package basicpractice;

import java.util.Scanner;

public class EvenOrOdd {
    public static void main(String[] args) {
        System.out.println("enter the number to check given number is even or odd");
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        if (num % 2 == 0){
            System.out.println("given number is even = "+num);

        } else if (num % 2 != 0) {
            System.out.println("given number is odd ="+ num);

        }else {
            System.out.println("given number is 0");
        }
    }
}
