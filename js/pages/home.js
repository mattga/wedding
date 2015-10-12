;(function($) {
  'use strict';

  var pageBag = (function() {

    function init(opts) {
      $overlay = $(opts.overlay);
      $leftPanel = $(opts.leftPanel);
      $rightPanel = $(opts.rightPanel);

      $detailBtn = $(opts.detailBtn);
      $rsvpBtn = $(opts.rsvpBtn);
      $galleryBtn = $(opts.galleryBtn);
      $registryBtn = $(opts.registryBtn);

      $panelXBtn = $(opts.panelXBtn);

      $gallery = $(opts.gallery);
      $registry = $(opts.registry);

      handleBtnClick();
    }

    function handleBtnClick () {
      $detailBtn.on('click', function() {
        $detailBtn.addClass('btn-nav_underline');
        $overlay.removeClass('hideVisually');
        $overlay.addClass('overlay');
        $leftPanel.addClass('is-active');
      });

      $rsvpBtn.on('click', function() {
        $rsvpBtn.addClass('btn-nav_underline');
        $overlay.removeClass('hideVisually');
        $overlay.addClass('overlay');
        $rightPanel.addClass('is-active');
      });

      $galleryBtn.on('click', function() {
        $galleryBtn.addClass('btn-nav_underline');
        $overlay.removeClass('hideVisually');
        $overlay.addClass('overlay');
        $gallery.addClass('is-active');
      });

      $registryBtn.on('click', function() {
        $registryBtn.addClass('btn-nav_underline');
        $overlay.removeClass('hideVisually');
        $overlay.addClass('overlay');
        $registry.addClass('is-active');
      });

      $panelXBtn.on('click', closePanels);
      $overlay.on('click', closePanels);
    }

    function closePanels() {
      console.log('closePanels');
      $overlay.addClass('hideVisually');
      $overlay.removeClass('overlay');
      $leftPanel.add($rightPanel).add($gallery).add($registry).removeClass('is-active');
      $detailBtn.add($rsvpBtn).add($galleryBtn).add($registryBtn).removeClass('btn-nav_underline');
    }

    // DOM refs
    var $overlay,
    $leftPanel,
    $rightPanel,
    $detailBtn,
    $rsvpBtn,
    $galleryBtn,
    $registryBtn,
    $panelXBtn,
    $gallery,
    $registry;

    var publicAPI = {
      init: init
    };

    return publicAPI;
  })();


  pageBag.init({
    overlay: '.js-p-home-overlay',
    leftPanel: '.js-p-home-panel-left',
    rightPanel: '.js-p-home-panel-right',
    detailBtn: '.js-p-home-details-btn',
    rsvpBtn: '.js-p-home-rsvp-btn',
    galleryBtn: '.js-p-home-gallery-btn',
    registryBtn: '.js-p-home-registry-btn',
    panelXBtn: '.js-p-home-panel-x-btn',
    gallery: '.js-p-home-gallery',
    registry: '.js-p-home-registry'
  });
})(jQuery);