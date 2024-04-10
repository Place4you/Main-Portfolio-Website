---
banner_alt: Building a Currency Converter with Python - A Step-by-Step Guide
banner: https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title: Building a Currency Converter with Python - A Step-by-Step Guide
description: Learn to build a currency converter in Python using the Frankfurt Exchange Rates API step-by-step, empowering you to convert currencies with ease.
date: '2024-4-10'
---

In this tutorial, we'll walk through the process of creating a currency converter using Python and the Frankfurt Exchange Rates API. Let's break down each step of the code to understand how it works.

### Step 1: Importing Libraries

```python
import requests
```

We start by importing the `requests` library, which will enable us to make HTTP requests to the Frankfurt Exchange Rates API.

## Step 2: Defining the Main Function

```python
def main():
```

Here, we define the `main()` function, which will handle the currency conversion process.

## Step 3: User Input

```python
from_currency = str(input("What currency do you want to convert from?: ")).upper()
to_currency = str(input("What currency do you want to convert to?: ")).upper()
amount = float(input("What is the amount of money you want to convert?: "))
```

In this step, we prompt the user to input the source currency, target currency, and the amount of money to be converted. We convert the inputs to uppercase using the `upper()` method to ensure consistency in currency codes.

## Step 4: Making API Request

```python
response = requests.get(
    f"https://api.frankfurter.app/latest?amount={amount}&from={from_currency}&to={to_currency}"
)
```

Here, we construct the URL for the API request using formatted string literals (f-strings) and send a GET request to the Frankfurt Exchange Rates API. We include query parameters such as amount, from, and to to specify the conversion details.

## Step 5: Handling API Response

```python
if response.status_code == 200:
    result = f"{amount} {from_currency} is {response.json()['rates'][to_currency]}"
    time = f"{response.json()['date']}"
    print("{} {} ({})".format(result, to_currency, time))
else:
    print("An error occurred")
```

In this step, we check the status code of the API response. If it's 200 (indicating success), we extract the conversion result and timestamp from the JSON response using the `response.json()` method. We then print the converted amount, target currency, and the conversion timestamp. If the status code is not 200, we print an error message.

## Step 6: Prompting User to Repeat Conversion

```python
answer = str(input("Do you want to convert again (true or false)?: ").upper())
if answer == "TRUE":
    return True
else:
    return False
```

Here, we prompt the user if they want to perform another conversion. We convert the input to uppercase for consistency. If the user wants to convert again (answer is "TRUE"), we return `True` to indicate that the conversion process should continue; otherwise, we return `False` to exit the program.

## Step 7: Running the Currency Converter

```python
repeat = True
while repeat:
    repeat = main()
```

In this step, we set the initial value of `repeat` to `True`. Then, we enter a `while` loop that continues as long as `repeat` is `True`. Inside the loop, we call the `main()` function repeatedly to perform currency conversions. The loop exits when the user chooses not to convert again.

By following these steps, we've built a simple yet functional currency converter in Python. Happy coding!

## About Me

I'm Faizan, a student living in the US. When I'm not hitting the books or brainstorming about resilience, you can probably find me hanging out with friends, exploring new places, or binge-watching my favorite shows on Netflix. Life's a wild ride, but hey, I'm here for it!

To learn more about me [Click Me](https://faizanak.vercel.app/blog/about)

**Peace ✌**
