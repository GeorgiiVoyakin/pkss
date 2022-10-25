package pkss.pr2;

import java.util.stream.Stream;

public class Solution {
    private static double G(double A, double B) {
        return (2 * A + B * B) / (A * B * 2 + B * 5);
    }

    public static double task5(double S, double T) {
        return G(1, Math.sin(S)) + 2 * G(T * S, 24) - G(5, -S);
    }

    public static double task8(int[] coords) {
        if (coords.length != 12) {
            return -1;
        }
        double side1 = getDistance(coords[0], coords[1], coords[2], coords[3]);
        double side2 = getDistance(coords[2], coords[3], coords[4], coords[5]);
        double side3 = getDistance(coords[4], coords[5], coords[6], coords[7]);
        double side4 = getDistance(coords[6], coords[7], coords[8], coords[9]);
        double side5 = getDistance(coords[8], coords[9], coords[10], coords[11]);
        double side6 = getDistance(coords[10], coords[11], coords[0], coords[1]);
        return side1 + side2 + side3 + side4 + side5 + side6;
    }

    private static double getDistance(double x1, double y1, double x2, double y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }

    public static int task11(int a, int b, int c) {
        return Stream.of(a, b, c).toList().stream().max(Integer::compare).orElseThrow();
    }

    public static double task14(double A) {
        double x = (4 + Math.sqrt(-4 * -4 - 4 * -1)) / 2;
        double y = (-A + Math.sqrt(A * A - 4 * 2 * -(A * A))) / (2 * 2);
        return (x + y) / (x * y);
    }

    public static double task17(int[] coords) {
        if (coords.length != 16) {
            return -1;
        }
        double side1 = getDistance(coords[0], coords[1], coords[2], coords[3]);
        double side2 = getDistance(coords[2], coords[3], coords[4], coords[5]);
        double side3 = getDistance(coords[4], coords[5], coords[6], coords[7]);
        double side4 = getDistance(coords[6], coords[7], coords[8], coords[9]);
        double side5 = getDistance(coords[8], coords[9], coords[10], coords[11]);
        double side6 = getDistance(coords[10], coords[11], coords[12], coords[13]);
        double side7 = getDistance(coords[12], coords[13], coords[14], coords[15]);
        double side8 = getDistance(coords[14], coords[15], coords[0], coords[1]);
        return side1 + side2 + side3 + side4 + side5 + side6 + side7 + side8;
    }
}
