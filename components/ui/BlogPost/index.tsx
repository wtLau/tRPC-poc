import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import { Link } from '@components/ui'
// import format from 'comma-number'

const PREFIX = 'BlogPost'

const classes = {
  mainGrid: `${PREFIX}-mainGrid`,
}

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.mainGrid}`]: {
    marginTop: theme.spacing(6),
  },
}))

interface IPost {
  title: string
  summary: string
  slug: string
}

const BlogPost = ({ title, summary, slug }: IPost) => {
  // const { data } = useSWR(
  //   `/api/views/${slug}`,
  //   fetcher
  // )
  // const views = data?.total

  return (
    <Root className={classes.mainGrid}>
      <Link href={`/blog/${slug}`}>
        <div>
          <Typography variant='h5' component={'h4'} gutterBottom>
            {title}
          </Typography>

          <Typography variant='body1' color='textSecondary' paragraph>
            {summary}
          </Typography>
        </div>
      </Link>
    </Root>
  )
}

export default BlogPost
