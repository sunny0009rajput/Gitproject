package recursion;

public class PrintNto1 {
    public static void main(String[] args) {
        int n =10;
        func(1,n);
    }
    public static void func(int i ,int n){
        if(n >= i){
            System.out.println(n);
            func(1,n-1);
        }
    }
}
