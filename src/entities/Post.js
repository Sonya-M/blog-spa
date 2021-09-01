import { toProperCase } from "../shared/utils";
class Post {
  constructor(authorId, title, body, id) {
    this._authorId = authorId;
    this._title = title;
    this._body = body;
    this._id = id;
  }

  get authorId() { return this._authorId; }

  get id() { return this._id; }

  get title() { return toProperCase(this._title); }

  get body() { return this._body; }
}

export default Post;