package ArrayAllProblem;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class mergeIntervals {
    public static void main(String[] args) {
        mergeIntervals solution = new mergeIntervals();
        int[][] input1 = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
        System.out.println(Arrays.deepToString(solution.merge(input1)));
        // Output: [[1, 6], [8, 10], [15, 18]]

    }
    public static int[][] merge(int[][] intervals){
        if(intervals == null || intervals.length <= 1) return intervals;

        Arrays.sort(intervals,(a,b)-> Integer.compare(a[0],b[0]));
        List<int[]> merged = new ArrayList<>();
        for(int[] interval : intervals){
            if(merged.isEmpty() || merged.get(merged.size()-1)[1] < interval[0] ){
                merged.add(interval);
            }else {
                merged.get(merged.size()-1)[1] = Math.max(merged.get(merged.size()-1)[1],interval[1]);
            }
        }
        return merged.toArray(new int[merged.size()][]);
    }
}
