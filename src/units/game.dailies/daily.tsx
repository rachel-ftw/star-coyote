/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import colors from "../../utils/colors";

const styles = (checked?: boolean) => ({
  container: css`
    border: 1px solid ${colors.grey};
    margin-bottom: 8px;
    background-color: ${checked ? colors.grey : colors.white};
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
  `,
  button: css`
    background: white;
    cursor: pointer;

    &:disabled {
      background-color: ${colors.grey};
      cursor: default;
      click-events: none;
    }
  `,
});

interface IProps {
  provided: any;
  updateChecked: any;
  name: string;
  checked: boolean;
  index: number;
}

const Daily = (props: IProps) => {
  const { provided, checked, index, name, updateChecked } = props;

  const style = styles(checked);

  return (
    <div
      css={style.container}
      ref={provided.innerRef}
      onClick={updateChecked(index)}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <span>{name}</span>
      <button disabled={checked} css={style.button}>
        edit
      </button>
    </div>
  );
};

export default Daily;
