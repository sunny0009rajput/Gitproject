package BitManipulation;

public class CheckNoisEvenorOdd {
    public static void main(String[] args) {
        int n =13;
        if((n & 1) == 1){
            System.out.println("number is odd "+n);
        }else{
            System.out.println("number is even "+n);
        }
    }
}
