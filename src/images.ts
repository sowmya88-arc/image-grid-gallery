import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
}

export const images= [
  {
    type: 'image',src: require('./pics/img-1.jpeg'), width: 320, height: 174
  
  }, 
  {
    type: 'image',src:require('./pics/img-2.jpeg'),     width: 320,     height: 212,
  },
  
    {
      type: 'image',src:require('./pics/img-3.jpeg'),    width: 320,    height: 212,
  },
  {
    type: 'image',src:require('./pics/img-4.jpeg'),
    width: 320,
    height: 213,
  },
  {
    type: 'image',src:require('./pics/img-5.webp'),
    width: 320,
    height: 183,
  },
  
    {
      type: 'image',src:require('./pics/img-6.webp'),
    width: 240,
    height: 320,
  
  },
  
    {
      type: 'image',src:require('./pics/img-7.webp'), 
      width: 320,
      height: 190,
    
  },
  
    {
      type: 'image',src:require('./pics/img-8.webp'), width: 320, height: 148,
  },
  
    {type: 'image',src:require('./pics/img-9.webp'),
    width: 320,
    height: 213,
  },
  
    {type: 'image',src:require('./pics/img-10.webp'),
    width: 248,
    height: 320,
  },
];

