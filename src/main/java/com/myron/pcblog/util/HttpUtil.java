package com.myron.pcblog.util;


import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.*;

public class HttpUtil {

    private String _encode = "utf-8";
    private int _timeOut = 30000;
    private String _url;
    private HttpURLConnection _httpConnect = null;

    public HttpUtil(String strUrl) throws Exception {
        this._url = strUrl;

        URL url = new URL(strUrl);
        this._httpConnect = (HttpURLConnection) url.openConnection();
        this._httpConnect.setConnectTimeout(_timeOut);
        this._httpConnect.setReadTimeout(_timeOut);
        this._httpConnect
                .setRequestProperty("Content-type", "application/json");
        this._httpConnect.setDoOutput(true);
        this._httpConnect.setDoInput(true);

    }

    public HttpUtil(String strUrl, Proxy proxy) throws Exception {
        this._url = strUrl;

        URL url = new URL(strUrl);
        this._httpConnect = (HttpURLConnection) url.openConnection(proxy);
        this._httpConnect.setConnectTimeout(_timeOut);
        this._httpConnect.setReadTimeout(_timeOut);
        this._httpConnect
                .setRequestProperty("Content-type", "application/json");
        this._httpConnect.setDoOutput(true);
        this._httpConnect.setDoInput(true);

    }
    public void set_encode(String _encode) {
        this._encode = _encode;
    }

    public void set_timeOut(int _timeOut) {
        this._timeOut = _timeOut;
        this._httpConnect.setConnectTimeout(_timeOut);
        this._httpConnect.setReadTimeout(_timeOut);
    }

    public void setHeader(String key, String value) {
        this._httpConnect.setRequestProperty(key, value);
    }

    public String post(byte[] bytes) throws Exception {
        this._httpConnect.setRequestMethod("POST");
        this._httpConnect.connect();
        OutputStream outStrm = this._httpConnect.getOutputStream();
        outStrm.write(bytes);

        outStrm.flush();

        outStrm.close();

        return new String(bytesFromStream(this._httpConnect.getInputStream()),
                this._encode);
    }

    public String post(String body) throws Exception {

        this._httpConnect.setRequestMethod("POST");
        this._httpConnect.connect();
        OutputStream outStrm = this._httpConnect.getOutputStream();
        outStrm.write(body.getBytes(this._encode));

        outStrm.flush();

        outStrm.close();

        InputStream inStrm = this._httpConnect.getInputStream();
        return new String(bytesFromStream(inStrm), this._encode);

    }

    public String get() throws Exception {

        this._httpConnect.setRequestMethod("GET");
        this._httpConnect.connect();
        InputStream inStrm = this._httpConnect.getInputStream();
        return new String(bytesFromStream(inStrm), this._encode);
    }

    public String get(String encode) throws Exception {

        this._httpConnect.setRequestMethod("GET");
        this._httpConnect.connect();
        InputStream inStrm = this._httpConnect.getInputStream();
        return new String(bytesFromStream(inStrm), encode);
    }

    public byte[] getBytes() throws Exception {

        this._httpConnect.setRequestMethod("GET");
        this._httpConnect.connect();
        InputStream inStrm = this._httpConnect.getInputStream();

        return this.bytesFromStream(inStrm);

    }

    private byte[] bytesFromStream(InputStream is) throws Exception {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        byte[] tmp = new byte[1024];
        int ret;
        while (true) {
            ret = is.read(tmp);
            if (ret <= 0)
                break;
            baos.write(tmp, 0, ret);
        }
        byte[] retBytes = baos.toByteArray();
        baos.close();
        is.close();
        return retBytes;
    }

    public boolean getFileFromNet(String absPath) {
        try {
            this._httpConnect.setRequestMethod("GET");
        } catch (ProtocolException e) {
            e.printStackTrace();
            return false;
        }
        try {
            this._httpConnect.connect();
        } catch (IOException e) {
            return false;
        }
        InputStream inStrm = null;
//		try {
//			inStrm = this._httpConnect.getInputStream();
//		} catch (IOException e) {
//			LOGGER.info("##############HttpUtil getFileFromNet 异常:"+e.getLocalizedMessage());
//			e.printStackTrace();
//			return false;
//		}

        FileOutputStream fileOut;
        try {
            fileOut = new FileOutputStream(absPath);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return false;
        }
        try {
            inStrm = this._httpConnect.getInputStream();
            byte[] tmp = new byte[1024];
            int ret;
            while (true) {
                ret = inStrm.read(tmp);
                if (ret <= 0)
                    break;
                fileOut.write(tmp, 0, ret);
            }
            return true;
        } catch (Exception e) {
            return false;
        } finally {
            try {
                fileOut.close();
                if(inStrm != null){
                    inStrm.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
