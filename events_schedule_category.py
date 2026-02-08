# sofascore-api

import requests

url = "https://os-sports-perform.p.rapidapi.com/v1/events/schedule/category"

querystring = {"category_id":"26","date":"2022-05-11"}

headers = {"x-rapidapi-host": "os-sports-perform.p.rapidapi.com"}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
