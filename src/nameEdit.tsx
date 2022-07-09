import * as React from "react";

interface Props {
  initialUserName: string;
  onNameUpdated: (e: string) => void;
}

export const NameEditComponent: React.FC<Props> = (props: Props) => {
  const [editingName, setEditingName] = React.useState(props.initialUserName);

  const setUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(e.target.value);
  };

  const userNameUpdated = (e: any): any => {
    props.onNameUpdated(editingName);
  };

  return (
    <>
      <label htmlFor="username">Update name:</label>
      <input type="text" value={editingName} onChange={setUserNameChange} />
      <button onClick={userNameUpdated}>Change</button>
    </>
  );
};
