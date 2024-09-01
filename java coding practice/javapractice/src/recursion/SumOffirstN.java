package recursion;

public class SumOffirstN {
    public static void main(String[] args) {
        int sum =0;
        func(5,sum);
    }
    public static void func(int i,int sum){
        if(i ==0){
            System.out.println(sum);
            return;
        }
        func(i-1,sum+i);


    }
}
