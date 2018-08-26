package com.myron.pcblog.controller;

import com.myron.pcblog.mapper.UrlAddressMapper;
import com.myron.pcblog.util.HttpUtil;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("User")
public class BlogController {

    private final Logger logger = LoggerFactory.getLogger(BlogController.class);

    @Autowired
    private UrlAddressMapper urlAddressMapper;

    @GetMapping("getUserInfo")
    public Map<String,Object> getUserInfo(@RequestParam String userInfo){
        return null;
    }
    @GetMapping("registerNewUser")
    public JSONObject registerNewUser(@RequestParam String userInfo){
        String url = urlAddressMapper.getByProjectName("localhost").getBlogHttp();
        url = url +"User/register";
        JSONObject userObject  = JSONObject.fromObject(userInfo);
        String body = userObject.toString();
        logger.info("##url: "+url+" ##body: "+body);
        String response = null;
        try {
            HttpUtil http = new HttpUtil(url);
            response = http.post(body);
        } catch (Exception e) {
            e.printStackTrace();
        }
        logger.info("response:"+response);
        JSONObject responseObj = JSONObject.fromObject(response);
        return responseObj;
    }
    @PostMapping("otherMethods")
    public Map<String,Object> otherMethods(@RequestBody String otherParams){
        return null;
    }
}
