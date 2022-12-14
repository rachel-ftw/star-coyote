/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/input.text";
import styles from "./styles";

const addButton = { gridArea: "add-button", maxHeight: "45px" };

const AddDaily = ({ addDaily, clearError, error }: any) => {
  const [showForm, setShowForm] = useState<any>(false);

  const toggleForm = () => {
    if (error.length > 0) clearError();
    setShowForm(!showForm);
  };

  const clearForm = () => {
    clearError();
    setShowForm(false);
  };

  const add = (e: any) => {
    e.preventDefault();
    const text = e.target[0].value;

    if (text !== "") clearForm();
    addDaily(text);
  };

  return (
    <div css={styles.addContainer}>
      <h3 css={styles.addTitle}>dailies</h3>
      {<Button style={addButton} text="add" onClick={toggleForm} />}

      {showForm && (
        <form css={styles.addForm} onSubmit={add}>
          <p>create a new daily</p>
          <TextInput error={error} id="add-daily-text" />
          <Button text="add" type="submit" />
          <Button text="cancel" onClick={clearForm} />
        </form>
      )}
    </div>
  );
};

export default AddDaily;
