"use client";

import TitleHeading from "@/components/title-heading";
import { CodeContainer } from "../(component)/code-con";

const SampleCodePage = () => {
  return (
    <div>
      <div>
        <TitleHeading
          description=""
          title="Send SMS Sample Code"
          align="start"
        />
        <h1 className="mt-5">
          The ‘’Balance’’ endpoint provides functionality for retrieving the
          current balance associated with your account. To utilize this
          endpoint, you’ll nee to mae an HTTP request to the appropriate URL
          with
        </h1>
      </div>
      <div className="mt-7">
        <p className="text-sm">Sample code using Send SMS API.</p>
        <div className="mt-5">
          <h1 className="font-semibold text-sm">Sample PHP Code</h1>
          <div className="mt-5">
            <CodeContainer
              language="php"
              codeString={`<?php
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://smsapi-sur2.onrender.com/api/sms/send',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => '{
        "sender": "Smarthive",
        "recipients": "09012345678",
        "msg": "This is my message",
        "type": 1,
        "route": "OPEN"
    }',
    CURLOPT_HTTPHEADER => array(
        'x-api-key: 88e9be59-6f47-4d81-89b4',
        'Content-Type: application/json'
    ),
));
$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>`}
            />
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-semibold text-sm">Sample Go Code</h1>
          <div className="mt-5">
            <CodeContainer
              language="go"
              codeString={`package main

import (
    "fmt"
    "strings"
    "net/http"
    "io/ioutil"
)

func main() {
    url := "https://sms.smarthivetechsolution.com/api/sms/send"
    method := "POST"

    payload := strings.NewReader(\`{
        "sender": "Smarthive",
        "recipients": "09012345678",
        "msg": "Testing SMS",
        "type": 1,
        "route": "COOP"
    }\`)

    client := &http.Client{}
    req, err := http.NewRequest(method, url, payload)

    if err != nil {
        fmt.Println(err)
        return
    }

    req.Header.Add("x-api-key", "88e9be59-6f47-4d81-89b4")
    req.Header.Add("Content-Type", "application/json")

    res, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer res.Body.Close()

    body, err := ioutil.ReadAll(res.Body)
    if err != nil {
        fmt.Println(err)
        return
    }

    fmt.Println(string(body))
}
`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleCodePage;
