package com.myron.pcblog;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.myron.pcblog.mapper")
public class PcblogApplication {

    public static void main(String[] args) {
        SpringApplication.run(PcblogApplication.class, args);
    }
}
