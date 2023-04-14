import torch
import random
import numpy as np
from collections import deque 
import snake
from model import LinearQNet, QTrainer
from helper import plot
 
maxMemory = 100000
batchSize = 1000
learningRate = 0.001

class Agent:

    def __init__(self):
        self.numberOfGames = 0
        self.epsilon = 0
        self.gamma = 0.9
        self.memory = deque(maxlen=maxMemory)
        self.model = LinearQNet(11, 256, 3)
        self.trainer = QTrainer(self.model, learningRate, self.gamma)
   
    def getState(self):
        headOfSnake = snake.snake_position
        leftOfSnake = [headOfSnake[0] - 10, headOfSnake[1]]
        rightOfSnake = [headOfSnake[0] + 10, headOfSnake[1]]
        aboveSnake = [headOfSnake[0], headOfSnake[1] - 10]
        belowSnake = [headOfSnake[0], headOfSnake[1] + 10]

        directionIsLeft = (snake.direction == "LEFT")
        directionIsRight = (snake.direction == "RIGHT")
        directionIsUp = (snake.direction == "UP")
        directionIsDown = (snake.direction == "DOWN")

        state = [
            (directionIsLeft and snake.isGameOver(leftOfSnake)) or
            (directionIsRight and snake.isGameOver(rightOfSnake)) or
            (directionIsUp and snake.isGameOver(aboveSnake)) or
            (directionIsDown and snake.isGameOver(belowSnake)),

            (directionIsLeft and snake.isGameOver(aboveSnake)) or
            (directionIsRight and snake.isGameOver(belowSnake)) or
            (directionIsUp and snake.isGameOver(rightOfSnake)) or
            (directionIsDown and snake.isGameOver(leftOfSnake)),

            (directionIsLeft and snake.isGameOver(belowSnake)) or
            (directionIsRight and snake.isGameOver(aboveSnake)) or
            (directionIsUp and snake.isGameOver(leftOfSnake)) or
            (directionIsDown and snake.isGameOver(rightOfSnake)),

            directionIsLeft,
            directionIsRight,
            directionIsUp,
            directionIsDown,

            snake.fruit_position[0] < headOfSnake[0],
            snake.fruit_position[0] > headOfSnake[0],
            snake.fruit_position[1] < headOfSnake[1],
            snake.fruit_position[1] > headOfSnake[1]
        ]
        return np.array(state, dtype=int)
   
    def remember(self, state, action, reward, nextState, gameOver):
        self.memory.append((state, action, reward, nextState, gameOver))
   
    def trainLongMemory(self):
        if len(self.memory) > batchSize:
            mini_sample = random.sample(self.memory, batchSize)
        else:
            mini_sample = self.memory
        
        states, actions, rewards, nextStates, gameOvers = zip(*mini_sample)
        self.trainer.trainStep(states, actions, rewards, nextStates, gameOvers)

    def trainShortMemory(self, state, action, reward, nextState, gameOver):
        self.trainer.trainStep(state, action, reward, nextState, gameOver)

    def getAction(self, state):
        self.epsilon = 120 - self.numberOfGames
        finalMove = [0, 0, 0] 
        if random.randint(0, 200) < self.epsilon:
            move = random.randint(0, 2)
            finalMove[move] = 1
        else:
            state0 = torch.tensor(state, dtype=torch.float)
            prediction = self.model(state0)
            move = torch.argmax(prediction).item() 
            finalMove[move] = 1
        return finalMove
   
def train():
    scoresList = []
    averageScores = []
    totalScore = 0
    highestScore = 0
    agent = Agent()
    while True:
        oldState = agent.getState()

        move = agent.getAction(oldState)

        reward, gameOver, score = snake.play(move)
        newState = agent.getState()

        agent.trainShortMemory(oldState, move, reward, newState, gameOver)

        agent.remember(oldState, move, reward, newState, gameOver)

        if gameOver:
            snake.resetGame()
            agent.numberOfGames += 1
            agent.trainLongMemory()
            if score > highestScore:
                highestScore = score
                agent.model.save()
            
            print("Game", agent.numberOfGames,  "Score", score, "Record", highestScore)

            scoresList.append(score)
            totalScore += score
            meanScore = totalScore / agent.numberOfGames
            averageScores.append(meanScore)
            plot(scoresList, averageScores)


if __name__ == '__main__':
    train() 
    
      
        