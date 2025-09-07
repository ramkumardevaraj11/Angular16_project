import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Start with page out of view
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0
        })
      ], { optional: true }),

      // Fade out the old page
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-30px)' }))
      ], { optional: true }),

      // Fade in the new page
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ], { optional: true })
    ])
  ]);
