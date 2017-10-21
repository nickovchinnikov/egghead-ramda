const {invoker, compose, constructN} = R

// $('#sample')
//   .animate({left:'250px'})
//   .animate({left:'10px'})
//   .slideUp()

const animate = invoker(1, 'animate');
const slide = invoker(0, 'slideUp');
const jq = constructN(1, $);

const animateDiv = compose(
    slide,
    animate({left:'10px'}),
    animate({left:'250px'}),
    jq
);

animateDiv('#sample');
animateDiv('#sample2');