package graphs;

import java.util.ArrayList;

public class PrintPathinDfs {

    static class Edge {

        int src;
        int dest;

        public Edge(int src, int dest) {

            this.src = src;

            this.dest = dest;
        }

    }

    public static void createGraph(ArrayList<Edge> graph[]) {

        for (int i = 0; i < graph.length; i++) {

            graph[i] = new ArrayList<Edge>();


        }

        graph[0].add(new Edge(0, 1));

        graph[0].add(new Edge(0, 2));

        graph[1].add(new Edge(1, 0));

        graph[1].add(new Edge(1, 3));

        graph[2].add(new Edge(2, 0));

        graph[2].add(new Edge(2, 4));

        graph[3].add(new Edge(3, 1));

        graph[3].add(new Edge(3, 5));

        graph[3].add(new Edge(3, 4));

        graph[4].add(new Edge(4, 2));

        graph[4].add(new Edge(4, 3));

        graph[4].add(new Edge(4, 5));

        graph[5].add(new Edge(5, 3));

        graph[5].add(new Edge(5, 4));

        graph[5].add(new Edge(5, 6));

        graph[6].add(new Edge(6, 5));

    }

    public static void dfs(ArrayList<Edge> graph[], int curr, boolean vis[]) {

        System.out.println(curr + " ");

        vis[curr] = true;

        for (int i = 0; i < graph[curr].size(); i++) {
            Edge e= graph[curr].get(i);

            if (vis[e.dest] == false) {

                dfs(graph, e.dest, vis);

            }
        }
    }

    public static void printAllPath(ArrayList<Edge> graph[], boolean vis[], int curr, String path, int tar) {
        if (curr == tar) {

            System.out.println(path);

            return;

        }

        for (int i = 0; i < graph[curr].size(); i++) {

            Edge e = graph[curr].get(i);

            if (!vis[e.dest]) {

                vis[curr] = true;
                printAllPath(graph, vis, e.dest, path + e.dest, tar);

                vis[curr] = false;

            }
        }
    }

    public static void main(String[] args) {

        int v = 7;

        ArrayList<Edge> graph[] = new ArrayList[v];

        createGraph(graph);

        int src = 0;
        int tar = 5;

        printAllPath(graph, new boolean[v], src, "0", tar);

        //  boolean vis[] = new boolean[v];

        //    for(int i=0;i<v;1++){

//      if(vis[1]== false){
        //               dfs(graph,i,vis);
        //
        //     System.out.println();


    }
}





