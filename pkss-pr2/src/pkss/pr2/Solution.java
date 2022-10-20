package pkss.pr2;

import java.util.stream.Stream;

public class Solution {
    private double G(double A, double B) {
        return (2 * A + B * B) / (A * B * 2 + B * 5);
    }

    public double task5(double S, double T) {
        return G(1, Math.sin(S)) + 2 * G(T * S, 24) - G(5, -S);
    }

    public double task8(int[] coords) {
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

    private double getDistance(double x1, double y1, double x2, double y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }

    public int task11(int a, int b, int c) {
        return Stream.of(a, b, c).toList().stream().max(Integer::compare).orElseThrow();
    }

    public double task14(double A) {
        //Z=(X1+Y1)/(X1*Y1)
        // X2- 4*X-1=0
        double x = (4 + Math.sqrt(4*4 - 4*(-1))) / (2*4);
        return x;
    }

    public double task17(int[] coords) {
        if (coords.length != 16) {
            return -1;
        }
        double side1 = getDistance(coords[0], coords[1], coords[2], coords[3]);
        double side2 = getDistance(coords[2], coords[3], coords[4], coords[5]);
        double side3 = getDistance(coords[4], coords[5], coords[6], coords[7]);
        double side4 = getDistance(coords[6], coords[7], coords[8], coords[9]);
        double side5 = getDistance(coords[8], coords[9], coords[10], coords[11]);
        double side6 = getDistance(coords[10], coords[11], coords[12], coords[13]);
        double side7 = getDistance(coords[13], coords[14], coords[15], coords[16]);
        double side8 = getDistance(coords[10], coords[11], coords[0], coords[1]);
        return side1 + side2 + side3 + side4 + side5 + side6;
    }
}
