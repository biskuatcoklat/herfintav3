/*globals window, $, clearInterval, setInterval */

$(function () {
  'use strict';

  var          hl,
         newsList = $('.news-headlines'),
    newsListItems = $('.news-headlines li'),
    firstNewsItem = $('.news-headlines li:nth-child(1)'),
      newsPreview = $('.news-preview'),
          elCount = $('.news-headlines').children(':not(.highlight)').length,
         vPadding = (parseInt(firstNewsItem.css('padding-top').replace('px', ''), 10)) +
                    (parseInt(firstNewsItem.css('padding-bottom').replace('px', ''), 10)),
          vMargin = (parseInt(firstNewsItem.css('margin-top').replace('px', ''), 10)) +
                    (parseInt(firstNewsItem.css('margin-bottom').replace('px', ''), 10)),
         cPadding = (parseInt($('.news-content').css('padding-top').replace('px', ''), 10)) +
                    (parseInt($('.news-content').css('padding-bottom').replace('px', ''), 10)),
            speed = 5000, // this is the speed of the switch in milliseconds
          myTimer = null,
         siblings = null,
      totalHeight = null,
          indexEl = 1,
                i = null;

  // the css animation gets added dynamicallly so 
  // that the news item sizes are measured correctly
  // (i.e. not in mid-animation)
  // Also, appending the highlight item to keep HTML clean
  hl = $('.highlight');
  newsListItems.addClass('nh-anim');

  function doEqualHeight(c) {

    if (newsPreview.height() < newsList.height()) {
      newsPreview.height(newsList.height());
    } else if ((newsList.height() < newsPreview.height()) && (newsList.height() > parseInt(newsPreview.css('min-height').replace('px', ''), 10))) {
      newsPreview.height(newsList.height());
    }

    if ($('.news-content:nth-child(' + c + ')').height() > newsPreview.height()) {
      newsPreview.height($('.news-content:nth-child(' + c + ')').height() + cPadding);
    }
  }

  /*function doTimedSwitch() {

    myTimer = setInterval(function () {
      if (($('.selected').index() + 1) === elCount) {
        firstNewsItem.trigger('click');
      } else {
        $('.selected').next(':not(.highlight)').trigger('click');
      }
    }, speed);

  }*/

  // when the user mouses over a news content item
  // the auto-switching will stop
  // $('.news-content').on('mouseover', function () {
  //  clearInterval(myTimer);
  // });

  // auto-switching starts again
  //$('.news-content').on('mouseout', function () {
  //  doTimedSwitch();
  //});

  function doClickItem() {

    newsListItems.on('click', function () {

      newsListItems.removeClass('selected');
      $(this).addClass('selected');

      siblings = $(this).prevAll();
      totalHeight = 0;

      // this loop calculates the height of individual elements, including margins/padding
      for (i = 0; i < siblings.length; i += 1) {
        totalHeight += $(siblings[i]).height();
        totalHeight += vPadding;
        totalHeight += vMargin;
      }

      // this moves the highlight vertically the distance calculated in the previous loop
      // and also corrects the height of the highlight to match the current selection
      hl.css({
        top: totalHeight,
        height: $(this).height() + vPadding
      });

      indexEl = $(this).index() + 1;

      $('.news-content:nth-child(' + indexEl + ')').siblings().removeClass('top-content');
      $('.news-content:nth-child(' + indexEl + ')').addClass('top-content');

      clearInterval(myTimer);
      // comment out doTimedSwitch() if you don't
      // want it to rotate automatically
     // doTimedSwitch();
      doEqualHeight(indexEl);
    });

  }

  function doWindowResize() {

    $(window).resize(function () {

      clearInterval(myTimer);
      // click is triggered to recalculate and fix the highlight position
      $('.selected').trigger('click');

    });

  }

  // this is where everything gets initialized
  doClickItem();
  doWindowResize();
  $('.selected').trigger('click');

});







$(function () {
  'use strict';

  var          hl,
         newsList = $('.news-headlines2'),
    newsListItems = $('.news-headlines2 li'),
    firstNewsItem = $('.news-headlines2 li:nth-child(1)'),
      newsPreview = $('.news-preview2'),
          elCount = $('.news-headlines2').children(':not(.highlight)').length,
         vPadding = (parseInt(firstNewsItem.css('padding-top').replace('px', ''), 10)) +
                    (parseInt(firstNewsItem.css('padding-bottom').replace('px', ''), 10)),
          vMargin = (parseInt(firstNewsItem.css('margin-top').replace('px', ''), 10)) +
                    (parseInt(firstNewsItem.css('margin-bottom').replace('px', ''), 10)),
         cPadding = (parseInt($('.news-content2').css('padding-top').replace('px', ''), 10)) +
                    (parseInt($('.news-content2').css('padding-bottom').replace('px', ''), 10)),
            speed = 5000, // this is the speed of the switch in milliseconds
          myTimer = null,
         siblings = null,
      totalHeight = null,
          indexEl = 1,
                i = null;

  // the css animation gets added dynamicallly so 
  // that the news item sizes are measured correctly
  // (i.e. not in mid-animation)
  // Also, appending the highlight item to keep HTML clean
  hl = $('.highlight');
  newsListItems.addClass('nh-anim');

  function doEqualHeight(c) {

    if (newsPreview.height() < newsList.height()) {
      newsPreview.height(newsList.height());
    } else if ((newsList.height() < newsPreview.height()) && (newsList.height() > parseInt(newsPreview.css('min-height').replace('px', ''), 10))) {
      newsPreview.height(newsList.height());
    }

    if ($('.news-content2:nth-child(' + c + ')').height() > newsPreview.height()) {
      newsPreview.height($('.news-content2:nth-child(' + c + ')').height() + cPadding);
    }
  }

  /*function doTimedSwitch() {

    myTimer = setInterval(function () {
      if (($('.selected').index() + 1) === elCount) {
        firstNewsItem.trigger('click');
      } else {
        $('.selected').next(':not(.highlight)').trigger('click');
      }
    }, speed);

  }*/

  // when the user mouses over a news content item
  // the auto-switching will stop
  // $('.news-content').on('mouseover', function () {
  //  clearInterval(myTimer);
  // });

  // auto-switching starts again
  //$('.news-content').on('mouseout', function () {
  //  doTimedSwitch();
  //});

  function doClickItem() {

    newsListItems.on('click', function () {

      newsListItems.removeClass('selected');
      $(this).addClass('selected');

      siblings = $(this).prevAll();
      totalHeight = 0;

      // this loop calculates the height of individual elements, including margins/padding
      for (i = 0; i < siblings.length; i += 1) {
        totalHeight += $(siblings[i]).height();
        totalHeight += vPadding;
        totalHeight += vMargin;
      }

      // this moves the highlight vertically the distance calculated in the previous loop
      // and also corrects the height of the highlight to match the current selection
      hl.css({
        top: totalHeight,
        height: $(this).height() + vPadding
      });

      indexEl = $(this).index() + 1;

      $('.news-content2:nth-child(' + indexEl + ')').siblings().removeClass('top-content2');
      $('.news-content2:nth-child(' + indexEl + ')').addClass('top-content2');

      clearInterval(myTimer);
      // comment out doTimedSwitch() if you don't
      // want it to rotate automatically
     // doTimedSwitch();
      doEqualHeight(indexEl);
    });

  }

  function doWindowResize() {

    $(window).resize(function () {

      clearInterval(myTimer);
      // click is triggered to recalculate and fix the highlight position
      $('.selected').trigger('click');

    });

  }

  // this is where everything gets initialized
  doClickItem();
  doWindowResize();
  $('.selected').trigger('click');

});