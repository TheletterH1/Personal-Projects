from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from time import sleep
import requests

home_page = "https://www.pickuplimes.com/recipe/?sb=&page="

currentPage = 24
driver = webdriver.Chrome()
j = 277

try:
    while currentPage < 33:
        driver.get(home_page + str(currentPage))
        initialWait = WebDriverWait(driver, 10)
        #Gets element of image that when clicked takes you to a full page of the specific recipe
        
        recipesListLength = len(driver.find_elements(By.CLASS_NAME, "card-img"))
        
        for i in range(recipesListLength):
            file = open('recipe' + str(j) + '.jpg', 'wb')
            currentImage = driver.find_elements(By.CLASS_NAME, "card-img")[i]
            sleep(2)
            imageSrc = currentImage.get_attribute('src')
            imgData = requests.get(imageSrc).content
            
            with open('recipe' + str(j) + '.jpg', 'wb') as f:
                f.write(imgData)
            j += 1
            
            

        #increases page count after each recipe has been recorded
        currentPage += 1
        
    
    
except:
    print("You Suck")
    driver.quit()