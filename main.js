'use strict';
import PopUp from './src/popup.js';
import GameBuilder, { Reason } from './src/game.js';

// const CARROT_COUNT = 20;
// const BUG_COUNT = 20;
// const GAME_DURATION_SEC = 20;

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .gameDuration(5)
  .carrotCount(3)
  .bugCount(3)
  .build();

game.setGameStopListener((reason) => {
  console.log(reason);
  let message;

  switch (reason) {
    case Reason.cancel:
      message = 'REPLAY ?';
      break;
    case Reason.win:
      message = 'YOU WON !';
      break;
    case Reason.lose:
      message = 'YOU Lost';
      break;

    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
