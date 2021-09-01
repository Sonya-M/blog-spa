import { Link } from "react-router-dom";

export default function PostDiv(props) {
  return (
    <div className="PostDiv text-center">
      <h1 className="display-6">
        {props.selectedPost.title}
      </h1>
      <Link to={"/authors/" + props.author.id}>
        <h6 >{props.author.name}</h6 >
      </Link>
      <div>{props.selectedPost.body}</div>
    </div>
  );
}

