import React, { Component } from 'react';

import styled from 'styled-components';

import api from '../services/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const CommentsSection = styled.section`
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

const CommentArticle = styled.article`
  background: #fff;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;

  .commentsFooter {
    font-size: 24px;
    color: #47525e;
    padding: 14px;
  }

  .commentEmail {
    font-size: 20px;
    color: #47525e;
    padding: 10px;
  }

  .commentName {
    font-size: 16px;
    color: #47525e;
    padding: 10px;
  }
  .commentBody {
    font-size: 14px;
    color: #8190a5;
    padding: 10px;
  }
`;

export default class Post extends Component {
  state = {
    titlePost: '',
    bodyPost: '',
    comments: [],
  };

  async componentDidMount() {
    const idPost = localStorage.getItem('idPostSelected');
    const titlePost = localStorage.getItem('titlePostSelected');
    const bodyPost = localStorage.getItem('bodyPostSelected');

    const response = await api.get(`posts/${idPost}/comments`);

    this.setState({
      comments: response.data,
      titlePost,
      bodyPost,
    });
  }

  render() {
    const { comments, titlePost, bodyPost } = this.state;

    return (
      <Container>
        <CommentsSection>
          <Article>
            <PostHeader>
              <h1 className="postTitle">{titlePost}</h1>
            </PostHeader>
            <PostContent>
              <p className="postText">{bodyPost}</p>
            </PostContent>
          </Article>
          <CommentArticle>
            <h1 className="commentsFooter">Comentários:</h1>
          </CommentArticle>
          {comments.map(comment => (
            <CommentArticle>
              <strong className="commentEmail">{`${comment.email} diz: `}</strong>
              <p className="commentName">{comment.name}</p>
              <p className="commentBody">{comment.body}</p>
            </CommentArticle>
          ))}
        </CommentsSection>
      </Container>
    );
  }
}
