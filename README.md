# SofaScore API

Simple live scores to deep statistics and detailed player analysis. We cover 20+ sports, more than 5000 leagues, tournaments and special events.

SPORTS: Football (Soccer),Tennis, Basketball, Ice Hockey, Handball, Volleyball, Table Tennis, Baseball, American Football, MMA, Motorsport, Cricket, Rugby, Darts, Snooker, Futsal, Badminton, Aussie Rules, Beach Volleyball, Waterpolo, Cycling, Floorball, Bandy, Esports.

We use the best sources for statistics and calculate precise player ratings. Heatmaps visually represent player effort on the field. Find all transfers, player strengths and weaknesses. Ratings and video of matches.

You get data similar to: (Opta sports) statsperform.com , sofascore.com, aiscore.com


⚡ [Connect SofaScore API ](https://rapidapi.com/tipsters/api/os-sports-perform)

🔗 [Docs SofaScore API ](https://rapidapi.com/tipsters/api/os-sports-perform/tutorials)

---


**This api is free?**
Yes. But there are limits on requests per month.



---

#### 1. Getting a list of sports

Use **@Sport list** or **@Number live events** endpoints

#### 2. Getting a list of categories

Use **@Category list** endpoint

#### 3. Getting a list of tournaments

Use **@Unique tournaments** list or **@Tournaments list** endpoints


#### 4. Getting a list of events

Use **@Schedule by date** list or **@Schedule by category** endpoints
 
 
#### 5. Get all the data for each event

Use the ID from the event list to get detailed data.

Use endpoints:
* Team shirts
* Statistics (esports)
* Odds winning
* H2H stats
* Point by point
* Lineups (esports)
* Event data
* Incidents
* Graph points
* Media
* Predict
* Streaks
* Heatmap
* Sub events
* Bans (esports)
* Newly added events
* Popular events
* H2H events
* Games (esports)
* Best players
* Lineups
* Rounds (esports)
* Innings (cricket)
* Odds all
* Tweets
* Player statistics
* Player heatmap
* Schedule by date
* Form
* Statistics
* Fan rating

#### 6. Getting tournament tables and cup trees.

Use **@Cup trees** list and **@Standings** endpoints in the **seasons** section
 
**Try the remaining endpoints to build your cool app!**

You can contact me tipsters@rapi.one or t.me/api_tipsters


---
#### FAQ

##### How to get the current match time in soccer?

You have a field "time" -&gt; "currentPeriodStartTimestamp"
```
      "time": {
        "initial": 2700,
        "max": 5400,
        "extra": 540,
        "currentPeriodStartTimestamp": 1701068460
      },
    OR
    "statusTime": {
        "prefix": "",
        "initial": 2700,
        "max": 5400,
        "timestamp": 1701068460,
        "extra": 540
      },
```
`initial` - duration of the half.
`max` - duration of the match.
`currentPeriodStartTimestamp` OR `timestamp` - start time of a soccer half
You can subtract the start time of a soccer half from the current timestamp to get the current time of the half.
