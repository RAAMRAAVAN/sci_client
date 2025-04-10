'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { East } from '@mui/icons-material';
import { CardActions } from '@mui/material';
import { Font } from './Global';
import { selectNewses} from "@/redux/features/newsSlice";
import { useSelector } from 'react-redux';
import { Box, Grid } from "@mui/material";
import NewsCard from './NewsCard';

export default function NewsLink() {
  const router = useRouter();
  const news = useSelector(selectNewses);

  return (

    <Grid container spacing={5} justifyContent="start" display='flex' sx={{ width: { md: '75%', sm: '100%' } }}>
      <Grid key={1} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
        <Card onClick={() => router.push('/news')} style={{ backgroundColor: 'rgb(232, 237, 238)' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`News/news.jpg`}
              alt="green iguana"
            />
            <CardContent>
              <Typography  gutterBottom variant="h5" component="div">
                News & Events
              </Typography>
              <Typography  variant="body2" sx={{ color: 'text.secondary' }}>
                Find the latest news about our work and achievements

              </Typography>
            </CardContent>
            <CardActions sx={{ paddingY: 1, marginBottom: 2 }}>
              <div className="news-arrow">
                <East fontSize="large" />
              </div>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>

      {news.slice(0, 2).map((entry, index) => (



<Grid key={index} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
<Card onClick={() => router.push('/news')} style={{ backgroundColor: 'rgb(232, 237, 238)' }}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="120"
      image={`/News/${entry.id}/1.jpg`} 
      alt="green iguana"
    />
    <CardContent>
      <Typography  gutterBottom variant="h5" component="div">
        
      </Typography>
      <Typography  variant="body2" sx={{ color: 'text.secondary' }}>
        {entry.content_heading}
      </Typography>
    </CardContent>
    <CardActions sx={{ paddingY: 1, marginBottom: 2 }}>
      <div className="news-arrow">
        <East fontSize="large" />
      </div>
    </CardActions>
  </CardActionArea>
</Card>
</Grid>



                    // <Grid key={entry.id} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                    //     <NewsCard
                    //         id={entry.id}
                    //         title={entry.content_heading}
                    //         text={entry.content}
                    //         // image={`/${HoName}News/${entry.path || "news1.jpeg"}`}
                    //         image={`/News/${entry.id}/1.jpg`} 
                    //         date={entry.news_event_date}
                    //     />
                    // </Grid>
                ))}

    </Grid>

  );
}
