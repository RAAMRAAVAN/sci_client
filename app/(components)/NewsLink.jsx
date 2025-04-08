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

export default function NewsLink() {
  const router = useRouter();
  return (
    <div className='news-card' style={{maxWidth: 345}}>
      <Card sx={{ maxWidth: 345 }} onClick={() => router.push('/news')} style={{ backgroundColor: 'rgb(232, 237, 238)' }}>
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
    </div>
  );
}
