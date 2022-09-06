/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Button from "./button";
import formatUnits from "../utils/format-units";
import { css } from "@emotion/react";
import { textInputInvalid } from "../utils/text-input-invalid";

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Page = ({ title, info, children }: any) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const units = 20000;
  const infoPresent = !textInputInvalid(info);

  return (
    <>
      <div css={styles}>
        <h2>{title}</h2>
        {infoPresent && (
          <Button text="info" onClick={() => setShowInfo(!showInfo)} />
        )}
        <p>available units: {formatUnits(units)}</p>
      </div>
      {showInfo && infoPresent && <p>{info}</p>}
      {children}
    </>
  );
};

export default Page;