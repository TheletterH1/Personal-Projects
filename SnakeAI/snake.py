import pygame
import time
import random
import numpy as np
 
snake_speed = 200
frameIteration = 0
directionsArray = ["RIGHT", "DOWN", "LEFT", "UP"] 

# Window size
window_x = 360
window_y = 240
 
# defining colors
black = pygame.Color(0, 0, 0)
white = pygame.Color(255, 255, 255)
red = pygame.Color(255, 0, 0)
green = pygame.Color(0, 255, 0)
blue = pygame.Color(0, 0, 255)
 
# Initialising pygame
pygame.init()
 
# Initialise game window
pygame.display.set_caption('Snake AI')
game_window = pygame.display.set_mode((window_x, window_y))
 
# FPS (frames per second) controller
fps = pygame.time.Clock()
 
# defining snake default position
snake_position = [100, 50]
 
# defining first 4 blocks of snake body
snake_body = [[100, 50],
              [90, 50],
              [80, 50],
              [70, 50]
              ]
# fruit position
fruit_position = [random.randrange(1, (window_x//10)) * 10,
                  random.randrange(1, (window_y//10)) * 10]
 
fruit_spawn = True
 
# setting default snake direction towards
# right
direction = 'RIGHT'
change_to = direction
 
# initial score
score = 0

def spawnFruit():
    global fruit_position
    fruit_position = [random.randrange(1, (window_x//10)) * 10,
                    random.randrange(1, (window_y//10)) * 10]
    if fruit_position in snake_body:
        spawnFruit()


# displaying Score function
def show_score(choice, color, font, size):
   
    # creating font object score_font
    score_font = pygame.font.SysFont(font, size)
     
    # create the display surface object
    # score_surface
    score_surface = score_font.render('Score : ' + str(score), True, color)
     
    # create a rectangular object for the text
    # surface object
    score_rect = score_surface.get_rect()
     
    # displaying text
    game_window.blit(score_surface, score_rect)
 
# game over function
def game_over():
   
    # creating font object my_font
    my_font = pygame.font.SysFont('times new roman', 50)
     
    # creating a text surface on which text
    # will be drawn
    game_over_surface = my_font.render(
        'Your Score is : ' + str(score), True, red)
     
    # create a rectangular object for the text
    # surface object
    game_over_rect = game_over_surface.get_rect()
     
    # setting position of the text
    game_over_rect.midtop = (window_x/2, window_y/4)
     
    # blit will draw the text on screen
    game_window.blit(game_over_surface, game_over_rect)
    pygame.display.flip()
     
    # after 2 seconds we will quit the program
    time.sleep(2)
     
    # deactivating pygame library
    pygame.quit()
     
    # quit the program
    quit()
 
def resetGame():
    global snake_position
    global snake_body
    global fruit_position
    global fruit_spawn
    global change_to
    global score
    global frameIteration

    frameIteration = 0
    # defining snake default position
    snake_position = [100, 50]
    
    # defining first 4 blocks of snake body
    snake_body = [[100, 50],
                [90, 50],
                [80, 50],
                [70, 50]
                ]
    # fruit position
    fruit_position = [random.randrange(1, (window_x//10)) * 10,
                    random.randrange(1, (window_y//10)) * 10]
    
    fruit_spawn = True
    direction = 'RIGHT'
    change_to = direction
    score = 0

def updateScreen():
    game_window.fill(black)
     
    for pos in snake_body:
        pygame.draw.rect(game_window, green,
                         pygame.Rect(pos[0], pos[1], 10, 10))
    pygame.draw.rect(game_window, white, pygame.Rect(
        fruit_position[0], fruit_position[1], 10, 10))
 
    
 
    # displaying score countinuously
    show_score(1, white, 'times new roman', 20)
 
    # Refresh game screen
    pygame.display.update()
 
    # Frame Per Second /Refresh Rate
    fps.tick(snake_speed)

def isGameOver(position):
    # Game Over conditions
    if position[0] < 0 or position[0] > window_x-10:
        return True
    elif position[1] < 0 or position[1] > window_y-10:
        return True
 
    # Touching the snake body
    elif position in snake_body[1:]:
        return True
    
    return False

def grabbedFruit():
    global fruit_position
    global score
    # Snake body growing mechanism
    # if fruits and snakes collide then scores
    # will be incremented by 10
    if snake_position[0] == fruit_position[0] and snake_position[1] == fruit_position[1]:
        score += 1
        spawnFruit()
        return True
    else:
        snake_body.pop()
        return False


def moveSnake(action):
    global direction
    global snake_position
    index = directionsArray.index(direction)
    if np.array_equal(action, [1, 0, 0]):
        newDirection = directionsArray[index]
    elif np.array_equal(action,  [0, 1, 0]):
        newIndex = (index + 1) % 4
        newDirection = directionsArray[newIndex]
    else:
        newIndex = (index - 1) % 4
        newDirection = directionsArray[newIndex]
    
    direction = newDirection 
    if direction == 'UP':
        snake_position[1] -= 10
    elif direction == 'DOWN':
        snake_position[1] += 10
    elif direction == 'LEFT':
        snake_position[0] -= 10
    if direction == 'RIGHT':
        snake_position[0] += 10

def play(action):
    global frameIteration
    frameIteration += 1 
    moveSnake(action)
    snake_body.insert(0, list(snake_position))
    reward = 0
    gameOver = isGameOver(snake_position)
    if gameOver or frameIteration > 100*len(snake_body):
        reward = -10
        return reward, gameOver, score
    if grabbedFruit():
        reward = 10
    updateScreen()
    return reward, gameOver, score


    