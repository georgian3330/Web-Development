# API Documentation

## Structuring API Request

### API Request
<!-- API Endpoints for API Request-->
> BaseURL/Endpoint

    https://bored-api.appbrewery.com/some-endpoint


### Query Parameters
<!-- Query Parameters -->
> BaseURL/Endpoint?query=value

<!-- Multiple Query Parameters -->
* AppBrewery Bored API Document [API Link](https://bored-api.appbrewery.com/) 👈
> BaseURL/Endpoint?query1=value1&query2=value2

    https://bored-api.appbrewery.com/filter?type=education

<!-- Path Parameters -->
### Path Parameters
> BaseURL/endpoint/{path-parameter}

* `endpoint` - Fixed Parameter 
* `path-parameter` - Dynamic Parameter (username, id)

    https://bored-api.appbrewery.com/activity/3943506

### API Authentication

1. No Authentication
2. Basic Authentication
3. API Key Authorization
4. Token Based Authentication


## Making your own API
* Rapid API 👉 [API For Developers](https://rapidapi.com/hub)

### What makes an API RESTful?

1. HTTP Method
    1. GET
    2. POST
    3. PUT
    4. PATCH
    5. DELETE
2. JSON Format Output
3. Client-Server are completely separate
4. Stateless
5. Resource-Based