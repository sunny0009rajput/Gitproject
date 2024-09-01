package recursion;

public class Print1toNusingrecursion {
    public static void main(String[] args) {
        int n =10;
        func(1,n);
    }
    public static void func(int i , int n){
        if(i <= n){
            System.out.println(i);
            func(i+1,n);
        }
    }
}
