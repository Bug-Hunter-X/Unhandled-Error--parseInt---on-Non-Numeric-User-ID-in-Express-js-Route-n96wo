# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling when dealing with user inputs. Specifically, this example shows a scenario where a route attempts to parse a user ID as an integer without validating if the input is actually a number. This can lead to unexpected behavior and potential errors.

## Bug

The `bug.js` file contains the problematic code.  The route `/users/:id` attempts to find a user based on the `id` parameter.  However, it does not handle the case where `req.params.id` is not a valid integer. This can cause `parseInt(userId)` to return `NaN`, leading to a failure to find the user and potentially other errors. 

## Solution

The `bugSolution.js` file provides a corrected version with robust error handling.  It adds validation to ensure that `req.params.id` is a valid integer before attempting to parse it and uses try catch block to handle the parsing error.