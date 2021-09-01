import Post from "../entities/Post";
import Author from "../entities/Author";

class Mapper {

  /** 
   * Creates and returns a Post instance from raw data in given object literal 
   * @returns {Post}
  */
  static mapJsonToPost(post) {
    return new Post(post.userId, post.title, post.body, post.id);
  }

  /** 
   * Creates and returns an Author instance from raw data in given object literal 
   * @returns {Author}
   * */
  static mapJsonToAuthor(user) {
    // console.log(user)
    return new Author(user.id, user.name, user.username, user.email,
      user.phone, user.address.street, user.address.city, user.address.zipcode, user.address.geo.lat, user.address.geo.lng,
      user.company.name, user.company.catchPhrase);
  }

}

export default Mapper;