import React from 'react'
import PropTypes from 'prop-types'

import Content from 'components/Content'

const Author = ({ language, fullText }) => {
  return (
    <Content>
      <div itemScope itemType="http://schema.org/Person">
        {language === 'en' ? (
          <>
            <h1>This is a blog for logging common technologies.</h1>

            <p>
              I'm <span itemProp="name">Gus.Park</span>, the normal SW engineer.<br></br>
              Leave a log for problems and questions I've had while working.
            </p>

            {fullText && (
              <>
                <p>Recently, I'm interested in web development.</p>
              </>
            )}
          </>
        ) : (
            <>
              <h1>보통의 기술들에 대한 로그를 남기는 블로그입니다.</h1>
              <p>
                보통의 SW 개발자 <span itemProp="name">Gus.Park</span> 입니다.<br></br>
                업무를 하며 해결한 이슈나 발생한 궁금증에 대해 로그를 남깁니다.<br></br>
              </p>
              
              {fullText && (
                <>
                  <p>요즘 웹개발에 관심이 많습니다.</p>
                </>
              )}
            </>
          )}

        {fullText && (
          <>
            <ul>
              <li>HTML / Javascript / Jquery / CSS</li>
              <li>Vue.js</li>
              <li>Springboot</li>
              {/* <li><a itemProp="owns" href="https://github.com/felipefialho/css-components" target="_blank" rel="noopener noreferrer" title="CSS Components">CSS Components</a></li> */}
            </ul>
          </>
        )}
      </div>
    </Content >
  )
}

Author.propTypes = {
  language: PropTypes.string,
  fullText: PropTypes.bool
}

export default Author
