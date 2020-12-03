package me.rookie2987;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        System.out.println(slope(1,1));
        System.out.println(slope(3,1));
        System.out.println(slope(5,1));
        System.out.println(slope(7,1));
        System.out.println(slope(1,2));
    }

    public static int slope(Integer slopeX, Integer slopeY) {
        Integer trees = 0;

        Integer currentX = 1;
        Integer currentY = 1;

        File input = new File("input");
        try {
            Scanner inputReader = new Scanner(input);
            while(inputReader.hasNextLine()){
                String ln = inputReader.nextLine();
                currentY++;
                while(currentY % slopeY != 0) {
                    ln = inputReader.nextLine();
                    currentY++;
                }
                if(ln.substring(currentX - 1, currentX).equals("#")){
                    trees++;
                }
                currentX += slopeX;
                if(currentX > 31){
                    currentX -= 31;
                }
            }
        } catch (FileNotFoundException e) {
        }
        return trees;
    }

}
