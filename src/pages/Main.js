import React, { Component } from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';
import comments from '../assets/comments.png';

import api from '../services/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const PostList = styled.section`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 30px;
`;

const Article = styled.article`
  background: #fff;
  margin-top: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
`;

const PostHeader = styled.header`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  .postTitle {
    font-size: 24px;
    color: #47525e;
    text-transform: capitalize;
  }
`;

const PostContent = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  .postText {
    font-size: 18px;
    color: #8190a5;
  }
`;

const PostFooter = styled.footer`
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .postAuthor {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .postDate {
    margin: 0 10px;
    font-size: 18px;
    color: #47525e;
  }

  .authorName {
    margin: 10px;
    font-size: 18px;
    color: #47525e;
    font-weight: bold;
  }

  .comments {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .imgComments {
    height: 32px;
    margin: 0 10px;
  }

  .viewComments {
    font-size: 18px;
    color: #47525e;
    font-weight: bold;
  }

  .link {
    text-decoration: none;
  }
`;

export default class Main extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const response = await api.get('posts');

    this.setState({ posts: response.data });
  }

  showComments = (Post) => {
    // alert(idPost);
    localStorage.setItem('idPostSelected', Post.id);
    localStorage.setItem('titlePostSelected', Post.title);
    localStorage.setItem('bodyPostSelected', Post.body);
  };

  render() {
    const { posts } = this.state;
    return (
      <Container>
        <PostList>
          {posts.map(post => (
            <Article key={post.id}>
              <PostHeader>
                <h1 className="postTitle">{post.title}</h1>
              </PostHeader>
              <PostContent>
                <p className="postText">{post.body}</p>
              </PostContent>
              <PostFooter>
                <div className="postAuthor">
                  <p className="postDate">26/06/2019</p>
                </div>
                <Link className="link" to="/comments">
                  <div
                    className="comments"
                    onClick={() => {
                      this.showComments(post);
                    }}
                  >
                    <img className="imgComments" src={comments} alt="Visualizar comentários" />
                    <span className="viewComments">Visualizar comentários</span>
                  </div>
                </Link>
              </PostFooter>
            </Article>
          ))}
        </PostList>
      </Container>
    );
  }
}
