# 🌍 Flags and Facts - REST API + Promises

This project is a beautiful and responsive web application built to explore country data using the SampleAPIs "Countries" endpoint. It showcases the power of **JavaScript Promises** and how APIs can be cleanly integrated into the frontend.

---

## 🔗 Live Preview

* 💻 **Solution URL**: [See the code](https://github.com/SanyaShresta25/Flags-and-Facts)
* 🌐 **Live Site URL**: [View it in action](https://flags-and-facts.vercel.app/)

---

## 📌 Project Objective

* Learn and apply **JavaScript Promises**
* Avoid callback hell using `.then()`, `.catch()`, and `.finally()`
* Integrate **APIs** and handle asynchronous data fetches gracefully
* Practice mobile-responsive frontend UI design

---

## 📘 Key Concepts

### 🔄 Why Promises?

* Promises offer a cleaner and more maintainable approach to handling asynchronous operations than nested callbacks (callback hell)
* Easier **error handling** and sequential operation chaining

### 🧠 States of a Promise

* **Pending**: Initial state, before the operation succeeds or fails
* **Fulfilled**: Operation completed successfully
* **Rejected**: Operation failed

### 🔧 Key Promise Methods

* `.then()` – handle fulfilled state
* `.catch()` – handle rejected state (errors)
* `.finally()` – runs regardless of success or failure

### ⛓️ Promise Utilities

* `Promise.all()` – runs multiple promises in parallel and waits for all to finish
* `Promise.race()` – returns the result of the fastest promise (fulfilled or rejected)

---

## 🌐 APIs 101

> APIs (Application Programming Interfaces) allow frontend apps to talk to backend services. REST APIs return structured data, typically JSON, which we fetch using JavaScript.

* Sample API: [https://sampleapis.com/api-list/countries](https://sampleapis.com/api-list/countries)
* Endpoint used: [https://api.sampleapis.com/countries/countries](https://api.sampleapis.com/countries/countries)

---

## 🛠️ Built With

* ✅ HTML5 + CSS3 (Flexbox + Grid)
* ✨ JavaScript (ES6+)
* 🌈 Responsive Design Principles
* 📦 REST API Integration

---

## ✨ Features

* Searchable list of countries
* Each card displays:

  * Country **name**
  * Country **flag**
  * **Capital**, **Population**, and **Region**
* Smooth hover animations
* Fully responsive UI

---

## 🚀 How It Works

1. Fetch data from the `countries/countries` endpoint using `fetch()` and Promises
2. Display a loading spinner while data is being fetched
3. Render cards dynamically on the DOM using `innerHTML`
4. Filter countries based on search input in real time
5. Catch and handle API errors cleanly with `.catch()`

---

## 🧠 What I Learned

* The real-world utility of Promises in managing asynchronous operations
* How to gracefully handle API failures and success states
* DOM manipulation based on dynamic data
* Designing consistent, accessible, and responsive layouts

---

## 👩‍💻 Author

* **Portfolio** – [Sanya Shresta Jathanna](https://sanyashresta.netlify.app/)
* **Frontend Mentor** – [@SanyaShresta25](https://www.frontendmentor.io/profile/SanyaShresta25)
* **Twitter** – [@sanya\_shresta](https://twitter.com/sanya_shresta)

---

## 📚 Reference Challenge

This project is inspired by:

* [Frontend Mentor - REST Countries API](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)

---

*Stay tuned for more enhancements including color theme switching, loading skeletons, and accessibility refinements!*
