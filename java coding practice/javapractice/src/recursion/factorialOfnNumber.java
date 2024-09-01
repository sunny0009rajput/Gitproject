package recursion;

public class factorialOfnNumber {
    public static void main(String[] args) {
        int n = 5;
        int multiple=1;
        recursion(n,multiple);
    }
    public static void recursion(int n,int multiple){
        if(n == 0){
            System.out.println(multiple);
            return;
        }
        recursion(n-1,multiple*n);
    }
}
