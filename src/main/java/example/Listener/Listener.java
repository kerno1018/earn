package example.Listener;

import com.example.util.EmailSender;
import example.ETH.Earn;

import javax.swing.*;
import java.applet.AudioClip;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Listener implements Runnable{
    Map<String,List<Earn>> map = new HashMap<>();
    public static Double inter = 30.0;
    @Override
    public void run(){
            for(List<Earn> list : map.values()){
                for(Earn listener : list){
                    listener.update();
                }
            }
            calculate();
    }
    private void calculate(){
        for(String key: map.keySet()){
            List<Earn> listeners = map.get(key);
            Double valueA=listeners.get(0).price;// otcbtc
            Double valueB=listeners.get(1).price;// okex
            if(valueA == 0.0 || valueB==0.0){
                return;
            }
            Double priminum = Math.abs(valueA-valueB)/valueB*100;
            if(priminum >=1.8 || Math.abs(valueA-valueB)>=inter){
                new Thread(new Ring()).start();
            }
            if(priminum>=3){
                try {
                    // new Thread(new Ring()).start();
//                    EmailSender.send(false,"418697994@qq.com",key+"priminum"+priminum,priminum+"  ");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            System.out.println(" *** "+key+" Priminum:"+(priminum)+"%, 价差："+(valueA-valueB) +" otc:"+valueA +", okex:"+valueB);
        }
    }
    public void addListener(String key,List<Earn> listeners){
        map.put(key,listeners);
    }

    class Ring implements Runnable{

        @Override
        public void run() {
            for(int i=0;i<3;i++){
                try {
                    URL u1 = null;
                    try {
                        u1 = new URL("http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201702/8378.wav");
                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                    }
                    AudioClip co1 = JApplet.newAudioClip(u1);
                    co1.play();
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
