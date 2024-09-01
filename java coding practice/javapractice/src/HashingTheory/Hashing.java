package HashingTheory;

import java.util.HashMap;
import java.util.Scanner;

//Input:
//
//        5
//        1 3 2 1 3
//        5
//        1 4 2 3 12
//
//        Output:
//
//        2
//        0
//        1
//        2
//        0
public class Hashing {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
//        int n = scan.nextInt();
//
//        int[] arr = new int[n];
//        for(int i =0; i < n;i++){
//            arr[i]=scan.nextInt();
//        }
//
//        // precompute
//        int[] hash = new int[13];
//        for(int i =0;i < n ; i++){
//            hash[arr[i]] += 1;
//        }
//
//        int q = scan.nextInt();
//        while(q-- != 0){
//            int number = scan.nextInt();
//            // fetching
//            System.out.println(hash[number]);
//        }


//        same thing for character if only lower case are available

//        String s = scan.next();
//
//
//        // precompute
//        int[] hash = new int[26];
//        for(int i =0;i < s.length();i++){
//             hash[s.charAt(i)-'a']++;
//
//        }
//
//        int q = scan.nextInt();
//        while(q-- > 0){
//            char c = scan.next().charAt(0);
//            System.out.println(hash[c-'a']);
//        }

        // code if the string contains both uppercase and lowercase

//        String s = scan.next();
//        int[] hash = new int[256];
//        for(int i =0;i <s.length();i++){
//            hash[s.charAt(i)]++;
//        }
//
//        int q = scan.nextInt();
//        while(q-- > 0){
//            char character = scan.next().charAt(0);
//            System.out.println(hash[character]);
//        }

        // how to hash large number like 10^9 or higher :

        int n;
        n = scan.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = scan.nextInt();
        }

        //precompute:
        HashMap<Integer, Integer> mp = new HashMap<>();
        for (int i = 0; i < n; i++) {
            int key = arr[i];
            int freq = 0;
            if (mp.containsKey(key)) freq = mp.get(key); // fetching from the map
            freq++;
            mp.put(key, freq); // inserting into the map
        }

        // Iterate over the map:
        /*
        for (Map.Entry<Integer, Integer> it : mp.entrySet()) {
            System.out.println(it.getKey() + "->" + it.getValue());
        }
        */

        int q;
        q = scan.nextInt();
        while (q-- > 0) {
            int number;
            number = scan.nextInt();
            // fetch:
            if (mp.containsKey(number)) System.out.println(mp.get(number));
            else System.out.println(0);
        }
    }
}
