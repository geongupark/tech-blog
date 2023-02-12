import React from 'react'
import ReactGA from 'react-ga'
import { useStaticQuery, graphql } from 'gatsby'

import Button from 'components/Button'
import BlogItem from 'components/BlogItem'

import * as S from './styled'

const trackClickAllPosts = () => {
  ReactGA.event({
    category: 'Blog',
    action: 'click',
    label: `Blog - Click to view all posts`
  })
}

const blogListQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "ko-KR", formatString: "DD[/]MM[/]YYYY")
            description
            title
            tags
          },
          timeToRead
        }
      }
    }
  }
`

const BlogList = ({language}) => {
  const allBlogList = useStaticQuery(blogListQuery)
  const list = allBlogList.allMarkdownRemark.edges

  return (
    <S.BlogList>
      <S.Title>
        {language === 'en' ? (
          <>
            The latest blog posts
          </>
        ) : (
          <>
            최신 블로그 글
          </>
        )}
      </S.Title>
      <S.Nav>
        {list.map(({ node }, i) => (
          <BlogItem
            key={i}
            slug={node.fields.slug}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            tags={node.frontmatter.tags}
            timeToRead={node.timeToRead}
          />
        ))}
      </S.Nav>
      <div style={{ textAlign: 'center' }}>
        <Button to='/blog/' onClick={() => trackClickAllPosts()}>
          {language === 'en' ? (
            <>
              View All Posts
            </>
          ) : (
            <>
              모든 포스트 보기
            </>
          )}
        </Button>
      </div >
    </S.BlogList >
  )
}

export default BlogList
