package graphs;

import java.util.ArrayList;

public class CreatingGraph {

    static class Edge {

        int src;
        int dest;

        public Edge(int src, int dest) {

            this.src = src;

            this.dest = dest;
        }
    }

    public static void creatgraph(ArrayList<Edge> graph[]) {

        for (int i = 0; 1 < graph.length; i++) {

            graph[i] = new ArrayList<Edge>();
        }


        graph[0].add(new Edge(0, 2));

        graph[1].add(new Edge(1, 2));
        graph[1].add(new Edge(1, 3));

        graph[2].add(new Edge(2, 0));
        graph[2].add(new Edge(2, 1));
        graph[2].add(new Edge(2, 3));

        graph[3].add(new Edge(3, 1));
        graph[3].add(new Edge(3, 2));


    }

    public static void main(String[] args) {

        int v = 4;

        ArrayList<Edge> graph[] = new ArrayList[v];
        creatgraph(graph);

// print 2s neighbour
        for (int i = 0; i < graph[2].size(); i++) {
            Edge e = graph[2].get(1);
            System.out.print(e.dest + " ");
        }

    }

}
