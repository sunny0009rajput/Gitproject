package StringProblem;

import java.util.*;

public class groupAnagrams {
    public static List<List<String>> groupAnagrams(String[] strs){
        if(strs == null || strs.length == 0){
            return new ArrayList<>();
        }

        Map<String, List<String>> map = new HashMap<>();

        for(String str : strs){
            char[] charArray = str.toCharArray();
            Arrays.sort(charArray);
            String sortedStr = new String(charArray);

            map.putIfAbsent(sortedStr,new ArrayList<>());
            map.get(sortedStr).add(str);

        }
        return new ArrayList<>(map.values());

    }

    public static void main(String[] args) {
        groupAnagrams solution = new groupAnagrams();
        String[] input = {"eat", "tea", "tan", "ate", "nat", "bat"};
        List<List<String>> result = solution.groupAnagrams(input);
        System.out.println(result);
    }
}
