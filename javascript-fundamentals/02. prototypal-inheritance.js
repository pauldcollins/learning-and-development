function Post(title, content) {
  this.title = title;
  this.content = content;
  this.status = "draft";
}

// Pseudo static property and method
Post.published = 0;
Post.getPublishedCount = function() {
  return Post.published;
};

Post.prototype.publish = function() {
  this.status = "published";
  Post.published += 1;
};


var post = new Post();
// 1. Lookup Post prototype =. { Published: 0, getPublishedCount };
// 2. Create a new object and assign the Post prototype, as its prototype
//   - var post = {}; // That is EXACTLY the same as the Post prototype
// 3. Now execute the constructor with the context, being our new object
//  - Post.call(post, title, content);
var otherPost = new Post();
//  - Post.call(otherPost, title, content);

// Next up...
 // - Call
 // - Apply
 // - Bind


// Prototypical inheritance (extending Post to create a new type, `ImagePost`)
//
// 1. Take the prototype of what we're extending, and add to it.

function ImagePost(title, content, image) {
  Post.apply(this, title, content); // Super.constructor call

  this.image = image;
}

// 2. Take a copy of the prototype
ImagePost.prototype = Post.prototype;


// 3. Map the new constructor


// 4. Override methods
ImagePost.prototype.publish = function() {
  Post.prototype.publishcall(this);
  this.status = "image published";
};


// Better ways with oldschool JS
// - Fiber.js (LinkedIn)
// - John Resig's Class.js
// Object.create

// ES2015 (ES6)

class NewPost {
  constructor (title, content ) {
    this.title = title;
    this.content = content;
    this.published = false;
  }

  publish () {
    this.published = true;
  }
}

class ImagePost extends NewPost {
  constructor: (title, content, image) {
    this.image = image;
    super.constructor(title, content)
  }
}

NewPost.prototype.publish = function() {};


var newPost = new NewPost('Hi', 'content')


var PostFactory = {
  create: function(title, content) {
    // You've got a prototype for a post
    var post = Object.create(Post prototype);
    post.title = title;
    post.contnet = content;
    return post;
  }
};

var myPost = PostFactory.create('My Title', 'My Title');


