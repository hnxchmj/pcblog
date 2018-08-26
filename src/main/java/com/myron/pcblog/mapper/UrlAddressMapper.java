package com.myron.pcblog.mapper;

import com.myron.pcblog.model.UrlAddress;

public interface UrlAddressMapper {
    UrlAddress getByProjectName(String name);
}
