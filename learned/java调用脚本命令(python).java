package com.example;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class App 
{
    public static void main( String[] args )
    {
        Process proc;
        try {
         
            String[] execArgs = new String[] { "python", "F:\\project\\python\\out_image.py",
             "{'dataFile':'F:\\project\\python\\json.txt','outPath':'F:\\project\\python\\plot1.svg'}" };
            proc = Runtime.getRuntime().exec(execArgs);// 执行py文件
            //用输入输出流来截取结果
            BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream()));
            String line = null;
            while ((line = in.readLine()) != null) {
                System.out.println(line);
            }
            in.close();
            proc.waitFor();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println( "Hello World33!" );
    }
}
