package BasicMaths;
// if reverse of number is equal to that number is palindrom

import java.util.Scanner;

public class PalindromNumber {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        palindrome(n);

    }
    public static void palindrome(int n ){
        int number = n;
        int reverse =0;
        while(n > 0){
            int remainder = n % 10;
            reverse = reverse * 10 + remainder;
            n = n /10;

        }
        if(reverse == number){
            System.out.println("gieven number is palindrom "+reverse);
        }else{
            System.out.println("given number is not palindrom");
        }
    }
}
