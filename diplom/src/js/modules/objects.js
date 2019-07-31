let elections = {
  votingHolded: false,
  crimeMaked: false,
  person: {
    name: '',
    age: null,
    sex: '',
    select: null,
    bio: '',
    skin: null,
    hair: null,
    clothes: null
  },
  sliders: {
    skin: {
      currentIndex: 1,
      slides: document.querySelectorAll('.skin .skin-color'),
      prevBtn: document.querySelector('.custom-style .skin .prev'),
      nextBtn: document.querySelector('.custom-style .skin .next')
    },
    hair: {
      currentIndex: 1,
      block: document.querySelector('.hair'),
      slides: null,
      prevBtn: document.querySelector('.custom-style .hair .prev'),
      nextBtn: document.querySelector('.custom-style .hair .next')
    },
    clothes: {
      currentIndex: 1,
      block: document.querySelector('.clothes'),
      slides: null,
      prevBtn: document.querySelector('.custom-style .clothes .prev'),
      nextBtn: document.querySelector('.custom-style .clothes .next')
    } 
  },
  pictures: {
    skin: {
      men: [
        'url(../img/skin/skin-1.png) center/cover no-repeat',
        'url(../img/skin/skin-2.png) center/cover no-repeat',
        'url(../img/skin/skin-3.png) center/cover no-repeat',
      ],
      women: [
        'url(../img/skin/skin-4.png) center/cover no-repeat',
        'url(../img/skin/skin-5.png) center/cover no-repeat',
        'url(../img/skin/skin-6.png) center/cover no-repeat',
      ]
    },
    hair: {
      men: [
        'url(../img/hair/construct/hair-1.png) center/cover no-repeat',
        'url(../img/hair/construct/hair-2.png) center/cover no-repeat',
        'url(../img/hair/construct/hair-3.png) center/cover no-repeat',
      ],
      women: [
        'url(../img/hair/construct/hair-4.png) center/cover no-repeat',
        'url(../img/hair/construct/hair-5.png) center/cover no-repeat',
        'url(../img/hair/construct/hair-6.png) center/cover no-repeat',
      ]
    },
    clothes: {
      men: [
        'url(../img/clothes/construct/clothes-1.png) center/cover no-repeat',
        'url(../img/clothes/construct/clothes-2.png) center/cover no-repeat',
        'url(../img/clothes/construct/clothes-3.png) center/cover no-repeat',
      ],
      women: [
        'url(../img/clothes/construct/clothes-4.png) center/cover no-repeat',
        'url(../img/clothes/construct/clothes-5.png) center/cover no-repeat',
        'url(../img/clothes/construct/clothes-6.png) center/cover no-repeat',
      ]
    }
  }
};

export default elections;