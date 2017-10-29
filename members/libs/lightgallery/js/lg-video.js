/**!
 * lg-video.js | 0.0.1 | August 1st 2016
 * http://sachinchoolur.github.io/lg-video.js
 * Copyright (c) 2016 Sachin N; 
 * @license Apache 2.0 
 */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgVideo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){="" (function="" (global,="" factory)="" {="" if="" (typeof="" define="==" "function"="" &&="" define.amd)="" define([],="" factory);="" }="" else="" exports="" !="=" "undefined")="" factory();="" var="" mod="{" exports:="" {}="" };="" global.lgvideo="mod.exports;" })(this,="" function="" ()="" 'use="" strict';="" _extends="Object.assign" ||="" (target)="" for="" (var="" i="1;" <="" arguments.length;="" i++)="" source="arguments[i];" key="" in="" source)="" (object.prototype.hasownproperty.call(source,="" key))="" target[key]="source[key];" return="" target;="" videodefaults="{" videomaxwidth:="" '855px',="" youtubeplayerparams:="" false,="" vimeoplayerparams:="" dailymotionplayerparams:="" vkplayerparams:="" videojs:="" videojsoptions:="" video="function" video(element)="" this.el="element;" this.core="window.lgData[this.el.getAttribute('lg-uid')];" this.core.s="_extends({}," videodefaults,="" this.core.s);="" this.videoloaded="false;" this.init();="" this;="" video.prototype.init="function" _this="this;" event="" triggered="" when="" url="" found="" without="" poster="" utils.on(_this.core.el,="" 'hasvideo.lgtm',="" (event)="" _this.core.___slide[event.detail.index].queryselector('.lg-video').insertadjacenthtml('beforeend',="" _this.loadvideo(event.detail.src,="" 'lg-object',="" true,="" event.detail.index,="" event.detail.html));="" (event.detail.html)="" (_this.core.s.videojs)="" try="" videojs(_this.core.___slide[event.detail.index].queryselector('.lg-html5'),="" _this.core.s.videojsoptions,="" (!_this.videoloaded)="" this.play();="" });="" catch="" (e)="" console.error('make="" sure="" you="" have="" included="" videojs');="" _this.core.___slide[event.detail.index].queryselector('.lg-html5').play();="" set="" max="" width="" 'onaferappendslide.lgtm',="" (_this.core.___slide[event.detail.index].queryselector('.lg-video-cont'))="" _this.core.___slide[event.detail.index].queryselector('.lg-video-cont').style.maxwidth="_this.core.s.videoMaxWidth;" _this.videoloaded="true;" loadonclick="function" loadonclick($el)="" check="" slide="" has="" (utils.hasclass($el.queryselector('.lg-object'),="" 'lg-has-poster')="" $el.queryselector('.lg-object').style.display="" 'none')="" already="" element="" present="" (!utils.hasclass($el,="" 'lg-has-video'))="" utils.addclass($el,="" 'lg-video-playing="" lg-has-video');="" _src;="" _html;="" _loadvideo="function" _loadvideo(_src,="" _html)="" $el.queryselector('.lg-video').insertadjacenthtml('beforeend',="" _this.loadvideo(_src,="" '',="" _this.core.index,="" _html));="" (_html)="" videojs(_this.core.___slide[_this.core.index].queryselector('.lg-html5'),="" _this.core.___slide[_this.core.index].queryselector('.lg-html5').play();="" (_this.core.s.dynamic)="" _src="_this.core.s.dynamicEl[_this.core.index].src;" _html="_this.core.s.dynamicEl[_this.core.index].html;" _html);="" _this.core.items[_this.core.index].getattribute('data-src');="" $tempimg="$el.querySelector('.lg-object');" $el.queryselector('.lg-video').appendchild($tempimg);="" @todo="" loading="" icon="" html5="" videos="" also="" showing="" the="" indicator="" while="" (!utils.hasclass($el.queryselector('.lg-video-object'),="" 'lg-html5'))="" utils.removeclass($el,="" 'lg-complete');="" utils.on($el.queryselector('.lg-video-object'),="" 'load.lg="" error.lg',="" youtubeplayer="$el.querySelector('.lg-youtube');" vimeoplayer="$el.querySelector('.lg-vimeo');" dailymotionplayer="$el.querySelector('.lg-dailymotion');" html5player="$el.querySelector('.lg-html5');" (youtubeplayer)="" youtubeplayer.contentwindow.postmessage('{"event":"command","func":"playvideo","args":""}',="" '*');="" (vimeoplayer)="" $f(vimeoplayer).api('play');="" froogaloop2="" js');="" (dailymotionplayer)="" dailymotionplayer.contentwindow.postmessage('play',="" (html5player)="" videojs(html5player).play();="" html5player.play();="" 'lg-video-playing');="" (_this.core.docss()="" _this.core.items.length=""> 1 && (_this.core.s.enableSwipe && _this.core.isTouch || _this.core.s.enableDrag && !_this.core.isTouch)) {
            utils.on(_this.core.el, 'onSlideClick.lgtm', function () {
                var $el = _this.core.___slide[_this.core.index];
                loadOnClick($el);
            });
        } else {

            // For IE 9 and bellow
            for (var i = 0; i < _this.core.___slide.length; i++) {

                /*jshint loopfunc: true */
                (function (index) {
                    utils.on(_this.core.___slide[index], 'click.lg', function () {
                        loadOnClick(_this.core.___slide[index]);
                    });
                })(i);
            }
        }

        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function (event) {

            var $videoSlide = _this.core.___slide[event.detail.prevIndex];
            var youtubePlayer = $videoSlide.querySelector('.lg-youtube');
            var vimeoPlayer = $videoSlide.querySelector('.lg-vimeo');
            var dailymotionPlayer = $videoSlide.querySelector('.lg-dailymotion');
            var vkPlayer = $videoSlide.querySelector('.lg-vk');
            var html5Player = $videoSlide.querySelector('.lg-html5');
            if (youtubePlayer) {
                youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } else if (vimeoPlayer) {
                try {
                    $f(vimeoPlayer).api('pause');
                } catch (e) {
                    console.error('Make sure you have included froogaloop2 js');
                }
            } else if (dailymotionPlayer) {
                dailymotionPlayer.contentWindow.postMessage('pause', '*');
            } else if (html5Player) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(html5Player).pause();
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    html5Player.pause();
                }
            }if (vkPlayer) {

                vkPlayer.setAttribute('src', vkPlayer.getAttribute('src').replace('&autoplay', '&noplay'));
            }

            var _src;
            if (_this.core.s.dynamic) {
                _src = _this.core.s.dynamicEl[event.detail.index].src;
            } else {
                _src = _this.core.items[event.detail.index].getAttribute('href') || _this.core.items[event.detail.index].getAttribute('data-src');
            }

            var _isVideo = _this.core.isVideo(_src, event.detail.index) || {};
            if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
                utils.addClass(_this.core.outer, 'lg-hide-download');
            }

            //$videoSlide.addClass('lg-complete');
        });

        utils.on(_this.core.el, 'onAfterSlide.lgtm', function (event) {
            utils.removeClass(_this.core.___slide[event.detail.prevIndex], 'lg-video-playing');
        });
    };

    Video.prototype.loadVideo = function (src, addClass, noposter, index, html) {
        var video = '';
        var autoplay = 1;
        var a = '';
        var isVideo = this.core.isVideo(src, index) || {};

        // Enable autoplay for first video if poster doesn't exist
        if (noposter) {
            if (this.videoLoaded) {
                autoplay = 0;
            } else {
                autoplay = 1;
            }
        }

        if (isVideo.youtube) {

            a = '?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';
            if (this.core.s.youtubePlayerParams) {
                a = a + '&' + utils.param(this.core.s.youtubePlayerParams);
            }

            video = '<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
        } else if (isVideo.vimeo) {

            a = '?autoplay=' + autoplay + '&api=1';
            if (this.core.s.vimeoPlayerParams) {
                a = a + '&' + utils.param(this.core.s.vimeoPlayerParams);
            }

            video = '<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315" src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen></iframe>';
        } else if (isVideo.dailymotion) {

            a = '?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';
            if (this.core.s.dailymotionPlayerParams) {
                a = a + '&' + utils.param(this.core.s.dailymotionPlayerParams);
            }

            video = '<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
        } else if (isVideo.html5) {
            var fL = html.substring(0, 1);
            if (fL === '.' || fL === '#') {
                html = document.querySelector(html).innerHTML;
            }

            video = html;
        } else if (isVideo.vk) {

            a = '&autoplay=' + autoplay;
            if (this.core.s.vkPlayerParams) {
                a = a + '&' + utils.param(this.core.s.vkPlayerParams);
            }

            video = '<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="http://vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';
        }

        return video;
    };

    Video.prototype.destroy = function () {
        this.videoLoaded = false;
    };

    window.lgModules.video = Video;
});

},{}]},{},[1])(1)
});</r.length;o++)s(r[o]);return>