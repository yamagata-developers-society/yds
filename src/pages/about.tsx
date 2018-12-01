import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from 'react-emotion';
import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.SFC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper className={`${PageTemplate}`}>
      <header className={`${SiteHeader} ${outer}`}>
        <div className={`${inner}`}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
        <article className={`${PostFull} post page ${NoImage}`}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Yamagata Developer Society is a community for professionals and students alike. We
                hold monthly developer meetups at{' '}
                <a href="https://www.coworking-too.com/">coworking space too</a> in downtown
                Yamagata.
              </p>
              <blockquote>
                <p>
                  If you'd like to join one of our montly meetups, head over to coworking space's{' '}
                  <a href="https://www.facebook.com/pg/as.works.2015/events/">Events Page</a> and
                  learn about our upcomming events!
                </p>
              </blockquote>
              <p>
                If you're a developer: check us out{' '}
                <a href="https://github.com/yamagata-developers-society">on Github</a>. New projects
                welcome!
              </p>
              <p>
                If you are looking for some other way to connect with us, you can find us on{' '}
                <a href="https://twitter.com/yamagataDevSoc">Twitter</a>.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;