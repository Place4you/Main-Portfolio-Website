---
banner_alt: How to make a Weather App in python
banner: https://images.unsplash.com/photo-1561553590-267fc716698a?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title: Building a Simple Weather App with Python and the OpenWeatherMap API
description: Learn how to create a basic weather application in Python using the OpenWeatherMap API, guiding you through the process from setting up your development environment to retrieving and displaying weather data for any city
date: '2024-4-8'
---

## Introduction

Weather apps are a popular project for beginners in programming. They provide a practical application of API usage and data parsing. In this tutorial, we'll guide you through building a simple weather app using Python and the OpenWeatherMap API. By the end of this tutorial, you'll have a basic understanding of how to retrieve weather data for any city using an API.

## Prerequisites

Before we begin, ensure you have Python installed on your system. You'll also need a code editor or IDE of your choice. Additionally, sign up for a free account on the OpenWeatherMap website to obtain an API key. To obtain the API key, you need to go to `https://home.openweathermap.org/api_keys` and get a free key.

## Step 1: Set Up Your Development Environment

Open your preferred code editor or IDE. (I prefer [VS CODE](https://code.visualstudio.com/))Create a new Python file and save it with a descriptive name, such as `weather_app.py`.

## Step 2: Import the Necessary Libraries

In your Python file, import the `requests` module. This module will allow us to make HTTP requests to the OpenWeatherMap API.

```python
import requests
```

**If it is not installed, go to the **terminal** and copy and paste the following command**

```python
pip install requests
```

## Step 3: Define Constants

Next, define your API key and the base URL for the OpenWeatherMap API.

```python
API_KEY = "YOUR_API_KEY"
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"
```

Replace `"YOUR_API_KEY"` with your actual API key obtained from the OpenWeatherMap website.

## Step 4: Get User Input

Prompt the user to input the name of the city they want to check the weather for.

```python
city = input("Enter a city name: ")
```

## Step 5: Construct the Request URL

Construct the URL for making a request to the OpenWeatherMap API, including the API key and the city name.

```python
request_url = f"{BASE_URL}?appid={API_KEY}&q={city}"
```

## Step 6: Send the Request and Process the Response

Send a GET request to the API using requests.get(). Check if the request was successful (status code 200), then parse the JSON response and extract relevant weather information.

```python
response = requests.get(request_url)

if response.status_code == 200:
    data = response.json()
    city = data["name"]
    weather = data["weather"][0]["description"].title()
    temp = round((data["main"]["temp"] - 273.15) * 1.8 + 32, 2)
    print("Weather in {} has {} and is {}°F".format(city, weather, temp))
else:
    print("An error occurred.")
```

## Step 7: Run Your Weather App

Save your Python file and run it from your terminal or command prompt. Follow the prompts to input a city name, and the app will display the current weather for that city.

## Conclusion

In this tutorial, we've covered the basics of building a simple weather app using Python and the OpenWeatherMap API. You've learned how to make HTTP requests, process JSON responses, and display weather information to the user. From here, you can expand upon this project by adding more features, such as a graphical user interface or forecast predictions. Happy coding!

## **About Me**

My name is **Faizan** and I am a **programmer** and a **student** based in the US. You can find me on GitHub at [github.com/babsharkdoodoo](https://github.com/babsharkdoodoo).

To learn more about me [Click Me](https://faizanak.vercel.app/blog/about)

**Peace ✌**
