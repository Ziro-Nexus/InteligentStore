import BannerAnim from "rc-banner-anim";
import React from "react";
import Element from "rc-banner-anim";
import BGElement from "rc-banner-anim/typings/BgElement";
import TweenOne from "rc-banner-anim/typings/Element"
Carrucel ( ){
<BannerAnim>
  <Element key="a">
    <BGElement key="bg" style={{ background: 'url(../image/patronHacker.jpg)' }}/>
    <TweenOne key='0'>test text</TweenOne>
  </Element>
  <Element key="b">
    <BGElement key="bg" style={{ background: 'url(../image/patronHacker.jpg)' }}/>
    <TweenOne key='0'>test text</TweenOne>
  </Element>
</BannerAnim>

}
