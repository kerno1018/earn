package com.example.util;

import java.util.Calendar;
import java.util.Date;

public class TimeLimit {
    protected Calendar time = Calendar.getInstance();
    public Boolean holdOn () {
        return time.getTimeInMillis() <= new Date().getTime();
    }

    protected Calendar dataProtectedTime = Calendar.getInstance();
    public Boolean canGetNew(){
        return dataProtectedTime.getTimeInMillis() <= new Date().getTime();
    }

}
