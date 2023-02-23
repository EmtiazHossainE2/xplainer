---
title: 'Api For pm'
metaTitle: "API for pm "
metaDescription: 'Fear pricing and monetisation strategies in product interviews?  '
cover_image: '/images/blog/blog3.png'
author : 'M Shahara'
author_image: '/images/blog/news-author-03.jpg'
date: 'February 1, 2023'
---

<div class="card-1-container">
<div class="left-side"> 
<div class="left-info">
  <div class="h3"> <span>Fear pricing and monetisation strategies in product interviews? </span> </div>
  <div class="h3-meta mt-3">Find pricing case studies of 10+ unicorns at one place!</div>
  <div class="h4-meta mt-4"> 👉 Use Promo code - API10 and get 50% off</div>
</div>

</div>
<div class="right-side">
<div class="btn btn-danger mt-4 mb-4">
   <a class="link" href="https://learn.pricingforpm.in/pricing-model/1-fremium-models?utm_source=apiforpm">Read free chapter</a>
</div>    
</div>
</div>

# 1. ** Web-hooks and girlfriend analogy **
<div class='mb-4'></div>

---


Have you ever dropped off your girlfriend in the cab and told her - Do call me once you reach your home? I know you must have as else your girlfriend would have abandoned you. 😛

What if you called your girlfriend every few minutes and asked - *Hey baby! Where are you?* She would definitely get pissed off with you and so you have aptly done the right thing by saying - Do call me once you reach your home!

Your girlfriend would call you when the event is complete i.e. she has reached her home. That’s what webhooks are. You don’t need to remember the definition by now but I am stating it here for further reference.


> 💡 Webhooks are events that get triggered when an event is successful i.e. your girlfriend calling you when she reaches her home is analogous to webhooks.


Razorpay would send the POST request (with JSON payload) - think payload as relevant data that you would need that contains the payment status in JSON alongside a signature like YUHG76BV765GFRT6832ER embedded in the header. 

```jsx
"payload": {
    "payment": {
      "entity": {
        "id": "pay_DESlfW9H8K9uqM",
        "entity": "payment",
        "amount": 100,
        "currency": "INR",
        "status": "captured",
```

> 💡 Note - In hashing, we haven’t encrypted the message (payload). Razorpay has sent a signature with the payload (i.e. message) which is public. You match the signature and verify whether the message (i.e. payload) is coming from Razorpay or not.

<div class="card-1-container">
<div class="right-side">
<div class="btn btn-danger mt-4">
   <a class="link" href="https://learn.pricingforpm.in/pricing-model/1-fremium-models?utm_source=apiforpm">Read free chapter</a>
</div>    
</div>
</div>

