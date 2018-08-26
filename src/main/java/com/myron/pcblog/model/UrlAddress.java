package com.myron.pcblog.model;

public class UrlAddress {

    String projectName;
    String blogHttp;

    public String getProjectName() {return projectName;}

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getBlogHttp() {
        return blogHttp;
    }

    public void setBlogHttp(String blogHttp) {
        this.blogHttp = blogHttp;
    }

    @Override
    public String toString() {
        return "UrlAddress{" +
                "projectName='" + projectName + '\'' +
                ", blogHttp='" + blogHttp + '\'' +
                '}';
    }
}
