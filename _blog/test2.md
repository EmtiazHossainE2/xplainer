---
title: 'Types of APIs - REST vs SOAP'
metaTitle: "Design an ATM For Blind "
metaDescription: 'Fear pricing and monetisation strategies in product interviews?'
cover_image: '/images/blog/blog2.png'
author : 'M Sri '
author_image: '/images/blog/news-author-01.jpg'
date: 'February 7, 2023'
---

<NativeAds title="Fear pricing and monetisation strategies in product interviews?" description="Find pricing case studies of 10+ unicorns at one place!" offer="👉 Use Promo code - API10 and get 50% off" />


There is a joke that goes around in the product circle  - If a Product Manager knows APIs, then we know that they understand technology.

In this course, we will learn what an API is? We will also deep dive into:-

1. Why do we even need APIs in the first instance?
2. What exactly do we mean by an API?
3. What is request-response cycle?
4. How to read an API documentation? What are end-points & query parameters?
5. What are the various error codes in API handling?
6. How can we secure APIs? What is Oauth?

And a lot many other things!

---

# 1. Why do we even need APIs in the first instance?

This is gonna be quite interesting.

Suppose you are building an e-commerce app like Amazon. (Oh! common, I mean you can easily build an e-commerce website. There's no rocket science)

So, when your customer selects an item to buy; she is then landed on the checkout page. What's next? You would want to collect payments. Now, building a system to collect payments is indeed a cumbersome task because you need a lot of tech efforts and compliance adherence from the government, RBI, and banks. Which you would obviously not want to do.

Instead, you find that Razorpay can do that on your behalf (that is collecting payments from your customers). You are excited but there are still a couple of problems.

<div class="youtube-embed-desktop">

<iframe width="730" height="400" src="https://www.youtube.com/embed/E4rHeU1vTBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

- Your e-commerce platform is one system and Razorpay is another system. How do you connect two systems so that they can communicate with one another?
- One step further, Razorpay doesn't know how much is the payment amount should they collect? Is it 499 or 999 or something else? They expect you (I mean your e-commerce app to give that detail)
- Also, you would want to know one more thing. Once, Razorpay has tried collecting the payment; was it successful or not? If it was; you can ask your warehouse team to ship it. (Yeahh!)

![am_rzp.png](/assets/api-for-pm/am_rzp.png)
Can you see that how beautifully these two systems are talking with one another? 

But the question is how are they talking to one another? They are talking to one another through a piece of code. 

> **This piece of code through which two systems (applications) talk to one another is called as API. *Exciting, isn't it?***

## 1.1  One more beauty of APIs

*Have you noticed it?*

When both of these systems were talking to one another *(I mean your Ecommerce App & Razorpay)* they only asked each other only relevant information. 

1. Your E-commerce app ➖ Can you collect my payment?
2. Razorpay ➖ Sure! What's the amount I need to collect?
3. Your E-commerce app ➖999. 
4. Razorpay ➖ On it! *(Few sec later)* The payment is done!

You didn't expose your entire system to Razorpay nor did Razorpay expose your entire system to you. You and Razorpay only passed data that were relevant to both of you. 


# 2. What is an API?

---

Officially! API stands for Application Programming Interface. (Reading the definition of API on Wikipedia can give a nightmare.)
![assets/api.png](/assets/api-for-pm/api.png)

But, we have learnt a very simple definition *(in the Amazon - Razorpay)* example. 

>**APIs are a piece of code through which two systems (applications) talk to one another.** 

Let's see one more analogy. Hope this makes API crystal clear.

## 2.1 Dominos analogy


![assets/unit_1_0.png](/assets/api-for-pm/unit_1_0.png)


Let's take a famous example of the `customer-waiter-restaurant` model *(quoted in every reference book)* to understand API in simple terms.

If you go to a restaurant *(as a customer)*, you are not allowed to enter the kitchen. You only need to know what is available and what can you order.  For that, you have the menu card at your table. After looking at the menu, you can make an order to the waiter, who passes it to the kitchen and delivers what you have asked for.

The waiter can only deliver what the kitchen can provide.

So, to sum up, you can think of various analogies:-

- **Kitchen** - the database/server that serves you food
- **Waiter** - a middleman that serves food from the database/server (kitchen) to you *(it’s the API)*
- **You** - an external system that wants the food (data) and made the request to the waiter (API)
- **Menu** - a document that lets you know what can you order, food’s flavour, price, etc! (API Documentation)
- **Order** - a request for the food that you have made
- **Food -** the response that you have got (pizza)

So, yeah! You and the kitchen are two separate systems and both of you are able to communicate through waiter.

> Think waiter. Think API. Both are analogous.

# 3. Request + response cycle

---

We saw a glimpse of request & response in our Dominos analogy.  

![assets/Untitled%201.png](/assets/api-for-pm/1.png)


> The piece of data that you send to the server is called as **Request**.

*Here by you, I mean, your web browser. Btw! You in technical terms is called as client.*

> The piece of data that you get back from the server is called as **Response**.

In the next modules, we will deep dive into what exactly request and response are and how can we make requests from our web browser.

## 3.1 Types of request

You must be wondering what type of things I can ask from the server?

You can make different types of requests to the server➖ give me a piece of data, upload my data to the server, edit my data on the server, delete my data on the server.

*Fun fact! All of these requests are named after a verb.*

The four common types of request are ➖ GET, PUT, POST, DELETE

- GET - You make a GET request to get some piece of data from the server.
- POST - You make a POST request to add a new piece of data to the server
- PUT -  You make a PUT request to edit the existing piece of data on the server
- DELETE - You make a delete request to delete a piece of data on the server

![assets/unit_1_2.png](/assets/api-for-pm/unit_1_2.png)

## 3.2 LinkedIn example

Let's take a few use cases from LinkedIn and understand the analogy *(better)*

- What if you want to search my profile? You will type my name in the search bar & type enter. The moment you press enter; you are making a **GET request** to the server to get details of my profile.
- When you are posting a new post on LI; you are making a **POST request** to add the data to the server.
- When you are making an edit to your existing post & click on save, you are making a **PUT request** to the LinkedIn server to update the existing piece of information.

<h4> Trivia time 💡</h4>

> What if you made a PUT request to add a new piece of data on the server instead of POST? Will the data be added or throw an error?

<div class="card-1-container">
<div class="left-side"> 
<div class="left-info">
  <div class="h3"> <span>5671 Product Managers have already bought this e-book. What's stopping you?</span> </div>
  <div class="h3-meta">Crack product interviews of Stripe, Uber, Amazon, Twitter, MAANG etc. </div>
  <div class="h4-meta mt-4"> 👉 Use Promo code - page1 and get 25% off</div>
</div>

</div>
<div class="right-side">
<div class="btn btn-danger">
   <a class="link" href="https://dipakkr.gumroad.com/l/api-for-pm">Let me buy</a>
</div>    
</div>
</div>



# 4. What is JSON?

---

You might be wondering, from where did JSON come here? We were studying API. Right?

Wait! Let me explain. As I have said earlier, you make a request to the **server to get a piece of data**. Right?

Remember, the data always comes in a specific format. Think of a spreadsheet file. It always comes in .csv or .xls format. Similarly, API responses come in two specific formats ➖ XML and JSON. 

Normally, we get the data in JSON format these days.

Suppose, you have requested to get data of MS Dhoni (name, age, and city) from the Cricbuzz server. The server will give you the data in a specific format as given below. This data format is called as JSON. 

This is an important notation because most modern APIs use it. This pile of indents and brackets serves one purpose — it’s easier for an application to parse a well-structured message than a randomly placed text.

```jsx
{
  "name":"MS Dhoni", 
  "age": 41, 
	"city":"Ranchi"
}
```

But what actually is JSON? 

> JSON stands for JavaScript Object Notation. 

> JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is also easy for machines to parse.

> It is a collection of name/value pairs.

Example :

```jsx

{
  "name": "MS Dhoni",
  "age": 41,
  "city": "Ranchi",
  "formats": [
    "Test",
    "ODI",
    "T-20"
  ],
  "isRetired": "false",
  "records": {
    "T20": {
      "totalRun": 24456,
      "wickets": 5,
      "century": 0
    },
    "Test": {
      "totalRun": 10212,
      "wickets": 2,
      "century": 4
    },
    "ODI": {
      "totalRun": 14000,
      "wickets": 1,
      "century": 14
    }
  }
}
```

- JSON describes the data in key-value pairs. For e.g. - name is key & "MS Dhoni" is value.
- Keys & values are separated by a colon ( : )
- If the value is a string, it is mentioned in double-quotes.
- A JSON value can be an object, array, number, string, true, false, or null, and JSON structure can be nested up to any level.

<div class="card-1-container">
<div class="left-side"> 
<div class="left-info">
  <div class="h3"> <span>This was a free chapter. Liked it? Why don't you buy the e-book then?</span> </div>
  <div class="h3-meta">APIs can 10x your product management career</div>
  <div class="h4-meta mt-4"> 👉 Use Promo code - page1 and get 25% off</div>
</div>

</div>
<div class="right-side">
<div class="btn btn-danger">
   <a class="link" href="https://dipakkr.gumroad.com/l/api-for-pm">Let me buy</a>
</div>    
</div>
</div>