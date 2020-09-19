import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHerder from './UserHerder';


const PostList = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  const { posts } = props;

  return <div className="ui relaxed divided list">
    <button onClick={props.fetchPosts}>Refresh</button>
    {posts.map(post => <div className="item" key={post.id}>
      <i className="large middile aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>
            {post.title}
          </h2>
          <p>
            {post.body}
          </p>
        </div>
        <UserHerder userId={post.userId} />
      </div>
    </div>)}
  </div>;
}

const mapStateToProps = state => ({
  posts: state.posts
})
export default connect(mapStateToProps, {
  fetchPosts
})(PostList);
