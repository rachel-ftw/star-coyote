/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Button from "../../components/button";
import {
  isComputer,
  useScreenDimensions,
} from "../../hooks-providers/dimensions-provider";
import { ViewTypes } from "../game";
import Library from "./library";
import Garden from "./garden";
import styles from "./styles";

interface IProps {
  view: ViewTypes;
}

enum GameView {
  Library,
  Garden,
}

const Game = ({ view }: IProps) => {
  const [gameView, setGameView] = useState<GameView>(GameView.Garden);
  const { viewType } = useScreenDimensions();
  const onSmallView = !isComputer(viewType);

  if (view !== ViewTypes.Garden && onSmallView) return null;

  const setView = (view: GameView) => () => setGameView(view);

  return (
    <div css={styles.container(onSmallView)}>
      <nav>
        <Button text="🍄 garden" onClick={setView(GameView.Garden)} />
        <Button text="📚 library" onClick={setView(GameView.Library)} />
      </nav>
      {gameView === GameView.Garden ? <Garden /> : <Library />}
    </div>
  );
};

export default Game;
