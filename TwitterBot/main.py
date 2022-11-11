#Twitter imports
import tweepy

#Raw imports
import os
import requests
import json
from datetime import date
import random

#TO DO
#Add holidays
#Add MSU Events
#Add Hockey
#Find a way to run this once a day

#Weather App API initialization
weatherAPI_key = str(os.environ.get('weatherAPI_key'))
cityName = "East Lansing"
baseURL = "http://api.openweathermap.org/data/2.5/weather?"

#Weather json initialization
fullURL = baseURL + "appid=" + weatherAPI_key + "&q=" + cityName
apiResponse = requests.get(fullURL)
x = apiResponse.json()

#Twitter initialization
consumer_key = str(os.environ.get('consumer_key'))
consumer_secret = str(os.environ.get('consumer_secret'))
access_token = str(os.environ.get('access_token'))
access_token_secret = str(os.environ.get('access_secret'))
auth = tweepy.OAuth1UserHandler(
   consumer_key, consumer_secret, access_token, access_token_secret
)
api = tweepy.API(auth)

today = date.today()
dateFormat = today.strftime("%m-%d-%Y")
global currentTweet
currentTweet = ""
global eventData

f = open('/Users/josephhughes/projects/TwitterBot/EventList.json')
eventData = json.load(f)

#Weather Phrases List
veryHotList = [" Make sure to stay hydrated!", " Don't stay in the heat too long!", " Wear something light!", " Don't forget sunscreen!"]
hotList = [" Drink plenty of water today!", " Have a great day today!", " Wear sunscreen if needed!"]
mildList = [" It's a great day for a walk!", " Make the most of today!"]
coldList = [" Make sure to layer appropriately!", " Don't forget a jacket!"]
veryColdList = [" Don't forget gloves!", " Drink something warm to help fight the cold!", " Make sure to bundle up!"]
averageTempList = [23, 24.8, 34.7, 47.2, 59.1, 68.4, 72.6, 70.9, 64.5, 52, 40.1, 29.1]


def tweetOut():
    global currentTweet
    if(currentTweet != ""):
        if currentTweet.strip():
            api.update_status(status=currentTweet)
        currentTweet = ""

#********WEATHER**********
global currentTempF
currentTempF = -100
global currentHumidityPercent
currentHumidityPercent = -1

def checkAverageTemp(month, temp):
    averageTemp = averageTempList[month - 1]
    difference = averageTemp - temp
    if(difference > 0):
        if(difference > 5):
            return " This is below the average monthly temperature."
        else:
            return " This is slightly below the average monthly temperature."
    else:
        if(difference > -5):
            return " This is above the average monthly temperature."
        else:
            return " This is slightly above the average monthly temperature."

#Very hot = 90+, Hot = 70+, Medium = 50+, Cold 25+, Very cold <25
def getTweetWeather(temp, humidity):
    global dateFormat
    #Make sure values were assigned
    if(temp == -100 or humidity == -1):
        return ""
    tweetText = "It's a "
    if(temp > 90):
        tweetText += "very hot day out at " + str(round(temp)) + "°F."
        tweetText += veryHotList[random.randint(0, 3)]
    elif(temp > 70):
        tweetText += "hot day out at " + str(round(temp)) + "°F."
        tweetText += hotList[random.randint(0, 2)]
    elif(temp > 50):
        tweetText += "mild day out at " + str(round(temp)) + "°F."
        tweetText += mildList[random.randint(0, 1)]
    elif(temp > 25):
        tweetText += "cold day out at " + str(round(temp)) + "°F."
        tweetText += coldList[random.randint(0, 1)]
    else:
        tweetText += "very cold day out at " + str(round(temp)) + "°F."
        tweetText += veryColdList[random.randint(0, 2)]
    month = dateFormat[0:1]
    tweetText += checkAverageTemp(int(month), temp)

    tweetText += " The current humidity is: " + str(humidity) + "%."
    tweetText += " #GoGreen #SpartansWill 💚🤍"
    return tweetText

def kelvinToFahrenheit(temp):
    return ((temp - 273.15) * (9/5) + 32)

def getWeatherValues():
    global currentTempF
    global currentHumidityPercent
    global currentTweet
    if x["cod"] != "404":
        y = x["main"]
        currentTempK = y["temp"]
        currentHumidityPercent = y["humidity"]
        z = x['weather']
        currentTempF = kelvinToFahrenheit(float(currentTempK))
    else:
        currentTweet = ""

def tweetWeather():
    global currentTweet
    currentTweet = getTweetWeather(currentTempF, currentHumidityPercent)
    tweetOut()
#******END WEATHER********

#******EVENTS********

global ageOfStatue 
ageOfStatue = int(dateFormat[6:9]) - 1943

def tweetEvent(i):
    global dateFormat
    global currentTweet
    if(eventData[i]["Date"] == dateFormat):
        if(eventData[i]['EventType'] != "Holiday"):
            currentTweet += "Good luck to the " + eventData[i]['EventType'] + " team against " + eventData[i]['Team'] + " today! #GameDay #GoGreen #SpartansWill 💚🤍"
        else:
            currentTweet += "Happy Whatever " + eventData[i]['Team'] + " Whatever"
        eventData.pop(i)
        tweetOut()
        tweetEvent(i)

#******EVENTS END******

tweetEvent(0)

getWeatherValues()
tweetWeather()