// https://reactrouter.com/web/api/Hooks
import { useHistory } from "react-router-dom";

import { Button } from "react-bootstrap";

export default function RedirectButton({ text, path }) {
  let history = useHistory();
  const handleClick = () => {
    history.push(path);
  };

  return (
    <Button className="btn-dark m-2" onClick={handleClick}>
      {text}
    </Button>
  );
}
