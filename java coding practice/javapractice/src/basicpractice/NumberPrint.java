package basicpractice;

import java.util.Scanner;

public class NumberPrint {
    public static void main(String[] args) {


        System.out.println("enter the number you want");
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
       if(num <10){
           System.out.println("entered number is "+num);
       }else{
           System.out.println("enter number is not in the range of 1 to 9");
       }

    }

}

