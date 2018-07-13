import { TimelineMax } from 'gsap';

var tl = new TimelineMax;

tl
  .fromTo('.js-logo', 1, { y: -200, opacity: 0}, { y: 0, opacity: 1})
  .staggerFromTo('.js-btn span', 1.5, {y:-200,opacity:0},{y:0,opacity:1},0.1,0);
