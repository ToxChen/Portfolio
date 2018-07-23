$(document).ready(function() {

  //網頁載入完畢後body加入Class('show')
  $('body').addClass('show');

  //wow.js在寬度>992px時才觸發
  if ($(window).width() > 992) {
		new WOW().init();
	}

  //點擊滑動到特定區塊
  $('.arrow').click(function(e){

    e.preventDefault();
    $('html,body').animate({
      scrollTop:$('#works').offset().top
    }, 800, 'swing');

  });

  //當滑動到特定區塊時加入特定Class
  $(window).scroll(function() {

    if($(window).scrollTop() >= $('#works').offset().top){
      $('.scroll a').addClass('arrow-top');
    }else{
      $('.scroll a').removeClass('arrow-top');
    }

  });
  
});


var vm = new Vue({
  el: '#app',
  data: {
    works: [
      {
        title: 'THE F2E DESIGN',
        category: 'Web Design',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://www.behance.net/gallery/67447679/THE-F2E-Challenge',
        img: './images/THE-F2E.jpg'
      },
      {
        title: 'DAILY UI',
        category: 'Web、App Design',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://www.behance.net/azx011014fa1e',
        img: './images/DailyUI.jpg'
      },
      {
        title: '六角西餐廳',
        category: 'Web Development',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://toxchen.github.io/HexRestaurant/',
        img: './images/HexRestaurant.png'
      },
      {
        title: '高雄旅遊景點',
        category: 'Web Development',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://toxchen.github.io/KaohsiungTravel/',
        img: './images/KaohsiungTravel.png'
      },
      {
        title: 'YANGBO ADVENTURE',
        category: 'UI Design、3D Model、Motion Design',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: 'https://www.behance.net/gallery/67490421/YangBo-Adventure-',
        img: './images/YangBoAdventure.jpg'
      }
    ]
  }
})