<template>
    <div id="app" class="container">
        <div class="col-sm-12">
            <div class="jumbotron">
                <h1 class="display-4">Welcome!</h1>
                <p class="lead">ポートフォリオ・ページへようこそ！</p>
                <hr class="my-4">
                <p class="text-align:left;">このページはポートフォリオとして制作したウェブページです．フロントエンドデザインには，Bootstrapフレームワークを含めたCSSを用いました．また，inputフォームを活用するため，JavaScript・Vueを使い，簡単なコメントコーナーも作ってみました．良ければ最後まで見ていってください．よろしくお願いいたします．</p>
            </div>
        </div>
        <div class="col-sm-12 fade-in-bottom">
            なんかふわっと現れるやーつ
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    e: '#app',
    methods: {
        handleScroll: function (evt:Event, el:Element) {
            if (window.scrollY > 50) {
                el.setAttribute(
                    'style',
                    'opacity: 1; transform: translate3d(0, -10px, 0)'
                );
            }
            return window.scrollY > 100;
        }
    }
});
</script>
<style>
/*下からフェードイン*/
.fade-in-bottom {
   opacity: 0;
   animation-name: fadein-bottom;
   animation-duration: 1.5s;
   animation-timing-function: ease-out;
   animation-fill-mode: forwards;
}
@keyframes fadein-bottom {
   0% {
      opacity: 0;
      transform: translateY(20px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }
}
</style>