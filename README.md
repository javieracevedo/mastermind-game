# Mastermind Game (vuejs)

This is my implementation of the mastermind game in vuejs. The game is based around the module in **src/core/mastermind.js** almost all important logic is in there, expect the state management of the game, I'm hadling that with vuex. The UI it's actually simple, but I think it's enough to make the game playable for this interview test (can't take forever to actually hand it in).

## Project Structure

This is the structure that I chose:

```
/src
  /components
    /shared   # components used by many views.
      ...
  /core       # core functionality for the game
    ...
  /store      # stage management
    ...
  /views
    /controlPanel  # left side of the game, contains everything that the player can interact with.
      ..
    /feedbackPanel # right side of the game ,contains feedback for the player's code guess.
      ..
    /overviewPanel # center of the game ui, contains the history of player codes and current code.
      ..
/tests/unit
  ... 
```

## Project setup

Vuejs version `2.6.11` and @vue/cli version `4.4.1`

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


### To run tests

*Note: I'm only testing the core functionality of the game, I didn't test the UI components.*

```
npm run test:unit
```


This should be enough to setup the project and run it and see it working.
