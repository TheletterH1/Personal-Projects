from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from time import sleep


home_page = "https://www.pickuplimes.com/recipe/?sb=&page="

driver = webdriver.Chrome()

currentPage = 1
outputFile = open("recipeoutput.txt", 'a')

try:
    while currentPage < 33:
        driver.get(home_page + str(currentPage))
        initialWait = WebDriverWait(driver, 10)
        #Gets element of image that when clicked takes you to a full page of the specific recipe
        
        recipesListLength = len(driver.find_elements(By.CLASS_NAME, "card-img"))
        
        for i in range(recipesListLength):
            currentRecipe = driver.find_elements(By.CLASS_NAME, "card-img")[i]
            sleep(2)
            currentRecipe.click()

            #Sets a variable recipe url to the current url
            recipeurl = str(driver.current_url)
            sleep(2)
            #Makes recipe url variable ***/print, which redirects to a page with better text formatting
            printurl = recipeurl + "/print"
            sleep(2)
            #sets the url as the print url
            driver.get(printurl) 
            sleep(10)

            #Gets the title of the dish
            recipeTitle = driver.find_element(By.TAG_NAME, "header").text
            print(recipeTitle)
            sleep(2)
            #Gets raw text of the directions/ingredients
            ingredientsText = driver.find_element(By.XPATH, "/html/body/article/div/div[2]/div[2]/div").text
            sleep(2)
            #Gets serving size that the recipe makes
            servingCount = "Servings: " + driver.find_element(By.ID, "servings-amount").text
            sleep(2)
            outputFile.write(recipeTitle)
            outputFile.write("\n")
            outputFile.write(servingCount)
            outputFile.write("\n")
            outputFile.write(ingredientsText)
            outputFile.write("\n \n")

            #returns to the homepage + page number
            driver.get(home_page + str(currentPage))

            #Ensures new driver page loads before executing again
            resetWait = WebDriverWait(driver, 20)

        #increases page count after each recipe has been recorded
        currentPage += 1
        
    outputFile.close()
    
except:
    print("You Suck")
    driver.quit()


# driver.quit()
