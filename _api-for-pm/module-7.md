---
title: "7. Handling errors"
metaTitle: "API error handling | Status codes"
metaDescription: "Learn API error handling. What does 2xx, 3xx, 4xx and 5xx error code mean?"
---

<div class="card-1-container">
<div class="left-side"> 
<div class="left-info">
  <div class="h3"> <span>Want to be growth & monetisation Product Manager at FAANG?</span> </div>
  <div class="h3-meta">Learn pricing case studies of LinkedIn, Bumble, Tinder, Unacademy & many more</div>
  <div class="h4-meta mt-4"> 👉 Use Promo code - API10 and get 50% off</div>
</div>

</div>
<div class="right-side">
<div class="btn btn-danger">
   <a class="link" href="https://pricingforpm.in?utm_source=apiforpm"> Get free e-book now </a>
</div>    
</div>
</div>

# Error handling

Throughout this course, we've been discussing only requests. What if we made the wrong request?

Open this URL - [https://google.com/checkingerror](https://google.com/checkingerror) in your browser. You must be seeing a message.

When you hit this URL in your browser; you are making a request to the Google server. The Google server has no endpoint named **checkingerror** and hence it returns a 404 error (i.e. resource not found). When we make a wrong request, we will get an error code. 

<img src="assets/404.png" alt="drawing" width="70%"/>

So, by understanding the status code you can immediately tell what’s happened to your request.

**There are four groups of status codes ➖**

Within each group, there are specific numbers too, that give us more details about the responses but really knowing just the four general groups, is usually enough.

 <p>🆗 Status codes in the 200s tell us everything is okay. (i.e. we made the right request & got the correct response)</p>
  
<p>🔁 300 status codes tell us that we've been redirected to the appropriate resource. </p>
  
<p>⛔ 400 status codes tell us that there was a problem on our end. (Something wrong with our request) </p>
  
 <p>🛠️ 500 status codes tell us that there's something wrong on the end of the server. </p>

<img src="/images/api-for-pm/http_sc.png" alt="drawing" width="70%"/>

> You can refer to this website and check the most common status codes -  [https://http.cat/](https://http.cat/)

<div class="card-1-container">
<div class="left-side"> 
<div class="left-info">
  <div class="h3"> <span>Why can't great products like Twitter & Whatsapp monetise?</span> </div>
  <div class="h3-meta">Deep dive into the exciting world of product monetisation</div>
  <div class="h4-meta mt-4"> 👉 Use Promo code - API10 and get 50% off</div>
</div>

</div>
<div class="right-side">
<div class="btn btn-danger">
   <a class="link" href="https://learn.pricingforpm.in/pricing-model/1-fremium-models?utm_source=apiforpm">Read free chapter</a>
</div>    
</div>
</div>
