package PatternProblem;

//   pattern nested loop
// 1.  for the outer loop count the no of lines.
// 2.  for the main loop, focus on the coulmn
//     & connect them somehow to the rows
// 3. print the '*' inside the main for loop.
// 4. observe symmetry [optional]

import java.util.Map;

public class PatternProblem {


        public static void main(String[] args) {
            int n1 = 4;

            pattern1(n1);
            System.out.println("second pattern2");
            int n2 = 5;
            pattern2(n2);
            System.out.println("third pattern 3");
            pattern3(n2);
            System.out.println("third pattern 4");
            pattern4(n2);
            System.out.println("third pattern 5");
            pattern5(n2);
            System.out.println("third pattern 6");
            pattern6(n2);
            System.out.println(" 7 th pattern ");
            pattern7(n2);
            System.out.println(" 8 th pattern ");
            pattern8(n2);
            System.out.println(" 9 th pattern ");
            pattern9(n2);
            System.out.println(" 10 th pattern ");
            pattern10(n2);
            System.out.println(" 11 th pattern ");
            pattern11(n2);
            System.out.println(" 12 th pattern ");
            pattern12(n1);
            System.out.println(" 13 th pattern ");
            pattern13(n2);
            System.out.println(" 14 th pattern ");
            pattern14(n2);
            System.out.println(" 15 th pattern ");
            pattern15(n2);
            System.out.println(" 16 th pattern ");
            pattern16(n2);
            System.out.println(" 17 th pattern ");
            pattern17(n2);
            System.out.println(" 18 th pattern ");
            pattern18(n2);
            System.out.println(" 19 th pattern ");
            pattern19(n2);
            System.out.println(" 20 th pattern ");
            pattern20(n2);
            System.out.println(" 21 th pattern ");
            pattern21(n1);
            System.out.println(" 22 th pattern ");
            pattern22(n2);


        }

        // * * * *
        // * * * *
        // * * * *
    //     * * * *

    public static void pattern1(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                System.out.print("* ");
            }
            System.out.println(" ");
        }

    }

    // *
    // * *
    // * * *
    // * * * *
    // * * * * *

    public static void pattern2(int n){
        for(int i=0;i<n+1;i++){
            for(int j=0;j<i;j++){
                System.out.print("* ");
            }
            System.out.println(" ");
        }

    }

    // 1
    // 1 2
    // 1 2 3
    // 1 2 3 4
    // 1 2 3 4 5

    public static void pattern3(int n){
        for(int i=1;i<n+1;i++){
            for(int j=0;j<i;j++){
                System.out.print(j+1+" ");
            }
            System.out.println(" ");
        }

    }

    // 1
    // 2 2
    // 3 3 3
    // 4 4 4 4
    // 5 5 5 5 5

    public static void pattern4(int n){
        for(int i=1;i<n+1;i++){
            for(int j=0;j<i;j++){
                System.out.print(i+" ");
            }
            System.out.println(" ");
        }

    }


    // * * * * *
    // * * * *
    // * * *
    // * *
    // *

    public static void pattern5(int n){
        for(int i=0;i<n;i++){
            for(int j=n;j>i;j--){
                System.out.print("* ");
            }
            System.out.println(" ");
        }

    }

    // 1 2 3 4 5
    // 1 2 3 4
    // 1 2 3
    // 1 2
    // 1

    public static void pattern6(int n){
        for(int i=0;i<n;i++){
            for(int j=n;j>i;j--){
                System.out.print(n-j+1+" ");
            }
            System.out.println(" ");
        }

    }

    //       *
    //     * * *
    //   * * * * *
    //  * * * * * * *
    //* * * * * * * * *
    public static void pattern7(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<n-i-1;j++){
                System.out.print(" ");
            }
            for(int k=0;k< 2*i+1;k++){
                System.out.print("*");
            }
            for(int l=0;l<n-i-1;l++){
                System.out.print(" ");
            }
            System.out.println();
        }

    }
//  * * * * * * * * *
//    * * * * * * *
//      * * * * *
//        * * *
//          *

    public static void pattern8(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<i;j++){
                System.out.print(" ");
            }
            for(int k=0;k<2*n-(2*i+1);k++){
                System.out.print("*");
            }
            for(int l=0;l<i;l++){
                System.out.print(" ");
            }
            System.out.println();
        }

    }
//         *
//       * * *
//     * * * * *
//    * * * * * * *
//  * * * * * * * * *
//  * * * * * * * * *
//    * * * * * * *
//      * * * * *
//        * * *
//          *

    public static void pattern9(int n){

        for(int i=0;i<n;i++){
            for(int j=0;j<n-i-1;j++){
                System.out.print(" ");
            }
            for(int k=0;k< 2*i+1;k++){
                System.out.print("*");
            }
            for(int l=0;l<n-i-1;l++){
                System.out.print(" ");
            }
            System.out.println();
        }


        for(int i=0;i<n;i++){
            for(int j=0;j<i;j++){
                System.out.print(" ");
            }
            for(int k=0;k<2*n-(2*i+1);k++){
                System.out.print("*");
            }
            for(int l=0;l<i;l++){
                System.out.print(" ");
            }
            System.out.println();
        }

    }

    // *
    // * *
    // * * *
    // * * * *
    // * * * * *
    // * * * *
    // * * *
    // * *
    // *

    public static void pattern10(int n ){
            for(int i =0;i < n ; i++){
                for(int j=0; j < i+1;j++){
                    System.out.print("* ");
                }
                System.out.println();
            }
        for(int i =0;i < n-1 ; i++){
            for(int j=0; j<n-i-1;j++){
                System.out.print("* ");
            }
            for(int j=0; j<i-1;j++){
                System.out.print(" ");
            }
            System.out.println();

        }

    }

    // 1
    // 0 1
    // 1 0 1
    // 0 1 0 1
    // 1 0 1 0

    public static void pattern11(int n ){
           //  First row starts by printing a single 1
            int start =1;
            for(int i =0;i< n ; i++){
                // if the row index is even then 1 is printed first
                // in that row.
                if(i%2==0){
                    start=1;
                    // if odd, then the first 0 will be printed in that row.
                }else {
                    start = 0;
                }
                // We alternatively print 1's and 0's in each row by using
                // the inner for loop.
                for(int j =0;j<=i;j++){
                    System.out.print(start+" ");
                    start=1-start;
                }
                System.out.println();
            }
    }
    //                 number space number
    // 1             1      1   6  1
    // 1 2         2 1      2   4  2
    // 1 2 3     3 2 1      3   2  3
    // 1 2 3 4 4 3 2 1      4   0  4

    public static void pattern12(int n){
            int space =6; // 2 *(n-1)
            for(int i =1;i <= n ; i++){
                // number
                for(int j=1;j<=i;j++){
                    System.out.print(j);
                }
                // space
                for(int j=1;j<=space;j++){
                    System.out.print(" ");
                }
                // number
                for(int j=i;j >=1 ;j--){
                    System.out.print(j);
                }
                space= space-2;
                System.out.println();
            }
    }

    // 1
    // 2 3
    // 4 5 6
    // 7 8 9 10
    // 11 12 13 14 15

    public static void pattern13(int n){
            int count =1;
            for(int i =1;i<=n;i++){

                for(int j =1;j <= i;j++){
                    System.out.print(count+" ");
                    count++;
                }
                System.out.println();
            }
    }

    // a
    // a b
    // a b c
    // a b c d
    // a b c d e

    public static void pattern14(int n){

        for(int i =1;i<=n;i++){

            for(char j = 'A';j<='A'+i;j++){
                System.out.print(j+" ");

            }
            System.out.println();
        }
    }

    // a b c d e
    // a b c d
    // a b c
    // a b
    // a

    public static void pattern15(int n){

        for(int i =0;i<n;i++){

            for(char j = 'A';j<='A'+(n-i-1);j++){
                System.out.print(j+" ");

            }

            System.out.println();
        }
    }

    // a
    // b b
    // c c c
    // d d d d
    // e e e e e

    public static void pattern16(int n){
        char ch = 'A';
        for(int i =1;i<=n;i++){

            for(int j =1;j<=i;j++){
                System.out.print(ch+" ");

            }
            System.out.println();
            ch++;
        }
    }

    //      a
    //     a b a
    //    a b c b a
    //  a b c d c b a

    public static void pattern17(int n){
            for(int i =0;i <n;i++){
                for(int j=0;j<n-i-1;j++){
                    System.out.print(" ");
                }
                char ch = 'A';
                int breakpoint = (2*i+1)/2;
                for(int j =1;j<=2*i+1;j++){
                    System.out.print(ch);
                    if(j <= breakpoint){
                        ch++;
                    }else{
                        ch--;
                    }
                }
                for(int j=0;j<n-i-1;j++){
                    System.out.print(" ");
                }
                System.out.println();
            }
    }

    // E
    // D E
    // C D E
    // B C D E
    // A B C D E

    public static void pattern18(int n ){
            for(int i =0; i <n;i++){
                for(char ch = (char)('A'+n-1-i);ch<='A'+n-1;ch++){
                    System.out.print(ch+" ");
                }
                System.out.println();
            }
    }

    // * * * * * * * * * *
    // * * * *     * * * *
    // * * *         * * *
    // * *             * *
    // *                 *
    // *                 *
    // * *             * *
    // * * *         * * *
    // * * * *     * * * *
    // * * * * * * * * * *

    public static void pattern19(int n){
            for(int i =0;i< n;i++){
                for(int j=0;j<n-i;j++){
                    System.out.print("*");
                }
                for(int j =0;j<2*i;j++){
                    System.out.print(" ");
                }
                for(int j =0;j<n-i;j++){
                    System.out.print("*");
                }
                System.out.println();
            }
            int count = 2*n-2;
        for(int i =1;i<= n;i++){
            for(int j=0;j<i;j++){
                System.out.print("*");
            }
            for(int j =0;j<count;j++){
                System.out.print(" ");
            }
            for(int j =0;j<i;j++){
                System.out.print("*");
            }
            count = count -2;
            System.out.println();
        }
    }

    // *                 *
    // * *             * *
    // * * *         * * *
    // * * * *     * * * *
    // * * * * * * * * * *
    // * * * *     * * * *
    // * * *         * * *
    // * *             * *
    // *                 *

    public static void pattern20(int n){
            int count =2*n-2;
            for(int i =0;i<n;i++){
                for(int j=0;j<=i;j++){
                    System.out.print("*");
                }
                for(int j=0;j<count;j++){
                    System.out.print(" ");
                }
                for(int j =0;j<=i;j++){
                    System.out.print("*");
                }
                System.out.println();
                count=count -2;
            }


        for(int i =1;i<n;i++){
            for(int j=0;j<n-i;j++){
                System.out.print("*");
            }
            for(int j=0;j<2*i;j++){
                System.out.print(" ");
            }
            for(int j =0;j<n-i;j++){
                System.out.print("*");
            }
            System.out.println();

        }
    }

    // * * * *
    // *     *
    // *     *
    // * * * *

    public static void pattern21(int n ){
            for(int i =0;i<n;i++){
                for(int j=0;j<n;j++){
                    if(i ==0 || i == n-1 || j == 0 || j== n-1){
                        System.out.print("*");
                    }else{
                        System.out.print(" ");
                    }
                }
                System.out.println();
            }
    }

    // 4 4 4 4 4 4 4
    // 4 3 3 3 3 3 4
    // 4 3 2 2 2 3 4
    // 4 3 2 1 2 3 4
    // 4 3 2 2 2 3 4
    // 4 3 3 3 3 3 4
    // 4 4 4 4 4 4 4

    public static void pattern22(int n ){
            for(int i =0;i < 2*n-1;i++){
                for(int j =0;j< 2 * n-1;j++){
                    int top =i;
                    int bottom =j;
                    int right = (2 *n-2)-j;
                    int left = ( 2 *n-2)-i;

                    System.out.print(n- Math.min(Math.min(top,bottom),Math.min(left,right))+" ");
                }
                System.out.println();
            }
    }



}
