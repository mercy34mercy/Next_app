import { GetServerSideProps } from 'next';
import type { Blog } from '../blog';
import client from '../client';
import '../../styles/[id].module.css'

type Props = {
  article: Blog;
};

export default function Article({ article }: Props) {
  return (

    <div className='contents' style={{ margin:0, textAlign:"center" }}>
      <div
        dangerouslySetInnerHTML={{
          __html: `${article.content}`,
        }}
      />

    </div>

  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blogs',
    contentId: idExceptArray,
  });
  console.log(data)

  return {
    props: {
      article: data,
    },
  };
};