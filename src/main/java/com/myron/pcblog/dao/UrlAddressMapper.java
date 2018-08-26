package com.myron.pcblog.dao;

import com.myron.pcblog.model.UrlAddress;

public interface UrlAddressMapper {
    UrlAddress selectByBlogHttp(String project);
}
