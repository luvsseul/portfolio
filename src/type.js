'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 100,
})
    .move(-6)
    .type('웹퍼블리셔& ')
    .move(null, { to: 'END' })
    .pause(1000)
    .delete()
    .type('프론트엔드')
    .pause(1000)
    .delete()
    .go();