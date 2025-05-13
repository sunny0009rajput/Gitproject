package recursion;

public class Fibonacci {
    public static void main(String[] args) {
        int n =4;
        System.out.println(fibonacci(n));
    }
    public static int fibonacci(int n){
        if(n <=1){
            return n;
        }
        int last = fibonacci(n-1);
        int slast = fibonacci(n-2);
        return last+slast;
    }
}
