package recursion;

// What is Recursion?

//        It is a phenomenon when a function calls itself indefinitely until a specified condition is fulfilled.
// What is Stack Overflow in Recursion?

   //     Whenever recursion calls are executed, they’re simultaneously stored in a recursion stack where they wait for the completion of the recursive function. A recursive function can only be completed if a base condition is fulfilled and the control returns to the parent function.

     //   But, when there is no base condition given for a particular recursive function, it gets called indefinitely which results in a Stack Overflow i.e, exceeding the memory limit of the recursion stack and hence the program terminates giving a Segmentation Fault error.
public class PrintNameNtimes {
    public static void main(String[] args) {
        int n =5;
        func(1,n);

    }
    public static void func(int i ,int n ){
        if(i <= n){
            System.out.println("sunny");
            func(i+1,n);
        }

    }

}
